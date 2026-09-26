# Overdracht — zelfstandig verder zonder de chat

Bijgewerkt: 26 september 2026.

## Doel en huidige staat

RDAM39 is een Nederlandstalige ruimtelijke verkenning van Rotterdam vóór mei 1940, met historische foto's, AI-interpretaties, een moderne vergelijking en een afzonderlijke WOII-verhalenlaag. De eigenaar koos op GitHub de repositorynaam **lukemarcom**, eigenaar **lukemarcom-glitch**, omschrijving **Hobbyprojecten**. De eigenaar heeft op 26 september 2026 expliciet gevraagd de repository openbaar te maken en GitHub te koppelen, zodat ook Claude aan het project kan werken.

De overgenomen inhoud is versie 33 van het bestaande project: 87 gebouwen/buurten en 18 verhalen. Elk van de 105 locaties heeft minimaal één gekoppeld origineel/AI-fotopaar. De catalogi zijn de actuele waarheid; gebruik `npm run check` om aantallen en bestanden opnieuw te controleren.

Het snapshot komt uit broncommit `f31a1b0009b3967d5ae79233364f3c8fb4c38a2d` van de oude publicatierepository. Dit is een herkomstverwijzing; deze commit hoeft niet in deze nieuwe Git-geschiedenis te staan. Alle direct benodigde bestanden zijn meegekopieerd naar `site/`.

## Publicatiestatus

- Oorspronkelijke website: https://rotterdam-1939-en-nu.aigenwijzer.chatgpt.site/ . Deze blijft tijdens de migratie bestaan.
- Nieuwe GitHub-repository: https://github.com/lukemarcom-glitch/lukemarcom — openbaar, gecontroleerd via de GitHub API.
- Openbare website: https://lukemarcom-glitch.github.io/lukemarcom/ — succesvol gepubliceerd en anoniem getest op 26 september 2026. HTTPS is ingeschakeld.
- Eerste GitHub-deployment: https://github.com/lukemarcom-glitch/lukemarcom/actions/runs/36229985267 , uit commit `73ab011db8b71884b031ef6494a515d5abb95c05`. Actuele publicaties zijn terug te vinden onder [Publish RDAM39](https://github.com/lukemarcom-glitch/lukemarcom/actions/workflows/pages.yml).
- Lokale controle: 87 gebouwen/buurten, 18 verhalen, 233 bronfotovermeldingen en 213 AI-paren; geen ontbrekende runtimebestanden of markerregressies. Desktop, mobiele galerie/lichtbak en Nu 3D zijn op `/lukemarcom/` getest zonder JS- of HTTP-fouten.
- De oorspronkelijke drie documentatiecommits blijven behouden. De volledige website, lokale start-/controlescripts en GitHub-workflows zijn toegevoegd en gepusht.
- GitHub CLI is geautoriseerd als lukemarcom-glitch. De code is openbaar te clonen; schrijven blijft beperkt tot geautoriseerde accounts.
- Claude Code kan de repository zelfstandig openen; `CLAUDE.md` importeert de afspraken en deze overdracht. Zie `CLAUDE-START.md`. De GitHub-koppeling binnen een afzonderlijk Claude-account is een aparte stap; die is hier niet uitgevoerd.
- Geen geheime API-sleutels nodig voor gebruik van de website.

Verificatie staat in `VERIFICATIE-GITHUB.json`. Een verse anonieme clone slaagde voor `npm run check`. De openbare website slaagde voor de browsercontrole: fotoparen/lichtbak, WOII-paneel, Nu 3D en mobiel zonder JavaScript-/HTTP-fouten of horizontale overflow.

De huidige GitHub-kopie is de werkbasis voor vervolgwerk. Wijzigingen aan oude lokale `v1`- of Sites-kopieën komen niet vanzelf op GitHub terecht. De afzonderlijke GitHub-koppeling in Claude Code op het web kan pas na aanmelding in het eigen Claude-account worden afgerond; de browser vroeg bij controle opnieuw om inloggen.

## Huisstijlupdate op 26 september 2026

De moderne interface gebruikt nu de aangeleverde Aigenwijs-huisstijl; `site/aigenwijs.css` bevat de afgebakende overrides. Bron-skill, merkrichtlijnen en fontverantwoording staan in `brand/`. De makercredit is een gewone, toegankelijke link, geen tracking- of advertentiecomponent. De lokale projectcontrole, browsercontrole en visuele desktop/mobiele controle zijn geslaagd. Gepubliceerd uit commit `7d034d6a636834e96afb683b9f8ad4e74119301e` en daarna anoniem op de live-URL getest zonder browser-/HTTP-fouten. HTML, huisstijl-CSS, logo en beide fonts zijn ook inhoudelijk met de live bestanden vergeleken. Zie `VERIFICATIE-HUISSTIJL.json`.

Een eigen domein is nog niet ingesteld: het eerdere verzoek noemde zowel `rdam.nl` als `rdam39.nl`; de domeinkeuze en Hostnet-aanmelding ontbreken nog. Deze huisstijlupdate wijzigt geen DNS of domeininstellingen.

## Vaste productkeuzes

- Historisch fotomateriaal en de vooroorlogse stad zijn de basis. Onderzoek binnen de brandgrens; bestaande Noordereiland-/bruguitbreiding behouden. De eigenaar heeft een verdere geografische uitbreiding met nieuwe kaartondergrond teruggedraaid.
- Een voorgestelde 17e-/18e-eeuwse schilderijenlaag is afgewezen: niet alsnog bouwen. Een naoorlogse migratielaag is ook niet gevraagd.
- De warme oude stijl en Barlow Semi Condensed blijven in Toen; Nu heeft de Aigenwijs-huisstijl met paars, wit/ink, groen op de actieve Nu-knop, Sora-koppen en Geist-body. Alle fonts staan lokaal. RDAM39 blijft het hoofdlogo. Onderaan het uitklapmenu en bij Over staat een subtiele hobbyvermelding met het officiële Aigenwijs-logo en een link naar https://www.aigenwijs.com/. Zie `brand/README.md`. Nu opent standaard in 3D.
- Linker navigatie inklapbaar; labels selectief zichtbaar om de kaart leesbaar te houden. Noordpijl is klikbaar. Muisslepen verplaatst de kaart.
- Foto's staan paarsgewijs origineel/AI. Fullscreenvergelijking blijft binnen de website, miniaturen scrollen naar de gekozen foto. Hele gebouw heeft voorkeur; sfeerbeelden als aanvulling.
- Automatisch verwijderen van achtergrondblokjes bij nieuwe modellen is verplicht. Het Hoffmanplein heeft afzonderlijke niet-overlappende gras-/padvlakken tegen flikkeren.
- Historische gebouwen en verhalen delen correcte oude plaatsingsankers. Oude Beurs aan de Blaak en nieuwe Beurs aan de Coolsingel zijn nadrukkelijk verschillende gebouwen. Huidige monumenten zijn geen bewijs van gebeurtenisposities.

## Wat al in de app zit

Onder meer Plan C, oude Bijenkorf, Laurenskerk, Delftse Poort, Beursgebouwen, Coolsingel, Lijnbaangebied, Meent, oude Diergaarde, Kolk/Open Rijstuin, Hoogstraat, Luchtspoor, oude Maasbruggen, Noordereiland en gewone winkel-/havenstraten. De laatste uitbreiding voegde twintig locaties toe in Waterstad, westelijk centrum en noordoostelijke centrumstraten. Zie de catalogus voor de volledige lijst; geen aparte lijst onderhouden die kan verouderen.

## Bekende beperkingen

- Dit is een onderzoeksreconstructie. Achtergrondhoogten zijn fictief, veel gevels en verborgen bouwdelen zijn vereenvoudigd. Het is geen gevalideerd kadastermodel.
- De exacte brandgrens en volledige dekking zijn nog niet vastgesteld. De gebruikte werkgrens en oude uitbreidingen niet presenteren als een bewezen GIS-afbakening.
- Foto's stammen uit verschillende jaren. De Delftse Poort wordt intact getoond vóór de demontage die in februari 1939 begon. De Laurenskerk heeft geen verzonnen 17e-eeuwse spits: het vooroorlogse vieringtorentje en de hoofdtoren moeten onderscheiden blijven.
- Moderne bronnen hebben verschillende datums: onder meer luchtfoto 2025 en 3DBAG-metingen vooral 2023. Die combinatie is geen livebeeld.
- AI-bewerkingen kunnen opschriften, mensen en kleine details veranderen. De originele foto is altijd het bewijs. Afwijkingen staan soms specifiek in `aiNote`.
- De volledige oude stadsexport is ouder dan de losse gebouwmodellen. De kaart rendert de losse modellen vanuit de JavaScript-bouwers, niet vanuit die volledige GLB.
- Oudere bron-README's zijn deels historisch logboek. Aantallen daarin zijn niet noodzakelijk actueel. Sommige metadata noemt inmiddels verdwenen tijdelijke onderzoeksbestanden; de actuele `src`/`ai`-paden in de catalogus werken zonder die bestanden.
- De ruwe onderzoeksdownloads, AI-PNG-masters, persoonlijke QA-map en volledige oude Git-historie zijn niet allemaal opgenomen. Ze zijn niet nodig om de website te draaien. Een verse clone bevat de publicatiebeelden, bronverwijzingen, beschikbare prompts en procedurele bouwers.

## Volgende werksessie

1. Lees `AGENTS.md`, bekijk `git status` en lees het concrete verzoek van de eigenaar.
2. Start lokaal, draai `npm run check` en reproduceer het probleem of bekijk de te wijzigen locatie.
3. Werk in `site/`, behoud bronverantwoording en voer passende controles uit.
4. Leg relevante wijzigingen/open punten hier vast, commit en publiceer volgens `PUBLICEREN.md`.
5. Controleer het echte publieke adres en rapporteer precies wat lokaal, gepusht of live is.

Deze overdracht is geen opdracht om eerdere afgewezen voorstellen of losse historische ideeën alsnog uit te voeren.
