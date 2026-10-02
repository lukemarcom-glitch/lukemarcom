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
