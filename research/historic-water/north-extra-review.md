# Noordelijke waterlopen — controle

Bron: `site/onderzoek/centrum-voor-mei-1940.jpg`, 6481 × 5098 pixels. Handmatig getraceerd in bronpixels; de ondergrond combineert de toestand vóór mei 1940 met wederopbouwlijnen. De getraceerde contouren zijn daarom een visuele benadering, geen GIS-bewijs.

## Geleverd

`north-extra.json`: zeven gebieden met elf polygonen. Rotte, Delftsevaart/Haagseveer, de smalle zuidelijke Vaart, Steigersgracht en Kolk. Bruggen zijn uitgespaard door de vlakken te splitsen. Overlay en detail zijn geopend en visueel vergeleken met de kaart.

## Grenzen

- Circa 3–7 pixels onzekerheid langs oevers (ongeveer 2–4 meter).
- Smalle zuidelijke Vaart bewust conservatief: de twee oeverlijnen staan dicht naast straatlijnen en de kaart van 1955. Niet als nauwkeurige waterbreedte presenteren.
- Stokviswater/Verlaat voorlopig overgeslagen: sluis-, brug- en viaductlijnen zijn niet met voldoende zekerheid te scheiden.
- Geen water toegevoegd op Gedempte Binnenrotte, Botersloot of Coolsingel.
- Westelijke Steigersbocht richting Beurs/Leuvehaven niet in deze opdracht getraceerd; alleen de duidelijke rechte Steigerskom westelijk van Grote Markt.
- Geen runtime-, catalogus- of commitwijzigingen verricht.

## Tweede visuele controle — oevers gecorrigeerd

Parentreview vond terecht dat de eerste Rottepolygoon een deel van de Rechter Rottekade meenam. De westelijke rand is opnieuw gemeten op de binnenste gebogen waterlijn, circa 20–35 pixels oostwaarts. Ook de westelijke bocht is opnieuw getraceerd. Kolk-zuidwest is circa 15 pixels naar binnen gebracht; Delftsevaart-west circa 10 pixels. Nieuwe overlay geopend en bekeken.

### Stokvisverlaat versus Stokviswater

Primaire registratie SAR **2007-1776-3**, gedateerd **30 april 1941**, beschrijft het heien voor een **nieuw verbindingskanaal** tussen Rotte en Delftsevaart: Stokviswater. Direct record: https://hdl.handle.net/21.12133/5F21E0A762454D4FA5DF060F46B74205 . Dit ondersteunt dat het huidige rechte verbindingskanaal geen veilige 1939-geometrie is.

Het oudere Stokvisverlaat bestond wel: SAR **PBK-1987-862**, 1930, beschrijft Oppertbrug over de verbinding Rotte–Delftsevaart: https://hdl.handle.net/21.12133/59E613E2E9104B6EA70C81B61A908FA5 . Ook foto **VIII-159-02**, 1910, situeert het verlaat noordelijker bij de Galerij: https://stadsarchief.rotterdam.nl/zoek-en-ontdek/archieven/zoekresultaat-archieven/?miadt=184&miaet=14&micode=4113&minr=39507625&mivast=184&miview=ldt&mizig=299 . De sluizen/bruggen maken de exacte open-watercontour op de combinatiekaart nog onzeker; daarom geen verzonnen doorlopende polygon.
