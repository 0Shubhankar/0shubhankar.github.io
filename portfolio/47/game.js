/* Follow the Money! Browser-only fictional investigation. No transactions or external APIs. */
(() => {
  'use strict';
  const DATA = window.FTM_DATA;
  if (!DATA) throw new Error('Investigation records failed to load.');
  const KEY = 'civic_forensics_follow_the_money_save_v1';
  const $ = id => document.getElementById(id);
  const format = n => '$' + Number(n).toFixed(2) + 'M';
  const money = val => Number(val).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const escapeHtml = val => String(val).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const saved = (() => { try {return JSON.parse(localStorage.getItem(KEY) || 'null');} catch (_) {return null;} })();
  const base = {started:false,caseId:1,solved:[],pinned:[],opened:[],attempts:{},activeTool:'money',ledgerFilter:'all',chainView:'official',chainChecks:{official:null,export:null},evidenceView:'all'};
  let state = {...base};
  if (saved && typeof saved === 'object') {
    state = {...base,...saved,chainChecks:{...base.chainChecks,...(saved.chainChecks||{})}};
    state.solved = Array.isArray(state.solved) ? state.solved.filter(id=>Number.isInteger(id)&&id>=1&&id<=7) : [];
    state.pinned = Array.isArray(state.pinned) ? state.pinned.filter(id=>DATA.documents.some(d=>d.id===id)) : [];
    state.opened = Array.isArray(state.opened) ? state.opened.filter(id=>DATA.documents.some(d=>d.id===id)) : [];
    const next = Math.min(7,state.solved.length+1);
    state.caseId = Math.max(1,Math.min(next,Number(state.caseId)||1));
  }
  const save = () => {try{localStorage.setItem(KEY,JSON.stringify(state));}catch(_){}};
  const caseData = () => DATA.cases.find(c=>c.id===state.caseId);
  const nextUnlocked = () => Math.min(7,state.solved.length+1);
  const isSolved = id => state.solved.includes(id);
  const pinDoc = id => {state.pinned=state.pinned.includes(id)?state.pinned.filter(x=>x!==id):[...state.pinned,id];save();renderEvidence();if($('documentDialog').open)showDoc(id);renderNotebookIfOpen();};

  function showInvestigation(){
    state.started = true; save(); $('opening').classList.add('hidden'); $('investigation').classList.remove('hidden'); render();
  }
  function currentFocus(){ $('investigation').scrollIntoView({behavior:'smooth',block:'start'}); }
  $('startButton').addEventListener('click',()=>{showInvestigation();currentFocus();});
  $('helpButton').addEventListener('click',()=>$('helpDialog').showModal());
  $('closeHelp').addEventListener('click',()=>$('helpDialog').close());
  $('helpDone').addEventListener('click',()=>$('helpDialog').close());
  $('closeDocument').addEventListener('click',()=>$('documentDialog').close());
  $('documentDialog').addEventListener('click',evt=>{if(evt.target===$('documentDialog'))$('documentDialog').close();});
  $('helpDialog').addEventListener('click',evt=>{if(evt.target===$('helpDialog'))$('helpDialog').close();});
  $('resetButton').addEventListener('click',()=>{
    if (!window.confirm('Reset all seven investigations and remove the saved evidence pins from this browser?')) return;
    state={...base,solved:[],pinned:[],opened:[],attempts:{},chainChecks:{official:null,export:null}};save();
    $('investigation').classList.add('hidden');$('opening').classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});
  });
  $('viewPinned').addEventListener('click',()=>{
    state.evidenceView=state.evidenceView==='all'?'pinned':'all';save();renderEvidence();
  });

  function render(){
    const c=caseData();
    $('caseHeadline').textContent=c.title;
    $('caseSubtitle').textContent=c.subtitle;
    $('caseCounter').textContent=`CASE ${String(c.id).padStart(2,'0')} / 07`;
    $('caseProgressLabel').textContent=`${state.solved.length} of 7 cases resolved`;
    $('progressFill').style.width=`${state.solved.length/7*100}%`;
    $('caseTopic').textContent=c.topic;
    $('missionHeading').textContent=c.missionTitle;
    $('missionText').textContent=c.mission;
    renderCaseStrip();renderEvidence();renderMission();renderTool();
  }
  function renderCaseStrip(){
    $('caseStrip').innerHTML=DATA.cases.map(c=>{
      const locked=c.id>nextUnlocked(); const active=c.id===state.caseId; const done=isSolved(c.id);
      return `<button class="case-pill ${locked?'locked':''} ${active?'active':''} ${done?'complete':''}" type="button" data-case="${c.id}" ${locked?'disabled':''} aria-current="${active?'step':'false'}"><span>${done?'✓ ':locked?'⌁ ':''}${String(c.id).padStart(2,'0')} / ${locked?'SEALED':done?'CLOSED':'OPEN'}</span><strong>${escapeHtml(c.short)}</strong></button>`;
    }).join('');
    $('caseStrip').querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>{
      state.caseId=Number(btn.dataset.case);state.evidenceView='all';save();render();currentFocus();
    }));
  }
  function renderEvidence(){
    const max=nextUnlocked();
    const eligible=DATA.documents.filter(d=>d.case<=max);
    let view=eligible;
    if(state.evidenceView==='pinned')view=eligible.filter(d=>state.pinned.includes(d.id));
    view=[...view].sort((a,b)=>{
      const ap=a.case===state.caseId?0:1, bp=b.case===state.caseId?0:1;
      return ap-bp||a.case-b.case;
    });
    $('evidenceCount').textContent=`${state.pinned.length} pinned`;
    $('viewPinned').textContent=state.evidenceView==='all'?'VIEW PINNED EVIDENCE ↗':'SHOW ALL UNLOCKED ↗';
    $('evidenceBoard').innerHTML=view.length?view.map(d=>`<button type="button" class="evidence-card ${state.pinned.includes(d.id)?'pinned':''}" data-doc="${d.id}" aria-label="Open ${escapeHtml(d.title)}"><span class="paperclip">${state.pinned.includes(d.id)?'●':'⌁'}</span><span class="doc-class">${escapeHtml(d.type)} / ${d.id}</span><strong>${escapeHtml(d.title)}</strong><span class="doc-meta">${escapeHtml(d.subtitle)}</span></button>`).join(''):'<div class="all-clear"><strong>No pinned documents yet.</strong><p>Open a record and press PIN TO CASE to add it here.</p></div>';
    $('evidenceBoard').querySelectorAll('[data-doc]').forEach(btn=>btn.addEventListener('click',()=>showDoc(btn.dataset.doc)));
  }
  function showDoc(id){
    const doc=DATA.documents.find(d=>d.id===id); if(!doc)return;
    if(!state.opened.includes(id)){state.opened.push(id);save();}
    const pinned=state.pinned.includes(id);
    $('documentContent').innerHTML=`<div class="doc-id">EXHIBIT ${doc.id}</div><h2 id="dialogTitle">${escapeHtml(doc.title)}</h2><p>${escapeHtml(doc.subtitle)}</p><div class="document-body">${escapeHtml(doc.body)}</div><div class="document-foot"><button type="button" class="doc-pin ${pinned?'active':''}" id="pinDocument">${pinned?'UNPIN EVIDENCE':'PIN TO CASE + '}</button><div class="doc-provenance">SOURCE / ${escapeHtml(doc.source)}<br>Fictional record · ${escapeHtml(doc.type)}</div></div>`;
    $('pinDocument').addEventListener('click',()=>pinDoc(id));
    if(!$('documentDialog').open)$('documentDialog').showModal();
  }
  function renderMission(){
    const c=caseData();
    $('calculatorSheet').innerHTML=c.rows.map(([name,value])=>`<div class="calcline"><span>${escapeHtml(name)}</span><strong class="${value==='?'?'unknown':''}">${escapeHtml(value)}</strong></div>`).join('');
    if(isSolved(c.id)){
      $('missionForm').innerHTML= c.id===7 ? finalResultHTML() : `<div class="all-clear"><h3>CASE CLOSED ✓</h3><p>Your finding has been added to the investigation notebook. Revisit the documents if you wish, or open the next file.</p></div><div class="submit-row"><button class="action action-primary" id="nextCaseButton" type="button">${c.id===7?'READ THE FINAL REPORT':'OPEN NEXT CASE'} <span>↗</span></button></div>`;
      $('missionFeedback').innerHTML='';
      const nextBtn=$('nextCaseButton');
      if(nextBtn) nextBtn.addEventListener('click',()=>{
        if(c.id===7){$('missionForm').querySelector('.verdict-panel')?.scrollIntoView({behavior:'smooth'});return;}
        state.caseId=Math.min(7,c.id+1);save();render();currentFocus();
      });
      $('exportReport')?.addEventListener('click',exportReport);
      return;
    }
    const method = c.id===2 ? '<details class="method-note"><summary>OPEN THE CALCULATION METHOD</summary><p>Annual coupon = face value × coupon rate. Coverage = recurring cash available for debt service ÷ annual scheduled debt service. This fictional issue has no principal due until maturity.</p></details>' : c.id===5 ? '<details class="method-note"><summary>OPEN THE VALUATION METHOD</summary><p>Bond price = Σ [annual coupon ÷ (1 + market yield)<sup>t</sup>] + [face value ÷ (1 + market yield)<sup>n</sup>], for t from 1 to n. Discount the coupon and principal separately.</p></details>' : '';
    $('missionForm').innerHTML=c.questions.map(q=>{
      if(q.type==='number')return `<label class="input-label">${escapeHtml(q.label)}<input id="answer-${q.id}" inputmode="decimal" type="number" step="any" autocomplete="off" placeholder="${escapeHtml(q.placeholder)}"></label>`;
      return `<label class="input-label">${escapeHtml(q.label)}<select id="answer-${q.id}">${q.options.map(([v,label])=>`<option value="${escapeHtml(v)}">${escapeHtml(label)}</option>`).join('')}</select></label>`;
    }).join('')+method+`<div class="submit-row"><button type="button" class="action action-primary" id="submitCase">SUBMIT FINDING <span>↗</span></button><span class="submit-helper">Pin relevant records before submitting. You can retry without penalty.</span></div>`;
    $('missionFeedback').innerHTML='';
    $('submitCase').addEventListener('click',submitCase);
    $('missionForm').querySelectorAll('input').forEach(input=>input.addEventListener('keydown',ev=>{if(ev.key==='Enter')submitCase();}));
  }
  function finalResultHTML(){
    return `<div class="verdict-panel"><span class="evidence-label">INVESTIGATION COMPLETE</span><h4>The financial mystery, untangled.</h4><p><strong>The $12 million was not missing.</strong> The trustee confirms $8 million in contingency and $4 million in debt-service reserves. The $8 million Alder payment did settle, but its milestone certificate conflicts with physical inspection. The additional $3.2 million authorization is not a settled payment.</p><p>The evidence supports a serious control concern, <em>not</em> a definitive finding of theft. Further examination of personnel, procurement, and independent site records would be required.</p><button class="action action-primary" type="button" id="exportReport">EXPORT YOUR CASE REPORT <span>↓</span></button><div class="evidence-inline">Report generated locally in your browser. No information is sent to a server.</div></div>`;
  }
  function submitCase(){
    const c=caseData();
    const answers={};
    for(const q of c.questions){answers[q.id]=$(`answer-${q.id}`)?.value.trim()||'';}
    state.attempts[c.id]=(state.attempts[c.id]||0)+1;save();
    let correct=false;
    const num = () => answers.amount!==''&&Number.isFinite(Number(answers.amount))?Number(answers.amount):NaN;
    const near=(a,b,tol)=>Number.isFinite(a)&&Math.abs(a-b)<=tol;
    switch(c.id){
      case 1: correct=near(num(),12,.011)&&answers.finding==='restricted'; break;
      case 2: correct=near(num(),5.2,.011)&&near(Number(answers.coverage),8.1/5.2,.03)&&answers.finding==='financing'; break;
      case 3: correct=answers.finding==='export'&&state.chainChecks.official===true&&state.chainChecks.export===false;break;
      case 4: correct=near(num(),25,.011)&&answers.finding==='oracle';break;
      case 5: correct=near(num(),bondPrice(),.26)&&answers.finding==='price';break;
      case 6: correct=near(num(),0,.011)&&answers.finding==='pending';break;
      case 7: correct=answers.fiscal==='restricted'&&answers.construction==='question'&&answers.digital==='pending';break;
    }
    const missing=c.requires.filter(id=>!state.pinned.includes(id));
    if(missing.length){feedback('Your case needs documentary support.','Pin the relevant records before filing a finding. Look for the primary financial, technical, or settlement documents.');return;}
    if(!correct){
      const special=c.id===3 && (state.chainChecks.official===null||state.chainChecks.export===null) ? 'Use the Civic Chain tool to verify both the official ledger and the exported copy before submitting.' : 'One or more conclusions do not reconcile with the records. Reopen the relevant evidence, examine the amounts and try again.';
      feedback('The investigator’s desk returned your finding.',special);return;
    }
    state.solved=[...new Set([...state.solved,c.id])].sort((a,b)=>a-b);
    save(); render();
    if(c.id===7){feedback('FINAL VERDICT FILED','You distinguished restricted cash, a physically disputed payment, and a digitally authorized but unsettled instruction.',true);}
    else feedback('CASE CLOSED — SUPPORTED BY THE RECORD','The finding is supported by the calculation, classification and pinned documents. You can open the next case.',true);
  }
  function feedback(title,text,ok=false){$('missionFeedback').innerHTML=`<div class="feedback ${ok?'ok':''}"><strong>${escapeHtml(title)}</strong>${escapeHtml(text)}</div>`;}
  function bondPrice(){ const y=.071,c=5.2,n=6;let v=100/Math.pow(1+y,n);for(let i=1;i<=n;i++)v+=c/Math.pow(1+y,i);return v; }

  function renderTool(){
    document.querySelectorAll('[data-tool]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tool===state.activeTool)));
    switch(state.activeTool){case 'money':renderMoney();break;case 'ledger':renderLedger();break;case 'chain':renderChain();break;case 'notebook':renderNotebook();break;}
  }
  document.querySelectorAll('[data-tool]').forEach(btn=>btn.addEventListener('click',()=>{state.activeTool=btn.dataset.tool;save();renderTool();}));
  function renderMoney(){
    $('toolContent').innerHTML=`<p class="tool-caption">Follow the cash, not just the headlines. Bond proceeds are financing cash; transfers between restricted accounts do not disappear from the total.</p>
    <svg class="money-map" viewBox="0 0 560 290" role="img" aria-label="Cash flow diagram: investors send $100 million to trustee, trustee disburses $88 million to contractors and keeps $8 million and $4 million in restricted reserves.">
    <defs><marker id="arrowCash" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="#b5d8b0"/></marker><marker id="arrowPending" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="#e8a67e"/></marker></defs>
    <path d="M110 144H208" stroke="#b5d8b0" stroke-width="3" marker-end="url(#arrowCash)"/><path d="M318 144H413" stroke="#b5d8b0" stroke-width="3" marker-end="url(#arrowCash)"/><path d="M272 167V230H405" stroke="#b5d8b0" stroke-width="2" marker-end="url(#arrowCash)"/><path d="M272 120V61H405" stroke="#b5d8b0" stroke-width="2" marker-end="url(#arrowCash)"/>
    <g><rect x="12" y="110" width="97" height="68" fill="#d8e9b0" stroke="#aacc8e"/><text x="60" y="137" text-anchor="middle" fill="#223a2b" font-size="12" font-weight="bold">INVESTORS</text><text x="60" y="157" text-anchor="middle" fill="#223a2b" font-size="15">$100M</text></g>
    <g><rect x="210" y="104" width="108" height="75" fill="#f1e7cc" stroke="#94ba9c"/><text x="264" y="130" text-anchor="middle" fill="#1b392e" font-size="11" font-weight="bold">BOND TRUSTEE</text><text x="264" y="147" text-anchor="middle" fill="#1b392e" font-size="10">master → $0</text><text x="264" y="163" text-anchor="middle" fill="#1b392e" font-size="10">after transfers</text></g>
    <g><rect x="414" y="105" width="135" height="73" fill="#f1cfbc"/><text x="481" y="132" text-anchor="middle" fill="#322a23" font-size="12" font-weight="bold">CONTRACTORS</text><text x="481" y="154" text-anchor="middle" fill="#322a23" font-size="18">$88M PAID</text></g>
    <g><rect x="407" y="27" width="140" height="61" fill="#d1e5d3"/><text x="477" y="51" text-anchor="middle" fill="#253d2d" font-size="11">CONTINGENCY</text><text x="477" y="74" text-anchor="middle" fill="#253d2d" font-size="17">$8M HELD</text></g>
    <g><rect x="407" y="218" width="140" height="59" fill="#d1e5d3"/><text x="477" y="241" text-anchor="middle" fill="#253d2d" font-size="11">DEBT RESERVE</text><text x="477" y="262" text-anchor="middle" fill="#253d2d" font-size="17">$4M HELD</text></g>
    <text x="148" y="128" fill="#c7ed8b" font-size="11">+$100M</text><text x="334" y="129" fill="#d9e9d6" font-size="11">−$88M</text><text x="282" y="74" fill="#d9e9d6" font-size="10">−$8M</text><text x="283" y="248" fill="#d9e9d6" font-size="10">−$4M</text></svg>
    <div class="map-caption">SETTLED PROJECT CASH: $100M = $88M TO CONTRACTORS + $8M CONTINGENCY + $4M DEBT RESERVE.</div>
    ${state.caseId>=6?'<p class="map-caption" style="color:#ecc9a9">ALERT: Additional $3.2M digital authorization is NOT a settled cash outflow.</p>':''}`;
  }
  function renderLedger(){
    const choices=[['all','ALL RECORDS'],['contractor','CONTRACTORS'],['internal','RESTRICTED TRANSFERS'],['instruction','UNSETTLED']];
    const filtered=DATA.transactions.filter(t=>(t.type!=='instruction'||nextUnlocked()>=6)&&(state.ledgerFilter==='all'||t.type===state.ledgerFilter));
    $('toolContent').innerHTML=`<div class="filter-row">${choices.map(([id,label])=>`<button class="${state.ledgerFilter===id?'active':''}" type="button" data-filter="${id}">${label}</button>`).join('')}</div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>ID</th><th>FROM</th><th>TO</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>${filtered.map(t=>`<tr class="${t.status!=='SETTLED'?'pending':''}" title="${escapeHtml(t.explain)}"><td>${t.id}</td><td>${escapeHtml(t.from)}</td><td>${escapeHtml(t.to)}</td><td>${format(t.amount)}</td><td>${t.status}</td></tr>`).join('')}</tbody></table></div><p class="ledger-legend">Contractor disbursements total $88M. Internal transfers of $8M and $4M move money between trustee-controlled accounts; they do not create additional external spending. Instructions marked NOT SETTLED are excluded from cash totals.</p>`;
    $('toolContent').querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{state.ledgerFilter=b.dataset.filter;save();renderLedger();}));
  }
  function renderChain(){
    if(nextUnlocked()<3){$('toolContent').innerHTML='<p class="tool-caption">🔒 The Civic Chain investigation unlocks in Case 03. First trace where the bond proceeds went.</p>';return;}
    const exported=state.chainView==='export';
    const list=DATA.blocks.map(b=>({...b,payload: exported&&b.height===3?'TX-005|6.0|ALDER|SETTLED':b.payload}));
    $('toolContent').innerHTML=`<p class="tool-caption">Inspect two copies of a permissioned financial record. Block hashes use SHA-256 over the height, previous hash, and payload; this is a teaching model, not a deployed blockchain.</p><div class="chain-controls"><button type="button" class="small-control ${!exported?'active':''}" data-chainview="official">VALIDATOR COPY</button><button type="button" class="small-control ${exported?'active':''}" data-chainview="export">UNSIGNED EXPORT</button><button type="button" class="small-control" id="verifyChain">VERIFY SHA-256 ↗</button></div><div class="chain-blocks">${list.map(b=>`<div class="chain-block ${exported&&b.height===3?'bad':''}"><strong>BLOCK 0${b.height}</strong><div>${escapeHtml(b.payload.split('|')[0])}</div><code>${escapeHtml(b.hash.slice(0,10))}…</code></div>`).join('')}</div><div id="chainResult" class="chain-status">${state.chainChecks[state.chainView]===null?'Not yet verified. Select a copy and run the checker.':state.chainChecks[state.chainView]?'✓ This copy matches the recorded chain hashes.':'✗ This copy fails the recorded chain-hash check.'}</div>`;
    $('toolContent').querySelectorAll('[data-chainview]').forEach(btn=>btn.addEventListener('click',()=>{state.chainView=btn.dataset.chainview;save();renderChain();}));
    $('verifyChain').addEventListener('click',()=>verifyChain(list));
  }
  // FIPS 180-4 SHA-256 fallback for local previews without Web Crypto.
  // Uses the same UTF-8 message and 32-bit operations as the browser's SHA-256.
  function sha256Fallback(message){
    const K=[
      0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
      0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
      0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
      0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
      0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
      0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
      0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
      0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
    ];
    const H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    const bytes=Array.from(new TextEncoder().encode(message));
    const bitLen=bytes.length*8;
    bytes.push(0x80);
    while(bytes.length%64!==56)bytes.push(0);
    const high=Math.floor(bitLen/0x100000000),low=bitLen>>>0;
    for(let i=3;i>=0;i--)bytes.push((high>>>8*i)&255);
    for(let i=3;i>=0;i--)bytes.push((low>>>8*i)&255);
    const rotr=(v,n)=>(v>>>n)|(v<<(32-n));
    for(let off=0;off<bytes.length;off+=64){
      const W=Array(64);
      for(let i=0;i<16;i++)W[i]=((bytes[off+i*4]<<24)|(bytes[off+i*4+1]<<16)|(bytes[off+i*4+2]<<8)|bytes[off+i*4+3])>>>0;
      for(let i=16;i<64;i++){
        const x=W[i-15],y=W[i-2];
        const s0=rotr(x,7)^rotr(x,18)^(x>>>3),s1=rotr(y,17)^rotr(y,19)^(y>>>10);
        W[i]=(W[i-16]+s0+W[i-7]+s1)>>>0;
      }
      let [a,b,c,d,e,f,g,h]=H;
      for(let i=0;i<64;i++){
        const S1=rotr(e,6)^rotr(e,11)^rotr(e,25);
        const choose=(e&f)^(~e&g);
        const t1=(h+S1+choose+K[i]+W[i])>>>0;
        const S0=rotr(a,2)^rotr(a,13)^rotr(a,22);
        const majority=(a&b)^(a&c)^(b&c);
        const t2=(S0+majority)>>>0;
        h=g;g=f;f=e;e=(d+t1)>>>0;d=c;c=b;b=a;a=(t1+t2)>>>0;
      }
      const v=[a,b,c,d,e,f,g,h];
      for(let i=0;i<8;i++)H[i]=(H[i]+v[i])>>>0;
    }
    return H.map(x=>x.toString(16).padStart(8,'0')).join('');
  }
  async function verifyChain(blocks){
    const result=$('chainResult');result.textContent='Checking hash commitments…';
    try{
      let previous='GENESIS';let valid=true;
      for(const b of blocks){
        const content=`${b.height}|${b.prev}|${b.payload}`;
        let hash;
        if(window.crypto && window.crypto.subtle){
          const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(content));
          hash=[...new Uint8Array(digest)].map(v=>v.toString(16).padStart(2,'0')).join('');
        } else hash=sha256Fallback(content);
        if(b.prev!==previous||hash!==b.hash)valid=false;
        previous=b.hash;
      }
      state.chainChecks[state.chainView]=valid;save();
      result.textContent=valid?'✓ VERIFIED: Every payload, pointer and SHA-256 digest matches the validator chain.':'✗ MISMATCH: One or more payloads no longer match the signed-off hash sequence. Do not trust this exported copy.';
      result.classList.toggle('bad',!valid);
    }catch(error){result.textContent='Verification unavailable: '+error.message;result.classList.add('bad');}
  }
  function renderNotebookIfOpen(){if(state.activeTool==='notebook')renderNotebook();}
  function renderNotebook(){
    const unlocked=state.solved.length;
    $('toolContent').innerHTML=`<div class="notebook-title">The investigation, so far</div><div class="notebook-row"><span>DOCUMENTS OPENED</span><strong>${state.opened.length} / ${DATA.documents.filter(d=>d.case<=nextUnlocked()).length} unlocked</strong></div><div class="notebook-row"><span>EVIDENCE PINNED</span><strong>${state.pinned.length}</strong></div><div class="notebook-row"><span>CASES SOLVED</span><strong>${unlocked} / 7</strong></div><div class="notebook-row"><span>PROJECT CASH RECONCILIATION</span><strong>$100M − $88M = $12M held</strong></div>${isSolved(2)?'<div class="notebook-row"><span>ANNUAL COUPON ON $100M</span><strong>$5.20M</strong></div>':''}${isSolved(5)?`<div class="notebook-row"><span>BOND PRICE AT 7.10%, SIX YEARS</span><strong>$${money(bondPrice())} / $100</strong></div>`:''}<p class="notebook-note">You are not grading the city's honesty from a single number. Each verified claim needs a matching document, a money trail, or independent confirmation.</p>`;
  }
  function exportReport(){
    const content=`FOLLOW THE MONEY! — INDEPENDENT CASE REPORT\n\nFictional interactive investigation. Not an actual audit.\n\nIssue proceeds: $100,000,000\nSettled construction payments: $88,000,000\nRestricted trustee-held balance: $12,000,000 ($8M contingency; $4M debt reserve)\nFixed annual bond coupon: $5,200,000\nIndicative price at 7.10% yield with six years remaining: $${bondPrice().toFixed(2)} per $100 face\n\nFinding 1: The reported $12M gap reconciles to independent trustee accounts.\nFinding 2: Alder's $8M payment settled, but an 80% authorized milestone conflicts with a 55% independent site inspection. This raises a serious control question; misconduct is not proved by this discrepancy alone.\nFinding 3: A separate $3.2M digital instruction was authorized but is not a settled bank cash outflow.\nFinding 4: An anonymous spreadsheet copy changed a payment from $8M to $6M, producing a SHA-256 hash-chain mismatch relative to the validator copy.\n\nEvidence pinned: ${state.pinned.join(', ')}\nCases resolved: ${state.solved.length} / 7\n\nReminder: Digital records alone do not establish that construction work occurred or that off-chain funds settled.\n`;
    const blob=new Blob([content],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download='follow-the-money-case-report.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);
  }

  if(state.started)showInvestigation();
})();
