/* THE DEVELOPER'S DILEMMA
 * All money amounts are in fictional USD millions.
 * Static, deterministic, simplified real estate finance simulation.
 * No real securities, contracts, or investment offers.
 */
(() => {
'use strict';
const $ = id => document.getElementById(id);
const fmt = n => (n < 0 ? '−' : '') + '$' + Math.abs(n).toFixed(2) + 'M';
const pct = n => (n * 100).toFixed(1) + '%';
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
const lotsData = [
 {id:0,name:'RIVERGATE',district:'Waterfront',pitch:'Great views. Expensive land. A suspiciously optimistic broker.',land:6.0,demand:1.15,cap:.062,x:100,y:95,w:185,h:130},
 {id:1,name:'OLD FOUNDRY',district:'Industrial edge',pitch:'Cheap dirt, long commute. Growth or a very expensive mistake?',land:2.4,demand:.86,cap:.082,x:357,y:75,w:190,h:145},
 {id:2,name:'STATION SQUARE',district:'Transit hub',pitch:'Commuters everywhere. The bank likes the foot traffic.',land:7.8,demand:1.23,cap:.058,x:645,y:86,w:190,h:125},
 {id:3,name:'ORCHARD BLOCK',district:'Quiet neighborhood',pitch:'Trees, families and surprisingly fierce zoning meetings.',land:3.6,demand:.97,cap:.069,x:106,y:316,w:194,h:127},
 {id:4,name:'MIDTOWN LOT',district:'Commercial center',pitch:'An expensive address where every square foot has an opinion.',land:5.2,demand:1.08,cap:.065,x:382,y:299,w:190,h:140},
 {id:5,name:'EAST YARDS',district:'Emerging district',pitch:'Everyone says this neighborhood is next. Everyone.',land:2.8,demand:.90,cap:.077,x:664,y:311,w:178,h:123},
];
const types = {
 residential:{label:'APARTMENT TOWER',cost:22,noi:3.05,years:2,accent:'#f6a2bb',floor:8,description:'Reliable households, manageable vacancy, slower rent growth.'},
 office:{label:'OFFICE BLOCK',cost:30,noi:4.25,years:3,accent:'#97c1ec',floor:12,description:'High rent potential, expensive construction, volatile leasing.'},
 mixed:{label:'MIXED-USE BLOCK',cost:27,noi:3.7,years:2,accent:'#ffb269',floor:10,description:'Shops and homes share the risk—and the construction budget.'}
};
const levs = {cautious:{name:'CAUTIOUS',ratio:.45,spread:.028},balanced:{name:'BALANCED',ratio:.65,spread:.041},aggressive:{name:'AGGRESSIVE',ratio:.8,spread:.068}};
const modes = {
 rookie:{cash:30,rate:.057,demand:1,desc:'A forgiving opening. Learn the game before the bank learns your name.'},
 mogul:{cash:24,rate:.065,demand:1,desc:'Tighter capital, more expensive financing, and no free miracles.'},
 crash:{cash:20,rate:.077,demand:.93,desc:'Credit is expensive and property values are fragile. Welcome to the downturn.'}
};
const events = [
 {title:'The credit market is open. For now.',detail:'Banks are offering construction loans. Nobody has read the fine print.',rate:0,demand:0,cost:1},
 {title:'The city announces a new transit corridor.',detail:'Buyers pay more for access. Land prices are already whispering about it.',rate:-.004,demand:.06,cost:1.01},
 {title:'Contractors are booked solid.',detail:'Labor shortages increase this year’s construction cost. Fixed-price bids suddenly look attractive.',rate:.006,demand:.01,cost:1.14},
 {title:'The lenders are getting nervous.',detail:'Credit committees tighten valuations and raise the price of new borrowing.',rate:.014,demand:-.06,cost:1.04},
 {title:'Everyone wants a downtown address.',detail:'Demand improves. Operating buildings gain tenants and landlords gain confidence.',rate:-.003,demand:.09,cost:1.025},
 {title:'The office market catches a cold.',detail:'Companies rethink space. Offices take a disproportionate hit.',rate:.009,demand:-.095,cost:1.015,officeShock:.81},
 {title:'A major employer moves into the region.',detail:'A new payroll lifts leasing demand. Local brokers call it a renaissance.',rate:-.006,demand:.12,cost:1.035},
 {title:'Inflation is back at the construction site.',detail:'Materials prices climb. Financing is still available—but no longer cheap.',rate:.012,demand:-.025,cost:1.16},
 {title:'The refinancing wall approaches.',detail:'Lenders want smaller loans and healthier coverage. Everyone starts checking their maturity dates.',rate:.008,demand:-.045,cost:1.06},
 {title:'The market stops panicking.',detail:'Rent collections stabilize. The city recovers, although not every developer does.',rate:-.009,demand:.085,cost:1.0}
];
let state,selected=2,buildType='residential',leverage='balanced',activeTab='portfolio',showXray=false,history=[],currentMode='mogul';
function newLot(seed){return {...seed,stage:'vacant',landCost:0,buildCost:0,originalBuildCost:0,completedYear:null,type:null,loan:0,loanRate:0,loanYearsLeft:0,loanTier:null,buildYear:0,constructionYears:0,officeShock:1,accumNoi:0,operatingYears:0,emergencySale:false};}
function initialise(mode='mogul') {
 currentMode=mode;
 state={year:1,cash:modes[mode].cash,initialCash:modes[mode].cash,rate:modes[mode].rate,demand:modes[mode].demand,cost:1,loans:0,emergency:0,emergencyRate:.145,lastEvent:events[0],lots:lotsData.map(newLot),closed:false,yearReport:null,dealRecords:[],cumulativeNoi:0,cumulativeInterest:0,cumulativeCapex:0,cumulativeLand:0,cumulativeSales:0,cumulativeFees:0};
 selected=2;buildType='residential';leverage='balanced';activeTab='portfolio';showXray=false;history=[];
 $('xrayContent').hidden=true;$('xrayToggle').setAttribute('aria-expanded','false');$('endOverlay').hidden=true;
 Array.from(document.querySelectorAll('.mode')).forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
 $('modeDescription').textContent=modes[mode].desc;
 report('Choose a parcel. Every skyline begins with a land deal.');render();
}
function lot(){return state.lots[selected];}
function cashAvailable(){return Math.max(0,state.cash);}
function projectNoi(l){
 if(l.stage!=='operating')return 0;
 const t=types[l.type];
 const cycle=(l.type==='office'?l.officeShock:1);
 return t.noi*l.demand*state.demand*cycle*Math.pow(1.018,Math.max(0,state.year-l.completedYear));
}
function marketValue(l){
 if(l.stage==='vacant')return 0;
 if(l.stage==='owned')return l.landCost * (0.75+0.25*state.demand);
 if(l.stage==='building')return Math.max(0,(l.landCost+l.buildCost)*clamp(.89*state.demand,.60,1.10));
 const cap = clamp(l.cap+Math.max(-.014,Math.min(.034,(state.rate-.065)*.48)) + (l.type==='office'?.004:0),.043,.14);
 return projectNoi(l)/cap;
}
function debt(){return state.lots.reduce((a,l)=>a+l.loan,0)+state.emergency;}
function assets(){return state.lots.reduce((a,l)=>a+marketValue(l),0);}
function nav(){return state.cash+assets()-debt();}
// Only positive net refinance proceeds count as available liquidity.
// Uses the same collateral, NOI/DSCR, fee, and minimum-advance rules as Deal Room.
function availableCredit(){
 let value=0;
 for(const l of state.lots){
  if(l.stage!=='operating')continue;
  const x=refiTerms(l);
  if(x.gross>.5&&x.net>0)value+=x.net;
 }
 return value;
}
function report(msg,bad=false){const e=$('dealFeedback');e.textContent=msg;e.style.background=bad?'#ffd5cc':'var(--yellow)';}
function record(type,description,amount){state.dealRecords.push({year:state.year,type,description,amount});}
function acquire(){let l=lot();if(l.stage!=='vacant')return report('This plot is not for sale.',true);if(state.cash<l.land)return report('Not enough liquid cash to buy this land. You cannot buy it with paper gains.',true);state.cash-=l.land;l.landCost=l.land;l.stage='owned';state.cumulativeLand+=l.land;record('LAND',`Bought ${l.name} outright`, -l.land);report(`Congratulations. You own ${l.name}. The neighbors are already concerned.`);render();}
function underwriting(l,ty=buildType,lev=leverage){let t=types[ty],v=levs[lev];let equity=t.cost*(1-v.ratio),loan=t.cost*v.ratio,rate=state.rate+v.spread;let expectedNoi=t.noi*l.demand*state.demand*(ty==='office'?.96:1);let cap=clamp(l.cap+Math.max(-.014,(state.rate-.065)*.48)+(ty==='office'?.004:0),.043,.14);let value=expectedNoi/cap;return {cost:t.cost,equity,loan,rate,expectedNoi,value,leveredValue:value-l.land-t.cost,noiAfterInterest:expectedNoi-loan*rate};}
function startBuild(){let l=lot();if(l.stage!=='owned')return report('You need to own a vacant site before building.',true);const u=underwriting(l);if(state.cash<u.equity/types[buildType].years)return report(`The bank requires at least ${fmt(u.equity/types[buildType].years)} for the first construction stage. You have ${fmt(state.cash)}.`,true);
 l.stage='building';l.type=buildType;l.loanTier=leverage;l.loanRate=u.rate;l.buildCost=0;l.originalBuildCost=u.cost;l.constructionYears=types[l.type].years;l.buildYear=0;l.officeShock=1;l.completedYear=null;record('DEVELOPMENT',`Approved ${types[l.type].label} at ${l.name}`,0);report(`Construction approved. Your equity must fund the share lenders do not cover—year by year. Watch liquidity.`);render();}
function sell(){let l=lot();if(l.stage==='vacant')return report('You do not own this site.',true);let market=marketValue(l);let sale=market*(l.stage==='building'?.80:.97);let loan=l.loan;let proceeds=sale-loan;state.cash+=proceeds;l.stage='sold';record('EXIT',`Sold ${l.name}, debt repaid`,proceeds);state.cumulativeSales+=sale;state.lots[selected]=newLot({...lotsData[selected],stage:'vacant'});
 report(proceeds>=0?`Sold for ${fmt(sale)}. After retiring ${fmt(loan)} of debt, ${fmt(proceeds)} hit cash.`:`Distressed sale for ${fmt(sale)}. After retiring the loan, the shortfall of ${fmt(-proceeds)} was paid from corporate cash.`,proceeds<0);if(state.cash<0){state.emergency+=-state.cash;state.cash=0;report('The exit loss exceeded cash. An expensive rescue note financed the shortfall.',true);}render();}
// Refinance terms use both collateral and income underwriting. The game uses
// simple annual interest plus straight-line scheduled principal, not annuities.
function refiTerms(l){
 const rate=state.rate+.038;
 const collateralLimit=marketValue(l)*.65;
 const incomeLimit=Math.max(0,projectNoi(l))/(1.15*(rate+1/8));
 const target=Math.max(0,Math.min(collateralLimit,incomeLimit));
 const fee=target*.018;
 const gross=target-l.loan;
 const net=gross-fee;
 const service=target*(rate+1/8);
 const dscr=service>0?projectNoi(l)/service:null;
 return {rate,collateralLimit,incomeLimit,target,fee,gross,net,dscr};
}
function refinance(){
 let l=lot();
 if(l.stage!=='operating')return report('Only operating properties can be refinanced.',true);
 const x=refiTerms(l);
 if(x.gross<=.5||x.net<=0)return report('Refinancing is unavailable: collateral or income coverage does not support meaningful net cash proceeds after the fee.',true);
 state.cash+=x.net;
 l.loan=x.target;
 l.loanRate=x.rate;
 l.loanYearsLeft=8;
 state.cumulativeFees+=x.fee;
 record('REFINANCE',`${l.name}: net cash raised after financing fee`,x.net);
 report(`Refinanced at ${pct(x.rate)}. Net cash released: ${fmt(x.net)} after a ${fmt(x.fee)} financing fee; projected DSCR ${x.dscr.toFixed(2)}×. Borrowing is not operating profit.`);
 render();
}
function repayEmergency(){if(state.emergency<=0)return report('No emergency borrowing to repay. For once, the bank is disappointed.');const amount=Math.min(state.cash,state.emergency);if(amount<=0)return report('You have no cash to repay the rescue note.',true);state.emergency-=amount;state.cash-=amount;record('DEBT',`Repaid emergency note`, -amount);report(`Repaid ${fmt(amount)} of emergency debt.`);render();}
function currentStress(){const d=debt(),total=assets(),capital=state.cash+total;return d/Math.max(capital,.01);}
function nextYear(){if(state.closed)return;const y=state.year;let scheduled=events[y-1];const crash=currentMode==='crash'&&[3,6,8].includes(y)?{...scheduled,rate:scheduled.rate+.016,demand:scheduled.demand-.075,cost:scheduled.cost*1.10,title:'A credit-market panic grips the city.',detail:'Banks pull back, rents soften and contractors demand more money. This is why reserves exist.'}:scheduled;
 state.rate=clamp(state.rate+crash.rate,.025,.16);state.demand=clamp(state.demand+crash.demand,.60,1.42);state.cost=crash.cost;state.lastEvent=crash;
 let openingCash=state.cash,openingDebt=debt(),noi=0,interest=0,principal=0,capex=0,draws=0,pauses=[],completions=[],depreciation=0;
 // Operating properties earn NOI during the year; financing interest and principal are handled separately.
 for(const l of state.lots){
  if(l.stage==='operating'){
   if(crash.officeShock&&l.type==='office')l.officeShock=crash.officeShock;
   else if(l.type==='office')l.officeShock=clamp(l.officeShock+.07,.75,1);
   let income=projectNoi(l);noi+=income;l.accumNoi+=income;l.operatingYears++;
   if(l.loan>0){let coupon=l.loan*l.loanRate;interest+=coupon;let pay=Math.min(l.loan,Math.max(.01,l.loan/Math.max(1,l.loanYearsLeft)));principal+=pay;l.loan-=pay;l.loanYearsLeft=Math.max(0,l.loanYearsLeft-1);}
   depreciation+=l.buildCost/30;
  }
 }
 // Construction loans are drawn only as work is completed; without equity cash, construction pauses.
 for(const l of state.lots){
  if(l.stage!=='building')continue;
  let t=types[l.type];let planned=l.originalBuildCost/l.constructionYears*state.cost;
  let debtRatio=levs[l.loanTier].ratio,draw=planned*debtRatio,own=planned-draw;
  let totalNeeded=own;
  if(state.cash+noi-interest-principal+draws-capex<totalNeeded){pauses.push(l.name);continue;}
  capex+=planned;draws+=draw;l.buildCost+=planned;l.loan+=draw;l.buildYear++;
  // Loan is drawn at stage end; interest begins next year. Equity is funded by company cash.
  if(l.buildYear>=l.constructionYears){l.stage='operating';l.completedYear=y+1;l.loanYearsLeft=10;completions.push(l.name);}
 }
 let emergencyInterest=state.emergency*state.emergencyRate;
 interest+=emergencyInterest;
 // Liquidity rescue notes are explicit liabilities and carry a punitive fixed annual rate.
 let ending=openingCash+noi+draws-interest-principal-capex;
 let rescue=0;
 if(ending<0){rescue=-ending;state.emergency+=rescue;ending=0;}
 state.cash=ending;state.cumulativeNoi+=noi;state.cumulativeInterest+=interest;state.cumulativeCapex+=capex;
 const profit=noi-interest-depreciation;
 state.yearReport={year:y,openingCash,openingDebt,noi,interest,principal,capex,draws,rescue,closingCash:ending,depreciation,profit,pauses,completions};
 history.push({...state.yearReport,nav:nav()});
 state.year++;
 record('YEAR',`Year ${y} operating cash ${fmt(noi)}; construction ${fmt(capex)}; loans drawn ${fmt(draws)}`,ending-openingCash);
 if(state.year>10){state.closed=true;showEnd();}
 const narrative=[crash.detail,pauses.length?`Construction paused at ${pauses.join(', ')}: insufficient available equity cash.`:'',completions.length?`${completions.join(', ')} reached completion and begins earning rents next year.`:'',rescue?`Emergency borrowing of ${fmt(rescue)} covered the operating/debt cash shortfall.`:''].filter(Boolean).join(' ');
 report(narrative,rescue>0||pauses.length>0);render();
}
function showEnd(){const final=nav(),roi=final/state.initialCash-1;
 let title,summary;
 if(final<state.initialCash*.55){title='THE BANK OWNS THE STORY.';summary='The skyline may be impressive, but your equity suffered. A grand vision cannot pay its coupons.';}
 else if(final>state.initialCash*2.1&&state.emergency<.1){title='YOU BUILT AN EMPIRE.';summary='Your combination of land, financing and rent-paying buildings made the investors very happy.';}
 else{title='YOU LIVED TO BUILD AGAIN.';summary='You made it through a decade of deals. Some choices worked; some will haunt your next board meeting.';}
 $('endTitle').textContent=title;$('endSummary').textContent=summary;
 $('endMetrics').textContent=`EST. FINAL EQUITY: ${fmt(final)}  ·  CHANGE: ${pct(roi)}  ·  CASH: ${fmt(state.cash)}  ·  DEBT: ${fmt(debt())}`;
 $('endOverlay').hidden=false;}
function renderCity(){let svg=$('citySvg');let lines=[];
 lines.push('<defs><pattern id="terrain" width="29" height="29" patternUnits="userSpaceOnUse"><path d="M29 0H0V29" fill="none" stroke="#96c0bf" stroke-width="1"/></pattern><pattern id="road" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M0 8H16" fill="none" stroke="#cbbd9c" stroke-width="2" stroke-dasharray="5 7"/></pattern></defs>');
 lines.push('<rect width="920" height="520" fill="#b4d9d7"/><rect width="920" height="520" fill="url(#terrain)"/>');
 lines.push('<path d="M0 262H920" stroke="#ecd8a8" stroke-width="62"/><path d="M0 262H920" stroke="#c4b38e" stroke-width="3" stroke-dasharray="14 14"/>');
 lines.push('<path d="M322 0V520M607 0V520" stroke="#ecd8a8" stroke-width="46"/><path d="M322 0V520M607 0V520" stroke="#c4b38e" stroke-width="3" stroke-dasharray="12 15"/>');
 lines.push('<g fill="#6ba59f" opacity=".75"><path d="M0 0H920V38H0Z"/><path d="M0 471H920V520H0Z"/></g>');
 for(let i=0;i<state.lots.length;i++){
 const l=state.lots[i],sel=i===selected;const fill=l.stage==='vacant'?'#e9dfc8':l.stage==='owned'?'#8de1df':l.stage==='building'?'#fd987b':'#eeff73';
 const {x,y,w,h}=l;let cx=x+w/2,cy=y+h/2;
 lines.push(`<g class="parcel ${sel?'selected':''}" data-id="${i}" tabindex="0" role="button" aria-label="Select ${l.name}, ${l.stage}">`);
 lines.push(`<rect class="tile" x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${fill}" stroke="#181523" stroke-width="3"/>`);
 if(l.stage==='building'||l.stage==='operating'){
 const floors=l.stage==='building'?Math.max(3,Math.ceil(types[l.type].floor*l.buildYear/l.constructionYears)):types[l.type].floor;
 const height=Math.min(97,24+floors*5),bw=Math.min(72,w*.48),bh=Math.min(48,h*.47),bx=cx-bw/2,by=cy+25;
 lines.push(`<polygon class="building-front" points="${bx},${by-height} ${bx+bw},${by-height} ${bx+bw},${by} ${bx},${by}" fill="${types[l.type].accent}"/>`);
 lines.push(`<polygon class="build-side" points="${bx+bw},${by-height} ${bx+bw+20},${by-height-15} ${bx+bw+20},${by-15} ${bx+bw},${by}"/>`);
 lines.push(`<polygon class="build-top" points="${bx},${by-height} ${bx+20},${by-height-15} ${bx+bw+20},${by-height-15} ${bx+bw},${by-height}"/>`);
 for(let f=0;f<Math.min(5,Math.ceil(floors/2));f++){let yy=by-height+12+f*(height-20)/Math.max(1,Math.min(5,Math.ceil(floors/2)));lines.push(`<rect class="building-windows" x="${bx+10}" y="${yy}" width="11" height="5"/><rect class="building-windows" x="${bx+30}" y="${yy}" width="11" height="5"/>`);}
 if(l.stage==='building')lines.push(`<path d="M${bx+bw+33} ${by-97}v99M${bx+bw+16} ${by-91}h68" stroke="#1c1726" stroke-width="4"/>`);
 }
 lines.push(`<rect x="${x+7}" y="${y+7}" width="31" height="27" fill="#181523"/><text x="${x+12}" y="${y+26}" font-family="Archivo Black,Arial" font-size="15" fill="white">0${i+1}</text>`);
 lines.push(`<text class="lot-label" x="${x+10}" y="${y+h-28}">${l.name}</text><text class="lot-sub" x="${x+10}" y="${y+h-11}">${l.stage==='vacant'?'FOR SALE · '+fmt(l.land):l.stage==='owned'?'YOUR LAND':l.stage==='building'?'UNDER CONSTRUCTION':'RENT GENERATING'}</text>`);
 lines.push('</g>');
 }
 lines.push('<g font-family="DM Mono,monospace" fill="#435f65" font-size="12"><text x="18" y="250">BROADWAY</text><text x="680" y="250">CENTRAL AVENUE</text></g>');
 svg.innerHTML=lines.join('');
 svg.querySelectorAll('.parcel').forEach(g=>{g.addEventListener('click',()=>{selected=+g.dataset.id;render();});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selected=+g.dataset.id;render();}});});
}
function renderDeal(){let l=lot();$('siteDetails').innerHTML=`<div class="site-sup">PARCEL 0${selected+1} / ${l.district.toUpperCase()}</div><div class="site-title">${l.name}</div><p class="site-copy">${l.pitch}</p><div class="detail-grid"><div><span>LAND PRICE</span><b>${fmt(l.land)}</b></div><div><span>NEIGHBORHOOD DEMAND</span><b>${Math.round(l.demand*100)} / 100</b></div><div><span>EST. ASSET VALUE</span><b>${fmt(marketValue(l))}</b></div><div><span>PROPERTY DEBT</span><b>${fmt(l.loan)}</b></div></div><span class="status-pill">${l.stage==='vacant'?'ON THE MARKET':l.stage==='owned'?'YOU OWN THE PLOT':l.stage==='building'?`BUILDING · ${l.buildYear}/${l.constructionYears} YEARS`:'RENT GENERATING'}</span>`;
 let el=$('dealControls');
 if(l.stage==='vacant'){el.innerHTML=`<button class="primary-action" id="buyBtn" ${state.closed?'disabled':''}>BUY LAND FOR ${fmt(l.land).toUpperCase()} ↗</button><p class="fine-note">Land is purchased entirely with cash. You cannot spend estimated property appreciation.</p>`;$('buyBtn').addEventListener('click',acquire);}
 else if(l.stage==='owned'){
 const u=underwriting(l);
 el.innerHTML=`<label class="choice-label" for="buildType">WHAT DO YOU WANT TO BUILD?</label><select id="buildType" class="choice-select">${Object.entries(types).map(([id,t])=>`<option value="${id}" ${id===buildType?'selected':''}>${t.label} · ${fmt(t.cost)} CONSTRUCTION</option>`).join('')}</select><label class="choice-label" for="leverage">HOW MUCH WILL THE BANK FINANCE?</label><select id="leverage" class="choice-select">${Object.entries(levs).map(([id,l])=>`<option value="${id}" ${id===leverage?'selected':''}>${l.name} · ${Math.round(l.ratio*100)}% OF CONSTRUCTION</option>`).join('')}</select><div class="proforma" id="proforma"></div><button class="primary-action" id="buildBtn" ${state.closed?'disabled':''}>BREAK GROUND ↗</button><div class="button-row"><button class="alt-action danger-action" id="sellBtn">SELL THE LAND</button></div>`;
 $('buildType').addEventListener('change',e=>{buildType=e.target.value;renderDeal();});$('leverage').addEventListener('change',e=>{leverage=e.target.value;renderDeal();});$('buildBtn').addEventListener('click',startBuild);$('sellBtn').addEventListener('click',sell);
 const cap=underwriting(l);$('proforma').innerHTML=`<div><span>CONSTRUCTION BUDGET</span><b>${fmt(cap.cost)}</b></div><div><span>PLANNED BANK LOAN</span><b>${fmt(cap.loan)}</b></div><div><span>YOUR SHARE / OVER BUILD</span><b>${fmt(cap.equity)}</b></div><div><span>FIRST STAGE EQUITY (EST.)</span><b>${fmt(cap.equity/types[buildType].years)}</b></div><div><span>FIRST STAGE CASH HEADROOM (EST.)</span><b class="${state.cash>=cap.equity/types[buildType].years?'deal-healthy':'deal-risk'}">${fmt(state.cash-cap.equity/types[buildType].years)}</b></div><div><span>NEW LOAN RATE (FIXED)</span><b>${pct(cap.rate)}</b></div><div><span>STABILIZED NOI / YEAR (EST.)</span><b>${fmt(cap.expectedNoi)}</b></div><div><span>ILLUSTRATIVE STABILIZED VALUE</span><b>${fmt(cap.value)}</b></div><div><span>VALUE LESS LAND + BASE BUILD COST (EST.)</span><b class="${cap.value-l.landCost-cap.cost>=0?'deal-healthy':'deal-risk'}">${fmt(cap.value-l.landCost-cap.cost)}</b></div><p class="fine-note">First-stage cash headroom = cash today less estimated required equity; future cash flows and price shocks may change it. Value less land and base construction budget is an illustrative development spread, NOT realized profit: financing, carrying costs, overruns, and selling costs are excluded. Annual debt service is not included in NOI.</p>`;
 }
 else if(l.stage==='building'){
 let t=types[l.type],upcoming=l.originalBuildCost/l.constructionYears*state.cost,share=upcoming*(1-levs[l.loanTier].ratio);
 el.innerHTML=`<div class="proforma"><div><span>WORK COMPLETED</span><b>${l.buildYear} / ${l.constructionYears} YEARS</b></div><div><span>CAPITAL SPENT ON BUILD</span><b>${fmt(l.buildCost)}</b></div><div><span>OUTSTANDING LOAN</span><b>${fmt(l.loan)}</b></div><div><span>NEXT EQUITY REQUIREMENT (EST.)</span><b>${fmt(share)}</b></div><div><span>CASH LESS NEXT STAGE EQUITY (EST.)</span><b class="${state.cash>=share?'deal-healthy':'deal-risk'}">${fmt(state.cash-share)}</b></div><div><span>BANK INTEREST RATE</span><b>${pct(l.loanRate)}</b></div></div><p class="fine-note">Cash less next stage equity uses today’s cash only; the actual year-end funding test also includes property NOI, interest, principal and other construction commitments. Work pauses if the required equity is unavailable. Interest on new loan drawings begins the following year.</p><button class="primary-action danger-action" id="sellBtn">SELL UNFINISHED SITE ↗</button>`;
 $('sellBtn').addEventListener('click',sell);
 }
 else{
 let noi=projectNoi(l),v=marketValue(l),ds=l.loan*l.loanRate+(l.loan>0?l.loan/Math.max(1,l.loanYearsLeft):0);
 const x=refiTerms(l),canRefi=x.gross>.5&&x.net>0;
 el.innerHTML=`<div class="proforma"><div><span>NET OPERATING INCOME</span><b>${fmt(noi)} / YEAR</b></div><div><span>EST. MARKET VALUE</span><b>${fmt(v)}</b></div><div><span>DEBT OUTSTANDING</span><b>${fmt(l.loan)}</b></div><div><span>LOAN COUPON</span><b>${pct(l.loanRate)}</b></div><div><span>DEBT SERVICE COVERAGE (EST.)</span><b>${ds>0?(noi/ds).toFixed(2)+'×':'NO DEBT'}</b></div></div>
 <div class="proforma" aria-label="Refinancing preview"><div><span>REFINANCE: NEW LOAN (EST.)</span><b>${fmt(x.target)}</b></div><div><span>NEW FIXED RATE</span><b>${pct(x.rate)}</b></div><div><span>FINANCING FEE</span><b>${fmt(x.fee)}</b></div><div><span>NET CASH RELEASED (EST.)</span><b>${canRefi?fmt(x.net):'NOT AVAILABLE'}</b></div><div><span>NEW DSCR (EST.)</span><b>${x.dscr===null?'N/A':x.dscr.toFixed(2)+'×'}</b></div></div>
 <div class="button-row"><button class="alt-action" id="refiBtn" ${canRefi?'':'disabled'}>REFINANCE</button><button class="alt-action danger-action" id="sellBtn">SELL BUILDING</button></div><p class="fine-note">Refinancing is constrained by 65% loan-to-value and minimum 1.15× projected debt-service coverage. Estimates use the current year’s NOI, an 8-year repayment term, and a 1.8% issuance fee. Market outcomes may change next year.</p>`;
 $('refiBtn').addEventListener('click',refinance);$('sellBtn').addEventListener('click',sell);
 }
}
function row(label,value,strong=false){return `<div class="book-row ${strong?'strong':''}"><span>${label}</span><span>${value}</span></div>`;}
function renderBooks(){let content='';if(activeTab==='portfolio'){
 content=row('Spendable cash',fmt(state.cash))+row('Estimated market value of properties',fmt(assets()))+row('Outstanding property debt',`(${fmt(state.lots.reduce((s,l)=>s+l.loan,0))})`)+row('Emergency credit / rescue notes',`(${fmt(state.emergency)})`)+row('ESTIMATED EQUITY / NAV',fmt(nav()),true);
 content+='<p class="fine-note">Property value is modeled from NOI and capitalization rates; it is not accounting revenue or liquid cash. The equity estimate can fall without any cash leaving the bank.</p>';
 }else if(activeTab==='cashflow'){
 const r=state.yearReport;
 content=r?row(`Opening cash · Year ${r.year}`,fmt(r.openingCash))+row('Net operating income / receipts',fmt(r.noi))+row('Construction loan cash drawn',fmt(r.draws))+row('Interest paid',`(${fmt(r.interest)})`)+row('Scheduled principal repaid',`(${fmt(r.principal)})`)+row('Construction cash spending',`(${fmt(r.capex)})`)+row('Emergency cash borrowed',fmt(r.rescue))+row('Closing cash after year-end',fmt(r.closingCash),true)+`<p class="fine-note">Yearly operating cash view excludes acquisitions, sales and refinancing done manually during the year; these appear immediately in current cash and the transaction history. Estimated annual profit after depreciation: ${fmt(r.profit)}. This is not a full GAAP income statement.</p>`:'<p class="fine-note">Advance a year to see the operating and financing cash flows reconcile. Manual transactions take effect immediately in cash and the asset ledger.</p>';
 }else{
 let li=state.lots.filter(l=>l.loan>0);content=li.length?li.map(l=>row(l.name,`${fmt(l.loan)} · ${pct(l.loanRate)}`)).join(''):row('No property debt outstanding','—');content+=row('Emergency borrowing',fmt(state.emergency))+row('Total liabilities',fmt(debt()),true);
 content+='<p class="fine-note">Construction debt is drawn with progress and carries a fixed rate. Once complete, loans amortize over 10 years; refinancing resets the remaining term to 8 years. Emergency notes charge 14.5% annually and are not automatically amortized.</p>';
 if(state.emergency>0)content+='<button class="alt-action" id="repayBtn">REPAY EMERGENCY NOTE</button>';
 }
 $('booksContent').innerHTML=content;
 const repayment=$('repayBtn');if(repayment)repayment.addEventListener('click',repayEmergency);
 if(showXray){let l=lot(),cap=l.stage==='operating'?clamp(l.cap+Math.max(-.014,Math.min(.034,(state.rate-.065)*.48))+(l.type==='office'?.004:0),.043,.14):null;
 $('xrayContent').innerHTML=`<h3>THE MATH UNDER THE MODEL</h3><b>${l.name} / ${l.stage.toUpperCase()}</b><p>${l.stage==='operating'?`Annual property NOI = base NOI × neighborhood demand × city demand × occupancy shock × annual escalation = <b>${fmt(projectNoi(l))}</b>. Estimated market cap rate = <b>${pct(cap)}</b>. Estimated value = NOI / cap rate = <b>${fmt(marketValue(l))}</b>.`:l.stage==='building'?`Under-construction estimated value = invested land + funded work, multiplied by a conservative market adjustment = <b>${fmt(marketValue(l))}</b>.`:`Land uses recorded purchase cost adjusted for market demand. This is NOT a cash balance.`}</p><p>Corporate equity = spendable cash + estimated property values − all outstanding loans = <b>${fmt(nav())}</b>.</p><p>Construction debt draw = actual stage cost × chosen loan share. Remaining stage cost is funded with your cash. Loan principal is not an operating expense; it is a financing cash outflow. Property depreciation is estimated straight-line over 30 years after completion (excluding land), for simplified profit reporting.</p><p><b>CAUTION:</b> Valuations ignore transaction taxes and many institutional real estate complexities. Annual projected NOI is scenario-based, not evidence of actual market rents.</p>`;
 }
}
function render(){renderCity();renderDeal();renderBooks();
 $('statYear').textContent=`${Math.min(state.year,10)} / 10`;
 $('statCash').textContent=fmt(state.cash);$('statAssets').textContent=fmt(assets());$('statDebt').textContent=fmt(debt());$('statNav').textContent=fmt(nav());$('statCredit').textContent=fmt(availableCredit());
 $('statRate').textContent=pct(state.rate);$('statDemand').textContent=Math.round(state.demand*100);
 $('statPressure').textContent=state.rate>.10?'HIGH':state.demand<.87?'WEAK':'NORMAL';
 $('eventTitle').textContent=state.lastEvent.title;$('eventDetail').textContent=state.lastEvent.detail;
 const held=state.lots.filter(l=>l.stage!=='vacant').length,finished=state.lots.filter(l=>l.stage==='operating').length;
 $('boardStatus').textContent=`${held} HELD · ${finished} EARNING RENT`;
 $('nextYearBtn').disabled=state.closed;
}
Array.from(document.querySelectorAll('.mode')).forEach(b=>b.addEventListener('click',()=>{if(b.dataset.mode===currentMode)return;if(confirm('Start a new game in this difficulty? Current decisions will be reset.'))initialise(b.dataset.mode);}));
$('newGameBtn').addEventListener('click',()=>{if(confirm('Start a new city? Your current deals will be reset.'))initialise(currentMode);});
$('nextYearBtn').addEventListener('click',nextYear);
Array.from(document.querySelectorAll('.tab')).forEach(b=>b.addEventListener('click',()=>{activeTab=b.dataset.tab;document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t===b));renderBooks();}));
$('xrayToggle').addEventListener('click',()=>{showXray=!showXray;$('xrayContent').hidden=!showXray;$('xrayToggle').setAttribute('aria-expanded',String(showXray));renderBooks();});
$('restartFromEnd').addEventListener('click',()=>initialise(currentMode));$('closeEnd').addEventListener('click',()=>$('endOverlay').hidden=true);
initialise('mogul');
})();
