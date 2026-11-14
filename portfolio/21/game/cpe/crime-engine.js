import {operatingCost,updateDistricts,spatial,stakeholders} from './public-safety.js';
import {nodes} from './story.js';
const clamp=(v,a=0,b=100)=>Math.min(b,Math.max(a,v));
const copy=x=>structuredClone(x);
// All costs in millions of fictional dollars; effects are illustrative index changes.
// p=capacity, c=community cooperation, o=oversight, v=monitoring exposure,
// r=rights protections, q=prevention commitment, m=communications, h=coercion burden.
export const policies={
 police:[3,{p:15}], surveillance:[3,{v:15}], zero:[2,{p:8,h:18}], community:[2,{c:18,o:3}], accountability:[1,{o:20,r:10}], hardline:[2,{p:7,h:22}], targeted:[2,{p:6,o:4}], social:[4,{q:20}], advanced:[3,{v:20}], reject:[2,{v:-15,q:15}], privacy:[1,{r:20,o:8}], expand:[3,{v:20,r:-8}], watch:[1,{c:12,o:5}], heavySocial:[5,{q:30}], forums:[.5,{c:10,o:5}], media:[1,{m:18}], continueForums:[.5,{c:8,o:4}], action:[.5,{o:2}], security:[2,{p:8,h:15,r:-8}], longTerm:[5,{q:30}], legislation:[1,{r:18,o:8}], dialogue:[.5,{c:12,o:3}], expandMedia:[1.5,{m:15,c:-5}], rights:[1,{r:20,o:10}], safetyOversight:[2,{p:6,o:15}], board:[1,{o:22,r:8}], prevent:[4,{q:25}]
};
export function initial(){return {year:0,population:50000,budget:30,spent:0,operatingSpent:0,unfundedOperating:0,districts:[{property:400,violent:80},{property:400,violent:80},{property:400,violent:80}],p:40,c:45,o:40,v:10,r:65,q:0,m:0,h:0,prevention:0,trust:55,liberties:75,property:1200,violent:240,reported:800,perceivedSafety:48,responseMinutes:12,history:[]};}
export function apply(s,id){const spec=policies[id];if(!spec)throw Error('Unknown policy');const [cost,delta]=spec;if(s.budget<cost)throw Error('Insufficient funds');const n=copy(s);n.budget-=cost;n.spent+=cost;for(const [k,d] of Object.entries(delta))n[k]=clamp(n[k]+d);return n;}
export function advance(s){const n=copy(s);n.year++; const due=operatingCost(n), paid=Math.min(n.budget,due);n.budget-=paid;n.spent+=paid;n.operatingSpent+=paid;n.unfundedOperating+=due-paid; const previous=n.prevention;n.prevention=clamp(previous+.25*(n.q-previous));
 // Lagged prevention uses the previous year's realized capacity.
 const pressure=Math.max(0,n.h+.55*n.v-.65*n.o-.4*n.r);
 n.liberties=clamp(70+.25*(n.r-65)+.2*(n.o-40)-.4*(n.v-10)-.45*n.h);
 n.trust=clamp(.72*n.trust+.28*(55+.45*(n.c-45)+.25*(n.o-40)-.55*pressure));
 const capacity=Math.max(0,n.p-40)*(due?paid/due:1);const cooperation=Math.max(0,n.trust-55);
 // Deliberately modest bounded illustrative effects, no location or demographic profiling.
 const effect=clamp(.0015*capacity+.0005*Math.max(0,n.v-10)+.0015*previous+.001*cooperation-.0015*pressure,-.12,.18);
 n.property=Math.round(Math.max(0,n.property*(1.025-effect)));
 n.violent=Math.round(Math.max(0,n.violent*(1.02-.65*effect)));
 const reportRate=clamp(.35+.004*n.trust+.0015*n.v,.2,.95);
 n.reported=Math.round((n.property+n.violent)*reportRate);
 n.responseMinutes= Math.max(4,12/(1+.012*capacity));
 n.perceivedSafety=clamp(48+18*(1-(n.property+n.violent)/1440)+.25*(n.trust-55)+.12*n.m-.18*pressure);
 n.districts=updateDistricts(n);n.history.push(metrics(n));return n;}
export function metrics(s){return {year:s.year,incidents:s.property+s.violent,property:s.property,violent:s.violent,reported:s.reported,trust:s.trust,liberties:s.liberties,prevention:s.prevention,perceivedSafety:s.perceivedSafety,responseMinutes:s.responseMinutes,budget:s.budget,spent:s.spent,operatingSpent:s.operatingSpent,unfundedOperating:s.unfundedOperating};}
export function baseline(year){let s=initial();for(let i=0;i<year;i++)s=advance(s);return s;}
export function assess(s){const b=baseline(s.year),a=metrics(s),z=metrics(b);const score=x=>clamp(50+x);const dimensions={safety:score(100*(z.incidents-a.incidents)/z.incidents),liberties:score(a.liberties-z.liberties),trust:score(a.trust-z.trust),prevention:score(a.prevention-z.prevention),fiscal:score(-50*a.spent/30-20*a.unfundedOperating)};const weights={safety:.30,liberties:.25,trust:.20,prevention:.15,fiscal:.10};return {stakeholders:stakeholders(s,b),districts:spatial(s),baselineDistricts:spatial(b),score:Object.keys(weights).reduce((sum,k)=>sum+weights[k]*dimensions[k],0),dimensions,player:a,benchmark:z};}
export function createGame(){return {node:'start',state:initial(),decisions:[],reviews:[],chapterStart:metrics(initial())};}
export function choose(game,index){const node=nodes[game.node];if(!node||!Number.isInteger(index)||!node.options[index])throw Error('Invalid choice');const e=node.options[index];const g=copy(game);g.state=apply(g.state,e.policy);g.decisions.push({node:g.node,label:e.label,policy:e.policy});g.node=e.next;if(e.next==='end'||nodes[e.next].chapter!==node.chapter){g.state=advance(advance(g.state));const result=assess(g.state);g.reviews.push({chapter:node.chapter,before:g.chapterStart,...result});g.chapterStart=metrics(g.state);}return g;}
