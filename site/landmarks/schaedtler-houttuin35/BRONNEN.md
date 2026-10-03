# Schaedtler & Co — bronverantwoording

Dit pakket bewaart een ongewijzigde gehele albumplaat (`foto-1-origineel.jpg`), de geselecteerde AI-proef04 als `foto-1-ai.png`/`.webp`, exacte prompts en bronkaarten. AI is een interpretatie, geen nieuwe historische bron. Proef04 is een gerichte bewerking van proef02: de foutieve dambordstroken zijn verwijderd. Exacte promptketen02+04 en onafhankelijke review bewaard. Het hele pakhuis blijft zichtbaar, maar boten en voorgrond zijn strakker afgesneden; fijn reliëf, raamwerk, kleding, buurdetails en tinten blijven interpretatief.

## Directe bewijsstukken
- [Verheul-album, plaat9](https://archive.org/details/jverheuldznarchi00unse/page/n25/mode/1up): historische foto linksboven, onderschrift Schaedtler & Co aan Boerensteiger. [Colofon](https://archive.org/download/jverheuldznarchi00unse/page/n11.jpg) vermeldt juli1916. Fotograaf onbekend, niet individueel gecrediteerd. Eigen PD-anon70-beoordeling wegens anonieme publicatie1916; geen CC-licentie van het archief geclaimd. Originele SHA256 in `original-integrity.json`.
- [Bouwkundig Weekblad1897 p92](https://archive.org/download/bouwkundigweekbl1718unse/page/n79.jpg), `BW1897-p92.jpg`: geometrie achtergevel, L-vormige plattegrond, materialen, functies en bouwstart maart1896. Tekst benoemt waterzijde expliciet als achtergevel; voorzijde aan Houttuin noordzijde.
- [Adresboek1939 p569](https://www.archieven.nl/nl/zoeken?mivast=0&mizig=342&miadt=184&miaet=14&micode=3023-77&minr=1986263&miview=ldt), `adres1939-p569.jpg`: Schaedtler & Co, in tabak, Houttuin35. LinkerRottekade97 is een tweede adres, niet de locatie van dit model.
- [Huisnummerkaart Z17](https://hdl.handle.net/21.12133/465C6A184A41416CB5DD1EE39CF9C54B): Houttuin35, perceel748. L-vorm stemt overeen met de1897bouwtekening. `source-parcel.json`, `Z17-parcel748-marked.jpg` bewaren de aflezing.
- [Gemeentelijke schadekaart1940](https://hdl.handle.net/21.12133/2354F306D7C949C3B3E67AA61B2610E5): volledige smalle bouwstrook tussen Boerensteiger en Houttuin is geel/verwoest, geen witte uitzondering. `damage-context-marked.jpg` markeert alleen context, geen pseudo-exacte kavelprojectie. De combinatie met adresboek en Z17 ondersteunt verlies door bombardement/brand in mei1940; geen individueel inslagbewijs.

## Plaatsing en model
`placement-proposal.json` legt de twee onafhankelijke straathoekankers en bron-/doelpixels vast. `placement-overlay.jpg` toont de L-vorm op de werkkaart. Breedte waterzijde circa12,8m, diepte19,4m, straatzijde7,9m. Positie ±8m; totale hoogte19,9m is een proportieschatting ±2,5m. Niet gefotografeerde Houttuingevel conservatief; ornamenten vereenvoudigd. Geel/lichtgroen/hardsteen zijn brononderbouwde materialen, exacte tinten en kozijnkleur onzeker.

`mesh-qa.json` bevat controle tegen alle overige modellen en de uitgesneden achtergrond. `model.glb` en `model.blend` zijn exports van de runtimegeometrie.
