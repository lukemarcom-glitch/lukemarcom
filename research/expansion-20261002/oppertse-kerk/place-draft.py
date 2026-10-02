import json,math
from pathlib import Path
from PIL import Image,ImageDraw
r=Path(__file__).parent;mat=json.load(open('site/data/model.json'))['fit']['centrum']['matrix_pixel_naar_lokale_meter']
def convert(p):return [sum([p[0]*mat[0][j],p[1]*mat[1][j],mat[2][j]]) for j in range(2)]
# Distinctive broad front block and long rear hall are matched fromZ8 toworkingmap.
front=[[2763.,1638.5],[2776.2,1653.5]]
past=[front[0],front[1],[2758.7,1668.0],[2746.3,1652.7]]
church=[[2746.3,1652.7],[2758.7,1668.0],[2718.5,1701.0],[2705.7,1686.9],[2710.,1682.0],[2707.9,1679.6],[2741.0,1652.0]]
entry=[past[1],[2780.2,1658.0],[2768.74,1667.50],[2764.74,1663.0]]
local=[convert(p)for p in past];cc=[sum(p[j]for p in local)/len(local)for j in range(2)];ang=math.atan2(local[0][1]-local[1][1],local[0][0]-local[1][0]);w=math.dist(local[0],local[1]);d=(math.dist(local[0],local[-1])+math.dist(local[1],local[2]))/2
out=dict(id='oppertse-kerk-pastorie',researchOnly=True,pastorie=dict(historicAddress='Oppert107',parcel='776',workingMapPolygon=past,polygon=local,center=cc,angle=ang,widthMeters=w,depthMeters=d,uncertaintyMeters=5),church=dict(historicAddress='LangeTorenstraat, huisnummer niet bevestigd',parcel='2099',workingMapPolygon=church,polygon=[convert(p)for p in church],uncertaintyMeters=6),entry109=dict(historicAddress='Oppert109',parcel='771 front only',workingMapPolygon=entry,polygon=[convert(p)for p in entry],scope='Narrow photographed left entrance zone; only first8.79m depth, not entire771or2041reararea',widthMeters=math.dist(convert(entry[0]),convert(entry[1])),depthMeters=math.dist(convert(entry[1]),convert(entry[2]))),source='SAR4001/40110-Z8/sectieK1938',sourceUrl='https://hdl.handle.net/21.12133/2D641F4B5AE14C008740B00DF7B61BCB',method='Manual boundary matching of distinctive broad pastorie776 and long rear church2099 betweenSintJacobstraat andMeent. Registered through existingworkingmap affine transform. Not a cadastralGISsurvey. Frontmodel positivez faces northeast/Oppert.',addressNote='Oppert107 is independently proven by1915monumentenlijst as pastorie. EnlargedZ8clearlyassigns107only to776;103and105 are separate neighbourparcels. 109 is narrow771adjacent; watercolourcaption107-109 may include thisentry. Primary1915monumentenlijst explicitly107. Do notcount103/105aspartofpastorie. Church2099 is bestreading afterenlargement.',scope='Placeable pastorie only, photographed facade. Churchfootprint is contextual research; do not invent its unseenfront. Individualpastorie loss proven in DeNederlander11June1940 and HetVaderland12June1940.')
(r/'placement-draft.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
im=Image.open('site/onderzoek/centrum-voor-mei-1940.jpg');crop=(2670,1610,2810,1730);im=im.crop(crop).resize((1120,960));draw=ImageDraw.Draw(im)
def p(q):return((q[0]-crop[0])*8,(q[1]-crop[1])*8)
draw.polygon([p(q)for q in past],outline='red',width=5);draw.polygon([p(q)for q in entry],outline='green',width=5);draw.polygon([p(q)for q in church],outline='blue',width=5);draw.text((10,10),'RED 107/776 | GREEN 109/771 front | BLUE church2099',fill='black');im.save(r/'placement-overlay.jpg')
print(json.dumps(out,indent=2))
