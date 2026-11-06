/* MOVE THE CITY — a deterministic, fictional metro and municipal finance game.
   No external libraries, accounts, network requests or real market forecasts. */
(() => {
'use strict';
const D = [
 {id:'west',name:'West Haven',x:128,y:324,pop:26500,jobs:7200,low:.67,assessed:410,shade:'#ffb6d8'},
 {id:'harbor',name:'Harbor Ward',x:273,y:407,pop:32100,jobs:7900,low:.72,assessed:365,shade:'#92e6bf'},
 {id:'market',name:'Old Market',x:346,y:227,pop:24000,jobs:33000,low:.38,assessed:665,shade:'#ffc84a'},
 {id:'civic',name:'Civic Center',x:454,y:113,pop:14600,jobs:37400,low:.24,assessed:820,shade:'#c2adff'},
 {id:'east',name:'Eastbank',x:667,y:284,pop:29700,jobs:13500,low:.59,assessed:535,shade:'#ffa4b8'},
 {id:'north',name:'North Heights',x:550,y:439,pop:19400,jobs:15100,low:.30,assessed:590,shade:'#85b9ed'}
];
const S = [
 {id:'wharf',name:'Harbor Gate',code:'HG',x:248,y:365,zone:'harbor',cost:68,tip:'Low-income housing and old port employment.'},
 {id:'market',name:'Market Square',code:'MS',x:343,y:240,zone:'market',cost:84,tip:'Dense workers and shopfronts. Strong fare demand.'},
 {id:'civic',name:'Civic Hall',code:'CH',x:446,y:140,zone:'civic',cost:101,tip:'Government offices and office towers.'},
 {id:'west',name:'West Junction',code:'WJ',x:193,y:245,zone:'west',cost:72,tip:'Affordable residential area with long commutes.'},
 {id:'east',name:'Eastbank Commons',code:'EC',x:633,y:268,zone:'east',cost:83,tip:'Growing neighborhood with higher displacement pressure.'},
 {id:'north',name:'University Loop',code:'UL',x:551,y:398,zone:'north',cost:76,tip:'A school and hospital district with a large daily draw.'}
];
const TERMINALS=[{id:'twest',code:'WEST',name:'West Terminal',x:62,y:287},{id:'teast',code:'EAST',name:'East Terminal',x:783,y:288}];
const SCENARIOS={
 base:{name:'Steady city',ridership:1,cost:1,rate:0,grant:1,land:1,note:'Demographic and construction trends proceed broadly as expected.'},
 boom:{name:'Growth surge',ridership:1.28,cost:1.08,rate:-.003,grant:1,land:1.25,note:'More residents and jobs arrive. Construction is a little costlier.'},
 remote:{name:'Remote-work slump',ridership:.69,cost:1,rate:.006,grant:1,land:.77,note:'Downtown travel demand weakens and credit spreads widen.'},
 shock:{name:'Funding shock',ridership:.89,cost:1.32,rate:.014,grant:.6,land:.88,note:'Construction inflation spikes, borrowing tightens and grants shrink.'}
};
const $=id=>document.getElementById(id);
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const fmt=(v,n=1)=>Number.isFinite(v)?Math.abs(v).toLocaleString('en-US',{minimumFractionDigits:n,maximumFractionDigits:n}):'—';
const m=v=>'$'+fmt(v)+'M';
const signed=v=>(v>=0?'+':'−')+'$'+fmt(Math.abs(v))+'M';
const num=v=>Math.round(v).toLocaleString('en-US');
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function initial(){return {selected:['wharf','market','east'],offset:{},selectedStation:'market',tab:'plan',step:'build',concept:'access',fares:2.6,bond:75,grant:25,capture:22,structure:'elevated',protection:true,offer:'negotiate',scenario:'base',result:null,dirty:false};}
let st=initial();
const point=s=>({x:s.x+(st.offset[s.id]||0)*36,y:s.y});
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const ordered=()=>[TERMINALS[0],...S.filter(s=>st.selected.includes(s.id)).map(s=>({...s,...point(s)})).sort((a,b)=>a.x-b.x),TERMINALS[1]];
const annuity=(principal,r,n)=>principal>0?principal*(r===0?1/n:r/(1-Math.pow(1+r,-n))):0;
function calculate(overrideScenario){
 const sc=SCENARIOS[overrideScenario||st.scenario];
 const picks=S.filter(s=>st.selected.includes(s.id));
 const stopPts=picks.map(point);
 const existing=TERMINALS.map(t=>({x:t.x,y:t.y}));
 const coverage=(district,pts)=>{
   if(!pts.length)return 0;
   const scores=pts.map(p=>clamp(1-dist(district,p)/232,0,1));
   return clamp(Math.max(...scores)*.83 + (scores.filter(s=>s>.28).length>1?.10:0),0,.94);
 };
 let people=0,lowPeople=0,accessWeight=0,catchJobs=0,uplift=0,totalLow=0;
 const coverageRows=[];
 for(const d of D){
   const before=coverage(d,existing),after=coverage(d,existing.concat(stopPts));
   const delta=Math.max(0,after-before),newRes=d.pop*delta*.89;
   const newLow=newRes*d.low;
   const addedJobs=d.jobs*delta;
   const dUplift=d.assessed*delta*.23*sc.land;
   coverageRows.push({...d,before,after,delta,newRes,newLow,addedJobs,uplift:dUplift});
   people+=newRes;lowPeople+=newLow;totalLow+=d.pop*d.low;catchJobs+=addedJobs;uplift+=dUplift;accessWeight+=d.pop*delta;
 }
 const pts=ordered(); let routeUnits=0;for(let i=1;i<pts.length;i++)routeUnits+=dist(pts[i-1],pts[i]);
 const lengthKm=routeUnits/72;
 const additionalKm=Math.max(0,routeUnits-dist(TERMINALS[0],TERMINALS[1]))/72;
 const tunnel=st.structure==='underground';
 const stationCost=picks.reduce((a,s)=>a+s.cost*(tunnel?1.47:1),0);
 const trackCost=additionalKm*16 + (picks.length>0?lengthKm*(tunnel?26:14):0);
 const capex=(stationCost+trackCost+(picks.length>0?28:0))*sc.cost;
 let newRiders=(people*.29+catchJobs*.105)*sc.ridership;
 newRiders*=Math.pow(st.fares/2.6,-.36);
 newRiders*=1+(picks.length>=4?.05:0);
 newRiders=Math.round(newRiders);
 const dailyRiders=14000+newRiders;
 const publicBenefits= newRiders*285*(34/60)*23/1000000 + newRiders*285*.75/1000000;
 const carbonTons=newRiders*285*.54*2.2/1000;
 const developerCash=st.offer==='accept'?52:st.offer==='negotiate'?28:0;
 const developerExtraLand=st.offer==='accept'?1.22:st.offer==='negotiate'?1.10:1;
 uplift*=developerExtraLand;
 const collectible=clamp(uplift*st.capture/100,0,uptoCap());
 function uptoCap(){return picks.length===0?0:120;}
 const grant=Math.min(capex,capex*st.grant/100*sc.grant);
 const contribution=picks.length?developerCash:0;
 const remaining=Math.max(0,capex-grant-collectible-contribution);
 const issued=remaining*st.bond/100;
 const cityContribution=remaining-issued;
 const coupon=clamp(.049+sc.rate+(issued>560?.007:0)+(st.bond>=90?.004:0),.026,.10);
 const debtService=annuity(issued,coupon,30);
 const annualOps=picks.length?(11.5+7.3*picks.length+lengthKm*1.5+(tunnel?4:0)):0;
 const fullFare=picks.length ? dailyRiders*st.fares*330/1000000 : 0;
 const dedicatedTax=uplift*.013;
 const years=[];
 let cash=142-cityContribution;
 let bal=issued;
 for(let y=1;y<=15;y++){
   const ramp=y===1?.04:y===2?.12:y===3?.36:y===4?.65:y===5?.86:1;
   const fare=fullFare*ramp;
   const localTax=dedicatedTax*(y>=3?Math.min(1,(y-2)/5):0);
   const ops=annualOps*(.42+.58*ramp);
   const interest=bal*coupon;
   const principal=Math.min(bal,Math.max(0,debtService-interest));
   const service=interest+principal;
   bal=Math.max(0,bal-principal);
   const netAgency=fare+localTax-ops-service;
   const generalSurplus=28;
   const opening=cash;
   cash+=generalSurplus+netAgency;
   years.push({y,ramp,opening,fare,localTax,ops,interest,principal,service,netAgency,generalSurplus,ending:cash,debt:bal});
 }
 const last=years[years.length-1];
 const first=years[0];
 const steadyAnnual=fullFare+dedicatedTax-annualOps-debtService;
 const steadyDSCR=debtService>0?(fullFare+dedicatedTax-annualOps)/debtService:null;
 // Economic BCR: distinct from agency finances. No property uplift in economic benefit.
 const discount=.045;
 let pvBenefit=0,pvOps=0;
 for(let y=1;y<=30;y++){
   const ramp=y<=15?years[y-1].ramp:1;
   pvBenefit+=publicBenefits*ramp/Math.pow(1+discount,y);
   pvOps+=annualOps*(.42+.58*ramp)/Math.pow(1+discount,y);
 }
 const bcr=capex+pvOps>0?pvBenefit/(capex+pvOps):null;
 const socialNpv=pvBenefit-capex-pvOps;
 const displacement=clamp(12+uplift*.085 + (st.offer==='accept'?14:st.offer==='negotiate'?6:0) - (st.protection?16:0),0,100);
 const equityScore=clamp(lowPeople/Math.max(1,totalLow)*115-displacement*.24,0,100);
 const fundingGap=Math.max(0,-first.opening);
 const minCash=Math.min(142-cityContribution,...years.map(r=>r.ending));
 const risk=cityContribution>142?'CAPITAL SHORTFALL':minCash<0?'FISCAL STRESS':steadyDSCR!==null&&steadyDSCR<1?'SUBSIDY REQUIRED':'FUNDED PLAN';
 const debtToRevenue=issued/Math.max(1,fullFare+dedicatedTax);
 return {sc,picks,pts,coverageRows,people,lowPeople,catchJobs,uplift,lengthKm,additionalKm,routeUnits,capex,stationCost,trackCost,grant,collectible,contribution,remaining,issued,cityContribution,coupon,debtService,annualOps,fullFare,dedicatedTax,dailyRiders,newRiders,carbonTons,publicBenefits,years,last,first,steadyAnnual,steadyDSCR,pvBenefit,pvOps,bcr,socialNpv,displacement,equityScore,fundingGap,minCash,risk,debtToRevenue};
}
function svgMap(c){
 const selected=new Set(st.selected);
 let html=`<defs><pattern id="citymesh" width="33" height="33" patternUnits="userSpaceOnUse"><path d="M33 0H0V33" stroke="#364346" stroke-width="1" fill="none"/></pattern><linearGradient id="water" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#386c7f"/><stop offset="1" stop-color="#30515d"/></linearGradient></defs>`;
 html+=`<rect width="840" height="540" fill="#202c2f"/><rect width="840" height="540" fill="url(#citymesh)"/>`;
 html+=`<path d="M-10 475 C145 429 240 545 400 490 S690 456 850 522" stroke="url(#water)" stroke-width="43" opacity=".5" fill="none"/>`;
 html+=`<path d="M10 126 L822 126 M78 22 L78 535 M10 356 L819 356 M695 15 L695 520" class="map-road" opacity=".55"/><path d="M40 460 L735 80" class="map-road" opacity=".27"/>`;
 for(const d of D){html+=`<rect class="map-district" x="${d.x-81}" y="${d.y-60}" width="162" height="120" rx="22" style="fill:${d.shade};stroke:${d.shade}"/>`;
 html+=`<text x="${d.x-67}" y="${d.y-40}" class="district-name">${d.name.toUpperCase()}</text>`;
 html+=`<g opacity=".5">${Array.from({length:5},(_,i)=>`<rect x="${d.x-57+i*23}" y="${d.y+6-(i%3)*13}" width="12" height="${18+(i%3)*13}" rx="2" fill="${d.shade}" opacity=".42"/>`).join('')}</g>`;
 }
 html+=`<text x="28" y="29" class="map-topline">CITY GRID / SCHEMATIC WALKING CATCHMENTS</text><text x="730" y="512" class="map-city-label">N →</text>`;
 // Base service shown in yellow; selected network in pink.
 html+=`<line x1="62" y1="287" x2="783" y2="288" class="metro-route-existing" opacity=".25"/>`;
 const path=c.pts.map((p,i)=>`${i?'L':'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
 if(c.picks.length){html+=`<path class="metro-route-shadow" d="${path}"/><path class="metro-route" d="${path}"/><circle r="8" fill="#ffc84a" class="metro-train"><animateMotion dur="7s" repeatCount="indefinite" path="${path}"/></circle>`;}
 for(const t of TERMINALS){html+=`<g><circle cx="${t.x}" cy="${t.y}" r="17" fill="#ffc84a" stroke="#202729" stroke-width="4"/><circle cx="${t.x}" cy="${t.y}" r="7" fill="#222c2e"/><text x="${t.x}" y="${t.y+38}" text-anchor="middle" class="station-label">${t.code}</text></g>`;}
 for(const s of S){const p=point(s),on=selected.has(s.id),chosen=st.selectedStation===s.id;
   if(on)html+=`<circle class="station-halo pulse" cx="${p.x}" cy="${p.y}" r="63"/>`;
   html+=`<g class="station-click" data-station="${s.id}" role="button" tabindex="0" aria-label="${on?'Remove':'Add'} ${s.name} station"><circle cx="${p.x}" cy="${p.y}" r="${chosen?25:21}" class="station-outer" fill="${on?'#ff4da4':'#293538'}" stroke="${chosen?'#ffc84a':'#d9e0d8'}"/><circle cx="${p.x}" cy="${p.y}" r="${on?9:6}" fill="${on?'#1f292b':'#cbd4cd'}"/><text x="${p.x}" y="${p.y+39}" text-anchor="middle" class="station-label">${s.code}</text></g>`;
 }
 return html;
}
function renderStationDetail(c){const s=S.find(x=>x.id===st.selectedStation);const el=$('stationDetail');if(!s){el.className='station-detail empty';el.textContent='TAP A CIRCLE TO OPEN THE STATION DOSSIER.';return;}el.className='station-detail';const on=st.selected.includes(s.id);const row=c.coverageRows.find(x=>x.id===s.zone);
 el.innerHTML=`<div class="station-heading"><h4>${esc(s.name.toUpperCase())} <span style="color:#ff4da4">/ ${s.code}</span></h4><button class="action-toggle ${on?'active':''}" data-toggle-station="${s.id}">${on?'✓ IN YOUR LINE':'＋ ADD STOP'}</button></div><div style="color:#bfcac1;font-size:12px;margin-top:5px">${esc(s.tip)}</div><div class="station-kpi"><div><span>EST. STOP COST</span><strong>${m(s.cost*(st.structure==='underground'?1.47:1))}</strong></div><div><span>DISTRICT RESIDENTS</span><strong>${num(row.pop)}</strong></div><div><span>NEW ACCESS SHARE</span><strong>${fmt(row.delta*100,0)}%</strong></div></div><div class="shift-controls"><span>MOVE THIS STOP</span>${[-1,0,1].map(i=>`<button data-offset="${i}" data-offset-for="${s.id}" class="${(st.offset[s.id]||0)===i?'selected':''}">${i===-1?'← 500 m':i===0?'ON SITE':'500 m →'}</button>`).join('')}</div>`;
}
function syncMap(c){$('metroMap').innerHTML=svgMap(c);$('stopCount').textContent=c.picks.length+' / 6';$('routeLength').textContent=fmt(c.lengthKm)+' km';$('newAccess').textContent=num(c.people);$('trainLabel').textContent=c.picks.length?'LINE M / '+c.picks.length+' NEW STOPS':'BASE SERVICE / NO NEW STOPS';renderStationDetail(c);}
function panelHeader(kicker,title,sub,badge='LIVE'){return `<div class="panel-head"><div><span class="kicker">${kicker}</span><div class="panel-title">${title}</div></div><span class="panel-badge">${badge}</span></div><p class="panel-sub">${sub}</p>`;}
function range(key,label,min,max,step,val,lo,hi){return `<div class="control-section"><label class="control-label" for="range-${key}"><span>${label}</span><output id="out-${key}">${val}</output></label><input id="range-${key}" data-setting="${key}" type="range" min="${min}" max="${max}" step="${step}" value="${st[key]}"><div class="range-ticks"><span>${lo}</span><span>${hi}</span></div></div>`;}
function renderControl(c){let html='';
if(st.tab==='plan'){
 html+=panelHeader('STEP 01 / DRAW THE LINE','PICK YOUR STOPS','Choose circles on the map. Each stop changes costs, catchment and neighborhood value.','06 SITES');
 html+=`<div class="control-section"><div class="control-label">CONSTRUCTION TYPE</div><div class="toggle-row"><button data-structure="elevated" class="${st.structure==='elevated'?'active':''}">↑ ELEVATED</button><button data-structure="underground" class="${st.structure==='underground'?'active':''}">↓ UNDERGROUND</button></div><p class="calc-note">Underground stations and guideway cost more. The extra expense affects the debt needed to complete your line.</p></div>`;
 html+=`<div class="mini-summary"><div class="mini-summary-top"><span>EST. PROJECT COST</span><span>${c.picks.length} NEW STOPS</span></div><strong>${m(c.capex)}</strong><p>${fmt(c.lengthKm)} km of line · ${m(c.stationCost)} stations · ${m(c.trackCost)} guideway</p></div><div class="control-section"><div class="control-label">HOW TO PLAY THE MAP</div><p class="calc-note">Tap a pink circle to remove a stop, or a hollow one to add it. The station dossier below the map lets you move your choice 500 m east or west.</p></div><button class="action-primary" data-next="money">NEXT STOP: WHO PAYS? →</button>`;
}else if(st.tab==='money'){
 html+=panelHeader('STEP 02 / MONEY LINE','FINANCE THE CITY','Fares, bonds, grants and land-value capture decide who pays today and tomorrow.','TREASURY');
 html+=range('fares','SINGLE-RIDE FARE',1.5,5,.1,'$'+fmt(st.fares,2),'$1.50','$5.00');
 html+=range('grant','CAPITAL GRANT SHARE',0,40,5,st.grant+'%','0%','40%');
 html+=range('capture','LAND-VALUE CAPTURE RATE',0,40,5,st.capture+'%','0%','40%');
 html+=range('bond','BOND SHARE OF FUNDING GAP',0,100,5,st.bond+'%','0%','100%');
 html+=`<div class="finance-mini control-section"><div><small>NEW CITY BONDS</small><strong>${m(c.issued)}</strong></div><div><small>CITY CASH NEEDED</small><strong>${m(c.cityContribution)}</strong></div><div><small>ANNUAL BOND PAYMENT</small><strong>${m(c.debtService)}</strong></div><div><small>EST. FARE REVENUE / YR</small><strong>${m(c.fullFare)}</strong></div></div><p class="note-line">Land uplift isn't cash. Only the modeled capture contribution becomes upfront funding. The rest remains private asset value.</p><button class="action-primary" data-next="risk">NEXT STOP: PRESSURE TEST →</button>`;
}else{
 html+=panelHeader('STEP 03 / THE FUTURE','PRESSURE TEST','Make a land deal, choose housing protections, then stress-test your design.','SCENARIOS');
 html+=`<div class="control-section"><div class="control-label">A DEVELOPER KNOCKS</div><div class="choice-stack">${[{id:'accept',title:'ACCEPT THE OFFER',txt:'+$52M contribution. More private development and higher displacement pressure.'},{id:'negotiate',title:'NEGOTIATE',txt:'+$28M contribution with affordability provisions and a smaller land-price surge.'},{id:'reject',title:'REJECT THE OFFER',txt:'No developer contribution, but less speculative pressure.'}].map(x=>`<button class="choice ${st.offer===x.id?'selected':''}" data-offer="${x.id}"><strong>${x.title}</strong><small>${x.txt}</small></button>`).join('')}</div></div>`;
 html+=`<div class="control-section"><div class="control-label">HOUSING SAFEGUARD</div><div class="toggle-row"><button data-protection="yes" class="${st.protection?'active':''}">✓ INCLUDE</button><button data-protection="no" class="${!st.protection?'active':''}">× OMIT</button></div><p class="calc-note">A modeled affordability policy lowers displacement pressure; this simplified model does not claim to predict actual displacement.</p></div>`;
 html+=`<div class="control-section"><div class="control-label">WHICH FUTURE ARRIVES?</div><div class="scenario-grid">${Object.entries(SCENARIOS).map(([id,x])=>`<button class="scenario-button ${st.scenario===id?'selected':''}" data-scenario="${id}"><b>${x.name.toUpperCase()}</b><small>${id==='base'?'Normal growth':id==='boom'?'More demand':id==='remote'?'Less commuting':'Cost & credit squeeze'}</small></button>`).join('')}</div><p class="calc-note">${esc(c.sc.note)}</p></div>`;
 html+=`<div class="finance-mini control-section"><div><small>ECONOMIC NPV / 30 YR</small><strong>${signed(c.socialNpv)}</strong></div><div><small>MIN. CITY CASH / 15 YR</small><strong>${m(c.minCash)}</strong></div></div><button class="action-primary" data-run="yes" ${c.picks.length===0?'disabled':''}>▶ RUN 15 YEARS →</button><p class="note-line">${c.picks.length===0?'Add at least one station before running.':'Scenario estimates are illustrative; rerun to compare alternate futures.'}</p>`;
}
 $('controlContent').innerHTML=html; document.querySelectorAll('.panel-tab').forEach(b=>b.classList.toggle('selected',b.dataset.tab===st.tab));document.querySelectorAll('.step-chip').forEach(b=>b.classList.toggle('active',b.dataset.step===st.step));
}
const conceptInfo={
 access:['WHO CAN REACH THE CITY?','A station only helps if people can walk to it. Click different stops to see overlap: adding a station next to another often helps fewer new residents.','ACCESS IS ABOUT PEOPLE, NOT JUST PASSENGERS.'],
 value:['WHOSE LAND GETS MORE VALUABLE?','Nearby properties may gain value from better access. But higher appraised values do not automatically produce cash for the city; only an actual tax or negotiated payment can fund construction.','UPLIFT ≠ REVENUE.'],
 finance:['CAN THE CITY PAY FOR IT?','Grants and captured land uplift reduce upfront borrowing. Bonds finance construction but create annual payments, including principal and interest, that must be covered for decades.','BORROWING ≠ EARNINGS.'],
 equity:['WHO IS LEFT BEHIND?','A high-ridership line can miss residents with the longest commutes. Compare lower-income access gains against land-price pressure and negotiated housing protections.','ACCESS DOES NOT GUARANTEE AFFORDABILITY.'],
 resilience:['WHAT IF THE FUTURE CHANGES?','Change the scenario to test whether ridership, construction inflation, grants and interest rates threaten the route. A compelling network in the base case may be fragile under stress.','A FORECAST IS NOT A PROMISE.']
};
function renderConcept(c){document.querySelectorAll('.concept-stop').forEach(b=>b.classList.toggle('active',b.dataset.concept===st.concept));let [title,text,tag]=conceptInfo[st.concept],metrics=[];
 switch(st.concept){
 case 'access':metrics=[['NEW RESIDENTS REACHED',num(c.people)],['NEW DAILY RIDERS',num(c.newRiders)]];break;
 case 'value':metrics=[['MODELED LAND UPLIFT',m(c.uplift)],['COLLECTED UPFRONT',m(c.collectible)]];break;
 case 'finance':metrics=[['ANNUAL BOND SERVICE',m(c.debtService)],['CITY UPFRONT CASH',m(c.cityContribution)]];break;
 case 'equity':metrics=[['EQUITY ACCESS SCORE',fmt(c.equityScore,0)+'/100'],['DISPLACEMENT PRESSURE',fmt(c.displacement,0)+'/100']];break;
 case 'resilience':metrics=[['MIN. CITY CASH',m(c.minCash)],['ECONOMIC BENEFIT / COST',c.bcr===null?'—':fmt(c.bcr,2)+'×']];break;
 }
 $('conceptDetail').innerHTML=`<div><span class="kicker">NOW ARRIVING / ${st.concept.toUpperCase()} LINE</span><h3>${title}</h3><p>${text}</p><p class="tiny-meta" style="margin-top:13px;font-size:10px">${tag}</p></div><div class="concept-metrics">${metrics.map(x=>`<div><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join('')}</div>`;
}
function renderDashboard(c){$('scoreStrip').innerHTML=[['EST. NEW DAILY RIDERS',num(c.newRiders),'Fares change demand'],['TOTAL LAND VALUE UPLIFT',m(c.uplift),'Not all collectible'],['MUNICIPAL BOND ISSUANCE',m(c.issued),'30-year amortization'],['ACCESS EQUITY SCORE',fmt(c.equityScore,0)+'/100','Modeled distribution']].map(x=>`<div class="score-item"><small>${x[0]}</small><strong>${x[1]}</strong><span>${x[2]}</span></div>`).join('');
 const items=[['CAPITAL GRANT',c.grant,'#ffc84a'],['VALUE CAPTURE',c.collectible,'#fc4e9e'],['DEVELOPER FUNDS',c.contribution,'#c2adff'],['NEW BONDS',c.issued,'#92e6bf'],['CITY CAPITAL',c.cityContribution,'#6e88dc']];
 $('fundingBars').innerHTML=items.map(([l,v,col])=>`<div class="bar-row"><label>${l}</label><div class="bar-bg"><div class="bar-fill" style="width:${c.capex?clamp(v/c.capex*100,0,100):0}%;background:${col}"></div></div><strong>${m(v)}</strong></div>`).join('')+`<div class="tiny-meta" style="margin-top:15px">TOTAL CONSTRUCTION COST ${m(c.capex)} · SOURCES RECONCILE TO COST</div>`;
 const t=[['Fares vs access','At $'+fmt(st.fares,2)+' per trip, modeled daily ridership is '+num(c.dailyRiders)+'.','#ff4da4'],['Credit vs service','Annual bond service '+m(c.debtService)+'; mature agency net cash '+signed(c.steadyAnnual)+'.','#92e6bf'],['Growth vs displacement','Land uplift '+m(c.uplift)+'; displacement-pressure indicator '+fmt(c.displacement,0)+'/100.','#ffc84a']];
 $('tradeOffs').innerHTML=t.map(([h,b,color])=>`<div class="trade-row"><span class="trade-color" style="background:${color}"></span><div><strong>${h}</strong><p>${b}</p></div></div>`).join('');
 $('liveModelState').textContent=c.risk.replace(/ /g,' / ');
}
function renderResults(){const el=$('resultContent');if(!st.result){$('endingTag').textContent='AWAITING YOUR SIMULATION';el.className='result-placeholder';el.innerHTML=`<p>Design your route, choose a financing package, and press <strong>RUN 15 YEARS</strong> to reveal the outcome.</p><button class="light-btn" type="button" id="resultStartBtn">GO TO THE CONTROL ROOM ↗</button>`;return;}
 const c=st.result;
 let ending,story;
 if(c.minCash<0){ending='THE FISCAL TRAP';story='The line creates access, but the financing package overwhelms the city’s available cash at some point in the 15-year projection. The simulation flags a funding gap rather than pretending the city can spend money it does not have.';}
 else if(c.equityScore>=31&&c.bcr>=1&&c.last.ending>85){ending='THE CITY CONNECTOR';story='The network expands opportunity while keeping the municipal treasury liquid. It delivers economic value under the selected assumptions, although this is not a guarantee in the real world.';}
 else if(c.displacement>30){ending='THE PRICE OF ACCESS';story='The line improves connectivity and land values, but pressure on housing affordability is substantial. Your deal terms and housing safeguards matter as much as the track alignment.';}
 else if(c.bcr!==null&&c.bcr<.85){ending='THE COSTLY SHORTCUT';story='Your alignment may be workable financially, but its modeled public benefits do not recover the project’s full economic costs over 30 years. Consider moving stops or resizing the system.';}
 else{ending='THE IMPERFECT LINE';story='The city gains a working transit corridor, with a mix of financial costs and social benefits. There is room to refine fare policy, funding, access and risk without declaring one universally correct answer.';}
 $('endingTag').textContent=ending;el.className='result-content';
 const rows=c.years;
 const vals=rows.map(r=>r.ending).concat(142-c.cityContribution);
 let min=Math.min(...vals,0),max=Math.max(...vals,0);if(Math.abs(max-min)<1){max+=1;min-=1;}
 const w=800,h=220,pad=28;
 const xy=(value,index)=>[(index/(rows.length))* (w-2*pad)+pad,h-pad-(value-min)/(max-min)*(h-2*pad)];
 const pts=[142-c.cityContribution,...rows.map(r=>r.ending)].map((val,i)=>xy(val,i));
 const zeroy=xy(0,0)[1],poly=pts.map(p=>p.map(v=>v.toFixed(1)).join(',')).join(' ');
 const svg=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Projected treasury cash across 15 years"><line x1="${pad}" y1="${zeroy}" x2="${w-pad}" y2="${zeroy}" stroke="#ffbf68" stroke-dasharray="6 5" opacity=".65"/><polyline points="${poly}" fill="none" stroke="#ff4da4" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>${pts.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="${i===15?6:3}" fill="${pts[i][1]>zeroy?'#ff8d67':'#ffc84a'}"/>`).join('')}<text x="${pad}" y="17" fill="#d5ded7" font-size="12">CASH / $M</text><text x="${pad}" y="${h-5}" fill="#d5ded7" font-size="11">YEAR 0</text><text x="${w-70}" y="${h-5}" fill="#d5ded7" font-size="11">YEAR 15</text></svg>`;
 el.innerHTML=`<div class="result-summary"><div><span class="kicker on-dark">YOUR TRANSIT LEGACY</span><h3 style="font:900 35px Impact,Arial,sans-serif;margin:12px 0">${ending}</h3><p>${story}</p><p><b>Selected future:</b> ${esc(c.sc.name)} · <b>Developer deal:</b> ${esc(st.offer)} · <b>Housing safeguard:</b> ${st.protection?'included':'omitted'}</p></div><div class="result-stats"><div class="result-stat"><small>YEAR 15 CITY CASH</small><strong>${m(c.last.ending)}</strong></div><div class="result-stat"><small>LOWEST CASH BALANCE</small><strong>${m(c.minCash)}</strong></div><div class="result-stat"><small>ECONOMIC NPV / 30 YR</small><strong>${signed(c.socialNpv)}</strong></div><div class="result-stat"><small>LOW-INCOME ACCESS SCORE</small><strong>${fmt(c.equityScore,0)}/100</strong></div><div class="result-stat"><small>YEAR 15 BOND PRINCIPAL STILL OWED</small><strong>${m(c.last.debt)}</strong></div><div class="result-stat"><small>ANNUAL BOND PAYMENT</small><strong>${m(c.debtService)}</strong></div></div></div><div class="cash-chart"><span class="kicker on-dark">THE CITY'S TREASURY OVER TIME / CASH MUST RECONCILE</span>${svg}</div><div class="cash-ledger"><div><small>YEAR 15 OPENING CASH</small><strong>${m(c.last.opening)}</strong></div><div><small>GENERAL FUND SURPLUS</small><strong>+${m(c.last.generalSurplus)}</strong></div><div><small>METRO CASH AFTER DEBT</small><strong>${signed(c.last.netAgency)}</strong></div><div><small>FARES + DEDICATED TAX</small><strong>${m(c.last.fare+c.last.localTax)}</strong></div><div><small>OPERATIONS + DEBT</small><strong>${m(c.last.ops+c.last.service)}</strong></div><div><small>YEAR 15 CLOSING CASH</small><strong>${m(c.last.ending)}</strong></div></div><p style="font-size:12px;color:#c4d1c6;margin-top:19px">Cash check: opening + general fund surplus + fares + dedicated taxes − metro operations − bond payments = ending. New bond proceeds finance capital construction, not operating revenue. If cash falls below zero, the city has an unfinanced shortfall.</p><details style="margin-top:20px"><summary style="cursor:pointer;font:bold 12px 'Courier New',monospace">VIEW YEAR-BY-YEAR TREASURY BOOK →</summary><div style="overflow-x:auto;margin-top:12px"><table style="width:100%;border-collapse:collapse;font:11px 'Courier New',monospace"><thead><tr>${['Year','Cash start','Fares','Tax uplift','Opex','Interest','Principal','Cash end'].map(x=>`<th style="text-align:left;border-bottom:1px solid #aab9b2;padding:7px">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${[r.y,r.opening,r.fare,r.localTax,r.ops,r.interest,r.principal,r.ending].map((v,i)=>`<td style="border-bottom:1px solid #485854;padding:7px">${i===0?v:m(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details><div class="result-buttons"><button data-action="edit">← EDIT YOUR LINE</button><button data-action="compare">↻ TRY A DIFFERENT FUTURE</button><button data-action="restart">⟲ START OVER</button></div>`;
}
function preview(renderPanel=false){const c=calculate();syncMap(c);renderConcept(c);renderDashboard(c);if(renderPanel)renderControl(c);if(st.result)st.dirty=true;return c;}
function setTab(tab){st.tab=tab;st.step=tab==='plan'?'build':tab==='money'?'fund':'stress';renderControl(calculate());const element=$('controlContent');if(element)element.scrollIntoView({behavior:'smooth',block:'nearest'});}
function run(){const c=calculate();if(c.picks.length===0)return;st.result=c;st.dirty=false;st.step='results';renderControl(c);renderResults();$('resultsSection').scrollIntoView({behavior:'smooth',block:'start'});}
function focusWorkbench(){ $('workbench').scrollIntoView({behavior:'smooth'});}
function updateState(){st.result=null;st.dirty=true;preview(true);renderResults();}
$('startBtn').addEventListener('click',focusWorkbench);
$('howBtn').addEventListener('click',()=> $('instructions').scrollIntoView({behavior:'smooth'}));
$('goResultsBtn').addEventListener('click',()=>{if(!st.result){setTab('risk');$('controlContent').scrollIntoView({behavior:'smooth',block:'start'});}else{$('resultsSection').scrollIntoView({behavior:'smooth'});}});
$('resetBtn').addEventListener('click',()=>{st=initial();updateState();});
$('metroMap').addEventListener('click',e=>{const g=e.target.closest('[data-station]');if(!g)return;const id=g.dataset.station;st.selectedStation=id;st.selected=st.selected.includes(id)?st.selected.filter(x=>x!==id):st.selected.concat(id);updateState();});
$('metroMap').addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){const g=e.target.closest('[data-station]');if(g){e.preventDefault();g.dispatchEvent(new MouseEvent('click',{bubbles:true}));}}});
$('stationDetail').addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;if(t.dataset.toggleStation){const id=t.dataset.toggleStation;st.selected=st.selected.includes(id)?st.selected.filter(x=>x!==id):st.selected.concat(id);updateState();}if(t.dataset.offset!==undefined){st.offset[t.dataset.offsetFor]=Number(t.dataset.offset);updateState();}});
document.querySelectorAll('.panel-tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
document.querySelectorAll('.step-chip').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.step==='results'){$('resultsSection').scrollIntoView({behavior:'smooth'});return;}setTab({build:'plan',fund:'money',stress:'risk'}[b.dataset.step]);}));
$('controlContent').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.next){setTab(b.dataset.next==='money'?'money':'risk');return;}if(b.dataset.structure){st.structure=b.dataset.structure;updateState();return;}if(b.dataset.protection){st.protection=b.dataset.protection==='yes';updateState();return;}if(b.dataset.offer){st.offer=b.dataset.offer;updateState();return;}if(b.dataset.scenario){st.scenario=b.dataset.scenario;updateState();return;}if(b.dataset.run)run();});
$('controlContent').addEventListener('input',e=>{const key=e.target.dataset.setting;if(!key)return;st[key]=Number(e.target.value);if(st.result){st.result=null;renderResults();}const out=$('out-'+key);if(out)out.textContent=key==='fares'?'$'+fmt(st.fares,2):st[key]+'%';preview(false);});
$('controlContent').addEventListener('change',e=>{if(e.target.dataset.setting)updateState();});
$('conceptLine').addEventListener('click',e=>{const b=e.target.closest('[data-concept]');if(!b)return;st.concept=b.dataset.concept;renderConcept(calculate());});
$('resultContent').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='resultStartBtn'){setTab('plan');focusWorkbench();return;}if(b.dataset.action==='restart'){st=initial();updateState();focusWorkbench();return;}if(b.dataset.action==='compare'){setTab('risk');focusWorkbench();return;}if(b.dataset.action==='edit'){setTab('plan');focusWorkbench();return;}});
// First interactive render.
preview(true);renderResults();
window.__MOVE_CITY_TEST__={calculate,initial,stationCount:()=>st.selected.length,getState:()=>({...st}),run,scenarios:SCENARIOS};
})();
