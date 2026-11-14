import {THREE} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';
// Project-owned visual props. No modification to shared renderer code.
export function installDeficiencies(engine,L){
 const scene=engine.view.scene, root=new THREE.Group();root.name='P42 infrastructure deficiencies';scene.add(root);
 const mat=new Map();
 function material(color){if(!mat.has(color))mat.set(color,new THREE.MeshStandardMaterial({color,roughness:.95}));return mat.get(color);}
 function mesh(g,color,x,y,z,parent=root){const m=new THREE.Mesh(g,material(color));m.position.set(x,y,z);m.receiveShadow=true;m.castShadow=true;parent.add(m);return m;}
 function box(c,x,y,z,w,h,d,p=root){return mesh(new THREE.BoxGeometry(w,h,d),c,x,y,z,p);}
 function cyl(c,x,y,z,r,h,p=root){return mesh(new THREE.CylinderGeometry(r,r,h,20),c,x,y,z,p);}
 function segment(c,a,b,w,y,p=root){const dx=b[0]-a[0],dz=b[1]-a[1];const m=box(c,(a[0]+b[0])/2,y,(a[1]+b[1])/2,w,.035,Math.hypot(dx,dz),p);m.rotation.y=Math.atan2(dx,dz);return m;}
 function flat(c,x,z,rx,rz,y,p=root){const s=new THREE.Shape();for(let i=0;i<13;i++){let a=i*Math.PI*2/13,r=.83+.13*Math.sin(i*7.19);let px=Math.cos(a)*rx*r,pz=Math.sin(a)*rz*r;i?s.lineTo(px,pz):s.moveTo(px,pz);}s.closePath();const m=mesh(new THREE.ShapeGeometry(s),c,x,y,z,p);m.rotation.x=-Math.PI/2;m.castShadow=false;return m;}
 const groups={};for(const id of ['roads','water','park','solar','wastewater']){const g=new THREE.Group();g.name=id;root.add(g);groups[id]=g;}
 // Road: thin surface patches, dark irregular depressions and branching cracks.
 const rx=L.road.position.x,g=groups.roads;
 for(let i=0;i<11;i++){let z=-143+i*10,x=rx+Math.sin(i*4.9)*4.3;flat('#4f514c',x,z,1.8,2.5,4.49,g);flat('#282c2c',x,z,1.15,1.7,4.51,g);let points=[[x-1,z],[x-2.5,z+2],[x-1.5,z+5],[x-3,z+8]].map(([a,b])=>[Math.max(rx-6.5,Math.min(rx+6.5,a)),b]);for(let j=1;j<points.length;j++)segment('#313733',points[j-1],points[j],.19,4.54,g);segment('#313733',[x,z],[Math.min(rx+6.5,x+2.2),z-4],.16,4.54,g);}
 for(let z=-135;z<-40;z+=25)box('#85877d',rx,4.47,z,1.15,.05,8,g);
 // Dry tap and empty buckets near the existing house frontage.
 const {x:tx,z:tz}=L.tap,w=groups.water;
 box('#c2b6a0',tx,3.12,tz,12,.24,7,w);cyl('#9da6a5',tx,4.9,tz,.33,3.6,w);box('#bfc6c3',tx+.65,6.6,tz,1.8,.42,.42,w);cyl('#bfc6c3',tx+1.4,6.25,tz,.25,.7,w);box('#a44e3c',tx,7.05,tz,1.35,.25,.35,w);
 for(const [dx,dz,c] of [[2.2,1.2,'#bc8647'],[-2.5,1.7,'#547f9b'],[3.3,-1.5,'#ad7055']]){const m=mesh(new THREE.CylinderGeometry(.8,.59,1.15,16,1,true),c,tx+dx,3.75,tz+dz,w);cyl('#534a3d',tx+dx,3.23,tz+dz,.59,.14,w);m.material.side=THREE.DoubleSide;}
 // Remove the visual instances belonging to the selected park plot and its trees.
 // This is a reversible presentation mask, not a valid exported city mutation.
 const {x:px,z:pz}=L.park.position,{width:pw,depth:pd}=L.park.dimensions;
 const matrix=new THREE.Matrix4(),pos=new THREE.Vector3(),q=new THREE.Quaternion(),scale=new THREE.Vector3();
 function maskInside(predicate){let count=0;for(const m of scene.children){if(!m.isInstancedMesh||!Array.isArray(m.userData.ids))continue;for(let i=0;i<m.count;i++){m.getMatrixAt(i,matrix);matrix.decompose(pos,q,scale);if(predicate(pos,scale,m.userData.ids[i])){matrix.compose(pos,q,new THREE.Vector3(0,0,0));m.setMatrixAt(i,matrix);count++;}}m.instanceMatrix.needsUpdate=true;m.computeBoundingSphere();}return count;}
 const removed=maskInside((p,s,id)=>Math.abs(p.x-px)<pw/2+3&&Math.abs(p.z-pz)<pd/2+3&&s.x<160&&s.z<160&&!id);
 const pg=groups.park;box('#a79070',px,3.6,pz,pw+5,1.05,pd+5,pg);for(let i=0;i<20;i++)flat(i%2?'#927c60':'#b4a184',px+Math.sin(i*13)*60,pz+Math.cos(i*7)*60,4+i%7,4+i%3,4.15,pg);
 // Civic rooftop is deliberately empty. Add a small transformer beside the entrance.
 const c=L.civic,sg=groups.solar;const cx=c.position.x,cz=c.position.z;box('#777d75',cx+c.dimensions.width/2+5,5.0,cz,3.8,4,5,sg);for(let i=0;i<3;i++)box('#414a46',cx+c.dimensions.width/2+5,6.1-i*.55,cz+2.55,2.8,.14,.15,sg);
 // Small treatment compound on the actual riverside strip. Existing roads remain intact.
 const f=groups.wastewater,{x:fx,z:fz}=L.wastewater;const maskedFacility=maskInside((p,s,id)=>Math.abs(p.x-fx)<20&&Math.abs(p.z-fz)<29&&s.x<15&&s.z<15&&!id&&p.y>5);
 box('#b7b0a0',fx,3.25,fz,35,.5,54,f);
 for(const dz of [-14,12]){cyl('#bfc4bc',fx,6,fz+dz,10,5,f);cyl('#747b65',fx,8.55,fz+dz,8.7,.28,f);box('#d4d7ca',fx,9,fz+dz,19,.35,1.1,f);cyl('#727b74',fx,10,fz+dz,1.3,2,f);}
 box('#b4beb3',fx+11,6,fz+24,9,6,8,f);box('#5f7069',fx+11,9.15,fz+24,10,.4,9,f);
 const outlet=cyl('#777f79',55,4.4,fz,2,9,f);outlet.rotation.z=Math.PI/2;const mouth=cyl('#343e39',50.4,4.4,fz,1.5,.2,f);mouth.rotation.z=Math.PI/2;
 for(let i=0;i<5;i++)flat(['#75876c','#7e8767','#889477','#899b83','#93a78c'][i],47-i*5,fz+7+i*8,5+i*1.9,9+i*1.8,3.65+i*.015,f);
 engine.view.renderer.shadowMap.needsUpdate=true;engine.invalidate();
 return {root,groups,removed,maskedFacility};
}
