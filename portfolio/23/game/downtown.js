import {THREE} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';
import {displayPlan,storefrontStyles} from './layout.js';
// Project-owned illustrative facade and roof exhibits; no underlying geometry edits.
export function downtown(engine,L){
 const root=new THREE.Group();root.name='Central City regeneration exhibits';engine.view.scene.add(root);
 const geo=new THREE.BoxGeometry(1,1,1),materials=new Map(),textures=[];let last='';
 function mat(c,glow=false){const k=c+glow;if(!materials.has(k))materials.set(k,new THREE.MeshStandardMaterial({color:c,roughness:.8,emissive:glow?c:0,emissiveIntensity:glow?.35:0}));return materials.get(k);}
 function box(g,c,x,y,z,w,h,d,glow=false){const m=new THREE.Mesh(geo,mat(c,glow));m.position.set(x,y,z);m.scale.set(w,h,d);g.add(m);return m;}
 const signs=new Map();
 function sign(g,text,x,y,z,w,h,bg){const key=text+bg;if(!signs.has(key)){const canvas=document.createElement('canvas');canvas.width=256;canvas.height=64;const ctx=canvas.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,256,64);ctx.fillStyle='#fff';ctx.font='bold 30px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,128,32,240);const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;textures.push(tex);signs.set(key,new THREE.MeshBasicMaterial({map:tex}));}const mesh=new THREE.Mesh(geo,signs.get(key));mesh.position.set(x,y,z);mesh.scale.set(w,h,.04);g.add(mesh);}
 function sync(s){const plan=displayPlan(s,L.shops.length*3),key=JSON.stringify(plan);if(key===last)return;last=key;root.clear();const styles=storefrontStyles(plan),palette=['#a75237','#397b79','#6c7541','#9b7146'];let i=0;
 for(const b of L.shops){const {x,z}=b.position,{width:w,depth:d}=b.dimensions;const g=new THREE.Group();g.position.set(x,4.2,z+d/2+.12);root.add(g);const span=Math.min(w*.82,18),unit=span/3;
 for(let j=0;j<3;j++,i++){const px=(j-1)*unit,kind=styles[i],open=kind!=='vacant',local=kind==='local',color=palette[i%palette.length];
 box(g,'#756b5d',px,1.5,0,unit*.94,3,.25);box(g,open?'#8ec4bc':'#4a4c48',px,1.28,.17,unit*.77,2.05,.15,open);
 if(!open){for(let q=0;q<9;q++)box(g,'#85877f',px,.42+q*.22,.28,unit*.75,.075,.06);sign(g,'TO LET',px,2.68,.34,unit*.76,.38,'#725b45');}
 else{box(g,'#344a45',px-unit*.27,1.1,.29,unit*.19,2.05,.1);box(g,'#c3b89a',px+unit*.08,.85,.30,unit*.43,.07,.12);box(g,color,px,2.78,.39,unit*.92,.13,.68);for(let k=0;k<5;k++)box(g,k%2?'#f2dfb8':color,px+(k-2)*unit*.17,2.69,.72,unit*.16,.19,.06);sign(g,local?['CAFE','BOOKS','MARKET','BAKERY'][i%4]:'RETAIL',px,2.46,.34,unit*.68,.30,local?color:'#344c60');
 // Facade-attached planters and display shelves avoid encroaching on sidewalks.
 const visitors=Math.max(0,Math.min(2,Math.floor(plan.footfall/30)+(i%3===0?1:0)));for(let q=0;q<visitors;q++){const vx=px+(q-.5)*Math.min(unit*.3,1.2),vz=.95+q*.24;box(g,['#334b68','#a47755','#69856c'][ (i+q)%3],vx,.87,vz,.32,.72,.28);box(g,'#b99678',vx,1.38,vz,.26,.28,.25);for(const side of [-1,1])box(g,'#343a42',vx+side*.09,.26,vz,.12,.5,.13);}if(plan.access>50){for(const a of [-1,1]){box(g,'#72594a',px+a*unit*.35,.25,.43,unit*.16,.33,.25);box(g,'#56834b',px+a*unit*.35,.49,.43,unit*.14,.23,.22);}}}
 }}
 const b=L.development;if(b){const {x,z}=b.position,{width:w,depth:d,height:h}=b.dimensions;if(Number.isFinite(h)&&h>4){const g=new THREE.Group();g.position.set(x,(b.position.y||0)+h+4.5,z);root.add(g);const size=Math.min(w,d,12)*.65;
 if(plan.pending>0){const H=4;for(const a of [-1,1])for(const c of [-1,1])box(g,'#d3a052',a*size/2,H/2,c*size/2,.22,H,.22);for(const y of [1.4,2.8,4]){for(const a of [-1,1]){box(g,'#d3a052',0,y,a*size/2,size,.16,.18);box(g,'#d3a052',a*size/2,y,0,.18,.16,size);}}box(g,'#d9a23b',0,3,0,.35,6,.35);box(g,'#d9a23b',0,6,0,size,.24,.32);box(g,'#484d50',size*.32,5.05,0,.05,1.9,.05);box(g,'#d4aa65',size*.32,4.05,0,.45,.2,.4);}
 if(plan.completed>0){const height=Math.min(4,1+plan.completed/100);box(g,'#b8c2aa',0,height/2,0,size*.75,height,size*.75);for(let k=0;k<3;k++)box(g,'#668d9a',(k-1)*size*.22,height*.55,size*.376,size*.15,height*.5,.045);}}}
 engine.invalidate();}
 return {sync,dispose(){root.removeFromParent();root.clear();geo.dispose();for(const m of materials.values())m.dispose();for(const m of signs.values())m.dispose();for(const t of textures)t.dispose();}};
}
