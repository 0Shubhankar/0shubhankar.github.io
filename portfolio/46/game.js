/* THE PROPERTY MACHINE
 * Self-contained, illustrative investment strategy simulator.
 * All money is in USD millions. All rates are decimal fractions.
 * Market values are marked estimates rather than GAAP historical-cost carrying amounts.
 * No external APIs, real securities, financial advice, or network transactions.
 */
'use strict';

const BASE_PROPERTIES = [
  {id:'A1',name:'Mason House',district:'West Quarter',type:'residential',price:.74,rent:.115,vac:.065,opex:.31,cap:.077,maint:.014,condition:74,height:50,width:51,desc:'Brick walk-ups, predictable rent, and old plumbing. A quiet cash-flow play.'},
  {id:'A2',name:'The Foundry',district:'Industrial Edge',type:'industrial',price:1.18,rent:.193,vac:.04,opex:.24,cap:.080,maint:.020,condition:86,height:58,width:82,desc:'Long leases, heavy doors, and one tenant who can move out overnight.'},
  {id:'A3',name:'Regent Arcade',district:'Central Grid',type:'retail',price:1.23,rent:.220,vac:.13,opex:.37,cap:.089,maint:.025,condition:70,height:47,width:75,desc:'Strong foot traffic, expensive upkeep and highly sensitive consumer spending.'},
  {id:'A4',name:'Park View',district:'West Quarter',type:'residential',price:1.35,rent:.220,vac:.075,opex:.30,cap:.078,maint:.020,condition:85,height:81,width:54,desc:'Popular mid-rise apartments; a good tenant mix at an ambitious asking price.'},
  {id:'B1',name:'Atlas Offices',district:'Central Grid',type:'office',price:2.45,rent:.470,vac:.18,opex:.39,cap:.083,maint:.045,condition:79,height:93,width:51,desc:'A trophy business address with costly vacancies and refinancing exposure.'},
  {id:'B2',name:'Dockyard Lofts',district:'Harbor',type:'mixed',price:1.65,rent:.290,vac:.085,opex:.32,cap:.079,maint:.028,condition:83,height:77,width:65,desc:'Converted warehouses, street-level shops, and tourism-sensitive rents.'},
  {id:'B3',name:'Olive Court',district:'Central Grid',type:'residential',price:.92,rent:.152,vac:.09,opex:.31,cap:.080,maint:.017,condition:75,height:63,width:55,desc:'Affordable apartments with reliable demand, but frequent roof repairs.'},
  {id:'B4',name:'Station Market',district:'Transit Loop',type:'retail',price:1.40,rent:.255,vac:.11,opex:.38,cap:.083,maint:.026,condition:78,height:45,width:81,desc:'Corner retail adjacent to a station that may—or may not—expand.'},
  {id:'C1',name:'Meridian Hotel',district:'Harbor',type:'hotel',price:2.20,rent:.530,vac:.28,opex:.43,cap:.096,maint:.055,condition:84,height:91,width:63,desc:'High nightly upside; storm seasons and recessions make the cash flow volatile.'},
  {id:'C2',name:'Railway Works',district:'Transit Loop',type:'industrial',price:1.35,rent:.220,vac:.045,opex:.27,cap:.078,maint:.024,condition:87,height:59,width:85,desc:'Small distribution yards; transit changes can help or hinder truck access.'},
  {id:'C3',name:'Canal Apartments',district:'Harbor',type:'residential',price:1.02,rent:.169,vac:.08,opex:.34,cap:.083,maint:.020,condition:76,height:76,width:56,desc:'Attractive canal views, but meaningful flood-insurance and maintenance expense.'},
  {id:'C4',name:'Mercantile Hall',district:'Central Grid',type:'mixed',price:1.92,rent:.344,vac:.12,opex:.35,cap:.081,maint:.034,condition:78,height:85,width:76,desc:'Office floors above shops; multiple revenue streams, multiple possible headaches.'}
];
const STAGES = [
  {name:'The Landlord',sub:'Own a few buildings. Learn what their tenants actually pay.'},
  {name:'The Deal Maker',sub:'Negotiate leverage, improve buildings, and watch debt maturities.'},
  {name:'The Fund Manager',sub:'Outside investors arrive. Their capital is not yours.'},
  {name:'The Financial Engineer',sub:'Rate caps and mortgage securities make risk interconnected.'},
  {name:'The Reckoning',sub:'When credit contracts, liquidity matters more than appearances.'}
];
const EVENTS = [
  null,
  {title:'The first rent review',body:'Residents are spending cautiously. Local wage growth disappoints.',rent:-.010,rate:0,credit:0,vac:.004},
  {title:'A station plan reaches City Hall',body:'A transit announcement improves the outlook for Station Market and the West Quarter.',rent:.018,rate:0,credit:.01,cap:-.001,district:'Transit Loop'},
  {title:'The lender committee tightens',body:'Banks ask for larger equity cushions and more supporting cash flow.',rent:.005,rate:.006,credit:-.10,cap:.002},
  {title:'The boom papers arrive',body:'A wave of speculative demand pushes rents up and encourages aggressive underwriting.',rent:.038,rate:-.006,credit:.13,cap:-.004},
  {title:'One giant employer announces layoffs',body:'Office tenants begin renegotiating. Retail vacancy follows.',rent:-.047,rate:-.005,credit:-.07,vac:.021},
  {title:'The transit extension opens',body:'A new rail connection rewards some sites more than others.',rent:.026,rate:0,credit:.03,cap:-.002,district:'Transit Loop'},
  {title:'Leasing agents sound the alarm',body:'New development competes for existing tenants. Occupancy becomes expensive.',rent:-.029,rate:.001,credit:-.05,vac:.024},
  {title:'A citywide recovery',body:'Employment improves and commercial rents begin recovering.',rent:.039,rate:.004,credit:.09,vac:-.021},
  {title:'Inflation returns',body:'Higher operating costs, benchmark yields and cap rates erode debt capacity.',rent:.020,rate:.015,credit:-.07,cap:.006},
  {title:'The banker calls at breakfast',body:'Loan refinancings attract closer scrutiny. The best buildings still find financing.',rent:.007,rate:.005,credit:-.08,cap:.002},
  {title:'The last easy refinancing',body:'Investors chase yield while weaker borrowers stretch their balance sheets.',rent:.025,rate:-.010,credit:.12,cap:-.004},
  {title:'Credit spreads break wider',body:'The banking syndicate demands higher yields. Long-maturity assets lose value.',rent:-.021,rate:.018,credit:-.23,cap:.010,vac:.019},
  {title:'A principal tenant walks away',body:'Vacancy jumps in the office sector. Highly levered properties come under pressure.',rent:-.045,rate:.012,credit:-.15,cap:.007,vac:.028},
  {title:'The credit committee says no',body:'New loans are scarce. Forced sellers begin accepting discounts.',rent:-.036,rate:.008,credit:-.15,cap:.006,vac:.022},
  {title:'A distressed-asset auction opens',body:'Buyers with cash receive attractive offers, but financing stays constrained.',rent:-.019,rate:-.008,credit:.03,cap:.003},
  {title:'The reckoning begins',body:'A funding squeeze forces investors to sell good buildings to pay bad loans.',rent:-.060,rate:.015,credit:-.20,cap:.012,vac:.031},
  {title:'The emergency rate cut',body:'Policy rates come down. Bank spreads stay high as lenders repair balance sheets.',rent:-.019,rate:-.023,credit:.045,cap:-.004},
  {title:'The survivors consolidate',body:'Occupancy recovers selectively. Investor confidence returns slowly.',rent:.035,rate:-.008,credit:.10,vac:-.016,cap:-.003},
  {title:'Capital is available again',body:'Strong borrowers refinance and the city begins investing.',rent:.038,rate:-.004,credit:.13,cap:-.004,vac:-.009},
  {title:'The final property cycle',body:'Markets stabilize, but every owner still faces a debt maturity calendar.',rent:.021,rate:.004,credit:.045,cap:-.001}
];
const SAVE_KEY = 'property-machine-private-save-v1';
const q = id => document.getElementById(id);
const clamp = (x,a,b) => Math.max(a,Math.min(b,x));
const money = n => `${n < -0.0001 ? '−' : ''}$${Math.abs(n).toFixed(2)}M`;
const pct = n => `${(n*100).toFixed(1)}%`;
const num = n => Number(n).toFixed(2);
const asset = id => BASE_PROPERTIES.find(a=>a.id === id);
const chapterFor = y => y<=3?0:y<=7?1:y<=11?2:y<=15?3:4;
const annuity = (p,r,term=20) => !p?0 : r<.000001 ? p/term : p*r/(1-Math.pow(1+r,-term));
let STORAGE = null;
try { STORAGE = window.localStorage; } catch (_) { STORAGE = null; }
let s, selected='A1', activeTab='ledger', toastTimer;
function newGame(scenario='balanced'){
 return {started:false,finished:false,year:1,scenario,cash:4,openingCash:4,history:[],entries:[],owned:{},attempted:{},actions:{},market:{rate:scenario==='crunch'?.085:.065,rentIndex:1,employment:1,credit:scenario==='crunch'?.69:.97,capAdd:scenario==='crunch'?.009:0,vacExtra:0,districtBoost:{}},fund:{active:false,cash:0,openingCash:0,lpUnreturned:0,prefAccrued:0,lpPaid:0,gpCarryPaid:0,capitalCommitted:0},securities:[],emergency:0,defaults:0,headline:'The property market is open. All figures are fictional and denominated in USD millions.',news:[{year:1,title:'A small investor enters the city',body:'You control $4 million. The city has twelve possible acquisitions. Every loan has a maturity date.'}],ending:null,lastEvent:null};
}
function load(){try{const data=STORAGE&&STORAGE.getItem(SAVE_KEY);if(data){const obj=JSON.parse(data);if(obj&&obj.year>=1&&obj.year<=20&&obj.market&&obj.owned&&obj.fund&&Array.isArray(obj.entries)){return obj;}}}catch(e){}return null;}
function save(){try{if(STORAGE) STORAGE.setItem(SAVE_KEY,JSON.stringify(s));}catch(e){}}
function notify(text){const el=q('toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3800);}
function ensure(){if(!s.started){notify('Open your first deal with BEGIN THE GAME.');q('beginBtn').focus();return false}if(s.finished){notify('This campaign has ended. Start another empire.');return false}return true}
function cashMove(account,amount,label,kind='transaction'){
 if(Math.abs(amount)<.000000001)return;
 if(account==='fund')s.fund.cash+=amount;else s.cash+=amount;
 s.entries.push({account,amount,label,kind});
}
function sectorShift(a){const m=s.market;let x=0;if(a.type==='office')x+=(m.employment-1)*.28;if(a.type==='retail')x+=(m.employment-1)*.18;if(a.type==='hotel')x+=(m.employment-1)*.35;
 if(m.districtBoost&&m.districtBoost[a.district])x+=m.districtBoost[a.district];return x}
function effectiveVac(a,o){let t=a.vac+s.market.vacExtra+(1-s.market.employment)*.16+(o?.vacancyOffset||0);
 if(a.type==='hotel')t+=(1-s.market.employment)*.13;
 return clamp(t,.01,.72);
}
function operating(a,o){const m=s.market;const vacancy=effectiveVac(a,o);const physical=clamp((o?.condition??a.condition)/100,.55,1.09);
 const rent=a.rent*m.rentIndex*(o?.rentMult||1)*(1+sectorShift(a))*(.8+.2*physical);
 const gross=Math.max(.015,rent*(1-vacancy));
 const operatingCost=gross*a.opex*(1+(1.0-m.employment)*.15)+a.price*.0045;
 const noi=gross-operatingCost;
 return {vacancy,gross,operatingCost,noi,maintenance:a.maint*((o?.condition??a.condition)<65?1.35:1)};
}
function capRate(a){let cap=a.cap+s.market.capAdd+(.97-s.market.credit)*.007;if(a.type==='office')cap+=Math.max(0,1-s.market.employment)*.014;return clamp(cap,.047,.21)}
function valueOf(a,o){return Math.max(.10,operating(a,o).noi/capRate(a))}
function askOf(a){const base=INITIAL_VALUES[a.id];const v=valueOf(a,null);return Math.max(.16,a.price*Math.pow(clamp(v/base,.25,2.4),.82));}
const INITIAL_VALUES={};
(function() {const oldM={rate:.065,rentIndex:1,employment:1,credit:.97,capAdd:0,vacExtra:0,districtBoost:{}};
 BASE_PROPERTIES.forEach(a=>{const gross=a.rent*(1-a.vac)*(.8+.2*a.condition/100);INITIAL_VALUES[a.id]=(gross-(gross*a.opex+a.price*.0045))/a.cap;});})();
function heldProps(account){return BASE_PROPERTIES.filter(a=>s.owned[a.id]&&(!account||s.owned[a.id].owner===account));}
function loanBal(o){return (o?.senior?.balance||0)+(o?.mezz?.balance||0)}
function companyDebt(){return heldProps('company').reduce((sum,a)=>sum+loanBal(s.owned[a.id]),0)+s.emergency}
function totalDebt(){return BASE_PROPERTIES.reduce((sum,a)=>sum+loanBal(s.owned[a.id]),0)+s.emergency}
function companyNAV(){return s.cash+heldProps('company').reduce((sum,a)=>sum+valueOf(a,s.owned[a.id])-loanBal(s.owned[a.id]),0)+securityNAV()-s.emergency}
function fundNAV(){return s.fund.cash+heldProps('fund').reduce((sum,a)=>sum+valueOf(a,s.owned[a.id])-loanBal(s.owned[a.id]),0)}
function securityNAV(){return s.securities.reduce((sum,z)=>sum+securityMark(z),0)}
function currRate(l){if(!l || l.balance<=0)return 0;const raw=l.kind==='floating'?s.market.rate+l.spread:l.rate;return l.capUntil>=s.year && l.capRate?Math.min(raw,l.capRate):raw}
function debtAnnual(o){let p=0;if(o?.senior?.balance){let l=o.senior;p+=annuity(l.balance,currRate(l),Math.max(1,l.remainingAmort||20))}if(o?.mezz?.balance)p+=o.mezz.balance*currRate(o.mezz);return p}
function totalDebtService(){return BASE_PROPERTIES.reduce((n,a)=>{const o=s.owned[a.id];return n+(o?debtAnnual(o):0)},0)+s.emergency*.145}
function companyNOI(){return heldProps('company').reduce((sum,a)=>sum+operating(a,s.owned[a.id]).noi,0)}
function financialQuote(a){const price=askOf(a)*Number(q('bidSelect').value);const plan=Number(q('financeSelect').value);const owner=q('accountSelect').value;
 const NOI=operating(a,null).noi;const LTVMax=clamp(.43+s.market.credit*.29,.40,.73);const seniorRatio=Math.min(plan,.65);const senior=price*seniorRatio;const mezz=plan>.65?price*(plan-.65):0;
 const spread=(plan>=.65?.033:.025)+(.96-s.market.credit)*.016;
 const fixed=plan===.45;const rate=s.market.rate+spread;
 const mezzRate=s.market.rate+.105;
 const debtCost=annuity(senior,rate,20)+mezz*mezzRate;
 const DSCR=debtCost>0?NOI/debtCost:Infinity;
 const bankLimit=plan===0||senior/price<=LTVMax+1e-9;
 const mezzAllowed=mezz<=.000001||s.market.credit>.77;
 const coverage=plan===0||DSCR>=1.13;
 const fee=price*.018+senior*.011+mezz*.025;
 const equity=price+fee-senior-mezz;
 const fundApproved=owner!=='fund'||s.fund.active;
 const available=owner==='fund'?s.fund.cash:s.cash;
 return {price,owner,plan,senior,mezz,rate,mezzRate,fee,equity,DSCR,bankLimit,coverage,mezzAllowed,fundApproved,available,approved:bankLimit&&coverage&&mezzAllowed&&fundApproved&&equity<=available+.000001};
}
function makeLoan(principal,rate,kind,spread,years,amort=20){if(principal<=.00001)return null;return {balance:principal,rate,spread,kind,maturityYear:s.year+years,remainingAmort:amort,capRate:null,capUntil:0}}
function buyProperty(){if(!ensure())return;const a=asset(selected);if(s.owned[a.id])return notify('This property is already owned. Open its asset management tools.');if(s.attempted[a.id]===s.year)return notify('The seller has already considered your offer this year. Try again next year.');const z=financialQuote(a);
 if(!z.fundApproved)return notify('An investor fund does not exist yet. Unlock the fund chapter first.');
 if(!z.bankLimit)return notify('LENDER DECLINED: the senior advance exceeds the maximum permitted loan-to-value ratio.');
 if(!z.mezzAllowed)return notify('MEZZANINE CREDIT FROZEN: investors will not fund the junior piece in this market.');
 if(!z.coverage)return notify(`LENDER DECLINED: estimated DSCR ${num(z.DSCR)}× falls below the 1.13× minimum. Try less debt.`);
 if(z.equity>z.available+.00001)return notify(`INSUFFICIENT CASH: You need ${money(z.equity)} of equity and transaction fees.`);
 s.attempted[a.id]=s.year;
 const bid=Number(q('bidSelect').value);
 if(bid<1){const chance=bid<=.90?.23:.57;const creditFactor=clamp((.95-s.market.credit)*1.15,-.1,.28);const coin=pseudoRandom();if(coin>chance+creditFactor){save();render();return notify('OFFER REJECTED: seller wants a better price. One bid per property per year.');}}
 cashMove(z.owner,-z.equity,`${a.name}: acquisition equity and fees`,'acquisition');
 const floating=z.plan>=.65;
 s.owned[a.id]={owner:z.owner,purchasePrice:z.price,capitalizedCosts:z.price,condition:a.condition,rentMult:1,vacancyOffset:0,lastTenantAction:-1,lastRenovation:-1,purchaseYear:s.year,senior:makeLoan(z.senior,z.rate,floating?'floating':'fixed',z.rate-s.market.rate,7),mezz:makeLoan(z.mezz,z.mezzRate,'fixed',0,5)};
 s.news.unshift({year:s.year,title:`${a.name} changes hands`,body:`${money(z.price)} purchase; senior loan ${money(z.senior)}; mezzanine ${money(z.mezz)}. Equity and fees came from the ${z.owner==='fund'?'investor fund':'company'}.`});
 notify(`${a.name} acquired for ${money(z.price)}. The debt belongs to the property; cash does not appear from thin air.`);save();render();
}
function pseudoRandom(){// deterministic sequence, reproducible, including across saves
 s.randomSeed=(Math.imul((s.randomSeed||47211),1664525)+1013904223)>>>0;
 return s.randomSeed/4294967296;
}
function improvement(type){if(!ensure())return;const a=asset(selected),o=s.owned[a.id];if(!o)return;const acc=o.owner;
 if(type==='retain'){if(o.lastTenantAction===s.year)return notify('You already negotiated tenant renewals at this address this year.');const cost=Math.max(.012,askOf(a)*.018);if((acc==='fund'?s.fund.cash:s.cash)<cost)return notify('Insufficient liquidity for tenant incentives.');cashMove(acc,-cost,`${a.name}: leasing incentive`,'leasing');o.vacancyOffset=clamp(o.vacancyOffset-.028,-.11,.14);o.lastTenantAction=s.year;notify(`Tenant retention funded (${money(cost)}). Expected vacancy is lower.`);}
 if(type==='renovate'){if(o.lastRenovation===s.year)return notify('Only one major renovation per year at this property.');const cost=clamp(askOf(a)*.10,.07,.34);if((acc==='fund'?s.fund.cash:s.cash)<cost)return notify(`Renovation requires ${money(cost)} of unrestricted cash.`);cashMove(acc,-cost,`${a.name}: capital improvements`,'investing');o.condition=clamp(o.condition+18,0,100);o.rentMult*=1.055;o.capitalizedCosts+=cost;o.lastRenovation=s.year;notify(`Renovation completed for ${money(cost)}. Future rents and condition improve.`);}
 save();render();
}
function sellProperty(distress=false,id=selected){const a=asset(id),o=s.owned[a.id];if(!o)return;if(!distress&&!ensure())return;
 const owner=o.owner;const marketValue=valueOf(a,o);const price=marketValue*(distress?.72:.975);const fee=price*.025;const outstanding=loanBal(o);const proceeds=price-fee-outstanding;
 if(!distress&&proceeds<0&&(owner==='fund'?s.fund.cash:s.cash)<-proceeds){notify(`Sale blocked: lender repayment exceeds net sale proceeds by ${money(-proceeds)}. Add liquidity or negotiate with the bank.`);return;}
 cashMove(owner,proceeds,`${a.name}: ${distress?'foreclosure':'sale'} after selling fees and loan payoff`,'sale');
 delete s.owned[a.id];
 s.news.unshift({year:s.year,title:distress?`${a.name} sold under pressure`:`${a.name} leaves the portfolio`,body:`Sale price ${money(price)}, fees ${money(fee)}, secured debt retired ${money(outstanding)}, net cash ${money(proceeds)}.`});
 if(!distress){notify(`Sold ${a.name}. After transaction costs and debt payoff: ${money(proceeds)} to ${owner==='company'?'your company':'the fund'}.`);save();render();}
 return proceeds;
}
function refinance(){if(!ensure())return;const a=asset(selected),o=s.owned[a.id];if(!o)return;const mv=valueOf(a,o),NOI=operating(a,o).noi,owner=o.owner;
 const rate=s.market.rate+.034+(.96-s.market.credit)*.018;const allowedLTV=clamp(.41+s.market.credit*.29,.40,.72);const capByNOI=NOI/(1.18*annuity(1,rate,20));const maxNew=Math.max(0,Math.min(mv*allowedLTV,capByNOI));const old=loanBal(o);const fee=maxNew*.018;const proceeds=maxNew-old-fee;const accCash=owner==='fund'?s.fund.cash:s.cash;
 if(maxNew<.10)return notify('REFINANCING DENIED: insufficient collateral value or property cash flow.');
 if(proceeds<0&&accCash<-proceeds)return notify(`REFINANCING GAP: ${money(-proceeds)} of new equity required to repay the existing lender.`);
 if(maxNew>mv*allowedLTV+.00001)return notify('Bank underwriting failed.');
 cashMove(owner,proceeds,`${a.name}: refinancing proceeds net of loan payoff and fees`,'financing');
 o.senior=makeLoan(maxNew,rate,'floating',rate-s.market.rate,7);
 o.mezz=null;
 notify(`New floating-rate mortgage ${money(maxNew)}. Net ${proceeds<0?'cash required':'cash released'}: ${money(Math.abs(proceeds))}.`);save();render();
}
function hedge(){if(!ensure())return; if(s.year<12)return notify('Interest-rate protection unlocks in the financial engineering chapter.');const o=s.owned[selected],a=asset(selected);if(!o||!o.senior||o.senior.kind!=='floating')return notify('The selected property needs an outstanding floating-rate senior mortgage.');
 if(o.senior.capUntil>=s.year)return notify('This loan already has an active interest-rate cap.');const cost=o.senior.balance*.018;const acc=o.owner;if((acc==='fund'?s.fund.cash:s.cash)<cost)return notify('Insufficient cash to purchase rate protection.');
 cashMove(acc,-cost,`${a.name}: purchased interest-rate cap premium`,'hedge');
 o.senior.capRate=currRate(o.senior)+.014;o.senior.capUntil=s.year+3;
 notify(`Rate cap purchased. Senior floating rate cannot exceed ${pct(o.senior.capRate)} through Year ${o.senior.capUntil}.`);save();render();
}
function raiseFund(){if(!ensure())return;if(s.year<8)return notify('The fund opens in Year 8. Keep building your track record.');if(s.fund.active)return notify('You have already raised your one investor fund.');if(s.cash<.09)return notify('Your management company needs $0.09M for fund establishment costs.');
 s.fund.active=true;s.fund.capitalCommitted=3;s.fund.lpUnreturned=3;
 cashMove('company',-.09,'Fund formation and legal costs','fund');
 cashMove('fund',3,'Limited partner capital contribution · restricted to the fund','fund');
 s.news.unshift({year:s.year,title:'An investor fund opens its books',body:'Outside limited partners contributed $3.00M. Those assets belong to the fund—not to your management company.'});
 notify('Investor fund capital raised: $3.00M. The money is restricted to fund investments, not company expenses.');save();render();
}
function distributeFund(){if(!ensure())return;if(!s.fund.active)return notify('Raise investor capital first.');const f=s.fund;const amount=Math.max(0,f.cash-.4);if(amount<.05)return notify('The fund must keep at least $0.40M of liquidity. No distributable cash available.');
 let remaining=amount;const capital=Math.min(f.lpUnreturned,remaining);f.lpUnreturned-=capital;remaining-=capital;
 const pref=Math.min(f.prefAccrued,remaining);f.prefAccrued-=pref;remaining-=pref;
 const carry=Math.max(0,remaining*.20);const lpProfit=Math.max(0,remaining-carry);
 const lpPaid=capital+pref+lpProfit;f.lpPaid+=lpPaid;f.gpCarryPaid+=carry;
 cashMove('fund',-amount,`Investor fund: ${money(lpPaid)} to LPs; ${money(carry)} GP performance carry`,'distribution');
 if(carry>0)cashMove('company',carry,'GP performance allocation received from fund','distribution');
 notify(`Distributed ${money(amount)}: LPs received ${money(lpPaid)}; GP carry ${money(carry)}.`);save();render();
}
function securityMark(z){const spreadMove=s.market.rate-z.baseRate;const duration=z.tier==='senior'?4.3:2.1;
 const mark=clamp(1-duration*spreadMove,.54,1.25);
 const creditAdj=z.tier==='junior'?clamp(.60+s.market.credit*.43,.55,1.09):clamp(.87+s.market.credit*.14,.82,1.06);
 return z.principal*(z.tier==='senior'?.97:.88)*mark*creditAdj;
}
function buySecurity(tier){if(!ensure())return;if(s.year<12)return notify('The structured debt desk opens in Year 12.');const face=.5;const unit=tier==='senior'?.97:.88;const price=face*unit; if(s.cash<price)return notify(`Your company needs ${money(price)} in cash to purchase this tranche.`);
 cashMove('company',-price,`Bought ${tier} mortgage-linked note at ${pct(unit)} of par`,'security');
 s.securities.push({id:`${tier}-${s.year}-${s.securities.length}`,tier,face,principal:face,basis:price,baseRate:s.market.rate,issueYear:s.year,maturityYear:Math.min(20,s.year+8)});
 notify(`${tier.toUpperCase()} note acquired. This note is exposed to the same city's economy as your buildings.`);save();render();
}
function sellSecurities(tier){if(!ensure())return;const matches=s.securities.filter(z=>z.tier===tier);if(!matches.length)return notify(`You own no ${tier} securities.`);
 let proceeds=0;matches.forEach(z=>{proceeds+=securityMark(z)*.985;});s.securities=s.securities.filter(z=>z.tier!==tier);cashMove('company',proceeds,`Sold ${tier} mortgage note holdings net of market spread`,'security');notify(`${tier.toUpperCase()} note position exited for ${money(proceeds)}.`);save();render();
}
function loanSettlement(o,a,stats){const account=o.owner;
 for(const key of ['senior','mezz']){
  const l=o[key];if(!l||l.balance<.000001)continue;
  const rate=currRate(l),interest=l.balance*rate;
  const principal=key==='mezz'?0:Math.min(l.balance,Math.max(0,annuity(l.balance,rate,Math.max(1,l.remainingAmort||20))-interest));
  cashMove(account,-interest,`${a.name} · ${key} interest`,'interest');stats.interest+=interest;
  if(principal>0){cashMove(account,-principal,`${a.name} · scheduled mortgage principal`,'principal');stats.principal+=principal;l.balance-=principal;}
  if(key==='senior')l.remainingAmort=Math.max(1,(l.remainingAmort||20)-1);
  if(s.year>=l.maturityYear&&l.balance>.000001){cashMove(account,-l.balance,`${a.name} · ${key} loan balloon at maturity`,'balloon');stats.balloon+=l.balance;l.balance=0;}
  if(l.balance<=.000001)o[key]=null;
 }
}
function settleSecurities(stats){const next=[];for(const z of s.securities){
 const lossBaseline=Math.max(0,.005+(1-s.market.employment)*.13+(1-s.market.credit)*.07);
 const lossRate=z.tier==='junior'?Math.min(.30,lossBaseline*2.7):Math.max(0,(lossBaseline-.045)*.65);
 const creditLoss=Math.min(z.principal,z.principal*lossRate);z.principal-=creditLoss;stats.securityLoss+=creditLoss;
 const coupon=z.principal*(z.tier==='senior'?.054:.096);
 cashMove('company',coupon,`${z.tier} mortgage note coupon, after credit loss`,'coupon');stats.coupons+=coupon;
 const prepay=s.market.rate<.052?.10:.018;let principalPaid=Math.min(z.principal,z.principal*prepay);
 if(s.year>=z.maturityYear)principalPaid=z.principal;
 if(principalPaid>0){cashMove('company',principalPaid,`${z.tier} mortgage note principal returned`,'securityPrincipal');stats.securityPrincipal+=principalPaid;z.principal-=principalPaid;}
 if(z.principal>.00001)next.push(z);
 }
 s.securities=next;
}
function shock(nextYear){const base=EVENTS[nextYear];if(!base)return;
 const mul=s.scenario==='boom'?(nextYear<12?1.3:1.4):s.scenario==='crunch'?1.35:1;
 const e={...base};let rent=e.rent||0,cap=e.cap||0,credit=e.credit||0,rate=e.rate||0,vac=e.vac||0;
 if(s.scenario==='boom'&&nextYear<=11){rent=Math.abs(rent)*.8+rent*.5;credit+=.045;cap-=.002}
 if(s.scenario==='crunch'){rent=rent<0?rent*mul:rent*.65;rate=rate>0?rate*1.30:rate*.70;credit=credit<0?credit*mul:credit*.75;vac=vac>0?vac*1.3:vac*.75;}
 s.market.rentIndex=clamp(s.market.rentIndex*(1+rent),.59,1.7);
 s.market.rate=clamp(s.market.rate+rate,.025,.18);
 s.market.credit=clamp(s.market.credit+credit,.23,1.18);
 s.market.capAdd=clamp(s.market.capAdd+cap,.0,.065);
 s.market.vacExtra=clamp(s.market.vacExtra+vac,-.065,.19);
 s.market.employment=clamp(s.market.employment+rent*.55-vac*.75,.74,1.13);
 if(e.district){s.market.districtBoost[e.district]=clamp((s.market.districtBoost[e.district]||0)+.09,-.03,.2);}
 s.headline=e.title.toUpperCase()+' — '+e.body;
 s.lastEvent=nextYear;
 s.news.unshift({year:nextYear,title:e.title,body:e.body});
}
function distressReview(){for(const account of ['company','fund']){
 let balance=account==='fund'?s.fund.cash:s.cash;
 if(balance>=-.00000001)continue;
 // Short-lived emergency borrowing can address company cash deficits, but does not forgive existing debt.
 if(account==='company'&&s.market.credit>.48&&s.emergency<1.35){const line=Math.min(-balance,1.35-s.emergency);
  if(line>.0001){s.emergency+=line;cashMove('company',line,'Emergency lender cash line · interest 14.5%','emergency');s.news.unshift({year:s.year,title:'Emergency credit line drawn',body:`Borrowed ${money(line)} at 14.5% to keep the company cash balance positive. This increases liabilities.`});}}
 balance=account==='fund'?s.fund.cash:s.cash;
 let trials=0;
 while(balance<-.00001&&trials<12){const items=heldProps(account);if(!items.length)break;
  const ranked=items.sort((a,b)=>(valueOf(b,s.owned[b.id])*.72-loanBal(s.owned[b.id]))-(valueOf(a,s.owned[a.id])*.72-loanBal(s.owned[a.id])));
  sellProperty(true,ranked[0].id);s.defaults++;trials++;
  balance=account==='fund'?s.fund.cash:s.cash;
 }
 if(balance<-.00001){s.defaults++;s.news.unshift({year:s.year,title:'A balance sheet in distress',body:`${account==='fund'?'The fund':'Your management company'} cannot meet its cash obligations. The negative cash balance is recorded as unpaid liquidity shortfall.`});}
 }
}
function advanceYear(){if(!ensure())return;
 const year=s.year;
 const stats={year,openingCash:s.openingCash,openingFundCash:s.fund.openingCash,nois:0,expenses:0,interest:0,principal:0,balloon:0,coupons:0,securityLoss:0,securityPrincipal:0};
 // Rental cash receipts are collected before debt, just like a property operating account.
 for(const a of BASE_PROPERTIES){const o=s.owned[a.id];if(!o)continue;const x=operating(a,o);
  cashMove(o.owner,x.gross,`${a.name}: collected rent`,'rent');cashMove(o.owner,-x.operatingCost,`${a.name}: operating costs`,'opex');
  cashMove(o.owner,-x.maintenance,`${a.name}: routine maintenance reserve`,'maintenance');
  stats.nois+=x.noi;stats.expenses+=x.maintenance;
  loanSettlement(o,a,stats);
  // Tenant concessions fade gradually; renovations are persistent.
  o.vacancyOffset*=.88;
 }
 const overhead=.055+heldProps('company').length*.009+(s.fund.active?.035:0);
 cashMove('company',-overhead,'Corporate administration and overhead','overhead');
 if(s.emergency>0){const interest=s.emergency*.145;cashMove('company',-interest,'Emergency credit line interest','interest');stats.interest+=interest;}
 if(s.fund.active){
  s.fund.prefAccrued+=s.fund.lpUnreturned*.08;
  const managementFee=.03;cashMove('fund',-managementFee,'Annual external fund management fee','fee');cashMove('company',managementFee,'Management company earned fund fee','fee');
 }
 settleSecurities(stats);
 // Investors and the manager are accounted for separately. Distress sales never mint cash.
 distressReview();
 const coIn=s.entries.filter(e=>e.account==='company'&&e.amount>0).reduce((sum,e)=>sum+e.amount,0);
 const coOut=-s.entries.filter(e=>e.account==='company'&&e.amount<0).reduce((sum,e)=>sum+e.amount,0);
 const fIn=s.entries.filter(e=>e.account==='fund'&&e.amount>0).reduce((sum,e)=>sum+e.amount,0);
 const fOut=-s.entries.filter(e=>e.account==='fund'&&e.amount<0).reduce((sum,e)=>sum+e.amount,0);
 stats.closingCash=s.cash;stats.closingFundCash=s.fund.cash;stats.inflows=coIn;stats.outflows=coOut;stats.fundInflows=fIn;stats.fundOutflows=fOut;
 stats.reconciliation=s.openingCash+coIn-coOut-s.cash;
 stats.fundReconciliation=s.fund.openingCash+fIn-fOut-s.fund.cash;
 stats.companyNAV=companyNAV();stats.fundNAV=fundNAV();stats.entries=s.entries.map(e=>({...e}));
 s.history.unshift(stats);
 if(year>=20){s.finished=true;s.ending={nav:companyNAV(),cash:s.cash,debt:companyDebt(),defaults:s.defaults,assets:heldProps('company').length,fund:fundNAV()};s.news.unshift({year:20,title:'The books close',body:`Twenty years have passed. Ending management-company NAV: ${money(companyNAV())}. The investor fund is accounted for separately.`});}
 else{shock(year+1);s.year+=1;s.openingCash=s.cash;s.fund.openingCash=s.fund.cash;s.entries=[];s.attempted={};s.actions={};}
 notify(year>=20?'Final accounts closed. Review your legacy.':`Year ${year} closed. Balance reconciles; new market news has arrived for Year ${year+1}.`);
 save();render();
 if(s.finished)q('endingPanel').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderBoard(){q('cityBoard').innerHTML=BASE_PROPERTIES.map(a=>{const o=s.owned[a.id],ask=o?valueOf(a,o):askOf(a);return `<button class="property-tile ${selected===a.id?'selected':''} ${o?o.owner:''}" data-id="${a.id}" type="button" aria-pressed="${selected===a.id}"><span class="tile-top"><span class="tile-id">${a.id} / ${a.type.toUpperCase()}</span><span class="tile-status">${o?o.owner==='fund'?'FUND':'OWNED':'FOR SALE'}</span></span><span class="tile-art"><span class="building-art ${a.type}" style="--height:${a.height}px;--width:${a.width}px"></span></span><span class="tile-footer"><span class="tile-name">${a.name}</span><span class="tile-sub">${a.district}</span><span class="tile-price">${o?'MARKED VALUE':'ASKING'} ${money(ask)}</span></span></button>`;}).join('');}
function fig(name,value,negative=false){return `<div class="figure"><small>${name}</small><strong class="${negative?'negative':''}">${value}</strong></div>`}
// Five-year underwriting is a hypothetical buyer's forward view. It is deliberately
// independent from the company's historical balance sheet and uses an explicit exit cap.
function presentValue(flows,rate){return flows.reduce((pv,cf,i)=>pv+cf/Math.pow(1+rate,i),0);}
function internalRate(flows){const f=r=>presentValue(flows,r);let lo=-.95,hi=5;const a=f(lo),b=f(hi);if(!Number.isFinite(a)||!Number.isFinite(b)||a*b>0)return null;for(let i=0;i<130;i++){const mid=(lo+hi)/2;if(f(mid)*a>0)lo=mid;else hi=mid;}return (lo+hi)/2;}
function projection(a){const qz=financialQuote(a);const hurdle=Number(q('hurdleSelect').value);const startPrice=qz.price;
 const flowUnlevered=[-(startPrice+qz.fee)];const flowLevered=[-qz.equity];let senior=qz.senior,mezz=qz.mezz;
 const rate=qz.rate,mezzRate=qz.mezzRate;let noi=operating(a,null).noi,maintenance=a.maint;
 const scheduled=annuity(senior,rate,20);
 for(let t=1;t<=5;t++){
  noi*=1.02;maintenance*=1.02;
  const interest=senior*rate,seniorPrincipal=Math.min(senior,Math.max(0,scheduled-interest));senior-=seniorPrincipal;
  const mezzInterest=mezz*mezzRate;
  let cashU=noi-maintenance,cashE=noi-maintenance-interest-seniorPrincipal-mezzInterest;
  if(t===5){const exitPrice=Math.max(.05,noi/(capRate(a)+.005))*.975;cashU+=exitPrice;cashE+=exitPrice-senior-mezz;}
  flowUnlevered.push(cashU);flowLevered.push(cashE);
 }
 return {unleveredIRR:internalRate(flowUnlevered),equityIRR:internalRate(flowLevered),equityNPV:presentValue(flowLevered,hurdle),hurdle,dscr:qz.DSCR,year1Cash:flowLevered[1]};
}
function returnFigure(label,val,warning=false){return `<div class="return-figure"><small>${label}</small><strong class="${warning?'warn':''}">${val}</strong></div>`;}
function renderDossier(){const a=asset(selected),o=s.owned[a.id],marketValue=valueOf(a,o),ask=askOf(a),NOI=operating(a,o).noi,cap=capRate(a),x=operating(a,o);
 q('assetName').textContent=a.name;q('assetMeta').textContent=`${a.district.toUpperCase()} / ${a.type.toUpperCase()} / ${a.id}`;
 q('assetFinancials').innerHTML=fig(o?'MARKED VALUE':'ASKING PRICE',money(o?marketValue:ask))+fig('INCOME-BASED VALUE',money(marketValue))+fig('EXPECTED ANNUAL NOI',money(NOI))+fig('MARKET CAP RATE',pct(cap))+fig('EST. OCCUPANCY',pct(1-x.vacancy))+fig(o?'SECURED DEBT':'ASK / VALUE',o?money(loanBal(o)):num(ask/marketValue)+'×',!o&&ask>marketValue*1.15);
 const forecast=projection(a);const irrText=x=>x===null?'N/M':pct(x);q('returnProjection').innerHTML=returnFigure('UNLEVERED 5Y IRR',irrText(forecast.unleveredIRR),forecast.unleveredIRR===null||forecast.unleveredIRR<0)+returnFigure('EQUITY 5Y IRR',irrText(forecast.equityIRR),forecast.equityIRR===null||forecast.equityIRR<0)+returnFigure('EQUITY NPV / HURDLE',money(forecast.equityNPV),forecast.equityNPV<0);
 q('marketNarrative').textContent=a.desc+(o?` Owned by your ${o.owner==='fund'?'investor fund':'management company'}. The marked value excludes your financing structure. Annual maintenance is a separate cash outflow from NOI.`:` The asking price is a seller quote. Your valuation is NOI ÷ the risk-adjusted cap rate. There is no guarantee that an offer below asking will be accepted.`);
 q('dealForm').hidden=Boolean(o);q('ownedActions').hidden=!o;
 if(o){q('ownerBanner').textContent=`${o.owner==='fund'?'INVESTOR FUND':'YOUR COMPANY'} / OWNED SINCE YEAR ${String(o.purchaseYear).padStart(2,'0')}`;
  q('hedgeBtn').hidden=s.year<12||!o.senior||o.senior.kind!=='floating';
  q('hedgeBtn').innerHTML=o.senior&&o.senior.capUntil>=s.year?'RATE CAP ACTIVE <span>PROTECTED</span>':'BUY INTEREST-RATE CAP <span>4 YEAR COVER</span>';
  q('hedgeBtn').disabled=o.senior&&o.senior.capUntil>=s.year;
 }else{
  const z=financialQuote(a);
  q('financingQuote').innerHTML=`EQUITY <b>${money(z.equity)}</b> · DEBT <b>${money(z.senior+z.mezz)}</b><br>DSCR ${Number.isFinite(z.DSCR)?num(z.DSCR)+'×':'—'} · ${z.approved?'BANK CLEARANCE':'REVIEW TERMS'}`;
  q('buyBtn').disabled=!s.started||s.finished||s.attempted[a.id]===s.year;
 }
 q('accountSelect').options[1].disabled=!s.fund.active;
 if(!s.fund.active&&q('accountSelect').value==='fund')q('accountSelect').value='company';
}
function renderStatus(){q('yearLabel').innerHTML=`YEAR ${String(s.year).padStart(2,'0')} <small>/ 20</small>`;const stage=chapterFor(s.year);q('chapterSubtitle').textContent=STAGES[stage].name;
 q('cashStat').textContent=money(s.cash);q('navStat').textContent=money(companyNAV());q('debtStat').textContent=money(companyDebt());q('rateStat').textContent=pct(s.market.rate);
 const spread=companyDebt()>0?companyDebt()/Math.max(.01,companyNAV()+companyDebt()):0;
 const bad=s.cash<.15||companyNAV()<0||spread>.76;
 q('riskStat').textContent=s.cash<0?'DISTRESSED':bad?'AT RISK':'SOLVENT';q('riskNote').textContent=bad?'Review cash and maturities':'Cash is the oxygen';document.querySelector('.risk-stat').classList.toggle('stressed',bad);
 q('headlineTicker').textContent=s.headline;
 document.querySelectorAll('[data-chapter]').forEach(e=>{const i=Number(e.dataset.chapter);e.classList.toggle('current',i===stage);e.classList.toggle('past',i<stage);});
 let prompt=stage===0?'01 / STUDY YOUR FIRST DEAL':stage===1?'02 / FIND THE BETTER CAPITAL STACK':stage===2?'03 / WHOSE MONEY IS IT?':stage===3?'04 / BUILD YOUR DEFENSES':'05 / CASH BEATS PAPER PROFITS';
 q('turnPrompt').textContent=prompt;q('turnSub').textContent=STAGES[stage].sub;
 q('advanceBtn').disabled=!s.started||s.finished;q('advanceBtn').innerHTML=s.year===20?'CLOSE FINAL YEAR <span>→</span>':'CLOSE THE YEAR <span>→</span>';
 q('beginBtn').textContent=s.started?'RESUME THE GAME ↗':'BEGIN THE GAME ↗';q('scenarioSelect').value=s.scenario;q('scenarioSelect').disabled=s.started;
}
const row=(text,val,bold=false)=>`<div class="ledger-row ${bold?'strong':''}"><span>${text}</span><b>${val}</b></div>`;
function renderLedger(){const assets=heldProps('company').reduce((sum,a)=>sum+valueOf(a,s.owned[a.id]),0);const secured=heldProps('company').reduce((sum,a)=>sum+loanBal(s.owned[a.id]),0);const sec=securityNAV(), debt=secured+s.emergency;
 q('balanceSheet').innerHTML=row('Unrestricted cash',money(s.cash))+row('Appraised property assets',money(assets))+row('Mortgage note holdings',money(sec))+row('TOTAL MARKED ASSETS',money(s.cash+assets+sec),true)+row('Secured mortgages',money(secured))+row('Emergency credit line',money(s.emergency))+row('COMPANY MARKED EQUITY',money(s.cash+assets+sec-debt),true)+`<p class="small-print">Fair-value NAV, not a GAAP balance sheet. Investor fund assets are excluded. No double-counting of borrowed proceeds.</p>`;
 const entries=s.entries.filter(e=>e.account==='company'),inflow=entries.filter(e=>e.amount>0).reduce((n,e)=>n+e.amount,0),outflow=-entries.filter(e=>e.amount<0).reduce((n,e)=>n+e.amount,0),res=s.openingCash+inflow-outflow-s.cash;
 let html=row('Opening year cash',money(s.openingCash))+row('Year-to-date cash inflows',money(inflow))+row('Year-to-date cash outflows',money(-outflow))+row('Cash now',money(s.cash),true)+row('Reconciliation difference',money(res));
 if(s.history.length){const h=s.history[0];html+=`<div style="border-top:2px double currentColor;margin-top:14px;padding-top:9px;font:700 10px var(--mono)">CLOSED YEAR ${h.year} / VERIFIED CASH MOVEMENTS</div>`+row('Opening cash',money(h.openingCash))+row('Cash received',money(h.inflows))+row('Cash spent',money(-h.outflows))+row('Closing cash',money(h.closingCash),true)+row('CHECK (SHOULD BE ZERO)',money(h.reconciliation));}
 html+='<p class="small-print" style="color:#c9bca9">Buying or refinancing changes cash and debt, not operating rent. A sale retires secured loans first.</p>';
 q('cashReconciliation').innerHTML=html;
 q('underwritingNotes').innerHTML=`<div class="formula-note"><b>INCOME VALUATION</b>Market value = annual net operating income ÷ cap rate.</div><div class="formula-note"><b>MORTGAGE COVERAGE</b>DSCR = property NOI ÷ annual scheduled debt payments. Lenders require at least 1.13× for acquisitions.</div><div class="formula-note"><b>THE LEVERAGE TRAP</b>Loan proceeds increase cash and debt simultaneously. Your equity does not increase simply because you borrowed.</div><div class="formula-note"><b>THE FUND WALL</b>Investor capital belongs to the fund. It is never counted in your company cash or net worth.</div>`;
 const co=heldProps('company');if(co.length){const grossValue=co.reduce((sum,a)=>sum+valueOf(a,s.owned[a.id]),0);
  const perSector={};co.forEach(a=>perSector[a.type]=(perSector[a.type]||0)+valueOf(a,s.owned[a.id]));
  const biggest=Object.entries(perSector).sort((a,b)=>b[1]-a[1])[0];
  const shockLoss=co.reduce((sum,a)=>sum+Math.max(0,valueOf(a,s.owned[a.id])-operating(a,s.owned[a.id]).noi/(capRate(a)+.02)),0);
  q('underwritingNotes').innerHTML+=`<div class="formula-note"><b>PORTFOLIO CONCENTRATION</b>${biggest[0].toUpperCase()} is ${pct(biggest[1]/grossValue)} of directly owned appraised property value.</div><div class="formula-note"><b>CAP-RATE STRESS TEST</b>If property cap rates rose by 2 percentage points without NOI changing, appraised values would decline by approximately ${money(shockLoss)}. This is a valuation scenario, not a forecast.</div>`;
 }
 q('ledgerDate').textContent=`YEAR ${s.year} + LAST CLOSED YEAR`;
}
function renderLoans(){const loans=heldProps().map(a=>{const o=s.owned[a.id];return ['senior','mezz'].map(k=>{const l=o[k];if(!l)return '';return `<tr><td>${a.name}</td><td>${o.owner==='fund'?'LP FUND':'COMPANY'}</td><td>${k.toUpperCase()}</td><td>${money(l.balance)}</td><td>${pct(currRate(l))}${l.kind==='floating'?' ↕':''}</td><td>${s.year+l.remainingAmort >0?`YR ${l.maturityYear}`:'—'}</td><td>${num(operating(a,o).noi/Math.max(.001,debtAnnual(o)))}×</td></tr>`;}).join('');}).join('');
 q('loansTable').innerHTML=`<table class="finance-table"><thead><tr><th>PROPERTY</th><th>ACCOUNT</th><th>TYPE</th><th>PRINCIPAL</th><th>RATE</th><th>MATURITY</th><th>PROPERTY DSCR</th></tr></thead><tbody>${loans||'<tr><td colspan="7">No mortgages yet. Acquire a building with financing to open a loan file.</td></tr>'}</tbody></table><p class="small-print">Senior mortgages amortize over 20 years but mature after 7; unpaid principal becomes a balloon at maturity. Mezzanine debt is interest-only and matures after 5. Interest-rate caps may limit floating rates. Maturity risk can force distressed disposals.</p>`;
}
function renderFund(){const f=s.fund;const open=s.year>=8;q('raiseFundBtn').disabled=!open||f.active||s.finished;q('distributeFundBtn').disabled=!f.active||f.cash<=.46||s.finished;
 q('raiseFundBtn').textContent=f.active?'FUND ALREADY RAISED':open?'RAISE $3.00M OF OUTSIDE CAPITAL':'UNLOCKS IN YEAR 8';
 q('fundDashboard').innerHTML=`<h4>${f.active?'Investor fund opened':'The fund is still locked'}</h4>`+row('Outside capital committed',money(f.capitalCommitted))+row('Fund cash (restricted)',money(f.cash))+row('Appraised fund NAV',money(fundNAV()))+row('LP capital not yet returned',money(f.lpUnreturned))+row('Preferred return accrued',money(f.prefAccrued))+row('Total paid to LPs',money(f.lpPaid))+row('GP carry paid to manager',money(f.gpCarryPaid),true)+`<p class="small-print">Preferred return accrues at 8% on unrecovered contributed capital (not a guaranteed investment yield). Distribution waterfall: return capital → accrued preference → 80/20 split. Annual management fee: $0.03M when active. The model simplifies investment-fund tax and legal structures.</p>`;
}
function securityCard(tier){const avail=s.year>=12;const holdings=s.securities.filter(z=>z.tier===tier);const market=holdings.reduce((n,z)=>n+securityMark(z),0);const face=holdings.reduce((n,z)=>n+z.principal,0);
 return `<div class="security-card ${tier}"><span class="tag">${tier==='senior'?'FIRST LOSS PROTECTION':'FIRST LOSS EXPOSURE'} / ${tier.toUpperCase()}</span><h4>${tier==='senior'?'Senior Mortgage Note':'Junior Mortgage Note'}</h4><p>${tier==='senior'?'Paid ahead of junior holders; lower expected coupon and lower sensitivity to initial credit losses.':'Absorbs a disproportionate share of modeled mortgage losses, but offers a higher contractual coupon.'}</p><div class="security-detail"><span>COUPON / FACE</span><b>${tier==='senior'?'5.4%':'9.6%'}</b></div><div class="security-detail"><span>ASK / $0.50M FACE</span><b>${money(tier==='senior'?.485:.44)}</b></div><div class="security-detail"><span>YOUR CURRENT FACE</span><b>${money(face)}</b></div><div class="security-detail"><span>MARKED VALUE</span><b>${money(market)}</b></div><button class="button primary" type="button" data-buysecurity="${tier}" ${avail&&!s.finished?'':'disabled'}>${avail?'BUY $0.50M FACE NOTE':'UNLOCKS IN YEAR 12'}</button><button class="button minor" type="button" data-sellsecurity="${tier}" ${holdings.length&&!s.finished?'':'disabled'}>SELL ${tier.toUpperCase()} HOLDINGS</button></div>`;
}
function renderSecurities(){q('securitiesTable').innerHTML=securityCard('senior')+securityCard('junior')+`<p class="small-print" style="grid-column:1/-1">Securities here reference an illustrative pool of other borrowers’ mortgages—not your own property loans. Coupon income and returned principal enter company cash; simulated defaults reduce principal and market value. Notes are not real mortgage-backed securities.</p>`;}
function renderNews(){q('newsFeed').innerHTML=s.news.slice(0,16).map(e=>`<article class="news-entry"><small>YEAR ${String(e.year).padStart(2,'0')} / THE MARKET WIRE</small><h4>${escapeHTML(e.title)}</h4><p>${escapeHTML(e.body)}</p></article>`).join('');}
function escapeHTML(str){return String(str).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function renderEnding(){const el=q('endingPanel');el.hidden=!s.finished;if(!s.finished)return;
 const e=s.ending;const catastrophic=e.nav<0||e.cash<-.01,wealthy=e.nav>8&&e.defaults<2;
 q('endingTitle').textContent=catastrophic?'The empire ate its owner.':wealthy?'You built an empire that survived.':'You made it to the last page.';
 q('endingBody').textContent=catastrophic?'The city changed, lenders demanded repayment, and cash could not keep up. The difference between paper value and solvency became unmistakable.':wealthy?'You grew management-company equity without letting every attractive deal consume your liquidity. Your outside investors have their own separate claims.':'Some good decisions and some painful ones got you through twenty years. Review whether you built durable cash flow or depended on favourable market prices.';
 q('endingStats').innerHTML=`<span>COMPANY NAV<br>${money(e.nav)}</span><span>FINAL CASH<br>${money(e.cash)}</span><span>ASSETS OWNED<br>${e.assets}</span><span>ENFORCED SALES<br>${e.defaults}</span>`;
}
function render(){renderStatus();renderBoard();renderDossier();renderLedger();renderLoans();renderFund();renderSecurities();renderNews();renderEnding();q('tab-'+activeTab).classList.add('active');save();}
function changeTab(name){activeTab=name;document.querySelectorAll('.tab').forEach(b=>{const active=b.dataset.tab===name;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});document.querySelectorAll('.tab-pane').forEach(p=>p.classList.toggle('active',p.id==='tab-'+name));}
function confirmReset(){if(!window.confirm('Reset this fictional financial empire? Your locally saved game will be erased.'))return;try{STORAGE&&STORAGE.removeItem(SAVE_KEY)}catch(e){}s=newGame(q('scenarioSelect').value);selected='A1';activeTab='ledger';render();changeTab('ledger');notify('The ledger is clean. The city is yours to attempt again.');window.scrollTo({top:0,behavior:'smooth'});}
function wire(){
 q('beginBtn').addEventListener('click',()=>{if(!s.started){s.scenario=q('scenarioSelect').value;s=newGame(s.scenario);s.started=true;notify('The boardroom is open. Pick an address and inspect the deal.');}render();q('gameSection').scrollIntoView({behavior:'smooth',block:'start'});});
 q('helpBtn').addEventListener('click',()=>{q('helpPanel').hidden=false;q('helpPanel').scrollIntoView({behavior:'smooth'});});q('closeHelpBtn').addEventListener('click',()=>q('helpPanel').hidden=true);
 q('cityBoard').addEventListener('click',e=>{const b=e.target.closest('.property-tile');if(!b)return;selected=b.dataset.id;renderBoard();renderDossier();});
 ['bidSelect','financeSelect','accountSelect','hurdleSelect'].forEach(id=>q(id).addEventListener('change',renderDossier));
 q('buyBtn').addEventListener('click',buyProperty);q('retainBtn').addEventListener('click',()=>improvement('retain'));q('renovateBtn').addEventListener('click',()=>improvement('renovate'));q('refiBtn').addEventListener('click',refinance);q('sellBtn').addEventListener('click',()=>sellProperty());q('hedgeBtn').addEventListener('click',hedge);
 q('advanceBtn').addEventListener('click',advanceYear);
 document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>changeTab(b.dataset.tab)));
 q('raiseFundBtn').addEventListener('click',raiseFund);q('distributeFundBtn').addEventListener('click',distributeFund);
 q('securitiesTable').addEventListener('click',e=>{const a=e.target.closest('[data-buysecurity]'),b=e.target.closest('[data-sellsecurity]');if(a)buySecurity(a.dataset.buysecurity);if(b)sellSecurities(b.dataset.sellsecurity);});
 q('saveBtn').addEventListener('click',()=>{save();notify('Saved in this browser only. No account, server or upload required.');});
 q('resetBtn').addEventListener('click',confirmReset);q('restartBtn').addEventListener('click',confirmReset);
}
(function init(){s=load()||newGame();if(s.started)notify('Saved empire restored from this browser.');wire();render();changeTab('ledger');})();
