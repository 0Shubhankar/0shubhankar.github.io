from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import re,json
r=Path(__file__).resolve().parents[1];s=(r/'script.js').read_text();items=re.findall(r'smallTitle:\s*"([^"]+)".*?titleLink:\s*"([^"]+)"',s,re.S)
class P(HTMLParser):
 def __init__(self):super().__init__();self.refs=[]
 def handle_starttag(self,t,a):
  for k,v in a:
   if v and (k=='src' or (t=='link' and k=='href')):self.refs.append(v)
rows=[]
for name,entry in items:
 missing=set();seen=set();urls=set()
 def scan(p):
  if p in seen:return
  seen.add(p)
  if not p.exists():missing.add(str(p.relative_to(r)));return
  if p.suffix not in ['.html','.js','.css'] or 'vendor' in p.parts or 'node_modules' in p.parts:return
  t=p.read_text(errors='replace');refs=[]
  if p.suffix=='.html':h=P();h.feed(t);refs=h.refs
  refs+=re.findall(r'''(?:fetch|\$\.getJSON|d3\.(?:json|csv|tsv))\s*\(\s*["']([^"']+)["']''',t)
  for ref in refs:
   u=urlsplit(ref)
   if u.scheme or ref.startswith('//'):urls.add(ref);continue
   if not u.path or '${' in ref:continue
   q=(r/u.path.lstrip('/') if u.path.startswith('/') else p.parent/unquote(u.path)).resolve()
   if q.is_relative_to(r):scan(q)
 scan(r/entry)
 rows.append(dict(name=name,entry=entry,missing=sorted(missing),files_checked=len(seen),html_files=sorted(str(p.relative_to(r)) for p in seen if p.suffix=='.html' and p.exists()),remote=sorted(urls)))
(r/'source-audit.json').write_text(json.dumps(rows,indent=2));print(json.dumps([v for v in rows if v['missing']],indent=2));print('ENTRIES',json.dumps([v['entry'] for v in rows]))
