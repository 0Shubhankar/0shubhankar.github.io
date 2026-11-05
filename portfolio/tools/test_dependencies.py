import importlib.util,tempfile,json,sys,contextlib,io
from pathlib import Path
spec=importlib.util.spec_from_file_location('deps',str(Path(__file__).with_name('dependencies.py')));m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
with tempfile.TemporaryDirectory() as tmp:
 m.ROOT=Path(tmp);m.MANIFEST=m.ROOT/'dependencies.json';m.LOCK=m.ROOT/'dependencies.lock.json'
 page=m.ROOT/'index.html';page.write_text('<script src="https://example.test/pkg"></script><link rel="stylesheet" href="https://example.test/pkg/dist/style.css">')
 entries=[dict(id='js',url='https://example.test/pkg@1/main.js',local='vendor/main.js',aliases=['https://example.test/pkg'],pages=['index.html'],mode='local'),dict(id='css',url='https://example.test/pkg@1/style.css',local='vendor/style.css',aliases=['https://example.test/pkg/dist/style.css'],pages=['index.html'],mode='local')]
 m.MANIFEST.write_text(json.dumps({'dependencies':entries}));m.get=lambda u: (b'body {}' if u.endswith('.css') else b'var version = 1;',u)
 def run(cmd):
  sys.argv=['dependencies.py',cmd]
  with contextlib.redirect_stdout(io.StringIO()):return m.main()
 assert run('sync')==0
 assert 'src="vendor/main.js"' in page.read_text() and 'href="vendor/style.css"' in page.read_text()
 assert run('check')==0
 (m.ROOT/'vendor/main.js').write_text('corrupt');assert run('check')!=0
 assert run('sync')==0 and run('check')==0
 entries[0]['url']='https://example.test/pkg@2/main.js';m.MANIFEST.write_text(json.dumps({'dependencies':entries}))
 m.get=lambda u: (b'body {}' if u.endswith('.css') else b'var version = 2;',u)
 assert run('sync')==0 and run('check')==0
 assert 'version = 2' in (m.ROOT/'vendor/main.js').read_text()
 before=page.read_text();entries[0]['url']='https://example.test/pkg@3/main.js';m.MANIFEST.write_text(json.dumps({'dependencies':entries}))
 def failed(u):raise RuntimeError('simulated network failure')
 m.get=failed;assert run('sync')==1;assert page.read_text()==before
 page.write_text(before+'<script src="https://unmanaged.test/x.js"></script>');assert run('check')!=0
print('PASS: exact URL replacement, integrity detection, repair, version update, failed-download safety, unmanaged URL detection.')
