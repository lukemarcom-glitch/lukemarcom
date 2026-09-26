"""Replace schematic masses with landmarks, including a clear edge and no slivers."""
from pathlib import Path
import json
from shapely.geometry import Polygon
from shapely.ops import unary_union
ROOT = Path(__file__).resolve().parent

def polygons(geometry):
    if geometry.geom_type == 'Polygon':
        yield geometry
    elif hasattr(geometry, 'geoms'):
        for part in geometry.geoms:
            yield from polygons(part)

def clean_background(model, catalog):
    # Map contours are approximate: leave room for eaves and georeferencing error.
    mask = unary_union([
        Polygon(poly).buffer(m.get('backgroundClearance', 4), join_style=2)
        for m in catalog
        for poly in [m['polygon'], m.get('exclusionPolygon', m['polygon'])]
    ])
    out = []
    for feature in model['buildings']:
        original = Polygon(feature['rings'][0], feature['rings'][1:])
        if not original.intersects(mask):
            out.append(feature)
            continue
        cut = original.difference(mask)
        # Opening removes narrow remnants and fingers from a partly replaced block.
        # Intersect again so cleaning cannot grow back into the protected footprint.
        cut = cut.buffer(-2, join_style=2).buffer(2, join_style=2).intersection(cut).difference(mask)
        for i, part in enumerate(polygons(cut)):
            if part.area < 30:
                continue
            out.append({**feature, 'id': feature['id'] + f'-{i}',
                'rings': [[list(p) for p in part.exterior.coords]] +
                         [[list(p) for p in ring.coords] for ring in part.interiors],
                'area': round(part.area, 1),
                'center': list(part.representative_point().coords)[0]})
    return {**model, 'buildings': out,
        'displayNote': 'Schematische bouwmassa’s automatisch opgeschoond rond landmarkmodellen: standaard 4 m vrije rand, smalle reststroken verwijderd. Oorspronkelijke broncontouren blijven in model.json.'}

if __name__ == '__main__':
    source = json.loads((ROOT.parent / 'data/model.json').read_text())
    catalog = json.loads((ROOT / 'catalog.json').read_text())
    result = clean_background(source, catalog)
    (ROOT.parent / 'data/model-landmarks.json').write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':')))
    print('Clean display background:', len(result['buildings']), 'polygons')
