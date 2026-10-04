# Ontwikkelen en nieuwe locaties toevoegen

## Architectuur

De site heeft geen bundler, database of backend. `site/` is direct publiceerbaar. JavaScript is ES-modules; Three.js en OrbitControls worden uit `site/vendor/` geladen. De foto-AI draait niet in de website: vooraf gemaakte afbeeldingen staan als bestanden in de repository.

| Bestand | Functie |
| --- | --- |
| `site/index.html` | Bediening, tijdperkschakelaar, menu, dialogen |
| `site/app.js` | Three.js-scène, camera, selecteren, oude/nieuwe kaart, initialisatie |
| `site/style.css`, `site/theme.css` | Layout, mobiel gedrag, kleuren en typografie |
| `site/marker-layout.js` | Projectie, prioriteiten, botsingsdetectie en zichtbaarheid van labels |
| `site/landmarks/catalog.json` | Gebouwen/buurten: positie, geometrieparameters, verhalen, foto's en bronnen |
| `site/landmarks/models.js` | Router naar de verschillende procedurale modelbouwers |
| `site/landmarks/city32-models.js` | Gedeelde modelbouwer voor `city32` én `city33`; onderdelen in `modelSpec` |
| `site/landmarks/context-clearance.js` | Voorkomt dat indicatieve buurhuizen nieuwe modellen doorsnijden |
| `site/landmarks/panel.js` | Gebouw- en verhalenpaneel, fotoparen, lichtbak, bronvermelding |
| `site/stories/catalog.json`, `locations.js` | WOII-verhalen en koppeling aan historische locatieankers |
| `site/data/model.json` | Oorspronkelijke automatisch afgeleide contouren; behouden |
| `site/data/model-landmarks.json` | Afgeleide achtergrond, uitgesneden rond losse modellen |
| `site/modern/` | Luchtfoto, 3DBAG-volumes, OSM-straatnamen en moderne weergave |
| `site/landmarks/<id>/` | Foto's, AI-versies, prompts, metadata, downloadbaar model |

De oudere README's in `site/landmarks/` en `site/stories/` bevatten waardevolle bronnotities maar beschrijven soms eerdere aantallen of een oude werkstap. Voor de actuele toestand tellen catalogi, code en `OVERDRACHT.md`.

## Coördinaten en kaartbasis

Lokale meters, oorsprong 4.485° O / 51.919° N:

```text
x = (lon - 4.485) × 111320 × cos(51.919°)
y = (lat - 51.919) × 111320
Three.js: (x, hoogte, -y)
```

`center` en `polygon` in de catalogus gebruiken deze lokale kaartcoördinaten. `angle` is in radialen. Voor modelSpec-onderdelen zijn x/z lokaal ten opzichte van het model; controleer de transformatie in de betreffende modelbouwer voordat je hoek of gevelrichting aanpast.

De archiefkaart is `NL-RtSA_4001_1972-755-1`, uitgegeven 18 mei 1955 maar met de toestand van vóór mei 1940. Gebouwhoogten van de algemene achtergrond zijn schematisch. De werkgrens is niet hetzelfde als een exact ingemeten brandgrenspolygon. Een gebouw dat er nu nog staat kan binnen het onderzoeksgebied liggen.

## Nieuwe locatie

1. Controleer of de plek al bestaat, binnen de afgesproken scope valt en genoeg bruikbaar bronmateriaal heeft. Verifieer datum, oorspronkelijke locatie en licentie per foto. Bewaar bronlinks en onzekerheden; geen moderne geocode als enig plaatsingsbewijs.
2. Geef de locatie een stabiele slug, maak `site/landmarks/<id>/` en voeg één item aan `catalog.json` toe. Gebruik een vergelijkbaar bestaand item als schema. Leg `center`, `polygon`, `height`, `periodNote`, `colorNote`, tekst (maximaal 400 woorden), bronnen en Wikipedia vast. Gevelrichting en modelmaten moeten passen bij de historische kaart en foto's.
3. Hergebruik waar mogelijk `modelFamily: "city33"` met `modelSpec.parts`, `colors` en eventueel `accents`. Dit gebruikt de bestaande `city32-models.js`. Het label betekent niet dat het model historisch nauwkeurig is; maten en onzichtbare gevels blijven expliciete schattingen waar bronnen ontbreken.
4. Bewaar elke originele foto en AI-bewerking apart. `photos` bevat onder andere `src`, `ai`, `title`, `date`, `author`, `license`, `url` en een `aiNote`. Paden beginnen bijvoorbeeld met `landmarks/<id>/...`, relatief aan `site/`. Neem de gebruikte prompt en rechtenmetadata mee. Houd generatieve wijzigingen conservatief, controleer vooral letters en architectuur.
5. Maak ruimte in de algemene bebouwing met `clip_background.py`. Zo nodig een expliciete `exclusionPolygon`/`backgroundClearance` gebruiken; verplaats echte buurpanden niet om een fout model passend te maken. Controleer ook overlap tussen twee losse modellen en indicatieve straatrijen.
6. Exporteer een GLB wanneer geometrie verandert, controleer alle fotoparen en bekijk de plek van meerdere kanten, ook in Nu en op mobiel. Navigatie en markers komen uit de catalogus; geen tweede handmatige lijst toevoegen.

## Achtergrond uitsnijden en modellen exporteren

Alleen voor geometriewerk zijn Python/Shapely en eventueel Blender nodig. Gewone inhouds- en UI-wijzigingen vereisen deze niet.

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-models.txt
PYTHON=.venv/bin/python node site/landmarks/export.mjs gebouw-slug
# Exporteert geometry.json en snijdt achtergrond automatisch opnieuw uit.
blender --background --python site/landmarks/export_blender.py -- gebouw-slug
```

Blender moet als `blender` in PATH beschikbaar zijn, of gebruik het lokale pad naar Blender. De scene gebruikt de modelbouwers rechtstreeks; `model.glb` is de losse download. `geometry.json` is een groot tussenbestand en staat in `.gitignore`. De export maakt ook een `.blend`; commit alleen wat bewust als bron of download behouden wordt. Behoud de oorspronkelijke volledige `rotterdam-v1.glb` als herkenbaar oude massa-export; deze bevat niet automatisch alle latere losse modellen.

Alleen de achtergrond opnieuw uitsnijden:

```sh
.venv/bin/python site/landmarks/clip_background.py
```

## Controles

`npm run check` controleert catalogi, relatieve bestandsverwijzingen, fotoparen, rechtenvelden, GLB-headers en markerregressies. Dit bewijst geen historische juistheid: daarvoor zijn bronnen en visuele beoordeling nodig.

Browsercontrole op het publicatie-subpad:

```sh
npm ci
npx playwright install chromium
npm run dev -- --port 8765 --base /lukemarcom/
# In een andere terminal:
BASE_URL=http://127.0.0.1:8765/lukemarcom/ npm run test:browser
```

De browsercontrole schrijft screenshots in `artifacts/`, controleert laden, fotoparen/lichtbak, Nu 3D, mobiele overflow en browserfouten. Bekijk die afbeeldingen ook zelf. Veranderende aantallen worden uit de catalogi gelezen; er zijn geen hard gecodeerde oude totalen.

## GPS / locatie op verzoek

`site/location.js` bevat de afstandstoets en eenmalige locatiebediening; `site/location.css` de bediening en stip. `app.js` integreert de markerprojectie in iedere renderframe en zet de camera op een overzicht rond de locatie (230 m hoog, 250 m achter het cameradoel). Het optionele kompas draait de camera rond dat doel; kaartbediening pauzeert het meedraaien. Kompasrichting gebruikt Safari webkitCompassHeading of absolute alpha/beta/gamma, met projectie voor een rechtop gehouden telefoon. Relatieve alpha is geen betrouwbare noordrichting en wordt geweigerd. Richting wordt afgevlakt over de kortste draai, ook over 359°/0°. Gebruikerscoördinaten nooit opslaan, loggen of doorsturen. De huidige GPS-grens is de **voorlopige werkgrens** plus 500 m; geen claim van een ingemeten brandgrens. Zie de overdracht voor de onderzochte bronnen.

Gerichte regressiecontrole: `CHROME_PATH=/pad/naar/chrome node scripts/location-browser-check.mjs`. `BASE_URL` kan naar localhost, een subpad of de openbare site wijzen. Browserposities worden gesimuleerd; dit is geen echte buitentest. Afstands- en nauwkeurigheidstests draaien automatisch mee in `npm run check`.

De algemene browsercontrole kan ook een specifieke nieuwe locatie volledig doorlopen met `LANDMARK_ID=<slug> npm run test:browser`. Zonder deze variabele blijft Plan C de standaard. Een onbekende slug faalt expliciet. Dit controleert de galerie, lichtbak en mobiele fotoselectie voor die locatie; modelvorm en historische juistheid blijven visueel/bronnenonderzoek.

## Zelfde camera bij tijdperkwissel

`node scripts/era-camera-browser-check.mjs` controleert de werkelijke camera (positie, doel, quaternion, zoom en projectiematrix) bij wisselen tussen Toen/Nu op desktop en mobiel. Test bovenaanzicht, afwijkende 3D-hoek, beide richtingen en wisselen tijdens een cameravlucht. `BASE_URL`, `CHROME_PATH` en `OUTPUT_DIR` zijn optioneel zoals bij de gewone browsercontrole. De tijdperkwissel verandert alleen de laag, niet `view` of camera; een lopende vlucht stopt op zijn actuele positie. Alleen expliciete knoppen voor bovenaanzicht/3D/navigatie zetten de camera opnieuw.

De cameratest wacht per stap opnieuw op acht stabiele frames en controleert expliciet het afwijkende doel [560,12,-130] vóór de tijdperkwissel; een oude stabiliteitssample kan zo geen lopende animatie overslaan.
