/* The Interest Rate Roller Coaster — a self-contained, fictional teaching simulation.
   Money values are in millions unless noted. Rates are nominal decimals internally.
   No live financial feeds, orders, wallet connections, or external dependencies. */
'use strict';
const $ = id => document.getElementById(id);
const fmt = (v, digits=1) => Number.isFinite(v) ? Number(v).toFixed(digits) : '—';
const money = (v, digits=1) => `${v<0?'−':''}$${fmt(Math.abs(v),digits)}M`;
const pct = (v, digits=2) => `${fmt(100*v,digits)}%`;
const signed = (v, digits=1) => `${v>0?'+':v<0?'−':''}${fmt(Math.abs(v),digits)}`;
const clamp = (v,min,max) => Math.min(max,Math.max(min,v));
const state = {rate:4, shape:'normal', credit:'calm', step:0, asset:'gov', cityFinance:'fixed', cityTaxes:'normal', hedge:'swap', scenario:'inflation', crisisAction:'reserve', lastStress:null};
const BASE = {rate:4,shape:'normal',credit:'calm'};
const terms=[1,2,3,5,7,10,15];
const shapeSlope={normal:.006,flat:0,inverted:-.024,steep:.022};
function spot(t, rate=state.rate, shape=state.shape){
  return (rate/100)+shapeSlope[shape]*(1-Math.exp(-t/4.5));
}
function creditSpread(kind, env=state.credit){
  const base={gov:0,muni:.012,corp:.026,frn:.006};
  const jump={gov:0,muni:.018,corp:.025,frn:.012};
  return base[kind]+(env==='stress'?jump[kind]:0);
}
function df(t,rate,shape,spread=0){return 1/Math.pow(1+spot(t,rate,shape)+spread,t)};
const bonds={
 gov:{name:'GOVERNMENT 10Y', short:'GOVT BOND',kind:'gov',coupon:.045,n:10,face:100,desc:'Fixed coupon, no modeled credit spread. Long maturity makes it interest-rate sensitive.',icon:'◎'},
 muni:{name:'MUNICIPAL 8Y',short:'CITY BOND',kind:'muni',coupon:.055,n:8,face:100,desc:'Fixed coupon plus a modeled municipal credit spread. Watch rates and credit risk move separately.',icon:'⌂'},
 corp:{name:'CORPORATE 6Y',short:'CORP BOND',kind:'corp',coupon:.0625,n:6,face:100,desc:'Higher coupon, higher assumed spread. A credit scare can overwhelm the benchmark-rate effect.',icon:'◈'},
 frn:{name:'FLOATING NOTE 5Y',short:'RESETTING FRN',kind:'frn',coupon:0,n:5,face:100,desc:'The next coupon is fixed at 4.8%; subsequent coupons are linked to modeled one-year forward rates, plus 0.8 pp.',icon:'↺'}
};
function forward1(t,rate,shape){
  if(t<=1)return .04;
  const zt=spot(t,rate,shape),zprev=spot(t-1,rate,shape);
  return (Math.pow(1+zt,t)/Math.pow(1+zprev,t-1))-1;
}
function bondFlows(id,rate,shape){
  const b=bonds[id], arr=[];
  for(let t=1;t<=b.n;t++){
    let coupon=b.face*b.coupon;
    if(id==='frn') coupon=b.face*(t===1?.048:forward1(t,rate,shape)+.008);
    arr.push({t,coupon,principal:t===b.n?b.face:0,cf:coupon+(t===b.n?b.face:0)});
  }
  return arr;
}
function bondPrice(id,rate=state.rate,shape=state.shape,env=state.credit){
  const spread=creditSpread(bonds[id].kind,env);
  return bondFlows(id,rate,shape).reduce((sum,row)=>sum+row.cf*df(row.t,rate,shape,spread),0);
}
function bondStats(id,rate=state.rate,shape=state.shape,env=state.credit){
  const p=bondPrice(id,rate,shape,env),d=.001;
  const up=bondPrice(id,rate+100*d,shape,env),down=bondPrice(id,rate-100*d,shape,env);
  const dur=(down-up)/(2*p*d),conv=(down+up-2*p)/(p*d*d);
  const pvFlows=bondFlows(id,rate,shape).map(row=>({
    ...row,pv:row.cf*df(row.t,rate,shape,creditSpread(bonds[id].kind,env))
  }));
  return {p,dur,conv,dv01:dur*p*.0001,pvFlows};
}
function propertyStats(rate=state.rate,shape=state.shape,env=state.credit,noiScale=1){
  const baseline10=spot(10,BASE.rate,BASE.shape), now10=spot(10,rate,shape);
  const cap=clamp(.0575+.70*(now10-baseline10)+(env==='stress'?.015:0),.03,.19);
  const noi=7.5*noiScale, value=noi/cap;
  const floatingRate=rate/100+.017, mortgage=65,principal=2;
  const debtService=mortgage*floatingRate+principal;
  return {cap,noi,value,mortgage,debtService,equity:value-mortgage,dscr:noi/debtService};
}
function muniCoupon(rate=state.rate,shape=state.shape,env=state.credit,tenor=10){
 return spot(tenor,rate,shape)+.016+(env==='stress'?.017:0);
}
function muniModel(rate=state.rate,shape=state.shape,env=state.credit,finance=state.cityFinance,taxes=state.cityTaxes,shock=null){
  const rows=[],initialCash=16,baseRevenue=72,operatingCost=59,legacyCoupon=120*.046,oldPrincipal=2;
  let cash=initialCash;
  const taxLift=taxes==='surcharge'?2.5:0;
  const project=finance==='delay'?0:35;
  const issuance=finance==='delay'?0:35;
  const issuanceFee=finance==='delay'?0:.35;
  const fixedCoupon=muniCoupon(rate,shape,env);
  const refiRate=muniCoupon(rate+(.5),shape,env,7)+.004;
  const loanCoupon=(r)=>finance==='floating'?r/100+.013+(env==='stress'?.012:0):fixedCoupon;
  for(let y=1;y<=5;y++){
    const mr=shock?.rates?.[y-1] ?? rate;
    const revFactor=shock?.revenueFactors?.[y-1]??1;
    const costFactor=shock?.costFactors?.[y-1]??1;
    const revenue=baseRevenue*revFactor+taxLift;
    const cost=operatingCost*costFactor;
    const newInterest=finance==='delay'?0:35*loanCoupon(mr);
    const legacyInterest=legacyCoupon;
    const oldScheduled=oldPrincipal;
    const refiPrincipal=y===3?45:0;
    const refiProceeds=y===3?45:0;
    const refiInterest=y>=3?45*refiRate:0;
    const debtService=legacyInterest+oldScheduled+newInterest+refiInterest+refiPrincipal;
    const operatingMargin=revenue-cost;
    const fees=(y===1?issuanceFee:0)+(y===3?.45:0);
    const capex=y===1?project:0;
    const borrowed=(y===1?issuance:0)+refiProceeds;
    const priorCash=cash;
    cash+=operatingMargin-debtService-fees-capex+borrowed;
    rows.push({y,rate:mr,revenue,cost,operatingMargin,debtService,interest:legacyInterest+newInterest+refiInterest,principal:oldScheduled+refiPrincipal,borrowed,capex,fees,priorCash,cash,dscr:operatingMargin/(legacyInterest+oldScheduled+newInterest+refiInterest)});
  }
  return {rows,initialCash,initialNewCoupon:fixedCoupon,refiRate,loanCoupon:loanCoupon(rate),finance,taxes,minCash:Math.min(...rows.map(r=>r.cash))};
}
function hedgeStats(rate=state.rate,hedge=state.hedge){
  const notional=50,loanSpread=.017,fixedSwap=.04,capStrike=.055,premium=1.1;
  const ref=rate/100;
  const loanInterest=notional*(ref+loanSpread);
  const swapPayoff=notional*(ref-fixedSwap);
  const capPayoff=notional*Math.max(ref-capStrike,0);
  const annual=loanInterest-(hedge==='swap'?swapPayoff:hedge==='cap'?capPayoff:0);
  const upfront=hedge==='cap'?premium:0;
  const total5=5*annual+upfront;
  const swapMtm=Array.from({length:5},(_,i)=>swapPayoff/Math.pow(1+ref+loanSpread,i+1)).reduce((a,b)=>a+b,0);
  return {annual,upfront,total5,ref,loanInterest,swapPayoff,capPayoff,swapMtm,notional};
}
const scenarios={
 inflation:{name:'INFLATION SPIKE',subtitle:'Rates surge, costs rise, offices soften.',rates:[2.5,2.0,1.0],revenue:[.98,.97,.99],cost:[1.07,1.10,1.12],noi:[.97,.95,.94],spread:'stress',narrative:'Central-bank tightening raises variable borrowing costs while higher credit spreads add pressure to refinancing.'},
 recession:{name:'DEEP RECESSION',subtitle:'Rates fall, but cash flows and credit deteriorate.',rates:[-1.2,-2.0,-1.5],revenue:[.90,.86,.90],cost:[1.02,1.01,1.03],noi:[.82,.75,.80],spread:'stress',narrative:'Lower risk-free yields do not rescue a weak borrower when credit spreads, vacancies and municipal revenue are all under pressure.'},
 freeze:{name:'CREDIT FREEZE',subtitle:'Market rates barely move; financing disappears.',rates:[.3,.2,.5],revenue:[.95,.93,.95],cost:[1.04,1.05,1.05],noi:[.89,.85,.88],spread:'stress',narrative:'Credit availability—not just the policy rate—drives the danger. A city can face refinancing stress without a dramatic central-bank move.'},
 landing:{name:'SOFT LANDING',subtitle:'Inflation cools, city income holds up.',rates:[-.5,-.75,-.5],revenue:[1.02,1.04,1.06],cost:[1.01,1.02,1.03],noi:[1.02,1.04,1.06],spread:'calm',narrative:'Easing financial conditions and stable income improve coverage, while hedges can become costly compared with staying floating.'}
};
function stressRun(){
  const cfg=scenarios[state.scenario],rates=cfg.rates.map(d=>clamp(state.rate+d,1,18));
  const reserveAction={reserve:0,tax:3.0,cut:2.8,borrow:0}[state.crisisAction];
  let cash=16;
  const rows=[];
  for(let i=0;i<3;i++){
    const r=rates[i];
    const revenue=72*cfg.revenue[i]+(state.cityTaxes==='surcharge'?2.5:0)+(state.crisisAction==='tax'?reserveAction:0);
    const operations=59*cfg.cost[i]-(state.crisisAction==='cut'?reserveAction:0);
    const existingInterest=120*.046;
    const principal=2+(i===2?45:0);
    const issueInterest=state.cityFinance==='delay'?0:35*(state.cityFinance==='fixed'?muniCoupon(state.rate,state.shape,state.credit):r/100+.013+(cfg.spread==='stress'?.012:0));
    const maturingRefiRate=muniCoupon(r,state.shape,cfg.spread,7)+.004;
    const refiInterest=i===2?45*maturingRefiRate:0;
    const emergencyBorrow=state.crisisAction==='borrow'&&i===0?12:0;
    const emergencyInterest=state.crisisAction==='borrow'?(i===0?0:12*(r/100+.06)):0;
    const capex=i===0&&state.cityFinance!=='delay'?35:0;
    const proceeds=(i===0&&state.cityFinance!=='delay'?35:0)+(i===2?45:0)+emergencyBorrow;
    const fees=(i===0&&state.cityFinance!=='delay'?.35:0)+(i===2?.45:0)+(emergencyBorrow?.18:0);
    const debtService=existingInterest+principal+issueInterest+refiInterest+emergencyInterest;
    const open=cash;
    cash+=revenue-operations-debtService+proceeds-capex-fees;
    const denom=existingInterest+2+issueInterest+refiInterest+emergencyInterest;
    const dscr=(revenue-operations)/denom;
    rows.push({year:i+1,ref:r,revenue,operations,open,cash,debtService,proceeds,capex,fees,dscr});
  }
  const prop=propertyStats(rates[2],state.shape,cfg.spread,cfg.noi[2]);
  const baseProperty=propertyStats(BASE.rate,BASE.shape,'calm');
  const bcurrent=bondStats('gov',rates[2],state.shape,cfg.spread).p;
  const hedge=hedgeStats(rates[2],state.hedge);
  const pctDrop=100*(prop.value/baseProperty.value-1);
  const minimumCash=Math.min(...rows.map(x=>x.cash));
  const status=minimumCash<0?'LIQUIDITY CRISIS':rows.some(x=>x.dscr<1)?'DEBT COVERAGE WARNING':'TREASURY SURVIVES';
  return {cfg,rows,prop,hedge,bcurrent,minimumCash,status,pctDrop};
}
function areaChart(){
 const svg=$('yieldSvg'),g=$('curveGrid');
 const minY=0,maxY=16, left=42,right=710,top=19,bottom=246;
 const x=t=>left+(t-1)/14*(right-left), y=p=>bottom-(p-minY)/(maxY-minY)*(bottom-top);
 let grid='';
 for(let v=0;v<=16;v+=4)grid+=`<line class="grid-line" x1="${left}" x2="${right}" y1="${y(v)}" y2="${y(v)}"/><text class="axis-label" x="3" y="${y(v)+4}">${v}%</text>`;
 for(const t of [1,3,5,7,10,15])grid+=`<text class="axis-label" x="${x(t)}" y="272" text-anchor="middle">${t}Y</text>`;
 g.innerHTML=grid;
 const path=(r,shape)=>terms.map((t,i)=>`${i?'L':'M'}${x(t).toFixed(1)},${y(spot(t,r,shape)*100).toFixed(1)}`).join(' ');
 $('baseCurve').setAttribute('d',path(BASE.rate,BASE.shape));
 $('nowCurve').setAttribute('d',path(state.rate,state.shape));
 $('nowGlow').setAttribute('d',path(state.rate,state.shape));
 $('curveDots').innerHTML=terms.map(t=>`<circle cx="${x(t)}" cy="${y(spot(t)*100)}" r="${t===10?6:4}" fill="${t===10?'#ff9349':'#e474f5'}" stroke="#110f20" stroke-width="2"><title>${t} year spot rate: ${pct(spot(t),2)}</title></circle>`).join('');
 $('slopeDetail').textContent=`10Y – 1Y: ${signed(100*(spot(10)-spot(1)),2)} percentage points`;
}
function updateGlobals(){
 $('rateNumber').textContent=fmt(state.rate,2).replace(/0$/,'');
 const diff=state.rate-4;
 $('rateDelta').textContent=Math.abs(diff)<.001?'BASELINE':`${diff>0?'+':'−'}${fmt(Math.abs(diff)*100,0)} BP SHIFT`;
 areaChart();
 const baseline=bondPrice('gov',BASE.rate,BASE.shape,BASE.credit);
 const price=bondPrice('gov');
 const prop=propertyStats(),bp=propertyStats(BASE.rate,BASE.shape,BASE.credit);
 $('pulseBond').textContent=`$${fmt(price,2)}`;
 $('pulseBondChange').textContent=`${signed(100*(price/baseline-1),1)}% vs. reference`;
 $('pulseProperty').textContent=money(prop.value,1);
 $('pulsePropertyChange').textContent=`${signed(100*(prop.value/bp.value-1),1)}% vs. reference`;
 $('pulseMuni').textContent=pct(muniCoupon(),2);
 $('pulseFloat').textContent=pct(state.rate/100+.017,2);
 renderExperiment();
}
const meta=[
 {title:'Who bends the curve?',subtitle:'Move the market reference rate. Compare the short end with the long end—and investigate what a curve shape means.',icon:'↗'},
 {title:'Everything has a price.',subtitle:'Cash-flow dates, credit spreads and reset rules make bonds react differently to the same shock.',icon:'◇'},
 {title:'Can the city still borrow?',subtitle:'New borrowing reprices, but outstanding fixed-rate bonds do not. Follow five years of real cash movements.',icon:'⌂'},
 {title:'Protection has a price.',subtitle:'Compare floating-rate debt with a pay-fixed swap or cap. A hedge changes cash flows, not just a risk badge.',icon:'⟐'},
 {title:'The market hits back.',subtitle:'A three-year shock connects city revenues, property values, borrowing spreads and hedging decisions.',icon:'⚡'}
];
function renderExperiment(){
 const step=state.step;
 $('expCount').textContent=`EXPERIMENT 0${step+1} / 05`;
 $('expTitle').textContent=meta[step].title;
 $('expSubtitle').textContent=meta[step].subtitle;
 $('expIcon').textContent=meta[step].icon;
 $('progressText').textContent=`ROOM ${step+1} OF 5`;
 $('prevBtn').disabled=step===0;
 $('nextBtn').disabled=step===4;
 $('nextBtn').textContent=step===3?'ENTER THE CRISIS →':'NEXT EXPERIMENT →';
 document.querySelectorAll('.chapter-tab').forEach(el=>{const active=+el.dataset.step===step;el.classList.toggle('active',active);el.setAttribute('aria-current',active?'step':'false')});
 $('experimentBody').innerHTML=[renderCurve,renderBonds,renderCity,renderHedge,renderShock][step]();
}
function metric(label,value,sub='',kind=''){return `<div class="stat-box ${kind}"><div class="stat-label">${label}</div><div class="stat-value">${value}</div><div class="stat-sub">${sub}</div></div>`}
function renderCurve(){
 const a=spot(1),b=spot(5),c=spot(10),f=((Math.pow(1+c,10)/Math.pow(1+b,5))**(1/5))-1;
 const slope=100*(c-a);
 return `<div class="big-stat-grid">${metric('1-YEAR SPOT',pct(a,2),'Short maturity','pink')}${metric('10-YEAR SPOT',pct(c,2),'Long maturity','cyan')}${metric('10Y − 1Y SLOPE',`${signed(slope,2)} pp`,'Shape and term premium, modeled','orange')}</div>
 <div class="two-col" style="margin-top:18px"><div class="module-panel"><h4>YOU ARE THE YIELD ENGINE</h4><p>Try changing <strong>Normal</strong> to <strong>Inverted</strong>, then move the main rate dial. Different securities care about different maturities.</p><div class="concept-list"><div class="concept-row"><span class="concept-bubble">1</span><div><strong>Spot rate</strong><span>Discount rate for a single cash flow at a specific maturity. A 10-year payment uses the 10-year spot rate in this model.</span></div></div><div class="concept-row"><span class="concept-bubble">2</span><div><strong>Curve slope</strong><span>Long yields can be above or below short yields. Inversion is not a mathematical guarantee of recession.</span></div></div><div class="concept-row"><span class="concept-bubble">3</span><div><strong>Credit spread</strong><span>Municipal and corporate borrowing costs include extra spreads. Change the credit environment above to isolate this effect.</span></div></div></div></div>
 <div class="module-panel"><h4>READ THE TRACK</h4><table class="model-table"><thead><tr><th>MATURITY</th><th>ANNUAL SPOT RATE</th></tr></thead><tbody>${terms.map(t=>`<tr><td>${t} YEARS</td><td>${pct(spot(t),2)}</td></tr>`).join('')}</tbody></table><div class="formula-box"><div class="formula-name">IMPLIED FIVE-YEAR FORWARD RATE, YEARS 5–10</div><code>[(1 + z₁₀)¹⁰ / (1 + z₅)⁵]^(1/5) − 1 = ${pct(f,2)}</code></div><p class="text-note">This is a deliberately constructed annual spot curve. It illustrates discounting and sensitivity, not a forecast of real policy decisions.</p></div></div>`;
}
function renderBonds(){
 const ids=Object.keys(bonds),s=bondStats(state.asset),b=bonds[state.asset],base=bondPrice(state.asset,BASE.rate,BASE.shape,BASE.credit);
 return `<div class="card-choice-grid">${ids.map(id=>`<button type="button" class="card-choice ${id===state.asset?'active':''}" data-asset="${id}"><span class="choice-icon">${bonds[id].icon}</span><strong>${bonds[id].short}</strong><small>${bonds[id].n}Y MATURITY · ${id==='frn'?'VARIABLE COUPON':`${pct(bonds[id].coupon,2)} COUPON`}</small></button>`).join('')}</div>
 <div class="big-stat-grid">${metric('MARKET PRICE / $100 FACE',`$${fmt(s.p,2)}`,'Full discounted value','pink')}${metric('EFFECTIVE RATE DURATION',fmt(s.dur,2),'Years, ±10bp repricing','orange')}${metric('DV01 / $100 FACE',`$${fmt(s.dv01,4)}`,'Value of one basis point','cyan')}</div>
 <div class="two-col" style="margin-top:18px"><div class="module-panel"><h4>${b.name}</h4><p>${b.desc}</p><div class="flow-legend"><span class="pill">${b.n} CASH-FLOW YEARS</span><span class="pill">${pct(creditSpread(b.kind),2)} CREDIT SPREAD</span><span class="pill">CONVEXITY ${fmt(s.conv,1)}</span></div><div class="formula-box"><div class="formula-name">WHAT THE MARKET IS DISCOUNTING</div><code>Price = Σ [couponₜ + principalₜ] / (1 + spotₜ + spread)ᵗ</code><code>Price now: $${fmt(s.p,2)} · Reference: $${fmt(base,2)} · Change: ${signed(100*(s.p/base-1),2)}%</code></div><p class="text-note">Effective duration and convexity here are numerical responses to parallel shifts in the modeled benchmark spot curve. A true option-adjusted analysis would require additional modeling.</p></div>
 <div class="module-panel"><h4>FOLLOW THE COUPONS</h4><table class="model-table"><thead><tr><th>YEAR</th><th>COUPON</th><th>PRINCIPAL</th><th>PRESENT VALUE</th></tr></thead><tbody>${s.pvFlows.map(r=>`<tr><td>${r.t}</td><td>$${fmt(r.coupon,2)}</td><td>$${fmt(r.principal,0)}</td><td>$${fmt(r.pv,2)}</td></tr>`).join('')}<tr class="highlight-row"><td colspan="3">TOTAL BOND PRICE</td><td>$${fmt(s.p,2)}</td></tr></tbody></table></div></div>`;
}
function renderCity(){
 const m=muniModel(),y=m.rows[0];const styles=[['fixed','ISSUE FIXED-RATE BONDS'],['floating','ISSUE FLOATING-RATE BONDS'],['delay','DELAY THE PROJECT']];
 return `<div class="two-col"><div class="module-panel"><h4>THE REFINANCING MEETING</h4><p>Port Meridian has <strong>$120M</strong> of legacy fixed debt at 4.6%, plus <strong>$45M</strong> of principal due in Year 3. A new $35M transit project needs funding. Existing coupons do not reset when your dial moves.</p><span class="form-label">HOW TO FINANCE THE $35M PROJECT</span><div class="choice-pills">${styles.map(([id,l])=>`<button class="button-pick ${state.cityFinance===id?'active':''}" type="button" data-cityfinance="${id}">${l}</button>`).join('')}</div><span class="form-label">OPERATING REVENUE POLICY</span><div class="choice-pills">${[['normal','KEEP CURRENT TAXES'],['surcharge','TEMPORARY +$2.5M/YR LEVY']].map(([id,l])=>`<button class="button-pick ${state.cityTaxes===id?'active':''}" type="button" data-citytaxes="${id}">${l}</button>`).join('')}</div><div class="warning-line">Legacy debt interest remains $5.52M a year in the simplified model. The $45M maturity is refinanced in Year 3 with a new bond—not silently removed from the accounts.</div></div><div class="module-panel"><h4>CITY HALL / TREASURY</h4><div class="big-stat-grid">${metric('ANNUAL OPERATING MARGIN',money(y.operatingMargin,1),'Revenue less services','cyan')}${metric('NEW DEBT RATE',state.cityFinance==='delay'?'NONE':pct(m.loanCoupon,2),state.cityFinance==='floating'?'Resets with short rate':'Set at issuance','orange')}${metric('YEAR-1 DSCR',`${fmt(y.dscr,2)}×`,'Operating margin / debt service','pink')}</div><div class="formula-box"><div class="formula-name">CASH IS NOT PROFIT</div><code>Year 1: $16M + ${money(y.operatingMargin)} operating cash − ${money(y.debtService)} debt service + ${money(y.borrowed)} borrowing − ${money(y.capex)} capex − ${money(y.fees)} fees = ${money(y.cash)} ending cash</code></div><p class="text-note">New bond proceeds finance construction, but do not count as operating revenue. Bond principal repayment is a financing cash outflow, not an operating expense.</p></div></div>
 <div class="module-panel" style="margin-top:18px"><h4>FIVE YEARS ON THE CITY BOOKS</h4><table class="model-table"><thead><tr><th>YR</th><th>OPERATING CASH</th><th>DEBT SERVICE</th><th>NEW DEBT</th><th>CAPEX & FEES</th><th>CLOSING CASH</th></tr></thead><tbody>${m.rows.map(r=>`<tr class="${r.cash<0?'highlight-row':''}"><td>${r.y}</td><td>${money(r.operatingMargin)}</td><td>−${money(r.debtService)}</td><td>${money(r.borrowed)}</td><td>−${money(r.capex+r.fees)}</td><td>${money(r.cash)}</td></tr>`).join('')}</tbody></table><p class="text-note" style="margin-top:13px">The city is assumed able to refinance the Year-3 bullet maturity, with a 1% issuance fee. Real market access is uncertain. The new bond is a 10-year bullet and survives beyond this five-year display.</p></div>`;
}
function renderHedge(){
 const h=hedgeStats(),alts=['none','swap','cap'].map(id=>({id,h:hedgeStats(state.rate,id)}));
 return `<div class="module-panel"><h4>YOUR FLOATING-RATE LOAN</h4><p>You owe $50M at the reference rate plus a 1.7 percentage-point bank spread. Choose how to manage five years of modeled, flat-rate interest payments. The hedge is a separate contract.</p><div class="choice-pills">${[['none','DO NOTHING'],['swap','PAY-FIXED SWAP'],['cap','BUY INTEREST-RATE CAP']].map(([id,l])=>`<button class="button-pick ${state.hedge===id?'active':''}" type="button" data-hedge="${id}">${l}</button>`).join('')}</div><div class="big-stat-grid">${metric('ANNUAL NET INTEREST',money(h.annual,2),'After derivative receipts','pink')}${metric('UPFRONT HEDGE PREMIUM',money(h.upfront,2),'Swap assumed zero initial cost','orange')}${metric('5-YEAR TOTAL CASH COST',money(h.total5,2),'Flat-reference-rate illustration','cyan')}</div></div><div class="two-col" style="margin-top:18px"><div class="module-panel"><h4>HEDGE HORSE RACE</h4><table class="model-table"><thead><tr><th>STRATEGY</th><th>ANNUAL</th><th>5Y COST</th></tr></thead><tbody>${alts.map(v=>`<tr class="${v.id===state.hedge?'highlight-row':''}"><td>${{none:'NO HEDGE',swap:'PAY FIXED',cap:'RATE CAP'}[v.id]}</td><td>${money(v.h.annual,2)}</td><td>${money(v.h.total5,2)}</td></tr>`).join('')}</tbody></table><p class="text-note">A swap costs more than floating borrowing if future reference rates stay below the swap rate. A purchased cap preserves potential benefit from lower rates, but has a premium.</p></div><div class="module-panel"><h4>OPEN THE DERIVATIVE</h4><div class="formula-box"><div class="formula-name">${state.hedge==='swap'?'SWAP NETTING':state.hedge==='cap'?'CAP PAYOFF':'NO PROTECTION'}</div><code>${state.hedge==='swap'?`Loan: ${pct(h.ref+.017,2)} · Receive ref: ${pct(h.ref,2)} · Pay fixed: 4.00% · Net: 5.70%`:state.hedge==='cap'?`Cap strike 5.50% · Annual receipt: max(${pct(h.ref,2)} − 5.50%, 0) × $50M = ${money(h.capPayoff,2)}`:`Annual interest = $50M × (${pct(h.ref,2)} + 1.70%) = ${money(h.loanInterest,2)}`}</code></div><div class="timeline"><div class="timeline-item"><span>FLOATING LOAN</span><strong>${money(h.loanInterest,2)}</strong><small>Before hedge</small></div><div class="timeline-item"><span>SWAP RECEIPT</span><strong>${money(h.swapPayoff,2)}</strong><small>Signed payoff; can be negative</small></div><div class="timeline-item"><span>CAP RECEIPT</span><strong>${money(h.capPayoff,2)}</strong><small>Nonnegative, premium separate</small></div></div><p class="text-note" style="margin-top:13px">Illustrative mark-to-market of a five-year swap under a flat reference-rate path: ${money(h.swapMtm,2)}. Real contracts require a forward curve, valuation adjustments and credit considerations.</p></div></div>`;
}
function renderShock(){
 const s=state.lastStress;
 return `<div class="module-panel"><h4>CHOOSE YOUR FUTURE</h4><p>Pick a scenario and decide whether to protect liquidity, raise taxes, cut city services or borrow emergency funds. Then launch the three-year market event.</p><div class="scenario-grid">${Object.keys(scenarios).map(id=>`<button type="button" data-scenario="${id}" class="event-scenario ${state.scenario===id?'active':''}"><span>SIMULATED EVENT</span><strong>${scenarios[id].name}</strong><small>${scenarios[id].subtitle}</small></button>`).join('')}</div><div style="margin-top:21px"><span class="form-label">YOUR CRISIS RESPONSE</span><div class="choice-pills">${[['reserve','USE RESERVES'],['tax','RAISE $3M/YR TAXES'],['cut','CUT $2.8M/YR SERVICES'],['borrow','BORROW $12M EMERGENCY']].map(([id,l])=>`<button class="button-pick ${state.crisisAction===id?'active':''}" type="button" data-crisis="${id}">${l}</button>`).join('')}</div></div><button class="action-btn" id="runCrisis" type="button">⚡ RUN THE 3-YEAR SHOCK</button></div>
 ${s?`<div class="module-panel" style="margin-top:17px"><div class="outcome-label">SCENARIO RESULTS / ${s.cfg.name}</div><div class="summary-status">${s.status}</div><p>${s.cfg.narrative}</p><div class="big-stat-grid">${metric('MINIMUM CITY CASH',money(s.minimumCash,1),'Negative means unfunded gap',s.minimumCash<0?'orange':'cyan')}${metric('PROPERTY VALUE CHANGE',`${signed(s.pctDrop,1)}%`,'Versus initial reference asset','pink')}${metric('GOVERNMENT BOND PRICE',`$${fmt(s.bcurrent,2)}`,'Per $100 face at Year 3','cyan')}</div><table class="model-table" style="margin-top:15px"><thead><tr><th>YEAR</th><th>REF RATE</th><th>OPERATING CASH</th><th>DEBT SERVICE</th><th>DSCR</th><th>ENDING CASH</th></tr></thead><tbody>${s.rows.map(r=>`<tr class="${r.cash<0?'highlight-row':''}"><td>${r.year}</td><td>${fmt(r.ref,2)}%</td><td>${money(r.revenue-r.operations,1)}</td><td>${money(r.debtService,1)}</td><td>${fmt(r.dscr,2)}×</td><td>${money(r.cash,1)}</td></tr>`).join('')}</tbody></table><div class="${s.minimumCash<0?'warning-line':'success-line'}" style="margin-top:16px">${s.minimumCash<0?'A negative treasury balance signals an unfunded financing gap—not an automatic legal default. Actual default depends on contracts, fund restrictions and available liquidity.':'The simulated treasury remained cash-positive, but that alone does not establish that every bond covenant is met.'}</div><p class="text-note" style="margin-top:12px">The crisis assumes Year-3 refinancing succeeds; it charges modeled debt service and issuance costs. Bond coupons on legacy fixed debt remain unchanged. Simulated rates and assets are fictional.</p></div>`:`<div class="module-panel" style="margin-top:17px"><div class="outcome-label">THE FINAL EXPERIMENT</div><h4>DOES YOUR CITY SURVIVE?</h4><p>The scenario rewrites expected revenues, service costs, property income and borrowing spreads over three years. The treasury recomputes cash flows, while the portfolio reprices the bond and real estate assets. Choose a response, then launch.</p><div class="warning-line">A falling policy-rate path can still coincide with a widening credit spread, declining property values and a refinancing crisis.</div></div>`}`;
}
function setStep(n){state.step=clamp(n,0,4);renderExperiment();$('experiments').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.matches('.chapter-tab'))return setStep(+b.dataset.step);
 if(b.id==='prevBtn')return setStep(state.step-1);
 if(b.id==='nextBtn')return setStep(state.step+1);
 if(b.dataset.asset){state.asset=b.dataset.asset;renderExperiment();return}
 if(b.dataset.cityfinance){state.cityFinance=b.dataset.cityfinance;state.lastStress=null;renderExperiment();return}
 if(b.dataset.citytaxes){state.cityTaxes=b.dataset.citytaxes;state.lastStress=null;renderExperiment();return}
 if(b.dataset.hedge){state.hedge=b.dataset.hedge;state.lastStress=null;renderExperiment();return}
 if(b.dataset.scenario){state.scenario=b.dataset.scenario;state.lastStress=null;renderExperiment();return}
 if(b.dataset.crisis){state.crisisAction=b.dataset.crisis;state.lastStress=null;renderExperiment();return}
 if(b.id==='runCrisis'){state.lastStress=stressRun();renderExperiment();$('runCrisis').scrollIntoView({block:'start',behavior:'smooth'});return}
 if(b.id==='howBtn'){return $('infoModal').showModal()}
 if(b.id==='mathBtn'){return $('mathModal').showModal()}
 if(b.dataset.close){return $(b.dataset.close).close()}
 if(b.id==='resetBtn'){
  Object.assign(state,{rate:4,shape:'normal',credit:'calm',step:0,asset:'gov',cityFinance:'fixed',cityTaxes:'normal',hedge:'swap',scenario:'inflation',crisisAction:'reserve',lastStress:null});
  $('rateRange').value='4';$('shapeSelect').value='normal';$('spreadSelect').value='calm';updateGlobals();return;
 }
});
$('rateRange').addEventListener('input',e=>{state.rate=+e.target.value;state.lastStress=null;updateGlobals()});
$('shapeSelect').addEventListener('change',e=>{state.shape=e.target.value;state.lastStress=null;updateGlobals()});
$('spreadSelect').addEventListener('change',e=>{state.credit=e.target.value;state.lastStress=null;updateGlobals()});
for(const id of ['infoModal','mathModal']){
 $(id).addEventListener('click',e=>{if(e.target===$(id))$(id).close()});
}
updateGlobals();
// Deliberate test hook. Calculations remain available to local browser testing.
window.RateMachine={state,spot,bondPrice,bondStats,propertyStats,muniModel,hedgeStats,stressRun};
