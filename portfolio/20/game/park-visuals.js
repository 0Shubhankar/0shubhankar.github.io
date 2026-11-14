import {THREE} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';
// Local display only. Each plot is a normalized district sample, not a hectare map.
export function parkProfile(zone){
 const quality=Math.max(0,Math.min(1,zone.condition));
 return {extent:Math.max(.24,Math.min(.96,.24+.72*zone.park/65)),trees:Math.max(2,Math.min(32,Math.round(zone.canopy*.85))),quality,benches:Math.max(0,Math.min(6,Math.floor((quality-.45)*10))),amenities:quality>=.82};
}
export function createParkVisuals(engine,anchors){
 const scene=engine.view.scene,group=new THREE.Group();group.name='Greenville district park exhibits';scene.add(group);
 const masked=[],matrix=new THREE.Matrix4(),pos=new THREE.Vector3(),q=new THREE.Quaternion(),scale=new THREE.Vector3();
 // Only anonymous park vegetation/furniture instances, not identified city objects.
 scene.traverse(m=>{if(!m.isInstancedMesh||!Array.isArray(m.userData.ids))return;let changed=false;for(let i=0;i<m.count;i++){m.getMatrixAt(i,matrix);matrix.decompose(pos,q,scale);if(m.userData.ids[i]||scale.x>40||scale.z>40||!anchors.some(p=>Math.abs(pos.x-p.position.x)<p.dimensions.width/2-1&&Math.abs(pos.z-p.position.z)<p.dimensions.depth/2-1))continue;masked.push([m,i,matrix.clone()]);matrix.compose(pos,q,new THREE.Vector3(0,0,0));m.setMatrixAt(i,matrix);changed=true;}if(changed){m.instanceMatrix.needsUpdate=true;m.computeBoundingSphere();}});
 function clear(){group.traverse(m=>{if(m.isMesh){m.geometry.dispose();m.material.dispose();}});group.clear();}
 function mesh(g,c,x,y,z){const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:c,roughness:.92}));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;}
 function box(c,x,y,z,w,h,d){return mesh(new THREE.BoxGeometry(w,h,d),c,x,y,z);}
 function sync(current){clear();current.zones.forEach((zone,i)=>{
  const p=anchors[i],{x,z}=p.position,{width,depth}=p.dimensions,y=(p.position.y||0)+4.2,w=width*.94,d=depth*.94;
  const v=parkProfile(zone),pw=w*(i===0?v.extent:.96),pd=d*.92,px=x;
  // Entire plot is visibly distinct, including the unserved land outside its active park.
  box(0xbaa98a,x,y,z,w,.42,d);
  const lawn=new THREE.Color(0xa79a62).lerp(new THREE.Color(0x438a40),v.quality);
  box(lawn,px,y+.28,z,pw,.2,pd);
  const pathColor=v.quality>.8?0xe0d9bf:0xb3a387;
  box(pathColor,px,y+.42,z,pw*.92,.1,Math.max(.65,pd*.07));
  if(v.quality>.7)box(pathColor,px,y+.42,z,Math.max(.65,pw*.08),.1,pd*.92);
  const rows=4,cols=Math.ceil(v.trees/rows),spacing=Math.min(pw/(cols+1),pd/(rows+1)),r=Math.max(.45,Math.min(2.7,spacing*.32));
  for(let j=0;j<v.trees;j++){
   const tx=px-pw/2+(j%cols+1)*pw/(cols+1),tz=z-pd/2+(Math.floor(j/cols)+1)*pd/(rows+1);if(Math.abs(tz-z)<pd*.07)continue;
   const h=r*2.6;mesh(new THREE.CylinderGeometry(r*.12,r*.17,h,8),0x76553b,tx,y+.4+h/2,tz);mesh(new THREE.SphereGeometry(r,10,8),v.quality>.8?0x286c36:v.quality>.7?0x538348:0x819151,tx,y+.4+h,tz);
  }
  for(let j=0;j<v.benches;j++){const bx=px-pw*.35+j*pw*.7/Math.max(1,v.benches-1),bz=z+pd*.12;const bw=Math.min(3,pw/(v.benches+1));box(0x674b31,bx,y+1,bz,bw,.23,.8);box(0x674b31,bx,y+1.45,bz+.3,bw,.8,.16);}
  if(v.amenities){const a=Math.min(pw,pd)*.14;box(0xd4a86c,px+pw*.22,y+.46,z+pd*.29,a*2,.12,a*1.5);mesh(new THREE.CylinderGeometry(a*.42,a*.48,.45,24),0x9eaaa5,px-pw*.23,y+.65,z-pd*.27);mesh(new THREE.CylinderGeometry(a*.33,a*.33,.08,24),0x69bccc,px-pw*.23,y+.91,z-pd*.27);}
  else if(v.quality<.72){for(let j=0;j<5;j++)box(0xb69c75,px+(j-2)*pw*.13,y+.42,z+pd*.34,pw*.08,.09,pd*.09);}
 });engine.view.renderer.shadowMap.needsUpdate=true;engine.invalidate();}
 return {sync,dispose(){clear();scene.remove(group);for(const [m,i,mat] of masked){m.setMatrixAt(i,mat);m.instanceMatrix.needsUpdate=true;m.computeBoundingSphere();}}};
}
