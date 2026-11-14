import {createEngine} from './housing-engine.js';
const clamp=x=>Math.max(0,Math.min(100,x));
const ratio=(a,b)=>a/Math.max(b,1);
const unsheltered=x=>x.zones.reduce((n,z)=>n+z.unshelteredHouseholds,0);
const share=x=>ratio(x.affordableUnits,x.housingUnits);
const insecure=x=>ratio(x.householdsWithoutIndependentHousing,x.households);
const rate=(n,x)=>ratio(n,x.households);
const relative=(player,base,lower=true)=>clamp(50+50*(lower?base-player:player-base)/Math.max(Math.abs(base)*.2,0.0001));
const points=(player,base,target)=>clamp(50+50*(player-base)/target);
export function baselineAt(period){if(!Number.isSafeInteger(period)||period<0||period>100)throw Error('Invalid comparison period');const e=createEngine();for(let i=0;i<period;i++)e.advance();return {current:e.indicators(),displaced:e.history().filter(r=>r.event==='period').reduce((n,r)=>n+r.indicators.displaced,0)};}
export function assess(player,initial,history=[]){const {current:base,displaced:baseDisplaced}=baselineAt(player.period);const displaced=history.filter(r=>r.event==='period').reduce((n,r)=>n+r.indicators.displaced,0);const rows=[
 {name:'Housing affordability',weight:30,score:(relative(player.zones[1].rent,base.zones[1].rent)+points(share(player),share(base),.03))/2},
 {name:'Housing availability',weight:20,score:relative(insecure(player),insecure(base))},
 {name:'Social equity (proxy)',weight:20,score:relative(rate(displaced,player),rate(baseDisplaced,base))},
 {name:'Homelessness response',weight:20,score:(relative(rate(player.homeless,player),rate(base.homeless,base))+relative(rate(unsheltered(player),player),rate(unsheltered(base),base)))/2},
 {name:'Fiscal responsibility',weight:10,score:clamp(100*ratio(player.budget,initial.budget))}
 ];const score=rows.reduce((n,r)=>n+r.score*r.weight/100,0);const grade=score>=90?'Exceptional':score>=75?'Highly effective':score>=60?'Effective but uneven':score>=45?'Limited effectiveness':'Major challenges remain';const ranked=[...rows].sort((a,b)=>b.score-a.score);const profile=ranked[0].score-ranked.at(-1).score<10?'Balanced outcome profile':({'Housing affordability':'Affordability-focused outcomes','Housing availability':'Housing-access-focused outcomes','Social equity (proxy)':'Housing-retention-focused outcomes','Homelessness response':'Homelessness-response-focused outcomes','Fiscal responsibility':'Budget-preserving outcomes'})[ranked[0].name];return {score,grade,profile,rows,base,displaced,baseDisplaced,comparisons:[['Inner-city rent ($/mo)',base.zones[1].rent,player.zones[1].rent],['Affordable homes',base.affordableUnits,player.affordableUnits],['Without independent housing',base.householdsWithoutIndependentHousing,player.householdsWithoutIndependentHousing],['Cumulative displacement events',baseDisplaced,displaced],['Homeless households',base.homeless,player.homeless],['Unsheltered households',unsheltered(base),unsheltered(player)],['Funds remaining ($M)',base.budget/1e6,player.budget/1e6]],strength:ranked[0].name,weakness:ranked.at(-1).name};}
