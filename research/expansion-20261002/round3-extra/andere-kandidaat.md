# Voorwaarts · Gedempte Slaak — kandidaat en bouwvoorstel

## Waarom deze kandidaat
Gebouw1907 van H.P.Berlage, niet in catalog117. Bestaande `slaak-straatbeeld` gaat expliciet over westelijke oudere straatkop en sluit Voorwaarts uit. Echte vooroorlogse exterieurfoto's beschikbaar, onherstelbare bombardementsschade expliciet bevestigd; bruikbare eigentijdse architectuurbron met maatinformatie en perspectief.

## Primaire nieuwe vondst
H.P.Berlage schrijft zelf over zijn ontwerp in **Architectura1906, gedrukte p.387–388 (PDFp.200–201)**. PDF en gerenderde bladzijden opgeslagen. URL en bronrollen in `voorwaarts-sources.json`.
- Terrein ongeveer17m breed×75m diep tussen Gedempte Slaak en Schoutenstraat.
- Hoofdgebouw aan Slaak: beganegrond koffiehuis, voor/achterzaal, kruidenier, brooddepot; eersteverdieping administratie/redactie/vakverenigingen; tweedeverdieping drukkerij; zolder typografie/schaft/papier.
- Tuin tussen voorbouw en bakkerij; aanvankelijk wordt alleen voorbouw gebouwd, bakkerij volgt later. **1906grondplan geen bewijs dat de complete achterbouw in1939 exact zo was.**
- Baksteen met beperkte bergsteen; opschrift en torenmonogram in sectieltegelwerk. Geen bewezen baksteenkleur.
- Ontwerpvoorstelling: vier grote rondboogopeningen plus toreningang, drie dakkapellen, toren rechts in voorgevel. Toren/kap/ritme gecontroleerd naast echte straatfoto's1928–1935; geen getekende afbeelding als enige bron.

## Beelden
Gedownload en visueel bekeken: `93657586.jpg` (1928–1932straatbeeld), `93732789.jpg` (1935), `93732788.jpg` (24oktober1929), `93736276.jpg` (1940ruïne), `74013317.jpg` (NationaalArchief1907bouwfoto's,CC0). CommonsmetadataJSON bewaart originele bronregistraties.
De eerste twee straatbeelden zijn bruikbaar voor galerij/AI, maar het gebouw staat op afstand en deels achter de zuidelijke buren. Geen scherp beeld van het hele gerealiseerde gebouw gevonden. De NA-bouwfoto toont echte gevelonderdelen en achterbouw, maar is geen voltooid1939beeld.
Download ruïne94338208 en straatfoto93550731 kregen429; niet herhaald. Deze files ontbreken; metadata blijft bruikbaar.

## Oorlogsbron
PlatformWederopbouw, sectieVoorwaarts, noemt expliciet onherstelbare beschadiging door bombardement1940. Archiefbeschrijving94338208 benoemt restanten gebouwDeVoorwaarts na14mei1940. NAannotatie noemt vernietigingTweedeWereldoorlog. Geen verwisseling met naoorlogs Slaakhuys; dat verrees deelsnaast ruïne/deelsop oude fundering.

## Voorstel plaatsing — nog visuele eindcontrole nodig
`voorwaarts-placement.json`, `voorwaarts-footprint-voorstel.jpg` en `voorwaarts-mapgrid.jpg`.
Voorgesteld is de noordelijke van twee diepe kavels ten zuiden van Papagaaienstraat. Voorzijdepixels[4548,1460]–[4539,1487]. Totale rechterachtergrens naar[4667,1498]–[4658,1525]. Getransformeerde maten17.08×74.79m sluiten zeer goed aan op Berlage17×75m.
**Dit is een maat- en contextmatch, geen geverifieerd kadastraal nummer.** Ernaast ligt een bredere diepere kavel; parent moet deze keuze vóór import visueel bevestigen of met ander kaartbewijs versterken.
Drie controles op huidige `site/data/model-landmarks.json.boundary` geven binnenbrandgrens (ray-casting): pixels4550,1460;4580,1490;4460,1550. Geen scopeuitbreiding nodig voor de kandidaatstreek. Achterste delen afzonderlijk toetsen bij eventuele uitbreiding.

## Modeldraft
`voorwaarts-model-draft.json` met modelSpec, voorlopige center/angle/poly. Alleen voorvolume17×19m; totale perceeldiepte75m nooit als solide blok toepassen. Voorgevel drie lagen, hoge kloktorenrechts, drie dakkapellen, vierbays+toren. Hoogten/proporties en19mvoorbouwdiepte benaderd op ontwerp, geen ingemeten getallen. Baksteenbruin/donkerdak zijn interpretaties. Nietzichtbare zij/achtergevels sober zonder verzonnen raampatronen. Geen fictief opschrift toegevoegd.
Preview `voorwaarts-preview.png` via echte city32generator en Blender. Renderhelpers en geometryJSON staan in eigen researchmap. Geenruntime gewijzigd.

## Integratievoorwaarden
1. Parent toetst voorgestelde kavelmatch en voorbouwpositie; draft is PROVISIONAL_REVIEW_REQUIRED.
2. Gebruik alleen voorvolume, houd tuin/achtergebied buiten exclusie.
3. Eventueel AI1935straatbeeld trouw upgraden; behoud origineel en specifieke source/license.
4. Modelpreview nog vergelijken met ontwerp en straatfoto; geen definitieve nauwkeurigheidsclaim.
5. Catalog/sources/exports/overlap/publicatie doorparent.
