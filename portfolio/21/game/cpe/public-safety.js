// Fictional district model: equal population, equal initial exposure, no demographic targeting.
export const districts=['Residential district','Town centre','Community district'];
const sum=a=>a.reduce((x,y)=>x+y,0), clamp=(x,a=0,b=100)=>Math.max(a,Math.min(b,x));
export function allocation(s){const extra=Math.max(0,s.p-40), community=Math.max(0,s.c-45);const w=[1,1,1+community/100];return w.map(x=>extra*x/sum(w));}
export function operatingCost(s){return .012*Math.max(0,s.p-40)+.006*Math.max(0,s.v-10)+.004*s.q+.003*Math.max(0,s.o-40);}
export function spatial(s){const a=allocation(s);return districts.map((name,i)=>({name,capacity:a[i],property:s.districts[i].property,violent:s.districts[i].violent,incidents:s.districts[i].property+s.districts[i].violent,response:12/(1+.036*a[i])}));}
// Allocate citywide totals exactly, with modest spatial variation based on capacity.
export function distribute(total,weights){const raw=weights.map(w=>total*w/sum(weights)), counts=raw.map(Math.floor);let left=total-sum(counts);for(const i of raw.map((v,i)=>i).sort((a,b)=>(raw[b]-counts[b])-(raw[a]-counts[a])).slice(0,left))counts[i]++;return counts;}
export function updateDistricts(s){const a=allocation(s), w=a.map(x=>1/(1+.006*x));const p=distribute(s.property,w),v=distribute(s.violent,w);return p.map((property,i)=>({property,violent:v[i]}));}
export function stakeholders(s,b){const score=x=>clamp(50+x);return {Residents:score(100*(b.property+b.violent-s.property-s.violent)/(b.property+b.violent)), 'Civil liberties advocates':score(s.liberties-b.liberties),'Community organisations':score(s.trust-b.trust),'Emergency service users':score(5*(b.responseMinutes-s.responseMinutes)),'Prevention advocates':score(s.prevention-b.prevention),'Taxpayers':score(-50*(s.spent-b.spent)/30)};}
