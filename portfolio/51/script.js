/* The City Is an Instrument
   Original, procedural urban sound installation. No external audio, microphone, or network calls.
   The display represents artistic soundscape mixes, not calibrated environmental acoustics.
*/
'use strict';

const LAYERS = ['traffic','people','birds','market','water','transit'];
const SCENES = {
  street: { title:'THE CROSSROADS', kicker:'SONIC SCENE / 001', description:'A street slowly waking up. Wheels, footsteps, a distant bell.', colors:['#173e50','#f7aa82','#17304a'], mix:{traffic:1,people:.62,birds:.55,market:.23,water:.07,transit:.37}},
  park: { title:'THE POCKET PARK', kicker:'SONIC SCENE / 002', description:'A pocket of green between the buildings. Wings, leaves, footsteps.', colors:['#1d5451','#a6db9a','#152d3d'], mix:{traffic:.17,people:.35,birds:1.2,market:.06,water:.34,transit:.08}},
  market: { title:'THE NIGHT MARKET', kicker:'SONIC SCENE / 003', description:'Stalls begin to glow. Shoes on pavement and an untranslatable hum.', colors:['#48385e','#f59a7b','#1f2747'], mix:{traffic:.35,people:.96,birds:.11,market:1.13,water:.03,transit:.28}},
  waterfront: { title:'THE CANAL WALK', kicker:'SONIC SCENE / 004', description:'Water against stone, a gentle breeze and a city just beyond.', colors:['#16536b','#8de0d3','#13324d'], mix:{traffic:.14,people:.34,birds:.55,market:.09,water:1.18,transit:.1}},
  station: { title:'THE RAIL JUNCTION', kicker:'SONIC SCENE / 005', description:'Rhythms of arrival. Rolling wheels, an iron bell, people passing.', colors:['#243e64','#f1cc9a','#172843'], mix:{traffic:.44,people:.75,birds:.10,market:.33,water:.03,transit:1.2}}
};
const TIMES = {
  morning:{ clock:'06:30', suffix:'AM', note:'The first buses rumble by. Birds have the early shift.', factors:{traffic:.72,people:.62,birds:1.28,market:.37,water:1,transit:.58}},
  day:{ clock:'12:00', suffix:'PM', note:'The city fills out: people, wheels, bustle, sunlight.', factors:{traffic:1.1,people:1.08,birds:.65,market:1.0,water:1,transit:1.03}},
  evening:{ clock:'06:30', suffix:'PM', note:'Shops light up. The rush home rolls through the street.', factors:{traffic:1.17,people:1.03,birds:.35,market:1.19,water:1,transit:1.13}},
  night:{ clock:'12:30', suffix:'AM', note:'An occasional tram, softer footsteps. The city still breathes.', factors:{traffic:.41,people:.25,birds:.08,market:.28,water:1.11,transit:.34}}
};
const DEFAULT_LEVELS={traffic:75,people:75,birds:80,market:70,water:75,transit:75};
const state={scene:'street',time:'morning',levels:{...DEFAULT_LEVELS},interventions:new Set(),solo:null,master:65,playing:false};
const $=id=>document.getElementById(id);
let engine=null, raf=0, tick=0;
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));

function levelsForState(){
 const base=SCENES[state.scene].mix, time=TIMES[state.time].factors;
 const o={};
 for(const layer of LAYERS) o[layer]=base[layer]*time[layer]*state.levels[layer]/100;
 if(state.interventions.has('walk')){o.traffic*=.33;o.people*=1.75;o.market*=1.15;}
 if(state.interventions.has('trees')){o.birds*=1.7;o.traffic*=.85;}
 if(state.interventions.has('tram')){o.transit*=1.8;o.traffic*=.72;}
 if(state.interventions.has('stream')){o.water*=2.15;}
 for(const layer of LAYERS){
   if(state.solo&&layer!==state.solo)o[layer]=0;
   o[layer]=clamp(o[layer],0,1.8);
 }
 return o;
}

class SoundEngine{
 constructor(){
  this.ctx=null;this.master=null;this.analyser=null;
  this.channels={};this.timer=null;this.next={people:0,birds:0,transit:0};
 }
 async boot(){
  if(!this.ctx){
   const Ctx=window.AudioContext||window.webkitAudioContext;
   if(!Ctx)throw new Error('This browser does not support Web Audio.');
   const ctx=this.ctx=new Ctx();
   const limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-15;limiter.knee.value=15;limiter.ratio.value=4;limiter.attack.value=.007;limiter.release.value=.22;
   this.master=ctx.createGain();this.master.gain.value=0;
   this.analyser=ctx.createAnalyser();this.analyser.fftSize=512;this.analyser.smoothingTimeConstant=.79;
   this.master.connect(limiter);limiter.connect(this.analyser);this.analyser.connect(ctx.destination);
   for(const layer of LAYERS){this.channels[layer]=ctx.createGain();this.channels[layer].gain.value=0;this.channels[layer].connect(this.master);}
   const noise=this.makeNoise(3);
   this.makeAmbience(noise,'traffic','lowpass',850,.3);
   this.makeAmbience(noise,'market','bandpass',490,.6);
   this.makeAmbience(noise,'water','bandpass',980,1.1);
   this.makeAmbience(noise,'transit','lowpass',370,.4);
   this.footNoise=this.makeNoise(.085);
   this.next={people:ctx.currentTime+.12,birds:ctx.currentTime+.15,transit:ctx.currentTime+1};
  }
  await this.ctx.resume();
  this.master.gain.cancelScheduledValues(this.ctx.currentTime);
  this.master.gain.setTargetAtTime(.65*state.master/100,this.ctx.currentTime,.07);
  this.setLevels();
  if(!this.timer)this.timer=setInterval(()=>this.schedule(),130);
 }
 makeNoise(seconds){
  const ctx=this.ctx, b=ctx.createBuffer(1,Math.ceil(seconds*ctx.sampleRate),ctx.sampleRate), a=b.getChannelData(0);
  let last=0;
  for(let i=0;i<a.length;i++){last=(last+(Math.random()*2-1)*.19)/1.19;a[i]=last*2.9;}
  return b;
 }
 makeAmbience(buffer,layer,filterType,freq,q){
  const c=this.ctx,source=c.createBufferSource();source.buffer=buffer;source.loop=true;
  const filter=c.createBiquadFilter();filter.type=filterType;filter.frequency.value=freq;filter.Q.value=q;
  const gain=c.createGain();gain.gain.value={traffic:.32,market:.24,water:.31,transit:.20}[layer];
  source.connect(filter);filter.connect(gain);gain.connect(this.channels[layer]);source.start();
  // Gentle envelope movement makes each bed feel less like static noise.
  const lfo=c.createOscillator(),depth=c.createGain();lfo.frequency.value={traffic:.19,market:.27,water:.33,transit:.12}[layer];depth.gain.value=.05;
  lfo.connect(depth);depth.connect(gain.gain);lfo.start();
 }
 setLevels(){
  if(!this.ctx)return;
  const mix=levelsForState(),t=this.ctx.currentTime;
  for(const layer of LAYERS){this.channels[layer].gain.setTargetAtTime(mix[layer],t,.14);}
  this.master.gain.setTargetAtTime((.65*state.master/100),t,.08);
 }
 footstep(at){
  const c=this.ctx,src=c.createBufferSource(),f=c.createBiquadFilter(),v=c.createGain();
  src.buffer=this.footNoise;f.type='bandpass';f.frequency.value=110+Math.random()*170;f.Q.value=.45;
  v.gain.setValueAtTime(.0001,at);v.gain.exponentialRampToValueAtTime(.33+Math.random()*.2,at+.012);v.gain.exponentialRampToValueAtTime(.0001,at+.08);
  src.connect(f);f.connect(v);v.connect(this.channels.people);src.start(at);src.stop(at+.085);
 }
 chirp(at){
  const c=this.ctx;const osc=c.createOscillator(),env=c.createGain(),sweep=1400+Math.random()*1100;
  osc.type=Math.random()>.5?'sine':'triangle';osc.frequency.setValueAtTime(sweep,at);osc.frequency.exponentialRampToValueAtTime(sweep*1.35,at+.08);osc.frequency.exponentialRampToValueAtTime(sweep*.86,at+.21);
  env.gain.setValueAtTime(.0001,at);env.gain.exponentialRampToValueAtTime(.14,at+.023);env.gain.exponentialRampToValueAtTime(.0001,at+.23);
  osc.connect(env);env.connect(this.channels.birds);osc.start(at);osc.stop(at+.24);
 }
 bell(at){
  const c=this.ctx;for(const [i,mul] of [1,1.5,2.18].entries()){
   const o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=(560+Math.random()*80)*mul;
   g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(.12/(i+1),at+.015);g.gain.exponentialRampToValueAtTime(.0001,at+(.9-i*.15));
   o.connect(g);g.connect(this.channels.transit);o.start(at);o.stop(at+1);
  }
 }
 schedule(){
  if(!this.ctx||this.ctx.state!=='running')return;
  const now=this.ctx.currentTime,horizon=now+.36,mix=levelsForState();
  while(this.next.people<horizon){if(mix.people>.005)this.footstep(Math.max(now+.007,this.next.people));this.next.people+=.22+Math.random()*.45;}
  while(this.next.birds<horizon){if(mix.birds>.005)this.chirp(Math.max(now+.007,this.next.birds));this.next.birds+=.35+Math.random()*.75;}
  while(this.next.transit<horizon){if(mix.transit>.02)this.bell(Math.max(now+.007,this.next.transit));this.next.transit+=3.0+Math.random()*3.3;}
 }
 async pause(){
  if(!this.ctx)return;
  if(this.timer){clearInterval(this.timer);this.timer=null;}
  const t=this.ctx.currentTime;this.master.gain.setTargetAtTime(0,t,.035);
  await new Promise(resolve=>setTimeout(resolve,120));
  await this.ctx.suspend();
  this.next={people:this.ctx.currentTime+.12,birds:this.ctx.currentTime+.15,transit:this.ctx.currentTime+1};
 }
}

async function toggleAudio(){
 const button=$('playButton');button.disabled=true;
 try{
  if(!engine)engine=new SoundEngine();
  if(state.playing){state.playing=false;await engine.pause();}
  else{await engine.boot();state.playing=true;}
  renderAudioButton();
 }catch(error){$('audioStatus').textContent='AUDIO UNAVAILABLE';console.error(error);}
 finally{button.disabled=false;}
}
function renderAudioButton(){
 $('audioStatus').textContent=state.playing?'LIVE SYNTHESIS ACTIVE':'AUDIO ENGINE STANDBY';
 $('audioIndicator').classList.toggle('active',state.playing);
 $('playLabel').textContent=state.playing?'PAUSE SOUND':'LISTEN TO THE CITY';
 $('playIcon').textContent=state.playing?'Ⅱ':'▶';
 $('playButton').setAttribute('aria-pressed',String(state.playing));
 $('audioPrompt').hidden=state.playing;
}
function renderState(){
 const s=SCENES[state.scene],t=TIMES[state.time];
 $('stage').dataset.scene=state.scene;$('stage').dataset.time=state.time;
 $('stageTitle').textContent=s.title;$('stageDescription').textContent=s.description;$('stageKicker').textContent=s.kicker;
 $('stageClock').innerHTML=`${t.clock} <b>${t.suffix}</b>`;
 $('timeDescription').textContent=t.note;
 document.querySelectorAll('[data-scene]').forEach(el=>{if(!el.classList.contains('scene-button'))return;const active=el.dataset.scene===state.scene;el.classList.toggle('selected',active);el.setAttribute('aria-pressed',String(active));});
 document.querySelectorAll('.time-button').forEach(el=>{const active=el.dataset.time===state.time;el.classList.toggle('selected',active);el.setAttribute('aria-pressed',String(active));});
 document.querySelectorAll('.beacon').forEach(el=>{const active=el.dataset.solo===state.solo;el.setAttribute('aria-pressed',String(active));el.title=active?'Restore all sounds':'Isolate '+el.dataset.solo;});
 document.querySelectorAll('.channel').forEach(el=>{const k=el.dataset.channel,v=state.levels[k];el.querySelector('input').value=v;el.querySelector('output').textContent=v+'%';el.querySelector('.channel-visual-bar').style.height=(8+v*.69)+'px';el.style.opacity=state.solo&&state.solo!==k?'.52':'1';});
 document.querySelectorAll('.intervention-card').forEach(el=>{const active=state.interventions.has(el.dataset.intervention);el.setAttribute('aria-pressed',String(active));el.querySelector('.intervention-toggle').innerHTML=active?'ON <i>●</i>':'OFF <i>○</i>';});
 $('masterVolume').value=state.master;$('volumeValue').textContent=state.master+'%';
 if(engine)engine.setLevels();
}
function setScene(scene){if(!SCENES[scene])return;state.scene=scene;renderState();}
function setTime(time){if(!TIMES[time])return;state.time=time;renderState();}
function bindInteractions(){
 $('playButton').addEventListener('click',toggleAudio);
 document.querySelectorAll('.scene-button').forEach(el=>el.addEventListener('click',()=>setScene(el.dataset.scene)));
 document.querySelectorAll('.time-button').forEach(el=>el.addEventListener('click',()=>setTime(el.dataset.time)));
 document.querySelectorAll('.beacon').forEach(el=>el.addEventListener('click',()=>{state.solo=state.solo===el.dataset.solo?null:el.dataset.solo;renderState();}));
 document.querySelectorAll('input[data-layer]').forEach(el=>el.addEventListener('input',()=>{state.levels[el.dataset.layer]=Number(el.value);renderState();}));
 $('masterVolume').addEventListener('input',event=>{state.master=Number(event.target.value);$('volumeValue').textContent=state.master+'%';if(engine)engine.setLevels();});
 $('resetMix').addEventListener('click',()=>{state.levels={...DEFAULT_LEVELS};state.solo=null;renderState();});
 $('randomMix').addEventListener('click',()=>{for(const layer of LAYERS)state.levels[layer]=Math.round(20+Math.random()*80);state.solo=null;renderState();});
 document.querySelectorAll('.intervention-card').forEach(el=>el.addEventListener('click',()=>{const k=el.dataset.intervention;state.interventions.has(k)?state.interventions.delete(k):state.interventions.add(k);renderState();}));
}

// ------------------------------------
// Illustrative city stage canvas
// ------------------------------------
const cityCanvas=$('cityCanvas'),stageCtx=cityCanvas.getContext('2d');
const waveCanvas=$('waveCanvas'),waveCtx=waveCanvas.getContext('2d');
const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let cityW=0,cityH=0,waveW=0,waveH=0,dpr=1;
function resizeCanvas(){
 dpr=Math.min(window.devicePixelRatio||1,2);
 for(const [canvas,widthName,heightName] of [[cityCanvas,'cityW','cityH'],[waveCanvas,'waveW','waveH']]){
  const rect=canvas.getBoundingClientRect(),w=Math.max(1,Math.round(rect.width)),h=Math.max(1,Math.round(rect.height));
  canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.getContext('2d').setTransform(dpr,0,0,dpr,0,0);
  if(canvas===cityCanvas){cityW=w;cityH=h;}else{waveW=w;waveH=h;}
 }
}
const mulberry32=(seed)=>()=>{seed|=0;seed=(seed+0x6D2B79F5)|0;let x=Math.imul(seed^seed>>>15,1|seed);x=(x+Math.imul(x^x>>>7,61|x))^x;return ((x^x>>>14)>>>0)/4294967296;};
function paintBuilding(ctx,x,y,width,height,color,winColor,seed){
 ctx.fillStyle=color;ctx.fillRect(x,y-height,width,height);
 const r=mulberry32(seed),cell=Math.max(12,Math.min(23,width/5));
 for(let wx=x+10;wx<x+width-6;wx+=cell)for(let wy=y-height+14;wy<y-12;wy+=cell){if(r()>.39){ctx.globalAlpha=.3+.48*r();ctx.fillStyle=winColor;ctx.fillRect(wx,wy,3.4,5.4);}}
 ctx.globalAlpha=1;
 ctx.fillStyle='rgba(255,255,255,.08)';ctx.fillRect(x,y-height,1.5,height);
}
function paintTree(ctx,x,base,size,time){
 ctx.strokeStyle='#0a2731';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x,base);ctx.lineTo(x,base-size*.8);ctx.stroke();
 const leaves=['#1b7b73','#379a84','#69b9a0','#bada90'];
 for(let i=0;i<5;i++){ctx.fillStyle=leaves[i%leaves.length];ctx.beginPath();const ox=Math.sin(i*3.7)*size*.31,oy=Math.cos(i*2.7)*size*.24;ctx.arc(x+ox,base-size*.85+oy,size*(.3+(i%3)*.035),0,Math.PI*2);ctx.fill();}
 ctx.fillStyle='#d7f7ba';ctx.globalAlpha=.3;ctx.beginPath();ctx.arc(x-size*.15,base-size*.99,size*.2,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
}
function drawCity(seconds){
 const ctx=stageCtx,w=cityW,h=cityH;if(!w||!h)return;
 ctx.save();ctx.clearRect(0,0,w,h);ctx.scale(w/1400,h/520);
 const W=1400,H=520,s=SCENES[state.scene],t=state.time,mix=levelsForState();
 const daylight=t==='day'?1:t==='morning'?.74:t==='evening'?.46:.08;
 const palette={morning:['#315973','#d99a8e','#ffdc97'],day:['#2c8090','#72c1b4','#e2e3ab'],evening:['#1b3b64','#a05b8c','#f5a779'],night:['#0a2039','#1c3358','#3b4a75']}[t];
 const sky=ctx.createLinearGradient(0,0,0,460);sky.addColorStop(0,palette[0]);sky.addColorStop(.54,palette[1]);sky.addColorStop(1,palette[2]);ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
 // Night star field and graphic celestial disc.
 if(t==='night'||t==='evening'){const rand=mulberry32(1212);for(let i=0;i<65;i++){const x=rand()*W,y=rand()*240,r=.3+rand()*1.3;ctx.fillStyle='#d8e6f5';ctx.globalAlpha=.3+rand()*.5;ctx.fillRect(x,y,r,r);}ctx.globalAlpha=1;}
 const orbX=1045,orbY=145,orbR=t==='night'?47:77;
 const glow=ctx.createRadialGradient(orbX,orbY,2,orbX,orbY,200);glow.addColorStop(0,t==='night'?'#cdd3ee77':'#fff1ab85');glow.addColorStop(1,'#ffdfb000');ctx.fillStyle=glow;ctx.fillRect(800,-40,510,400);
 ctx.fillStyle=t==='night'?'#e7dfc1':'#fae8b1';ctx.beginPath();ctx.arc(orbX,orbY,orbR,0,Math.PI*2);ctx.fill();
 // Contour rings encircle the orb like a sound wave.
 for(let i=0;i<4;i++){const r=orbR+32+i*22+(prefersReducedMotion.matches?0:Math.sin(seconds*.8+i)*5);ctx.strokeStyle=t==='night'?'#e1e3f426':'#f8f3db3a';ctx.lineWidth=1;ctx.beginPath();ctx.arc(orbX,orbY,r,0,Math.PI*2);ctx.stroke();}
 // Faraway buildings.
 const far=mulberry32(224);let x=-14;while(x<1430){const bw=24+far()*65,bh=57+far()*140;paintBuilding(ctx,x,363,bw,bh,t==='night'?'#1b324b':'#526d78',t==='night'?'#eecb8b':'#b0d9c7',Math.floor(x*4));x+=bw+3;}
 // Decorative audio strings run behind the foreground buildings.
 ctx.beginPath();ctx.lineWidth=1.5;ctx.strokeStyle=t==='night'?'#b3f9d95c':'#e9ffcc5e';for(let i=0;i<=125;i++){const x=i/125*1400,y=315+Math.sin(i*.24+seconds*.9)*8+Math.sin(i*.64-seconds*1.7)*10; i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();
 // City architecture alters by scene.
 const scene=state.scene;const park=scene==='park',waterside=scene==='waterfront',market=scene==='market',station=scene==='station';
 const buildings=park?[[40,100,120],[215,72,210],[1020,115,180],[1177,84,246]]:waterside?[[85,100,270],[260,80,190],[850,86,215],[1125,135,282]]:station?[[38,98,270],[169,120,176],[510,92,238],[915,130,235],[1120,110,280]]:market?[[28,115,205],[170,96,260],[350,127,212],[795,105,200],[1010,114,252],[1200,130,205]]:[[35,114,266],[180,96,197],[340,132,278],[785,95,188],[920,127,246],[1130,162,285]];
 for(let i=0;i<buildings.length;i++){const [bx,bw,bh]=buildings[i];paintBuilding(ctx,bx,423,bw,bh,t==='night'?'#142d3d':'#204757',t==='night'?'#f9ca8c':'#b9ecca',i*129+192);}
 // Park & planted streets.
 if(park||state.interventions.has('trees')){
  const spots=park?[102,288,434,560,720,878,1028,1238]:[130,450,730,1084,1280];
  for(let i=0;i<spots.length;i++)paintTree(ctx,spots[i],435,53+(i%3)*16,seconds);
 }
 // Market awnings and festival strings.
 if(market){for(let i=0;i<6;i++){const x=95+i*202;ctx.fillStyle=i%2?'#ee9d7e':'#b7b5f2';ctx.beginPath();ctx.moveTo(x,375);ctx.lineTo(x+120,375);ctx.lineTo(x+105,398);ctx.lineTo(x+8,398);ctx.fill();ctx.fillStyle='#173547';ctx.fillRect(x+12,400,96,35);}for(let i=0;i<37;i++){ctx.fillStyle=i%3?'#f7d892':'#9eece3';ctx.beginPath();ctx.arc(i*40,330+Math.sin(i/3)*17,2.5,0,Math.PI*2);ctx.fill();}}
 // Waterfront canal / daylighted stream.
 if(waterside||state.interventions.has('stream')){
  ctx.fillStyle='#1d6979';ctx.fillRect(0,423,W,97);
  for(let row=0;row<6;row++){ctx.strokeStyle=row%2?'#95dbd27d':'#d5f6d14f';ctx.lineWidth=1.3;ctx.beginPath();for(let ix=0;ix<60;ix++){const xx=ix/59*W,yy=435+row*16+Math.sin(ix*.7+seconds*1.2+row)*3;ix?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();}
 }else{ctx.fillStyle='#112936';ctx.fillRect(0,425,W,95);ctx.fillStyle='#7fb3ac';ctx.fillRect(0,428,W,2);for(let i=0;i<18;i++){ctx.fillStyle='#d1d4a466';ctx.fillRect(i*92+(seconds*11)%92,480,46,2.5);}}
 // Rail tracks and train / tram.
 if(station||state.interventions.has('tram')){
  ctx.strokeStyle='#b3c0bc';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(0,401);ctx.lineTo(1400,401);ctx.stroke();ctx.strokeStyle='#eddbb3';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,414);ctx.lineTo(1400,414);ctx.stroke();
  const position=((seconds*76)%1800)-300;ctx.fillStyle='#bce6dc';ctx.fillRect(position,359,310,40);ctx.fillStyle='#132f43';for(let i=0;i<8;i++)ctx.fillRect(position+12+i*37,366,25,21);ctx.fillStyle='#f5c373';ctx.fillRect(position+285,366,5,22);
 }
 // A few small figures.
 const people=park?[[400,405],[630,405],[1020,405]]:market?[[245,413],[510,413],[790,413],[990,413]]:[[270,417],[650,417],[1040,417]];
 for(let i=0;i<people.length;i++){let [px,py]=people[i];px+=prefersReducedMotion.matches?0:Math.sin(seconds*.17+i)*9;ctx.fillStyle=i%2?'#ffbc98':'#d2e2c0';ctx.beginPath();ctx.arc(px,py-17,4.5,0,Math.PI*2);ctx.fill();ctx.fillRect(px-2.5,py-12,5,14);ctx.strokeStyle='#dbe4d1';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(px,py+2);ctx.lineTo(px-5,py+11);ctx.moveTo(px,py+2);ctx.lineTo(px+5,py+11);ctx.stroke();}
 // Moving light trail hints at traffic.
 if(!waterside&&!park){ctx.strokeStyle='#f6a8859e';ctx.lineWidth=4;ctx.beginPath();let xx=(seconds*84)%1780-190;ctx.moveTo(xx,464);ctx.lineTo(xx+150,464);ctx.stroke();ctx.fillStyle='#f7d7a6';ctx.fillRect(xx+148,461,7,6);}
 // Responsive rings for each source: visually expressive, not quantitative decibels.
 const spots=[[.25,.66,mix.traffic,'#f1b58d'],[.48,.60,mix.people,'#d6d5f9'],[.57,.25,mix.birds,'#dbfca2'],[.39,.47,mix.market,'#edafcb'],[.84,.67,mix.water,'#8ae6e2'],[.78,.46,mix.transit,'#ffd49e']];
 for(const [u,v,strength,color] of spots){if(strength<.07)continue;const cx=u*1400,cy=v*520;
  for(let ring=0;ring<3;ring++){const r=11+ring*16+strength*17+(prefersReducedMotion.matches?0:(seconds*17+ring*24)%38);ctx.globalAlpha=clamp((.35-ring*.07)*strength,0,.45);ctx.strokeStyle=color;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();}
 }ctx.globalAlpha=1;
 // Deliberate frame lines give the scene a printed exhibition aesthetic.
 ctx.strokeStyle='#ecf3eb3b';ctx.lineWidth=1;ctx.strokeRect(15,15,1370,490);
 ctx.restore();
}
function drawSpectrum(seconds){
 const ctx=waveCtx,w=waveW,h=waveH;if(!w||!h)return;
 ctx.clearRect(0,0,w,h);
 const bins=engine&&state.playing?new Uint8Array(engine.analyser.frequencyBinCount):null;
 if(bins)engine.analyser.getByteFrequencyData(bins);
 const mix=levelsForState();const activity=Object.values(mix).reduce((a,v)=>a+v,0)/6;
 const n=55,gap=2,bw=(w-gap*(n-1))/n;
 for(let i=0;i<n;i++){
  let value;
  if(bins){const idx=Math.round(Math.pow(i/(n-1),1.65)*(bins.length-2));value=(bins[idx]/255)*1.25;}
  else{value=(.08+Math.abs(Math.sin(i*.37+seconds*.5)*Math.cos(i*.11-seconds*.25))*.25)*(.5+activity);}
  value=clamp(value,.025,.96);
  const bh=Math.max(2,h*value),x=i*(bw+gap);
  ctx.fillStyle=i<n*.33?'#d9fd6f':i<n*.67?'#8de4db':'#bdadff';ctx.globalAlpha=.6+.35*value;ctx.fillRect(x,h-bh,bw,bh);ctx.globalAlpha=1;
 }
}
function animate(time){
 const seconds=prefersReducedMotion.matches?8:time/1000;
 if(cityW&&cityH)drawCity(seconds);
 if(waveW&&waveH)drawSpectrum(seconds);
 raf=requestAnimationFrame(animate);
}

if('ResizeObserver'in window){const ro=new ResizeObserver(resizeCanvas);ro.observe(cityCanvas);ro.observe(waveCanvas);}else{window.addEventListener('resize',resizeCanvas);}
bindInteractions();renderState();renderAudioButton();resizeCanvas();raf=requestAnimationFrame(animate);
