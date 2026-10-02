import json,math,numpy as np
from pathlib import Path
from PIL import Image,ImageDraw
p=Path('research/expansion-20261002/rusthuis-haringvliet50')
A=np.linalg.solve(np.array([[1772,2176,1],[2152,2520,1],[2308,2104,1]]),np.array([[3700,2257],[3815,2309],[3834,2196]]))
# Local correction: same third courtyard of 50/48/46 row on working map.
control=np.array([3788,2778,1]);shift=np.array([4266,2259])-control@A;A[2]+=shift
src=[[3632,2734],[3707,2716],[3721,2795],[3650,2810]]
def world(v):x,y=v;return np.array([.5997517501225222*x+.0030063732192179833*y-1766.1431066304265,.006472424781321013*x-.5988433138175892*y+1433.7769146089718])
q=[world(np.array([*v,1])@A) for v in src];front=(q[0]+q[1])/2;back=(q[2]+q[3])/2;w=float(np.linalg.norm(q[1]-q[0]));dep=float(np.linalg.norm(back-front));a=math.atan2(*(q[1]-q[0])[::-1])+math.pi;center=(front+back)/2
# Conservative forward block; the rear courtyard remains unbuilt.
s={'colors':{'brick':'#785b48','stone':'#b8b2a4','trim':'#d7d0bd','roof':'#585954','glass':'#536260','dark':'#353c35'},'parts':[{'w':w,'d':dep,'h':12.4,'windows':False,'roof':'flat','wall':'brick'}],'facadeWindows':[],'accents':[],'columns':[],'facadeReliefs':[]}
def b(x,y,z,w,h,d,mat='stone'):s['accents'].append(dict(x=x,y=y,z=z,w=w,h=h,d=d,material=mat))
z=dep/2
for j in range(5):
 x=(j-2)*w*.19
 for y,hh in [(4.4,2.9),(8.15,2.45),(10.9,1.55)]:
  if j==2 and y==4.4:continue
  s['facadeWindows'].append(dict(x=x,y=y,z=z+.05,w=w*.12,h=hh));b(x,y+hh/2+.18,z+.19,w*.15,.18,.25)
 if j!=2:b(x,.85,z+.06,w*.10,.95,.12,'glass')
# Raised ground floor and central basement door.
b(0,1.25,z+.015,w,2.5,.06);b(0,.87,z+.07,.86,1.7,.12,'dark')
b(0,4.32,z+.11,1.65,3.0,.15,'dark')
for x in [-.9,.9]:b(x,4.3,z+.23,.20,3.5,.27)
b(0,6.14,z+.22,2.2,.24,.42);b(0,5.45,z+.20,1.5,.5,.12,'glass');b(0,4.05,z+.24,.07,2.35,.08)
# Central window surround and balustrade under its sill.
for x in [-w*.082,w*.082]:b(x,8.1,z+.25,.18,2.75,.26)
b(0,6.61,z+.24,w*.19,.16,.3);b(0,7.05,z+.24,w*.19,.16,.3)
for x in [-.7,-.35,0,.35,.7]:b(x,6.83,z+.25,.08,.38,.12)
# Double stairs rise laterally to landing; exposed cellar door below.
b(0,2.31,z+.78,2.0,.22,1.5)
for side in [-1,1]:
 for k in range(8):
  h=.28*(k+1);x=side*(3.25-k*.31);b(x,h/2,z+.72,.33,h,1.3)
  if k%2==0:b(x,h+.45,z+1.28,.05,.9,.05,'dark')
 # A source-shaped diagonal rail is a shallow extruded polygon.
 s['facadeReliefs'].append(dict(x=0,y=0,z=z+1.25,depth=.06,material='dark',outline=[[side*3.4,.75],[side*1.0,3.13],[side*1.0,3.23],[side*3.4,.85]]))
for x in [-.95,.95]:b(x,2.85,z+1.28,.06,1.1,.06,'dark')
b(0,3.36,z+1.28,1.95,.07,.07,'dark')
# Cornice and broad central triangular pediment visible in XXV301/PDF p7.
for y,hh,dd in [(2.55,.18,.26),(6.35,.20,.29),(12.2,.26,.42),(12.48,.17,.60)]:b(0,y,z+.17,w+.14,hh,dd)
s['facadeReliefs'].append(dict(x=0,y=12.52,z=z+.12,depth=.20,material='stone',outline=[[-w*.36,0],[w*.36,0],[0,2.05]]))
s['facadeReliefs'].append(dict(x=0,y=12.67,z=z+.34,depth=.05,material='brick',outline=[[-w*.28,0],[w*.28,0],[0,1.52]]))
poly=[(center+np.array([math.cos(a)*x+math.sin(a)*zz,math.sin(a)*x-math.cos(a)*zz])).tolist()for x,zz in [(-w/2,dep/2),(w/2,dep/2),(w/2,-dep/2),(-w/2,-dep/2)]]
m={'id':'rusthuis-haringvliet50','name':'Rusthuis Haringvliet 50','researchOnly':True,'modelFamily':'city33','modelWidth':w,'modelDepth':dep,'height':14.6,'center':center.tolist(),'angle':a,'polygon':poly,'uncertaintyMeters':10,'modelSpec':s,'placementNote':'Nummer 50, Z18 perceel 503. Alleen voorbouw tot binnenhof. Plaats onzeker 10 m; hoogte 12.4 m en fronton circa 2 m foto-afgeleid. Geen bewezen dakvorm: neutrale afsluiting achter fronton. Kleuren materiaalinterpretatie zonder exacte verfbron.'}
(p/'model-draft.json').write_text(json.dumps(m,indent=2,ensure_ascii=False));(p/'placement.json').write_text(json.dumps({'sourceFrontAndBack':src,'affine':A.tolist(),'localCorrection':shift.tolist(),'courtyardControlSource':[3788,2778],'courtyardControlTarget':[4266,2259],'width':w,'depth':dep,'uncertaintyMeters':10},indent=2))
im=Image.open('site/onderzoek/centrum-voor-mei-1940.jpg');box=(4160,2190,4300,2305);im=im.crop(box).resize((1120,920));d=ImageDraw.Draw(im);points=[np.array([*v,1])@A for v in src];d.polygon([((x-box[0])*8,(y-box[1])*8)for x,y in points],outline='red',width=5);im.save(p/'placement-overlay.png');print(w,dep,center)
