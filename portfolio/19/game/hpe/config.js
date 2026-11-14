/** HPE 0.1.1 — illustrative baseline, not calibrated to real-world data. */
export const CONFIG = Object.freeze({
  version: '0.1.1',
  currency: 'USD',
  period: 0,
  incomeGroups: Object.freeze([
    { id: 'veryLow', annualIncome: 15000 },
    { id: 'low', annualIncome: 30000 },
    { id: 'moderate', annualIncome: 50000 },
    { id: 'upperMiddle', annualIncome: 80000 },
    { id: 'high', annualIncome: 150000 },
  ].map(Object.freeze)),
  // Income benchmark is a reference, not a calculated median.
  zones: Object.freeze([
    { id:'centre', name:'City centre', population:50000, households:20000, marketUnits:18000, affordableUnits:2000, vacantMarket:540, vacantAffordable:60, monthlyMarketRent:2400, incomeBenchmark:75000, doubledUp:500, homeless:100, incomeCounts:[2000,3000,5000,6000,4000] },
    { id:'inner', name:'Inner city', population:75000, households:30000, marketUnits:24000, affordableUnits:6000, vacantMarket:720, vacantAffordable:180, monthlyMarketRent:1800, incomeBenchmark:52000, doubledUp:750, homeless:150, incomeCounts:[6000,7500,7500,6000,3000] },
    { id:'suburban', name:'Suburban area', population:87500, households:35000, marketUnits:30500, affordableUnits:4500, vacantMarket:915, vacantAffordable:135, monthlyMarketRent:1400, incomeBenchmark:60000, doubledUp:875, homeless:175, incomeCounts:[3500,7000,10500,10500,3500] },
    { id:'periphery', name:'Urban periphery', population:37500, households:15000, marketUnits:12500, affordableUnits:2500, vacantMarket:375, vacantAffordable:75, monthlyMarketRent:950, incomeBenchmark:35000, doubledUp:375, homeless:75, incomeCounts:[4500,4500,3750,1500,750] },
  ].map(z => Object.freeze({...z, incomeCounts:Object.freeze(z.incomeCounts)}))),
});
