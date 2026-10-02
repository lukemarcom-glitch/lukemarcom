# Café De Scheepvaart — Wijnstraat 57, hoek Vissteeg

Onderzocht 2 oktober 2026. Geen runtime/model/AI gewijzigd. Geen dubbel gevonden in huidige catalogus (139 items bij aanvang). Kansrijke gewone-panden-kandidaat, met één uitstekende vrije gevel-/zijgevelphoto. Individueel verlies is expliciet in gebouwgericht modern historisch onderzoek; onafhankelijke primaire verliesidentificatie nog niet afgerond. Niet als volledig bouwklaar presenteren.

## Vrij origineel

`wijnstraat20192640.jpg`, 2122 × 2898, volledige voorgevel en zichtbare zijgevel. C. Hoogendijk / Rijksdienst voor het Cultureel Erfgoed, beeldnummer 20192640. **CC BY-SA 4.0**; naam, bron, licentie en wijzigingen vermelden; afgeleide AI-variant dezelfde licentie vermelden. Metadata/Wikitext naast foto bewaard.

https://commons.wikimedia.org/wiki/File:Voor-_en_zijgevel_-_Rotterdam_-_20192640_-_RCE.jpg

Foto daadwerkelijk bekeken. Herkenbaar hoekpand met grote glazen onderpui, twee bovenverdiepingen, smalle halsgevel, driehoekig fronton, bloemguirlandes en rond bovenlicht. Opschrift H. OLMAN / CAFÉ DE SCHEEPVAART. Datering Commons circa 1910–1920 conflicteert met exploitantenonderzoek dat Olman in 1930–31 plaatst. Toon voorlopig 'vóór 1940; vermoedelijk circa 1930–1931' met dateringsonzekerheid. Geen exact 1939 opschrift claimen.

## Historie en verlies

Guus Vreeburg, Puntkomma, mei 2024, specifiek over dit pand en de caféhouders:
https://www.puntkomma.org/artikelen/bertha-mientjes

Intro en afzonderlijke paragraaf 'Wijnstraat 57: 14 mei 1940' behandelen vernietiging en verlies van café/woonhuis in mei 1940. Dit is gebouwgericht secundair onderzoek, niet een primaire oorlogsregistratie. De auteur verwijst ook naar een bouwplan uit 1892 in SAR (wijziging gietijzeren winkelpui, eigendom weduwe Dicke), maar geeft geen inventarisnummer. Daarom nog geen zelfstandig geverifieerd planbewijs. Persoonsbiografie bevat expliciete vermoedens; die niet overnemen als feiten.

Korte ondersteunende oproep van dezelfde onderzoeker (dus geen onafhankelijke bevestiging):
https://www.dehavenloods.nl/nieuws/algemeen/46616/familieleden-van-bertha-castelijns-mientjes-gezocht-voor-onde

Primair gebiedsverliesbeeld met SAR-caption 14 mei 1940:
https://hdl.handle.net/21.12133/A95578B52C2545C0A9F2510487A01A04
https://commons.wikimedia.org/wiki/File:Zicht_op_de_getroffen_Wijnhaven_met_de_Grote_Wijnbrug_en_Regentessebrug_1940.jpg
Nog niet ruimtelijk als specifiek caféverlies getoetst. Niet doen alsof een algemene ruïnecaption het individuele pand reeds bewijst.

## Primaire architectuurbron

Voorloopige monumentenlijst Zuid-Holland (1915), Rotterdam, p.335 B.5, noemt Wijnstraat 57: laat-zeventiende-eeuwse topgevel met driehoekig fronton en bloemguirlandes op de zijstukken.
https://www.dbnl.org/tekst/_voo016voor12_01/_voo016voor12_01_0134.php
Vreeburg dateert circa 1665, de monumentenlijst XVII d. Bij voorkeur 'zeventiende-eeuws', niet een exact onbewezen bouwjaar.

## Primaire plaatsbron

SAR 4080, XXV-779, tekening Johan Briedé, 1911. Beschrijft expliciet het huis Wijnstraat 57 aan de noordzijde, op de **oosthoek van de Vissteeg**. Direct record:
https://www.archieven.nl/nl/zoeken?mivast=0&mizig=299&miadt=184&miview=ldt&micode=4080&minr=39812720&miaet=14
Lokaal record HTML en tekst bewaard. Briedé overleden 1980; geen vrije licentie, Downloadbaar Nee. Alleen identificatie-/vormreferentie, niet herpubliceren of als AI-bron gebruiken.

1938-huisnummerkaart SAR 40110-Z12 ligt reeds in `../round6-b/house-map-Z12.jpg` (6869×4522). Uitsnede `Z12-wijnstraat57-context.jpg` is bronpixels (3950,2090)–(4470,2510), 2× weergegeven. Hoek 57 ligt zuidelijk aan het smalle perceel **104**, ten oosten van de Vissteeg (perceel 1928) tegenover grote bankkavel1915. De zichtbare kaartnummering 57 naast hoek en 55 aan buur bevestigt foto/adres-combinatie. Nog geen doelkaarttransformatie of metrische footprint, dus nog geen runtimecoördinaten. Het huidige Wijnstraat57 niet geocoderen; de historische straat is door latere infrastructuur sterk veranderd.

## Materiaal en vervolg

Geen betrouwbare kleurbron gevonden. Verheul-query leverde uitsluitend Wijnstraat51 in Dordrecht: niet gebruiken. Zwartwit toont lichte bovenmuur/ornamenten en donkere onderpui, maar bewijst geen kleur. AI moet interpretatief blijven. Onderzoeker schat bijna5m front en misschien10m zijgevel; dat is een schatting, te toetsen op kadastrale kaart. Foto is de geometrische hoofdbron. Eerst individuele ruïnevergelijking/aanvullende primaire verliesbron en doelkaartplaatsing, dan model/AI.

## Bouwconcept, 2 oktober

Parent heeft directe individuele verliesbron aanvaard voor conceptbouw; een primaire oorlogsregistratie is geen extra harde blokkade. `build-draft.py` schrijft `modelSpec-draft.json`, `placement-draft.json`, `placement-overlay.png`; `render.mjs` en `render.py` leveren `cafe-preview.png`. Geen runtime. Bronkaartdetail104 apart bewaard. Breedte5.3m/diepte9.7m/hoogte15.75m zijn benaderingen. De grove doelkaart heeft afwijkende interne lijnen ten opzichte van1938perceel104; front op juiste hoek, achtercontour nog controleren wegens schuine straat-/blokhoek. De voorlopige rechthoek kan achter iets de Vissteeg in steken en moet vóór runtime geometrisch passend gemaakt worden. Kleuren zijn interpretatie. Finale bouwer moet ook vierdelige oculus (standaardhelper maakt acht), echte afgeschuinde hoekingang en leesbare gevelletters afronden. Halsgevel en kap liggen na dakcorrectie niet meer met een ongewenst driehoekvlak over elkaar.
