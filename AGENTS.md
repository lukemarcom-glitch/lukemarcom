# Werkinstructies voor AI-tools en ontwikkelaars

Lees eerst `README.md`, `docs/OVERDRACHT.md` en voor je taak `docs/ONTWIKKELEN.md` / `docs/PUBLICEREN.md`. Werk vanuit deze repository. Er is geen verborgen afhankelijkheid van de oude chat, Codex, Sites of een persoonlijk absoluut bestandspad.

## Projectafspraken

- Productnaam RDAM39 / Rotterdam 1939. Interface en toelichtingen zijn Nederlands.
- De focus is vooroorlogs Rotterdam binnen de brandgrens, met historisch fotomateriaal. Bestaande Noordereiland-/bruguitbreidingen zijn bewust opgenomen. Breid het kaartbereik niet stilzwijgend uit; de gebruikte werkgrens is een benadering, geen geverifieerde GIS-brandgrens.
- De eigenaar heeft oudere 17e-/18e-eeuwse schilderijlagen afgewezen als buiten scope. Ook geen nieuwe laag over naoorlogse migratie toevoegen zonder nieuw verzoek.
- Bewaar de warme historische kleuren in Toen, de herkenbaar andere stijl in Nu en het bestaande logo. Nu opent standaard in 3D.
- Houd menu inklapbaar, verticaal links en mobiel bruikbaar. Markers mogen niet gaan overlappen of achterlopen tijdens slepen. Schaalafhankelijke labels en foto's in de oude Diergaarde behouden.
- Foto's per paar groeperen: origineel, AI, origineel, AI. Klik vergroot binnen de website; geen automatische download. Miniatuurselectie scrolt naar de hoofdfoto.
- Een nieuw gebouw heeft een werkelijk zichtbaar, licht 3D-model en een gecontroleerde positie. Maak ruimte in de achtergrondbebouwing en voorkom overlap met andere losse modellen. Bewaar de oorspronkelijke contouren.

## Historische inhoud

- Controleer plaats, datum en beeldrechten bij betrouwbare bronnen. Moderne adressen of monumentposities zijn geen bewijs van een historische gebeurtenislocatie.
- Maak bewezen feiten, aannames en onzekerheden herkenbaar. Kleuren onderbouwen met materiaalbeschrijvingen/kleurbronnen; geen zekerheid afleiden uit zwart-witfoto's of AI.
- Bewaar het origineel ongewijzigd. De AI-versie is een aparte, gelabelde interpretatie met bron en prompt; geen historisch bewijs. Bij voorkeur hele gebouw in beeld, details als aanvulling.
- Nieuwe locaties hebben minimaal één origineel/AI-fotopaar met rechteninformatie. Gewoonlijk maximaal vijf AI-bewerkingen per gebouw, tenzij expliciet anders gevraagd (de Diergaarde heeft meer).
- Achtergrondtekst per gebouw maximaal 400 woorden, met relevante Wikipedia-link en inhoudelijke bronnen.
- WOII-verhalen hebben `anchor`, `locationContext` en bronverantwoording. Gebruik `resolveStoryLocations`; verplaats ze niet naar een gelijknamig nieuw gebouw. Geen verzonnen oorlogsscènes, portretten of dialogen. Eventuele AI-bewerking betreft bestaand plekbeeld en wordt als interpretatie toegelicht.

## Technische werkwijze

- Bewerk `site/` rechtstreeks. Geen React/Vite/server/backend noodzakelijk; browser gebruikt gewone ES-modules en lokaal meegeleverde Three.js.
- Alle runtimepaden blijven relatief, zodat de site ook onder `/lukemarcom/` werkt. Geen `localhost`, persoonlijke absolute paden, tokens of providerafhankelijkheid in runtimecode.
- `site/landmarks/catalog.json` bestuurt modellen, navigatie en galerie. `site/stories/catalog.json` bestuurt verhalen. Hergebruik bestaande modelbouwers voordat je een nieuwe familie maakt.
- Lees eerst het actuele model en de catalogus; modelversienamen `city22`, `city28`, `city32`, `city33` zijn rendererkeuzes, geen verplichte nieuwe versienummers.
- Voor model/footprintwijzigingen: opnieuw uitsnijden, model exporteren als dat verandert, overlapcontrole en visuele controle. Downloadbare GLB en de live geometrie moeten overeenkomen.
- Draai `npm run check`. Bij UI, paden, hosting of modelwijzigingen ook `npm run test:browser` en bekijk desktop/mobiele screenshots. Ongewijzigde beeldinhoud hoeft niet opnieuw gegenereerd.
- Leg wezenlijke veranderingen en open beperkingen vast in `docs/OVERDRACHT.md`. Gebruik reguliere Git-commits; geen backups of gegenereerde testuitvoer committen.
- Noem iets pas live nadat de hosting een geslaagde deployment meldt én het openbare adres zonder ingelogde sessie is gecontroleerd. Een commit/push alleen is geen publicatiebewijs.
- Behoud de gekozen repositoryzichtbaarheid. Wijzig geen toegangsrechten, domeinen of betaald abonnement zonder passende opdracht. Er is geen algemene toestemming om derden te mailen.

## Als context ontbreekt

Begin met `git status`, de overdracht en de catalogi. Benoem wat gecontroleerd is en wat onzeker blijft. Vraag alleen de ontbrekende keuze die het werk echt blokkeert; voer onafhankelijke voorbereiding alvast uit. Publiceer geen nieuwe historische claims om gaten te vullen.
