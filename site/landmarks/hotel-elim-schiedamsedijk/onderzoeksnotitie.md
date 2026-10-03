# Leger des Heils / Hotel Elim — Schiedamsedijk

Research-only, 3 oktober 2026. Geen runtime/model/AI door deze agent. Catalogus173 gecontroleerd: geen afzonderlijk Leger des Heils/Elim-item. Niet gelijkstellen aan latere William Boothlaan of een elders gespaard complex.

## Beeldbasis

SAR4117/2008-5160, “Gezicht op het gebouw van Het Leger des Heils aan de Schiedamsedijk.”1910–1925, François Henry van Dijk1888–1977. Auteursrechthouder: **Gemeente Rotterdam (Stadsarchief) CC-0**. DownloadbaarJa.
https://www.archieven.nl/nl/zoeken?mivast=0&mizig=247&miadt=184&micode=4117&minr=39974472&miaet=14&miview=ldt
Ongewijzigde aangeboden download: leger-2008-5160.jpg,2112×2950; volledig bekeken. Vrije hele hoofdgevel met kap, acht raamassen, drie bovengrondse vensterrijen boven de pui; grote ingangen met stoepen. De zijbuurtpanden zijn context, geen extra nieuwe locaties. Hoofdletters duidelijk LEGER DES HEILS. en THE SALVATION ARMY. Onderband zwak, vermoedelijk HOTEL ELIM No.1 maar dit nog onafhankelijk controleren; geen VOLKSLOGEMENT claim. Crop leger-sign-crop.jpg. Kleine bedragen en buurteksten niet op basis van waarschijnlijkheid invullen.

## Plaats en continuïteit

Joods Erfgoed Rotterdam: “Schiedamsedijk43 – Leger des Heils”; organisatie zat op nummers43–51; eerdere functie rooms-katholiek armhuis.
https://www.joodserfgoedrotterdam.nl/schiedamsedijk/

Primaire Kadaster1938-kaart4001/40110-Z10: grootperceel2172 met zichtbare nummers43,45,47, daarna53 op buur1818;49/51 niet los uitgeschreven in dit detail. `leger-Z10-number.jpg`, crop bronpixels1570,2600–1910,2920 uit house-map-Z10.jpg. Eén kadastraal perceel hoeft niet één gevel te betekenen: exacte gefotografeerde voorgevel versus organisatiebereik43–51 nog bepalen vóór modelbreedte.
https://www.archieven.nl/nl/zoeken?mivast=0&mizig=247&miadt=184&miaet=14&micode=4001&minr=39548305&miview=ldt

De1938feestfoto's vormen **nog geen gecontroleerde gevelmatch**. De juiste latecontinuïteitsbasis is voorlopig de1938kaart met ongewijzigd grootperceel, niet een geforceerde fotovergelijking.

## Verliesketen

Platform Wederopbouw Rotterdam noemt individueel dat Leger des Heils tijdensWOII zijn gebouwen aan Hartmansstraat en Schiedamsedijk verloor. Dit is géén bewijs dat het latere congresgebouw zelf vooroorlogs was.
https://wederopbouwrotterdam.nl/artikelen/gebouw-leger-des-heils-theater-rotterdam

Voor specifieke14meiverwoesting: primaire GemeentewerkenkaartSAR I-210-01A, “Rotterdam'40”,14mei–31dec1940,PDM1.0:
https://hdl.handle.net/21.12133/2354F306D7C949C3B3E67AA61B2610E5
Volledig lokaal research/expansion-20261003/round8-c/damage-original.jpg. Detail `leger-damage-zone.jpg` is **globale zonemarkering**, geen exact overgelegd perceel. Blok noord van Sleutelsteeg, west van Schiedamsedijk en oost van GedempteVest is geel(verwoest), behalve expliciete herstelbare uitzondering120 aan noordrand. Elim/perceel2172 ligt zuidelijk daarvan in geel. Daarmee volgt14mei-verlies als synthese van individueleWOIIbron,1938adreskaart en primaire schadeclassificatie. Geen afzonderlijke directe bominslag claimen.

Ondersteunende ruïnefotoSAR2004-55-8 (ruin-0.jpg) met expliciete14meicaption toontSchiedamsedijk/Leuvehaven vanuitSchielandshuis. IndividueleElimgevel hierin nog niet geïdentificeerd; niet als exactgevelvergelijking presenteren.

## Volgende stap

Foto/kaartfrontbreedte, driegeleding van ingangen en dakvorm modelwaardig uitwerken. Kleuren niet bewezen uit BW: lichte pleisterachtige gevel, bakstenen zijmuur en pannendak zichtbaar als materialen; precieze tinten interpretatie. Achterbouw blijft benadering. Nog geen runtimebouwvrijgave gevraagd.

## Researchmodel en onafhankelijke plaatsing

`elim-placement.py` en `elim-placement-draft.json` leggen vier onafhankelijk afgelezen blokhoeken vast: Karrensteeg, Sleutelsteeg, Schiedamsedijk en Gedempte Vest. De fit heeft residuen van 1,05–1,15 werkkaartpixels; voor absolute plaatsing blijft ±5 m aangehouden. Geen bestaand modelcentrum gebruikt. `elim-work-placement.jpg` toont het kadastrale front en de globale perceelstrook; dit is geen gemeten bouwplattegrond.

Het grote front van perceel 2172 bevat drie adreslabels 43, 45 en 47. De foto toont overeenkomstig drie ingangen over acht vensterassen, direct gevolgd door een smalle buur. Daarmee is de gehele circa 30,67 m brede kaartfrontstrook een aannemelijke identificatie van het gefotografeerde gebouw. Organisatiebereik 43–51 is niet gebruikt om extra buren toe te voegen. Historische gevelbreedte is kaart-afgeleid, niet opgemeten.

`build-elim.py` reproduceert `elim-model-draft.json`; `render-elim.mjs` en `render-elim.py` geven `solo-preview.png`, zelf visueel bekeken. Zekere kenmerken: acht assen, drie vensterrijen boven begane grond, drie entrees met stoepen, schilddak en twee lage dakkapellen aan de voorzijde. De hoofdletters zijn letterlijk weergegeven. Onleesbare onderband en affiches zijn niet ingevuld. Goothoogte 20 m, kaphoogte 4,1 m en voorbouwdiepte 12 m zijn verhoudingsmatige benaderingen; het diepe perceel is niet geheel tot deze hoogte gevuld. Achterzijde blijft sober. Exacte tinten zijn niet bewezen.

`elim-overlap-draft.json`: geen overlap tussen de concept-envelope en de actuele cataloguspolygonen; dit is uitdrukkelijk nog geen definitieve mesh-/achtergrondcontrole. Geen runtime, export, catalogus of AI aangepast. Review door hoofdagent gevraagd.
