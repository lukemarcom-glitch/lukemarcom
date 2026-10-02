import json,math,numpy as np
from pathlib import Path
from PIL import Image,ImageDraw
p=Path('research/expansion-20261002/huis-met-beelden')
A=np.linalg.solve(np.array([[1772,2176,1],[2152,2520,1],[2308,2104,1]]),np.array([[3700,2257],[3815,2309],[3834,2196]]))
# Local correction: same third courtyard of 50/48/46 row on working map.
control=np.array([3788,2778,1]);shift=np.array([4266,2259])-control@A;A[2]+=shift
src=[[3758,2706],[3808,2695],[3819,2756],[3768,2765]]
def world(v):x,y=v;return np.array([.5997517501225222*x+.0030063732192179833*y-1766.1431066304265,.006472424781321013*x-.5988433138175892*y+1433.7769146089718])
q=[world(np.array([*v,1])@A) for v in src];front=(q[0]+q[1])/2;back=(q[2]+q[3])/2;w=float(np.linalg.norm(q[1]-q[0]));dep=float(np.linalg.norm(back-front));a=math.atan2(*(q[1]-q[0])[::-1])+math.pi;center=(front+back)/2
# x west-east, z positive points toward water/north.
s={'colors':{'brick':'#b39a76','stone':'#bca98b','trim':'#d5c8af','roof':'#5f615b','glass':'#53605c','dark':'#3d4234'},'parts':[{'w':w,'d':dep,'h':15.4,'windows':False,'roof':'flat','roofHeight':0,'wall':'brick'}],'facadeWindows':[],'accents':[],'columns':[],'facadeReliefs':[]}
def b(x,y,z,w,h,d,mat='stone'):s['accents'].append(dict(x=x,y=y,z=z,w=w,h=h,d=d,material=mat))
z=dep/2
for x in [-w*.31,0,w*.31]:
 for y,hh in [(6.1,3.1),(10.4,2.7),(13.65,1.25)]:
  s['facadeWindows'].append(dict(x=x,y=y,z=z+.05,w=w*.20,h=hh));b(x,y+hh/2+.15,z+.22,w*.23,.2,.35)
for x in [-w*.31,w*.31]:s['facadeWindows'].append(dict(x=x,y=1.7,z=z+.06,w=w*.20,h=1.5))
# Horizontal masonry rustication, shallow grooves without extra silhouette.
for y in np.arange(.45,15.35,.42):b(0,float(y),z+.018,w,.018,.025,'stone')
for y,h,dd in [(3.4,.23,.4),(8.1,.26,.34),(12.15,.3,.37),(15.25,.35,.48),(15.55,.19,.65)]:b(0,y,z+.16,w+.15,h,dd)
# Arched wooden doorway silhouette. Not a glass arch.
r=.80;out=[[-r,0],[r,0],[r,2.4]]+[[math.cos(t)*r,2.4+math.sin(t)*r] for t in np.linspace(0,math.pi,17)]+[[-r,0]]
s['facadeReliefs'].append(dict(x=0,y=.1,z=z+.10,depth=.1,material='dark',outline=out));b(0,1.5,z+.24,.035,2.8,.03,'stone')
for x in [-1.04,1.04]:
 s['columns'].append(dict(x=x,y=1.63,z=z+.35,radius=.12,h=3.0));b(x,.18,z+.32,.38,.25,.45);b(x,3.10,z+.33,.40,.25,.45)
b(0,3.55,z+.36,2.65,.4,.62);b(0,3.83,z+.4,2.8,.15,.72)
# The two documented allegorical statues are low-detail silhouettes, no invented faces.
for x in [-1.05,1.05]:
 b(x,4.03,z+.42,.44,.2,.42);s['columns'].extend([dict(x=x,y=4.67,z=z+.42,radius=.18,h=1.10),dict(x=x,y=5.33,z=z+.42,radius=.14,h=.25)])
 b(x,4.95,z+.42,.5,.16,.30)
poly=[(center+np.array([math.cos(a)*x+math.sin(a)*zz,math.sin(a)*x-math.cos(a)*zz])).tolist()for x,zz in [(-w/2,dep/2),(w/2,dep/2),(w/2,-dep/2),(-w/2,-dep/2)]]
m={'id':'huis-met-de-beelden','name':'Huis met de Beelden','researchOnly':True,'modelFamily':'city33','modelWidth':w,'modelDepth':dep,'height':15.65,'center':center.tolist(),'angle':a,'polygon':poly,'uncertaintyMeters':10,'modelSpec':s,'placementNote':'Haringvliet46, Z18 perceel244. Alleen voorbouw tot noordrand binnenhof. Lokale kaartpassing met hof46 als translatiecontrole; onzekerheid10m. Gevelhoogte15.4m foto-afgeleide benadering; neutrale vlakke afsluiting achter kroonlijst, historische dakvorm niet bewezen. Geen achtervolume zonder aanvullend bewijs.'}
(p/'model-draft.json').write_text(json.dumps(m,indent=2,ensure_ascii=False));(p/'placement.json').write_text(json.dumps({'sourceFrontAndBack':src,'affine':A.tolist(),'localCorrection':shift.tolist(),'courtyardControlSource':[3788,2778],'courtyardControlTarget':[4266,2259],'width':w,'depth':dep,'uncertaintyMeters':10},indent=2))
im=Image.open('site/onderzoek/centrum-voor-mei-1940.jpg');box=(4195,2190,4335,2305);im=im.crop(box).resize((1120,920));d=ImageDraw.Draw(im);points=[np.array([*v,1])@A for v in src];d.polygon([((x-box[0])*8,(y-box[1])*8)for x,y in points],outline='red',width=5);im.save(p/'placement-overlay.png');print(w,dep,center)
