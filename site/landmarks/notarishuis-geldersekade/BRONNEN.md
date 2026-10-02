# Leeskabinet en Notarishuis — bewijs en concept, 2 oktober 2026

## Vastgestelde identiteitsfout

Het bestaande Leeskabinet staat in de catalogus ongeveer op Geldersekade24, de plek van het Notarishuis. Dit is niet op te lossen door het nieuwe Notarishuis naar een vrij stukje straat te schuiven.

**Primair adresbewijs Leeskabinet:** een historische brief van Annie Salomons, 18 mei1905, is afgedrukt met de adreskop “Rotterdamsch Leeskabinet, Gelderschekade No.18.” Vindplaats: Gerrit Borgers, brieven van Annie Salomons, *Maatstaf*8 (1960), p.156. Het artikel publiceert historische correspondentie; de adreskop is de relevante primaire passage.
https://www.dbnl.org/tekst/_maa003196001_01/_maa003196001_01_0015.php

**Primair kaartbewijs:** SAR40110-Z12, gedateerd1938. Huisnummer18 is leesbaar langs de kade, ten zuiden van nr20 en de Koningssteeg, op perceel **1644**. Niet perceel164. Zie `leeskabinet-huisnummer18-detail.jpg`. Het Notarishuis24 ligt aan de andere zijde van die steeg en meerdere panden verderop, op groot samengesteld perceel1879.
https://www.archieven.nl/nl/zoeken?mivast=0&mizig=299&miadt=184&miaet=14&micode=4001&minr=39548311&miview=ldt

**Onafhankelijke beeldcontrole:** de bestaande ongewijzigde Leeskabinet-foto (SARXXI-85-00-01-00-01, 1918–22) toont rechts pand De Gouden Kat met groot nummer20. Dit ondersteunt de nummerorde en het verschil met Notarishuis24. Het nummer20 is niet het huisnummer van het Leeskabinet zelf.

## Plaatsingsconcept en beperking

`leeskabinet-correction-draft.json` + `leeskabinet-correction-overlay.png` geven een handmatig getraceerde voorlopige gevel op de doelkaart: (3578,2382)–(3561,2379), dus oostelijk van de Koningssteeg. Historische brongevel ongeveer (5099,2603)–(5143,2665) op de originele Z12-scan. De bekende 3-puntsaffine bij Notarishuis gaf elders inconsistente blokranden; gebruik die niet als schijnbaar precieze transformatie.

De correctie in historische identiteit is bewezen; de precieze schaal en gevelpositie blijven circa8m onzeker. Afgeleide nieuwe frontbreedte circa10,4m tegenover het bestaande model van15,44m. Daarom is alleen de marker verplaatsen onvoldoende: modelbreedte, footprints, uitsnijding en GLB moeten gezamenlijk worden gecontroleerd. De huidige diepte23m is slechts een bestaande hoofdmassa-aanname; het historische perceel is dieper en heeft bouwdelen/zaal waarvan dakhoogten nog niet apart zijn vastgesteld. Geen runtime gewijzigd.

## Notarishuis modelconcept

`notaris-model-draft.json`, `build-notaris-draft.py`, `render.mjs`, `render.py` en `notaris-preview.png` vormen een zelfstandig researchconcept zonder cataloguswijziging. Vorm naar de gehele RCE20192025-foto; aquarelVerheul1935 ondersteunt roodbruine baksteen, warme lichte steen, crèmegrijze kozijnen en donkerblauwe deur. De oudere tekening dient alleen als aanvullende geometriebron.

Vijf assen; drie bovenlagen; onderbouw met lage beganegrondvensters en entresol, centraal hoog portaal; twee lage zij-ingangen; twee dakkapellen; dwarskap met zijtoppen; rustica hoekpilasters en vereenvoudigde middenornamenten. Breedte13,4m, hoofdvolume14m diep, goot17,9m en nok21m zijn foto-/kaartbenaderingen, geen opmeting. De achterzaal is bewust niet als bewezen volledige gebouwvorm uitgewerkt. De lege zijgevel is een onderzoeksbeperking; reclameopschriften en sculpturen zijn niet verzonnen. Centrale urnen zijn eenvoudige cylinders, decoraties slechts suggesties.

Het concept is visueel vergeleken met de bron: juiste aantal vensterassen en bovenlagen, herkenbare entree en dakvensters. Voor uitvoering blijft verfijning van de ornamenten en gevelverhoudingen gewenst. Geen toets op live uitsnijding, bestaande modellen of browser gedaan omdat dit nog geen runtime-integratie is.
