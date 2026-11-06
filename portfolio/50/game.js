/* THE PARALLEL CITIES EXPERIMENT — fictional deterministic finance / city model.
   All figures USD millions unless otherwise noted. No remote calls or live blockchain.
   Public-facing page has no date or internal project number. */
'use strict';
const $ = id => document.getElementById(id);
const money = n => `${n < -0.004 ? '−' : ''}$${Math.abs(n).toFixed(1)}M`;
const nfmt = n => Number(n).toLocaleString('en-US', {maximumFractionDigits:0});
const clamp = (n, a, b) => Math.min(b, Math.max(a,n));
const copy = obj => JSON.parse(JSON.stringify(obj));
const PROJECTS = {
 maintenance:{cost:0,name:'Maintain / no expansion',access:0,infra:0,resilience:0,housing:0,job:0,rent:0,land:0,capture:0},
 transit:{cost:22,name:'Transit stations',access:7.5,infra:3.4,resilience:.3,housing:0,job:.006,rent:.017,land:.025,capture:3.3},
 housing:{cost:24,name:'Affordable housing',access:1.2,infra:2.3,resilience:0,housing:3800,job:.004,rent:-.025,land:.003,capture:1.4},
 resilience:{cost:20,name:'Coastal defenses',access:.3,infra:2.2,resilience:10.5,housing:0,job:.003,rent:.002,land:.006,capture:.5},
 water:{cost:17,name:'Water and drainage',access:.5,infra:8.2,resilience:2.5,housing:0,job:.004,rent:.001,land:.007,capture:.8}
};
const EVENTS = [
 {name:'Quiet growth',detail:'Employment and taxes grow gradually.',jobs:0,rate:0,loss:0,activity:1,grant:1},
 {name:'A development boom',detail:'New employers bring modest growth.',jobs:.012,rate:0,loss:0,activity:1.04,grant:1},
 {name:'Construction inflation',detail:'Project costs increase and markets anticipate higher interest rates.',jobs:0,rate:.28,loss:0,activity:1,grant:1,cost:1.12},
 {name:'New regional employer',detail:'A large employer brings new jobs and commuting demand.',jobs:.015,rate:.1,loss:0,activity:1.05,grant:1},
 {name:'The recession arrives',detail:'Jobs and activity tax receipts decline in both cities.',jobs:-.042,rate:.5,loss:0,activity:.88,grant:1,credit:.35},
 {name:'An uneven recovery',detail:'Consumer activity begins to recover; lenders remain cautious.',jobs:.004,rate:.22,loss:0,activity:.98,grant:1},
 {name:'The coastal storm',detail:'Flooding damages public assets. Resilience investment reduces losses.',jobs:-.009,rate:.15,loss:14,activity:.94,grant:1,credit:.2},
 {name:'Rebuilding season',detail:'Repairs draw on reserves, but employment starts to recover.',jobs:.01,rate:0,loss:2.8,activity:1.02,grant:1},
 {name:'A booming housing market',detail:'Property demand increases, adding pressure to rents.',jobs:.008,rate:.1,loss:0,activity:1.04,grant:1,rent:.015},
 {name:'Funding cuts',detail:'Intergovernmental transfers are reduced for a year.',jobs:-.006,rate:.28,loss:0,activity:.97,grant:.74},
 {name:'Green-industry expansion',detail:'New clean-industry jobs attract residents.',jobs:.013,rate:-.1,loss:0,activity:1.04,grant:1},
 {name:'Borrowing costs ease',detail:'The economy steadies and market rates move lower.',jobs:.008,rate:-.45,loss:0,activity:1.015,grant:1},
 {name:'A second property boom',detail:'Higher land values create investment opportunities and rent pressure.',jobs:.012,rate:.05,loss:0,activity:1.04,grant:1,rent:.014},
 {name:'A mild slowdown',detail:'Job growth softens, slowing some local receipts.',jobs:-.014,rate:.18,loss:0,activity:.965,grant:1},
 {name:'Regional transit growth',detail:'Transport connectivity improves across the region.',jobs:.012,rate:.06,loss:0,activity:1.025,grant:1},
 {name:'Credit markets tighten',detail:'Lenders demand wider risk spreads from heavily indebted cities.',jobs:-.01,rate:.72,loss:0,activity:.95,grant:1,credit:.7},
 {name:'Unusually hot summer',detail:'Public utilities face emergency repair and operating costs.',jobs:-.005,rate:.18,loss:7.5,activity:.98,grant:1},
 {name:'Economic renewal',detail:'New investment supports employment and tax receipts.',jobs:.014,rate:-.15,loss:0,activity:1.045,grant:1},
 {name:'The rate-reset year',detail:'Borrowing costs rise again, making refinancing less attractive.',jobs:0,rate:.55,loss:0,activity:1,grant:1,credit:.24},
 {name:'The future arrives',detail:'The twenty-year experiment reaches its final accounting.',jobs:.007,rate:-.04,loss:0,activity:1.015,grant:1}
];
function eventFor(year,scenario){
 const e=copy(EVENTS[year-1]||EVENTS[0]);
 if(scenario==='stable'){e.jobs*=.55;e.rate*=.55;e.loss*=.48;e.activity=1+(e.activity-1)*.55;e.grant=1+(e.grant-1)*.55;if(e.cost)e.cost=1+(e.cost-1)*.55;if(e.credit)e.credit*=.5;}
 if(scenario==='severe'){e.jobs*=1.42;e.rate*=1.5;e.loss*=1.65;e.activity=1+(e.activity-1)*1.4;e.grant=1+(e.grant-1)*1.4;if(e.cost)e.cost=1+(e.cost-1)*1.3;if(e.credit)e.credit*=1.7;}
 e.rate=Number(e.rate||0);e.credit=Number(e.credit||0);e.cost=Number(e.cost||1);e.rent=Number(e.rent||0);
 return e;
}
function startingState(){return {
 year:0,cash:32,population:250000,jobs:95000,medianIncome:55000,rent:1350,housingUnits:105000,
 access:52,infrastructure:61,resilience:38,service:60,landIndex:100,capitalStock:540,
 cumulativeCapex:0,cumulativeLoss:0,cumulativeLevies:0,totalFees:0,notesIssued:0,lastRating:'FISCALLY STEADY',
 bonds:[{id:'LEGACY',kind:'Legacy general obligation',origin:180,balance:180,coupon:4.2,term:20,issued:0}],lastLedger:null
};}
const baseState=startingState();
let state={A:startingState(), B:startingState()};
let history=[{year:0,A:copy(state.A),B:copy(state.B)}];
let records={A:[],B:[]};
let year=0,scenario='mixed',chartMetric='cash',savedFuture=null;
function policy(city){return {
 tax:$('tax'+city).value,services:$('services'+city).value,project:$('project'+city).value,
 bond:$('bond'+city).value,share:Number($('share'+city).value),capture:$('capture'+city).value
};}
function metricRevenue(s,p,e,yr){
 const inflation=1+(.014*(yr-1)), pop=s.population/250000, jobs=s.jobs/95000;
 const taxMult=p.tax==='higher'?1.10:p.tax==='lower'?.92:1;
 const property=36*inflation*(.55+.45*pop)*(s.landIndex/100)**.16*taxMult;
 const activity=17*inflation*(.3+.7*jobs)*e.activity;
 const fees=10*inflation*(.3+.7*pop);
 const grants=17*inflation*e.grant;
 return {property,activity,fees,grants,total:property+activity+fees+grants};
}
function couponQuote(s,p,e,revenue){
 const ratio=s.bonds.reduce((x,b)=>x+b.balance,0)/Math.max(revenue,1);
 const coverage=Math.max(0,.22-s.cash/Math.max(revenue,1));
 const spread=.55+Math.max(0,ratio-2.1)*.43+coverage*1.3+e.credit+(s.notesIssued>0?.22:0);
 const instrumentPremium=p.bond==='tokenized'?.17:p.bond==='pooled'?.09:0;
 return clamp(4.1+e.rate+spread+instrumentPremium,2.2,15);
}
function issuanceFees(amt,kind,s){
 if(amt<=0)return 0;
 if(kind==='pooled')return .24+.009*amt;
 if(kind==='tokenized')return (s.bonds.some(b=>b.kind==='Tokenized bond')?.18:1.05)+.0045*amt;
 return .73+.012*amt;
}
function deriveStatus(s,rev){
 const debt=s.bonds.reduce((a,b)=>a+b.balance,0);
 if(s.cash<.01||debt/Math.max(rev,1)>4.7||s.notesIssued>rev*.3)return 'IN DISTRESS';
 if(s.cash<rev*.13||debt/rev>3.3)return 'UNDER PRESSURE';
 return 'FISCALLY STEADY';
}
function simulateYear(source,p,yr,mode){
 const s=copy(source),e=eventFor(yr,mode),project=PROJECTS[p.project];
 const openingCash=s.cash,openingDebt=s.bonds.reduce((a,b)=>a+b.balance,0);
 const newCapital=project.cost*e.cost;
 const receipts=metricRevenue(s,p,e,yr);
 const serviceFactor=p.services==='lean'?.92:p.services==='expand'?1.10:1;
 const operatingServices=(52.8*(1.017**(yr-1))*(s.population/250000)**.55*serviceFactor)+s.cumulativeCapex*.007;
 let interest=0,principal=0,financeAdministration=0;
 for(const bond of s.bonds){
  interest+=bond.balance*bond.coupon/100;
  const scheduled=Math.min(bond.balance,bond.origin/bond.term);principal+=scheduled;
  bond.balance=Math.max(0,bond.balance-scheduled);
  if(bond.kind==='Pooled issue')financeAdministration+=.028;
  if(bond.kind==='Tokenized bond')financeAdministration+=.038;
 }
 s.bonds=s.bonds.filter(b=>b.balance>.000001);
 const newBondAmount=newCapital*p.share;
 const fees=issuanceFees(newBondAmount,p.bond,s);
 const levy=p.capture==='levy'?project.capture*(e.cost>1?1.05:1):0;
 const newResilience=clamp(s.resilience+project.resilience-1.1,0,100);
 const physicalLoss=e.loss * (1-.72*newResilience/100) * (s.population/250000)**.18;
 let operatingReceipts=receipts.total;
 const totalServices=operatingServices+financeAdministration;
 const interestExpense=interest;
 const principalExpense=principal;
 let closing=openingCash+operatingReceipts-totalServices-interestExpense-principalExpense-newCapital+newBondAmount-fees+levy-physicalLoss;
 let emergency=0;
 if(closing<0){emergency=-closing;closing=0; s.bonds.push({id:'EMG-'+yr,kind:'Emergency note',origin:emergency,balance:emergency,coupon:9.8,term:5,issued:yr});s.notesIssued+=emergency;}
 if(newBondAmount>0){
  const kind=p.bond==='tokenized'?'Tokenized bond':p.bond==='pooled'?'Pooled issue':'Conventional bond';
  s.bonds.push({id:'ISS-'+yr,kind,origin:newBondAmount,balance:newBondAmount,coupon:couponQuote(source,p,e,receipts.total),term:12,issued:yr});
 }
 // Demographic and land processes are stylized feedbacks, not causal estimates.
 const taxJobs=p.tax==='lower'?.004:p.tax==='higher'?-.003:0;
 const serviceJobs=p.services==='expand'?.003:p.services==='lean'?-.002:0;
 const jobGrowth=.012+e.jobs+taxJobs+serviceJobs+project.job;
 s.jobs=Math.max(20000,Math.round(s.jobs*(1+jobGrowth)));
 const migration=.0025+(p.project==='housing'?.0055:0)+(p.project==='transit'?.0016:0)+(s.rent*12/s.medianIncome>.39?-.003:0)+e.jobs*.2;
 s.population=Math.max(100000,Math.round(s.population*(1+migration)));
 s.housingUnits+=project.housing;
 s.medianIncome*=1.018+e.jobs*.32+(p.services==='expand'?.001:0);
 const housingGrowth=project.housing ? .007: .022;
 const rentFactor=1+housingGrowth+project.rent+e.rent+(levy>0?.003:0)+(e.jobs>0?e.jobs*.32:0);
 s.rent=Math.max(450,s.rent*rentFactor);
 s.landIndex*=1.012+project.land+e.jobs*.23;
 s.access=clamp(s.access+project.access-.6,5,100);
 s.infrastructure=clamp(s.infrastructure+project.infra-(1.95+physicalLoss*.16)+(p.services==='expand'?.65:0),2,100);
 s.service=clamp(s.service+(p.services==='expand'?4.1:p.services==='lean'?-2.7:1.0)+project.infra*.14-1.0-physicalLoss*.11,1,100);
 s.resilience=newResilience;
 s.capitalStock=s.capitalStock*.986+newCapital-physicalLoss*.23;
 s.cumulativeCapex+=newCapital;s.cumulativeLoss+=physicalLoss;s.cumulativeLevies+=levy;s.totalFees+=fees;
 s.cash=closing;s.year=yr;
 const newDebt=s.bonds.reduce((x,b)=>x+b.balance,0);
 s.lastRating=deriveStatus(s,receipts.total);
 const ledger={year:yr,event:e.name,scenario:mode,policy:copy(p),openingCash,openingDebt,
  revenue:receipts,services:totalServices,baseServiceSpend:operatingServices,admin:financeAdministration,
  interest:interestExpense,principal:principalExpense,capex:newCapital,issue:newBondAmount,
  issuanceFees:fees,levy,stormLoss:physicalLoss,emergency,closingCash:closing,closingDebt:newDebt,
  quotedCoupon:newBondAmount>0?couponQuote(source,p,e,receipts.total):null,
  housingBurden:100*s.rent*12/s.medianIncome, access:s.access, infrastructure:s.infrastructure,
  population:s.population,jobs:s.jobs,service:s.service,resilience:s.resilience,landIndex:s.landIndex};
 s.lastLedger=ledger;
 return {state:s,ledger};
}
const annual=(city,yr)=>records[city][yr-1]||null;
function skylineSvg(s,side){
 const blue=side==='A';const sky=blue?'#bed8df':'#e8cbaa';const towers=blue?['#789ab3','#587895','#9ab8bf']:['#d98974','#bd6e60','#ecc29f'];
 const growth=clamp(Math.floor((s.jobs-95000)/5600),0,9);
 const blocks=[];const seed=[42,63,37,75,58,48,87,57,71,55,34,66,44,72];
 const count=10+Math.floor(growth/2);const xpositions=[30,87,143,191,242,302,349,404,452,480,156,274,383,79];
 for(let i=0;i<count;i++){
  const x=xpositions[i],w= i%3===0?34:25,h=seed[i]+Math.min(33,growth*5),y=201-h;
  blocks.push(`<g class="tower"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${towers[i%3]}" stroke="#24334b" stroke-width="1.4"/><rect x="${x+4}" y="${y+10}" width="5" height="5" fill="#fff4ce"/><rect x="${x+14}" y="${y+10}" width="5" height="5" fill="#fff4ce"/><path d="M${x+5} ${y+23}h${w-10} M${x+5} ${y+34}h${w-10} M${x+5} ${y+45}h${w-10}" stroke="#ebeee5" opacity=".65" stroke-width="1.8"/></g>`);
 }
 const trees=Math.floor(s.resilience/14)+2;
 const tree=Array.from({length:trees},(_,i)=>{const x=45+i*64;return `<circle cx="${x}" cy="208" r="11" fill="${blue?'#739977':'#8e9b77'}" stroke="#314957" stroke-width="2"/><path d="M${x} 211v16" stroke="#314957" stroke-width="3"/>`;}).join('');
 const transit=s.access>61?`<path d="M0 218 Q145 178 280 219 T540 206" fill="none" stroke="${blue?'#d35d4f':'#365ca1'}" stroke-width="5"/><g fill="#fff9dc" stroke="#24334b" stroke-width="2">${[92,243,395].map(x=>`<circle cx="${x}" cy="207" r="8"/>`).join('')}</g>`:'';
 const housing=Math.max(0,Math.min(5,Math.floor((s.housingUnits-105000)/6500)));
 const houses=Array.from({length:housing},(_,i)=>{const x=14+i*100;return `<path d="M${x} 204l17 -14 17 14v27h-34z" fill="#f5ead5" stroke="#24334b" stroke-width="1.5"/><rect x="${x+11}" y="210" width="11" height="18" fill="#e4ab7e"/>`;}).join('');
 return `<svg viewBox="0 0 540 258" preserveAspectRatio="none" role="img" aria-label="Illustrated growing skyline of ${side==='A'?'Alderport':'Novahaven'}"><rect width="540" height="258" fill="${sky}"/><circle cx="${blue?435:113}" cy="57" r="31" fill="${blue?'#f5ecc7':'#ffd583'}"/><path d="M0 181 Q110 126 237 165 Q360 98 540 155v103H0z" fill="${blue?'#a5c6c1':'#cebba8'}"/><path d="M0 218 Q165 188 280 220 T540 205v53H0z" fill="${blue?'#6d9cad':'#a5b3a0'}"/><g>${blocks.join('')}</g><path d="M0 231H540" stroke="#324258" stroke-width="5"/>${houses}${tree}${transit}<text x="523" y="246" fill="#1c3349" text-anchor="end" font-size="9" font-weight="bold" font-family="Arial">INFRASTRUCTURE ${Math.round(s.infrastructure)}/100</text></svg>`;
}
function renderCity(city){
 const s=state[city],L=s.lastLedger;$("cityArt"+city).innerHTML=skylineSvg(s,city);
 $('cash'+city).textContent=money(s.cash);$('debt'+city).textContent=money(s.bonds.reduce((t,b)=>t+b.balance,0));
 $('housing'+city).textContent=Math.round(s.rent*12/s.medianIncome*100)+'%';$('infrastructure'+city).textContent=`${Math.round(s.infrastructure)} / 100`;
 $('policyYear'+city).textContent=year<20?`NEXT: YEAR ${String(year+1).padStart(2,'0')}`:'HORIZON COMPLETE';
 const badge=$('status'+city);badge.textContent=s.lastRating;badge.className='status '+(s.lastRating==='IN DISTRESS'?'danger':s.lastRating==='UNDER PRESSURE'?'warn':'');
}
function preview(city){
 const next=year+1;
 if(next>20){$('projected'+city).textContent='COMPLETE';$('projectionNote'+city).textContent='Rewind or start over to try other choices.';return;}
 const pol=policy(city),res=simulateYear(state[city],pol,next,scenario);
 $('projected'+city).textContent=money(res.state.cash);
 $('projectionNote'+city).textContent=`${PROJECTS[pol.project].name}: ${money(res.ledger.capex)} · issue ${money(res.ledger.issue)} at ${res.ledger.quotedCoupon===null?'no new debt':res.ledger.quotedCoupon.toFixed(2)+'%'}`;
}
function applyYears(count){
 if(year>=20)return;
 let n=0;
 while(n<count&&year<20){
  const next=year+1;
  for(const c of ['A','B']){
   const ret=simulateYear(state[c],policy(c),next,scenario);
   state[c]=ret.state;records[c].push(ret.ledger);
  }
  year=next;history.push({year,A:copy(state.A),B:copy(state.B)});n++;
 }
 $('actionState').textContent=year===20?'The twenty-year futures have arrived. Save an ending or rewind and branch.':`Year ${String(year).padStart(2,'0')} closed · both cities faced the same outside event.`;
 render();$('inspectYear').value=String(year);ledger();
 if(year===20)$('results').scrollIntoView({behavior:'smooth',block:'start'});
}
function updateTimelineControls(){
 $('yearBadge').textContent=`${String(year).padStart(2,'0')} / 20`;
 for(const id of ['advanceOne','advanceFive','advanceAll'])$(id).disabled=year>=20;
 const rew=$('rewindYear');const old=Number(rew.value);rew.innerHTML='';
 for(let i=0;i<year;i++){const opt=document.createElement('option');opt.value=i;opt.textContent=`Year ${String(i).padStart(2,'0')}`+(i===0?' · beginning':' · after budget');rew.appendChild(opt);}
 rew.value=String(Math.min(old,Math.max(0,year-1)));$('rewindButton').disabled=year===0;
 const inspect=$('inspectYear'),oldIns=Number(inspect.value);inspect.innerHTML='';
 for(let i=0;i<=year;i++){const o=document.createElement('option');o.value=i;o.textContent=i===0?'Opening balance':`Year ${String(i).padStart(2,'0')}`;inspect.appendChild(o);}
 inspect.value=String(Math.min(oldIns,year));
 $('scenario').disabled=year>0;
 for(const city of ['A','B'])for(const k of ['tax','services','project','bond','share','capture'])$(k+city).disabled=year>=20;
}
function eventUpdate(){
 const next=year+1;
 if(next>20){$('shockHeadline').textContent='Two futures. One question.';$('eventTitle').textContent='The experiment is complete.';$('eventText').textContent='Compare the cities, save this ending, or rewind to test a different policy history.';return;}
 const e=eventFor(next,scenario);
 $('shockHeadline').textContent=e.name;
 $('eventTitle').textContent=`YEAR ${String(next).padStart(2,'0')} · ${e.name}`;
 $('eventText').textContent=e.detail+' Both cities face this same event; their own policies determine how they respond.';
 $('eventStamp').textContent=e.loss?'CLIMATE EVENT':e.jobs<-.01?'ECONOMIC SHOCK':'COMMON TO BOTH';
}
function chart(){
 const svg=$('trendChart'),key=chartMetric;
 const extract=(s)=>key==='debt'?s.bonds.reduce((a,b)=>a+b.balance,0):key==='housing'?s.rent*12/s.medianIncome*100:key==='infrastructure'?s.infrastructure:s.cash;
 const a=history.map(h=>extract(h.A)),b=history.map(h=>extract(h.B));
 let min=Math.min(...a,...b),max=Math.max(...a,...b);
 if(Math.abs(max-min)<.01){min-=10;max+=10;}else{const pad=Math.max((max-min)*.22,1);min=Math.max(0,min-pad);max+=pad;}
 const xx=i=>69+i/20*930, yy=v=>242-(v-min)/(max-min)*200;
 let lines='';
 for(let i=0;i<5;i++){
  const y=42+i*50;const value=max-i/4*(max-min);const label=key==='housing'||key==='infrastructure'?value.toFixed(0)+'%':`$${value.toFixed(0)}M`;
  lines+=`<line x1="69" y1="${y}" x2="999" y2="${y}" stroke="#cbd0c8" stroke-dasharray="4 7"/><text x="58" y="${y+4}" text-anchor="end" fill="#74808a" font-size="12" font-family="Arial">${label}</text>`;
 }
 for(let i=0;i<=20;i+=5)lines+=`<text x="${xx(i)}" y="269" text-anchor="middle" fill="#697684" font-size="11" font-family="Arial">${i}</text>`;
 function p(arr){return arr.map((v,i)=>`${i?'L':'M'}${xx(i).toFixed(1)} ${yy(v).toFixed(1)}`).join(' ');}
 let plotted=lines+`<path d="${p(a)}" fill="none" stroke="#5878b0" stroke-width="4" stroke-linejoin="round"/><path d="${p(b)}" fill="none" stroke="#d16c57" stroke-width="4" stroke-linejoin="round"/>`;
 if(year<=8){for(let i=0;i<=year;i++){plotted+=`<circle cx="${xx(i)}" cy="${yy(a[i])}" r="4" fill="#5878b0"/><circle cx="${xx(i)}" cy="${yy(b[i])}" r="4" fill="#d16c57"/>`;}}
 if(year===0)plotted+=`<text x="525" y="145" text-anchor="middle" font-size="18" font-style="italic" fill="#8b949b" font-family="Georgia">The futures begin together. Advance time to see them diverge.</text>`;
 svg.innerHTML=plotted;
 svg.setAttribute('aria-label',`${key} by year. Alderport latest ${a.at(-1).toFixed(1)}, Novahaven latest ${b.at(-1).toFixed(1)}.`);
}
function compare(){
 const sa=state.A,sb=state.B;
 const debt=s=>s.bonds.reduce((x,b)=>x+b.balance,0);
 const fiscal=[['Cash reserves',money(sa.cash),money(sb.cash)],['Public debt',money(debt(sa)),money(debt(sb))],['Bonds issued (total)',money(records.A.reduce((x,r)=>x+r.issue,0)),money(records.B.reduce((x,r)=>x+r.issue,0))],['Issuance fees paid',money(sa.totalFees),money(sb.totalFees)],['Emergency notes raised',money(sa.notesIssued),money(sb.notesIssued)]];
 const people=[['Population',nfmt(sa.population),nfmt(sb.population)],['Annual housing burden',`${(sa.rent*12/sa.medianIncome*100).toFixed(1)}%`,`${(sb.rent*12/sb.medianIncome*100).toFixed(1)}%`],['Infrastructure',`${sa.infrastructure.toFixed(0)} / 100`,`${sb.infrastructure.toFixed(0)} / 100`],['Job opportunities',nfmt(sa.jobs),nfmt(sb.jobs)],['Climate readiness',`${sa.resilience.toFixed(0)} / 100`,`${sb.resilience.toFixed(0)} / 100`]];
 function build(rows){return `<div class="score-miniheading"><span>INDICATOR</span><span>ALDERPORT / NOVAHAVEN</span></div>`+rows.map(x=>`<div class="comparison-row"><span class="comparison-label">${x[0]}</span><span class="valA">${x[1]}</span><span class="valB">${x[2]}</span></div>`).join('');}
 $('fiscalCompare').innerHTML=build(fiscal);$('peopleCompare').innerHTML=build(people);
}
function ledger(){
 const city=$('inspectCity').value,yr=Number($('inspectYear').value);let s,rec;
 if(yr===0){s=baseState;rec=null;}else{s=history[yr]?.[city]||state[city];rec=records[city][yr-1];}
 const lines=[];function add(label,value,className=''){lines.push(`<div class="ledger-line ${className}"><span>${label}</span><b>${money(value)}</b></div>`);}
 if(rec){
 add('Opening treasury cash',rec.openingCash);add('Property tax receipts',rec.revenue.property,'positive');add('Activity tax receipts',rec.revenue.activity,'positive');add('Fees & charges',rec.revenue.fees,'positive');add('Intergovernmental transfers',rec.revenue.grants,'positive');add('Service and maintenance costs',-rec.services,'negative');add('Interest paid',-rec.interest,'negative');add('Principal repaid',-rec.principal,'negative');add('New capital investment',-rec.capex,'negative');add('New bond proceeds',rec.issue,'positive');add('Issuance and onboarding fees',-rec.issuanceFees,'negative');add('Development levy receipts',rec.levy,'positive');add('Storm repair payments',-rec.stormLoss,'negative');add('Emergency note proceeds',rec.emergency,'positive');add('CLOSING CASH',rec.closingCash,'total');
 }else{add('Opening treasury cash',s.cash);add('Legacy bond liability',-180);add('CLOSING CASH',s.cash,'total');}
 $('cashBridge').innerHTML=`<div class="ledger-title"><h3>${yr?'YEAR '+String(yr).padStart(2,'0')+' · CASH RECONCILIATION':'THE OPENING BALANCE'}</h3><small>${city==='A'?'ALDERPORT':'NOVAHAVEN'} / $ MILLIONS</small></div>`+lines.join('')+`<p class="ledger-note">${rec?'The bridge above adds back to ending cash. Proceeds of borrowing are financing cash, not operating revenue. Principal repayment is not an operating expense.':'Both cities begin with $32M cash and identical $180M legacy bond debt. These are fictional starting figures.'}</p>`;
 const bonds=s.bonds;
 $('bondRegister').innerHTML=bonds.length?`<table class="bond-table"><thead><tr><th>ISSUE</th><th>COUPON</th><th>PRINCIPAL</th></tr></thead><tbody>`+bonds.map(b=>`<tr><td>${b.kind}${b.issued?' · Y'+b.issued:''}</td><td>${b.coupon.toFixed(2)}%</td><td>${money(b.balance)}</td></tr>`).join('')+`</tbody></table>`:'<p>No bonds outstanding.</p>';
 const label=rec?.policy?.bond;
 $('bondExplainer').textContent=label==='tokenized'?'Digital bond issue: this game assumes a permissioned issuance ledger, a first-use onboarding cost, and a potentially wider yield premium. Issuance fees and interest are separate; the city owes investors regardless of the recordkeeping platform.':label==='pooled'?'Pooled bond issue: smaller fixed issuance cost, but pooled program servicing expenses and an additional coupon premium. These terms are hypothetical.':'Conventional issuance: issuance fees are paid up front and the city still owes the promised principal and coupon. Digital alternatives would change transaction processes, not underlying creditworthiness.';
}
function saveFuture(){
 savedFuture={year,A:copy(state.A),B:copy(state.B),scenario};
 $('actionState').textContent=`Year ${year} saved. Rewind to an earlier year, change policies, then compare.`;
 renderSaved();
}
function renderSaved(){
 const p=$('savedPanel');if(!savedFuture){p.hidden=true;return;}p.hidden=false;
 $('savedDescription').textContent=`Saved at Year ${savedFuture.year}, under the ${savedFuture.scenario==='mixed'?'twists & turns':savedFuture.scenario==='stable'?'mostly calm':'turbulent'} shock sequence. ${year===savedFuture.year?'You can compare the two histories at the same horizon.':'Rewind and run to the saved year for a like-for-like comparison.'}`;
 const cityMetric=city=>{
  const s=savedFuture[city],now=state[city],d=x=>x.bonds.reduce((t,b)=>t+b.balance,0);
  return `<div><span>${city==='A'?'ALDERPORT':'NOVAHAVEN'} · SAVED YEAR ${savedFuture.year}</span>
    <strong>${money(s.cash)}</strong><small>Saved cash / Current ${money(now.cash)}</small>
    <small>Saved debt ${money(d(s))} / Current ${money(d(now))}</small>
    <small>Saved housing burden ${(s.rent*12/s.medianIncome*100).toFixed(1)}% / Current ${(now.rent*12/now.medianIncome*100).toFixed(1)}%</small>
    <small>Saved infrastructure ${s.infrastructure.toFixed(0)} / Current ${now.infrastructure.toFixed(0)}</small></div>`;
 };
 $('savedComparison').innerHTML=`<div class="saved-metrics">${cityMetric('A')}${cityMetric('B')}</div>`;
}
function rewind(){if(year===0)return;const to=Number($('rewindYear').value);if(!Number.isInteger(to)||to<0||to>=year)return;
 const snap=history[to];state={A:copy(snap.A),B:copy(snap.B)};history=history.slice(0,to+1);records={A:records.A.slice(0,to),B:records.B.slice(0,to)};year=to;
 $('actionState').textContent=`Rewound to Year ${String(year).padStart(2,'0')}. Change either city's policies and write a new future.`;
 render();
}
function reset(){state={A:startingState(),B:startingState()};history=[{year:0,A:copy(state.A),B:copy(state.B)}];records={A:[],B:[]};year=0;chartMetric='cash';$('inspectYear').value='0';$('actionState').textContent='Both cities are back at the same starting line.';render();}
function render(){updateTimelineControls();eventUpdate();for(const c of ['A','B']){renderCity(c);preview(c);}chart();compare();ledger();renderSaved();}
function bind(){
 for(const c of ['A','B'])for(const key of ['tax','services','project','bond','share','capture'])$(key+c).addEventListener('change',()=>preview(c));
 $('advanceOne').addEventListener('click',()=>applyYears(1));$('advanceFive').addEventListener('click',()=>applyYears(5));$('advanceAll').addEventListener('click',()=>applyYears(20));
 $('rewindButton').addEventListener('click',rewind);$('saveFuture').addEventListener('click',saveFuture);
 $('resetButton').addEventListener('click',()=>{if(year===0||window.confirm('Start both cities over from the beginning? Your saved future stays available for comparison.'))reset();});
 $('scenario').addEventListener('change',e=>{scenario=e.target.value;render();});
 $('inspectCity').addEventListener('change',ledger);$('inspectYear').addEventListener('change',ledger);
 for(const btn of document.querySelectorAll('[data-metric]'))btn.addEventListener('click',()=>{chartMetric=btn.dataset.metric;document.querySelectorAll('[data-metric]').forEach(b=>b.classList.toggle('active',b===btn));chart();});
 $('howButton').addEventListener('click',()=>{$('playGuide').hidden=false;$('playGuide').scrollIntoView({block:'nearest',behavior:'smooth'});});$('closeGuide').addEventListener('click',()=>{$('playGuide').hidden=true;});
 const dlg=$('notesDialog');$('modelNotes').addEventListener('click',()=>dlg.showModal());$('closeNotes').addEventListener('click',()=>dlg.close());$('notesDone').addEventListener('click',()=>dlg.close());
}
bind();render();
// For local automated financial tests only. Not a gameplay API.
window.__parallelCitiesTest={get snapshot(){return copy({state,history,records,year,scenario,savedFuture});},simulateYear,startingState,eventFor,PROJECTS};
