import {IDS,PROJECTS,originalTarget,status} from './municipal-engine.mjs';
const sum=a=>a.reduce((x,y)=>x+y,0);
export const POLICIES=['none','half','full','buffer5'];
export function allocation(s,cash){
 const rate=s.lifecycle?.rate??0, policy=s.maintenancePlan??'none';
 const rows=IDS.map(id=>{const installed=status(s,id).delivered, effective=s.effective?.[id]??installed,loss=effective*rate;
 const unitCost=sum(PROJECTS[id].costs)/originalTarget(id);
 const cost=Math.round(loss*unitCost*.5);
 return {id,installed,effective,loss,cost};});
 const required=sum(rows.map(r=>r.cost));
 const desired=policy==='none'?0:policy==='half'?Math.floor(required/2):required;
 const spent=Math.min(desired,Math.max(0,cash-(policy==='buffer5'?5e6:0)));
 let left=spent, remaining=required;
 for(const r of rows){r.paid=remaining?Math.min(r.cost,Math.floor(left*r.cost/remaining)):0;left-=r.paid;remaining-=r.cost;r.restored=r.cost?r.loss*r.paid/r.cost:0;}
 if(left!==0)throw Error('Maintenance allocation failed');
 return {policy,required,spent,rows};
}
export function closingEffective(s,record,maintenance){
 return Object.fromEntries(maintenance.rows.map(r=>{const o=record.outcomes.find(o=>o.id===r.id);const value=r.effective-r.loss+r.restored+o.delivered;if(value< -1e-7||value>o.total+1e-7)throw Error('Condition bounds');return [r.id,Math.max(0,Math.min(o.total,value))];}));
}
