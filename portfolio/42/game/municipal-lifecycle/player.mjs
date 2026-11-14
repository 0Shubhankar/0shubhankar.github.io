import * as G from './game.mjs';
import * as E from './events.mjs';
import * as C from './municipal-engine.mjs';
import {POLICIES} from './maintenance.mjs';
export {finance,choose,closeYear,nextYear,save} from './game.mjs';
export function start(scenario='mixed',base,growth=Object.fromEntries(C.IDS.map(id=>[id,.02])),lifecycle={rate:.03,policy:'none'}){return G.start(scenario,base,growth,lifecycle);}
export function setMaintenance(g,policy){
 if(g.mode!=='planning'||!POLICIES.includes(policy))throw Error('Invalid maintenance policy');
 const city={...g.city,maintenancePlan:policy};
 if(!E.financing(city).allowed)throw Error('Revise capital commitments or bond authorization before increasing maintenance.');
 return {...g,city,log:[...g.log,{type:'maintenance',year:city.year,policy}]};
}
export function load(record){
 if(record?.schema!==1||!record.growth||!record.lifecycle||!Array.isArray(record.log)||record.log.length>10000)throw Error('Invalid lifecycle preview record');
 let g=start(record.scenario,record.base,record.growth,record.lifecycle);
 for(const a of record.log){
 switch(a.type){case 'maintenance':g=setMaintenance(g,a.policy);break;case 'finance':g=G.finance(g,a.amount,a.source);break;case 'choose':g=G.choose(g,a.id,a.action,a.approveBond);break;case 'close':g=G.closeYear(g);break;case 'next':g=G.nextYear(g);break;default:throw Error('Unknown action');}
 if(JSON.stringify(g.log.at(-1))!==JSON.stringify(a))throw Error('Action record mismatch');
 }return g;
}
const fmt=n=>n.toLocaleString('en-US',{maximumFractionDigits:2});
export function report(g){const r=G.report(g),h=g.city.history.at(-1);const sites=r.sites.map(o=>{const target=o.total+o.remaining,effective=g.city.effective[o.id];return {...o,effective,target,text:`${fmt(o.total)} ${o.unit} installed; ${fmt(effective)} effective of ${fmt(target)} required (${fmt(100*Math.min(1,effective/target))}%).`};});const coverage=sites.reduce((a,o)=>a+100*Math.min(1,o.effective/o.target),0)/sites.length;return {...r,sites,finance:{...r.finance,maintenance:h.maintenance.spent,text:`${r.finance.text} Maintenance: $${fmt(h.maintenance.spent/1e6)}M. Effective coverage: ${fmt(coverage)}%.`}};}
export function view(g){if(g.mode!=='planning')return {mode:g.mode,report:report(g)};const v=G.view(g);return {...v,sites:v.sites.map(o=>({...o,effective:g.city.effective?.[o.id]??o.delivered}))};}
