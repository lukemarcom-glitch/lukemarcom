# Eindcontrole vier toevoegingen — 2 oktober 2026

**Uitkomst: geen blokkerende bron-, rechten- of gebouwverwisselingsfout gevonden.** Vier modellen zijn bruikbaar als expliciet benaderde reconstructies, niet als nauwkeurige architectuurmetingen. Nieuwe Westerkerk, HEMA en Zumpolle onafhankelijk opnieuw bekeken; Voorwaarts is aanvullend gecontroleerd door dezelfde agent die het dossier maakte en is dus geen volledig onafhankelijke second opinion.

## Bron, beeld en identiteit

Live Commons-API opnieuw geraadpleegd; bewijs in `round3-review-rights.json`. Nieuwe Westerkerk-contextfoto144570821: KLM Aerocarto1933,CC0. HEMA104552005: anoniem1938,PD. Zumpolle140689910: anoniemcirca1920,PD. Voorwaarts93732789: anoniem1935,PD. Catalogus noemt deze gegevens correct. Alle vier echte originelen en afzonderlijke AI-varianten aanwezig. De drie andere fotoparen zijn nu visueel naast elkaar bekeken; Voorwaarts eerder in deze ronde.

- **Nieuwe Westerkerk:** expliciet gescheiden van hervormde Westerkerk Kruiskade en het tegenoverliggende instituut. Geveltekening is als tekening benoemd. Gepubliceerde luchtfoto is terecht uitsluitend omgeving/context; de kerk is hierin niet sluitend geïdentificeerd. AI maakt veel kleine dak-/raamdetails scherper dan de bron toestaat; de huidige detailcaveat dekt dit. Geen scherp kerkexterieur suggereren. Militair-tehuisverhaal betreft correct het naastgelegen kerkeraadsgebouw, niet kerkzaal.
- **HEMA:** gevel1938 correct als aparte fase behandeld; rijker pand1930 niet door elkaar gemodelleerd. Origineel/AI herkenbaar hetzelfde winkelpand, met interpretatieve etalage- en kleurdetails. Directe ruïnebron gekoppeld.
- **Zumpolle:** juiste rechterhoek, niet ronde linkerbuur Weinthal/Paul Kaiser en niet naoorlogse Lijnbaan. Rechte registratie is Commons/particuliere prentbriefkaart, geen verzonnen institutioneel inventarisnummer. Volledige1280px-reproductie transparant vermeld. In AI kleine winkelletters vervormd (onder meer APOTHEEK bij buur); caveat aanwezig, naam ZUMPOLLE blijft herkenbaar. Modelnaam geometrisch vereenvoudigd, geen exacte lettervormclaim.
- **Voorwaarts:** noordelijke17×75m-strook is hypothese met15m-onzekerheid. Voorbouw17×19m; geen75m-volmassief of verzonnen bakkerij. Moderne Slaakhuys-kantoorlocatie niet gelijkgesteld. Directe Berlage-ontwerptekst en RCE-funderingscontext aanwezig. Klokdetails expliciet schematisch.

De historische tekstclaims zijn getoetst aan de eigen bronnotities en gekoppelde broninhoud. Niet alle webpagina's zijn in deze laatste ronde opnieuw geopend; rechtenmetadata wel. Geen onbewezen architect/bouwjaar bij Zumpolle toegevoegd. Elke tekst blijft onder400woorden.

## Model/export/ruimte

Alle drie nieuwe standalone modelbeelden en Voorwaarts-runtimebeeld visueel bekeken. Catalogusmetadata exact gelijk aan geëxporteerdegeometry.json. GLB-aantallen gelijk aan geometry: NieuweWesterkerk3904,HEMA2322,Zumpolle2460,Voorwaarts1518driehoeken. Dit is een consistentiecontrole, geen bytevergelijking van ieder vertex.

`round3-review-geometry.json`: alle vier footprintpolygonen binnen projectwerkgrens. Alle modelomhullingen nul intersectie met actuele achtergrondblokken. NieuweWesterkerk/Voorwaarts passen geheel binnen footprint+clearance. HEMA en Zumpolle steken met werkelijke geprojecteerde driehoeken respectievelijk31.22m² en21.59m² buiten hun gebufferde footprint; **geen feitelijke achtergrondbotsing gevonden**. Als daar later aangrenzende modellen worden geplaatst, werkelijke modelomvang meenemen, niet alleen cataloguspolygoon.

HEMA snijdt brede cataloguszone Hoogstraat. Daarom actuele `createLandmark` met cataloguscontext opnieuw opgebouwd:346.96m² geprojecteerde overlap is vrijwel geheel straatvlak op maaiveld. Na uitsluiting van driehoeken onder3m blijft0.30m² projectie-overlap aan rand/overstek. Dit is geen substantieel doorsnijdend bouwblok. Geen runtime gewijzigd tijdens review.

## Kleine redactionele verbetering

Voorwaarts bevat twee `supports`-velden met aaneengeschreven woorden uit research. Inhoud klopt, maar spaties verbeteren de leesbaarheid. Geen blokkerende fout. Publicatie blijft parentbeslissing; deze review bewijst geen deployment.
