# Huidige Rotterdamse omgeving — bronverantwoording

Toegevoegd 21 september 2026. De schakelaar 1939 / Nu houdt camera, kijkrichting en kaartpositie gelijk. Historische volumes verdwijnen in Nu; de historische markers blijven als voormalige locaties herkenbaar. Terugschakelen herstelt de historische lagen.

## Kleurenluchtfoto
PDOK / Beeldmateriaal, expliciete jaarlaag **2025_ortho25**. Geen livebeeld. Bron: https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0?SERVICE=WMTS&REQUEST=GetCapabilities . 374 WMTS-tegels op EPSG:3857, zoom 17, samengevoegd tot 5632×4352 pixels. De naam ortho25 beschrijft de bronlaag; deze preview is gedownload op een grovere tegelresolutie (circa 0,74 meter per pixel ter plaatse), niet op 25 cm. Geen AI-kleuring of gegenereerde omgeving.

De luchtfoto ligt in dezelfde lokale coördinaten als de historische kaart. Bestaande transformatie: x = (longitude - 4.485) × 111320 × cos(51.919°), y = (latitude - 51.919) × 111320. De historische georeferentie houdt haar oorspronkelijke onzekerheid; wisselen tussen kaarten kan lokale afwijkingen tonen. Het luchtfotobeeld heeft vier geprojecteerde hoeken; Mercator-nonlineariteit over dit beperkte gebied is benaderd met één kaartvlak.

## 3DBAG
Bron: https://data.3dbag.nl/api/BAG3D/wfs , laag BAG3D:lod13. Alle pagina's uit dezelfde begrenzing opgehaald en gecontroleerd op totaal en unieke feature-ID. Brondownloads staan in bag-*.json, afgeleide data in model.json. 3DBAG © TU Delft 3D Geoinformation / 3DGI, CC BY 4.0: https://docs.3dbag.nl/en/copyright/ .

De optionele 3D-laag gebruikt de echte LoD1.3-deelcontouren en b3_h_70p minus b3_h_maaiveld als hoogte boven maaiveld. De NAP-hoogten worden dus niet rechtstreeks als gebouwhoogte gebruikt. Daken zijn plat vereenvoudigd; dit zijn **geen volledige LoD2.2-dakmodellen**. De luchtfoto wordt op de daken geprojecteerd. Gevels hebben een neutraal materiaal, geen gecontroleerde fototextuur. Maaiveld is vlak, zonder terreinmodellering. Puntenwolkjaren staan in model.json onder heightYears; dataset- en foto-opnamen kunnen verschillen.

De 3DBAG CityJSON API is ook gecontroleerd, maar de collection metadata meldde v2023.10.08. Daarom is voor deze lichte eerste integratie de apart beschikbare WFS gebruikt. Een logische vervolgstap is LoD2.2 CityJSON uit een gecontroleerde datasetversie, vooral rond herkenningspunten.

## OpenStreetMap
Werkelijk opgehaalde OSM-straat- en stationsnamen via de hoofd-API, opgeslagen in osm-api.xml en afgeleid in osm.json. Gebied: 4.478,51.915 tot 4.496,51.923 (centrum rond de twee proefgebouwen). Overpass gaf een 406 of bleef hangen; daarom is de standaard map-API gebruikt. Labels zijn geselecteerd op nabijheid van het centrum en ontdubbeld op naam. De luchtfoto en 3DBAG bevatten context buiten de voorlopige brandgrens, zodat randen en oriëntatie bruikbaar blijven. Data © OpenStreetMap contributors, ODbL: https://www.openstreetmap.org/copyright . Ophaaldatum staat in model.json onder osmTimestamp; de XML bevatte geen globale snapshotdatum. Publieke Overpass-instanties: https://wiki.openstreetmap.org/wiki/Overpass_API .

## Reproduceren
Vanuit v1: `.venv/bin/python modern/fetch_data.py`. Benodigd: Pillow en pyproj. Downloads worden lokaal gecachet. De viewer laadt de huidige laag pas op verzoek en bouwt de 3D-volumes alleen wanneer de gebruiker die aanvinkt.

Gecontroleerde aantallen: 25740 gebouwdelen, 15390 unieke BAG-panden, 35 OSM-labels. Puntenwolkjaren: {2023: 21431, 2020: 1420, 2014: 167, 2022: 2452, 2011: 246, 2016: 24}.

Kwaliteitscorrectie: één gebouwddeel (lod13.6808780, BAG 0599100100020123) had een onmogelijke bronuitstrekking van circa -787 tot +968 m NAP. Alleen voor dat deel is de bronmediaan gebruikt: circa 66,86 m boven maaiveld in plaats van 315,87 m. De originele bron blijft bewaard; zie heightCorrections en validation.json.
