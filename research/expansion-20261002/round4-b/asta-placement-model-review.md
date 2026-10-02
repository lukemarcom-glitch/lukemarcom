# Asta: plaatsing en voorbouwstudie

## Besluit
`asta-model-draft.json` is een benaderde voorbouwstudie, niet een exact gereconstrueerde zaal. Alleen parent integreert na eigen visuele toets. Geen runtimebestanden aangepast.

## Plaatsingsketen
1. CinemaContext B000884 bevestigt historische Hoogstraat160 en sluiting/verwoesting14mei1940. De databasepin (51.922680,4.493394) ligt na projectie op de Achterstraat; niet gebruikt.
2. Primaire SARfoto XXV-350-03 (https://hdl.handle.net/21.12133/D7F7855B07844D279755FA9857A142FB) beschrijft expliciet de hoek met de Valkensteeg op de achtergrond. Foto kijkt langs noordgevels westwaarts: Asta rechts, twee smalle buurpanden en het hoekgebouw links.
3. Tegenzicht1993-3780 (https://hdl.handle.net/21.12133/7EE4E1D36D864609BFE64DAB9BE23349) noemt Asta het derde pand linksvoor; na afbraak van het hoekpand worden de twee smalle buurhuizen gestut. Deze foto toont ook geveltop en dak.
4. Op de bronkaart ligt KorteValkenstraat noord van Hoogstraat, tegenoverValkensteeg. De voorgevel wordt circa20–25m oost van die straathoek geplaatst. Dit levert circa15–20m onzekerheid langs de gevelrij op; exacte kadastraleperceelgrens ontbreekt.

Voorgestelde pixelcontour: [[3851,1838],[3866,1834],[3862,1818],[3847,1822]], center[3856.5,1828]. Wereldpositie enhoek staan inJSON. Voorgevel kijkt zuid/ietszuidoost, hoek0.263rad. `asta-placement-draft.jpg` toont rood contour op kaart.

## Vorm en schaal
- Voorbouw9×10m. Goothoogte15.7m, dak2.7m. Alle maten geschat uit gevelproporties; niet uit bouwplan. Achterzaal bewustnietgeconstrueerd.
- Grote centrale boog, twee smalle verticale zijramen, vijf ramen boven de fries en lageingang: op beeld controleerbaar.
- Zij- enachtergevels zonder verzonnenramen; dak is eenvoudige volumebenadering, dakdetails achterzijde onbekend. Moderne mullionmodelbouwer geeft ramen vereenvoudigd weer.
- Materiaalpalet bruinbaksteen/lichteomlijsting/donkergedektedak is interpretatie; zwartwitbron bewijst geen exacte tinten. Geen filmportretten of reclameletters verzonnen in3D. Donkere vlakke afficheband isabstract.
- Standalone city32-render gegenereerd met render-draft.mjs/render.py, buitenruntime. Modelgeometrieonderzoek staat inasta-geometry.json, previewinasta-preview.png.

## Rechten
Publiseer uitsluitend1930Spaarnestadfoto XXIII-83-01 (PublicDomainMark1.0) en de daarvan gemaakte expliciet gelabeldeAI-afgeleide. 1938foto's alleen voor geometrische onderzoeksreferentie: uitsnede/volledigeplaat maker-rechtenconflict nogonopgelost. Zie candidates.md.

## Checks / bij integratie
Footprint is geldig en heeft0m²overlap met bestaande catalogpolygonen; dichtstbijBurgerweeshuis circa117m. Parent moet boundarycontrole, volledige geometryfootprint, achtergrondclip, GLBexport en browserchecks na eventueleintegratie uitvoeren. Geenexacteliggingclaim gebruiken.
