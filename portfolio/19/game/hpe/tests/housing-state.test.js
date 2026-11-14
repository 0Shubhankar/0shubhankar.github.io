import test from 'node:test';
import assert from 'node:assert/strict';
import { createHousingState, validateHousingState, cityIndicators, zoneIndicators } from '../housing-state.js';

test('city baseline reconciles',()=>{
 const s=createHousingState(), c=cityIndicators(s);
 for (const [k,v] of Object.entries({population:250000,households:100000,housingUnits:100000,marketUnits:85000,affordableUnits:15000,occupiedUnits:97000,vacantUnits:3000,doubledUp:2500,homeless:500,householdsWithoutIndependentHousing:3000,vacancyRate:.03})) assert.equal(c[k],v,k);
 assert.equal(c.incomeCounts.reduce((a,g)=>a+g.households,0),100000);
});
test('neighbourhood indicators',()=>{const z=zoneIndicators(createHousingState().zones[0]);assert.equal(z.vacancyRate,.03);assert.equal(z.benchmarkRentBurden,.384);});
test('independent state instances',()=>{const a=createHousingState(),b=createHousingState();a.zones[0].incomeCounts[0]=0;assert.equal(b.zones[0].incomeCounts[0],2000);});
for (const [name,change] of Object.entries({negative:s=>s.zones[0].marketUnits=-1,overvacancy:s=>s.zones[0].vacantMarket=19000,status:s=>s.zones[0].homeless++,income:s=>s.zones[0].incomeCounts[0]++,duplicate:s=>s.zones[1].id=s.zones[0].id,invalidRent:s=>s.zones[0].monthlyMarketRent=NaN})) test(`reject ${name}`,()=>{const s=createHousingState();change(s);assert.throws(()=>validateHousingState(s));});
test('zero stock returns undefined vacancy as null',()=>{const z={marketUnits:0,affordableUnits:0,vacantMarket:0,vacantAffordable:0,doubledUp:0,homeless:0,monthlyMarketRent:0,incomeBenchmark:0};assert.equal(zoneIndicators(z).vacancyRate,null);});
