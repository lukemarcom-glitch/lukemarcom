# Hobbyprojecten · RDAM39

> **Migratie in uitvoering (26 september 2026):** de documentatie staat hier alvast. De volledige website is lokaal gereed en getest, maar nog niet naar deze repository geüpload of via GitHub gepubliceerd. Zie [de actuele overdracht](docs/OVERDRACHT.md).

Interactieve kaart van vooroorlogs Rotterdam. Bekijk historische gebouwen en buurten in 3D, vergelijk archiefbeelden met duidelijk gemarkeerde AI-bewerkingen en wissel naar de huidige stad. WOII-verhalen hebben eigen bronnen en historische locatieankers.

**Nieuw hier, of verdergaan met een AI-tool? Begin bij [AGENTS.md](AGENTS.md) en [de overdracht](docs/OVERDRACHT.md).** De volledige projectopzet is zelfstandig bruikbaar; de oorspronkelijke chat en lokale onderzoeksmap zijn niet nodig om de website te draaien of aan te passen.

## Lokaal bekijken

Met Node.js 22 of nieuwer, vanuit de hoofdmap:

```sh
npm run dev
```

Open <http://127.0.0.1:8765/>. Voor alleen bekijken is `npm install` niet nodig. De website is statisch, heeft geen eigen backend en vereist geen accounts of API-sleutels. Een browser met WebGL is nodig voor de kaart.

Alternatief met Python: `python3 -m http.server 8765 --bind 127.0.0.1 --directory site`.

## Aanpassen en controleren

Alle websitebestanden staan in **`site/`**. Dit is de bron én de publicatiemap; er is geen tweede map die je handmatig moet synchroniseren.

```sh
npm run check
# Voor de browsercontrole, eenmalig:
npm ci
npx playwright install chromium
# Start in een andere terminal de website, daarna:
npm run test:browser
```

Lees [ontwikkeling](docs/ONTWIKKELEN.md) voor de belangrijkste bestanden, coördinaten, modelbouw en nieuwe locaties. Lees [publiceren](docs/PUBLICEREN.md) voor hosting, terugdraaien en controle van de echte liveversie.

## Historische zorgvuldigheid

Dit zijn onderzoeksreconstructies, geen exacte opmetingen. Schematiseerde bouwmassa's, geschatte kleuren en AI-beelden zijn geen authentiek historisch bewijs. Archiefbeelden hebben hun eigen datum; het doeljaar 1939 geldt niet automatisch voor elke foto. De onderliggende historische kaart is in 1955 uitgegeven en toont de toestand van vóór mei 1940.

Bronnen, makers, dateringen, licenties en onzekerheden staan in de catalogi en bij de foto's. Zie [bron- en gebruiksrechten](docs/BRONNEN-EN-RECHTEN.md). Een openbare repository betekent niet dat alle beelden onder één vrije licentie vallen.
