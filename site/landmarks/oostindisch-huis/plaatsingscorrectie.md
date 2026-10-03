# Oost-Indisch Huis 90 — historische plaatsingscorrectie

Het bestaande model stond bij de latere oostelijke kaartstrook rond Boompjes49. Dat strookt niet met het historische adres90, Z11percelen1157/1156 en de luchtfoto1924. In die laatste staat het brede hofcomplex onmiddellijk westelijk van de synagoge87, vóór het bouwblok aan de Scheepmakershaven. Dezelfde grote hof met hoofdgebouw is op beide kaarten herkenbaar. Een tweede agent heeft deze bronidentiteit onafhankelijk beoordeeld.

Bronnen:
- Z11/1938: https://proxy.archieven.nl/0/8C75724BFB804EDB929C93BE12706702 . Ruime uitsnede z11-boompjes.jpg toont90,1157,1156 naast87/1705 en Reederijstraat verderoost.
- Luchtfoto1924: https://hdl.handle.net/21.12133/B79BB226E56646DE9A77D759D512E278 . Metadata lokaal synagoge-aerial-search.json, CC0 volgens Commons132788395; originele foto synagoge1924.jpg. Geen nieuwe foto in publieksgalerij toegevoegd.
- Werkkaartpassing: oostindisch-flat-marked.jpg, oostindisch-synagoge-proposal.jpg en oostindisch-placement-proposal.json. Deze omhulling is geen toestemming om de hof dicht te bouwen.

Nieuwe center[41.75363,-580.56938], angle0.8303365, circa55,33×57,97m. Horizontale x/w-maten factor1,006045, z/d-maten factor1,159319. Alle bestaande vleugels en accentdelen volgen deze maatpassing; de hof blijft open en alle hoogten ongewijzigd. Oude mapPixelCenter, modelWidth/Depth, polygon en exclusion/footprints vervangen of opnieuw afgeleid.

Eerste rechte modelomhulling leverde24,2255m² intersectie met synagoge. De bronkaartgrens is licht scheef. Rechtergrens in lokale modelcoördinaten loopt van(26,618632;28,889286) naar(28,708449;−28,739987). Exact daarop begrensd met bestaande vertexDeform.maxX/maxXSlope,2mm binnen de grens. Geen verschuiving om een fout te verbergen. Na deze stap1,7887m² resteert door synagogeoverstek/haar rechthoekbenadering; definitieve oplossing en QA volgen in meshrapport.

Definitief: beide gevels volgen dezelfde gedeelde bronlijn. Voor de synagoge is optionele minXSlope gebruikt, geen constante afknijping. Lokale westgrens loopt van(−6,288678;11,873822) naar(−5,732005;−12,023178), met2mm binnenmarge. Geen center of hoogte verplaatst. Exact modelconflict na gezamenlijke begrenzing0. Optionele minXSlope en guards voor ontbrekende frontZ toegevoegd; acht bestaande clampmodellen bytegelijk, volledige synthetische mesh zonderfrontZ blijft eindig (builder-regression.json).
