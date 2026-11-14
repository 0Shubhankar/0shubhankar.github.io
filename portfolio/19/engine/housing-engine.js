import {CONFIG} from './config.js';
import {createHousingState,validateHousingState,cityIndicators} from './housing-state.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const sum=a=>a.reduce((s,x)=>s+x,0);
const copy=x=>JSON.parse(JSON.stringify(x));
export const DEFAULTS=Object.freeze({growth:.012,incomeGrowth:.025,targetVacancy:.05,rentResponse:1.6,maxRentChange:.15,constructionCost:180000,affordableCost:160000,annualConstructionRate:.025,demolitionRate:.002,affordableRent:500,shelterCost:9000,supportiveCost:18000,displacementRate:.08,homelessRisk:.08,initialBudget:120000000});
export const POLICIES=Object.freeze(['density','rentControl','inclusionary','peripheralHousing','shelters','supportiveHousing','developerIncentives','communityInvestment','none']);
function check(ok,msg){if(!ok)throw new Error(msg);}
function distribute(n,weights){const total=sum(weights);if(!n)return weights.map(()=>0);check(total>0,'Empty allocation');const raw=weights.map(w=>n*w/total), out=raw.map(Math.floor);const order=raw.map((v,i)=>[v-out[i],i]).sort((a,b)=>b[0]-a[0]||a[1]-b[1]);// remainder assigned below
 let remaining=n-sum(out);for(let j=0;j<remaining;j++)out[order[j][1]]++;return out;}
export function createEngine(config=CONFIG,parameters={}){
 const p={...DEFAULTS,...parameters};for(const k of Object.keys(DEFAULTS))check(Number.isFinite(p[k])&&p[k]>=0,`Invalid parameter ${k}`);for(const k of ['growth','incomeGrowth','targetVacancy','maxRentChange','annualConstructionRate','demolitionRate','displacementRate','homelessRisk'])check(p[k]<=1,`Rate exceeds one: ${k}`);check(p.constructionCost>0&&p.affordableCost>0&&p.shelterCost>0&&p.supportiveCost>0&&p.affordableRent>0,'Costs must be positive');
 const state=createHousingState(config);state.version='1.1.0';state.budget=p.initialBudget;state.zones=state.zones.map(z=>({...z,baselineRent:z.monthlyMarketRent,capacity:Math.ceil((z.marketUnits+z.affordableUnits)*1.04),pipelineMarket:0,pipelineAffordable:0,rentCap:null,inclusionary:0,incentive:0,shelterBeds:0,supportiveUnits:0,pipelineSupportive:0,communityInvestment:0,displaced:0}));
 let current=state, history=[];
 function snapshot(){return copy(current);}
 function indicators(){const c=cityIndicators(current);return {...c,budget:current.budget,period:current.period,displaced:sum(current.zones.map(z=>z.displaced)),zones:current.zones.map(z=>({id:z.id,rent:z.monthlyMarketRent,vacancy:(z.vacantMarket+z.vacantAffordable)/(z.marketUnits+z.affordableUnits||1),rentBurden:current.incomeGroups.map(g=>g.annualIncome?12*z.monthlyMarketRent/g.annualIncome:null),homeless:z.homeless,doubledUp:z.doubledUp,pipeline:z.pipelineMarket+z.pipelineAffordable,shelterBeds:z.shelterBeds,shelteredHouseholds:Math.min(z.shelterBeds,z.homeless),unshelteredHouseholds:Math.max(0,z.homeless-z.shelterBeds),supportiveUnits:z.supportiveUnits}))};}
 function applyPolicy(type,zoneId,amount){check(POLICIES.includes(type),'Unknown policy');const next=copy(current),z=next.zones.find(z=>z.id===zoneId);check(z,'Unknown zone');const defaults={density:.25,rentControl:.03,inclusionary:.2,peripheralHousing:100,shelters:100,supportiveHousing:100,developerIncentives:.1,communityInvestment:1000000,none:0};const a=amount??defaults[type];check(Number.isFinite(a)&&a>=0,'Invalid policy amount');let cost=0;
 switch(type){case 'density':check(a<=1,'Density increase must be <= 1');z.capacity+=Math.round(z.capacity*a);break;case 'rentControl':check(a<=.2,'Rent cap must be <= .2');z.rentCap=a;break;case 'inclusionary':check(a<=.5,'Inclusionary share must be <= .5');z.inclusionary=a;break;case 'peripheralHousing':case 'supportiveHousing':check(Number.isSafeInteger(a),'Units must be integers');// Public housing includes dedicated site approval when existing capacity is exhausted.
 z.capacity=Math.max(z.capacity,z.marketUnits+z.affordableUnits+z.pipelineMarket+z.pipelineAffordable+a);cost=a*p.affordableCost+(type==='supportiveHousing'?a*p.supportiveCost:0);z.pipelineAffordable+=a;if(type==='supportiveHousing')z.pipelineSupportive+=a;break;case 'shelters':check(Number.isSafeInteger(a),'Places must be integers');cost=a*p.shelterCost;z.shelterBeds+=a;break;case 'developerIncentives':check(a<=.5,'Incentive must be <= .5');cost=Math.round(a*p.constructionCost*z.marketUnits*p.annualConstructionRate);z.incentive=a;break;case 'communityInvestment':cost=a;z.communityInvestment+=a;break;}
 check(cost<=next.budget,'Insufficient policy budget');next.budget-=cost;validateHousingState(next);current=next;history.push({event:'policy',period:current.period,type,zoneId,amount:a,cost});return {cost,state:snapshot(),indicators:indicators()};}
 function advance(){const next=copy(current);next.period++;next.incomeGroups.forEach(g=>g.annualIncome*=1+p.incomeGrowth);
 for(const z of next.zones){const oldRent=z.monthlyMarketRent,oldHomeless=z.homeless,oldHouseholds=z.households,oldOccupied=z.marketUnits+z.affordableUnits-z.vacantMarket-z.vacantAffordable,oldAffordableOccupied=z.affordableUnits-z.vacantAffordable,newSupportive=z.pipelineSupportive;const arrivals=Math.round(z.households*p.growth);const allocation=distribute(arrivals,z.incomeCounts);z.incomeCounts=z.incomeCounts.map((n,i)=>n+allocation[i]);z.households+=arrivals;z.population+=Math.round(arrivals*2.5);z.marketUnits+=z.pipelineMarket;z.affordableUnits+=z.pipelineAffordable;z.supportiveUnits+=z.pipelineSupportive;z.pipelineSupportive=0;z.pipelineMarket=0;z.pipelineAffordable=0;z.marketUnits-=Math.min(z.marketUnits,Math.round(z.marketUnits*p.demolitionRate));
 const stock=z.marketUnits+z.affordableUnits;const pressure=z.households/(stock||1)-(1-p.targetVacancy);const rentChange=clamp(p.rentResponse*pressure,-p.maxRentChange,p.maxRentChange);const regulated=z.rentCap===null?rentChange:Math.min(rentChange,z.rentCap);z.monthlyMarketRent=Math.max(1,oldRent*(1+regulated));
 // Allocate affordable units to lowest income households, then market units to households able to pay at most 50% of income.
 let remaining=[...z.incomeCounts];let affordableOccupied=0,marketOccupied=0;for(let i=0;i<remaining.length;i++){if(next.incomeGroups[i].annualIncome*.5<12*p.affordableRent)continue;const n=Math.min(remaining[i],z.affordableUnits-affordableOccupied);remaining[i]-=n;affordableOccupied+=n;}for(let i=remaining.length-1;i>=0;i--){if(next.incomeGroups[i].annualIncome*.5<12*z.monthlyMarketRent)continue;const n=Math.min(remaining[i],z.marketUnits-marketOccupied);remaining[i]-=n;marketOccupied+=n;}
 // Existing tenancies persist: affordability screening applies gradually, not to the entire stock each year.
 const target=affordableOccupied+marketOccupied;
 const baselineOccupied=Math.min(oldOccupied,stock,z.households);
 const forcedLoss=Math.round(Math.max(0,baselineOccupied-target)*.025);
 const ordinaryPlacements=Math.min(Math.max(0,target-baselineOccupied),Math.round((z.households-baselineOccupied)*.35));
 const supportPlacements=Math.min(newSupportive,oldHomeless,Math.max(0,stock-baselineOccupied-ordinaryPlacements));
 const occupied=clamp(baselineOccupied-forcedLoss+ordinaryPlacements+supportPlacements,0,Math.min(stock,z.households));
 affordableOccupied=Math.min(z.affordableUnits,occupied,Math.max(affordableOccupied,oldAffordableOccupied+supportPlacements));
 marketOccupied=Math.min(z.marketUnits,occupied-affordableOccupied);
 affordableOccupied=occupied-marketOccupied;
 z.vacantMarket=z.marketUnits-marketOccupied;z.vacantAffordable=z.affordableUnits-affordableOccupied;
 const unhoused=z.households-occupied;
 z.displaced=Math.min(unhoused,forcedLoss);
 const risk=p.homelessRisk/(1+z.communityInvestment/10000000);
 const newInsecure=Math.max(0,arrivals+forcedLoss-ordinaryPlacements);
 const exits=Math.min(oldHomeless,Math.round(oldHomeless*.12)+supportPlacements);
 z.homeless=clamp(oldHomeless-exits+Math.round(newInsecure*risk),0,unhoused);
 z.doubledUp=unhoused-z.homeless;
 // Shelter places cover emergency need without counting as permanent housing.
 const recurring=z.shelterBeds*p.shelterCost+z.supportiveUnits*p.supportiveCost; if(recurring>next.budget){z.shelterBeds=0;z.supportiveUnits=0;}else next.budget-=recurring;
 const revenue=12*z.monthlyMarketRent;const yieldProxy=revenue/p.constructionCost;const profitability=clamp((yieldProxy-.04)*20+1+z.incentive*2-z.inclusionary*.5,0,2);const build=Math.min(Math.max(0,z.capacity-stock),Math.round(z.marketUnits*p.annualConstructionRate*profitability));z.pipelineAffordable=Math.round(build*z.inclusionary);z.pipelineMarket=build-z.pipelineAffordable;z.incentive=0;
 }
 validateHousingState(next);current=next;const report=indicators();history.push({event:'period',period:current.period,indicators:copy(report)});return report;}
 return Object.freeze({snapshot,indicators,applyPolicy,advance,history:()=>copy(history),parameters:()=>copy(p),reset:()=>{current=copy(state);history=[];return snapshot();}});
}
