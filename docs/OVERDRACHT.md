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
