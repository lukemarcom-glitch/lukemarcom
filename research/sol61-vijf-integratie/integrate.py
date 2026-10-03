import json,shutil
from pathlib import Path
r=Path.cwd(); old=r.parent/'lukemarcom'; p=r/'site/landmarks/catalog.json'; c=json.loads(p.read_text()); pending=json.loads((old/'site/landmarks/catalog.json').read_text()); ids=['hoogstraat-353','hoogstraat-357','haringvliet91','posthoornsteeg3','posthoornsteeg1']; replace=['haringvliet89','kaplaars-hoogstraat']; assert len(c)==213
for id in ids:
 assert not any(x['id']==id for x in c)
 c.append(next(x for x in pending if x['id']==id))
 shutil.copytree(old/'site/landmarks'/id,r/'site/landmarks'/id)
for id in replace:
 idx=next(i for i,x in enumerate(c) if x['id']==id);c[idx]=next(x for x in pending if x['id']==id)
p.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
for file in ['haringvliet89/model-source-spec.json','haringvliet89/model.glb','haringvliet89/RONDE22-CORRECTIE.md','kaplaars-hoogstraat/BRONNEN.md','kaplaars-hoogstraat/model-source-spec.json','monnickendam-hoogstraat/BRONNEN.md']:
 shutil.copy2(old/'site/landmarks'/file,r/'site/landmarks'/file)
for name in ['RONDE22-20261003.md']:
 shutil.copy2(old/'docs'/name,r/'docs'/name)
for file in ['site/app.js','site/index.html']:
 p=r/file;p.write_text(p.read_text().replace('sol61-wijn69-20261003','sol61-vijf-20261003'))
print('Integrated',len(c),'Wijnhaven69 retained; background pending rebuild')
