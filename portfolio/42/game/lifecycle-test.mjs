import assert from 'node:assert/strict';
import * as P from './municipal-lifecycle/player.mjs';
import * as G from './municipal-lifecycle/game.mjs';
import * as E from './municipal-lifecycle/events.mjs';
import {IDS} from './municipal-lifecycle/municipal-engine.mjs';
let paths=0, years=0, expansions=0, maintenance=0;
for(const scenario of Object.keys(E.SCENARIOS))for(const strategy of ['none','half','full','buffer5','switch']){
 let g=P.start(scenario);for(let y=1;y<=10;y++){
 const policy=strategy==='switch'?(y%2?'full':'buffer5'):strategy;
 g=P.setMaintenance(g,policy);g=P.finance(g,Math.min(10e6,E.bondCapacity(g.city)));
 for(const id of IDS){const opts=E.options(g.city,id);const o=opts.find(o=>o.affordable&&['full','expand'].includes(o.id))??opts.find(o=>o.affordable&&['phase','expand-phase'].includes(o.id))??opts.find(o=>o.affordable);assert.ok(o);g=P.choose(g,id,o.id);if(o.id.startsWith('expand'))expansions++;}
 const before=g.city;g=P.closeYear(g);const r=g.city.history.at(-1);assert.equal(g.city.cash+g.city.capitalReserve,r.openingCash+r.openingCapitalReserve+r.operating.revenue-r.operating.paid-r.debtPaid+r.borrowing-r.expenditure-r.maintenance.spent);assert.equal(r.closingDebt,before.bonds.reduce((a,b)=>a+b.balance,0)-r.debtService.reduce((a,b)=>a+b.principalPaid,0)+r.borrowing);assert.ok(r.maintenance.spent>=0);if(r.maintenance.spent)maintenance++;assert.ok(P.report(g).sites.every(o=>o.effective<=o.total+1e-6));assert.throws(()=>P.setMaintenance(g,'full'));g=P.nextYear(g);years++;
 }assert.deepEqual(P.load(P.save(g)),g);paths++;
}
let g=P.start();assert.throws(()=>P.setMaintenance(g,'invalid'));g=P.finance(g,0);for(const id of IDS)g=P.choose(g,id,E.options(g.city,id).find(o=>o.affordable).id);g=P.closeYear(g);g=P.nextYear(g);assert.deepEqual(P.load(P.save(g)),g);
// Constant policy is identical to original research engine, except the added player log.
let a=P.start('mixed'),b=G.start('mixed',undefined,a.city.growth,a.city.lifecycle);for(let y=1;y<=10;y++){a=P.setMaintenance(a,'none');a=P.finance(a,0);b=G.finance(b,0);for(const id of IDS){const o=E.options(a.city,id).find(o=>o.affordable);a=P.choose(a,id,o.id);b=G.choose(b,id,o.id);}a=P.closeYear(a);b=G.closeYear(b);assert.deepEqual(a.city,b.city);a=P.nextYear(a);b=G.nextYear(b);}
console.log(JSON.stringify({paths,years,expansions,maintenanceYears:maintenance,parityYears:10,status:'PASS'},null,2));
