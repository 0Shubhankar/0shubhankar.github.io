#!/usr/bin/env python3
"""Central dependency inventory, locked sync, and offline integrity checks.
Usage: python3 tools/dependencies.py check|sync|audit
Edit dependencies.json to change a version, then sync and test affected projects.
"""
from pathlib import Path
from html.parser import HTMLParser
import argparse,hashlib,json,os,re,subprocess,tempfile,urllib.parse
ROOT=Path(__file__).resolve().parents[1]
MANIFEST=ROOT/'dependencies.json';LOCK=ROOT/'dependencies.lock.json'
def digest(b):return hashlib.sha256(b).hexdigest()
def get(url):
 with tempfile.TemporaryDirectory() as td:
  p=Path(td)/'asset'
  r=subprocess.run(['curl','-fLsS','--retry','1','--connect-timeout','10','--max-time','45','-w','%{url_effective}',url,'-o',str(p)],capture_output=True,text=True)
  if r.returncode:raise RuntimeError(r.stderr.strip())
  b=p.read_bytes()
  if b.lstrip().lower().startswith((b'<!doctype html',b'<html')):raise RuntimeError('HTML returned instead of library')
  return b,r.stdout
IMPORT=re.compile(r'''((?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s*)["'])([^"']+)(["'])''')
CSS=re.compile(r'''(url\(\s*["']?)([^)'"\s]+)(["']?\s*\))''')
def main():
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('command',choices=['check','sync','audit']);args=parser.parse_args()
 manifest=json.loads(MANIFEST.read_text());old=json.loads(LOCK.read_text()) if LOCK.exists() else {'assets':{}}
 if args.command=='check':
  errors=[]
  for rel,v in old['assets'].items():
   p=ROOT/rel
   if not p.exists() or digest(p.read_bytes())!=v['sha256']:errors.append(rel)
  for entry in manifest['dependencies']:
   if entry['mode']=='remote':continue
   for page in entry['pages']:
    p=ROOT/page;ref=os.path.relpath(ROOT/entry['local'],p.parent)
    if not re.search(r'''["']'''+re.escape(ref)+r'''["']''',p.read_text()):errors.append(page+': missing '+ref)
  allowed={e['url'] for e in manifest['dependencies'] if e['mode']=='remote'}
  unmanaged=[]
  class Inventory(HTMLParser):
   def handle_starttag(self,tag,attrs):
    a=dict(attrs)
    url=a.get('src') if tag=='script' else a.get('href') if tag=='link' and a.get('rel')=='stylesheet' else None
    if url and url.startswith(('https://','http://','//')) and url not in allowed:unmanaged.append(str(page.relative_to(ROOT))+': '+url)
  for page in ROOT.rglob('*.html'):
   if 'node_modules' in page.parts or 'vendor' in page.parts:continue
   source=page.read_text(errors='replace');Inventory().feed(source)
   for match in IMPORT.finditer(source):
    url=match.group(2)
    if url.startswith(('https://','http://','//')) and url not in allowed:unmanaged.append(str(page.relative_to(ROOT))+': '+url)
  errors.extend('Unmanaged external library: '+u for u in sorted(set(unmanaged)))
  if not old['assets']:errors.append('No lockfile assets: run sync')
  print(json.dumps({'assets_checked':len(old['assets']),'errors':errors},indent=2));return bool(errors)
 if args.command=='audit':
  results=[]
  for e in manifest['dependencies']:
   try:
    b,u=get(e['url']);results.append({'id':e['id'],'status':'reachable','bytes':len(b),'resolved':u})
   except Exception as ex:results.append({'id':e['id'],'status':'failed','error':str(ex)})
  (ROOT/'dependency-audit.json').write_text(json.dumps(results,indent=2));print(json.dumps(results,indent=2));return any(x['status']=='failed' for x in results)
 # Stage every asset and all page edits before committing. Failed downloads do not change pages.
 staged={};assets={};visited={};errors=[]
 cache_valid=all((ROOT/k).exists() and digest((ROOT/k).read_bytes())==v['sha256'] for k,v in old['assets'].items())
 def fetch(url,local=None,module=False):
  if url in visited:return visited[url]
  suffix=Path(urllib.parse.urlsplit(url).path).suffix or '.js'
  if suffix not in ['.js','.css','.png','.jpg','.woff','.woff2','.ttf','.eot','.svg']:suffix='.js'
  local=local or 'vendor/shared/'+hashlib.sha256(url.encode()).hexdigest()[:16]+suffix
  visited[url]=local
  previous=old['assets'].get(local)
  if cache_valid and previous and previous['url']==url and (ROOT/local).exists() and digest((ROOT/local).read_bytes())==previous['sha256']:
   # Reuse the entire prior dependency tree; check verifies every cached file.
   
   for key,value in old['assets'].items():assets.setdefault(key,value)
   return local
  raw,resolved=get(url);b=raw
  if suffix in ['.js','.css']:
   text=b.decode('utf-8-sig')
   def child(m):
    ref=m.group(2)
    if ref.startswith(('data:','#','blob:')):return m.group(0)
    if suffix=='.js' and not ref.startswith(('./','../','https://','http://','/')):
     version=re.search(r'/three@([^/]+)/',resolved)
     if ref=='three' and version:
      ref='https://cdn.jsdelivr.net/npm/three@'+version.group(1)+'/build/three.module.js'
     else:raise RuntimeError('Unresolved bare module import '+ref+' in '+url)
    target=urllib.parse.urljoin(resolved,ref)
    childlocal=None
    if suffix=='.css' and not ref.startswith(('http:','https:','/')):
     childlocal=str(((ROOT/local).parent/urllib.parse.urlsplit(ref).path).resolve().relative_to(ROOT))
    sub=fetch(target,childlocal,module=suffix=='.js')
    relative=os.path.relpath(ROOT/sub,(ROOT/local).parent).replace(os.sep,'/')
    if not relative.startswith('.'):relative='./'+relative
    return m.group(1)+relative+m.group(3)
   if suffix=='.css':text=CSS.sub(child,text)
   elif module:text=IMPORT.sub(child,text)
   # Source maps are development-only; omit references to files not bundled.
   text=re.sub(r'(?m)^//# sourceMappingURL=.*$','',text)
   b=text.encode()
   if suffix=='.js':
    with tempfile.NamedTemporaryFile(suffix='.mjs' if module else '.js') as f:
     f.write(b);f.flush();r=subprocess.run(['node','--check',f.name],capture_output=True,text=True)
     if r.returncode:raise RuntimeError('Script-format/syntax check failed for '+url+': '+r.stderr[:500])
  if url.endswith('/dist/leaflet.css'):
   for icon in ['marker-icon.png','marker-icon-2x.png','marker-shadow.png']:
    fetch(urllib.parse.urljoin(url,'images/'+icon),str(Path(local).parent/'images'/icon))
  staged[local]=b;assets[local]={'url':url,'resolved':resolved,'sha256':digest(b),'source_sha256':digest(raw),'bytes':len(b)};return local
 for e in manifest['dependencies']:
  try:
   if e['mode']=='local':fetch(e['url'],e['local'],e.get('module',False))
   else:get(e['url'])
   print('OK',e['id'],flush=True)
  except Exception as ex:errors.append({'id':e['id'],'error':str(ex)});print('FAIL',e['id'],str(ex),flush=True)
 if errors:
  (ROOT/'dependency-errors.json').write_text(json.dumps(errors,indent=2));print('No changes applied; resolve dependency-errors.json and rerun.');return 1
 edits={}
 for e in manifest['dependencies']:
  for page in e['pages']:
   p=ROOT/page;s=edits.get(page,p.read_text())
   target=os.path.relpath(ROOT/e['local'],p.parent).replace(os.sep,'/') if e['mode']=='local' else e['url']
   for alias in e['aliases']:
    s=re.sub(r'''(["'])'''+re.escape(alias)+r'''\1''',lambda match:match.group(1)+target+match.group(1),s)
   edits[page]=s
 for rel,b in staged.items():p=ROOT/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(b)
 for page,s in edits.items():(ROOT/page).write_text(s)
 (ROOT/'dependency-errors.json').unlink(missing_ok=True)
 LOCK.write_text(json.dumps({'assets':assets},indent=2)+'\n')
 print('Synced',len(assets),'locked assets;',len(edits),'pages; remote exceptions:',sum(e['mode']=='remote' for e in manifest['dependencies']))
 return 0
if __name__=='__main__':raise SystemExit(main())
