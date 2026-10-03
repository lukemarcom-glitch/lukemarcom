# Haringvliet 89 — geïntegreerde kaartcorrectie

Correctie centraal geïntegreerd in catalog.json en model-source-spec.json; downloadbare GLB opnieuw geëxporteerd. Het oorspronkelijke voorstel staat in het afzonderlijke onderzoeksdossier. Bronfront van F549 opnieuw gedeeld met F548: [2556,2368]–[2586,2364]. Nummer91 blijft ongewijzigd.

- Breedte: 6,4710 → 4,9510 meter; horizontale schaalfactor0,7651053655.
- Hoek: 0,545325 → 0,435534 radiaal.
- Centrum: [580,870405;116,223445] → [581,827833;117,089875].
- Hoogte en diepte behouden. Raamassen, verdiepingen en pui-indeling behouden; x en breedtes van alle onderdelen proportioneel verkleind.
- Vanwege afwijkende gevelrichtingen bleef eerst3,0455m² overlap met87 aan de achterzijde. De schematische rechterzijgrens volgt nu de bestaande gemeenschappelijke grens met87: maxXSlope=-tan(angle87-angle89)=-0,106013, frontZ4,5. Geen verschuiving van het afgelezen front of extra historische achterdetails.

## Exacte actuele runtimecontrole

`runtime89.mjs` maakt een tijdelijke catalogus in geheugen, configureert de actuele runtimecontext en bouwt de meshes met createLandmark. Geen sitebestanden overschreven. `qa89.py` projecteert alle niet-degeneratieve driehoeken met(x,-z), verenigt deze met Shapely en berekent doorsneden.

Voorstel89:510 driehoeken,41,3300m² projectie. Doorsnede met91=0,0m²;87=0,0m²;haringvliet-west=0,0m². Zie `haringvliet89-runtime-qa.json`. Afgeleide achtergrond is na centrale integratie opnieuw uitgesneden; volledige geometriecontrole wordt bij deze release opnieuw uitgevoerd.

Voor/na zelfstandig in Blender gerenderd en zelf bekeken: `haringvliet89-old-preview.png`, `haringvliet89-new-preview.png`. Nieuwe gevel is smaller, zonder verlies van de herkenbare twee assen, drie bovenlagen en deurlayout. Exacte hoogte/diepte blijven historische benaderingen. Definitieve GLB is geïntegreerd. Openbare publicatie en controle worden afzonderlijk vastgelegd in de overdracht; dit bronbestand op zichzelf is geen publicatiebewijs.
