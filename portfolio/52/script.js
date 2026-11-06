/* The Secret Life of a Brick: standalone, fictional-data interactive exhibit. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const format = new Intl.NumberFormat('en-IN', {maximumFractionDigits: 0});
  const state = {data:null, material:0, stage:0, scale:0, explode:0, smooth:0, fate:0};
  const fates = [
    {icon:'↺',title:'Recover & reuse',heading:'A second chapter, not a free pass.',body:'Careful dismantling can preserve units for another building. Sorting, cleaning, testing, transport and breakage still carry costs and impacts. Recovery needs a market and safe reuse specifications.'},
    {icon:'⌁',title:'Crush & downcycle',heading:'The object changes its job.',body:'Crushed masonry may replace some virgin aggregate in suitable applications. Processing and transport still matter, and downcycling is not equivalent to direct structural reuse.'},
    {icon:'↓',title:'Dispose',heading:'The material leaves the site, not the world.',body:'Landfill or unmanaged disposal occupies space and can create local impacts. It also discards the potential service value of a unit that may have been recoverable.'}
  ];
  const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
  const money = v => '₹' + format.format(Math.round(v));
  const compact = v => v >= 1e6 ? (v/1e6).toFixed(2)+'M' : v>=1e3 ? (v/1e3).toFixed(1)+'K' : format.format(v);
  const carbonLabel = v => v>=1000 ? (v/1000).toFixed(1)+' t CO₂e' : v<1 ? v.toFixed(2)+' kg CO₂e' : v.toFixed(1)+' kg CO₂e';
  const waterLabel = v => v>=1000 ? (v/1000).toFixed(1)+' kL' : v.toFixed(1)+' L';
  const selected = () => state.data.materials[state.material];

  function renderStageButtons(){
    const buttons = $('#actButtons'); buttons.textContent='';
    state.data.stages.forEach((s,i)=>{
      const b = document.createElement('button'); b.type='button'; b.className='act-button'; b.setAttribute('aria-pressed', String(i===state.stage));
      const idx=document.createElement('span');idx.className='act-index';idx.textContent=String(i+1).padStart(2,'0');
      const title=document.createElement('span');title.className='act-label';title.textContent=s.short;
      const arrow=document.createElement('span');arrow.className='act-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';
      b.append(idx,title,arrow);b.addEventListener('click',()=>{state.stage=i;renderStageButtons();renderStageDetail();});buttons.append(b);
    });
  }
  function renderStageDetail(){
    const s=state.data.stages[state.stage],m=selected();
    $('#actCount').textContent=`${String(state.stage+1).padStart(2,'0')} / 05`;
    $('#actGlyph').textContent=s.glyph;$('#actTitle').textContent=s.name;$('#actDescription').textContent=s.description;
    $('#actShare').textContent=m.stages[state.stage]+'%';$('#actTrack').style.width=m.stages[state.stage]+'%';
    $('#actNote').textContent=s.note;
  }
  function renderMaterials(){
    const wrap=$('#materialButtons');wrap.textContent='';
    state.data.materials.forEach((m,i)=>{
      const b=document.createElement('button');b.type='button';b.className='material-btn';b.setAttribute('aria-pressed',String(i===state.material));
      const n=document.createElement('span');n.className='material-number';n.textContent=String(i+1).padStart(2,'0');
      const t=document.createElement('span');t.className='material-title';t.textContent=m.name;
      const x=document.createElement('span');x.className='material-end';x.textContent=i===state.material?'●':'↗';
      b.append(n,t,x);b.addEventListener('click',()=>{state.material=i;renderMaterials();renderMaterialDetail();renderStageDetail();updateScale();});wrap.append(b);
    });
  }
  function renderMaterialDetail(){
    const m=selected();$('#materialName').textContent=m.name;$('#materialDescription').textContent=m.description;
    $('#materialNote').textContent=m.note;$('#materialTransport').textContent=`ASSUMED JOURNEY · ${m.transportKm} KM`;
    const max = {carbon:Math.max(...state.data.materials.map(x=>x.carbon)),water:Math.max(...state.data.materials.map(x=>x.water)),cost:Math.max(...state.data.materials.map(x=>x.cost)),serviceLife:Math.max(...state.data.materials.map(x=>x.serviceLife))};
    const dims=[['carbon','EMBODIED CARBON',m.carbon.toFixed(0)+' kg CO₂e/m²','Concept-only full-wall estimate'],['water','WATER INPUT',m.water.toFixed(0)+' L/m²','Scenario input, not measured'],['cost','ILLUSTRATIVE INSTALLED COST',money(m.cost)+'/m²','Not a supplier quotation'],['serviceLife','ASSUMED SERVICE LIFE',m.serviceLife+' years','Depends on design & exposure']];
    const container=$('#metrics');container.textContent='';
    dims.forEach(([key,label,amount,note])=>{
      const wrap=document.createElement('div');wrap.className='metric';
      const top=document.createElement('div');top.className='metric-top';
      const lab=document.createElement('span');lab.textContent=label;const val=document.createElement('strong');val.textContent=amount;
      top.append(lab,val); const track=document.createElement('div');track.className='metric-track';
      const bar=document.createElement('div');bar.className='metric-bar';bar.style.width=(m[key]/max[key]*100).toFixed(1)+'%';track.append(bar);
      const small=document.createElement('div');small.className='metric-hint';small.textContent=note;
      wrap.append(top,track,small);container.append(wrap);
    });
    const first=$('.specimen-topline span:first-child');first.innerHTML='<span class="small-dot"></span> MATERIAL STUDY / '+m.short;
  }
  function updateScale(){
    const m=selected(), s=state.data.scales[state.scale], area=s.area===null?1/m.unitsPerM2:s.area;
    $('#scaleLabel').textContent=s.label;$('#scaleArea').textContent=area<1?area.toFixed(3)+' m²':format.format(area)+' m²';
    $('#scaleStamp').textContent=s.tag;
    $('#scaleUnits').textContent=format.format(Math.round(area*m.unitsPerM2));
    $('#scaleCarbon').textContent=carbonLabel(area*m.carbon);
    $('#scaleCost').textContent=money(area*m.cost);
    $('#scaleWater').textContent=waterLabel(area*m.water);
    drawScaleCanvas();
  }
  function renderFates(){
    const wrap=$('#fateChoices');wrap.textContent='';
    fates.forEach((f,i)=>{
      const b=document.createElement('button');b.className='fate-btn';b.type='button';b.setAttribute('aria-pressed',String(i===state.fate));
      const icon=document.createElement('span');icon.className='fate-icon';icon.textContent=f.icon;
      const title=document.createElement('span');title.className='fate-title';title.textContent=f.title;
      b.append(icon,title);b.addEventListener('click',()=>{state.fate=i;renderFates();});wrap.append(b);
    });
    const f=fates[state.fate];$('#fateOutcome').replaceChildren();const head=document.createElement('strong');head.textContent=f.heading;const body=document.createElement('span');body.textContent=f.body;$('#fateOutcome').append(head,body);
  }
  function canvasContext(canvas){
    const r=canvas.getBoundingClientRect(); if(!r.width||!r.height)return null;
    const d=Math.min(window.devicePixelRatio||1,2);const w=Math.max(1,Math.floor(r.width*d)),h=Math.max(1,Math.floor(r.height*d));
    if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}
    const ctx=canvas.getContext('2d');ctx.setTransform(w/1000,0,0,h/620,0,0);return ctx;
  }
  const poly=(ctx,pts,fill,stroke=null,width=1)=>{ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(...pts[i]);ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.lineWidth=width;ctx.strokeStyle=stroke;ctx.stroke();}};
  const rgba=(hex,alpha)=>{const h=hex.replace('#','');const v=[0,2,4].map(i=>parseInt(h.slice(i,i+2),16));return `rgba(${v.join(',')},${alpha})`;};
  const shade=(hex,m)=>{const h=hex.slice(1);return '#'+[0,2,4].map(i=>Math.round(clamp(parseInt(h.slice(i,i+2),16)*m,0,255)).toString(16).padStart(2,'0')).join('');};
  function rand(seed){let n=Math.sin(seed*78.233+1.17)*43758.5453;return n-Math.floor(n);}
  function grainOnFace(ctx,pts,seed,count){
    const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),minx=Math.min(...xs),miny=Math.min(...ys),dx=Math.max(...xs)-minx,dy=Math.max(...ys)-miny;
    ctx.save();ctx.beginPath();ctx.moveTo(...pts[0]);for(let j=1;j<pts.length;j++)ctx.lineTo(...pts[j]);ctx.closePath();ctx.clip();
    for(let i=0;i<count;i++){const x=minx+rand(seed+i*2.37)*dx,y=miny+rand(seed+i*3.19+5)*dy;ctx.fillStyle=i%3?'rgba(38,18,13,.17)':'rgba(255,220,177,.24)';ctx.fillRect(x,y,.6+rand(i+seed)*3,.6+rand(i*2+seed)*2.2);}
    ctx.restore();
  }
  function drawBrick(t){
    const canvas=$('#brickCanvas');if(!canvas)return;const ctx=canvasContext(canvas);if(!ctx)return;ctx.clearRect(0,0,1000,620);
    const m=selected(),e=state.smooth,shift=Math.sin(t/1900)*3,base=m.color;
    ctx.save();ctx.translate(0,shift);
    // Dimensional rings, like archaeological specimen photography.
    for(let r=0;r<4;r++){ctx.strokeStyle='rgba(221,199,161,.055)';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(515,339,200+r*90,118+r*42,-.09,0,Math.PI*2);ctx.stroke();}
    const shadow=ctx.createRadialGradient(530,489,10,530,492,345);shadow.addColorStop(0,'rgba(0,0,0,.40)');shadow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=shadow;ctx.beginPath();ctx.ellipse(520,488,360,78,0,0,Math.PI*2);ctx.fill();
    const parts=5,L=4.1,W=2.2,H=1.25;
    function p(x,y,z,sep){return [328+x*114-y*61+sep,325+x*30+y*31-z*111];}
    for(let i=0;i<parts;i++){
      const x0=i*L/parts+.028,x1=(i+1)*L/parts-.028;const sep=(i-2)*e*42;
      const A=p(x0,0,H,sep),B=p(x1,0,H,sep),C=p(x1,W,H,sep),D=p(x0,W,H,sep),E=p(x0,W,0,sep),F=p(x1,W,0,sep),G=p(x1,0,0,sep);
      ctx.save();if(state.stage===i && e>.15){ctx.shadowColor=rgba(base,.4);ctx.shadowBlur=15;}
      const top=[A,B,C,D],front=[D,C,F,E],end=[B,C,F,G];
      poly(ctx,top,shade(base,1.21),'rgba(73,35,22,.55)',1.3);grainOnFace(ctx,top,22+i*90,130);
      poly(ctx,front,shade(base,.86),'rgba(47,28,17,.75)',1.7);grainOnFace(ctx,front,98+i*66,180);
      poly(ctx,end,shade(base,.64),'rgba(53,32,20,.7)',1.5);grainOnFace(ctx,end,64+i*31,95);
      ctx.restore();
      if(e>.28){const P=p((x0+x1)/2,W,H,sep);const alpha=Math.min(1,(e-.28)/.3);
        ctx.fillStyle=`rgba(243,221,187,${.8*alpha})`;ctx.font='600 15px monospace';ctx.fillText(String(i+1).padStart(2,'0'),P[0]-11,P[1]+17);}
    }
    ctx.restore();
    // Thin scale markings.
    ctx.strokeStyle='rgba(236,217,178,.22)';ctx.lineWidth=1;
    for(let i=0;i<18;i++){let x=296+i*26;ctx.beginPath();ctx.moveTo(x,560);ctx.lineTo(x,560+(i%5===0?11:5));ctx.stroke();}
    ctx.fillStyle='rgba(236,217,178,.58)';ctx.font='11px monospace';ctx.fillText('100 MM / TYPICAL SPECIMEN VIEW',300,589);
  }
  let animationID=null;let lastTime=0;
  function frame(time){if(time-lastTime>=32){lastTime=time;state.smooth+=(state.explode-state.smooth)*.095;if(!document.hidden)drawBrick(time);}animationID=requestAnimationFrame(frame);}
  function drawScaleCanvas(){
    const canvas=$('#scaleCanvas');if(!canvas)return;const ctx=canvasContext(canvas);if(!ctx)return;
    ctx.clearRect(0,0,1000,620);
    // Exhibition drafting sheet.
    ctx.fillStyle='#d9ceb8';ctx.fillRect(0,0,1000,620);
    ctx.strokeStyle='rgba(88,77,58,.09)';ctx.lineWidth=1;
    for(let x=0;x<=1000;x+=34){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,620);ctx.stroke();}
    for(let y=0;y<=620;y+=34){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(1000,y);ctx.stroke();}
    const idx=state.scale,m=selected(),base=m.color;
    const floor=(y=510)=>{ctx.strokeStyle='rgba(70,65,47,.3)';ctx.beginPath();ctx.moveTo(45,y);ctx.lineTo(955,y);ctx.stroke();};
    function unitBrick(x,y,scale=1){const w=155*scale,h=67*scale,d=34*scale;poly(ctx,[[x,y],[x+w,y],[x+w+d,y-d*.5],[x+d,y-d*.5]],shade(base,1.2),'#796e5c',1);poly(ctx,[[x,y],[x+w,y],[x+w,y+h],[x,y+h]],base,'#735c4b',1);poly(ctx,[[x+w,y],[x+w+d,y-d*.5],[x+w+d,y+h-d*.5],[x+w,y+h]],shade(base,.74),'#735c4b',1);}
    function building(x,y,w,h,bcolor){
      const d=Math.max(18,w*.28),c=bcolor||base;
      poly(ctx,[[x,y],[x+w,y],[x+w,y+h],[x,y+h]],shade(c,.96),'#655b4e',1.4);
      poly(ctx,[[x+w,y],[x+w+d,y-d*.52],[x+w+d,y+h-d*.52],[x+w,y+h]],shade(c,.67),'#655b4e',1.5);
      poly(ctx,[[x,y],[x+d,y-d*.52],[x+w+d,y-d*.52],[x+w,y]],shade(c,1.2),'#655b4e',1.4);
      const cols=Math.max(1,Math.floor(w/27)),rows=Math.max(1,Math.floor(h/31));
      for(let a=0;a<cols;a++)for(let b=0;b<rows;b++){ctx.fillStyle=(a+b)%3?'#584d43':'#766453';const ww=Math.min(13,w/(cols+2));ctx.fillRect(x+12+a*(w-23)/cols,y+12+b*(h-22)/rows,ww,11);}
    }
    if(idx===0){
      floor(475);unitBrick(328,302,2.15);
      ctx.fillStyle='#6d604c';ctx.font='13px monospace';ctx.fillText('ONE OBJECT / ONE STORY',330,540);
    }else if(idx===1){
      const cols=10,rows=6,bw=62,bh=35,x0=155,y0=250;floor(520);
      for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const x=x0+c*bw+(r%2)*(-bw/2),y=y0+r*bh;ctx.fillStyle=shade(base,1+(c%3)*.07-r*.015);ctx.fillRect(x,y,bw-2,bh-3);ctx.strokeStyle='#785842';ctx.strokeRect(x,y,bw-2,bh-3);}
      ctx.fillStyle='#665b4b';ctx.font='12px monospace';ctx.fillText('MASONRY / WALL ASSEMBLY',160,535);
    }else if(idx===2){
      floor(516);building(303,262,280,245,base);building(445,175,140,88,shade(base,.94));
      poly(ctx,[[284,264],[448,169],[602,264],[588,279],[449,198],[296,281]],'#746e60','#62574a',2);
      ctx.fillStyle='#675948';ctx.font='12px monospace';ctx.fillText('ONE NOTIONAL HOME',320,555);
    }else{
      floor(555);
      const count=idx===3?9:20;
      const cols=idx===3?3:5;
      for(let j=count-1;j>=0;j--){const row=Math.floor(j/cols),col=j%cols;
        const w=idx===3?147:105,h=(idx===3?100:65)+((j*23+17)%5)*(idx===3?22:18);
        const x=idx===3?160+col*203+row*17:105+col*155+row*21;
        const y=idx===3?480-row*117-h:495-row*85-h;
        const colr= j%5===0?'#a49882':j%3===0?shade(base,.85):base;
        building(x,y,w,h,colr);
      }
      ctx.fillStyle='#675948';ctx.font='12px monospace';ctx.fillText(idx===3?'ILLUSTRATIVE CITY BLOCK':'NOTIONAL DISTRICT / MANY WALLS',85,579);
    }
    ctx.fillStyle='#746b5a';ctx.font='12px monospace';ctx.fillText('STUDY / MATERIAL QUANTITIES',45,78);
  }
  function initControls(){
    const ex=$('#explodeRange'),sc=$('#scaleRange');
    ex.addEventListener('input',()=>{state.explode=Number(ex.value)/100;$('#explodeOutput').textContent=state.explode<.05?'INTACT':state.explode>.96?'FULLY OPEN':Math.round(state.explode*100)+'% OPEN';});
    sc.addEventListener('input',()=>{state.scale=Number(sc.value);updateScale();});
    $('#openNotes').addEventListener('click',()=>$('#notesDialog').showModal());
    window.addEventListener('resize',()=>{drawBrick(performance.now());drawScaleCanvas();});
    const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(mq.matches){state.smooth=state.explode;drawBrick(0);ex.addEventListener('input',()=>{state.smooth=state.explode;drawBrick(0);});}
    else animationID=requestAnimationFrame(frame);
  }
  async function start(){
    try{
      const response=await fetch('./data/materials.json',{cache:'no-store'});if(!response.ok)throw Error('HTTP '+response.status);
      const data=await response.json();if(!Array.isArray(data.materials)||data.materials.length<4||data.stages.length!==5||data.scales.length!==5)throw Error('Unexpected data schema');
      for(const m of data.materials){if(m.stages.reduce((a,b)=>a+b,0)!==100)throw Error('Stage percentages do not total 100');}
      state.data=data;
      renderStageButtons();renderStageDetail();renderMaterials();renderMaterialDetail();renderFates();updateScale();initControls();
    }catch(error){
      const notice=document.createElement('div');notice.setAttribute('role','alert');notice.style.cssText='position:fixed;z-index:100;bottom:20px;left:20px;right:20px;padding:18px;background:#f4ddc4;color:#33271e;border:2px solid #b75f43';
      notice.textContent='The material inventory could not load. Serve the project through a local web server (for example python -m http.server 8001 from the repository root). Detail: '+error.message;
      document.body.append(notice);console.error(error);
    }
  }
  start();
})();
