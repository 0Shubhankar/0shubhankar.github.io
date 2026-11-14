import {THREE} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';
import {visualPlan} from './hpe/city-feedback.js';
const colours={market:0x759aa6,affordable:0x42c9ae,pipeline:0xe4b56a,shelter:0xd9a2e8,supportive:0x72a7fa,transport:0xffdc79};
export function createHousingVisuals(engine,anchors){
 const group=new THREE.Group();group.name='Gotham housing scenario overlays';engine.view.scene.add(group);
 function clear(){for(const child of [...group.children]){group.remove(child);child.geometry.dispose();child.material.dispose();}}
 function box(x,y,z,w,h,d,kind,wire=false){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color:colours[kind],emissive:colours[kind],emissiveIntensity:wire?.35:.12,wireframe:wire,transparent:wire,opacity:wire?.85:1}));mesh.position.set(x,y,z);group.add(mesh);}
 function sync(current,initial){clear();for(const r of visualPlan(current,initial)){const homes=anchors[r.id]||[];if(!homes.length)continue;
  // Roof massing is illustrative and bounded; each block represents a change in aggregate stock.
  const kinds=[['market',Math.max(0,r.marketChange),400],['affordable',Math.max(0,r.affordableChange-r.supportiveUnits),100],['supportive',r.supportiveUnits,50],['pipeline',r.pipeline,500],['shelter',r.shelterBeds,50],['transport',r.transport,4]];
  let cursor=0;for(const [kind,value,scale] of kinds){if(value<=0)continue;const count=Math.min(3,Math.ceil(value/scale));for(let i=0;i<count;i++){if(cursor>=homes.length)break;const b=homes[cursor++],p=b.position,d=b.dimensions||{};const w=Math.max(2,Math.min(8,(d.width||8)*.65)),depth=Math.max(2,Math.min(8,(d.depth||8)*.65)),roof=(p.y||0)+Math.max(4,d.height||10);const h=kind==='market'?8:kind==='pipeline'?9:kind==='transport'?2:5;box(p.x,roof+h/2+1,p.z,w,h,depth,kind,kind==='pipeline');}}
 }engine.invalidate();}
 return {sync,dispose(){clear();engine.view.scene.remove(group);}};
}
