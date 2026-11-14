// Project-owned exhibit locations. Never subdivide an existing park.
const valid=p=>p?.position&&p?.dimensions&&[p.position.x,p.position.z,p.dimensions.width,p.dimensions.depth].every(Number.isFinite)&&p.dimensions.width>4&&p.dimensions.depth>4;
const gap=(a,b)=>Math.hypot(Math.max(0,Math.abs(a.position.x-b.position.x)-(a.dimensions.width+b.dimensions.width)/2),Math.max(0,Math.abs(a.position.z-b.position.z)-(a.dimensions.depth+b.dimensions.depth)/2));
const dist=(a,b)=>Math.hypot(a.position.x-b.position.x,a.position.z-b.position.z);
export function districtParks(state){
 const parks=(state.parks||[]).filter(valid), buildings=(state.buildings||[]).filter(valid), roads=(state.roads||[]).filter(valid);
 if(!parks.length||!buildings.length)throw Error('Greenville needs a city with parks and buildings.');
 const occupied=[...parks,...buildings,...roads,...['water','waters','waterBodies','ponds','bridges','trees','vegetation','parcels'].flatMap(k=>Array.isArray(state[k])?state[k].filter(valid):[])];
 const xs=buildings.map(b=>b.position.x),zs=buildings.map(b=>b.position.z),lots=[];
 // Search within developed neighbourhoods, away from the central Riverbend water corridor.
 for(let x=Math.ceil((Math.min(...xs)+15)/10)*10;x<=Math.max(...xs)-15;x+=10){
  if(Math.abs(x)<180)continue;
  for(let z=Math.ceil((Math.min(...zs)+15)/10)*10;z<=Math.max(...zs)-15;z+=10){
   const p={id:`greenville-lot-${x}-${z}`,position:{x,y:0,z},dimensions:{width:28,depth:28},demonstration:true};
   if(occupied.some(q=>gap(p,q)<5))continue;
   if(Math.min(...buildings.map(q=>dist(p,q)))>100)continue;
   lots.push(p);
  }
 }
 const largest=[...parks].sort((a,b)=>b.dimensions.width*b.dimensions.depth-a.dimensions.width*a.dimensions.depth)[0];
 const choose=(pool,used,minGap)=>pool.filter(p=>used.every(q=>gap(p,q)>=minGap)).sort((a,b)=>Math.min(...used.map(q=>dist(b,q)))-Math.min(...used.map(q=>dist(a,q))))[0];
 const middle=choose(parks.filter(p=>p!==largest),[largest],70)||choose(lots,[largest],70);
 if(!middle)throw Error('No independent middle-income park site found.');
 const low=choose(lots,[largest,middle],100)||choose(parks.filter(p=>p!==largest&&p!==middle),[largest,middle],100);
 if(!low)throw Error('No separate underserved site found; no park was split.');
 return [low,middle,largest];
}
