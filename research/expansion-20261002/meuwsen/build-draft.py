import json,math
from pathlib import Path
p=Path(__file__).parent;place=json.loads((p/'placement-draft.json').read_text());poly=place['localPolygon'];center=[sum(v[j]for v in poly)/4 for j in range(2)];angle=math.atan2(-(poly[1][1]-poly[0][1]),poly[1][0]-poly[0][0]);w=5.35;d=6.9;z=d/2;acc=[];rel=[]
def b(x,y,z,w,h,d,material='trim'):acc.append(dict(x=x,y=y,z=z,w=w,h=h,d=d,material=material))
def relief(out,z=z+.04,mat='trim',depth=.16):rel.append(dict(outline=out,z=z,material=mat,depth=depth))
def win(x,y,ww,hh):
 b(x,y,z+.16,ww+.16,hh+.18,.15,'frame');b(x,y,z+.26,ww,hh,.10,'glass');b(x,y,z+.34,.06,hh,.08,'frame');b(x,y+hh*.25,z+.34,ww,.06,.08,'frame')
# Tight conservative shell inside manually mapped parcel. Rear geometry not documented.
parts=[dict(x=0,z=0,w=w,d=d,h=13.2,wall='stone',roof='hip',roofHeight=1.8,windows=False)]
# Front's asymmetric high left fin and curved shoulder traced from photo1920.
outline=[[-2.675,0],[2.675,0],[2.675,14.7],[2.55,15.0],[2.2,15.2],[-.8,15.45],[-.8,18.9],[-1.05,19.4],[-1.5,19.75],[-2.1,19.95],[-2.675,20.0]]
relief(outline)
# Triple second-floor window group, beneath broad curved arch.
for xx,yy,hh in [(-1.7,11.45,3.2),(0,11.6,3.5),(1.7,11.45,3.2)]:win(xx,yy,1.1,hh)
outer=[[-2.55+i*5.1/60,13.05+1.13*math.sqrt(max(0,1-((-2.55+i*5.1/60)/2.6)**2))]for i in range(61)]
relief(outer+[[x,y-.12]for x,y in reversed(outer)],z+.27,'dark',.12)
# Narrow high window and small dark opening in the raised fin.
win(-1.8,17.1,.85,1.75)
relief([[-1.91+.40*math.cos(i*2*math.pi/48),19.10+.43*math.sin(i*2*math.pi/48)]for i in range(48)],z+.25,'dark',.04)
for yy in [15.9,18.25]:b(-1.8,yy,z+.28,1.55,.16,.24)
# Ground-floor shop; central first-floor bay projects slightly, right sash remains visible.
b(0,1.8,z+.24,4.75,3.3,.13,'glass')
for xx in [-2.45,-.7,2.45]:b(xx,1.8,z+.34,.12,3.5,.1,'frame')
win(1.82,6.7,.9,2.75)
b(-.55,6.3,z+.42,2.95,3.25,.7,'dark');b(-.55,6.45,z+.84,2.5,2.85,.1,'glass');b(-.55,5.0,z+.86,2.9,.25,.23,'frame')
# Continuous extruded canvas profiles, with narrow stripe panels.
def awning(cx,width,profile):
 rel.append(dict(outline=[[-zz,yy]for zz,yy in profile],x=cx-width/2,z=0,angle=math.pi/2,depth=width,material='canvas'))
 for i in range(int(width/.23)):
  xx=cx-width/2+.1+i*.23
  rel.append(dict(outline=[[-zz,yy+.014]for zz,yy in profile],x=xx,z=0,angle=math.pi/2,depth=.065,material='stripe'))
awning(0,5,[(z+.3,4.7),(z+2,3.7),(z+2,3.55),(z+.3,4.55)])
curve=[(z+.4+math.sin(t*math.pi/2)*1.05,8.6-.85*t)for t in [i/14 for i in range(15)]]
awning(-.55,3,curve+[(zz,yy-.1)for zz,yy in reversed(curve)])
# Small pierced/diamond-like band indicated only by simple dark slots.
b(0,9.1,z+.25,5.05,.48,.10,'dark')
for xx in [-2.1,-1.3,-.5,.3,1.1,1.9]:b(xx,9.1,z+.32,.14,.44,.07,'trim')
# Known shop names retained as coarse 3x5 block lettering, no invented wording.
glyph={'J':['001','001','001','101','111'],'S':['111','100','111','001','111'],'M':['101','111','111','101','101'],'E':['111','100','110','100','111'],'U':['101','101','101','101','111'],'W':['101','101','111','111','101'],'N':['101','111','111','111','101'],'H':['101','101','111','101','101'],'O':['111','101','101','101','111'],'D':['110','101','101','101','110'],'.':['000','000','000','000','010']}
def text(s,yy,size):
 start=-(len(s)*4-1)*size/2
 for n,c in enumerate(s):
  for row,line in enumerate(glyph[c]):
   for col,v in enumerate(line):
    if v=='1':b(start+(n*4+col+.5)*size,yy+(2-row)*size,z+2.035,size*.84,size*.84,.025,'dark')
b(0,3.64,z+2.015,5,.82,.035,'canvas')
text('J.S.MEUWSEN',3.86,.105);text('HOEDEN',3.43,.075)
meta=dict(id='meuwsen-mosseltrap',name='Meuwsen · Mosseltrap',model='city33',modelFamily='city33',center=center,angle=angle,height=20,polygon=poly,modelSpec=dict(colors=dict(stone='#a8a08e',trim='#d6d0bd',frame='#8e8876',roof='#565954',glass='#45534f',dark='#303831',canvas='#c7bfaa',stripe='#696d61'),parts=parts,accents=acc,facadeReliefs=rel),historicalUncertainty='Gevel naar1920, dezelfde gevel zichtbaar1939. Hoogte20m is proportieschatting. Achterkap en achtergevel vereenvoudigd; geen opmeting. Lichte afwerking en neutrale gestreepte zonwering zijn kleurinterpretaties.')
(p/'modelSpec-draft.json').write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
