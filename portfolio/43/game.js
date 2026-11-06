'use strict';
/* Buy a Piece of the City — deliberately fictional, deterministic educational game.
   Units: investor account in USD, city financials in millions of USD. */
(() => {
  const FACE = 20_000_000;
  const COUPON = .052;
  const MATURITY = 8;
  const INITIAL_CASH = 25_000;
  const FEE = {
    traditional: { fixed: 250_000, variable: .012, annual: 80_000, min: 1_000, spread: .015, commission: .004 },
    digital: { fixed: 400_000, variable: .0065, annual: 105_000, min: 100, spread: .008, commission: .002 }
  };
  const EVENT = {
    steady: { headline: 'Steady waters', deltaRate: 0, deltaCredit: -.0005, demand: 1, expense: 1, liquidity: .0, recovery: .02, note: 'A quiet year helps the city replenish its reserves.' },
    rates: { headline: 'Rates leap by 200 basis points', deltaRate: .02, deltaCredit: .001, demand: .985, expense: 1.02, liquidity: .15, recovery: 0, note: 'Bond prices reprice lower because investors now demand a higher yield.' },
    stress: { headline: 'The port loses a major employer', deltaRate: 0, deltaCredit: .017, demand: .79, expense: 1.04, liquidity: .3, recovery: -.10, note: 'Tax receipts fall and credit concerns widen the yield spread.' },
    liquidity: { headline: 'Everyone wants to sell', deltaRate: .001, deltaCredit: .0025, demand: .96, expense: 1.02, liquidity: 1.5, recovery: -.03, note: 'The bid–ask spread widens, creating a selling penalty even when promised cash flows stay unchanged.' },
    recovery: { headline: 'The harbor booms again', deltaRate: -.009, deltaCredit: -.004, demand: 1.10, expense: 1.005, liquidity: -.3, recovery: .12, note: 'Stronger tax receipts and easier markets improve the city’s outlook.' }
  };
  const $ = id => document.getElementById(id);
  const money = n => (n < 0 ? '−' : '') + '$' + Math.abs(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
  const money2 = n => (n < 0 ? '−' : '') + '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const million = n => (n < 0 ? '−' : '') + '$' + Math.abs(n).toFixed(2) + 'M';
  const pct = n => (100*n).toFixed(2) + '%';
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const round = n => Math.round(n * 100) / 100;
  // Cash flows of a fixed-rate annual coupon bond, market quoted per $100 of face.
  function bondPrice(marketYield, remaining) {
    if (remaining <= 0) return 0;
    const y = Math.max(.00001, marketYield);
    let pv = 0;
    for (let t = 1; t <= remaining; t++) pv += (COUPON*100)/(1+y)**t;
    return pv + 100/(1+y)**remaining;
  }
  // Modified duration = Macaulay duration / (1+yield), weighted by PV of all promised CFs.
  function modifiedDuration(marketYield, remaining) {
    if (remaining <= 0) return 0;
    const y = Math.max(.00001, marketYield);
    let pv = 0, weighted = 0;
    for (let t = 1; t <= remaining; t++) {
      const cf = COUPON * 100 + (t===remaining ? 100 : 0);
      const discounted = cf/(1+y)**t;
      pv += discounted; weighted += t*discounted;
    }
    return weighted/pv/(1+y);
  }
  function issueCost(route) { return FEE[route].fixed + FEE[route].variable*FACE; }
  function toyHash(prev, text) {
    // Purposefully NOT a cryptographic hash. An animated teaching analogy only.
    let n = 2166136261;
    for (const c of (prev+'|'+text)) { n ^= c.charCodeAt(0); n = Math.imul(n, 16777619); }
    return (n>>>0).toString(16).padStart(8,'0').toUpperCase();
  }
  function initialState(route='digital') {
    const s = {
      route, year: 0, cash: INITIAL_CASH, face: 0, couponReceived: 0,
      benchmark: .032, credit: .020, liquidity: 0, lastEvent: 'OPENING',
      revenue: 10.50, costs: 6.40, sinking: 0, cityCash: 2.0 - (issueCost(route)/1e6),
      defaulted: false, recoveredPrincipal: 0, gameOver: false,
      ledger: [], history: [], earnings: [],
    };
    // On day zero the bridge is constructed from the bond proceeds; fees are paid from reserves.
    append(s, 'ISSUANCE', 'City sold $20M of 8-year, 5.2% bonds', `Net to city ${million(20-issueCost(route)/1e6)}`);
    snapshot(s);
    return s;
  }
  function append(s, type, description, detail) {
    const prior = s.ledger[0]?.hash ?? 'GENESIS';
    const id = `${s.year}|${type}|${description}|${detail}|${s.ledger.length}`;
    s.ledger.unshift({ year: s.year, type, description, detail, hash: toyHash(prior,id), parent:prior });
  }
  function yieldToMaturity(s) { return clamp(s.benchmark+s.credit, .005, .30); }
  function middlePrice(s) { return s.year===0 ? 100 : bondPrice(yieldToMaturity(s), MATURITY-s.year); }
  function spread(s) { return FEE[s.route].spread * (1 + s.liquidity); }
  function quote(s, side, face) {
    const center = middlePrice(s);
    if (s.year===0) return { price: 100, nominal: face, fee: 0, cash: face, depth: Infinity };
    const half = spread(s)/2;
    const depth = s.route==='digital' ? 12_000 : 25_000;
    // Simple, explicit liquidity impact: above indicative depth, up to 2% price impact.
    const impact = .02 * clamp(Math.max(0,face-depth)/depth,0,1);
    const price = center*(side==='buy' ? 1+half+impact : 1-half-impact);
    const nominal = face*price/100;
    const fee = nominal*FEE[s.route].commission;
    return { price, nominal, fee, cash: side==='buy' ? nominal+fee : nominal-fee, depth };
  }
  function snapshot(s) {
    s.history.push({ year: s.year, value: s.cash + s.face*middlePrice(s)/100 });
  }
  let state = initialState();
  function say(message, isError=false) { $('toast').textContent=message; $('toast').style.color=isError?'#c8343e':'#273ce6'; }
  function amount() {
    const value = Number($('tradeAmount').value);
    if (!Number.isFinite(value) || value <= 0) { say('Enter a positive bond face value.',true); return null; }
    if (!Number.isSafeInteger(value)) { say('Enter a whole-dollar face value.',true); return null; }
    const step = FEE[state.route].min;
    if (value % step !== 0) { say(`This market trades in multiples of ${money(step)} face value.`,true); return null; }
    return value;
  }
  function trade(side) {
    if (state.gameOver) { say('The bond has matured. Start a new experiment.',true); return; }
    const face = amount(); if (face===null) return;
    if (side==='sell' && face>state.face) { say('You cannot sell more bonds than you own.',true); return; }
    const q = quote(state,side,face);
    if (side==='buy') {
      if (q.cash > state.cash+1e-6) { say('Not enough available cash for this order, including fees.',true); return; }
      state.cash=round(state.cash-q.cash); state.face+=face;
      append(state,'BUY',`You bought ${money(face)} face value`,`${money2(q.cash)} paid${state.year>0?' incl. fees':''}`);
      say(`Order filled: ${money(face)} face purchased for ${money2(q.cash)}.`);
    } else {
      state.cash=round(state.cash+q.cash); state.face-=face;
      append(state,'SELL',`You sold ${money(face)} face value`,`${money2(q.cash)} received net`);
      say(`Sale completed: ${money2(q.cash)} proceeds after trading friction.`);
    }
    state.history[state.history.length-1].value=state.cash+state.face*middlePrice(state)/100;
    render();
  }
  function advance() {
    if (state.gameOver) return;
    const kind = document.querySelector('input[name="scenario"]:checked')?.value || 'steady';
    const ev = EVENT[kind];
    state.year++;
    state.lastEvent=ev.headline;
    state.benchmark=clamp(state.benchmark+ev.deltaRate,.005,.14);
    state.credit=clamp(state.credit+ev.deltaCredit,.008,.18);
    state.liquidity=clamp(.55*state.liquidity+ev.liquidity,0,3);
    // City costs include bridge maintenance and route operating expense. Revenues compound
    // from the previous year, then respond to the chosen event. A stress year can persist.
    state.revenue=state.revenue*1.022*ev.demand;
    state.costs=state.costs*1.024*ev.expense;
    const operatingSurplus=state.revenue-state.costs;
    const annualCoupon=FACE*COUPON/1e6;
    const coverage=operatingSurplus/annualCoupon;
    const annualAdmin=FEE[state.route].annual/1e6;
    const afterDebt=operatingSurplus-annualCoupon-annualAdmin;
    // Pay this year's coupon if city can cover it from operating cash plus available reserves.
    const couponPool=Math.max(0,operatingSurplus+state.cityCash);
    const paidRatio=clamp(couponPool/annualCoupon,0,1);
    state.cityCash=Math.max(0,state.cityCash+operatingSurplus-annualCoupon*paidRatio-annualAdmin);
    const received=round(state.face*COUPON*paidRatio);
    state.cash=round(state.cash+received);
    state.couponReceived=round(state.couponReceived+received);
    append(state,'COUPON',`Annual coupon paid (${(paidRatio*100).toFixed(1)}%)`, `${money2(received)} to your account`);
    // City saves for the bullet maturity. Earmarked reserve does not pay coupon and cannot be negative.
    // After adding operating cash, transfer at most 2.5M annually to the sinking fund.
    const save=clamp(state.cityCash,0,2.5);
    state.cityCash-=save;
    state.sinking+=save;
    // The city's credit spread reacts mechanically to fiscal health (not a rating model).
    if (coverage<1.25) state.credit=clamp(state.credit + .004,.008,.18);
    else if (coverage>3) state.credit=clamp(state.credit - .0005,.008,.18);
    append(state,'HEADLINE',ev.headline,ev.note);
    if (state.year===MATURITY) {
      // Bullet principal: dedicated fund plus remaining reserves, available to all bondholders.
      const available=state.sinking+state.cityCash;
      const ratio=clamp(available/20,0,1);
      const repayment=round(state.face*ratio);
      state.cash=round(state.cash+repayment);
      state.recoveredPrincipal=repayment;
      state.defaulted=ratio<.999999;
      state.sinking=Math.max(0,state.sinking-20*ratio);
      state.cityCash=Math.max(0,state.cityCash-Math.max(0,20*ratio-(available-state.cityCash)));
      append(state,'MATURITY',state.defaulted?'Principal shortfall: fictional restructuring':'Principal repaid at par',`Recovery ${(ratio*100).toFixed(1)}%; your repayment ${money2(repayment)}`);
      state.face=0; state.gameOver=true;
    }
    state.earnings.push({year:state.year,headline:ev.headline,coverage,operatingSurplus,paidRatio});
    snapshot(state);
    say(state.gameOver ? `Eight-year experiment complete. Ending portfolio: ${money(state.cash)}.` : `${ev.headline}. You received ${money2(received)} in coupons. ${ev.note}`);
    render();
  }
  function choose(route) {
    if (route===state.route) return;
    if (state.year>0 || state.face>0) {
      say('Market architecture is set at issuance. Restart to compare the other route.',true); return;
    }
    state=initialState(route);
    $('tradeAmount').value=route==='traditional'?1000:100;
    say('Market architecture updated. The bridge obligation and coupon remain unchanged.');
    render();
  }
  function updateOrder() {
    const v=Number($('tradeAmount').value);
    if (!Number.isFinite(v)||v<=0) {$('orderVal').textContent='—';return;}
    $('orderVal').textContent=money2(quote(state,'buy',v).cash);
  }
  function renderChart() {
    const hist=state.history;
    const all=hist.map(h=>h.value);
    const minimum=Math.min(0,...all)*.98;
    const maximum=Math.max(...all,INITIAL_CASH)*1.10;
    const X=i=>24+(i/(Math.max(MATURITY,hist.length-1)))*532;
    const Y=v=>146-((v-minimum)/(Math.max(1,maximum-minimum)))*118;
    const path=hist.map((h,i)=>`${i===0?'M':'L'}${X(i).toFixed(1)},${Y(h.value).toFixed(1)}`).join(' ');
    $('chartLine').setAttribute('d',path);
    $('chartArea').setAttribute('d',path+` L${X(hist.length-1).toFixed(1)},146 L24,146 Z`);
    $('chartPoints').replaceChildren();
    for (const [i,h] of hist.entries()) {
      const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx',X(i));c.setAttribute('cy',Y(h.value));c.setAttribute('r','4');c.setAttribute('fill','#f26e55');
      const title=document.createElementNS('http://www.w3.org/2000/svg','title');title.textContent=`Year ${h.year}: ${money(h.value)}`;c.appendChild(title);$('chartPoints').appendChild(c);
    }
    $('chartEnd').textContent=`YEAR ${state.year}`;
  }
  function renderLedger() {
    const frag=document.createDocumentFragment();
    for (const item of state.ledger.slice(0,14)) {
      const row=document.createElement('div');row.className='ledger-row';
      const a=document.createElement('div'); const b=document.createElement('div');const c=document.createElement('div');
      const strong=document.createElement('strong');strong.textContent=item.type;
      const year=document.createElement('small');year.textContent=`YEAR ${item.year}`;a.append(strong,year);
      b.textContent=item.description;const detail=document.createElement('small');detail.textContent=item.detail;b.appendChild(detail);
      const hash=document.createElement('span');hash.className='hash';hash.textContent=state.route==='digital'?item.hash:'REGISTERED';c.appendChild(hash);
      row.append(a,b,c);frag.appendChild(row);
    }
    $('ledgerRows').replaceChildren(frag);
  }
  function render() {
    const route=state.route;const y=yieldToMaturity(state);const mid=middlePrice(state);
    const hold=state.cash+state.face*mid/100;
    $('traditionalBtn').classList.toggle('active',route==='traditional');$('traditionalBtn').setAttribute('aria-pressed',String(route==='traditional'));
    $('digitalBtn').classList.toggle('active',route==='digital');$('digitalBtn').setAttribute('aria-pressed',String(route==='digital'));
    $('traditionalCost').textContent=money(issueCost('traditional'));
    $('digitalCost').textContent=money(issueCost('digital'));
    $('traditionalNet').textContent=money(FACE-issueCost('traditional'));
    $('digitalNet').textContent=money(FACE-issueCost('digital'));
    const delta=issueCost('traditional')-issueCost('digital');
    $('costDelta').textContent=(delta>=0?'+':'−')+money(Math.abs(delta));
    $('yearBadge').textContent=`YEAR ${state.year} / ${MATURITY}`;
    $('cashVal').textContent=money(state.cash);$('faceVal').textContent=money(state.face);
    $('wealthVal').textContent=money(hold);$('couponVal').textContent=money(state.couponReceived);
    $('priceVal').textContent=state.gameOver?'MATURED':money2(mid);
    $('quotePrice').textContent=state.gameOver?'MATURED':money2(mid);
    $('durationVal').textContent=modifiedDuration(y,MATURITY-state.year).toFixed(2)+' yrs';
    $('yieldVal').textContent=pct(y);$('creditVal').textContent=Math.round(state.credit*10000)+' bps';
    $('spreadVal').textContent=state.year===0?'AT PAR':`${money2(quote(state,'sell',100).price)} / ${money2(quote(state,'buy',100).price)}`;
    $('unitLabel').textContent=state.year===0?'Issue price per $100 face':'Mid-market price per $100 face';
    $('tradeNote').textContent=state.year===0?'Year 0 primary purchases execute at par, with no investor fee.':state.gameOver?'Bonds have matured. No further trading.':`Secondary trades include ${(FEE[route].commission*100).toFixed(1)}% commission, a ${(spread(state)*100).toFixed(2)}% quoted spread and possible size impact.`;
    $('sceneStatus').textContent=state.gameOver?'BONDS MATURED':state.year===0?'BRIDGE FINANCING OPEN':state.lastEvent.toUpperCase();
    $('cityRevenue').textContent=million(state.revenue);$('cityCosts').textContent=million(state.costs);
    $('cityInterest').textContent=million(1.04);const dscr=(state.revenue-state.costs)/1.04;
    $('cityDscr').textContent=dscr.toFixed(2)+'×';$('cityFund').textContent=million(state.sinking);$('cityCash').textContent=million(state.cityCash);
    $('cityHealth').textContent=state.gameOver?(state.defaulted?'The city could not repay every dollar of principal at maturity. The investment lost value.':'The bond matured and the city repaid principal in full.') : dscr<1.25?'DANGER: The city has little room to cover its bond payments.':dscr<2?'CAUTION: City finances are tightening. Credit spreads may widen.':'The city currently earns enough to cover bond coupons, but it still must save for the principal payment.';
    $('nextYearTitle').textContent=state.gameOver?'The experiment is over.':`Ready for Year ${state.year+1}?`;
    $('nextYearText').textContent=state.gameOver?`Final account: ${money(state.cash)}. The market does not guarantee a profit.`:'Advance to collect coupons, update the municipal budget and reprice your holdings.';
    $('advanceBtn').disabled=state.gameOver;$('buyBtn').disabled=state.gameOver;$('sellBtn').disabled=state.gameOver;
    $('tradeAmount').min=FEE[route].min;$('tradeAmount').step=FEE[route].min;
    updateOrder();renderChart();renderLedger();
  }
  $('traditionalBtn').addEventListener('click',()=>choose('traditional'));
  $('digitalBtn').addEventListener('click',()=>choose('digital'));
  $('buyBtn').addEventListener('click',()=>trade('buy'));
  $('sellBtn').addEventListener('click',()=>trade('sell'));
  $('advanceBtn').addEventListener('click',advance);
  $('tradeAmount').addEventListener('input',updateOrder);
  for(const btn of document.querySelectorAll('.quick')) btn.addEventListener('click',()=>{$('tradeAmount').value=btn.dataset.amount;updateOrder()});
  for (const radio of document.querySelectorAll('input[name="scenario"]')) radio.addEventListener('change',()=>{for(const el of document.querySelectorAll('.event')) el.classList.toggle('selected',el.querySelector('input').checked)});
  $('restartBtn').addEventListener('click',()=>{state=initialState();$('tradeAmount').value='1000';$('toast').textContent='';render();window.scrollTo({top:0,behavior:'smooth'})});
  render();
})();
