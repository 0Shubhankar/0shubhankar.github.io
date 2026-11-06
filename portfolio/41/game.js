/* The Mayor Is Broke! — Project 41, v0.2. Treasury Desk edition.
   Fictional city, simplified but explicit annual cash/debt mechanics.
   No frameworks, no servers, no real investment activity. */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const clamp = (n, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));
  const dollars = (n) => `$${n.toFixed(1)}M`;
  const initial = () => ({ year: 0, cash: 8, existingDebt: 40, bondDebt: 0, emergencyDebt: 0,
    revenue: 18, recurringTaxGain: 0, operatingCost: 14, approval: 52, services: 55,
    bridge: 20, resilience: 35, development: 22, projects: 0, stormCost: 0,
    taxPolicy: 0, servicePolicy: 0, bondRate: .06, issuanceFees: 0,
    policyHistory: [], history: [], choice: null, settled: false, finished: false, sceneMessage: '' });
  let state = initial();
  const events = [
    { chapter: '01 / THE FIRST PROBLEM', title: 'The bridge is falling apart.',
      text: 'Engineers say the only road linking the harbor and downtown needs a $25 million replacement. You have just $8 million in cash. The next election is four years away.',
      choices: [
        { id:'bond', name:'Borrow big. Build now.', detail:'Issue $25M of 10-year bonds at a simulated market yield, plus $0.35M issuance fees.', caption:'A new bridge—and a new promise to bondholders.', fn:s => { const coupon=marketRate(s); s.bondRate=coupon; s.bondDebt += 25; s.cash += 25; s.cash -= 25; s.cash -= .35; s.issuanceFees+=.35; s.bridge = 100; s.approval += 13; s.services += 7; s.projects++; s.sceneMessage='A brand-new bridge joins the harbor and downtown.'; }, story:'The ribbons are cut. The bridge opens. You financed $25M of construction with $25M of new debt. The bond is modeled as interest-only during this term, with principal due after year 10. Underwriting and legal fees also reduce cash.' },
        { id:'patch', name:'Patch it and pray.', detail:'Spend $5M on repairs to buy some time.', caption:'Less debt today. A fragile bridge tomorrow.', fn:s => { s.cash -= 5; s.bridge += 37; s.approval -= 4; s.services += 2; s.sceneMessage='Repairs hold the bridge together—for now.'; }, story:'Workers reinforce the deck. It stays open, but the bridge has not been replaced. Residents are unimpressed by a temporary fix.' },
        { id:'wait', name:'Do nothing. Smile for cameras.', detail:'Save the cash and postpone the problem.', caption:'Your accountant smiles. Commuters do not.', fn:s => { s.bridge -= 13; s.approval -= 13; s.services -= 8; s.sceneMessage='The bridge remains visibly damaged.'; }, story:'The bridge continues to deteriorate. You kept the cash, but deferred maintenance is becoming a political and economic liability.' }
      ]
    },
    { chapter: '02 / THE DEVELOPMENT DEAL', title: 'A developer has an offer.',
      text: 'A private developer wants to build homes and shops by the harbor. The tax base could grow—but your water pipes, roads and public services must keep up.',
      choices: [
        { id:'welcome', name:'Approve + fund the basics.', detail:'Invest $4M in public infrastructure; gain $2M yearly tax revenue from Year 3.', caption:'Growth is not free. But it can pay back.', fn:s => { s.cash-=4; s.recurringTaxGain+=2; s.development+=35; s.approval+=6; s.services-=3; s.projects++; s.sceneMessage='New homes and shops rise along the waterfront.'; }, story:'The developer breaks ground. New taxable activity starts in the following year; your immediate infrastructure bill is $4M.' },
        { id:'fee', name:'Charge a large impact fee.', detail:'Collect $6M upfront, but fewer projects get built.', caption:'Cash today; smaller tax base tomorrow.', fn:s => { s.cash+=6; s.development+=11; s.approval-=6; s.sceneMessage='A small development gets approved after a tough negotiation.'; }, story:'You bring in an upfront contribution. The developer scales back the plan, limiting future growth.' },
        { id:'park', name:'Build a public park instead.', detail:'Spend $7M on open space and public amenities.', caption:'The budget groans. Residents cheer.', fn:s => { s.cash-=7; s.approval+=15; s.services+=12; s.development+=9; s.projects++; s.sceneMessage='A beautiful public park replaces the vacant lot.'; }, story:'A new public park opens. Quality of life improves, but the investment does not directly create new recurring tax revenue in this simplified model.' }
      ]
    },
    { chapter: '03 / THE UNINVITED GUEST', title: 'The storm is coming.',
      text: 'Meteorologists warn of a severe coastal storm. Low-lying neighborhoods are vulnerable, and your emergency reserve is thin. You have only weeks to prepare.',
      choices: [
        { id:'defenses', name:'Build temporary flood defenses.', detail:'Spend $6M now; storm response costs $3M afterward.', caption:'Expensive preparation. Less expensive disaster.', fn:s => { s.cash-=6; s.cash-=3; s.stormCost=3; s.resilience+=42; s.approval+=8; s.services-=2; s.sceneMessage='Flood barriers protect the waterfront.'; }, story:'The barriers hold back much of the flood. Your city still spends $3M responding, on top of the $6M preparation bill.' },
        { id:'emergency', name:'Borrow for emergency response.', detail:'Issue $10M in emergency notes at 9%; pay an $11M storm bill.', caption:'You save essential services, but debt climbs.', fn:s => { s.cash+=10; s.emergencyDebt+=10; s.cash-=11; s.stormCost=11; s.services-=8; s.approval+=2; s.resilience-=4; s.sceneMessage='Emergency crews rescue flooded districts.'; }, story:'Emergency borrowing supplies $10M, but the storm response costs $11M. The city also owes interest on the new notes.' },
        { id:'risk', name:'Hope the forecast is wrong.', detail:'Spend nothing on preparation; storm response costs $13M.', caption:'Spoiler: the forecast was not wrong.', fn:s => { s.cash-=13; s.stormCost=13; s.services-=18; s.approval-=17; s.bridge-=12; s.resilience-=8; s.sceneMessage='Water floods streets and damages public assets.'; }, story:'The storm hits hard. Deferred preparation leaves a $13M emergency bill, damaged services and angry residents.' }
      ]
    },
    { chapter: '04 / THE ELECTION YEAR', title: 'One final budget. One election.',
      text: 'Your term is almost over. Voters want better services, bondholders expect payment, and the next mayor will inherit whatever you leave. What is your final move?',
      choices: [
        { id:'services', name:'Fix the everyday things.', detail:'Invest $6M in schools, streets and essential services.', caption:'Little ribbon-cutting. Real everyday benefits.', fn:s => { s.cash-=6; s.services+=20; s.approval+=11; s.projects++; s.sceneMessage='Streetlights shine and services begin to recover.'; }, story:'You invest in services that people use every day. The improvements are popular, but they draw down your cash reserves.' },
        { id:'reserve', name:'Build a rainy-day fund.', detail:'Freeze new projects; keep the year’s operating surplus.', caption:'Unflashy. Potentially very useful.', fn:s => { s.approval-=7; s.resilience+=12; s.sceneMessage='The city ends the year with a cautious budget.'; }, story:'No new capital spending this year. You protect liquidity at the cost of disappointing residents waiting for improvements.' },
        { id:'tax', name:'Raise taxes to repair services.', detail:'Increase annual taxes by $3M, spend $3M immediately on services.', caption:'A balanced fiscal move, but unpopular.', fn:s => { s.recurringTaxGain+=3; s.cash-=3; s.services+=12; s.approval-=12; s.sceneMessage='Public services improve; tax bills rise.'; }, story:'You fund service repairs while increasing annual revenue. Taxpayers object, even as public facilities improve.' }
      ]
    }
  ];
  // Treasury model: fictional operating budget and indicative pricing, not a credit rating.
  function marketRate(s) {
    const priorDebt = s.existingDebt + s.bondDebt + s.emergencyDebt;
    const pressure = priorDebt / Math.max(1, 18 + s.recurringTaxGain + s.taxPolicy * 1.5);
    const spread = (pressure > 3 ? .012 : pressure > 2 ? .008 : .004)
      + (s.cash < 5 ? .006 : 0) + (s.bridge < 30 ? .003 : 0);
    return .043 + spread;
  }
  function forecast(s=state) {
    const property = 9 + s.taxPolicy*1.5 + (s.year >= 2 ? s.recurringTaxGain : 0);
    const sales = 4 + (s.development > 45 ? .4 : 0);
    const fees = 3;
    const transfers = 2;
    const revenue = property+sales+fees+transfers;
    const operating = s.operatingCost + s.servicePolicy*1.5;
    const existingInterest = s.existingDebt * .05;
    const existingPrincipal = Math.min(s.existingDebt, 1);
    const bondInterest = s.bondDebt * s.bondRate;
    const emergencyInterest = s.emergencyDebt * .09;
    const debtService = existingInterest + existingPrincipal + bondInterest + emergencyInterest;
    const operatingMargin = revenue - operating;
    return {property,sales,fees,transfers,revenue,operating,existingInterest,existingPrincipal,
      bondInterest,emergencyInterest,debtService,operatingMargin,
      coverage: debtService > 0 ? operatingMargin/debtService : 99,
      months: operating>0 ? s.cash/(operating/12) : 99,
      interestShare:revenue>0?(existingInterest+bondInterest+emergencyInterest)/revenue:0};
  }
  function annualClose(s) {
    const f=forecast(s);
    const openingCash = s.cash;
    // Annual fiscal policy applies for the current year only; base property tax policy persists.
    s.cash += f.revenue - f.operating - f.debtService;
    s.existingDebt -= f.existingPrincipal;
    let forcedBorrowing = 0;
    if(s.cash < 0) {
      forcedBorrowing=Math.ceil(-s.cash*10)/10;
      s.emergencyDebt+=forcedBorrowing;
      s.cash+=forcedBorrowing;
      s.approval-=8;
    }
    // Consequences of service policy are a trade-off beyond cash alone.
    s.services += s.servicePolicy * 5;
    s.approval += s.servicePolicy * 3 - Math.max(0,s.taxPolicy)*3 + Math.max(0,-s.taxPolicy)*2;
    s.approval=clamp(s.approval);s.services=clamp(s.services);
    s.bridge=clamp(s.bridge);s.resilience=clamp(s.resilience);s.development=clamp(s.development);
    s.policyHistory.push({year:s.year+1,tax:s.taxPolicy,services:s.servicePolicy});
    return {...f,openingCash,endingCash:s.cash,operating:f.operating,
      netOperations:f.revenue-f.operating-f.debtService,
      newCouponInterest:f.bondInterest+f.emergencyInterest,
      forcedBorrowing};
  }
  function debt(s=state){return s.existingDebt+s.bondDebt+s.emergencyDebt;}
  function updateMetrics(){
    $('cash-value').innerHTML=`$${state.cash.toFixed(1)}<span>M</span>`;
    $('debt-value').textContent=dollars(debt());
    $('revenue-value').textContent=dollars(forecast().revenue);
    $('approval-value').textContent=`${Math.round(state.approval)}%`;
    $('services-value').textContent=`${Math.round(state.services)}/100`;
    $('approval-bar').style.width=`${state.approval}%`;
    $('services-bar').style.width=`${state.services}%`;
    $('bridge-bar').style.width=`${state.bridge}%`;
    $('resilience-bar').style.width=`${state.resilience}%`;
    $('bridge-label').textContent=state.bridge>=80?'GOOD':state.bridge>=40?'FRAGILE':'CRITICAL';
    $('resilience-label').textContent=`${Math.round(state.resilience)} / 100`;
    const f=forecast();
    const underPressure=state.cash<4 || debt()>65 || state.bridge<25 || f.coverage < 1.2;
    $('risk-flag').textContent=underPressure?'UNDER PRESSURE':'MANAGING';
    $('risk-flag').style.color=underPressure?'var(--orange)':'var(--lime)';
    $('fiscal-comment').textContent=state.cash<2?'Your cash buffer has nearly vanished.':debt()>65?'Heavy debt makes future budgets more fragile.':state.cash>=10?'Healthy reserves give you room to maneuver.':'Every dollar committed has a future consequence.';
    $('scene-title').textContent=state.finished?'Your city. Your legacy.':state.year===0?'A city on the edge.':`Year ${state.year+1}: ${['','The city responds.','A new challenge arrives.','Your legacy is at stake.'][state.year]}`;
    if(state.sceneMessage) $('scene-note').textContent=state.sceneMessage;
    $('term-label').textContent=state.finished?'FINAL REPORT / FOUR YEARS COMPLETE':`MAYORAL TERM / YEAR ${String(Math.min(state.year+1,4)).padStart(2,'0')} OF 04`;
    renderTreasury();
  }
  function renderTreasury(){
    const f=forecast();
    const fmt=(n)=>`${n<0?'−':''}$${Math.abs(n).toFixed(2)}M`;
    const ratio=(n)=>Number.isFinite(n)?n.toFixed(2)+'×':'—';
    const rate=(n)=>(n*100).toFixed(2)+'%';
    const risk = f.coverage<1 ? 'CRITICAL / insufficient operating surplus' : f.coverage<1.3 ? 'TIGHT / weak coverage' : f.coverage<1.8 ? 'WATCH / limited cushion' : 'HEALTHY / coverage buffer';
    $('treasury-status').textContent=risk;
    $('treasury-metrics').innerHTML=[
      ['OPERATING SURPLUS',fmt(f.operatingMargin)],
      ['DEBT SERVICE COVERAGE',ratio(f.coverage)],
      ['DEBT / REVENUE',ratio(debt()/f.revenue)],
      ['CASH RESERVE',f.months.toFixed(1)+' months'],
      ['INDICATIVE NEW-BOND COUPON',rate(marketRate(state))],
      ['INTEREST / REVENUE',rate(f.interestShare)]
    ].map(([k,v])=>`<div class="t-metric"><small>${k}</small><strong>${v}</strong></div>`).join('');
    $('treasury-budget').innerHTML=[
      ['Property taxes',f.property],['Sales & activity taxes',f.sales],['Licenses & service fees',f.fees],['Intergovernmental transfers',f.transfers],
      ['TOTAL OPERATING REVENUE',f.revenue],['Operating service costs',-f.operating],['Existing bond interest',-f.existingInterest],
      ['New municipal bond interest',-f.bondInterest],['Emergency note interest',-f.emergencyInterest],
      ['Existing debt principal',-f.existingPrincipal],['NET ANNUAL CASH GENERATION',f.revenue-f.operating-f.debtService]
    ].map(([k,v])=>`<div class="budget-row ${k===k.toUpperCase()?'sum':''}"><span>${k}</span><b>${fmt(v)}</b></div>`).join('');
    $('treasury-debts').innerHTML=[['Legacy general obligation debt',state.existingDebt,'5.0%, $1M annual principal'],
      ['New capital bonds',state.bondDebt,`${rate(state.bondRate)}, 10-year bullet maturity`],
      ['Emergency notes',state.emergencyDebt,'9.0%, interest-only in 4-year game']]
      .map(([k,v,n])=>`<div class="debt-row"><div><strong>${k}</strong><small>${n}</small></div><b>${fmt(v)}</b></div>`).join('');
    const latest=state.history.at(-1);
    $('treasury-reconcile').innerHTML=latest?`<b>YEAR ${latest.year} · CASH BRIDGE</b><p>Cash after your project decision: ${fmt(latest.cashFlow.openingCash)} · Revenue: +${fmt(latest.cashFlow.revenue)} · Operating services: −${fmt(latest.cashFlow.operating)} · Scheduled debt service: −${fmt(latest.cashFlow.debtService)} · Emergency borrowing: +${fmt(latest.cashFlow.forcedBorrowing)} = <strong>${fmt(latest.cash)}</strong></p><small>Capital spending, borrowing proceeds, and issuance fees are included in cash after the decision. This is a cash-basis game model, not GAAP financial statements.</small>`:
       '<b>BEFORE YOUR FIRST DECISION</b><p>The Treasury Desk shows the annual operating budget and scheduled debt service based on current policies.</p>';
  }
  function updatePolicyPreview(){
    const f=forecast();
    $('policy-preview').textContent=`Projected yearly revenue ${dollars(f.revenue)} · Operating cost ${dollars(f.operating)} · Scheduled debt payments ${dollars(f.debtService)} · Operating coverage ${f.coverage.toFixed(2)}×. Policies can change these projections before you decide.`;
    renderTreasury();
    updateMetricsStatic();
  }
  function updateMetricsStatic(){
    $('revenue-value').textContent=dollars(forecast().revenue);
  }
  function initPolicy(){
    for(const [name,prop,values] of [['tax','taxPolicy',[-1,0,1]],['services','servicePolicy',[-1,0,1]]]){
      const wrap=$(name+'-policy');
      wrap.querySelectorAll('button').forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
          if(state.settled||state.finished)return;
          state[prop]=values[i];
          wrap.querySelectorAll('button').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
          updatePolicyPreview();
        });
      });
    }
  }
  function syncPolicy(){
    for(const [name,prop] of [['tax','taxPolicy'],['services','servicePolicy']]){
      $(name+'-policy').querySelectorAll('button').forEach((btn,i)=>{
        const on=i===state[prop]+1;
        btn.classList.toggle('active',on);btn.setAttribute('aria-pressed',String(on));btn.disabled=state.settled||state.finished;
      });
    }
    $('policy-desk').hidden=state.finished;
    updatePolicyPreview();
  }
  function renderLedger(){
    $('ledger').innerHTML=state.history.length ? state.history.slice().reverse().map(h=>`<div class="entry"><b>YEAR ${h.year} / ${h.short}</b>Revenue ${dollars(h.cashFlow.revenue)} · operating ${dollars(h.cashFlow.operating)} · debt service ${dollars(h.cashFlow.debtService)}<br>Operating surplus after debt: ${h.cashFlow.netOperations>=0?'+':''}${dollars(h.cashFlow.netOperations)}${h.cashFlow.forcedBorrowing ? `<br><span style="color:#ffac7a">Automatic emergency borrowing: ${dollars(h.cashFlow.forcedBorrowing)}</span>`:''}</div>`).join('') : '<p>Every choice has a cost. Sometimes the real bill comes later.</p>';
  }
  function choose(id){ if(state.settled || state.finished)return;
    state.choice=id;document.querySelectorAll('.choice').forEach(el=>{const selected=el.dataset.id===id;el.classList.toggle('selected',selected);el.setAttribute('aria-pressed',String(selected));});
    $('advance-btn').disabled=false;$('advance-btn').innerHTML='CONFIRM MY DECISION <span>↗</span>';
  }
  function yearDots(){ $('year-dots').innerHTML=[1,2,3,4].map(y=>`<i class="${y<=state.year?'done':y===state.year+1?'on':''}">${String(y).padStart(2,'0')}</i>`).join(''); }
  function renderQuestion(){const ev=events[state.year];state.choice=null;state.settled=false;
    $('chapter-number').textContent=ev.chapter;$('decision-title').textContent=ev.title;$('decision-description').textContent=ev.text;
    $('choices').innerHTML=ev.choices.map((c,i)=>`<button type="button" class="choice" data-id="${c.id}" aria-pressed="false"><span class="num">OPTION 0${i+1}</span><span class="tick">✓</span><strong>${c.name}</strong><small>${c.detail}</small></button>`).join('');
    $('choices').querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>choose(btn.dataset.id)));
    $('outcome').hidden=true;$('advance-btn').disabled=true;$('advance-btn').innerHTML='CHOOSE YOUR NEXT MOVE <span>↗</span>';yearDots();syncPolicy();updateMetrics();
  }
  function applyChoice(){const ev=events[state.year];const choice=ev.choices.find(c=>c.id===state.choice);if(!choice)return;
    choice.fn(state);const cashFlow=annualClose(state);state.history.push({year:state.year+1,short:choice.name,choiceId:choice.id,story:choice.story,cashFlow,cash:state.cash,debt:debt()});state.settled=true;
    $('choices').querySelectorAll('button').forEach(btn=>{btn.disabled=true;btn.style.cursor='default';});
    $('outcome').hidden=false;$('outcome').innerHTML=`<strong>YEAR ${state.year+1} / THE CONSEQUENCES</strong><p>${choice.story}</p><div class="numbers">Year-end cash ${dollars(state.cash)} &nbsp;·&nbsp; Debt ${dollars(debt())} &nbsp;·&nbsp; Annual debt service ${dollars(cashFlow.debtService)}</div>${cashFlow.forcedBorrowing?`<p style="color:#ffbd91">Cash ran short. The treasury automatically borrowed ${dollars(cashFlow.forcedBorrowing)} at 9% to cover the shortfall.</p>`:''}`;
    $('advance-btn').innerHTML=state.year===3?'SEE MY MAYORAL REPORT ↗':'ADVANCE TO NEXT YEAR ↗';$('advance-btn').disabled=false;
    syncPolicy();renderLedger();updateMetrics();renderCity();
  }
  function outcome(){const strongCash=state.cash>=8, goodServices=state.services>=65, lowDebt=debt()<=55, bridgeGood=state.bridge>=60;
    if(strongCash&&goodServices&&bridgeGood)return ['THE PRAGMATIC VISIONARY','You improved daily life while keeping a financial cushion. Your city still has obligations, but you left the next mayor options.'];
    if(state.approval>=65&&state.cash<5)return ['THE PEOPLE’S CHAMPION, THE TREASURER’S NIGHTMARE','Residents like your improvements. Your thin cash reserves mean the next administration will have less flexibility.'];
    if(strongCash&&state.services<50)return ['THE SURPLUS HOARDER','The treasury survived. Residents inherited a city still waiting for services. A balanced budget is not the same thing as a thriving city.'];
    if(debt()>70)return ['THE DEBT-FUELED DREAMER','You built and responded boldly. But tomorrow’s taxpayers inherit a considerable repayment obligation.'];
    if(state.bridge<30)return ['THE MAYOR WHO IGNORED THE BRIDGE','The bridge remains a problem. Deferred maintenance kept spending down at first but weakened public confidence.'];
    if(lowDebt&&strongCash)return ['THE CAUTIOUS STEWARD','Your finances held up. You played defensively and left cash for the next administration, although not every resident got what they wanted.'];
    return ['THE COMPLICATED LEGACY','Some neighborhoods improved, some problems remain, and the accounts tell only part of the story. Governing is a series of trade-offs.'];
  }
  function renderEnding(){state.finished=true;const [title,story]=outcome();
    $('chapter-number').textContent='THE FINAL REPORT';$('decision-title').textContent=title;$('decision-description').textContent=story;
    $('choices').innerHTML='';$('outcome').hidden=false;
    $('outcome').innerHTML=`<div class="ending-kicker">YOUR FOUR-YEAR TERM IN NUMBERS</div><div class="end-stats"><div><small>CASH LEFT</small><strong>${dollars(state.cash)}</strong></div><div><small>DEBT OUTSTANDING</small><strong>${dollars(debt())}</strong></div><div><small>APPROVAL</small><strong>${Math.round(state.approval)}%</strong></div><div><small>CITY SERVICES</small><strong>${Math.round(state.services)}/100</strong></div></div><p class="ending-summary">${state.projects} public investments/projects undertaken. Bridge condition: ${Math.round(state.bridge)}/100. Remember: popularity, resilient finances and service quality are different kinds of success.</p><p>Try another term. What happens if you make the opposite decisions?</p>`;
    $('advance-btn').innerHTML='PLAY ANOTHER TERM ↻';$('advance-btn').disabled=false;yearDots();syncPolicy();updateMetrics();renderCity();
  }
  $('advance-btn').addEventListener('click',()=>{if(state.finished){reset();return;}if(!state.settled){applyChoice();return;}state.year++;if(state.year>=4)renderEnding();else renderQuestion();});
  function reset(){state=initial();$('scene-note').textContent='Tap a district to learn about it.';renderQuestion();renderLedger();renderCity();}
  $('reset-btn').addEventListener('click',reset);
  const dlg=$('how-dialog');$('how-btn').addEventListener('click',()=>dlg.showModal());$('close-dialog').addEventListener('click',()=>dlg.close());$('dialog-play').addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
  // Procedural SVG isometric illustration. No runtime network dependencies.
  const NS='http://www.w3.org/2000/svg';const svg=$('city-svg');
  const S=(tag,attrs={},text)=>{const e=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));if(text!==undefined)e.textContent=text;return e;};
  const add=(parent,tag,attrs={},text)=>{let e=S(tag,attrs,text);parent.appendChild(e);return e;};
  const poly=(p,pts,fill,other={})=>add(p,'polygon',{points:pts.map(q=>q.join(',')).join(' '),fill,...other});
  function cube(p,x,y,h,color='#344f5e',lit=true){
    const a=[x,y-h],b=[x+36,y+17-h],c=[x,y+34-h],d=[x-36,y+17-h];
    poly(p,[d,c,[x,y+34],[x-36,y+17]],'#263745');poly(p,[c,b,[x+36,y+17],[x,y+34]],color);
    poly(p,[a,b,c,d],lit?'#587487':'#3e5868');
    for(let k=11;k<h;k+=14){let yp=y-k;for(let j=0;j<3;j++){let xx=x+2+j*10;add(p,'line',{x1:xx,y1:yp+20+j*0.25,x2:xx+5,y2:yp+22+j*0.25,stroke:(j+k)%3===0?'#e7d78f':'#7ca3ad','stroke-width':2,opacity:lit?.85:.35});}}
    add(p,'line',{x1:x-36,y1:y+17-h,x2:x-36,y2:y+17,stroke:'#8ba2a8',opacity:.35});
  }
  function label(p,x,y,t){add(p,'text',{x,y,fill:'#bbd1d8','font-family':'DM Mono,monospace','font-size':10,'letter-spacing':1},t);}
  function inspect(g,tip){g.classList.add('inspectable');g.setAttribute('tabindex','0');g.setAttribute('role','button');g.setAttribute('aria-label',tip);const cb=()=>{$('scene-note').textContent=tip;};g.addEventListener('click',cb);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();cb();}});}
  function renderCity(){svg.innerHTML='';const defs=add(svg,'defs');let gr=add(defs,'linearGradient',{id:'water',x1:'0',y1:'0',x2:'1',y2:'1'});add(gr,'stop',{offset:'0%', 'stop-color':'#164756'});add(gr,'stop',{offset:'100%', 'stop-color':'#276b75'});let bg=add(defs,'radialGradient',{id:'ambient'});add(bg,'stop',{offset:'0%','stop-color':'#1b343b','stop-opacity':.65});add(bg,'stop',{offset:'100%','stop-color':'#0c1720','stop-opacity':0});add(svg,'ellipse',{cx:520,cy:350,rx:570,ry:280,fill:'url(#ambient)'});
    const tile=(col,row)=>({x:490+col*88-row*88,y:93+col*41+row*41});
    for(let row=0;row<5;row++)for(let col=0;col<7;col++){
      const {x,y}=tile(col,row),water=col===3,road=row===2,park=(col===1&&row===3)||(col===5&&row===1&&state.development<40)||(col===2&&row===4);
      let color=water?'url(#water)':road?'#263b45':park?'#244c3f':(col+row)%2===0?'#1c313b':'#20343f';
      poly(svg,[[x,y],[x+85,y+39],[x,y+78],[x-85,y+39]],color,{stroke:water?'#37727c':'#354a52','stroke-width':1,'class':'tile'});
      if(water){for(let j=0;j<3;j++)add(svg,'path',{d:`M${x-31+j*20} ${y+23+j*3} q 20 -5 42 0`,stroke:'#70b1b5','stroke-width':1,opacity:.27,fill:'none'});}
      else if(road){add(svg,'line',{x1:x-58,y1:y+41,x2:x+57,y2:y+41,stroke:'#bdc6a9','stroke-width':2,'stroke-dasharray':'8 10',opacity:.35});}
      else if(park){const group=add(svg,'g');for(let j=0;j<5;j++){let px=x-32+(j%3)*29,py=y+23+Math.floor(j/3)*20;add(group,'ellipse',{cx:px,cy:py+6,rx:13,ry:6,fill:'#102d26',opacity:.65});add(group,'circle',{cx:px,cy:py, r:8+(j%2)*3,fill:'#4e8673'});}inspect(group,'Public park: green space and everyday city life.');}
      else {const group=add(svg,'g');const n=(col*7+row*11)%7;let height=38+n*13+(state.development>45&&col>=4?32:0),occupied=(col!==0 || row!==4);
        if(occupied){const lit=state.services>42;cube(group,x,y+31,height,n%2===0?'#294554':'#3b5360',lit);if(state.services<42&&n%3===0)poly(group,[[x,y+31-height],[x+36,y+48-height],[x,y+65-height],[x-36,y+48-height]],'#70534c',{opacity:.85});inspect(group,`District ${col+1}-${row+1}: ${state.services<42?'services are strained':'homes and workplaces are operating'}.`);}
      }
    }
    // The bridge overlays the water at the street crossing. Its physical condition follows gameplay.
    const p=tile(3,2);const bridgeGroup=add(svg,'g');
    let bridgeColor=state.bridge>=80?'#cce8bf':state.bridge>=40?'#bfac8d':'#a56861';
    poly(bridgeGroup,[[p.x-83,p.y+30],[p.x+83,p.y+67],[p.x+83,p.y+81],[p.x-83,p.y+44]],'#40535a');
    poly(bridgeGroup,[[p.x-83,p.y+21],[p.x+83,p.y+58],[p.x+83,p.y+69],[p.x-83,p.y+32]],bridgeColor,{stroke:'#d6deb9','stroke-width':2});
    add(bridgeGroup,'line',{x1:p.x-76,y1:p.y+29,x2:p.x+70,y2:p.y+61,stroke:'#456069','stroke-width':2,'stroke-dasharray':state.bridge<30?'4 17':'10 10'});
    if(state.bridge<40){add(bridgeGroup,'path',{d:`M${p.x-12} ${p.y+40} l-11 13 l15 -3 l-6 10`,stroke:'#582c2a','stroke-width':4,fill:'none'});}
    inspect(bridgeGroup,`Harbor bridge condition: ${Math.round(state.bridge)}/100. ${state.bridge<40?'Severe deterioration.':'Connects the harbor with downtown.'}`);
    label(svg,95,530,'PORT MERIDIAN');label(svg,752,569,'HARBOR DISTRICT');
    if(state.year>=3&&state.resilience<40){add(svg,'ellipse',{cx:615,cy:374,rx:125,ry:65,fill:'#54a9c2',opacity:.18,'pointer-events':'none'});}
    if(state.resilience>65){const g=add(svg,'g');add(g,'path',{d:'M 300 438 Q 420 500 580 478',stroke:'#b8d6a9','stroke-width':8,'stroke-linecap':'round',fill:'none'});inspect(g,'Flood defenses: an investment in protection from future storms.');}
  }
  initPolicy();
  reset();
})();
