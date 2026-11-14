// Deterministic visualization and stakeholder outcome proxies; no surveyed satisfaction.
const clamp=x=>Math.max(0,Math.min(100,x));
const sum=(x,k)=>x.zones.reduce((n,z)=>n+z[k],0);
export function visualPlan(current,initial){return current.zones.map(z=>{const a=initial.zones.find(q=>q.id===z.id);if(!a)throw Error('Missing initial zone');return {id:z.id,marketChange:z.marketUnits-a.marketUnits,affordableChange:z.affordableUnits-a.affordableUnits,pipeline:z.pipeline,shelterBeds:z.shelterBeds,supportiveUnits:z.supportiveUnits,transport:z.transport};});}
const relative=(p,b,lower=false)=>clamp(50+50*(lower?b-p:p-b)/Math.max(Math.abs(b)*.2,1e-6));
export function stakeholderOutcomes(current,baseline){
 const p=current,b=baseline;const rate=(n,x)=>n/Math.max(1,x.households);const affordable=x=>x.affordableUnits/Math.max(1,x.housingUnits);const insecurity=x=>rate(x.householdsWithoutIndependentHousing,x);const rent=x=>x.zones.find(z=>z.id==='inner').rent;const pipe=x=>sum(x,'pipeline');const homeless=x=>rate(x.homeless,x);const unsheltered=x=>rate(sum(x,'unshelteredHouseholds'),x);
 const rows=[
 {name:'Low-income residents',score:(relative(affordable(p),affordable(b))+relative(insecurity(p),insecurity(b),true))/2,metric:'Affordable stock share and housing insecurity',player:100*affordable(p),base:100*affordable(b),unit:'% affordable stock'},
 {name:'Middle-income residents',score:(relative(rent(p),rent(b),true)+relative(insecurity(p),insecurity(b),true))/2,metric:'Inner-city rent and housing insecurity',player:rent(p),base:rent(b),unit:'$/month rent'},
 {name:'Developers',score:relative(pipe(p),pipe(b)),metric:'Construction pipeline proxy (not profit)',player:pipe(p),base:pipe(b),unit:'pipeline homes'},
 {name:'Landlords',score:relative(rent(p),rent(b)),metric:'Market rent proxy (not net rental income)',player:rent(p),base:rent(b),unit:'$/month rent'},
 {name:'Housing advocates',score:(relative(homeless(p),homeless(b),true)+relative(unsheltered(p),unsheltered(b),true))/2,metric:'Homeless and unsheltered rates',player:p.homeless,base:b.homeless,unit:'homeless households'},
 {name:'Homeowners',score:null,metric:'Property values and neighbourhood preferences are not modelled',player:null,base:null,unit:''}
 ];return rows;
}
