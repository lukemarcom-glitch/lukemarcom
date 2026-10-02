from PIL import Image,ImageDraw
from pathlib import Path
import json
r=Path('research/historic-water')
areas=[]
def add(id,name,polys,notes,confidence='medium-high'):
 areas.append(dict(id=id,name=name,polygons=[dict(outer=p,holes=[]) for p in polys],source='site/onderzoek/centrum-voor-mei-1940.jpg',notes=notes,confidence=confidence))
add('rotte-noord','Rotte ten noorden van Noordplein',[[[3063,105],[3140,105],[3121,170],[3094,260],[3090,338],[3027,338],[3031,269],[3044,200]]],'Bronkaart loopt hier aan de bovenzijde af; alleen zichtbare waterstrook. Brug bij Noordplein uitgespaard.')
add('rotte-zuid','Rotte van Noordplein tot Stokvisverlaat',[[[3028,393],[3089,393],[3086,444],[3072,496],[3043,550],[3008,609],[2977,660],[2953,709],[2942,755],[2931,815],[2917,875],[2899,924],[2878,963],[2824,995],[2740,1043],[2675,1090],[2666,1091],[2651,1072],[2645,1060],[2648,1052],[2660,1045],[2730,997],[2794,950],[2835,917],[2857,881],[2868,843],[2880,785],[2890,730],[2902,681],[2920,640],[2948,597],[2980,550],[3007,505],[3025,464],[3035,420]],[[2626,1070],[2640,1086],[2658,1109],[2635,1125],[2590,1159],[2554,1191],[2535,1226],[2510,1236],[2486,1225],[2490,1210],[2510,1182],[2550,1140],[2590,1100]]],'Oevers gevolgd; kleine brug/vernauwing in westelijke bocht bewust onderbroken. Geen verbinding ingetekend door gedempte Binnenrotte.')
add('delftsevaart-noord','Delftsevaart en Haagseveer',[[[2365,1398],[2371,1393],[2388,1400],[2398,1404],[2427,1444],[2460,1494],[2495,1549],[2531,1604],[2563,1658],[2567,1671],[2562,1675],[2556,1670],[2545,1666],[2537,1659],[2502,1610],[2467,1558],[2432,1507],[2397,1456],[2377,1420]]],'Ruime noordelijke waterkom; Haagseveer is kade, geen afzonderlijke waterloop. Vernauwing/brug bij Sint-Jacobstraat uitgespaard.')
add('delftsevaart-midden','Delftsevaart tussen Sint-Jacobstraat en Meent',[[[2574,1690],[2580,1690],[2602,1728],[2624,1769],[2642,1805],[2634,1810],[2621,1784],[2604,1752],[2587,1721]],[[2648,1819],[2656,1815],[2669,1841],[2661,1846]]],'Smalle zichtbare waterstrook tussen kaden; bruggen en kruising Meent niet blauw gemaakt.', 'medium')
add('delftsevaart-zuid','Delftsevaart ten zuiden van Meent',[[[2671,1859],[2678,1855],[2705,1895],[2735,1936],[2750,1963],[2742,1968],[2718,1925],[2696,1896]],[[2755,1982],[2765,1978],[2789,2021],[2805,2058],[2796,2063],[2783,2036]],[[2807,2078],[2815,2075],[2825,2099],[2831,2113],[2822,2117],[2816,2102]]],'Conservatieve smalle strook, bruggen ter hoogte Bagijnenstraat en straten uitgespaard. Het Spui/Hoogstraat wordt niet als open water ingevuld.', 'medium')
add('steigers','Steigersgracht',[[[2782,2206],[2790,2201],[2850,2180],[2910,2159],[2990,2131],[2998,2150],[2940,2170],[2880,2191],[2820,2212],[2783,2222]]],'Alleen duidelijke rechte grachtkom westelijk van Grote Markt; brug aan westzijde en overkluizing Grote Markt niet ingevuld.')
add('kolk','Kolk',[[[3267,2100],[3303,2091],[3305,2130],[3315,2157],[3331,2177],[3354,2196],[3387,2213],[3420,2226],[3453,2237],[3463,2240],[3466,2245],[3435,2265],[3398,2270],[3390,2270],[3367,2262],[3353,2257],[3334,2234],[3309,2199],[3286,2163],[3270,2136]]],'Waterkom tussen Open Rijstuin en Westnieuwland. Viaduct/brugstrook westelijk en Roobrug/Mosseltrap zuidoostelijk uitgespaard.')
obj=dict(source='site/onderzoek/centrum-voor-mei-1940.jpg',imageSize=[6481,5098],coordinateSystem='pixels, top-left origin',areas=areas,notes='Handmatig conservatief getraceerd. Circa 3–7 px randonnauwkeurigheid. De kaart combineert 1940 met 1955; alleen oude wateroevers gebruikt. Stokviswater/Verlaat niet als doorgaande verbinding ingevuld: sluizen en bruglijnen zijn te ambigu op deze kaart. Gedempte Binnenrotte, Botersloot en Coolsingel expliciet uitgesloten.')
(r/'north-extra.json').write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
im=Image.open(obj['source']).convert('RGBA'); layer=Image.new('RGBA',im.size);d=ImageDraw.Draw(layer)
for a in areas:
 for p in a['polygons']:d.polygon([tuple(q) for q in p['outer']],fill=(60,180,230,110),outline=(0,110,160,255),width=2)
out=Image.alpha_composite(im,layer);out.crop((2250,80,3510,2320)).save(r/'north-extra-overlay.png')
out.crop((2300,1320,3500,2320)).save(r/'north-extra-south-detail.png')
