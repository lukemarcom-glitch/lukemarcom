# Koffiebranderij IJsendijk — bronnen en reconstructie

## Identiteit en periode

De hoofdbron is prentbriefkaart **PBK-3955**, geregistreerd als 1932. Het Stadsarchief identificeert de koffiebranderij expliciet bij de Brandsteeg, westelijke Leuvehaven. [Directe registratie](https://proxy.archieven.nl/0/C6E52E3B2D5B41D9BC3DF2483C0F152A).

De aanvullende **PBK-3954**, geregistreerd als 1938, toont dezelfde gevel van dichterbij. Het dak is bovenaan afgesneden. Dit beeld onderbouwt late continuïteit, maar is geen volledige gebouwopname. [Directe registratie](https://www.archieven.nl/nl/zoeken?mivast=0&mizig=247&miadt=184&miaet=14&micode=4029&minr=40467938&miview=ldt).

## Plaats en omvang

[Huisnummerkaart Z10](https://www.archieven.nl/nl/zoeken?mivast=0&mizig=247&miadt=184&miaet=14&micode=4001&minr=39548305&miview=ldt) toont nummer 73 direct ten noorden van Brandsteeg. Perceel gelezen als **1656**; de oudere lezing 1666 is ingetrokken. Het laatste cijfer is niet volmaakt scherp. De contour en het huisnummer zijn duidelijker dan het kadastrale schrift.

`placement-proposal.json` bevat de kaartankers en de ruimere onderzoekscontext. `model-placement.json` is de definitieve beperkte modelscope: alleen hoge voorbouw 73, circa 12 × 12 m, volledige modelhoogte 21,5 m inclusief opbouw. Positie ±8 m; hoogte ±3 m. `placement-main73.jpg` en `parcel-close.jpg` tonen de onderbouwing. Nummer 69 en de onbekende achterbouw zijn niet nagebouwd. De venstergroepen en ornamenten blijven schematisch.

## Verlies

Het [Stadsarchief-overzicht van verdwenen gebouwen van Verheul](https://stadsarchief.rotterdam.nl/overzicht-van-verdwenen-gebouwen) vermeldt bedrijfsgebouw IJsendijk, ontworpen in 1890, verwoest in mei 1940. Het noemt geen individuele bominslag of precieze verliesdag.

De [gemeentelijke schadekaart 1940](https://hdl.handle.net/21.12133/2354F306D7C949C3B3E67AA61B2610E5) kleurt het betreffende westelijke Leuvehavenblok geheel als verwoest, zonder behouden uitzondering. `damage-ijsendijk-block.jpg` markeert de blokcontext, geen exact geprojecteerd perceel. Het verlies wordt onderbouwd door deze combinatie met Z10, de foto uit 1938 en de expliciete gebouwvermelding. Niet voorstellen als individueel inslagbewijs.

## Rechten

PBK-3955: fotograaf anoniem, uitgever A. Vigevano, archiefdatering 1932. PBK-3954: fotograaf anoniem, uitgever Gebr. Spanjersberg, archiefdatering 1938. Eigen **PD-anon70-beoordeling** op basis van de registratie als uitgegeven anonieme prentbriefkaart. Geen CC-licentie van het archief geclaimd. De datering is archiefmetadata; er is geen zelfstandig gecontroleerd poststempel of drukcolofon. De originele kaartbestanden blijven ongewijzigd.

`foto-1-origineel.jpg` hoort bij PBK-3955; `foto-2-origineel.jpg` bij PBK-3954. `original-integrity.json` bevat SHA256 en gecontroleerde bytegelijkheid met de onderzoeksoriginelen. De geselecteerde AI-versies zijn `foto-1-ai.webp/png` en `foto-2-ai.webp/png`.

## AI en vorm

Exacte productieprompts: `ai-prompt-ijsendijk-01.txt` en `PROMPT-PHOTO2-AI-01.txt`. Reviews: `AI-REVIEW.md`, `PHOTO2-BEELDCONTROLE.md`, `MODEL-REVIEW.md`. Het verkeerde woord chimney in prompt 1 blijft bewaard als productiehistorie; onafhankelijke visuele controle bevestigt dat de uitvoer de metalen straatmast behoudt. De exacte functie van die mast is niet vastgesteld. Zij is niet als fabrieksschoorsteen gemodelleerd.

Kleuren, kleine opschriften, gezichten, scheepsdetails en fijn raamwerk zijn generatieve interpretaties. AI is geen bron voor modelmaten. Het [tegeltableau uit 1930](https://commons.wikimedia.org/wiki/File:Tegeltableau_koffiebranderij_IJsendijk_aan_de_Leuvehaven.jpg) is uitsluitend een aanvullende picturale vormreferentie; het wordt hier niet herpubliceerd of als fotografisch kleurbewijs gebruikt.

## Technische controle

`mesh-qa.json`: actuele driehoeksgeometrie vergeleken met 181 overige modellen; nul overlap. Intersectie met 987 geknipte achtergrondpolygonen: 0 m². `model.glb` en `model.blend` zijn geëxporteerd. Browsercontrole, screenshots en npm-resultaten staan in de repository onder `artifacts/round15-ijsendijk` en de onderzoeksnotitie `research/expansion-20261003/round15-fifth/INTEGRATIE.md`.
