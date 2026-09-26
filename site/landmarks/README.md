# Historisch Rotterdam — onderzoeksreconstructies

21 september 2026. Eigen, vereenvoudigde reconstructies; geen originele historische 3D-bestanden. In de kaart aanklikbaar via markers, via de gebouwen of via de locatienavigatie. De achtergrondhoogteregelaar verandert deze modellen niet.

## Plan C
Vier overzichts-/gevel-/luchtbeelden opgeslagen met volledige bronmetadata, aangevuld met de eerdere foto onder de arcades. Hoofdbeeld is de volledige voorgevel op de prentbriefkaart uit 1910. Dezelfde compositie is met ingebouwde ImageGen bewerkt naar een hedendaagse fotografische uitstraling. Dat blijft een AI-interpretatie van een historische opname: vooral kleuren, mensen, opschriften en steendetails zijn geen bewijs. Zie PROMPT.txt. Origineel blijft ongewijzigd. Voorkeur voor volgende gebouwen: eerst het volledige gebouw in beeld, sfeer/details als aanvulling.

Plaats en contour zijn handmatig afgelezen in Oud en Nieuw Rotterdam (1955, toestand voor mei 1940), op de bestaande lokale metertransformatie. Bronpixels in onderzoek/build_catalog.py. Eenvoudige binnenhof, open arcades, twee bovenverdiepingen, mansardedaken en hoekaccenten. Goot 16 m, dak circa 20 m, hoekaccenten circa 25 m: visuele schattingen. Binnenhofbreedte, bay-aantallen en ornamenten vereenvoudigd, geen opmeting. De hoofdvorm moet nog worden getoetst aan een echte bouwplattegrond/geveltekening.

Foto's en rechten per object: plan-c/bronnen.json. Archiefkaart: https://hdl.handle.net/21.12133/0ECE918126BF4C3FA46C52852F801492 . Aanvullende gevonden terreinkaart uit 1884 (nog niet als geometriebasis toegepast): https://commons.wikimedia.org/wiki/File:Kaart_van_het_bouwterrein_bij_de_Kolk,_Plan_C_en_de_Oude_Haven_1884.jpg

## Oude Bijenkorf
Ook een AI-kleurversie van het volledige overzicht is beschikbaar: bijenkorf/overzicht-ai.png, met de exacte ingebouwde ImageGen-prompt in bijenkorf/PROMPT.txt. Voor Plan C: plan-c/overzicht-ai.png en plan-c/PROMPT.txt.

Vijf archiefbeelden: overzicht, voorgevel, linker zijgevel, achtergevel en luchtfoto 1938. Overzicht en luchtfoto tonen vrijwel dezelfde kijkrichting; ze zijn geen onafhankelijke extra gevelwaarneming. Originelen, maker, datering, archiefverwijzing en Commons-rechtenlabel staan in bijenkorf/bronnen.json en de individuele metadata.

Dudoks volledige vooroorlogse gebouw, niet alleen het naoorlogse restant. Geel metselwerk, glasstroken, terrassen en lichttoren zijn als eenvoudige volumes uitgewerkt. Historische bouwreportage De Bijenkorf te Rotterdam, Bouw en Techniek p.67, gereproduceerd op PDF-pagina 6 van onderzoek/bouw-en-techniek.pdf: 120 m lang, 45 m breed, 37 m hoog, torentop 66+. Bron: https://backoffice.biblio.ugent.be/download/8653779/8653780 . Deze maten zijn globaal: de handmatig overgenomen kaartcontour meet circa 43 x 108 m, de dichte hoofdromp is 30 m, dakopbouwen lopen hoger. Dit verschil is nog niet opgelost; het model is dus niet exact opgemeten. Gevelritme, positie van de toren en setbacks zijn geïnterpreteerd uit foto's.

Materiaalbeschrijving en historische context: https://www.cultureelerfgoeddebijenkorf.nl/architectuur/dudokrotterdam en https://dudok.org/alle-werken/de-bijenkorf-rotterdam-1928-1930/ . Volgende bronvraag aan Nieuwe Instituut: originele situatietekening, plattegronden, doorsneden en gevels in Dudokarchief, met schaal en hergebruikvoorwaarden. Er is niets verstuurd.

## Lichtgewicht bestanden
Procedurale 64×64 materiaaltextures, geen zware fototextures op geometrie. Plan C: 8.500 driehoeken/5 materialen. Bijenkorf: 6.948 driehoeken/3 materialen. Meshes per materiaal samengevoegd. GLB en Blender beschikbaar per gebouw; centrum van ieder exportmodel is lokale oorsprong, afmetingen in meters. In de kaart plaatst catalog.json ze in lokale stadscoördinaten.

Reproduceren: node landmarks/export.mjs; Blender --background --python landmarks/export_blender.py. Viewer gebruikt models.js direct. De algemene oudere v1-stadsexport bevat deze twee latere toevoegingen nog niet; losse gebouwexports zijn actueel. Onderzoeksmateriaal is lokaal verzameld; sommige zeer oude foto's wijken in datum af van doeljaar 1939.


## Uitbreiding: vijf herkenningspunten en fotoparen

De galerij toont per foto het origineel, direct gevolgd door de AI-bewerking. Twintig fotoparen: vijf voor Plan C, vijf voor de Bijenkorf en twee per nieuw gebouw. Foto’s hebben hun eigen opnamedatum; het tijdperk van de foto is niet automatisch 1939. De historische ziekenhuisphotochrom is al ingekleurd. AI-werk is gemaakt met ingebouwde imagegen; exacte prompts staan per gebouw bij de bestanden. WebP-bestanden zijn lichte weergavekopieën; PNG-masters zijn lokaal behouden.

- Passage: smalle overdekte winkelgalerij met twee winkel-/woningstroken en glazen dak. Lengte volgens Museum Rotterdam circa100m, binnenbreedte6–8m, kap20m. Modelbuitencontour32×92m benadert de kaart; hoofdgevel circa25m. Bron https://museumrotterdam.nl/verhalen/toerisme-in-rotterdam/de-passage/ . De Museum-scan van interieurkaart4844 is visueel vergeleken met dezelfde Commons-prentbriefkaart en als anoniem publiekdomeinwerk geregistreerd.
- Oude Beurs: twee lagen, drie paviljoens, hoge glazen kap, kloktoren. Modelcontour circa51×55m, kroonlijst14m, toren31m: benaderingen. https://museumrotterdam.nl/verhalen/toerisme-in-rotterdam/de-oude-beurs-van-rotterdam/ . Het museum heeft een historisch houten gevelmodel; dat is nog niet ingemeten of gedigitaliseerd voor dit model.
- Groote Schouwburg: voorgevel met drie centrale bogen, pilasters, fronton en luifel; hoger toneelvolume achteraan. Model45×75m, hoogste dak30m: schattingen. Beeldhouwwerk wordt uitsluitend als eenvoudige dakaccenten gesuggereerd. https://acc.stadsarchief.rotterdam.nl/architect . Foto’s1895 en1900, geen opnamen1939.
- Coolsingelziekenhuis: hoofdgevel82m breed, rondboogvensters, drie vooruitstekende delen, vereenvoudigde achtervleugels. Achterbouw en binnenhoven zijn schematisch; niet het complete complex van alle tijdvakken. https://stadsarchief.rotterdam.nl/op-de-coolsingel . De fotochrom1890–1905 toont de nog open Coolvest.
- Delftse Poort: circa18×13×19m; de centrale doorgang is werkelijk open. Zuilen/frontons vereenvoudigd, sculpturen niet nagemaakt. De intacte poort hoort vóór demontage vanaf februari1939. Plaats uit1938kaartinzet via stadhuis-hoeken opde1955kaart gezet, onzekerheidsmargecirca30m/10graden; exacte data in delftse-poort/locatie-voor1939.json. https://wederopbouwrotterdam.nl/artikelen/hofplein . De huidige monumentpositie is niet als oude standplaats gebruikt.

## Techniek en beperkingen van deze uitbreiding

Alle nieuwe landmarkmaterialen gebruiken64×64textures. Meshes zijn per materiaal samengevoegd; geen zware gevelafbeeldingen op de 3D-objecten. Passage3749driehoeken, OudeBeurs5491, Schouwburg4156, ziekenhuis9588, poort1220. LosseGLB’s zijn geëxporteerd met dezelfde geometrie alsdekaart. catalog.json bevat meters/hoeken/bronposities. historic-models.js bevat de modelleringskeuzes.

De achtergrondmassa’s worden geometrisch uitgesneden rond de afzonderlijke gebouwen, zodat globale kaartvolumes de gevels niet doorsnijden. data/model-landmarks.json is uitsluitend de afgeleide weergave; data/model.json bewaart de oorspronkelijke kaartcontouren. De Oude Beurs heeft daarnaast een handmatig gedigitaliseerd uitsluitingsvlak. clip_background.py reproduceert de uitsnijding.

## Bron- en AI-rechten

Bronverwijzing, maker, licentie en datering staan per foto in catalog.json en de gebouwspecifieke bronbestanden. RCE-beelden en hun AI-afgeleiden bij Oude Beurs en Delftse Poort: CC BY-SA4.0, met maker/RCE-attributie. https://creativecommons.org/licenses/by-sa/4.0/ . Overige gebruikte beelden zijn volgens hun Commons-bron publiek domein of CC0. Auteursnamen/datums uit metadata van digitale reproducties zijn niet automatisch oorspronkelijke fotodatums; bij Dudokstraatfoto’s2010/2017 zijn bijvoorbeeld digitaliseringsdatums, geen historische opnamejaren.

AI-beelden zijn geen fotografisch bewijs: kleuren, mensen, opschriften en fijne ornamenten kunnen afwijken. Bij de nieuwe Bijenkorf-luchtfoto is bijvoorbeeld een gevelopschrift door AI gewijzigd. Gebruik voor maatvoering en historische details altijd het zichtbare origineel. Het Nieuwe Instituut is nog niet benaderd; originele plattegronden/doorsneden blijven gewenst voor validatie.


## Navigatie- en locatiecontrole, 21 september 2026
Alle gebouwknoppen komen rechtstreeks uit dezelfde catalogus als de 3D-modellen en markers. Hofplein en Oude Haven zijn gebieden, geen afzonderlijke gebouwmodellen; het menu vermeldt dit nu expliciet. Een gebouwselectie sluit de gebiedstoelichting en brengt het model in beeld.

## Laurenskerk
Toegevoegd als achtste proefmodel. Positie en richting gecontroleerd met de bestaande OSM-kerkcontour (way 54085821); lokale modelkern rond [30,284], lengteas circa 16 graden noord van oost. Kerkdelen en ornamenten zijn vereenvoudigd en moeten nog aan oorspronkelijke bouwtekeningen worden getoetst. De hoofdtoren heeft een hoogte van ongeveer 64 meter. De houten spits uit 1621 verdween in 1645 en hoort niet bij 1939. Het vooroorlogse vieringtorentje op het kerkdak is wel toegevoegd, op basis van RCE-foto 20191391.

Bronnen: https://laurenskerk.nl/historie/ ; https://www.nicodebont.nl/projecten/laurenstoren-rotterdam ; https://commons.wikimedia.org/wiki/File:Vieringtorentje_voor_1940_-_Rotterdam_-_20191391_-_RCE.jpg . De schone baksteen-/natuursteenkleuren en grijze daken zijn materiaalinterpretaties, geen vastgestelde tinten of vervuilingsgraad van 1939. Er zijn voor deze toevoeging geen AI-foto's gegenereerd. Foto RCE 20191498: C. Hoogendijk; foto RCE 20191391: fotograaf onbekend. Beide via RCE/Wikimedia Commons onder CC BY-SA 4.0, ongewijzigd.


## Kolk & Open Rijstuin — eerste straatproef

Gebogen gevelrij van circa 147 meter, 18 benaderde huizen, een smalle kade, water en drie indicatieve binnenvaartschepen. De ligging is gedigitaliseerd uit dezelfde historische kaart als de achtergrond. De huisbreedten, hoogten, kozijnen, dakdetails, achtergevels en scheepsposities zijn interpretaties van meerdere archiefgezichten en niet per adres ingemeten. Het model is geen pandenregister. Het Luchtspoor is op de foto’s zichtbaar maar is niet inbegrepen in deze eerste straatproef.

De vijf oorspronkelijke foto's blijven ongewijzigd beschikbaar naast afzonderlijke AI-kleurbewerkingen. Materiaalkleuren zijn plausibele schattingen; zwart-witbeelden leggen geen exacte verfkleuren vast. De AI-bewerkingen zijn geen nieuw ontdekte historische kleurenfoto's en kunnen details wijzigen. Bronnen, archieflinks, makers, rechten en de gebruikte prompts staan in `kolk-open-rijstuin/manifest.json` en bij ieder fotopaar.

Het lichte model gebruikt samengevoegde geometrie en gedeelde materiaaltexturen van 64 × 64 pixels. Het is een afzonderlijke download; de oudere volledige stadsexport is niet opnieuw opgebouwd.


## Hoogstraat — winkelomgeving bij Korte Hoogstraat

Eerste straatproef van circa 90 meter rond de westelijke kruising. HEMA is gemodelleerd met de horizontale gevelbanden uit de foto van 1938; de galerij bewaart daarnaast een oudere geveltoestand uit 1930. C&A heeft een vereenvoudigde baksteen/natuursteen-gevel, kap en hoektoren. De circa 28 meter nok en 35 meter toren zijn ontleend aan de gebouwbeschrijving op Wikipedia, die historische kranten citeert. De kranten zelf waren niet rechtstreeks toegankelijk tijdens dit onderzoek. Exacte footprint, perceelgrenzen, achtergevels en buurpanden zijn benaderd. De foto vanaf het spoorwegviaduct toont een ander deel van de Hoogstraat en is niet als bewijs voor de westelijke hoek gebruikt.

Kleuren: C&A's rode baksteen, natuursteen/zandsteenbanden en granieten winkelpui zijn beschreven materialen, geen gemeten kleurwaarden. HEMA's lichte banden, donkere puien en pannendak zijn in zwart-wit herkenbaar; hun exacte kleuren zijn niet vastgesteld. De vijf AI-bewerkingen blijven visuele interpretaties naast ongewijzigde originelen. Archiefdateringen, auteurs, rechten en prompts staan in `hoogstraat/manifest.json`.


## Luchtspoor — Binnenrotte tot station Beurs

Eerste traject van circa 560 meter, benaderd vanaf de kaart NL-RtSA_4001_1972-755-1: lokale centrumlijn (27,490) tot (320,15). De circa 7 meter spoorhoogte, steunafstand, perronlengte en kapmaten zijn fotografische schattingen, niet ontleend aan een opmeting. De boogvakwerkbrug bij Middensteiger en de kap aan de zuidkant van de Beursperrons volgen de hoofdvormen van foto's. Perrons, kolommen, verbindingen en dek zijn bewust vereenvoudigd. Exacte wijzigingen tussen de fotodatums en 1939 zijn niet volledig onderzocht; de opname uit 1934 toont werkzaamheden die niet als permanente situatie zijn gemodelleerd. Het model eindigt bij de Blaak: de aansluitende bruggen richting Maas zijn nog niet toegevoegd.

De vijf foto's worden als origineel met afzonderlijke AI-kleurversie getoond. Datums en rechten staan per beeld in `luchtspoor/manifest.json`. Verfkleuren zijn niet bewezen; het grijsgroene metaal en de steenmaterialen zijn voorlopige interpretaties. Het 3D-model bevat circa 23.000 driehoeken en zeven gedeelde 64px materiaaltexturen.

Vier fotopunten verwijzen naar afgebeelde delen van het spoor (Binnenrotte, Middensteiger, Kolk en Beurs), niet naar exact gemeten cameraposities. Op stadsniveau wordt één overzichtsmarker getoond; dichterbij verschijnen de vier fotopunten. Elk punt begint bij zijn eigen afbeelding in dezelfde galerij. De oorspronkelijke volledige stadsexport blijft ongewijzigd; het spoor is afzonderlijk als GLB beschikbaar.


## Meent: Minervahuis I en Rosaliakerk (21 september 2026)

Twee aangrenzende exterieurstudies voor de situatie van 1939. Minervahuis II en III zijn geen vooroorlogse bouwfasen en worden niet in het historische model opgenomen.

- **Minervahuis I**: afgeronde hoek Meent/Rodezand, horizontale raamstroken, lagere Rodezandvleugel en terugliggende bovenste bouwlaag. Schaalkader uit de reeds aanwezige 3DBAG LoD1.3-data, pand `0599100000700124` (BAG-bouwjaar 1937): front circa24m, hoogtedelen14.47m/20.82m/24.67m. Die huidige hoogten zijn referenties, geen gemeten hoogten van1939. De gevels zijn vergeleken met1938/1939foto’s. Moderne details en naoorlogse uitbouwen zijn niet automatisch overgenomen.
- **Rosaliakerk**: kaartligging circa36×17m, gootcirca15m/nokcirca24m als interpretatie. Hoog dak uit1931foto, vernieuwde straatgevel van P.G.Buskens (1935) naar foto1937. Interieur alleen via foto’s, geen inwendig3D-model. Onzichtbare gevels, dakdetails en beeldhouwwerk sterk vereenvoudigd. Oudere interieurfoto’s zijn geen bewijs voor de precieze toestand na de renovatie van1935.
- **Kleuren**: gedocumenteerde materialen onderscheiden van tintkeuze. Minerva baksteen op betonskelet; huidige bruine steen als aanvullend referentiebeeld, geen bewezen oorspronkelijke kleurstaat. Kerkmateriaal en neutrale interieurkleuren blijven interpretatief. Zwart-witbeelden bewijzen geen specifieke RAL-kleur.
- **Bronnen**: [Platform Wederopbouw](https://wederopbouwrotterdam.nl/artikelen/minervahuis), [beeldcollectie Minervahuis](https://minervahuis.nl/gebouwHisV40.html), [Johannesparochie](https://www.johannesparochie.nl/onze-parochie/franciscus-en-clara/franciscus-clara-geschiedenis), en de per foto vermelde archiefrecords.
- **3DBAG-bronvermelding**: © TU Delft 3D Geoinformation / 3DGI, [CC BY4.0](https://docs.3dbag.nl/en/copyright/). Contouren en hoogten verwerkt in een vereenvoudigde historische interpretatie; zie ook modern/README.md.

Beide modellen gebruiken materiaalbatches en kleine64pxtexturen. De generieke bouwmassa’s zijn op deze locaties uitgesneden; oorspronkelijke broncontouren blijven bewaard. AI-beelden behouden hun eigen datum en worden steeds direct naast het origineel aangeboden.


## Automatisch opschonen bij plaatsing

`node landmarks/export.mjs` genereert de modellen en voert daarna automatisch `clip_background.py` uit. Rond iedere cataloguscontour en aanvullende `exclusionPolygon` blijft standaard 4 meter vrij van schematische massa’s. Een bestemming kan dit met `backgroundClearance` aanpassen. Van aangesneden achtergrondblokken worden smalle uitlopers (minder dan circa 4 meter breed) en losse resten onder 30 m² verwijderd. Niet geraakte blokken blijven gelijk. Deze stap begint altijd bij de oorspronkelijke `data/model.json`, zodat herhaald uitvoeren geen verdere erosie geeft. Publiceer de opnieuw gemaakte `data/model-landmarks.json` samen met de catalogus en modellen.

## Sint-Lucia en Tivoli (toegevoegd september 2026)

- **Sint-Luciacomplex**: P.G. Buskens, geopend 1920 aan de Aert van Nesstraat, oorlog overleefd en gesloopt in 1972. De exterieurstudie gebruikt de monumentale ingang, bakstenen vleugels, binnenplaats en kapel als herkenningspunten. Niet zichtbare aansluitingen blijven schematisch. Werkmaat circa 42 × 58 m, hoogste deel circa 26 m; geen archiefopmeting. Plaatsing met historische kaart en de locatie van Rotterdam Building (BAG 0599100000700837), niet met een ingemeten historische perceelsgrens.
- **Tivoli Schouwburg**: Coolsingel 25, bij het huidige Stadhuisplein. De gevel uit de jaren dertig is uitgangspunt, niet de oude gevel met top uit de vroege foto's. Café-restaurant en theater vormen samen een benaderd bouwvolume van circa 36 × 43 m. Dakvormen zijn vereenvoudigd. De zaalopname van 1890 toont een eerdere toestand: in 1926 volgde een ingrijpende verbouwing.
- De TheaterEncyclopedie beschrijft de vroege Tivoli-zaal met lichtblauwe stoffering, gouden ornamenten en een koperen gaskroon. Exacte tinten en de toestand in 1939 zijn daarmee niet vastgesteld. Exterieurkleuren en de kleuren van Sint-Lucia zijn materiaalinterpretaties van zwart-witbeelden.
- AI-kleurbewerkingen behouden het globale beeld maar kunnen gezichten, letters en ornamenten invullen. De originele foto's blijven de bron voor historische uitspraken; AI-beelden zijn geen bewijs voor vorm of kleur.
- Kapel- en binnenplaatskaarten van Sint-Lucia zijn gevonden bij Foto Voet. De expliciet met kopieerverbod gemarkeerde scans en hun proefbewerkingen zijn niet in de publieke bestanden opgenomen; het informatiepaneel verwijst naar de bron.
- Het exportproces ruimt ook bij deze modellen automatisch de overlappende achtergrondmassa's en smalle reststroken op. Broncontouren in model.json blijven intact.

Bronnen: [Sint-Lucia / Platform Wederopbouw](https://wederopbouwrotterdam.nl/artikelen/garage-ben-maltha-kweekschool-sint-lucia/), [Buskens / BONAS](https://www.bonas.nl/archiwijzer/gegevens.php?inr=0146.00000), [Tivoli / TheaterEncyclopedie](https://theaterencyclopedie.nl/wiki/Tivoli_Schouwburg,_Rotterdam), [Coolsingel-foto's](https://amulders.nl/2025/05/07/coolsingel/), [Margry-archief, kapeltribunes 1922–1923](https://kdc-opac.hosting.ru.nl/lijsten/archieven/pdf/MGRY.pdf).

## Vijf aanvullingen, 24 september 2026

Witte Huis, Schielandshuis, Het Hang & de Steigers, station Hofplein met café Loos en Marinierskazerne Oostplein. Iedere plek heeft drie ongewijzigde historische beelden met een afzonderlijke AI-kleurinterpretatie (vijftien paren), bronvermelding, verhaal en een relevante Wikipedia-link. Voor Het Hang is die link de algemene geschiedenis van Rotterdam; er is geen zelfstandige buurtpagina geverifieerd.

- Witte Huis: vrijwel vierkant grondvlak circa19×20m, hoogte43m. Plaatsingsreferentie3DBAG pand0599100000690521; witte verblendsteen, natuursteen en leien dak volgens RCE334003. De roodbruine daken op twee fotobewerkingen zijn historische kleurinterpretaties, geen bewijs. Dakreclames en sculpturen niet nauwkeurig nagebouwd.
- Schielandshuis: circa26×25m/24m op basis van3DBAG pand0599100000702368 en historische gevelbeelden. De BAG-bouwjaaraanduiding1941 is niet het historische bouwjaar. Het model heeft de vooroorlogse grijze pleisterafwerking, niet de huidige rode baksteen. Portiek, fronton, pilasters en trappen vereenvoudigd. Foto’s1920 en1935–1940.
- Hang/Steigers: circa104m straatproef met noordelijke kade en zuidelijke achtergevels aan het water. Centrum en richting uit historische kaart; uniforme werkbreedtes, gevelritmes, daken en brug zijn indicatief. Foto’s1884–1905 tonen het oudere buurtkarakter, niet een bewezen pand-voor-pandstand van1939.
- Hofplein/Loos: halfronde witte stationsgevel, boogvensters, caféluifel, kap en poortpaviljoens. Geometrie circa48×40m en dakaccenten28m zijn visuele schattingen; de oorspronkelijke plattegrond is een vervolgbron. Het emplacement is niet volledig gemodelleerd. Plaatsing op historische kaart rond lokale[-405,769].
- Marinierskazerne: vijfassige voorgevel met fronton, stenen poort, drie bouwlagen en schilddak. Werkmaat26×29m/21m. Plaatsing bij rasterpixel2741,1129 van de4096px-kaart, gecontroleerd met NIMH-luchtfoto1938–1939. Vernietigd door brand op12mei1940, niet pas14mei. Model toont het hoofdgebouw, niet het volledige arsenaalcomplex.

Alle vijf centra vallen binnen de bestaande voorlopige werkgrens. Oorspronkelijke kaartdata blijven behouden. De automatische uitsnijding beschermt alle nieuwe gebouwen en het straatfragment tegen overlappende achtergrondmassa’s. 3D-contouren en historische kaartgeoreferentie blijven benaderingen; huidige3DBAG-contouren en oude kaart kunnen lokaal verschuiven. Klein beeldhouwwerk, verborgen gevels en historische verfkleuren zijn niet definitief vastgesteld.

De Schielandshuis-RCE-foto’s en afgeleiden zijn CC BY-SA4.0; overige rechten staan per foto in catalogus/manifest. AI-beelden zijn geen bron voor maatvoering of historische details. De losseGLB’s bevatten dezelfde geometrie als de kaart. `export_blender.py -- <id...>` ondersteunt selectieve export van gewijzigde gebouwen.


## Tweede uitbreiding van vijf gebouwen, 24 september 2026

Stadhuis, Hoofdpostkantoor, Molen De Noord, Dancing Pschorr en Zuiderkerk. De Oosterkerk is bij de broncontrole afgevallen: zij werd al vanaf 1933 afgebroken en hoort niet in een kaart van1939.

- Stadhuis: hoofdmaat86×106m en toren71,5m volgens RCE513763; plaatsing via BAG0599100000701897. Vier buitenvleugels, binnenhof, centrale hal, klokkentoren en hoekpaviljoens; ornamenten vereenvoudigd. Voorgevels zandsteen, binnengevels baksteen, leien dak en koperen torenbekroning.
- Hoofdpostkantoor: circa70×85m via BAG0599100000767596. Vijftien gevelassen, drie entreebogen, hoofdvleugels, centrale haloverkapping en open achterhof. Kalksteen, graniet, baksteen en rode leipannen volgens RCE513764. Hoogten en vooroorlogse dakopzet blijven benaderingen; de officiële beschrijving vermeldt latere kapverbouwingen.
- De Noord: centrum afgelezen bij pixel2733.5,1024 van de4096px-historische kaart; lokale coördinaten832.74,491.5. Ronde stenen romp, stelling en vier statische wieken. Circa30m tot kap en42m tot hoogste wiek zijn geschat. Geen exacte windrichting of kleurmeting.
- Pschorr: oostzijde Coolsingel nabij Hofplein, voorgevel naar het westen; gecontroleerd aan de overzichtsfoto met stadhuis op de achtergrond. Benaderd centrum[-415,513],40×28m,hoogte20m. Model volgt de lage centrale gevel en zonweringen uit de jaren dertig; de verbouwing1938–1939 is niet exact gereconstrueerd.
- Zuiderkerk: centrum uit kaartpixel1864,1953, lokale[12.03,-397.67], consistent met de gepubliceerde locatie aan de Glashaven. Achthoek, vier kapellen, tentdak en centrale spits. Circa35×35m/51m zijn schaal- en fotoschattingen. De veel oudere stereofoto toont de nog open Glashaven en wordt niet als1939-beeld gepresenteerd.

Het script clip_background.py beschermt automatisch de catalogusvoetafdrukken; bij het stadhuis6m rand vanwege de toegangstrap. Exacte hoogten, verborgen gevels en ornamenten vragen bouwtekeningen. Originele foto's blijven de historische bron; AI-kleurbewerkingen kunnen kleine details veranderen en zijn geen authentieke kleurenopnamen.
