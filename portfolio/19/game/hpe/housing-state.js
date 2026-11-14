import { CONFIG } from './config.js';

const sum = (items, f) => items.reduce((a, x) => a + f(x), 0);
const integer = (x) => Number.isSafeInteger(x) && x >= 0;
const nonnegative = (x) => Number.isFinite(x) && x >= 0;
const require = (condition, message) => { if (!condition) throw new Error(message); };

export function createHousingState(config = CONFIG) {
  const state = {
    version: config.version,
    currency: config.currency,
    period: config.period,
    incomeGroups: config.incomeGroups.map(g => ({...g})),
    zones: config.zones.map(z => ({...z, incomeCounts:[...z.incomeCounts]})),
  };
  validateHousingState(state);
  return state;
}

export function zoneIndicators(z) {
  const housingUnits = z.marketUnits + z.affordableUnits;
  const vacantUnits = z.vacantMarket + z.vacantAffordable;
  const occupiedUnits = housingUnits - vacantUnits;
  return { housingUnits, vacantUnits, occupiedUnits,
    householdsWithoutIndependentHousing: z.doubledUp + z.homeless,
    vacancyRate: housingUnits ? vacantUnits / housingUnits : null,
    benchmarkRentBurden: z.incomeBenchmark > 0 ? 12*z.monthlyMarketRent/z.incomeBenchmark : null,
  };
}

export function validateHousingState(state) {
  require(integer(state.period), 'Invalid period');
  require(Array.isArray(state.zones) && state.zones.length > 0, 'No zones');
  require(Array.isArray(state.incomeGroups) && state.incomeGroups.length > 0, 'No income groups');
  require(new Set(state.incomeGroups.map(g=>g.id)).size === state.incomeGroups.length, 'Duplicate income group');
  require(new Set(state.zones.map(z=>z.id)).size === state.zones.length, 'Duplicate zone');
  for (const g of state.incomeGroups) require(typeof g.id === 'string' && g.id.length > 0 && nonnegative(g.annualIncome), 'Invalid income group');
  for (const z of state.zones) {
    require(typeof z.id === 'string' && z.id.length > 0, 'Invalid zone ID');
    for (const k of ['population','households','marketUnits','affordableUnits','vacantMarket','vacantAffordable','doubledUp','homeless']) require(integer(z[k]), `${z.id}: invalid ${k}`);
    for (const k of ['monthlyMarketRent','incomeBenchmark']) require(nonnegative(z[k]), `${z.id}: invalid ${k}`);
    require(z.vacantMarket <= z.marketUnits && z.vacantAffordable <= z.affordableUnits, `${z.id}: vacancy exceeds stock`);
    require(Array.isArray(z.incomeCounts) && z.incomeCounts.length === state.incomeGroups.length && z.incomeCounts.every(integer), `${z.id}: invalid income counts`);
    require(sum(z.incomeCounts, x=>x) === z.households, `${z.id}: income counts do not reconcile`);
    require(z.population >= z.households, `${z.id}: population below household count`);
    require(zoneIndicators(z).occupiedUnits + z.doubledUp + z.homeless === z.households, `${z.id}: household statuses do not reconcile`);
  }
  return true;
}

export function cityIndicators(state) {
  validateHousingState(state);
  const zones = state.zones;
  const result = Object.fromEntries(['population','households','marketUnits','affordableUnits','doubledUp','homeless'].map(k=>[k,sum(zones,z=>z[k])]));
  for (const k of ['housingUnits','vacantUnits','occupiedUnits','householdsWithoutIndependentHousing']) result[k] = sum(zones,z=>zoneIndicators(z)[k]);
  result.vacancyRate = result.housingUnits ? result.vacantUnits/result.housingUnits : null;
  result.incomeCounts = state.incomeGroups.map((g,i)=>({id:g.id, households:sum(zones,z=>z.incomeCounts[i])}));
  return result;
}
