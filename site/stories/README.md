# Bijzondere verhalen · WOII

Eerste selectie, gecontroleerd op 24 september 2026. Deze categorie is een afzonderlijke verhalenlaag. De 47 gebouwen en plekken in `landmarks/catalog.json` en hun reconstructies blijven een eigen dataset. Verhalen leveren geen footprint op en worden niet door de 3D-modelgenerator verwerkt.

## Redactionele afspraken

- De datum van het verhaal staat los van de kaartondergrond van vóór mei 1940.
- Ieder verhaal bevat leesbare bronlinks, een toelichting op de bewijskracht en op de nauwkeurigheid van de locatie.
- Een gebiedsmarker duidt geen exacte cel, kelder, sokkel of plaats van overlijden aan.
- Historische moed en latere mythevorming worden afzonderlijk beschreven. Geen verzonnen dialogen, helpers, foto's of AI-reconstructies van gebeurtenissen.
- Teksten zijn eigen, korte samenvattingen, geen overgenomen artikelen. De museumcatalogus wordt onderscheiden van bezoekersreacties op die catalogus.
- Bij het Haagseveer is ook de represaille opgenomen; de bevrijding wordt niet losgemaakt van de slachtoffers die achterbleven.
- Onderduik tegen dwangarbeid in de Beurs wordt niet gepresenteerd als hetzelfde verhaal als hulp aan Joodse vervolgden. Die onderwerpen verdienen afzonderlijke, gedocumenteerde verhalen.

## Locatieverantwoording

Lokale projectie: oorsprong 4.485° O, 51.919° N; x = (lon − 4.485) × 111320 × cos(51.919°), y = (lat − 51.919) × 111320. De Y-as wordt in Three.js als −z weergegeven.

- **Beursgebouw Coolsingel:** gekoppeld aan het nieuwe gebouwmodel `beurs-coolsingel`, center [-290.206, 208.463], op historisch kaartblok M0319. De eerdere huidige adrespositie lag al in dit juiste complex; het ontbrekende model en de verwarrende naam zijn verholpen. De Oude Beurs aan de Blaak ligt circa 520 m verderop en is een ander gebouw. Precieze kelderpositie onbekend.
- **Haagseveer:** gecorrigeerd van de hedendaagse straatcentroid [-266.4, 489.5] naar het historische politiecomplex [-312, 525]. Kaart en foto uit 1944 ondersteunen het blok westelijk van de Delftsevaart, noordelijk van het Doelwater. De hoofdingang werd bij de verbouwing van 1993 naar het Doelwater verplaatst (RCE / Monumenten in Nederland); een huidig adres is dus geen historische toegang. Geen exact gereconstrueerde cel of deur.
- **Jan van Garsel:** rechtstreeks gekoppeld aan het noordelijke route-eindpunt van het bestaande model Oude Willemsbrug. Geen claim dat dit zijn exacte overlijdensplaats is; schuift niet naar de huidige Willemsbrug.
- **Zwarte Duivels:** rechtstreeks gekoppeld aan het Witte Huis-model. Herkenningspunt in het strijdgebied, niet een bewezen ontstaansplek van de bijnaam. Het Mariniersmuseum bevestigt gebruik van het gebouw in mei 1940.
- **Erasmus:** gecorrigeerd van het huidige straatmiddelpunt [117.05, 166.13] naar [143, 182], aan de oostzijde van het historische Grote Marktplantsoen. Benaderd vertrekpunt, geen ingemeten sokkel. **De schuilplaats lag elders**, in Museum Boymans. Het huidige beeld op het Grotekerkplein is geen plaatsingsbron voor dit verhaal.

Kaartbron voor de twee handmatig aangescherpte posities: [NL-RtSA_4001_1972-755-1](https://hdl.handle.net/21.12133/0ECE918126BF4C3FA46C52852F801492), kaart van de toestand vóór mei 1940. Niet verwarren met de uitgiftedatum van het kaartblad. De gebruikte afbeelding van 4096 × 3222 px heeft dezelfde vier georeferentiehoeken als `data/model.json`. Geen millimeterprecisie of kadasterkwaliteit geclaimd.

## Vaste historische ankers

`locations.js` koppelt verhalen aan het gebouwmodel of een historisch routepunt. Die positie wordt in zowel Toen als Nu gebruikt. Een verhaal met een kaartanker bevat een bronlink en toelichting. Elk paneel benoemt Toen, Nu en de betekenis van de marker. Voor toekomstige verhalen mogen moderne adressen en straatcentroïden alleen als zoekhulp dienen, niet zonder historische verificatie als definitieve positie.

De bron-URL's voor ieder verhaal staan volledig in `catalog.json` en zijn via de verhaalpanelen toegankelijk. De legende over de naam Zwarte Duivels is vergeleken met Kornaat & Poetiray (Militaire Spectator, 17 december 2015) en het interview met Sjak Draak in Gers!. Deze teksten spreken de inzet van de mariniers niet tegen, maar nuanceren de exclusieve heldenrol en de zekerheid over de naamgeving.

## Bediening

De categorieknoppen kiezen één set kaartmarkeringen. De stadsmodellen blijven staan als ruimtelijke context. Een verhaal kan naar het bijbehorende bestaande gebouwmodel verwijzen; die knop schakelt terug naar de gebouwencategorie. De bestaande botsingsdetectie, toetsenbordbediening, mobiele leesweergave en tijdperkschakelaar blijven van toepassing.


## Uitbreiding versie 27 · 24 september 2026

Vijftien verhalen: de oorspronkelijke vijf plus ziekenhuis, Diergaarde, Laurenskerk, synagoge Boompjes, Z5/TM51, Coolsingel-fusillade, Hofplein-fusillade, Aat Zegers, radio-ontvangst bij het stadhuis en de Luchtspoor-aanslag. Alle vijftien hebben een galerie met bron, maker, datum en licentie; totaal 17 beelden. Er zijn 13 verwijzingen naar herinneringsplekken of digitale gedenkverhalen. Alleen bronfoto’s, geen gegenereerde oorlogsscènes of portretten.

[Beeldrechten en wijzigingen](beeldrechten.md) en [machineleesbaar register](photo-rights.json). De 17 nieuwe bestanden samen zijn circa 4 MB. Bronbestanden en vastgelegd rechtenbewijs worden apart van de publicatie bewaard.

Nieuwe historische plaatsingen:

- Ziekenhuis, Diergaarde, Laurenskerk en Zegers: gekoppeld aan bestaande historische modellen; bij Zegers betekent de marker uitsluitend werkplek, niet onderduikplek.
- Stadhuisontvangst: [-432, 426], voorzijde van het historische gebouw. Geen exacte radiowagenpositie.
- Coolsingel-fusillade: [-460, 325], westzijde tegenover het historische postkantoor, vergeleken met de kaart vóór mei 1940. De overgebleven muur in 1945 is niet afzonderlijk ingemeten. De plaquette uit 1960 is geen historische plaatsingsbron.
- Hofplein-fusillade: [-475, 650], historische pleinomgeving, benaderd. De schuilkelderpositie is niet vastgesteld.
- Synagoge: [260, -350], terreinzone naast het Oost-Indisch Huis, tussen Boompjes en Scheepmakershaven volgens NIK, vergeleken met het historische kaartblad. Geen huidige adresgeocode en geen claim op een exact perceel.
- Marineoptreden: [470, -470], watergebied bij de oude bruggen; geen vaste scheepspositie.
- Luchtspoor-aanslag: [-263, 570], noordelijk spoortraject tegenover het historische politiecomplex volgens de specialistische politiegeschiedenis, vergeleken met de spoorbocht op de oude kaart. NTR bevestigt het langere traject, niet dit precieze punt. De aanslagpositie blijft benaderd. Foto en bestaand 3D-spoormodel tonen uitdrukkelijk een ander, zuidelijker deel van dezelfde lijn.

De gebeurtenissen van 20 februari (Coolsingel, tien slachtoffers) en 12 maart 1945 (Hofplein, twintig slachtoffers) zijn afzonderlijk verwerkt. De ontvangst op 7 mei is gebaseerd op het NBS-radiorecord, onderscheiden van de Canadese intocht op 8 mei.


## Uitbreiding versie 31 · 25 september 2026

18 verhalen en 26 beelden. Toegevoegd: Burgerweeshuis, Ceres en Maas en Rotte. De oorspronkelijke vijftien verhaalrecords en de kaartondergrond zijn ongewijzigd.

- Burgerweeshuis [473.44, 510.37]: centrum van het grote historische complex met twee binnenplaatsen, westzijde Goudschewagenstraat, tussen Goudschesingel en Breedestraat. Gecontroleerd aan museumverhaal en kaartpunt; geen exacte schuilkelder.
- Ceres [57, 821]: benaderde straatomgeving bij de oude huisnummers 109–111 op kaart 1938. Niet rechtstreeks bevestigd als fabriekspand in mei 1940. Daarom geen fabrieksvoetafdruk of gevelclaim; foto’s zijn duidelijk gelabelde straatcontext.
- Hermes [37.51, -368.94]: hoek Glashaven/Joodensteeg ten noorden van de Zuiderkerk. Kaart en gevelaanzicht ondersteunen de hoek; geen moderne adresgeocode gebruikt. Museumfoto’s tonen Maas en Rotte, niet de berging.

Alle drie vallen binnen de bestaande werkbrandgrens. Deze blijft een handmatig afgeleide werkgrens; geen nieuwe GIS-grens of extra kaart toegevoegd. Er zijn geen nieuwe gebouwmodellen of gereconstrueerde oorlogsscènes gemaakt.
