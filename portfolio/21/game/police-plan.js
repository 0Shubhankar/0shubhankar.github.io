// Representative visual cues only; no real deployment or crime-location model.
export function presence(game,scene){
 const selected=new Set(game.decisions.map(d=>d.policy));
 if(scene==='overview')return {cars:0,officers:0};
 const capacity=game.state?.p??40;
 const enforcement=['police','zero','hardline','targeted','security','safetyOversight'].filter(x=>selected.has(x)).length;
 const community=['community','watch','forums','continueForums','dialogue'].some(x=>selected.has(x));
 const surveillance=['surveillance','advanced','expand'].some(x=>selected.has(x));
 if(scene==='street')return {cars:Math.min(2,enforcement?1+Number((enforcement>1||capacity>=65)):Number(!surveillance)),officers:Math.min(3,enforcement?2+Number((enforcement>1||capacity>=65)):Number(!surveillance))};
 if(scene==='community'||scene==='forum')return {cars:0,officers:community?2:0};
 if(scene==='civic')return {cars:enforcement?1:0,officers:enforcement||community?1:0};
 return {cars:0,officers:0};
}
// Find clear sites beside roads, never inside buildings or existing parks.
export function sites(state,target,count){
 if(count<=0)return [];
 const roads=(state.roads||[]).filter(r=>r.position&&r.dimensions&&r.dimensions.width>0&&r.dimensions.depth>0);
 const blocked=[...(state.buildings||[]),...(state.parks||[]),...(Array.isArray(state.water)?state.water:state.water?[state.water]:[])];
 const hit=(o,x,z,pad)=>o.position&&o.dimensions&&Math.abs(x-o.position.x)<o.dimensions.width/2+pad&&Math.abs(z-o.position.z)<o.dimensions.depth/2+pad;
 const out=[];const candidates=[];
 for(const r of roads){const {x,z}=r.position,{width:w,depth:d}=r.dimensions;const vertical=d>w,half=(vertical?w:d)/2,length=(vertical?d:w)/2;
 for(const side of [-1,1])for(let t=-length+10;t<=length-10;t+=9){const a=vertical?x+side*(half+6):x+t,b=vertical?z+t:z+side*(half+6);if(Math.hypot(a-target[0],b-target[2])>105)continue;if(roads.some(o=>hit(o,a,b,4))||blocked.some(o=>hit(o,a,b,4.5)))continue;candidates.push({x:a,z:b,rotation:vertical?0:Math.PI/2,distance:Math.hypot(a-target[0],b-target[2])});}}
 candidates.sort((a,b)=>a.distance-b.distance);for(const c of candidates){if(out.every(o=>Math.hypot(o.x-c.x,o.z-c.z)>=10))out.push(c);if(out.length>=count)break;}return out;
}
