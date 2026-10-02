from pathlib import Path
from PIL import Image,ImageDraw
import json
from shapely.geometry import Polygon,LineString
r=Path('research/historic-water')
def area(id,name,pts,bridges=[]):
 p=Polygon(pts)
 for line,width in bridges:p=p.difference(LineString(line).buffer(width/2,cap_style=2))
 ps=[p] if p.geom_type=='Polygon' else list(p.geoms)
 return dict(id=id,name=name,polygons=[dict(outer=[list(v) for v in q.exterior.coords][:-1],holes=[[list(v) for v in ring.coords][:-1] for ring in q.interiors]) for q in ps if q.area>4],confidence='historical-map-trace',notes='Handmatig langs zichtbare historische waterlijnen, circa 3–8 pixels onzeker; brugdekken en bebouwde eilanden uitgespaard.')
a=[]
a.append(area('blaak-water','Blaak',[[2878,2473],[3089,2423],[3104,2486],[3100,2493],[2905,2552],[2900,2548],[2880,2498]]))
a.append(area('wijnhaven-west','Wijnhaven westelijk middendeel',[[2958,2739],[3222,2657],[3232,2659],[3243,2677],[3248,2676],[3253,2694],[3246,2697],[3252,2717],[3249,2724],[2990,2807],[2980,2804]]))
a.append(area('wijnhaven-oost','Wijnhaven en Scheepmakershaven oostelijk',[[3267,2654],[3562,2559],[3734,2507],[3742,2507],[3749,2525],[3741,2530],[3747,2540],[3650,2627],[3628,2660],[3520,2770],[3410,2880],[3310,2980],[3210,3080],[3140,3149],[3130,3145],[3090,3107],[3093,3100],[3170,3030],[3285,2915],[3400,2800],[3529,2658],[3520,2640],[3289,2704],[3281,2700],[3260,2667]],bridges=[([[3490,2470],[3890,2890]],10)]))
a.append(area('haringvliet','Haringvliet',[[3889,2291],[4213,2107],[4372,2019],[4385,2021],[4392,2049],[4424,2028],[4433,2044],[4445,2038],[4450,2054],[4465,2048],[4475,2067],[4475,2086],[4466,2103],[4454,2086],[4437,2090],[4420,2122],[4365,2151],[4367,2155],[4317,2179],[4313,2177],[4150,2264],[4050,2318],[4025,2332],[4022,2329],[3934,2375],[3920,2381],[3907,2383],[3896,2380],[3873,2367],[3865,2355]]))
a.append(area('wijnhaven-aansluiting','Wijnhaven bij Leuvehaven',[[2755,2810],[2929,2757],[2942,2815],[2752,2888]]))
a.append(area('scheepmakershaven-west','Scheepmakershaven west van Rederijbrug',[[2800,3393],[3086,3143],[3109,3165],[3097,3176],[3107,3188],[2815,3496],[2802,3484],[2798,3467],[2800,3458],[2794,3446],[2794,3428]]))
a.append(area('zalmhaven','Zalmhaven',[[2109,3939],[2471,3740],[2607,3817],[2696,3800],[2700,3825],[2587,3840],[2541,3882],[2528,3859],[2476,3885],[2461,3856],[2436,3854],[2405,3865],[2373,3879],[2422,3988],[2208,4091]]))
(r/'south-extra.json').write_text(json.dumps({'areas':a},ensure_ascii=False,indent=2)+'\n')
im=Image.open('site/onderzoek/centrum-voor-mei-1940.jpg').convert('RGBA');o=Image.new('RGBA',im.size);d=ImageDraw.Draw(o)
for ar in a:
 for p in ar['polygons']:
  d.polygon([tuple(v) for v in p['outer']],fill=(50,160,220,110),outline=(0,80,180,255),width=2)
  for h in p['holes']:d.polygon([tuple(v) for v in h],fill=(0,0,0,0))
out=Image.alpha_composite(im,o);out.crop((2750,2350,3820,3260)).save(r/'south-review.png');out.crop((3800,1980,4520,2440)).save(r/'haring-review.png');out.crop((2050,3080,3190,4130)).save(r/'zalm-scheep-review.png')
