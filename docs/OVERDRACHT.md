# Overdracht — zelfstandig verder zonder de chat

Bijgewerkt: 28 september 2026.

## Doel en huidige staat

RDAM39 is een Nederlandstalige ruimtelijke verkenning van Rotterdam vóór mei 1940, met historische foto's, AI-interpretaties, een moderne vergelijking en een afzonderlijke WOII-verhalenlaag. De eigenaar koos op GitHub de repositorynaam **lukemarcom**, eigenaar **lukemarcom-glitch**, omschrijving **Hobbyprojecten**. De eigenaar heeft op 26 september 2026 expliciet gevraagd de repository openbaar te maken en GitHub te koppelen, zodat ook Claude aan het project kan werken.

De overgenomen inhoud is versie 33 van het bestaande project: 97 gebouwen/buurten en 18 verhalen. Elk van de 115 locaties heeft minimaal één gekoppeld origineel/AI-fotopaar. De catalogi zijn de actuele waarheid; gebruik `npm run check` om aantallen en bestanden opnieuw te controleren.

Het snapshot komt uit broncommit `f31a1b0009b3967d5ae79233364f3c8fb4c38a2d` van de oude publicatierepository. Dit is een herkomstverwijzing; deze commit hoeft niet in deze nieuwe Git-geschiedenis te staan. Alle direct benodigde bestanden zijn meegekopieerd naar `site/`.

## Publicatiestatus

- Oorspronkelijke website: https://rotterdam-1939-en-nu.aigenwijzer.chatgpt.site/ . Deze blijft tijdens de migratie bestaan.
- Nieuwe GitHub-repository: https://github.com/lukemarcom-glitch/lukemarcom — openbaar, gecontroleerd via de GitHub API.
- Openbare website: **https://rdam39.nl/** — eigendom geverifieerd, DNS via Hostnet naar GitHub Pages, geldig certificaat voor root en www en **Enforce HTTPS** ingeschakeld. Op 26 september 2026 anoniem gecontroleerd op desktop en mobiel; zie `DOMEIN.md` en `VERIFICATIE-DOMEIN.json`.
- Het oorspronkelijke GitHub-adres https://lukemarcom-glitch.github.io/lukemarcom/ is eerder op 26 september 2026 succesvol anoniem getest en verwijst nu naar het eigen domein. Het is geen onafhankelijke uitwijkwebsite.
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

De domeinoverstap naar **https://rdam39.nl/** is afgerond. Nadat de DNS was overgenomen, is de vastgelopen certificaataanvraag via GitHub Pages opnieuw gestart. GitHub heeft een Let's Encrypt-certificaat voor `rdam39.nl` en `www.rdam39.nl` uitgegeven en HTTPS wordt afgedwongen. HTTPS/TLS, alle HTTP-/www-/GitHub-doorsturingen, de live bronbestanden en de desktop-/mobiele browsercontrole zijn geslaagd zonder certificaatbypass, JavaScript- of HTTP-fouten. De controle omvat fotoparen, lichtbak, verhalen en Nu 3D; screenshots zijn visueel beoordeeld. Bewijs staat in `VERIFICATIE-DOMEIN.json`, beheerinstructies in `DOMEIN.md`. Er is geen wijziging van de historische inhoud of extra hostingabonnement uitgevoerd.

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

## Tien aanvullingen op 28 september 2026

Toegevoegd: Grand Hotel Central, Ooglijdersgesticht Oostmolenwerf, Bank R. Mees & Zoonen, Vroom & Dreesmann – De Zon, Rotterdamsch Leeskabinet, Bijbank Nederlandsche Bank, Rotterdamsch Nieuwsblad, Amsterdamsche Bank Oostplein, Twentsche Bank Noordblaak en Van Nelle – De Rijzende Hoop. Elk heeft een licht 3D-model, GLB/Blender-export, achtergrondverhaal, Wikipedia-link, ongewijzigde bronfoto en AI-kleurinterpretatie. Totaal: 97 gebouwen/buurten, 18 verhalen, 243 bronfotovermeldingen en 223 AI-paren.

Bronnen, licenties, fotodata, locatie- en kleuronzekerheden staan in `site/landmarks/expansion-20260928-sources.md` en per locatie in `image-source.json` / `PROMPT.txt`. De hoofdvolumes en gevelritmes zijn schematisch; geen ingemeten reconstructies. Hotel Central beperkt zich tot de voorbouw naast Luxor. Twentsche Bank heeft een lagere zekerheid: de vrij beschikbare foto is een avondopname van een deel van de gevel. Bijbank-AI heeft een afwijkend gevelopschrift; dit staat bij de foto vermeld.

De bestaande kaart blijft behouden. Achtergrondbebouwing opnieuw uit de oorspronkelijke contouren geknipt, met 4 m vrijruimte bij de tien modellen. Geen geometrische overlap met andere landmarkmodellen. De generieke gevelgenerator ondersteunt nu ook afzonderlijke boogramen voor het Leeskabinet.

Lokale inhoudscontrole, markerregressies, algemene desktop/mobiele browsercontrole en gerichte controle van alle tien modellen en fotoparen geslaagd. Gepubliceerd via Actions-run 36433124207 uit commit `2672b3f3472e5cf09848eb182c54ef5fa400fd2e`. Op https://rdam39.nl/ anoniem gecontroleerd: 97 locaties in de gebouwencatalogus, alle tien nieuwe fotoparen geladen, alle tien GLB-bestanden bytegelijk aan lokaal, Nu 3D en mobiele galerie/lichtbak zonder JS-/HTTP-fouten. Zie `VERIFICATIE-UITBREIDING-20260928.json`.


## 28 september 2026 — tien aanvullende gebouwen, ronde B

Toegevoegd: Warenhuis Gebr. Lampe, Juwelier Lucardie, Hotel Het Gouden Hert, Amsterdamsche Bank Coolsingel, Grand Hotel Coomans, Sint-Laurentiuskerk Houttuin, Bervoets Heerenstraat, Hofje Gerrit de Koker, Sint-Laurenshofje en Cafetaria Ruttens. Totaal 107 locaties, 18 verhalen, 253 fotovermeldingen en 233 origineel/AI-paren. De twee laatste locaties met panoramabeeld delen dezelfde bronopname; dit zijn geen tien unieke foto-opnames.

Elk nieuw item heeft een zichtbaar city33-model, GLB, verhaal, bron-/rechtenmetadata, prompt en fotopaar. De generieke Goudsesingel-straatwand is verplaatst naar de gedocumenteerde winkelwand ten westen van de Hoveniersstraat, zodat de twee hofjes zelfstandig kunnen worden getoond. Eerdere plaatsing/modelparameters zijn in de catalogus bewaard. Alle nieuwe footprints passen binnen de bestaande werkgrens; geen overlap met andere zelfstandige modellen. Achtergrond opnieuw uitgesneden uit de oorspronkelijke contouren.

Historische beperkingen: plaatsing circa 10–15 m onzeker; geen ingemeten modellen. Hofjes alleen met voorgebouwen, zonder verzonnen binnenplaatsen. Gouden Hert toont een ouder hotelpand (foto 1911–1912, vóór demping); bedrijfsgebruik in 1939 is niet bevestigd. Boskes kerkfoto is al in kleur: AI-versie betreft herstel. Panoramabeeld behoudt de oorspronkelijke fotografische naden. Zie `site/landmarks/expansion-20260928-b-sources.md`.

Lokaal gecontroleerd: `npm run check`, algemene browsercontrole met desktop/mobiel, alle tien nieuwe modellen en fotoparen afzonderlijk. Live geverifieerd op https://rdam39.nl/: release `63b0995`, Pages-run `36448298580` en Check-project-run `36448298413` beide geslaagd. Anonieme browsercontrole heeft alle tien modellen en fotoparen geopend, inclusief mobiele viewport, zonder paginafouten. Alle 30 nieuwe publieke model-/fotobestanden bereikbaar. Bewijs: `docs/VERIFICATIE-UITBREIDING-20260928-B.json`.

## 28 september 2026 — locatie op verzoek

Nieuwe knop **Toon waar ik nu ben** in Toen en Nu, ook op smartphones. Geen GPS-opvraag bij paginaladen; alleen `getCurrentPosition` na aantikken, geen volgstand. Eenmalige blauwe stip plus cirkel met door browser opgegeven nauwkeurigheid. Vernieuwen en verbergen mogelijk; na 60 seconden, bij tabblad verbergen of paginaverlaten wordt de positie gewist. Geen opslag, analytics, reverse-geocoding of netwerkverzoek met gebruikerscoördinaten.

`site/location.js` toetst WGS84-locaties in dezelfde lokale meters als de scène. Gebied is **de bestaande voorlopige werkgrens (`model.boundary`) plus 500 meter**, niet een bewezen exacte brandgrens. Dit corrigeert de eerdere te stellige chatbelofte dat een exacte brandgrens beschikbaar was. Gecontroleerde gemeentelijke ArcGIS-bron `onderzoek Brandgrens coordinaten` bevat 375 lampenpunten, geen compleet gebiedsvlak; de oudere gemeentelijke `Brandgrens_mei1940`-service is onbereikbaar. Een gevonden schoolkopie bevat een open lijn met onduidelijke herkomst. Geen van deze is stilzwijgend als exact grensvlak geïmporteerd. De kaartondergrond en getekende werkgrens zijn niet veranderd. Vervang de GPS-grens pas door een geverifieerd gebiedsvlak met bronverantwoording.

Acceptatie: maximaal 100 m opgegeven meetonnauwkeurigheid, maximaal 30 seconden oude meting, eindige/geldige coördinaten. Buiten de grens moet ook de nauwkeurigheidsmarge binnen de buffer van 500 m passen. Afgewezen metingen en foutmeldingen veranderen de camera niet. Geldige meting verplaatst alleen het cameradoel, begrensd tot de bestaande kaartuitsnede; afstand/zoom en hoek blijven gelijk. Geen `fitBounds`, automatische zoom of voortdurende camera-updates. Late callbacks na annuleren/time-out worden genegeerd. HTTPS en browsertoestemming blijven vereist: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition .

Validatie: `npm run check` (6 tests), `npm run test:browser`, `node scripts/location-browser-check.mjs` met gesimuleerde browser-GPS. Gerichte controle omvat geen automatische aanvraag, buitengebied, onnauwkeurigheid, weigering, time-out, onbeschikbaarheid, annuleren/late callback, camera-invariant, Toen/Nu, mobiel en desktop. Fysieke GPS op straat en iOS-permissiedialogen zijn niet op een echte telefoon getest. Screenshots en testresultaten staan lokaal onder `artifacts/geolocation/` (niet in Git). Gepubliceerd uit commit `1efb768`; Pages-run `36477688047` en Check-project-run `36477688010` geslaagd. Anonieme eindcontrole op https://rdam39.nl/ geslaagd met gesimuleerde GPS; alle vier gewijzigde runtimebestanden bytegelijk aan lokaal. Ook de echte Chromium Geolocation API getest met door Playwright ingestelde coördinaten (Rotterdam geaccepteerd, Amsterdam geweigerd). Zie `VERIFICATIE-GPS-20260928.json`.

## 28 september 2026 — directe beeld- en tekstbronnen

Bronnenronde over alle 125 locaties en 253 fotovermeldingen. Fotobron, maker, datering, rechten en waar beschikbaar collectienummer staan nu direct bij het beeld, ook voor de AI-afgeleide. In fullscreen staat een vaste Fotobron-link. Inhoudelijke bronnen zijn niet meer verstopt achter modeldownloads en vermelden welk onderwerp ze onderbouwen. Wikipedia is aanvullende achtergrond, niet de standaard bewijsbron voor ieder pand. Verhuisde/verkeerde verwijzingen zijn gecorrigeerd; aanvullende specifieke bronnen zijn opgenomen en externe beperkingen expliciet vastgelegd.

Zie `BRONNENAUDIT-20260928.md` en het bijbehorende JSON-register. Belangrijk: de Jaarboekje-reader en verschillende oudere websites blijven onbereikbaar; bij enkele andere bronnen blokkeert geautomatiseerde toegang. Dit niet presenteren als een volledige historische of juridische goedkeuring. Originele foto’s, AI-beelden en modellen zijn niet gewijzigd. De gedeelde UI staat in `site/sources.js` en `site/sources.css`; bronafspraken en regressiecontroles zijn toegevoegd voor toekomstige uitbreidingen.

Gepubliceerd uit `c6dd093b705ec4045642a8be43899cc5c50d9e4a`: Pages-run `36481677275` en Check-project-run `36481677336` geslaagd. Daarna anoniem op https://rdam39.nl/ alle 125 locaties, 253 originele credits en 233 AI-credits gecontroleerd; ook de algemene desktop-/mobiele browsercontrole, Nu 3D en fullscreen geslaagd zonder pagina- of HTTP-fouten. Negen gewijzigde runtimebestanden zijn bytegelijk aan de lokale release. Bewijs: `VERIFICATIE-BRONNEN-20260928.json`.

## 2 oktober 2026 — doorlopende uitbreiding in uitvoering

Opdracht: rondes van vijf bij het bombardement vernietigde gebouwen, backup/tag na iedere tien voltooide toevoegingen. Zie UITBREIDINGSREGISTER.md voor kandidaten, afgewezen locaties, beeldrechten en voortgang. Nog geen nieuwe ronde gepubliceerd; livebasis blijft de eerdere 107 locaties.

Lokale catalogus heeft nu één extra **concept**, Schotse kerk aan Vasteland. Model, origineel/AI-proef en GLB aanwezig; ronde gevelvensters en open dakruiter toegevoegd aan de gedeelde modelbouwer. Technische tests en algemene browsercontrole geslaagd. Historische eindcontrole nog open: ongeveer 15% van de footprint valt buiten de voorlopige werkgrens; kleine AI-letters nog onvoldoende betrouwbaar. Dit concept niet zonder die controles als voltooid presenteren of publiceren. Onderzoek en beeldvoorbereiding voor Noordzee, Nijgh & Van Ditmar, Van Doorengesticht en Doopsgezinde kerk lopen door. Geen backupcheckpoint bereikt.

Vervolg 2 oktober: Noordzee toegevoegd als tweede lokaal model (catalogus 109). Origineel/AI-paar, verhaal, bronnen, GLB en uitgesneden achtergrond aanwezig. Volledige footprint binnen werkgrens, geen overlap met andere landmark-footprints. Gerichte model- en mobiele fotocontrole uitgevoerd. Hoogten en details blijven schematisch. Nog geen ronde van vijf afgerond/gepubliceerd. Browsercheck wacht nu op zichtbare bovenkant van de hoofdfoto na miniatuurselectie, zodat een vroege opname tijdens smooth scroll niet als correct wordt beoordeeld.

Vervolg: Nijgh & Van Ditmar aan Wijnhaven toegevoegd als derde lokaal concept; catalogus 110. Twee originele/AI-fotoparen (Van de Poll, 1933, CC0), model en GLB, verhaal met oorspronkelijk Forum-colofon en exacte puinruimingsbron. Voetafdruk binnen werkgrens, geen modeloverlap. Eerste foutieve AI-geveltekst gericht gecorrigeerd; kleine eindletter S en straatnaambordjes blijven als interpretatiebeperking benoemd. Beide paren op desktop/mobiel en fullscreen gecontroleerd. Nog geen push/publicatie en nog geen tien voltooide toevoegingen.

Van Doorengesticht heeft nu ook een losse 3D-gevelstudie in research/expansion-20261002/van-dooren/model-draft.json en een gecontroleerd origineel/AI-paar. Nog niet in de catalogus: footprintconflict bij Passage moet eerst worden opgelost. De preview-oorsprong [0,0] is geen locatie. Zie UITBREIDINGSREGISTER.md.

Van Dooren is inmiddels de vierde lokale catalogustoevoeging (111 locaties). Geschatte breedte Passage bijgesteld 32→27 m met behoud zuidrand; Van Dooren circa 12 m breed, verdere maatvoering expliciet benaderd. Beide GLB’s bijgewerkt. Footprint/achtergrond, gekoppelde gevels en desktop/mobiele galerie gecontroleerd. Nog geen ronde gepubliceerd. Zie laatste registersectie voor actuele status.

Doopsgezinde schuilkerk toegevoegd als vijfde lokaal model (catalogus 112). Historische binnenbloklocatie, origineel/AI-interieur, directe bronnen, GLB en achtergrondcontrole aanwezig. Dakvorm/maten expliciet benaderd; kerk uit 1951 niet verwisseld. Gerichte mobiele/desktopcontrole geslaagd, camerahoek aangepast voor zicht langs warenhuis. Ronde nog niet gepubliceerd: Schotse eindcontrole en gezamenlijke publicatiecontrole staan open. Zie uitbreidingsregister.

## Ronde 1 gepubliceerd en geverifieerd

Commit 8c135ef: Schotse kerk, Noordzee, Nijgh & Van Ditmar, Van Doorengesticht, Doopsgezinde schuilkerk. Catalogus 112. Pages-run 36992254370 en Check-run 36992254296 geslaagd. Op https://rdam39.nl/ alle vijf afzonderlijk in anonieme browser getest, desktop/mobiel, foto/AI/lichtbak en Nu 3D zonder JS-/HTTP-fouten of overflow. 21 publieke model-/beeld-/runtimebestanden bytegelijk aan lokaal. Bewijs VERIFICATIE-UITBREIDING-20261002-R1.json.

Doorlopende goal: 5 nieuwe gebouwen voltooid sinds start; volgende backupcheckpoint na nog 5. Historische grenzen/maten blijven benaderd; Schotse randligging en kleine AI-letters expliciet toegelicht. Volgende ronde in research/expansion-20261002/round2/kandidaten.md; kandidaten nog niet toegevoegd.

Ronde2 brononderzoek voortgezet; zie research/expansion-20261002/round2/broncontrole.md. Adres/architectconflict loge open. NHM-vervangingsontwerp1943 en IJsendijk-tegeltableau expliciet onderscheiden van vooroorlogse gebouwfoto’s. NHM-foto’s gelokaliseerd in bibliografische verwijzing (Jaarboek1989 p.172/176; Verheul1916 platen71/72), maar nog niet visueel/rechtelijk gecontroleerd. Stadsarchief-browser vraagt menselijke verificatie; lokale Jaarboekdownload DNS-fout. Geen nieuwe modellen of AI-paren toegevoegd, teller blijft5; backup bij10 nog niet bereikt.

Ronde2 vervolg: De Nederlanden van1845 aan Zuidblaak26 als prioriteitskandidaat toegevoegd aan onderzoek. Drie foto’s en twee Berlage-tekeningen opgeslagen, plus eerste gecontroleerde AI-proef/prompt/metadata. Grote gevelwoorden expliciet in prompt en visueel nagekeken. Nog geen catalogus/model; teller blijft5. CommonsAPI werkt als alternatief voor slecht bereikbare pagina’s. Eerst locatie/maatvoering en juiste BERL-bronlink controleren.

Nederlanden vervolg: CC0-luchtfoto1924 opgeslagen en bekeken (omgeving-1924.jpg/aerial-source.json); eerste schematische gevelstudie model-draft.json, nog niet gerenderd/geplaatst. Tweede AI-proef naar schuine1935-foto opgeslagen maar kleine raambordjes foutief verscherpt: correctie vereist vóór publicatie. Geen cataloguswijziging; teller5.

Nederlanden nu lokaal in catalogus (113 locaties): schematisch city33-model, GLB/Blend, eerste origineel/AI-paar, directe bronnen en uitgesneden achtergrond. Geschatte centrumkaartpositie pixel3157,2521; circa15m onzeker. Footprint binnen werkgrens, geen overlap losse modellen. npmcheck, algemene en gerichte browsercontrole geslaagd; model- en mobiele screenshots bekeken. Nog niet gepubliceerd/voltooid geteld: tweede AI-proef corrigeren, verdere plaatsings-/dakcontrole en ronde2 afronden. Eerste5 blijven enige afgeronde toevoegingen sinds goalstart.

Nederlanden tweede fotopaar gecorrigeerd en lokaal toegevoegd. Raambordjes teruggebracht tot onleesbare tekens; hoofdtekst behouden, beperkingen bij foto. Beide paren gericht desktop/mobiel/lichtbak getest, geen fouten; mobiele tweede foto bekeken. npmcheck:113 locaties,261 foto’s,241 paren,9 tests goed. Nieuwe kandidaat bankpand Brouwerijsteeg: vooroorlogs en verwoestingsbeeld met metadata opgeslagen in research/expansion-20261002/bank-handel-transport; banknamen/bedrijfsopvolging nog verifiëren. Nog geen tweede afgeronde ronde of nieuwe publicatie.

Bank Brouwerijsteeg vervolg: naamcontrole en AI-proef vastgelegd in research/expansion-20261002/bank-handel-transport. Foto toont MARX & Co / BANK; advertentie1918 adres56 tegenover secundaire bron58. Opvolging naar Bank voor Handel en Transport niet bewezen. Eerste AI-proef niet goedgekeurd: kleine teksten en extra figuren/details te stellig. Alleen onderzoek toegevoegd; nog geen model/catalogus/publicatie. Teller afgerond blijft5.

Bankvervolg: AI-proef02 afgekeurd; proef03 uit origineel zachter maar nog eindcontrole nodig. Schetsmodel-draft.json en plaatsingskandidaat opgeslagen, niet aan runtime toegevoegd. Vergrote luchtfoto1924 toont herkenbare dakkapel/koepel en plat achterdak; eerdere indruk van geheel andere kap niet bevestigd. Achterbouw/koepel en precieze positie blijven werkpunten. Geen publicatie; afgeronde teller5.

Marx & Co’s Bank nu lokaal toegevoegd (114 locaties): voorste 3D-bouwmassa met gebogen koepel, GLB/Blend en één origineel/AI-paar. Derde kleurproef geselecteerd met expliciete beperkingen voor kleine letters en scheepsdetails. Gevelspiegeling na screenshot gecorrigeerd; koepel rechts zoals bron. Footprint binnen werkgrens, geen overlap losse modellen; achtergrond uitgesneden. npmcheck9 tests goed; gerichte en algemene browsercontrole desktop/mobiel/lichtbak/Nu3D geslaagd. Model- en mobiele beelden bekeken. Historische positie circa20m onzeker, achterbouw niet gereconstrueerd; bedrijfsopvolging niet bewezen. Nog geen ronde2-publicatie: lokaal2 van5 toegevoegd; afgeronde publieke teller blijft5.

Volgende kandidaat De Drie Kolommen: originele gevelplaat en architectenartikel1882 gevonden en visueel gecontroleerd; adres72, architectJ.VerheulDzn. en perceelsmaten nu primair onderbouwd. Opgeslagen research/expansion-20261002/drie-kolommen. Nog geen betrouwbare fotobron/kaartplaats, dus geen catalogustoevoeging. HeiligeGeesthuisHoogstraat afgewezen voor deze ronde wegens sloop1939. Ronde2 lokaal2/5; publieke teller5.

Station Beurs onderzocht: vier originele bronbeelden met metadata opgeslagen in research/expansion-20261002/station-beurs. Foto HUA163341 (augustus1938, Nederlandse Spoorwegen volgens registratie) visueel gecontroleerd; toont glazen perronwand en middenfronton met klok. Spoorwegmuseum bevestigt verwoesting door bombardement1940. Eerste AI-proef afgekeurd wegens extra persoon en gewijzigde letters; tweede zachtere proef opgeslagen met prompt, nog detailcontrole nodig. Ontvangstgebouw/maatvoering/plaatsing tegenover bestaande Luchtspoor-kap nog onderzoeken om dubbel tellen te vermijden. Geen runtimewijziging of publicatie; ronde2 lokaal2/5, publiek afgerond5.

Station Beurs vervolg: KLM-luchtfoto1935 (CC0, HDL EF90B2CE61944207BF93319C02424A98) visueel gecontroleerd, bouwmassa van ontvangstgebouw naast spoor onderscheiden. Research-model-draft.json met centrale hogere massa en lagere vleugels opgesteld, niet runtime. Historische kaartcontour geeft circa557m² overlap met bestaande schematische Luchtspoor-footprint: eerst spooras op bronkaart traceren/corrigeren, gebouw niet opschuiven. Stationnaam BLAAK op de in1955 uitgegeven kaart niet als naam1939 overnemen. Extra prentbriefkaart is duplicaat van HUA163078; niet als unieke foto tellen. Ronde2 nog lokaal2/5; publieke teller5.

Station Beurs nu lokaal toegevoegd als derde van ronde2 (115 locaties). Ontvangstgebouw als schematisch city33-model met hoge middenmassa, lagere vleugels en klokken, GLB/Blend, origineel HUA163341 en tweede AI-kleurproef met expliciete detailbeperkingen. Historische spooras opnieuw van kaart afgeleid: beginpixel2874,1608 en eindpixel3449,2407; oude route bewaard in catalogus. Brugspan nu via bridgeSpan329–371m; fotopunten geprojecteerd op nieuwe as. Luchtspoor-GLB opnieuw geëxporteerd. Station binnen werkgrens, geen overlap andere landmark-footprints. 9m spoor-clearancerand raakt Binnenrotte-straatwand2.3m² maar fysieke spoorvloer4.5m niet. Achtergrond opnieuw uitgesneden. Npmcheck9tests geslaagd; algemene en gerichte desktop/mobiel/lichtbak/Nu3D-browsercheck geslaagd, model en mobiele galerie visueel bekeken. Ronde2 nog niet gepubliceerd; publiek afgeronde teller5. Hoogten, raamritme en perronkap blijven schematisch.

Volgende kandidaat Internatio Wolfshoek: vier archiefbeelden en metadata opgeslagen in research/expansion-20261002/internatio-wolfshoek (1910,1938–1939,ruïne3–4juni1940,luchtfoto1935). Foto1910Van den EndeCC0 en latefotoanoniemPD tonen verschillende linkerbouwfasen; niet mengen. Eerste1910AI-proef voorlopig bruikbaar, tweede1938proef te veel verscherpte details/groen, nog niet geselecteerd. Prompts bewaren verbod op verzonnen onleesbare opschriften. Bedrijfstekstbron en preciezefootprint nog onderzoeken, daarna model; geen nieuwe runtime. Ronde2 lokaal3/5, publiekafgerond5.

Internatio Wolfshoek nu lokaal toegevoegd als vierde van ronde2 (116locaties), met schematisch L-model, koepeltoren, oudere Wijnhavengevel en modernere Wolfshoekvleugel. Positie na visuele controle gecorrigeerd naar kaartpixel2799,2727; achtergrondrest naast toren opgeruimd via perceel-exclusionPolygon. Geen modeloverlap, binnen werkgrens. GLB/Blend opnieuw geëxporteerd; bovenste boogvensters toegevoegd. Eén1910origineel/AI-paar in galerie, oudere bouwfase duidelijk gelabeld;1938kleurproef nog niet geselecteerd. Npmcheck9tests, gerichte desktop/mobiel/lichtbak/Nu3D en algemene browsercontrole geslaagd. Model en mobiele galerie bekeken. Bedrijfsachtergrond beperkt tot archiefidentificatie; meer specifiek tekstbewijs en tweede fotopaar blijven eindcontrolepunten. Nog geen ronde2publicatie; publiekafgerond5.

Internatio tweede fotopaar lokaal toegevoegd: origineel1938–1939 plus derde kleurproef, met kale bomen en behoud van zachte details. Tweede proef blijft afgekeurd wegens extra groen en verscherping. Prompt03 en bronmetadata bewaard; onleesbare scheepsletters mogen niet worden aangevuld. Npmcheck9tests en gerichte tweede-paarcontrole desktop/mobiel/lichtbak/Nu3D geslaagd; mobiele galerie bekeken. Zeevischmarkt als vijfde kandidaat afgewezen: archiefregistratie107267335 beschrijft afbraak1932–1936, dus geen door bombardement vernietigde hal. Onderzoek bewaard. Nieuwe onderzoeksrichting: tabaksfabriek Dobbelmann Hoogstraat/Groenendaal; niet verwarren met fabriek Rubensstraat of Waddinxveen. Ronde2 lokaal4/5; geen publicatie.

Dobbelmann-onderzoek vervolgd: SNT bevestigt bombardementsverlies Hoogstraat; vooroorlogs fotobeeld met gecontroleerde rechten nog niet gevonden. Nieuwe bruikbare Spaarnestadfoto1915 blijkt Van Rossem, niet Dobbelmann. Origineel en volledige Commonsrechtenmetadata opgeslagen onder research/expansion-20261002/van-rossem; bordtekst visueel gecontroleerd (DE BESTE VARINAS, afwijkend van metadata). Eerst bombardementsverlies/adresconflict Nieuwe Haven versus Leuvehaven en historische footprint verifiëren. Geen nieuwe runtime of AI; ronde2 blijft lokaal4/5, publiekafgerond5.

Van Rossem eerste AI-kleurproef gemaakt/opgeslagen met exacte bordtekst en prompt; proef nog niet runtime. Kleine details blijven interpretatief. Exact Maasbode-artikel gelokaliseerd (ddd:110531092:mpeg21:a0051), maar toegang403; inventaris940 via Archieven.nl gevonden met blijvende proxy-ID F45F54475D0045EC9700A0847058C7DF. Oorlogsverlies en footprint blijven te verifiëren. Geen nieuwe publicatie; ronde2 lokaal4/5.

Van Rossem broncontrole verder: Maasbode23-09-1940 nu via browser daadwerkelijk gelezen; bevestigt voormalig Nieuwe-Havenadres, machines uit puin en herstartBoezemsingel. Archief940inv1 bevestigt terreinNieuweHaven/Groenendaal; inv31notitie1945 niet gedigitaliseerd. Twee aanvullende Spaarnestadinterieurfoto’s1915 metPD-metadata opgeslagen en bekeken (146490761/146490777). Exact historisch perceel en expliciete bombardementsdatering nog eindcontrole; geen model/runtime/publicatie.

Van Rossem eerste city33-gevelstudie opgeslagen in research/model-draft.json en standalone gerenderd/visueel bekeken.1866driehoeken,5materialen. Geen historische plaatsing: center0,0 uitsluitend preview. Maten/onzichtbare achterbouw onzeker; sierhijsgevel en gepleisterde dakzijwang nog verfijnen. Geen runtimewijziging, ronde2lokaal4/5 blijft.

Van Rossem detailcorrectie: huisnummer op lage zijbouw blijkt38, niet58. Nieuwe AI-proef02 en PROMPT-02 opgeslagen; proef01 afgekeurd. Modelstudie vierdakkapellen/lichtezijgevel, overmatige banden verwijderd. ArchiefinventarisMidden-Hollandac196inv682 geeft expliciete bevestiging vernietiging14mei1940; origineelkaartje zelf niet bekeken. Exactperceel nog niet vastgesteld; geenruntime/publicatie. Ronde2lokaal4/5.

VanRossem: tweede fotopaar voorbereid (sorteerderij1915), AI-proef02 corrigeert extra gezicht uit proef01; prompts/lettercontroleMR-M-F enSUMA bewaard. Nieuwe burenfoto’sLidmatenhuis59 enluchtfoto1921 voorpositionering. HisGIS1903adreslaag gevonden in documentatie, vieweronbereikbaar; exactperceel nog nietgelokaliseerd. Geenruntime/publicatie; ronde2lokaal4/5.

Parallelle ronde2-controle: Nederlanden1845-voorkap nu circa8m diep met vlak achterdak conform luchtfoto1924; exacte verhouding blijft schatting. Catalogus/GLB/Blend bijgewerkt, footprint ongewijzigd en achtergrond opnieuw uitgesneden. Npmcheck9tests en algemene browsercontrole desktop/mobiel/lichtbak/Nu3D geslaagd; gerichte model-screenshot bekeken. Internatio-torenbogen door tweede agent gecontroleerd zonder wijziging. NHM1916album met vijf fotos gevonden; gevelstudie1938driehoeken gerenderd en bekeken, gebogen gevelcontour via optionele facadeReliefs ondersteund. NHM-kleurproef01 nog kandidaat: kleine deurletters en aangescherpt reliëf vereisen terughoudendheid. NHM-plaatsing nog in onderzoek, niet runtime. VanRossem exacte perceel blijft onbewezen en is geparkeerd; extra CC0-contextmateriaal en locatoronderzoek opgeslagen. Ronde2 blijft lokaal4/5, publiekafgerond5; geen publicatie of tiengebouwenbackup bereikt.

Ronde2 lokaal compleet: NHM Zuidblaak toegevoegd als117e locatie, met voorgebouw18×9m/hoogtecirca24m, vierdakkapellen en gebogenmiddentop. Plaatsing getoetst aan luchtfoto1924/1939 en kaartperceel westvanBrouwerijsteeg; circa12m onzeker, achterbouw bewust nietuitgewerkt. Ongewijzigde albumplaat71(1916) plus tweedeAIproef en exacte correctieprompt toegevoegd; kleineletters/reliëf blijven expliciet interpretatief. EigenPD-anon70-beoordeling vastgelegd, geen GettyCC0claim. GLB/Blend en achtergrond opnieuw geëxporteerd. Npmcheck117gebouwen/18verhalen/266fotos/246paren/9tests goed; NHMdesktop/mobiel/lichtbak/Nu3D-test geslaagd en beelden bekeken. Vijfmodellen binnenwerkgrens en zonder onderlinge landmarkoverlap. Publicatie/backupcheckpoint volgt pas na succesvollelivecontrole.

## Ronde 2 live — teller 10

Release fb1af0309d080acca750a7264be51ef39cf09840 is gepubliceerd: Pages 37008696841 en Check project 37008696776 geslaagd. Alle 23 gecontroleerde runtimebestanden bytegelijk aan lokaal; vijf afzonderlijke anonieme desktop-/mobiele controles geslaagd, inclusief AI-paar, lichtbak en Nu 3D. Zie VERIFICATIE-UITBREIDING-20261002-R2.json. Deze ronde bevat 5 gebouwen en 7 fotoparen; totaal 10 nieuwe voltooide toevoegingen sinds start van de rondes. Backupcheckpoint wordt vastgelegd met tag rdam39-20261002-10-buildings en een externe Git-bundle. Ronde 3 heeft een onderzoeks-shortlist; nog geen nieuwe modellen en geen uitputtingsclaim.


Ronde3 in onderzoek met drie parallelle subagents. NieuweWesterkerkAmmanstraat nu op twee historische kaarten gelokaliseerd (circa46m afwijkend van Wikidata); standalonecity33-modeldraft klaar, visuele/overlapcontrole nog gaande. KLM1933-luchtfoto ongewijzigd en eersteAI-kleurproef lokaal bewaard metprompt; nog niet geselecteerd wegens verscherpte kleine details. HEMA KorteHoogstraat nieuwekandidaat: twee echte exterieurs1930/1938 succesvol gedownload en bekeken, duidelijk verschillende bouwfasen, verhuizing/verbouwing nogonderzoek. BankvanLeening verwoestingsbewijs ontbreekt; titel 'gingdeluchtin' gaat over verhogen1843. Oppertsekerk/WaalseSchool nogonvoldoende beeld/plaatsingsbewijs. Geen nieuwe runtimepublicatie, afgeronde teller blijft10, backupcheckpoint geldig. Claude-loginonderwerp blijft buiten doelwerk.

NieuweWesterkerkAmmanstraat lokaal toegevoegd als118e locatie, eerstevanronde3. Modelvolgt geveltekening met tweelingtorens,23×36mkaartcontour, geschatte35mspitsen; achtergevel/kleuren/hoogten explicietbenaderd. Roosvensternafrontvergelijking verkleindengeïntegreerd. GLB/Blenduitgevoerd, achtergrondvrijgemaakt, binnenwerkgrensengeenlandmarkoverlap. EénKLM1933contextfotopaar, bronorigineelbyteidentiek, AIalsinterpretatie metdetailcaveat. Npmcheck9tests engerichtebrowserdesktop/mobiel/fullscreen/Nu3Dgeslaagd, hoofdagentmodelbeeldbekeken. Ronde3noggeenpublicatie; afgerondepublieketeller10. HEMA1938eersteAIproeftegedetailleerd; tweedezachtereproefmetexacteopschriftenopgeslagen, noggeenruntime.

HEMA Korte Hoogstraat lokaal toegevoegd als119e locatie, tweedevanronde3:1938gevel met drie horizontale raambanden, schilddak, vier benaderde zijluifels en HEMA-letters. Eén1938origineel/AI-paar met directe archiefverwijzingen, rechten en expliciete etalage-/detail-/kleuronzekerheid. Circa10m plaatsingsonzekerheid; architect en verbouwjaar niet toegekend. Werkgrens gecontroleerd, geen overlap met zelfstandige landmark-footprints. Bestaande Hoogstraat-renderer bleek al een ingebouwd HEMA-volume te hebben; dit wordt nu via contextOccupied overgeslagen bij aparte reconstructie. Export initialiseert dezelfde context-clearance als live zodat dit ook in GLB overeenkomt; Hoogstraat en HEMA opnieuw geëxporteerd. Echte createLandmark-preview, desktopmodel en mobiele galerie bekeken. Npmcheck9tests plus algemene en HEMA-gerichte browsercontrole desktop/mobiel/lichtbak/Nu3D geslaagd, geen browserfouten/overflow. Nog geenpublicatie/commit; publieketellerblijft10.

HoofdagentHEMAmodelpreviewencontextOccupied/exportwijzigingbeoordeeld: lokaal2/5ronde3, noggeenpublicatie. Voorwaarts1935AIproefopgeslagenmetexactVOORWAARTSopschrift; plaatsingnoord/zuidkavelnogcontrole. Zumpollevolledigegevel1920gekleurd maarproef01AFGEKEURD wegensfantasielettertjesapotheek/buren; correctienodig. Zumpollemodeldraftmetfootprintenmetadata nuvoorbereid dooragent.

ZumpolleHoofdsteeg lokaal toegevoegd, derdevanronde3: modelmetleesbaregeometrischeZUMPOLLEnaam,2460driehoeken,GLB/Blend,achtergrondvrij. Volledige1280pxCommonsreproductie circa1920 byteidentiekbewaard naast tweedeAIproef; kleineletters/etalagesblijveninterpretatie.140woorden/7directebronnen, positiecirca5monzeker, kleuren/hoogteschatting. Npmcheck9/9+gerichtebrowserdesktop/mobiel/fullscreen/Nu3Dgeslaagd; hoofdagentmodelkaartvisueelbekeken. Voorwaartsnuookinlokalecatalogmaar export/eindcontrolesnoggaande; nietalsvoltooidtellenvoordatdieafgerondzijn. Publicatieblijftuitgesteldtotronde5klaar.

VoorwaartsGedempteSlaak lokaal afgerond als121e locatie/vierdevanronde3. Alleenvoorbouw17x19m metkloktoren; noordelijkekavelmaat17x75pastontwerpBerlage1906 maarpreciesperceelnietbewezen,15muncertaintyvermeld. Achterbouw/tuinnietgemodelleerd.1straatfoto1935/AI-paarmetexactVOORWAARTSnaam,7directebronnen,166woorden. GLB/Blend1518driehoeken, achtergrondopgeschoond, geenoverlapenbinnenwerkgrens. Npm9tests plusalgemeneengerichtebrowsercontrole goed; hoofdagentkaartscreenshotbekeken. Ronde3lokaal4/5,publiekevoltooide10blijft. Maashotelafgewezen wegens10meimortiervuur; AmicitiaZuidblaak20nieuwkandidaatmetexpliciet14meibewijs.

AmicitiaZuidblaak20 alsvijfdeinonderzoek: 1928RCEgevelbeeld envooroorlogsfeestbeeld uitmenukaart1923gevonden; eerstekleurproefmetAMICITIA gecontroleerd/opgeslagen. Exactfeestmomentonbekend, opnamedatumnietgelijkmenukaartjaar. Impost20interviewbevestigt14meiverwoesting. Onafhankelijkeviermodellenreviewgeenblockers; GLB/livepariteitbevestigd, HEMAHoogstraatoverlapvrijwelstraatvlak. HEMA/Zumpollegeometrieietsruimerdanfootprint, huidigeachtergrondvrij; extraexclusionvoorstelwordtvoorbereid. Noggeenronde3publicatie.

### 2 oktober 2026 — Amicitia aan de Zuidblaak (lokaal)

- Catalogus uitgebreid naar 122 met Amicitia, Zuidblaak 20 / Beursplein 20a. Museuminterview in Impost 20 (2000), p.18, noemt expliciet de totale verwoesting op 14 mei 1940 en het gebruik als Rijksbelastingacademie. Sociëteit verhuisde in 1939 naar Pschorr.
- Eén ongewijzigde historische Commons-fotouitsnede uit een menukaart plus afzonderlijke AI-kleurversie, master en prompt toegevoegd. Anoniem/PD-anon-70-EU; bronrecord XXIII-35 direct gelinkt. Menukaart gedateerd 1923, exacte opnamedatum en versieringsgelegenheid onbekend. AI-details en kleuren blijven interpretaties.
- City33-voorbouw met vijf bogen, vijf vensterassen, drie bovenlagen, schilddak, vereenvoudigd fronton met medaillon en geometrische AMICITIA-letters. Geen feestversiering in het model. Alleen voorbouw; achtercomplex en exacte materialen/hoogten onbekend. Plaatsing circa 10 meter onzeker op kaart plus buurpanden.
- Achtergrond opnieuw uitgesneden, GLB/Blend geëxporteerd: 2926 driehoeken. Geen polygonoverlap met bestaande cataloguslocaties. npm check 9/9 en gerichte browsercontrole met desktop, mobiel, fotopaar, fullscreen en Nu 3D geslaagd; geen browserfouten of overflow. Onderzoek en visuele controles in research/expansion-20261002/round3-final-candidate/. Nog geen publicatieclaim.


## Ronde 3 live — teller 15

Release33d642184492292c80cd92e1a012a84af6a3532b is gepubliceerd; Pages37016416141 geslaagd. Alle19 gecontroleerde openbare bestanden bytegelijk aan lokaal. Vijf afzonderlijke anonieme desktop-/mobiele browsercontroles geslaagd, inclusief fotopaar,fullscreen,Nu3D engeenoverflow/errors. Zie VERIFICATIE-UITBREIDING-20261002-R3.json. NieuweWesterkerk,HEMA,Zumpolle,Voorwaarts,Amicitia hebben elk1oud/AI-paar; HEMAvervangt ook oud ingebouwdHoogstraatblok. Totaal122locaties/18verhalen. Voltooideuitbreidingen15; volgendevolledigebackupbij20, eerdere10-backupblijftgeldig. Ronde4PaulKaiserWeinthalresearchklaar maar nognietruntime; Kolkoverlap betreftstraat, laatsthuis≥1.48mvrij. Doel blijftactief.

## 2 oktober 2026 — ronde4 lokaal, nog niet gepubliceerd

Paul Kaiser/Weinthal is locatie123. Ronde4 heeft nu één lokaal model; publiek blijven15 nieuwe toevoegingen afgerond. Gevel na visuele vergelijking verbeterd met dichte borstweringen en twee luifels, GLB herexporteerd (7496driehoeken). Origineel/AI-straatbeeld wordt met eigen toelichting hergebruikt van Zumpolle. Alle75 bestaande city32/city33modellen houden identieke geometrie bij de optionele windows-guard. Negen checks opnieuw geslaagd. Laat vóór rondepublicatie cacheversies, gezamenlijke browsercontrole en publieke bytecontrole volgen.

Nieuwehaven59: bronfoto RCE20192285 plus Verheul1935 als kleurindicatie. AI-proef02 gecorrigeerd (verzonnen extra persoon verwijderd) en voorlopig geselecteerd; nog uitsluitend research/expansion-20261002/round4-a. Exacte historische plaatsing en verwoestingsbron nog in onderzoek. Cineac NRC oudeCoolsingel17 en AstaHoogstraat160 zijn andere kandidaten; geen moderne adressen overnemen. ZwembadTuindersstraat nog onzeker qua beeldrechten.

Volgende volledige backup bij20 voltooide/publiekgeverifieerde toevoegingen. Geen Claude-loginwerk in deze loop. Gebruiker gaf nieuwe suggesties voor menuzoeken/filters en lichtblauw historisch water; dit waren adviesvragen, nog geen implementatieopdracht.

## 2 oktober 2026 — vast menuzoekveld (lokaal)

Expliciet opgedragen menuzoekfunctie toegevoegd via `site/menu-search.js`, aangeroepen vanuit `landmarks/panel.js`. Sticky invoerveld boven de scrollende lijst op desktop en mobiel; zoekt gebouwen/plekken en WOII-verhalen tegelijk op naam, beschikbare alternatieve namen en adres-/locatievelden. Resultaten per categorie, aantal, wissen en lege toestand; toetsenbordfocus en Escape om te wissen. Typen verandert de camera of kaartcategorie niet, pas resultaat kiezen opent de bestaande plek-/verhalenweergave. Historische/moderne kleurvariabelen worden gevolgd. Geen catalogus- of modelwijzigingen voor deze functie.

Npmcheck10/10, algemene browsercheck en gerichte zoekcontrole geslaagd: beide categorieën, camera onveranderd bij invoer, lege zoekopdracht, wissen, selecteren, sticky op390px en geen horizontale overflow. Desktop/mobiele screenshots in artifacts/menu-search-*.png visueel bekeken. Nog niet gepubliceerd; cacheversies bij gezamenlijke release bijwerken.

## Zoekveld en historische watertint —2oktober2026

Op expliciet verzoek vast menuzoekveld toegevoegd en lichtblauwe handgetraceerde waterlaag voor Maas/Koningshaven, Oudehaven, Nieuwehaven en Leuvehaven. Zoeken door gebouwen en verhalen; typen beweegt camera niet. Bronkaart/transformatie behouden; bruggen en Noordereiland vrij. Alleen Toen/historischeondergrond. Zie HISTORISCH-WATER.md voor scope/nauwkeurigheid. Deze interfacepublicatie neemt ook de reeds lokaal gecontroleerde Kaiser-reconstructie mee; na publiekeverificatie wordt de uitbreidingsteller16, resterende4vanronde4 noginonderzoek. Backup blijft bij20.

### Publicatie bevestigd — zoekveld/water

Release262f64baddac537d66a01f284783d89c30ac25f8, GitHubPages37021549194 geslaagd. Tien publieke runtimebestanden anoniem bytegelijk gecontroleerd. Publieke browserchecks: zoeken desktop/mobiel, beide categorieën, cameraongewijzigd bijtypen, stickyveld, wissen, leegstaat en resultaatopenen geslaagd. Zes watervlakken zichtbaar ophistorischekaart en verborgen bij Nu/brandgrenskaart; geenJSfouten. Kaiserfotopaar/model eveneens publiekgeverifieerd. Uitbreidingsteller nu16; vierde ronde heeft nog4toevoegingen tegaan. Volledigebackup bij20.

## Asta lokaal afgerond — ronde4 tweede model

Catalog124; publieke teller blijft16 totdat resterende ronde wordt gepubliceerd. AstaHoogstraat160 is een9×10mvoorbouwstudie,18.4mhoog,20mplaatsingsonzekerheid. Achterzaal onbekend en niet ingevuld. Parent heeft modelpreview, kaartscreenshot, foto/AI en brontekst gecontroleerd; oorspronkelijkeSpaarnestad1930foto byte-identiek bewaard en prompt exact overgenomen. PrimaireSARlicentiePublicDomainMark1.0 zelfgelezen.

De oudere1938foto/AI's niet publiceren wegens conflicterende rechten. Huidig geselecteerd1930paar bewaart hoofdtitelMASKED EMOTIONS en prijsreeks60/60/50/40/30/25; kleineletter-/portretdetails expliciet interpretatief. PassendeWikipediaAsta(Rotterdam) rechtstreeksgeverifieerd. Exports606triangles,94KBGLB; achtergrondgeclipt en geenoverlap. Agentbewijs round4-b/asta-integration-check.md:10checks en algemene/gerichte browserdesktopmobiel geslaagd. Noggeenpublicatieofcheckpoint20.


## Cineac — fotopakket voorbereid, plaatsing in controle

Originele entreefoto (SAR4100/2007-73-TM-76 deel75/beeld03) ongewijzigd en geselecteerde AI-proef02 als PNG/WebP (155KB) klaargezet onder cineac-coolsingel-vooroorlogs. Twee exacte prompts en rechten-/kleurtoelichting bewaard. Commons vermeldt publiek domein; primaire registratie noemt anoniem/downloadbaar zonder expliciete PDM, dus dit onderscheid behouden. Groen/cyaan lichtopschrift steunt op echte Boske-kleurenopname van een andere datum. Kleine tekst en gezichten blijven interpretatief. Nog niet in catalogus of gepubliceerd.

Nieuwe primaire huisnummerkaarten 1938 bieden betere plaatsingsankers: Cineac Coolsingel35 perceel2155 (Z4), Nieuwehaven59 perceel971 en Nieuwehaven67 perceel1042 (Z17). Dit zijn onderzoeksresultaten; kaarttransformatie en onafhankelijke visuele controle moeten vóór runtime-integratie worden afgerond. De lezing38 op de foto1915 is opnieuw onzeker (mogelijk58); kaart1938 kan bovendien een andere nummering hebben. Gebruik dit opschrift niet als zelfstandig anker en integreer de AI met38 voorlopig niet. Behandel de voor- en achteradressen niet als één footprint zonder aanvullend bewijs. Publieke uitbreidingsteller blijft16, Asta lokaal afgerond; backup bij20.

## 2 oktober 2026 — Cineac NRC oude Coolsingel (lokaal)

Cineac als locatie125 toegevoegd, na Asta. Plaatsing volgt primaire huisnummerkaart1938, perceel2155/Coolsingel35, naast Heck31, gekoppeld aan de bestaande centrumkaart en KLM-luchtfoto1939. Eye/CinemaContext noemen17; de vernummeringsoorzaak is niet bewezen en dit verschil staat expliciet in de plaatsingsnotitie. Geen naoorlogs adres gebruikt; circa10m plaatsingsonzekerheid.

Voorbouw met twee bovenlagen, drie raamassen, luifel en eenvoudige geometrische neonletters. Begane grond is een donkere ingang met affichevlakken, geen woonhuisramen. Lange achterzaal opgenomen als geschat dakvolume op basis van luchtfoto en kavel; smalle achterste verbinding en interne indeling niet gereconstrueerd. Tinten blijven interpretatie, neon gebaseerd op Boskes echte nachtkleurenfoto.3240driehoeken, GLB/Blend geëxporteerd, gehele modelomtrek incl.luifel/achterzaal vrijgemaakt. Binnen werkgrens, geen overlap met catalogusfootprints.

Eén entree-origineel/AI-paar, origineel ongewijzigd, tweedeAI-proef met originele prompts bewaard. CommonsPD-beoordeling apart benoemd: primaire archiefregistratie noemt anoniem/downloadbaar maar zelf geenPDM. Negen directe bronnen met supports en tekst onder400woorden. Npmcheck10/10 en gerichte desktop/mobiel/lichtbak/Nu3D-browsercontrole geslaagd, geen fouten/overflow. Niet gepubliceerd of gecommit door subagent; gezamenlijke release bij hoofdagent.

### Cineac: tweede fotopaar (2 oktober 2026, lokaal)

Naast de entreefoto staat nu de volledige KLM-luchtfoto uit 1939 met afzonderlijke AI-kleurinterpretatie. Primaire SAR Public Domain Mark 1.0 en directe recordlink zijn opgenomen; AI-contextbeeld is expliciet geen historische meetbron. Beide paren en mobiele lichtbak getest en screenshot bekeken; npm run check 10/10, geen fouten. Controle in research/expansion-20261002/round4-cineac/TWEE-FOTOPAREN-CONTROLE.md. Nog geen commit/publicatie door deze agent.


Parentcontrole: Cineac-kaartscreenshot en mobiele tweede-fotopaarlichtbak bekeken; Nieuwehaven59-kaartscreenshot vergeleken met originele gevelbeeld, dichte dakkapellen behouden. De RJB1944-link voor59 geeft actuele DNS-fout en is daarom met unavailable/accessNote gemarkeerd. De drie nieuwe lokale locaties sinds Kaiser (Asta, Cineac, Nieuwehaven59) zijn nog niet gepubliceerd. Heck Noordblaak is de kandidaat voor de vijfde van ronde4; VanRossem blijft geparkeerd wegens onzekere achtergevelplaatsing.


## Ronde4 — Heck in afwerking

Heck's City Lunchroom Noordblaak71 is als vervangende kandidaat bevestigd met voorgevelkaart PBK2007424 en primaire ruïnerecord XXXIII5692527 die14mei1940 expliciet noemt. Parent heeft bronkaartZ9, doelkaartoverlay, wholephotoPBK578, detailfoto en beideAIproeven bekeken. Modelconcept14.63×23.26m, circa6mplaatsingsonzekerheid; vlakdak enkleinedakopbouw, geenmansarde vanbuurMeyer&Blessing. Tweeorigineel/AIparen enexacteprompts voorbereidonderheck-city-noordblaak. Publicatie wacht nogop definitieveintegratie/export/browsertest.

Algemene browsercontrole lokale126locaties/18verhalen: geenpageerrors ofmislukteruntimeverzoeken, geenmobieleoverflow, fotopaar/lichtbak/Nu3Dgoed. Cacheversiesvoorcatalogus/achtergrond/app voorbereidvoorronde4. Publicatietellerblijft16; next20backupnietvoortijdigaangemaakt.

## 2 oktober 2026 — Heck’s City Lunchroom Noordblaak (lokaal)

Locatie127 toegevoegd onder heck-city-noordblaak: drie gevelniveaus, restaurantvensters, schuine hoektravee en vlak dak met kleine opbouw; geen hoge kap van buurgebouw. Historische plaatsing naast Zijlwatersteeg op basis van adres71 en kaart1938, percelen1440/505 als onderbouwde interpretatie; circa6m onzekerheid. Model14,63×23,26m; hoogten/kleuren benaderd.3552driehoeken, GLB/Blend geëxporteerd en achtergrond vrijgemaakt. Binnen werkgrens, geen overlap met catalogusmodellen, steeg zichtbaar vrij.

Twee originele/AI-prentbriefkaartparen met directe bronregistraties en expliciete PD-anon70beoordeling, geen verzonnen primairePDM-claim.149woorden achtergrond en zes directe bronnen. Beide originelen bytegelijk behouden. Gerichte desktop/mobiel/tweepaar/lichtbak/Nu3D-tests geslaagd, screenshot model en mobiele lichtbak bekeken; npmcheck10/10. Bewijs research/expansion-20261002/heck-noordblaak/INTEGRATIE.md. Nog geen commit/push door subagent; hoofdagent verzorgt gezamenlijke release.

## 2 oktober 2026 — uitbreiding historisch water

26 deelgebieden / 34 niet-overlappende watervlakken langs historische havens, grachten en singels. Kades gecontroleerd tegen de oorspronkelijke kaart; gedempte waterlopen blijven droog. Zie HISTORISCH-WATER.md en traceerbestanden. Watercheck: alle34meshes zichtbaar in Toen, verborgen bij Nu en brandkaart; geen browserfouten. Algemene desktop/mobielcontrole127locaties geslaagd. Gezamenlijke publicatie met afgeronde ronde4 wordt hierna extern gecontroleerd.

Publicatie bevestigd: fe864836018a42eabcd3c5486904d65b0eba7603, Pages37044501604 geslaagd.25openbare runtimebestanden bytegelijk; openbare watercheck34meshes zonder fouten, Toen/Nu/brandkaart correct.127gebouwen/18verhalen;20toevoegingen sinds start. Backupversie rdam39-20261002-20-buildings markeert deze gecontroleerde release.

## Ronde5 voortgang — nog lokaal

Nieuwehaven89 geïntegreerd als128e locatie; tweeorigineel/AIparen, geselecteerde kleurproeven02 met prompts03/04 na inspectieVerheul1935. Verliesmei1940 bevestigd inBoijmansjaarverslagp2–4. Parentplaatsing/kaartscreenshot bekeken, geenlosmodeloverlap. Agentnpmcheck/browsertests geslaagd; nieuwebeeldassets noglaatstecontrole. Publieke teller blijft20 toevoegingen (127locaties); NH89 nog niet gepubliceerd. Meyer&Blessing modeldraft enSpinolahuis bronpakket gereed inresearch. Meuwsenreserve, individueelverliesbewijsnogtezwak. Geenoverlevendepanden nieuwtoevoegen.

## Ronde5 — Meyer & Blessing lokaal geïntegreerd

129e locatie, meyer-blessing-noordblaak. Verwoesting winkelpand14mei1940 onderbouwd door DBNLlevensbericht p173; historische Noordblaak67/perceel1441 op kaart1938 naast Heck. Geen modern winkeladres. Model3416driehoeken, GLB/Blend,6mplaatsingsonzekerheid; hoogten/achterzijde/kleuren benaderd. Eén origineel/AIpaar PBK7011939 met exacte prompt en PD-anon70beoordeling (geen archiefCCclaim). Achtergrond vrijgemaakt, geheleenvelope binnenwerkgrens, geen model-/achtergrondoverlap. Npmcheck10/10 en gerichte desktop/mobiel/lichtbak/Nu3D-tests geslaagd; screenshots bekeken. Details research/expansion-20261002/meyer-blessing/INTEGRATIE.md. Nog niet gepubliceerd; publieke teller blijft20toevoegingen.

### 2 oktober 2026 — Corso Cinema aan de oude Coolsingel

- Corso toegevoegd als 131e locatie: aantoonbaar verwoest op 14 mei 1940 (direct artikel Joods Erfgoed; aanvullende NA-annotatie). Historisch Coolsingel 89, perceel 2289 op huisnummerkaart Z4/1938, niet naoorlogs Corso aan de Kruiskade.
- Eén origineel/AI-paar, SAR 4282/2001-1182 april 1936, Vereenigde Fotobureaux, expliciete Public Domain Mark 1.0. Origineel behouden, master/webvariant/prompt opgeslagen. Kleine afficheletters, gezichten en belichting blijven als AI-interpretatie gemarkeerd.
- Licht model met donkere entree, drie banen in het centrale venster en CORSO-dakletters. Voorbouw circa 15.6m plus dak, laag sober zaalvolume; hoogtes/kleuren en verborgen zaal zijn schattingen. Circa10m positie-onzekerheid; L-uitbouw niet precies gereconstrueerd.
- Model/GLB geëxporteerd, achtergrond opnieuw uitgesneden. Bronpolygon- en conservatieve geprojecteerde meshcontrole geen overlap met nabije losse modellen. Kaartpreview bekeken. npm check10/10 en reguliere browsercheck geslaagd. Geen commit/push door deze subtaak.
- Research/herleidbare bronnen en reproduceerbare modeldraft: `research/expansion-20261002/corso-coolsingel/`; aanvullende selectie Meddens/NutderZeevaart/Meuwsen: `research/expansion-20261002/round5-candidates/aanvullende-selectie.md`.

## Ronde5 — Meddens & Zoon lokaal geïntegreerd

132e locatie, meddens-hoogstraat. MuseumRotterdamherdenkingsbord90496 bevestigt verwoesting14mei1940. HoekHoogstraat/Vlasmarkt uit primaire bedrijfsverpakking en historischekaart;14×16mvoorbouw,10mplaatsingsonzekerheid, geenblindeextrusievanallepercelen. Foto1903explicietvóór1929puiwijziging, modelmetlaterhoekentreeopbasisMaasbode21sep1929enonderzoeksbeeld1930. Eénorigineel/AIpaar metprompt en PD-anon70beoordeling; geenonbewezenrechtenclaimbij1930foto,dieblijftresearch. Geometrische MEDDENS EN ZOON-band en centrale finialtoegevoegd. Hoogtecirca28mgeschat, ornamentenvereenvoudigd.5668driehoeken,GLB/Blend,geenmodel-/achtergrondoverlap,binnengrens. Npmcheck10/10. Geencommit/publicatiedooragent.

## Ronde5 gezamenlijke eindcontrole

Parent heeft alle vijf modelbeelden en foto-AIparen bekeken. Bestaande catalogitems semantisch ongewijzigd; alleen vijf toevoegingen sinds publieke127locaties. NH89kleurcorrectie opnieuw in mobielelichtbak getest. Alle modellen gecontroleerd op bronpositie/overlap; voor elk gerichtebrowsercontrole. App/catalog/achtergrondcache naarround5-20261002. Geenonbekendrecht1930Meddensbeeldgepubliceerd. Release volgt na volledige browsercontrole; pas daarna externebytecontrole.


## Ronde 5 openbaar gecontroleerd — 25 toevoegingen

Release `16706314b8bc5896d245c290650963e92d6876ca` is gepubliceerd. GitHub Pages-run `37049974522` en Check project `37049974351` zijn geslaagd. Alle 21 gecontroleerde openbare bestanden (app, catalogus, achtergrond, vijf GLB’s en zes originele/AI-fotoparen) zijn bytegelijk aan lokaal; zie `VERIFICATIE-UITBREIDING-20261002-R5.json`. Anonieme browsercontrole op rdam39.nl met Meddens: 132 locaties, 18 verhalen, fotoparen/lichtbak, Nu 3D en mobiele weergave geslaagd, geen browser-/laadfouten of horizontale overflow. Mobiele lichtbak visueel bekeken.

Vijf nieuwe locaties: Koopmanshuis Nieuwehaven 89, Meyer & Blessing Noordblaak, Spinolahuis, Corso Coolsingel en Meddens Hoogstraat. Samen zes origineel/AI-paren. De modellen en kleuren blijven onderbouwde benaderingen met zichtbare onzekerheden. Meddensfoto1903 is expliciet vóór de puiwijziging1929. Voltooide uitbreidingsteller:25. Laatste versieback-up blijft checkpoint20; de volgende volgt na vijf verdere gepubliceerde toevoegingen bij30. Ronde6 is onderzoek, nog geen nieuwe locaties of claim dat alle mogelijkheden zijn uitgeput.


## Ronde6 — brononderzoek en eerste beeldpakket, nog niet live

Galeries Modernes heeft drie originele anonieme vooroorlogse prentbriefkaarten (SARPBK3146/3147/3148), pandgebonden14meiverliesbron en één geselecteerde AI-kleurversie1938. Gevelnaam en beide GALERIES-uithangborden zijn na gerichte correctie visueel gecontroleerd. Exacte prompts01/02 en origineel blijven behouden onder research/expansion-20261002/galeries-modernes. Tweede proef is nog niet geselecteerd wegens verandering bovenuitsnede/bordopmaak. Materiaalkleuren zijn interpretatie, geen geverifieerde kleurhistorie.

Plaatsing nog open: Hoogstraat207/perceel925 geeft slechts adrespunt; brede samengevoegde gevel niet blind op smal perceel bouwen. Nieuw archiefbeeldXIV4440001 toont bureauEd.Cuypers-onderschrift en dateert1928–1932. Dit botst met secundaire1934verbouwingsdatum, dus niet stellig als1934model publiceren. Gerichter ontwerp-/kavelonderzoek loopt.

Andere panden onderzocht: TerMeulen en Dobbelmann specifiek14meiverlies bevestigd, intactgevelbeeld nog niet rond. Maasbode heeft goede anonieme gevelscan met onduidelijke publicatierechten; PDMfilm1929 toont entree maar niet hele gevel. Notarishuis sterke verliesbron, beste gevelbeelden niet vrij downloadbaar, oudere vrije opname moet eerst gecontroleerd worden. Wisbrun en logeDrieKolommen nog reserve. Boompjes16/Maashotel afgewezen voor deze selectie vanwege aanwijzing voor eerdere brand door mortiervuur; geen vervanging met overlevende gebouwen.

Er zijn in deze stap geen nieuwe runtimegebouwen toegevoegd. Publicatie blijft132locaties/18verhalen/25toevoegingen; volgende backup bij30.


### Ronde6 vervolg — primaire adrescorrectie en tweede beeldkandidaat

Galeries Modernes: primaire heropeningsadvertentie26okt1933 bevestigt **Hoogstraat199**; advertentie21mrt1935 identificeert207alsnaastgelegenCaféGaleries. Eerderadres207 ingetrokken. Perceel1624wordtgetraceerd, niet925. Artikelen20/27okt1933 bevestigen bureauEd.Cuypers, doorgangHoogstraat/Kipstraat, bronzenGispenpuien/ramen/entrees, gevelopschrift/neon;1934secundairejaar vervalt. Bron-OCRgelezen; inhoudsconcept178woorden in galeries-modernes/CONTENT-DRAFT.json. Modeldraft6816driehoeken gerenderd maar parentconstateerdebovenramenbuitenmassawand; subagentcorrigeert. Noggeenruntime.

Notarishuis: scherpegeheleRCEgevel20192025, C.Hoogendijk,CCBYSA4.0gevonden. Origineelongewijzigd, builtinAIproefmetexactpromptopgeslageninround6-b. Verheul1935kleurreferentiepersoonlijkbekeken:roodbruinegevel,lichtesteen,donkeredeur. Zijmuurreclametekst onzeker, geenexactemerknaamverzinnen. Adres24op1938Z12bevestigd; mogelijkeconflictmetbestaandeLeeskabinetplaatsingwordtgecontroleerdvoorintegratie. Geenclaimvandefinitievepositie.

Nogsteeds132live/25uitbreidingen. Geenbackuppunt30bereikt. Brononderzoek/AIproeven enmodellen zijn tussentijdseresearch, geenpubliekevoltooidegebouwen.


### 2026-10-02 — Notarishuis en correctie Leeskabinet (lokaal)

Notarishuis Geldersekade 24 toegevoegd met RCE20192025 origineel/AI-paar (CC BY-SA 4.0), kleurondersteuning Verheul1935, expliciet bewijs bombardementsbrand14mei1940. Leeskabinet gecorrigeerd naar historisch Gelderschekade18/perceel1644 (brief1905 en kadaster1938Z12); het stond eerder ongeveer bij Notarishuis24. Gevelbreedte en alle x-posities/ornamenten proportioneel aangepast. Beide posities circa8m onzeker; achterzalen en hoogten blijven benaderingen. Research: expansion-20261002/round6-b/LEESKABINET-CORRECTIE-EN-NOTARISDRAFT.md. Volledige meshprojecties opnieuw bepaald: beide geen overlap met andere modellen; achtergrond opnieuw uitgesneden, beide GLB's via Blender vernieuwd. Geen publicatie door deze subtak.

### Actuele ronde 6 — twee toevoegingen lokaal, openbare versie nog ronde 5

Galeries Modernes en Notarishuis staan lokaal in de catalogus: 134 locaties, 18 verhalen, 286 fotovermeldingen en 266 fotoparen. Galeries heeft alleen het goedgekeurde PBK-3146-paar; andere AI-proeven zijn niet opgenomen. De definitieve Galeries-gevel draait naar de Hoogstraat (hoek 0,228856 radiaal); de oorspronkelijke draft had een verkeerd rotatieteken. GLB en Blenderbestand zijn aanwezig. Parent heeft mobiele Galeries-galerie en live Notaris/Leeskabinetbeelden bekeken. De bronbrief van 18 mei 1905 is zelfstandig gecontroleerd: adreskop Gelderschekade No.18, afgedrukt op p.155 (vervolg p.156). Laatste gecombineerde `npm run check`: nul fouten, 10/10 tests. Gerichte browsercontroles van beide toevoegingen en algemene desktop/mobielcontrole zijn geslaagd.

Groote Concertzaal, Bierstraat 11: twee CC0-straatfoto's van F.H. van Dijk uit 1929 gevonden; eerste AI-paar geselecteerd in `research/expansion-20261002/groote-concertzaal/BEELDCONTROLE.json`, met opgeslagen prompt. Tweede AI-paar niet geselecteerd: tekstcorrectie veranderde ook hekwerk. Dit pand was in 1929 een handelsgebouw van Houtzager & Co, geen actieve concertzaal. Verlies op 14 mei 1940 bevestigd in de Waterstadgenootschap-folder. Voorgevelmodel en plaatsingsdraft klaar, maar dakvorm/achterbouw moeten nog op luchtbeelden worden gecontroleerd. Exacte bouwjaren conflicteren tussen bronnen; voorlopig alleen begin negentiende eeuw noemen. Geen runtime-integratie van deze kandidaat.

Ter Meulen: vrije straatfoto, twee luchtfoto's en huisnummerkaart Z16 beschikbaar; winkelidentificatie op het blok nog in onderzoek. Maasbode blijft reserve wegens onzekere dakopbouw. Drie Kolommen heeft sterke bouwtekening/materialenbron maar nog geen voldoende geïdentificeerd vrij fotopaar; niet omzetten naar een tekeningen-only toevoeging.

Deze lokale wijzigingen zijn nog niet gepubliceerd en vormen geen nieuw back-upcheckpoint. Openbaar blijft de geverifieerde ronde 5 met 132 locaties/25 toevoegingen. Volgende volledige ronde vereist nog drie toevoegingen; back-upcheckpoint 30 pas na publicatie en controle daarvan.


### Ronde 6 — lokale versie vastgelegd, selectie blijft strikt

Commit `cc63867` bewaart de twee gecontroleerde toevoegingen (Galeries Modernes en Notarishuis) plus de correctie van het Leeskabinet. Opnieuw gecontroleerd: 134 locaties, 18 verhalen, 286 fotovermeldingen, 266 paren; nul fouten en 10/10 tests. Nog niet gepusht of gepubliceerd; openbare ronde 5 en checkpoint 20 blijven de laatst geverifieerde versies.

Ter Meulen is inmiddels primair gelokaliseerd: gemeentelijke Hinderwetberichten van 26 oktober 1933, 17 oktober en 3 december 1935 verbinden Hoogstraat 83, Sint-Janstraat 24 en Achterklooster 68. Kaart Z16 koppelt dit aan M1624/M1598. De woninginrichting aan 44–54 is een andere afdeling. Advertentie 23 december 1920 kondigt verhuizing in 1921 aan; de retrospectieve datering 1912 niet gebruiken voor deze hoek. Dossier: research/expansion-20261002/ter-meulen/ONDERZOEK.md. Een duidelijke vrij publiceerbare intacte gevelopname ontbreekt nog.

Concertzaal: bestaand vlak dakconcept nog niet vrijgegeven. Nieuwe referentie SAR PBK-7626 (https://hdl.handle.net/21.12133/F0CC1176213B40AEB04BFAC074B143ED) toont de hoofdingang van de OLV-kerk aan Wijnhaven met achter links dezelfde slanke toren als naast de Concertzaal op de foto van 1929; parent heeft het beeld bekeken. Deze koppeling ondersteunt verdere ruimtelijke identificatie, niet op zichzelf de dakvorm van Bierstraat 11. De OLV-kerk aan de Wijnhaven wordt als aanvullende kandidaat onderzocht; nog niet aan de catalogus toegevoegd.

## Ronde 6 — aanvullende bron- en modelcontrole

OLV Wijnhaven heeft nu een geselecteerd origineel/AI-paar (SAR2008-5180, F.H.vanDijk,1910–1925,CC0) en een primair materiaalbewijs voor Bentheimer zandsteen uit1902. Model blijft onderzoek tot de footprint en torenplaatsing zijn gecontroleerd; expliciet kerkperiode1910–1925, later pakhuis. Details en prompt in research/expansion-20261002/olv-wijnhaven/.

Ter Meulen-concept is op de werkkaart geregistreerd, maar blijft onvolledig: conservatief voorvolume526,88m² vermijdt binnenplaats; primaire650m² nog niet volledig ruimtelijk verklaard. Geen AI-paar wegens ontbrekende fotoherkomst/rechten. Bedrijfsarchief480-01 daadwerkelijk in browser gecontroleerd: foto-inventaris vooral naoorlogs; jubileumalbum inv110 (catalogus1971) alleen als studiezaalstuk zichtbaar, inhoud niet ingezien. Zie ARCHIEF-480-BEELDZOEK.md; geen aanvraag verzonden.

Concertzaal-dak: luchtfoto biedt geen unieke identificatie. Voor verdere integratie toegestaan: onversierde afsluiting achter brongetrouwe hoge kroonlijst, met expliciete melding dat de historische dakvorm onbekend is. Geen lichtlantaarn of andere onbewezen dakornamenten toevoegen. Dit is een onderzoeksbenadering, geen exacte1939opmeting.

### 2 oktober 2026 — Groote Concertzaal, lokaal toegevoegd

`groote-concertzaal-bierstraat` toegevoegd met één ongewijzigd CC0-archiefbeeld van F.H. van Dijk (september 1929), apart AI-paar en prompt. Brongetrouwe handelsgevel, historische Bierstraat 11 op huisnummerkaart Z12; verlies 14 mei 1940 rechtstreeks onderbouwd. Hazewinkel1940 onderbouwt ingebruikname1804 en bankfunctie1863. Hoogte en achtervolume zijn benaderingen; de eenvoudige afsluiting achter de kroonlijst is nadrukkelijk **geen vastgestelde historische dakvorm**. Geen kerkportiek of fictieve dakornamenten toegevoegd. Oorspronkelijke contouren behouden, achtergrond opnieuw uitgesneden. Lokale integratie is geen publicatiebewijs.

### 2 oktober 2026 · Onze Lieve Vrouwekerk Wijnhaven lokaal toegevoegd

136e locatie `olv-wijnhaven`: verdwenen kerk aan historische Wijnhaven64/perceel2037. Eén CC0-origineel/AI-paar van F.H.vanDijk,1910–1925; expliciete kerkperiodenotitie omdat het gebouw later pakhuis was. Vier directe inhoudsbronnen plus plaats- en zijgevelbron. Bentheimer gevelmateriaal primair onderbouwd; kleur, hoogte en achterbouw blijven benaderd. Positie±6m. Model/GLB/Blend en achtergrondclip bijgewerkt; gehele mesh geen overlap met andere landmarks. Kruisende achterdakrand uit concept opgelost. `npm run check`:136gebouwen,18verhalen,288foto’s,268paren,0fouten;10tests geslaagd. Browser desktop/mobiel:geenfouten,ontbrekendebestanden ofoverflow; origineel/AI en mobiele viewer werken. Specifieke OLVdesktop- en mobielbeelden visueel bekeken. Nog geen publicatie door deze integratie.

### Ronde 6 — stand na controle door hoofdagent

Vier nieuwe locaties zijn lokaal opgeslagen in Git: Galeries Modernes, Notarishuis, Groote Concertzaal en OLV Wijnhaven. Laatste modelcommit `1a8ce97`. Parent heeft bij OLV het model in de kaart, origineel/AI in het paneel en mobiel bekeken; origineel en geselecteerde AI-webvariant zijn bytegelijk aan het gecontroleerde researchmateriaal. Zeven directe bronnen in het item, inclusief de gebruikte luchtfoto uit1925. Laatste npmcheck136locaties/18verhalen/288foto’s/268paren, nul fouten en10tests geslaagd; browser136locaties zonder errors/failed/overflow.

Nog één locatie nodig voor volledige ronde6 en checkpoint30. Publiek blijft de gecontroleerde ronde5 met132locaties/25toevoegingen; niet verwarren met lokaal136. Nog geen push of nieuwe versieback-up. Ter Meulen blijft onderzoek wegens fotoherkomst; vervangende kandidaat wordt onderzocht. De voorgestelde herindeling van Gebieden naar Ga naar een plek is alleen geadviseerd, niet geïmplementeerd.

### Vijfde kandidaat — pastorie versus Oppertse kerk

RCE20192355 is bruikbaar CC BY-SA4.0-beeld, maar de benaming Voormalige Paradijskerk is verwarrend. De primaire monumentenlijst1915p340–341 identificeert Oppert107 als pastorie van de Oud-Katholieke St.-Laurenskerk, gevel1791. De brede burgergevel mag niet worden gemodelleerd als de smalle kerkgevel aan de LangeTorenstraat. De parochiegeschiedenis en SARXXXIII-568-01-23 bevestigen verlies van de Oppertsekerk op14mei1940; exacte ruimtelijke verbinding en afzonderlijk verliesbewijs van de pastorie nog onderzoeken.

Een conservatieve AI-kleurproef van de pastorie is gemaakt met de ingebouwde imagegen-tool, visueel vergeleken en opgeslagen in research/expansion-20261002/oppertse-kerk/pastorie-ai-proef01.png en pastorie-ai.webp, met PROMPT-AI-01.txt en BEELDCONTROLE-PASTORIE.json. Huisnummerplaatjes111/109 expliciet in prompt; onbekende burenopschriften niet invullen. Nog geen runtime-item of voltooide vijfde toevoeging. KaartbladZ8/sectieK1938 is de juiste plaatsingsbron en wordt ook bij Hollenkamp onderzocht.

Hollenkamp is een alternatieve kandidaat met primaire verliesbronSARXXXIII-569-29-12 en verbouwberichtVoorwaarts19maart1926. Een detailfoto van de winkelpui kan een geldig eerste fotopaar zijn als overige bronnen de bovenbouw en plaatsing ondersteunen; de voorkeur voor een volledig gebouw in beeld is geen vereiste dat al het vormbewijs op één foto staat.

### Oppert — nieuwe primaire kleur- en vormreferentie

SAR4080 XVIII-410-02, aquarel van Raoul Hermans (catalogus1940), rechtstreeks in archiefviewer bekeken. Toont complete pastoriegevel met fronton1791, pannendak, twee dakkapellen en schoorstenen; donkerbruine baksteen, lichte lijsten en donkerblauwgroene deuren. Rechten beperkt, alleen onderzoeksreferentie. Record identificeert107–109; voorlopige kaartlezing103/105 niet overnemen. RJB1941pLVI bevestigt verwerving. Details in research/expansion-20261002/oppertse-kerk/hermans-colour-reference.json. Ruimtelijke verbinding kerk/pastorie nu op Z8 gevonden, precieze plaatsingsdraft nog in uitvoering. Afzonderlijk verliesbewijs pastorie nog niet afdoende. Geen vijfde runtime-item of publicatie in deze stap.

### Pastorie aan de Oppert — lokaal, 2 oktober 2026

- Als 137e locatie toegevoegd: gefotografeerde pastorie Oppert 107 met entree 109; de kerk achter het voorhuis is niet verzonnen of als volledig model toegevoegd. Monumentenlijst 1915 identificeert de gevel uit 1791; oorspronkelijke kranten van 11 en 12 juni 1940 bevestigen verlies van de pastorie bij het bombardement.
- Eén ongewijzigde RCE-foto van C. Hoogendijk en geselecteerde AI01, beide met CC BY-SA 4.0 en directe bron. De onjuiste historische RCE-titel over de Paradijskerk is toegelicht. Hermans’ aquarel alleen gebruikt als vorm/kleurreferentie, niet hergepubliceerd.
- Plaatsing op Z8: hoofdpand perceel 776, alleen voorste entreezone van 771. Achterliggende kerk is perceel 2099; oudere lezingen 1209 en 103/105 zijn ingetrokken. Positie circa 5 m onzeker, hoogte circa 3 m; achterbouw en kapovergang vereenvoudigd.
- GLB en Blender-bestand geëxporteerd. Gehele mesh ruimtelijk gecontroleerd: geen overlap met andere catalogusmodellen. Achtergrond opnieuw uitgesneden. `npm run check`: 0 fouten, 10 tests geslaagd. Definitieve gezamenlijke desktop/mobiele browsercontrole en publicatie door hoofdagent.

### Ronde 6 — gereed voor publicatie

Alle vijf toevoegingen lokaal gecontroleerd: Galeries Modernes, Notarishuis Geldersekade, Groote Concertzaal Bierstraat, OLV Wijnhaven en Pastorie aan de Oppert. Totaal137locaties/18verhalen/289foto’s/269paren, npmcheck zonder fouten en10tests geslaagd. Browsercontrole met LANDMARK_ID=oppertse-kerk-pastorie: geen errors, mislukte bestanden of mobiele overflow; fotoparen, Nu3D en mobiele lichtbak werken. Hoofdagent heeft modelrender, desktoplichtbak en mobiele galerie bekeken. Vereenvoudigde achterzijde en kapovergang blijven expliciet onzeker. Publicatie en checkpoint30 volgen pas na openbare verificatie.

### Ronde 6 — publiek gecontroleerd en checkpoint 30

Release `7ccd8d2601345055ad2f023a0b0666dfe080df51`; Pages37065653572 en Check37065653567 geslaagd.19openbare bestanden bytegelijk (rapport VERIFICATIE-UITBREIDING-20261002-R6.json); anonieme browsercontrole op rdam39.nl met pastorie:137locaties,18verhalen, geen errors/failed/overflow, fotoparen/Nu3D/mobiele viewer geslaagd. Publieke mobiele galerie en desktop Nu visueel bekeken. Bytecontrole negeerde alleen ongetrackte bestanden via procesconfig; tracked site was schoon, alle gecontroleerde runtimebestanden zijn gecommit. Ongetrackte oude Hoogstraatmodel.blend is geen onderdeel van de release.

Checkpoint30: tag `rdam39-20261002-30-buildings` wijst naar bovenstaande release en is naar GitHub gepusht. Lokale volledige Gitgeschiedenisbackup: `rotterdam_1939/backups/rdam39-20261002-30-buildings.bundle`, gitbundleverify geslaagd. SHA256 `3d89f34ff855eedb6071bc5eb1c7cb5b4eb6a058117dc794341eb252b98d286b`. Bundle bevat gecommitteerde bestanden/geschiedenis, niet ongetrackte research.

Volgende ronde: Huis met de Beelden Haringvliet46 en Meuwsen Mosseltrap3 in onderzoek; nog geen runtime-items. Meuwsen ruïnevergelijking wordt gecorrigeerd: pand LINKS van het hoekpand-skelet, eerdere Zumpolle-koppeling niet overnemen. Gebieden-menu blijft ongewijzigd; voorstel nog niet geaccordeerd.

### Ronde 7 — eerste integratie in voorbereiding

Huis met de Beelden Haringvliet46 lokaal in uitvoering met twee originele/AI-fotoparen. Hoofdagent heeft beide originele foto's, Verheul1934kleurreferentie, modelpreview/livekaart en geselecteerde AI's bekeken. Tweede AIproef afgekeurd wegens ingevuld onleesbaar kenteken; retry behoudt overbelichting. Prompt en beeldcontrole in research/expansion-20261002/huis-met-beelden. Plaatsonzekerheid circa10m; alleen voorbouw, neutrale afsluiting achter kroonlijst (geen historisch platdakbewijs). Bron DagvanhetKasteel gehele pagina geopend, expliciete verliespassage bevestigd.

Meuwsen: onafhankelijke voor/na-beeldvergelijking ondersteunt verlies rijMosseltrap1–4 links van skeletnr5. Nr3kaartperceelF537; modeldraft in onderzoek. Geselecteerde AI1 behoudt J.S.MEUWSEN/HOEDEN; alle gevelkleuren interpretatie, geen primaire kleurbron. CC BY-SA4.0crop behouden. Drie overige nieuwe kandidaten nog in onderzoek, dus geen volledige zevende ronde of publicatie. Publiek blijft137locaties/30toevoegingen.

Huis met de Beelden integratie afgerond:138locaties, twee paren. Agent heeft voorgevel180graden gecorrigeerd naar Haringvliet, root nieuwe liveweergave bekeken. Npmcheck10/10; desktop/mobiel/Nu3D en tweede paar apart getest. Niet gepubliceerd; volledige ronde van vijf afmaken.

Meuwsen Mosseltrap3 lokaal geïntegreerd als139e locatie. Eén origineel/AI-paar, CC BY-SA4.0 van de gepubliceerde Vijverberg-uitsnede en dezelfde licentie voor de bewerking. Z18/F537 huisnummer3; dezelfde gevel nog op SAR1939. Verliesclaim is expliciete visuele vergelijking met SAR1984-2750A, niet een caption die Meuwsen afzonderlijk noemt. Skelet rechts is Mosseltrap5/Slepersvest, eerdere Zumpolle-identificatie ingetrokken. Lichte tinten, totale20m en achterkap zijn interpretaties/benaderingen. Modelvoorzijde naar Mosseltrap; mesh-footprint53,18m², geen catalogusoverlap en volledig binnen werkgrens, achtergrondclip974polygonen. Research: meuwsen/DOSSIER.md en mesh-qa.json; livebeeld artifacts/expansion-20261002/meuwsen-mosseltrap-model.png. GLB/Blend geëxporteerd. Npmcheck10/10 en gerichte desktop/mobiel/fotoviewercheck geslaagd. Geen publicatie door subagent uitgevoerd.

Hoofdagent Meuwsen: nieuwe ronde venster/boog, livefront naastZumpolle en mobieleAIgalerie visueel gecontroleerd. Alle drie nieuwe originelefoto's vanHuis/Meuwsen bytegelijk aan gecontroleerde researchbestanden.139locaties/18verhalen in laatste lokale browserrapport, geenerrors/failed/overflow en foto/modern3D/mobieleviewer werken. Twee van vijf in ronde7 nu lokaal gereed; niet naarproductiepushen totdatvijf geverifieerd. Nieuwekandidaat RusthuisHaringvliet50 metvrijeSARfoto en verliesbron wordt dooragentmeyer onderzocht; nh89zoekt volgendwoonhuis.

### Ronde 7 — Rusthuis Haringvliet 50 lokaal

140e locatie rusthuis-haringvliet. Hoofdagent heeft jubileum-PDF pagina7, vrije SAR-foto, historische perceel503kaart, modelrender en livekaart bekeken; individueel verlies14mei/brand bevestigd. Origineelbytegelijk. AI behoudt onleesbare plaquette zonder fantasietekst. Foto heeft expliciet maker/dateringconflict, kleurinterpretatie niet als feit gepresenteerd. Agent heeft export/clip/overlap en10tests plusdesktop/mobiel/NU3D gecontroleerd. Nog geen volledige ronde7/publicatie: drie van vijf lokaal. CaféDeScheepvaart modeldraft en AItekstcorrectie lopen; HuisLonden is vijfde onderzoekskandidaat.

### 3 oktober 2026 — Huis Londen, Nieuwehaven 137 (lokaal)
- Catalogus142: laat-zeventiende-eeuws Huis Londen toegevoegd met gevel1930, Verheul1937kleurreferentie en ongewijzigdPBK4861/AI-paar. Rechtenorigineel: eigen PD-anon-70-beoordeling anonieme publicatie1930, geenCC0claim. Beideprompts enbeeldcontrole bijassets.
- Verlies14mei1940 expliciet als synthese van individueelWOII-verlies (VanElburg2022p419), Z17adreskaart en primaireSAR2001-1579ruïnefoto; caption noemt137nietapart. Bouwjaar1697/1699conflict daarom late17e eeuw. Plaatsing±10m, hoogte/diepte/achterkap benaderd.
- GLB/Blend geëxporteerd,3910triangles. Mesh85.17m²,0overlapanderecatalogmodellen/achtergrond,0buitenwerkgrens. Achtergrond975polygonen.
- npmcheck10/10; generieke en gerichtebrowserchecks142gebouwen/18verhalen,0errors/failed/overflow. Livevoorzijde enmobilegalerie bekeken. Noggeencommit/push/publicatiestatus door subagent.


### Ronde 7 — café lokaal gecontroleerd, vijfde item in afronding

Café De Scheepvaart (141) toegevoegd met ongewijzigd RCE20192640 en één gecontroleerd AI-paar; datumconflict Olman/circa1910–1920, interpretatieve kleuren en directe verliesbron Puntkomma expliciet. Hoofdagent heeft gecorrigeerde modelpreview, straatvrije kaartcontour, livebeeld en mobiele galerie bekeken. Meshcontrole nul overlap; optionele vertexDeform/crossOnly ondersteunen schuine ingang en vierdelige oculus zonder bestaande modellen te wijzigen. Export en 10tests plusbrowsercontrole geslaagd.

Huis Londen (142) wordt afgerond; hoofdagent heeft UvA bijlage p419/PDF111 met individueel WOII-verlies en kaart/ruïnevergelijking onafhankelijk bekeken. Verlies14mei is een ruimtelijke synthese, niet een caption met137. Geselecteerde tweede AI-proef corrigeert extra bladeren en fictieve kleine tekst; kleurreferentie Verheul1937, geometrie foto1930. Twee prompts en beeldcontrole bewaard. Publicatie pas na vijfde modelcontrole.


### Ronde 7 — vijf toevoegingen gecontroleerd, 3 oktober 2026

Huis met de Beelden, Meuwsen Mosseltrap3, Rusthuis Haringvliet50, Café De Scheepvaart en Huis Londen vormen de volledige zevende ronde. Hoofdagent heeft laatste café/livebeeld en Londenmodel plus mobiele galerie visueel gecontroleerd; 142locaties/18verhalen/295foto’s/275paren, npmcheck nul fouten en10tests geslaagd. Cachequeries vernieuwd, inclusief gedeelde modelbouwer. Verlies-, kleur- en plaatsingsonzekerheden blijven bij de items. Publicatiecontrole volgt. Volgende versiebackup bij40toevoegingen; checkpoint30 blijft geldig.


### Ronde 7 — publiek geverifieerd

Release cdcb504f2b6a20dc25f2ebdf52453c684b02f20f, Pages37070441363 en Check37070441468 geslaagd.21 openbare bestanden bytegelijk met lokale release (VERIFICATIE-UITBREIDING-20261003-R7.json); models.js en city32-models.js aanvullend bytegelijk gecontroleerd. Verifier negeerde alleen bestaande ongetrackte research/Hoogstraatblend via procesconfig; alle runtimewijzigingen gecommit. Anonieme browsercontrole rdam39.nl met HuisLonden:142locaties/18verhalen, geenerrors/failed/overflow, fotoparen/Nu3D/mobieleviewer geslaagd. Publieke mobiele galerie en Nu3D screenshot door hoofdagent bekeken.

Nu35toevoegingen in zeven rondes publiek. Checkpoint30backup blijft laatste afgesproken backup; volgende bij40. CityTheater en Leuvehaven68 zijn alleen onderzoeksreserves, noggeenintacte vrijegevel en dus niet geteld. Gebieden-menustructuur blijft bestaand; voorstel niet geaccordeerd.

### 3 oktober 2026 — toevoeging 36 lokaal: HBS Van Alkemadeplein

Lokaal toegevoegd als 143e gebouw/plek (`hbs-alkemade`); **nog geen publicatiebevestiging voor deze wijziging**. Zuidkop van het historische plein onafhankelijk vastgesteld met situatietekening C-58-1 (1878) en huisnummerkaart Z13 (1938, perceel 9568). Model toont alleen voorbouw met hoge middenpartij, lagere zijvleugels, flauwe segmentbogen, klok en open klokkentorentje. Achterhof blijft open. Gevelbeeld volgt 1880 en 1898–1902; exacte continuïteit tot 1939, hoogten, dakafsluiting en kleuren blijven expliciet onzeker. Individueel verlies op 14 mei 1940 wordt ondersteund door directe SAR-registraties 2001-1797 en XXXIII-569-25-1; de latere Academiefunctie door XXXIII-569-39-06-01-16.

Twee ongewijzigde PDM-archieffoto's naast afzonderlijke, door root bekeken AI-bewerkingen, met maker, datum, rechten, prompts en directe bronlinks. SHA256-verificatie bevestigt dat beide originele JPEGs byte-identiek zijn gebleven. Kozijnkleur is als onzeker beschreven. Geen algemene Wikipedia-link gebruikt als bewijs voor dit specifieke pand.

Gewijzigde runtimebestanden: `site/landmarks/catalog.json`, `site/data/model-landmarks.json` en nieuwe map `site/landmarks/hbs-alkemade/` (foto's, prompts, beeldcontrole, BRONNEN.md, placement.json, geometry.json, model.blend en model.glb). Bestaande catalogusitems behouden. Live en export gebruiken dezelfde modelSpec.

Validatie: exacte horizontale projectie van alle modeldriehoeken 709,6124 m²; geen geometrische overlap met andere modellen, 0 m² overlap met uitgesneden achtergrond. Bewijs `site/landmarks/hbs-alkemade/GEOMETRIE-QA.json`. `npm run check`: 143 gebouwen, 18 verhalen, 297 foto's, 277 AI-paren, geen fouten; 10 tests geslaagd. Algemene browsercheck met lokale Chrome en `LANDMARK_ID=hbs-alkemade`: geen JavaScript-/HTTP-fouten, geen horizontale overflow, fotoparen, Nu 3D en mobiele viewer in orde. Desktopmodel/foto1/fullscreen AI1 en mobiele AI2 daadwerkelijk bekeken. Parent heeft aanvullende desktops/mobiele screenshots gecontroleerd. Geen commit of push door integratieagent.


### 3 oktober 2026 — toevoeging 37 lokaal: Wijnhaven 145

P. Moll & Zoon op Wijnhaven145 toegevoegd als144e locatie met twee originele/AI-paren, directe RCE-fotobronnen, CC BY-SA4.0 en zes inhoudelijke bronnen. Verlies is combinatie van perceel296 op Z11/1938, gemeentelijke schadekaart1940 en de ruïneregistratie van Wijnhaven/Posthoornsteeg. Hoogendijk-attributie gecontroleerd op beide Commons-records; geen opnamedatum afgeleid. Kleine AI-letters blijven interpretatief; de luifeltekst in foto2 is gericht opnieuw gegenereerd.

Hoofdagent bekeek galerij/fullscreen en mobiele screenshots. npmcheck144locaties/18verhalen/299foto's/279paren,10tests goed; browsercheck geen errors/failed/overflow. Meshvoetprint189.744m², geen overlap; achtergrond opnieuw uitgesneden, GLB/Blend gelijk aan gebruikte modelSpec. Onderzoek en QA in research/expansion-20261003/round8-b. Noggeenpublicatie; ronde8 mist drie definitief geïntegreerde items. Volgende checkpointbackup40.


### 3 oktober 2026 — toevoeging 38 lokaal: Nieuwehaven 87

Koopmanshuis Nieuwehaven 87 als 145e locatie toegevoegd met één origineel/AI-paar, directe archiefbronnen en expliciete kaart-/verliesanalyse. Bestaand nummer 89 herzien naar circa 10,8 m breed op basis van kaart en gevelverhouding. Beide GLB/Blend opnieuw geëxporteerd, achtergrond vrijgemaakt. Geen overlap met andere cataloguspanden; onderlinge numerieke grensrest 0,000136 m² onder tolerantie 0,03 m², geen absolute nulclaim.

Hoofdagent controleerde semantisch dat alleen nieuw 87 en de bedoelde geometrie/plaatsingsbronnen van 89 zijn veranderd; bestaande foto's en teksten behouden. Live-model, mobiele galerie en desktopfullscreen bekeken. Originele foto's bytegelijk. Agent-browserrapport heeft geen fouten of mislukte verzoeken. Bronnotitie opgeschoond tot definitieve onderzoeksstatus, QA en oorspronkelijke foto-hashes bij de assets bewaard.

Ronde acht telt nu drie lokale toevoegingen (HBS, Wijnhaven145, Nieuwehaven87). Nog niet gepubliceerd; volgende backup bij 40 cumulatieve toevoegingen. Huis Keulen is onderzoeksreserve met Bell-gevel rond 1890 en bewezen latere verbouwing; Machinistenschool heeft nog geen voldoende geïdentificeerd vrij gevelbeeld. Menuvoorstel 'Ga naar een plek' is niet geïmplementeerd.


### 3 oktober 2026 — Wijnhaven 62 lokaal
Herenhuis Wijnhaven62 toegevoegd met historisch/AI-paar, vijf directe bronnen, perceel1921 en vereenvoudigd model met vier assen en drie lagen boven souterrain. Dakoverstek aan gedeelde muur met OLV gecorrigeerd; beide modeldownloads vernieuwd. Achterperceel1923 niet ingevuld. Kleurreferentie Verheul1937 is interpretatief. Researchdossier expansion-20261003/wijnhaven62 bevat exacte meshcontrole, builderregressie en browserbewijs. Publicatiestatus afzonderlijk door hoofdtaak te bevestigen.

### Toevoeging 40 lokaal gereed — Huis Keulen / Bell-telefooncentrale

Huis Keulen is toegevoegd met expliciete geveltijdlaag1890–1893, één ongewijzigd PDM-archieffotopaar met geselecteerdeAI-v2, en licht3D-model. Plaatsbewijs combineert Bell-bedrijfskaart1892 met Z9/Groote Markt28/O1263; circa10m onzekerheid. Alleen voorbouw, hof vrij. Latere vensterwijzigingen en niet bewezen dakvorm blijven benoemd. AI-note waarschuwt voor gewijzigde mensen en kleine winkelteksten. Alle3prompts en selectiecontrole staan bij de assets.

147 gebouwen,18 verhalen,302 foto's,282 AI-paren. `npm run check` geslaagd; gerichte browsercontrole desktop/mobiel zonder fouten, fotopaar/lichtbak/Nu3D en overflow goed. Lokale gevelscreenshot visueel bekeken. GLB+Blend geëxporteerd, exacte modeloverlap0 en achtergrondoverlap0m². Wijnhaven62 kreeg aanvullend de specifieke DBNL/Presser-bron voor verlies14mei1940 en leerschoolfunctie. Nog geen publieke releaseclaim: root verzorgt commit/publicatie en openbare controle.


### Ronde acht — vijf toevoegingen lokaal gereed

HBS Van Alkemadeplein, Wijnhaven145, Nieuwehaven87, Wijnhaven62 en Huis Keulen vormen ronde8. Hoofdagent heeft laatste Wijnhaven62- en Keulenmodellen en mobiele galerijen bekeken; originele foto's bytegelijk gecontroleerd. Nieuwehaven89 en OLV kregen aansluitings-/schaalcorrecties met vernieuwde exports. Optionele grensbeperking in de gedeelde modelbouwer is tegen97 overige city32/33modellen gecontroleerd; positiearrays gelijk. Cachequeries vernieuwd voor ronde8 inclusief modelbouwer. Nu40toevoegingen sindsstart; publicatie en checkpointbackup40 volgen pas na geslaagde controles. Keulen toont expliciet een oudere Bell-gevel1890–1893; latereverbouwing en AI-personen/detailafwijkingen zichtbaar benoemd.


### Ronde acht — openbaar en checkpoint40 bevestigd

Release f966862bf1d7de8ff5a8b858817f69f8d42b4020; Pages37077246775 en Check37077246767 beide succesvol. VERIFICATIE-UITBREIDING-20261003-R8.json bevestigt23openbare bestanden bytegelijk. R8-EXTRA.json bevestigt ook models.js,city32-models.js en gewijzigde GLB's van Nieuwehaven89/OLV: totaal27bestanden. Alle runtimewijzigingen gecommit; verifier negeerde alleen bestaande ongetrackte research/Hoogstraatblend via procesconfig.

Anonieme browsercontrole https://rdam39.nl/ metHuisKeulen:147locaties/18verhalen, geenJavaScript-/HTTP-fouten of horizontaleoverflow, fotopaar/fullscreen/Nu3D/mobieleviewer goed. Openbare mobiele galerie en Nu3D screenshot doorroot bekeken. Volledigecheck lokaal302foto's/282AIparen,10tests geslaagd. Lokale modelplaatsing/overlap apart visueel en geometrisch gecontroleerd.

Checkpoint40: tag rdam39-20261003-40-buildings op releasef966862 naarGitHub gepusht. Lokale volledige Gitgeschiedenisbackup rotterdam_1939/backups/rdam39-20261003-40-buildings.bundle; gitbundleverify geslaagd, completehistory. SHA256 13fc9f063880c99b93712b701dfa1b09d4f4b62e47536d7863b47bb4484f9657. Bundle omvat gecommitteerde projectgeschiedenis tot release, geen ongetrackte onderzoeksbestanden en niet dit latere verificatieverslag.

Nu40toevoegingen inacht rondes openbaar. Volgendecheckpoint50. Nieuwe ronde9kandidaten inonderzoek, ondermeerOostMolenstraat7b (noggeenverliesbewijs, nietbouwklaar). Machinistenschool/geparkeerdeleads niet meetellen. Geen menuverandering uitgevoerd. Doorlopendegebruikersopdracht actief; nietvoltooid verklaren terwijlkandidatenonderzoekloopt.

### Haringvliet 44 / De Blauwe Ster — lokale toevoeging, 3 oktober 2026

Het smalle pand naast Huis met de Beelden is toegevoegd met zichtbaar model en één origineel/AI-paar (RCE 20192057, CC BY-SA 4.0). De groepscaption noemt 46 en 48; nummer 44 volgt uit de aangrenzende positie op huisnummerkaart Z18, perceel 243. De verliesonderbouwing combineert deze kaart met de gele verwoeste strook op de gemeentelijke schadekaart van 1940; geen afzonderlijke bominslagmelding voor nummer 44 gevonden. De kaartmarkering betreft een zone, geen exact ingemeten schadepolygoon.

Kleuren, circa 13,4 meter hoogte en onbekende dakvorm zijn als benadering vermeld. Alleen het gefotografeerde voorhuis is gemodelleerd. AI-proef 3 is geselecteerd; kleine reclameregels blijven generatief. Origineel bytegelijk bewaard, SHA-256 en alle drie prompts meegeleverd. De gedeelde muur is geometrisch begrensd zonder pandverplaatsing: uitstekende delen van buurmodel 46 eindigen op zijn eigen zijmuur; hoofdvolume en center blijven gelijk. Beide GLB/Blend-bestanden vernieuwd. Volledige meshprojectie: 0,0 m² overlap en geen andere modelconflicten. Achtergrond uitgesneden. `npm run check` en gerichte desktop/mobiele browsercontrole geslaagd (momentopname: 148 locaties, 18 verhalen, geen fouten of overflow). Dit is nog geen publicatiebewijs.

### Ronde 9 — De Twee Leeuwen lokaal toegevoegd (2026-10-03)
- 149e gebouw: voormalige brouwerij/pakhuis Leuvehaven 48–50, H992 op huisnummerkaart Z11; origineel RCE20191050 februari1938 + geselecteerde AIv1, CC BY-SA4.0 inclusief bewerking. Bronlinks, beperkingen en originele hash bij item.
- Licht voorbouwmodel met 7assen/4lagen, fronton, twee gebogen klokbekroningen, voluten en hellend schilddak. Alleen voorbouw, achterterrein vrij; maten/kleuren benaderd.
- npm check 149gebouwen/18verhalen/304foto's/284paren, 0fouten, 10tests. Gerichte desktop/mobile browsercontrole geslaagd. Exacte meshQA nul model- of achtergrondoverlap.
- Runtime: catalog.json, data/model-landmarks.json, landmarks/twee-leeuwen/. Researchpakket expansion-20261003/zwarte-leeuw/. Geen commit/push door subagent; root beheert publicatie.

### Ronde negen — eerste twee lokaal gecontroleerd

De Blauwe Ster (Haringvliet 44) en De Twee Leeuwen (Leuvehaven 48–50) zijn toevoegingen 41 en 42. Root heeft beide live-modellen, mobiele galerijen en de Nu-weergave van De Twee Leeuwen bekeken. Originele bronfoto's voor beide bytegelijk gecontroleerd. Semantische catalogusvergelijking: alleen twee nieuwe items plus de bedoelde grenscorrectie van Huis met de Beelden; geen andere bestaande inhoud gewijzigd. Geen gedeelde modelbouwerwijziging. Beide modelprojecties vrij van onderlinge en achtergrondoverlap. Npm en gerichte browsers: 149 locaties, 18 verhalen, 304 foto's, 284 paren, 10 tests goed, geen browserfouten/overflow. Bronnotities, prompts, plaatsing en geometriecontrole bij de runtime-assets bewaard.

Nog niet gepubliceerd: ronde negen mist drie gecontroleerde toevoegingen. Cachequeries en publieke verificatie volgen bij volledige ronde. Laatste openbare ronde blijft acht, checkpoint40; volgende afgesproken backup bij50. Onderzoek Sint-Laurensstraat47 en Oppert93 loopt; Haringvliet34 geparkeerd wegens onvoldoende zicht op bovenbouw. Boterslootfoto1976-11661 toont de tegenoverzijde van nummer39, niet Senft zelf; huisnummer nog onbekend. Niet als bouwklare kandidaten tellen. Menuvoorstel niet uitgevoerd.

### 2026-10-03 — Sint-Laurensstraat 47 (lokale ronde 9)
- `slagerij-verzijden-sint-laurens47` toegevoegd als 150e gebouw: kleine slagerij in gevel met jaartal 1654. Foto/modeltijdlaag 1921; geen ongefundeerde claim dat slagerij in 1939 dezelfde gebruiker had.
- Complete RCE 20192189-foto ongewijzigd, CC BY-SA 4.0; één afzonderlijke AI-kleurinterpretatie met prompt, review en dezelfde licentie. Mensen/vleeswaren en kleuren expliciet interpretatief.
- Historische plaats J2052 op Z7 tussen 45/49; buiten Beurssloopterrein. Verlies is synthese huisnummerkaart + primaire 1940-schadekaart en ruïnefoto SAR 2008-7, geen afzonderlijke inslagclaim.
- Breedte 3,72 m kaartafgeleid, hoogte circa 10 m en achterdiepte 14,5 m benaderd. Achterkap niet zelfstandig bewezen; sober gehouden. Plaats onzeker circa 5 m.
- Exacte meshprojectie 55,539 m²; footprintbuffer 3 cm, geen overlap bestaande modellen boven 0,03 m² en 0 m² met opgeschoonde achtergrond. Alleen displaymodel gewijzigd; oorspronkelijke achtergrondcontouren behouden.
- GLB/Blend geëxporteerd. `npm run check`: 150 gebouwen / 18 verhalen, 10 tests geslaagd; gericht desktop/mobiel fotopaar en fullscreen zonder JS/HTTP-fouten. Onderzoek/reproductiescripts in `research/expansion-20261003/sint-laurens47/`; gerichte screenshots in `artifacts/sint47-browser/`. Nog geen commit/push door subagent.
- Ook `npm run test:browser` geslaagd: geen fouten, geen overflow, moderne3D en mobiele viewer gecontroleerd.

### Oppert 93 — lokale toevoeging, 3 oktober 2026

Het sierlijke winkelhuis aan historisch Oppert 93 is toegevoegd met twee RCE-fotoparen (20192354 straatgevel en 20192353 raamdetail; C. Hoogendijk, CC BY-SA 4.0). Beide originele JPEG-bestanden zijn byte-identiek bewaard met afzonderlijke SHA-256-controle. AI-winkelletters, fijne glasdetails en ornamenten zijn expliciet interpretatief. Vijf directe bronnen onderbouwen gevel, datering, historische plaats en verlies: RCE, monumentenlijst1915, Z8/1938 en gemeentelijke schadekaart1940. Verlies is een kaartvergelijking; geen individuele inslagmelding. Adres93 is duidelijk; perceelnummer wordt met onzekerheid als2345 gelezen.

Drie bovenlagen, drie assen en de middenornamenten zijn schematisch weergegeven. Alleen voorhuis, circa16m hoog; onbekende kap technisch vlak afgesloten zonder historische platdakclaim. Plaats circa7m onzeker. Geen bestaand buurmodel veranderd. GLB en Blenderbestand geëxporteerd, achtergrond uitgesneden. Exacte meshcontrole: geen losse modelconflicten,0m² achtergrondoverlap. Npmcheck10tests geslaagd; gerichte desktop/mobiele browsercontrole zonder fouten of overflow (momentopname151locaties/18verhalen). Onderzoek en screenshots staan in research/expansion-20261003/oppert93. Nog geen publicatiebewijs.

### Ronde9 — Nieuwehaven169 lokaal afgerond
152e gebouw. Helefoto1904/PDM plus AIv1 en aanvullend Verheul1937/PDM als ongewijzigde kleurbron zonder AI. Model1937zonder VERFWARENbord, galerijfoto1904metbord; verschil expliciet. Perceel905Z17, plaats±8m, alleen voorbouw. Verlies via ruimtelijke vergelijking schadekaart, geen specifieke inslagclaim; Offers&Vederbedrijf opNoordereiland nadrukkelijk niet alsverliesbron gebruikt. Npmcheck152gebouwen/18verhalen/309foto's/288paren,0errors10tests; browserchecks desktop/mobile goed. Exactmesh103,7229m²,nul model/achtergrondoverlap. Catalogus+data/model-landmarks.json+landmarks/nieuwehaven169 gewijzigd. Research in expansion-20261003/leuvehaven65. Geencommitpush.

### Ronde negen — vijf lokaal gereed vóór publicatie

Toevoegingen 41–45: De Blauwe Ster, De Twee Leeuwen, Slagerij Verzijden (Sint-Laurensstraat 47), Oppert 93 en Nieuwehaven 169. Deze ronde bevat zes originele/AI-paren plus Verheuls ongewijzigde aquarel als aanvullende kleurbron. Root heeft de nieuwe gevelpreviews, kaartplaatsingen en mobiele galerijen bekeken, en de vijf nieuwe bronbestanden van de laatste drie locaties bytegelijk met de onderzoeksdownloads gecontroleerd. Onzichtbare daken, geschatte maten en generatieve beelddetails blijven expliciet onzeker. Alleen drie nieuwe catalogusitems sinds lokale commit 3c08556; geen bestaande items gewijzigd in deze afronding.

Lokale eindcontrole: 152 locaties, 18 verhalen, 309 bronbeelden en 288 AI-paren, 10 tests geslaagd. Gerichte browsers per nieuw item goed; exacte meshcontroles geven geen modelconflicten of achtergrondoverlap. Cachequeries bijgewerkt naar round9-20261003. De openbare byteverifier controleert nu ook aanvullende originelen zonder AI; minimaal één volledig fotopaar per locatie blijft verplicht. Menustructuur ongewijzigd. Publicatiebewijs volgt hieronder. Volgende volledige backup bij toevoeging 50; checkpoint40 blijft bewaard.

### Ronde negen — openbaar geverifieerd

Release c243eb962e1d1dc315fdcd2c161d16b9a4209cdb, geslaagde Pages-run 37081810888. R9-bytecontrole bevestigt 22 openbare runtimebestanden, aanvullend 3 bestanden (modelrouter, gedeelde bouwer en aangepaste GLB van Huis met de Beelden): totaal 25 bytegelijk. Anonieme browsercontrole op https://rdam39.nl/ met Nieuwehaven 169: 152 locaties, 18 verhalen, geen JavaScript-/HTTP-fouten of mobiele overflow, fotopaar, fullscreen en Nu 3D geslaagd. Openbare mobiele galerie en Nu-weergave door root bekeken.

Nu 45 toevoegingen in negen gepubliceerde rondes. Volgende backup bij 50, bestaande checkpoint40 blijft behouden. Nieuwe onderzoeksleads Boompjes 58 en Leuvehaven 20–22 zijn nog niet als gebouw toegevoegd: fotodatum/late gevelcontinuïteit respectievelijk verliesketen nog te controleren. Doorlopende opdracht blijft actief. De menu-optie 'Ga naar een plek' is alleen een voorstel en is niet geïmplementeerd.

### Ronde tien — Boompjes 58 lokaal geïntegreerd

Herenhuis Boompjes 58 toegevoegd als locatie 153, met ongewijzigde RCE20191941 (C. Hoogendijk, CC BY-SA4.0) en één afzonderlijke AI-kleurinterpretatie. Exacte foto- en bouwdatum onbekend; geen identificatie van de fotograaf met de gelijknamige kunstverzamelaar en geen ongedocumenteerde stijldatering. Verlies is expliciete synthese van Z12-huisnummerkaart, gemeentelijke schadekaart en ruïnecontext, geen individuele inslagclaim. Voorbouwkaartbreedte circa12,5m; hoogte/diepte/achterkant benaderd, achterterrein niet opgevuld.

GLB en Blender geëxporteerd. Exacte geprojecteerde meshoppervlakte152,956m², geen overlap met nabij Oostindisch Huis en0m² met uitgesneden achtergrond (tolerantie0,03m²). Portable `placement.json`, `mesh-qa.json`, `original-integrity.json`, bronverantwoording, prompt en AI-review bij het item. `npm run check`:10tests geslaagd. Gerichte desktop/mobiele galerie en fullscreen zonder browser/HTTP-fouten, geen mobiele overflow; livegevel en mobiel beeld bekeken. Dit is lokale integratie, publicatie door root volgt apart.

Schrijnwerkerssteeg11 blijft onderzoek: scan Rotterdamsch Nieuwsblad14-03-1940 noemt nr13 bij instorting, terwijl OCR foutief33 geeft. Geen zekerheid over nevenschade11; niet toegevoegd.


### 3 oktober 2026 — ronde 10, Wijnhaven 67 en Nieuwehaven 71–73 lokaal gereed

Twee locaties toegevoegd als catalogusitems 155 en 156: koopmanshuis Wijnhaven 67 en het ensemble Nieuwehaven 71–73. RCE-foto’s met CC BY-SA 4.0 en Verheuls PDM-aquarellen onderbouwen de gevels en kleuren. Nieuwehaven-opname 20192301 blijft ongewijzigd maar krijgt expliciet het label gespiegeld; correct georiënteerde 20192302 vormt het AI-paar. Verlies is een expliciete ruimtelijke bronketen van historische huisnummerkaarten en gemeentelijke schadekaart, geen individuele inslagclaim.

Alleen voorbouwen, geen blind ingevulde achterterreinen. Modelmaten zijn benaderd; plaats circa 8 meter en hoogte circa 3 meter onzeker. GLB + Blend zijn opnieuw geëxporteerd; achtergrond opnieuw uitgesneden. Exacte meshoppervlakken: Wijnhaven 67 circa 102,66 m² en Nieuwehaven 71–73 circa 168,22 m², beide zonder overlap met andere modellen of resterende achtergrond. Herleidbare rechten, prompts, bronnotities, oorspronkelijke hashes en controlebestanden staan in de eigen landmarkmappen.

`npm run check`: 156 gebouwen, 18 verhalen, 316 foto’s, 292 paren, nul fouten en 10 geslaagde tests. Beide gerichte browserchecks slagen zonder console-/netwerkfouten of mobiele overflow; galerie, fullscreen en Nu 3D werken. Desktop-, mobiele en live-modelscreenshots zijn bekeken. Status: lokaal gereed; hoofdtaak verzorgt commit en publicatie. Geen zelfstandige publicatieclaim.


Na onafhankelijke review zijn de twee centrale bovenopeningen van Nieuwehaven 71 veranderd in dichte panelen met verticale splitsing, zoals de bronfoto. Export en meshcontrole herhaald: 168,22 m², nul overlap. De monumentenlijst uit 1915 (p. 339, nr. 60) is bij Boompjes 58 toegevoegd: circa 1796, toegeschreven aan J. Giudici, met expliciete onzekerheid van de toeschrijving.

### Ronde tien — Houttuin 46 en kerkpositie lokaal gereed

Pakhuis Houttuin 46 toegevoegd als vijfde nieuwe locatie in ronde tien (catalogus 157). Gehele oorspronkelijke RCE20192144, C. Hoogendijk, CC BY-SA 4.0, met afzonderlijk AI-paar/prompt/review. Twee brede laadlagen plus één zolderluik, kleine vensters en één hijsbalk; de andere balk op de foto behoort aan buur 48. Modelbreedte circa 5,8m kaartafgeleid; hoogte circa14,7m en diepte15m expliciet benaderd. Geen exact fotodatum- of kleurclaim. RJB1935-passage alleen via geïndexeerde primaire tekst gelezen; directe PDF onbereikbaar en als zodanig gemarkeerd. Verlies is synthese van Z17-adres46/perceel548 en primaire schadekaart, niet een afzonderlijke inslagclaim.

De bestaande Laurentiuskerk stond circa28m te westelijk; bronkaart Z17 situeert kerk42 op719 oostelijk van tussenhuis44 en pakhuis46. Kerkmaten behouden en positie/gevelankers/polygon/footprints/exclusion consistent vernieuwd. Beide GLB- en Blender-modellen geëxporteerd. Exacte mesh-oppervlakken pakhuis99,366m² en kerk696,066m²; onderlinge en achtergrondoverlap0m², tolerantie0,03m². Portable placement/integrity/meshQA bij pakhuis; plaatsingsbronnotitie+meshQA bij kerk. npm check10/10; gerichte desktop-/mobiele galerij en fullscreen voor beide locaties geslaagd zonder fouten of mobiele overflow. Publicatie volgt afzonderlijk door root.


### Ronde tien — vijf lokaal afgerond
Toevoegingen46–50: Boompjes58, Leuvehaven22, Wijnhaven67, Nieuwehaven71–73 (één ensemble), Houttuin46. Vijf nieuwe AI-paren, aanvullende ongewijzigde originelen bij Wijnhaven en Nieuwehaven. Rootcontrole van alle nieuwe originele bronbestanden bytegelijk; live modellen en mobiele galerijen bekeken. Laurentiuskerk als enige bestaande cataloguslocatie aangepast: positie naar Z17-perceel719, alle ruimtelijke velden en GLB herberekend. Geen andere bestaande152-locatie gewijzigd.
Eindcontrole157locaties/18verhalen/317beelden/293AI-paren,804MiB, nul fouten,10tests. Gerichte browsercontroles en Houttuin/kerk-geometrie zonder overlap of JS/HTTP-fouten. Cachequeries round10-20261003. Zie RONDE10-20261003.md. Publicatiecontrole en backup50 volgen afzonderlijk; dit is nog geen liveclaim.

### Backupcheckpoint50
Tag `rdam39-20261003-50-buildings` staat lokaal en op GitHub, wijst naar release `18bcfaa60fe754a9187cbaa724727854ce2c6f8e`. Volledige Git-bundle gemaakt buiten repository: `rotterdam_1939/backups/rdam39-20261003-50-buildings.bundle`. `git bundle verify` bevestigt complete geschiedenis en geldige bundle. SHA-256 `d95dfbc0eda36ba37d105a0d46e251789d66a4617bd54df2bc777364aec855f4`. Dit omvat alle getrackte projectbestanden en geschiedenis; lokale research/testartefacten buiten Git zijn geen onderdeel. Volgende verplichte backup bij60toevoegingen.

### Ronde tien — openbaar geverifieerd
Release18bcfaa60fe754a9187cbaa724727854ce2c6f8e: Pages37085663868 en check37085663852 success. Anonieme openbare bytecontrole22bestanden geslaagd, plus kerkmodelGLB afzonderlijk bytegelijk. Browser op https://rdam39.nl/:157gebouwen/18verhalen, nulJS/HTTP-fouten/overflow; fotopaar, fullscreen, mobiel en Nu3D geslaagd. Publieke mobiele galerie en Nu-screenshot visueel bekeken. Bewijs: VERIFICATIE-RONDE10-20261003.json. Checkpoint50 hierboven voltooid. Onderzoek ronde11 loopt, nog geen volgende locaties geïntegreerd. Het voorstel Gebieden→Ga naar een plek is niet geïmplementeerd.


### Ronde elf — toevoeging 51 lokaal: Pakhuis Houttuin 12

Locatie `houttuin12` toegevoegd met één ongewijzigd RCE-origineel/AI-paar, bronvermelding en CC BY-SA 4.0. Identiteit onafhankelijk gecontroleerd via Schallers foto uit 1925 (alleen externe bronlink, geen publicatie van dat beeld), huisnummerkaart N504 en RJB 1935. Verlies blijft expliciete combinatie van adreskaart en gemeentelijke schadekaart. Geen exacte 1939- of kleurzekerheid. Houttuin 14 is het buurhuis, ondanks de adresmetadata van de vrije opname.

GLB en Blender-export gereed; exacte meshprojectie 52,5331 m², nul model- en achtergrondoverlap. 157 bestaande catalogusentries ongewijzigd. Check: 158 gebouwen/18 verhalen/318 foto's/294 AI-paren, nul fouten, tien tests. Browser desktop/mobiel/fullscreen/Nu geslaagd en screenshots bekeken. Bewijs in `site/landmarks/houttuin12/CONTROLE.md`, mesh-qa.json en browser-report.json. Alleen lokaal; geen commit of publicatie door subagent. Boompjes 42–43 blijft research totdat plaatsingscontrole is afgerond.

### 3 oktober 2026 — Bekking, Boerenvismarkt 10 (ronde 11)

- Nieuw pand `bekking-boerenvismarkt10`: complete RCE20191889-foto van C. Hoogendijk, opnamedatum onbekend, CC BY-SA 4.0, met afzonderlijk gecontroleerd AI-paar. Oprichtingsjaar 1847 niet als bouwjaar gepresenteerd.
- Nummer 10/perceel 2338 via SAR Z8. Luchtfoto 1938 bevestigt de bebouwde rij; individuele geveldetaillering blijft de ongedateerde fotolaag. Verlies onderbouwd als synthese nummerkaart/schadekaart en ruïnefoto, niet als aparte bominslagclaim.
- Bestaand Binnenrotte-deelmodel ligt aan andere kant Laurenskerk: geen duplicaat. Breedte circa 7,78 m kaartafgeleid; diepte 18 m/hoogte 20,2 m en achterkap benaderd. Middenopening met glazen bovendeel en dichte verticale borstwering; gevelopschrift letterlijk weergegeven.
- Exacte meshvoetprint 149,6631 m²; 0 m² overlap achtergrond en nabij Luchtspoor, tolerantie 0,03 m². Achtergrond opnieuw uitgesneden. GLB + Blender geëxporteerd. Portable bron-, prompt-, review-, integriteits-, plaatsings- en meshbestanden bij het item.
- `npm run check` 160 gebouwen, 320 foto's, 296 AI-paren, nul fouten/10 tests geslaagd. Algemene browsercheck via lokaal Chrome en gerichte desktop/mobiele galerie/fullscreenchecks geslaagd. Screenshots lokaal in `artifacts/bekking-browser/` (niet bedoeld voor commit). Publicatie door coördinerende agent; deze notitie is geen liveverklaring.


## Lokale toevoegingen 54–55 · Boompjes 42–43 en Mercurius 40 · 3 oktober 2026

Catalogus lokaal 162 locaties. Twee items toegevoegd met historische percelen Z12 (785/784 en 1529), hele gevelbeelden RCE/CC BY-SA 4.0, AI-varianten en traceerbare bronpassages. Mercurius heeft daarnaast het volledige gedeelde overzicht uit februari 1938 als tweede oud/AI-paar. Verlies mei 1940 is expliciet een kaartketen, geen individuele bominslagclaim. Kleur pui 42 volgt Verheul 1936; overige kleuren en achtervolumes zijn interpretatie.

GLB/Blender geëxporteerd, achtergrond geclipt; nul achtergrondoverlap en nul onderlinge nieuwe mesh-overlap. 42–43 heeft nog 6,789 m² overlap met de bestaande synagogemesh: blokkade voor definitieve ruimtelijke vrijgave, onderzoek Boompjes 87 loopt bij hoofdonderzoeker. Geen verplaatsing van die synagoge uitgevoerd. ModelSpec en originele fotobytes gecontroleerd; npm check nul fouten/tien tests. Desktop/mobiel/fullscreen/Nu en beide Mercurius-paren geladen en screenshots bekeken. Publieke folders bevatten alleen vrij verklaarde gevelbeelden, geen ongetoetste kaartcrops. Nog niet gecommit of gepubliceerd door subagent.


## Lokale correctie Rotterdamsche Bank · Boompjes 77–81

Bestaand item naar historisch Z11 H1827 verplaatst op primaire kaart en luchtfoto 1924; geen generieke offset. Frontbreedte circa 31 m in plaats van 37 m, voorbouwdiepte 33 m en hoogte blijven schematisch. GLB/Blend en achtergrond vernieuwd. Catalogusaantal blijft 162. Npm check nul fouten, twaalf tests geslaagd; desktop/mobiel/fullscreen/Nu gecontroleerd. **Open punt:** exacte nieuwe bankmesh heeft 94,608 m² overlap met bestaande Bijbank; andere locatie niet gewijzigd, onafhankelijke controle nodig. Geen commit/publicatie door uitvoerder.

### Ronde elf — definitieve lokale controle
Vijf toevoegingen 51–55 afgerond: Houttuin 12, Leuvehaven 52, Bekking Boerenvismarkt 10, Boompjes 42–43 en Boompjes 40 Mercurius. Originele foto's, AI-paren, prompts, rechten en bronketens staan bij ieder item. Bij Mercurius staat het hele overzicht uit 1938 vooraan, gevolgd door de detailfoto.

De hierboven beschreven tijdelijke overlapproblemen zijn opgelost: synagoge 87, Oost-Indisch Huis 90, Rotterdamsche Bank 77 en Bijbank 72 zijn op hun afzonderlijk onderzochte historische percelen gezet. Twee Leeuwen kreeg alleen een begrenzing van het overstek bij Leuvehaven 52. Het synagogeverhaal is met dezelfde plaatsingsbron gesynchroniseerd. Exacte meshcontroles tonen geen model- of achtergrondoverlap. Twaalf tests slagen bij 162 locaties/18 verhalen/323 foto's/299 paren. Hoogten, niet zichtbare achtergevels en niet bewezen kleuren blijven expliciete benaderingen. Publicatiecontrole volgt apart. Backup 50 is voltooid; volgende backup bij 60. Menuvoorstel niet uitgevoerd.

### Ronde elf — openbaar geverifieerd
Release `c66be296d72879d91a10e58a6d16f5a00d0201ac`: Pages-run 37090145927 en check-run 37090145978 beide geslaagd. Negentien openbare bestanden voor de vijf nieuwe locaties bytegelijk aan de repository; daarnaast acht gewijzigde runtimebestanden en bestaande modellen afzonderlijk bytegelijk. Bewijs: `VERIFICATIE-RONDE11-20261003.json` en `VERIFICATIE-RONDE11-CORRECTIES-20261003.json`.

Anonieme browsercontrole op https://rdam39.nl/: 162 locaties/18 verhalen, nul browser- of HTTP-fouten en geen mobiele overflow; oud/AI, fullscreen en Nu 3D geslaagd. Publieke mobiele galerie en fullscreen visueel bekeken. Totaal 55 toevoegingen in deze reeks, volgende volledige backup bij60. Ronde12 blijft bronnenonderzoek; nog geen volgende nieuwe panden geïmplementeerd.


## Lokale toevoeging 56 · Oppert 55 · 3 oktober 2026

Halsgevelhuis toegevoegd als 163e locatie. Vrije hele RCE-foto 20192351 met oorspronkelijke bytes en AI-paar, bron/rechten/prompt en review bewaard. Vorm volgt origineel: bovenvensters 3–3–2–1, gebogen halsprofiel, donkere paneelpui. Verlies is expliciet kaartsynthese Z8/perceel1492 + verwoeste Oppert-rij; geen individuele bominslagclaim. Twee onafhankelijke hoekankers bepalen plaats, geen moderne geocode; 7 m onzeker. Alleen 10 m voorbouw van circa 22,6 m perceeldiepte, hoogte geschat.

GLB/Blend en achtergrond gereed. Exacte meshcontrole: nul model- en achtergrondoverlap. Origineel bytegelijk, modelSpec gelijk aan researchdraft, voorgaande 162 items intact. Npm check nul fouten en 12 tests; desktop/mobiel/fullscreen/Nu gecontroleerd en screenshots bekeken. Nog niet gecommit of gepubliceerd door subagent.

### 3 oktober 2026 — Westewagenstraat 2–4

Twee halsgevels bij de Raambrug toegevoegd als één ensemble (164 locaties op dit controlemoment). Volledig origineel RCE 20192594 en afzonderlijke AI-kleurinterpretatie, directe bronondersteuning en originele SHA-controle aanwezig. Model volgt de ongedateerde Engers-fotofase; foto uit 1934–1938 bewijst dezelfde gevels met gewijzigde reclame, geen exacte 1939-reclameclaim. Plaatsing op historische percelen J268/J2127 met Raambrug/Krattenbrug als onafhankelijke ankers; schadeplan bevestigt verwoest gebied. Raamstraat 24 niet als nummer 2 gebouwd. Hoogte, achterbouw en kleuren benaderd. GLB/Blend geëxporteerd, achtergrond opgeschoond; exacte model- en achtergrondoverlap 0 m², npm-check 12/12 en desktop/mobiele galerie/fullscreencontrole zonder fouten. Research: expansion-20261003/round12-nh. Niet afzonderlijk gepubliceerd.

### 3 oktober 2026 — lokale toevoeging 58: Westewagenstraat 23

Centrale klokgevel toegevoegd als locatie 165 met ongewijzigde RCE 20192595 (CC BY-SA 4.0), definitieve AI v3, drie prompts en expliciete interpretatienotitie. Vier schuiframen, dubbel zolderraam met reling, etalage en gesloten onderpaneel volgen de foto. Gevelidentiteit via adrescaption en buurpatroon; huisnummer niet leesbaar. Eigen Z7-frontcorrectie houdt alleen J1567 en 9 m voorbouw aan. Verlies onderbouwd als kaartsynthese, geen individuele inslagclaim. Plaats en kleuren blijven benaderd.

GLB/Blend en achtergrond gereed; exacte meshcontrole nul model- en achtergrondoverlap, originele bytes gelijk, voorgaande 164 items intact. 165 locaties / 18 verhalen / 326 foto's / 302 paren; npm check nul fouten en 12 tests. Desktop, mobiel, fullscreen, Nu en live model gecontroleerd. Nog niet gecommit of gepubliceerd door subagent.

### Kipstraat 33–37 — lokale toevoeging 3 oktober 2026

Eén ensemble met drie afzonderlijk geïdentificeerde panden: Pollen op 33 (L546), het hoge middenpand 35 (L1192), en 37 (L540). Historische hoek Korte Frankenstraat, niet Goudschewagenstraat. Nummering volgt kaart Z15 uit 1938; een afwijkende beschrijving van nummer 33 uit 1915 is niet als bouwstijl- of dateringsbewijs gebruikt. De ongedateerde gevelopname is geen exacte reconstructie van 1939. Positie ongeveer ±8 m; hoogten ±3 m; achterbouw en kleuren benaderd.

Eén ongewijzigd RCE-origineel met AI-afgeleide, CC BY-SA 4.0, prompts en beeldcontrole opgenomen. De tweede RCE-opname is gespiegeld en uitsluitend onderzoeksmateriaal. Directe foto-, kaart-, schade- en bedrijfsbronnen staan bij het item. Verlies is onderbouwd met de gemeentelijke schadekaart plus historische percelen en de specifieke publicatie over Pollen.

GLB en Blender opnieuw geëxporteerd, achtergrond uitgesneden. Exacte geprojecteerde mesh heeft geen overlap met andere losse modellen of achtergrond. Geen buurmodel verplaatst. Technische check: 12 tests geslaagd, 166 locaties op dit controlemoment. Browsercontrole en screenshots staan in `research/expansion-20261003/round12-candidates/kip-*`. Publicatie gebeurt apart door de hoofdtaak.

### 3 oktober 2026 — lokale toevoeging 60: Haringvliet 48

Kweekschool met den Bijbel toegevoegd als 167e locatie, met twee oud/AI-paren: frontale RCE-opname (nieuwe gecorrigeerde AI) en gedeelde Leenheer-foto uit 1933. Originelen hergebruikt met volledige zelfstandige credits en beperkingen. Bouwjaar 1701 en meander via DBNL 1915; schooladres via primaire ledenlijst uit 1928. Verlies expliciet kaartsynthese, geen afzonderlijke inslag. Schoolbord in AI bewust onleesbaar, juiste naam in bijschrift.

Volle bronfront van 48 behouden; bestaande 46/50 zijdelings op eigen bronperceel begrensd, zonder verplaatsing of hoogtewijziging en met behoud van pui en bordes. GLB/Blend van alle drie en achtergrond vernieuwd. Exacte meshcontrole bij alle drie nul model- of achtergrondoverlap. 167 locaties / 18 verhalen / 329 foto's / 305 paren; npm 12 tests en nul fouten. Browser desktop, mobiel, Nu, fullscreen en live model bekeken. Nog geen commit of publicatie. Volledige backup 60 door hoofdtaak volgt.

### Ronde12 — openbaar geverifieerd en backup60
Release8d003c57308b5569bca730f2ef3c351c4b7e0588, Pages37093869422/check37093869429 geslaagd. Vijf nieuwe locaties:Oppert55, Westewagenstraat2–4, Westewagenstraat23, Kipstraat33–37, Haringvliet48. 167locaties/18verhalen. 24openbare bestanden bytegelijk; anonieme browsercheck desktop/mobiel/fullscreen/Nu geslaagd zonder fouten of overflow. Backup60-tag op GitHub en lokaal geldig volledig Git-bundle gemaakt; hash en detail in RONDE12-20261003.md. Volgende backupbij70. Ronde13 is uitsluitend onderzoek; menuvoorstel niet uitgevoerd.

### Wijnhaven 61–65 en gedeelde grens met 67 — 3 oktober 2026

Eén nieuwe gevelgroep, gefotografeerd februari 1938 (RCE 20192619, maker onbekend, CC BY-SA 4.0). De monumentenlijst van 1915 beschrijft 61/63/65 als oorspronkelijk één bergstenen gevel uit 1701; Grieks fries herkenbaar in foto en model. Eén origineel/AI-paar, origineel byte-identiek; beide prompts en review bewaard, alleen geselecteerde proef02 gepubliceerd als lokaal bestand. Kleine teksten en raamlijnen zijn interpretatief. Primaire huisnummer- en schadekaart onderbouwen het verlies als expliciete bronnenvergelijking.

De gezamenlijke grens met 67 is opnieuw op Z12 gelezen. Voorlijn67 circa6,75m breed; alle horizontale onderdelen proportioneel geschaald, hoogten behouden. Beide modellen volgen dezelfde licht scheve perceelsgrens; alleen onbewezen randuitsteeksels aan die grens begrensd. Geen andere buurmodellen aangepast. Bij65 is alleen het zichtbare verhoogde platform gemodelleerd; geen eigen trap (grote bronnentrap hoort bij67). Dakvorm/achterbouw61–65 onbekend, vlakke modelafsluiting is geen historisch platdakbewijs.

Beide GLB/Blend opnieuw geëxporteerd, achtergrond uitgesneden. Exacte mesh-overlap met andere modellen en achtergrond voor beide nul. npmcheck12/12; gerichte desktop/mobielbrowser168locaties, geen errors/overflow. Bewijs in `research/expansion-20261003/round13-wijnhaven/`. Publicatie volgt apart door hoofdtaak.


## De Kroon — lokaal toegevoegd, 3 oktober 2026

Hotel-restaurant De Kroon, Hofplein 12, toegevoegd als 169e locatie. Eén volledig oorspronkelijk panorama/AI-paar (IX-1313) plus tweede oorspronkelijke foto (VIII-89-09), beide De Maasbode 1939/PDM. Verlies expliciet afgeleid uit adreskaart, late foto’s en gemeentelijke schadekaart; geen individuele bominslagclaim. Negen raamassen, drie bovenlagen; achterbouw en dakvorm onbekend, alleen conservatieve voorbouw. De kavel is onafhankelijk geplaatst met vier kaartankers. Exacte modelcontrole zonder conflicten en 0 m² achtergrondoverlap, GLB en Blender geëxporteerd. Npm check en gerichte desktop/mobiele galerie/lichtbakcontrole geslaagd. Runtimebronpakket, integriteit en plaatsings-/meshcontrole staan bij het item. Deze toevoeging is lokaal; commit/push/publicatie zijn aan de hoofdtaak.

## 3 oktober 2026 — ronde 13, De Vlijt lokaal toegevoegd

De Vlijt aan de historische Nieuwehaven 171 is als 170e locatie geïntegreerd, met een geheel origineel/AI-paar (RCE 20192336, C. Hoogendijk, CC BY-SA 4.0), rechtstreekse bronnen en expliciete tijdlaag-/kleurbeperkingen. Nummer 171 ligt op Z17-perceel 1081 naast 169/905. Een strook van de pui op Verheul mei 1937 en de kaart uit 1938 ondersteunen late continuïteit; niet alle opschriften of dakdetails zijn voor exact 1939 bewezen. Verlies is een gedocumenteerde ruimtelijke vergelijking met de gemeentelijke schadekaart, geen individuele inslagclaim.

Het lichte model heeft vier bovenste vensterrijen, hoge bel-etage, onderpui, leesbare hoofdopschriften en een benaderde kap. Alleen 13 m voorbouw is gebruikt; hoogte circa 21,45 m en plaats circa 8 m onzeker. Uitsluitend zijdelingse overstekken van bestaand 169 zijn op de bronkavelgrens begrensd; centrum, gevelbreedte, hoogte, pui en bordes zijn behouden. Aan 171 is 2 mm numerieke marge op de gedeelde zijgrens gebruikt om float32-exportcontact te vermijden, geen zichtbare versmalling. GLB en Blender van beide panden zijn vernieuwd.

Exacte runtime-meshcontrole: 171 circa 92,7405 m², 169 circa 100,3279 m²; beide nul overlap met andere losse modellen en de uitgesneden achtergrond. `npm run check`: 170 gebouwen, 18 verhalen, 333 fotovermeldingen, 308 AI-paren, 12 tests geslaagd. Gerichte browsercontrole: desktop, mobiele galerie/lichtbak, beeldbron, Nu standaard 3D en geen overflow/JS-/HTTP-fouten; screenshots van de nieuwe plek en beide gevels visueel bekeken. Portable bewijs staat in `site/landmarks/nieuwehaven171-devlijt/CONTROLE.md`, `mesh-qa.json`, `placement.json` en `asset-hashes.json`. Dit is lokale integratie; commit en openbare publicatie worden door de hoofdtaak verzorgd.


### Ronde 13 — Old Dutch en Atlanta, lokaal afgerond 3 oktober 2026

Old Dutch (Coolsingel103) toegevoegd als171e item, met ongewijzigd CC0-origineel1976-7721 uit1931 en afzonderlijke AI02. Fotoperiode ligt expliciet vóór de bedrijfsnaam uit1932. Bouwpolitiefoto3maart1939 bevestigt continuïteit, maar blijft research-only wegens ontbrekende vrije rechtenvermelding. Eigen bedrijfsgeschiedenis onderbouwt brand14mei1940. Gevelbron onderscheidt erkerfronton, lage zolderstrook en dakkapel. Plaatsmarge±5m; hoogte/achterbouw/kleuren benaderd.

Atlanta-envelop onafhankelijk gecorrigeerd op Z4hoek Coolsingel/Aert van Nesstraat:26m-as langsAert, circa17,10m langsCoolsingel, hoogte behouden. `modelScaleZ` in city22-builder maakt live/export consistent. Vorige luifelprojectie overlapte OldDutch9,1195m² en oude envelop nam een deel van101 in. Portablebronoverlay/proposal/plaatsingsnotitie staan bijAtlanta. BeideGLB/Blend opnieuw geëxporteerd.

Exacte geprojecteerde meshtriangles tegen alle171modellen: geenconflicten, achtergrond voorbeide0m² (tolerantie1e-8m²); QA bijbeideitems. npmcheck:171gebouwen,18verhalen,334foto's,309AIparen,0fouten,12tests geslaagd. Gerichtebrowsercheck OldDutch: desktop/mobiel, viewer, Nu3D, geen404/JSfouten/overflow. Screenshots `artifacts/olddutch-browser/`. Geencommit/push door integratieagent; rootreview/publicatie volgt.

### 3 oktober 2026 — Nieuwehaven 53–55 (ronde 13, lokaal)

- Nieuw afzonderlijk kantoor-/pakhuis naast het bestaande nummer59; geen dubbel model van het rococopand. RCE20192285 toont de dubbele deuradressen, een tweede foto bevestigt55 in juli1928. Adresboeken1934–1935 en1939 zijn gecontroleerd, inclusief originele1939scans: Oostenrijks consulaat eerder, Dominicaanse vertegenwoordiging op55a in1939.
- Plaatsing op Z17/perceel830 met onafhankelijke straatankers. De volledige noordrij is verwoest ingekleurd op het gemeentelijke schadeplan1940. Breedte circa8,61m; voorbouw12m benaderd, positie±10m en hoogte±3m. Het model vertegenwoordigt de oudere fotofase, geen bewezen exacte1939gevel. Verborgen kap/achterzijde onbekend; naam en jaartal niet ingevuld.
- Het gehele oorspronkelijke beeld en de geselecteerde AI-correctie van het beeld bij59 zijn als zelfstandig gecrediteerd paar gekopieerd. Originele SHA256 gelijk; prompts01–03 en correctienotitie bewaard. AI blijft interpretatie, vooral kleine opschriften en fijne details.
- GLB en Blender opnieuw gemaakt; achtergrond uitgesneden. Alle171 reeds aanwezige modellen met de live modelbouwer gecontroleerd via mesh-boundingboxes, nabije nr59 vervolgens met werkelijke driehoekprojecties: overlap0,0m². Achtergrondoverlap0,0m². Runtime- en researchgeometrie gelijk.
- npmcheck:12tests geslaagd. Gerichte browsercontrole:172locaties als momentopname, geen console-/requestfouten, desktop Toen/Nu3D, mobiele galerie en fullscreen goed. Screenshots/bronketen in research/expansion-20261003/round13-second. Geen publicatieclaim; hoofdtaak verzorgt commit/deployment.

### Ronde 13 — publicatievoorbereiding
Vijf toevoegingen lokaal gereed, catalogus172/18verhalen,335fotovermeldingen/310AIparen. Technische en visuele controles geslaagd. Adresboekscans van Nieuwehaven53–55 zijn uitsluitend onderzoek gebleven: CC0-open-dataregistratie specificeert XML, geen expliciete beeldlicentie. Directe archiefrecords staan in de bronlijst. Volgende backup bij70toevoegingen, huidige ronde bereikt65. Openbare verificatie volgt op de release.

### Ronde 13 — openbaar geverifieerd
Release9fc58fe487d5be24d1098882c052257a3961cb10, Pages37099415958 encheck37099415993 geslaagd. Vijf nieuwe locaties, totaal172locaties/18verhalen en65toevoegingen. 27openbare bestanden bytegelijk gecontroleerd, inclusief gecorrigeerde buurmodellen en AI59. Anonieme browsercheck desktop/mobiel/lichtbak/Nu3D zonder fouten of overflow; screenshots door hoofdtaak bekeken. Rapporten VERIFICATIE-RONDE13*.json. Volgende volledige backupbij70. Ronde14pastorie55–57 is onderzoek met kleurproef, nog geen nieuwe runtime.


## 3 oktober 2026 — ronde 14, item 1 lokaal

Pastorie Sint-Rosalia aan Weste Wagenstraat 55–57 toegevoegd als locatie 173. Vrije hele RCE-foto met geselecteerde AI-proef 02, directe Kruitwagengetuigenis, adreskaart en specifieke CC BY-SA 4.0-licentie. Eén voorhuis op voorstrook 2197 plus 561; geen dubbel kerkmodel. GLB/Blend en achtergrond bijgewerkt; exacte mesh- en achtergrondoverlap nul. Desktop/mobile/fullscreen/Nu 3D gecontroleerd. Nog niet gepubliceerd of gecommit; release volgt na complete ronde. Portable bewijs in site/landmarks/pastorie-rosalia.

## Ronde 14 — lokale toevoegingen en plaatsingscorrecties (3 oktober 2026)

Nieuwehaven 139 en Zuidblaak 18 zijn lokaal toegevoegd met ieder een ongewijzigd RCE-origineel en een afzonderlijke AI-interpretatie. Momentopname: 175 locaties. Nieuwehaven 139 gebruikt de opname van februari 1938; Zuidblaak 18 heeft een ongedateerde fotolaag, onafhankelijk herkend op beeld uit 1928 en 6 juni 1939. Verlies is als samenlezing van de historische adreskaart en gemeentelijke schadekaart verantwoord. Kleine AI-opschriften zijn nadrukkelijk geen transcriptie; bij Nieuwehaven zijn BRANDKASTEN en KANTOORMEUBELEN in het origineel leesbaar, maar in de AI-versie vervormd.

Z12 toont Amicitia op 20/1486 en Bank Mees op Beursplein 10/1915. Hun eerdere ankers en breedtes zijn gecorrigeerd zonder hoogtewijziging. De schuine Vissteeggrens begrenst Mees; gedeelde zijgrenzen met Zuidblaak 18 en Huis Londen 137 begrenzen uitsluitend overstekken langs de bronlijn. Oude en nieuwe waarden, overlays en bronverantwoording staan bij de betreffende modelassets. Alle vijf gewijzigde modellen zijn opnieuw naar GLB en Blender geëxporteerd.

Controle: volledige meshdekking van 175 modellen, nul overlap met naburige modellen en achtergrond bij alle vijf gewijzigde modellen. Npm-controle: 12 tests geslaagd. Gerichte desktop-, mobiele galerie-, fullscreen- en Nu-3D-controles staan in artifacts/round14; onderzoeksbewijs in research/expansion-20261003/round14-nh. Dit is een lokale integratiestatus, geen publicatieclaim.

## Ronde 14 — Leuvehaven 209 lokaal geïntegreerd (3 oktober 2026)

Locatie 176 toont het hoekpand aan de Wijde Nieuwsteeg in de gedocumenteerde geveltijdlaag van 15 juni 1919. Het hele NARA-origineel is ongewijzigd behouden naast de geselecteerde AI-interpretatie van de fotozone. Signal Corps-herkomst en NARA Use Unrestricted zijn verantwoord zonder een CC-licentie te verzinnen. Mogelijke wijzigingen bij de polikliniek vanaf 1925, onbekende achterkap, benaderde hoogte en circa 8 meter plaatsingsonzekerheid blijven expliciet. Het verlies is een samenlezing van historische adreskaart en gemeentelijke schadekaart, geen individuele inslagclaim.

GLB/Blend geëxporteerd; exacte model- en achtergrondoverlap nul. npm: 176 locaties, 18 verhalen, 339 foto's, 314 paren, 12 tests geslaagd. Desktop, mobiel, lichtbak en Nu 3D gecontroleerd; live-model, mobiele galerie en desktoplichtbak visueel bekeken. Portable bron-, plaatsings-, hash- en geometriebewijs staat in site/landmarks/leuvehaven209. Nog niet door deze agent gecommit of gepubliceerd.

### Hotel Elim — ronde 14, lokaal gecontroleerd (3 oktober 2026)

Hotel Elim · Leger des Heils is toegevoegd als 177e locatie. De volledige originele foto SAR 2008-5160 (F.H. van Dijk, 1910–1925, CC0) is bytegelijk bewaard naast één AI-kleurinterpretatie, exacte prompt en beeldcontrole. Gevelletters zijn slechts voor de twee zekere hoofdregels gemodelleerd. Kleine AI-opschriften en gezichten zijn uitdrukkelijk interpretatief.

Plaatsing: Schiedamsedijk 43–47, perceel 2172 op Z10 (1938), met vier onafhankelijke blokankers en ±5 m marge. Organisatiebereik 43–51 is geen modelmaat. Verlies is een expliciete synthese van de individuele oorlogsverliesbron en primaire adres-/schadekaarten; geen individuele bominslagclaim. Hoogte, kaphoogte, voorbouwdiepte en kleuren zijn benaderingen. GLB en Blender zijn geëxporteerd. Het draagbare bronpakket en `mesh-qa.json` staan bij het item.

Controle: exact geprojecteerde modelgeometrie tegen alle 176 andere modellen: geen overlap; opgeschoonde achtergrond 986 polygonen: 0 m² overlap. `npm run check`: 177 locaties, 18 verhalen, 12 tests geslaagd. Gerichte desktop-/mobiele browsercontrole van Elim inclusief AI-viewer, Nu 3D en bronvelden slaagt zonder console-/netwerkfouten of overflow. Live model visueel bekeken. Cachekeys van ronde 14 behouden. Geen commit/push door deze subagent; publicatie nog door hoofdagent te verifiëren.

## Ronde 14 — openbaar geverifieerd, back-up bij 70

Vijf nieuwe locaties gepubliceerd: Pastorie Sint-Rosalia, Nieuwehaven 139, Zuidblaak/Beursplein 18, Leuvehaven 209 en Hotel Elim. Catalogus 177 locaties / 18 verhalen, 340 fotovermeldingen en 315 AI-paren. Release `112a60b529cd425d216ecd7151c2aba06a9a6894`; Pages 37103077442 en check 37103077433 geslaagd. 26 openbare bestanden bytegelijk, anonieme desktop/mobiele browsercontrole zonder fouten of overflow; hoofdtaak bekeek publieke mobiele galerie en Nu 3D. Bronnen, beeldbeperkingen en buurcorrecties: RONDE14-20261003.md en VERIFICATIE-RONDE14*.json.

70 toevoegingen bereikt: volledige Git-bundel geverifieerd, tag `rdam39-20261003-70-buildings` gepusht. SHA256 en omvang in BACKUP-70-20261003.json. Backup betreft Git-bestanden en volledige historie, niet losse ongecommitteerde research. Volgende backup bij 80. Ronde 15 is uitsluitend brononderzoek; geen nieuwe runtime.

### Gemeentelijke Vischhal — ronde15, lokale toevoeging (3 oktober2026)

178e locatie: Vischhal Bagijnenstraat, geopend5juli1932; vismarktfunctie gesloten1oktober1935, latere functie niet vastgesteld. Alleen het vrije interieurpaar is gepubliceerd: Gompers1934, SARXIV-88, explicietPDM1.0, origineel bytegelijk + geselecteerdeAIproef03/prompt/beeldcontrole. De Schaller-buitenfoto1932 is uitsluitend gelinkte vormreferentie, niet gepubliceerd of bewerkt. Juni1940foto1985-536 onderbouwt zichtbaar beschadigde hal na14mei.

Plaatsing op expliciet benoemd Z8-perceel2679: vier historische contourhoeken, onafhankelijk gecontroleerd tegen vier GEB-hoeken. Controleafwijking3,7–6,5m; absolute marge±8m, geen landmeetkundige claim. Model55,5×12,5m,9,6mhoog±2m, schematische achterzijde/raamritme/kleuren; kopgeveldeur en rooster naar buitenfoto. GEB niet meegemodelleerd.

GLB/Blender geëxporteerd. Exacte geometrie tegen177andere modellen: geen overlap;985achtergrondpolygonen:0m² intersectie. npmcheck178locaties/18verhalen/12tests geslaagd. Gerichte browserchecks desktop/mobiel, AIviewer, Nu3D en bronnen geslaagd zonder fouten/overflow. Model en mobieleviewer persoonlijk visueel bekeken. Draagbare mesh-/plaatsings-/hashrapporten bij het item. Screens en browser-check.log in research/expansion-20261003/round15-vischhal. Cachekeys behouden, geen commit/push door subagent.

### Parfumerie Henry Bats — ronde15, lokaal (3 oktober2026)

179e locatie, Noordblaak77/perceelO504. Het bestaande Heck-fotopaar1 wordt ongewijzigd gedeeld, met eigen Bats-aanwijzing en expliciete onzekerheid kleine winkelletters. PD-anon70 is een eigen beoordeling van de uitgegeven oude prentbriefkaart, geen SAR-licentie. Bron1939 dient alleen voor vorm/continuïteit; geen nieuwe AI. Exacte bestaande prompt is gekopieerd; hashcontrole bevestigt origineel ongewijzigd.

Compact voorhuis met twee hoofdassen en drie topopeningen; achterkap verlaagd onder de gevelbekroning. Voorbouw8m, front3,81m, hoogte17,5±3m, plaats±7m blijven benaderingen. Geen verzonnen winkelopschrift. Directe bronnen en verliesketen (kaart/beeld/tekst, geen individuele voltrefferclaim) bij item.

GLB/Blend gereed; exacte geometrie tegen178andere modellen:0overlap;985achtergrondpolygonen:0m². npmcheck12tests geslaagd. Gerichte desktop-/mobieleviewer/Nu3D-browserchecks zondererrors/failed/overflow. Livefront en mobieleviewer zelfbekeken. Bewijs in round15-extra2/browser-check.log en browser/; portable mesh-qa.json bijitem. Cachesbehouden, geencommitpush door subagent.

### Gemeentelijke Bank van Lening — ronde 15, lokaal (3 oktober 2026)

180e locatie: Lange Torenstraat 73, perceel K2405. Hoge bankvoorbouw en lage entreevleugel, gebaseerd op RCE20309941 uit 1939 en een oudere ongedateerde RCE-gevelreferentie. PBK-321 bevestigt adres en gebouwidentiteit. Het verlies is een expliciete synthese van de 1939-foto, ruïnefoto 2001-1298 en gemeentelijke schadekaart, geen afzonderlijke voltrefferclaim. Het gemeentelijke pandbedrijf en de verhoging vanaf 1843 hebben nu een eigen directe tekstbron; de Engelfriet-bron is via HTTP bereikbaar, HTTPS heeft een certificaatprobleem.

Plaatsmarge ±8 m; hoofdhoogte circa21±3 m en voorbouwdiepte8 m benaderd. Achterliggende percelen2406/2407 niet ingevuld. Kleuren zijn onbekend. RCE-origineel ongewijzigd, geselecteerde AI-proef02 met exacte prompt en aanvullende oorspronkelijke letteruitsnede. Beide onder CC BY-SA4.0. Kleine letters/gezichten generatief en rechter gevelband afgesneden; geen volledige transcriptie geclaimd.

GLB/Blend gereed. Exacte geometrie tegen179andere modellen: geen overlap;986achtergrondpolygonen:0m² intersectie. Desktop/mobiele foto-/AIviewer/Nu3D-browserchecks zonder fouten of overflow. npmcontrole stuitte alleen op HTTPS-only bronregex voor de aantoonbaar werkende HTTP-bron; hoofdtaak behandelt deze validatorgrens. Bewijs en screenshots: research/expansion-20261003/round15-leenbank/browser-check.log en browser/. Portable hashes, plaatsing en mesh-qa.json bij het item. Geen cachewijzigingen/commit/push door subagent.

Aanvulling bankcontrole: hoofdtaak heeft de tekstbronvalidator gericht verruimd tot absolute HTTP(S)-bronnen, met regressietest; foto-URLs blijven HTTPS. Definitieve npmcheck:180locaties/18verhalen,343fotovermeldingen/318AI-paren,13tests geslaagd. Geen bron-URL omgeschreven naar een kapot HTTPS-adres. Live bankvoorzijde ook gecontroleerd met achtergrondmassa’s uitgeschakeld zodat de lage entreevleugel volledig zichtbaar is; alleen een controlescreenshot, geen wijziging van de standaardweergave.


## Stadstimmerhuis Haringvliet 4 — lokaal gereed, 3 oktober 2026

Locatie 181 toegevoegd: F593-voorbouw, volledig vrij albumorigineel en geselecteerde AI-uitsnede. 180 overige modelmeshes en achtergrond zonder overlap; GLB/Blend klaar. 13 tests en gerichte desktop/mobiele/browsercontroles geslaagd. Portable bron- en QA-bestanden in site/landmarks/stadstimmerhuis-haringvliet4. Geen zelfstandige publicatie; release door hoofdtaak. Tevens ontbrekende top-level height:21 bij Bank van Lening hersteld op verzoek van hoofdtaak.

### Bronpakketcontrole ronde 15

De verouderde voorlopige statussen in de beeldcontroles van Vischhal en Bank van Lening zijn bijgewerkt naar de gecontroleerde lokale integratie. De bank verwijst nu naar de werkelijk meegeleverde geselecteerde prompt 02. Het Stadstimmerhuis heeft ook op catalogusniveau de reeds onderbouwde plaatsingsmarge van 7 meter; de gedeelde fotonotitie maakt expliciet dat alleen het origineel het gehele albumblad bevat. Geen geometrie of beeldinhoud gewijzigd. Nog geen publicatie van ronde 15.

## Ronde 15 — openbaar gecontroleerd, 75 toevoegingen

Vischhal Bagijnenstraat, Henry Bats Noordblaak 77, Bank van Lening, Stadstimmerhuis Haringvliet 4 en koffiebranderij IJsendijk zijn gepubliceerd. Totaal 182 locaties / 18 verhalen, 346 fotovermeldingen / 321 AI-paren. Release 50af6173ccde595b180f71a83698eec25727b4b9; Pages37107868858 en check37107868842 geslaagd. 21 openbare bestanden bytegelijk en anonieme desktop/mobiele controle geslaagd, inclusief beide IJsendijk-paren en geldige selectiecamera. Zie RONDE15-20261003.md en VERIFICATIE-RONDE15-20261003.json. Publicatieselectie circa719,60MiB, tijdelijke geometrie niet inbegrepen. Volgende volledige back-up bij80; vorige bij70 is onveranderd beschikbaar.

Ronde16 is brononderzoek: nieuwe albumbeelden van Van Veen (Schiekade O.Z.242) en Schaedtler (Boerensteiger), plaatsing/late continuïteit nog te verifiëren. Geen nieuwe runtime van ronde16. Menuvoorstel om Gebieden te vervangen door Ga naar een buurt is nog niet uitgevoerd.

### 3 oktober 2026 — ronde16 lokaal: Schaedtler
Pakhuis Schaedtler & Co (Houttuin35, N748) toegevoegd als lokale183e locatie. Primaire1897gevel/plattegrond en materiaalbeschrijving, albumfoto vóór juli1916, adres1939 en schadekaart gekoppeld. L-vorm via zelfstandige kaarthoeken, positie±8m, hoogtebenadering expliciet. Volledig albumorigineel ongewijzigd; AI04 is door de hoofdtaak geselecteerd als gelabelde interpretatie; uitsnede en fijn reliëf blijven onzeker. Bronpakket in `site/landmarks/schaedtler-houttuin35/BRONNEN.md`; research `research/expansion-20261003/round16-schaedtler`. Geen commit/push door deze onderzoeker.


### 2026-10-03 — ronde 16: woonhuis M.B. van Veen lokaal geïntegreerd

Item `woonhuis-van-veen` toegevoegd; catalogus 184. Primaire Möglefoto 1899 (PDM), ongewijzigd origineel naast gecontroleerde AI-interpretatie. Brongebonden dubbele topgevel en driezijdige erker. Onafhankelijke kaartfit op X2150/Schiekade O.Z. 208; afwijkend nummer 242 uit onbereikbare RJB-index expliciet onopgelost. Geveltijdlaag 1899/1916, continuïteitsbeeld 1925, geen exacte 1939-claim. Circa 7 m plaatsmarge en geschatte hoogte vermeld. GLB/Blend, achtergrondclip en exacte meshcontrole tegen 183 andere modellen: nul overlap. npm check 13 tests en gerichte browsercontrole desktop/mobiel geslaagd. Portable bewijs in `site/landmarks/woonhuis-van-veen/CONTROLE.md`; research/browserbewijs onder `research/expansion-20261003/round16-vanveen`. Nog niet door deze agent gecommit of gepubliceerd.
