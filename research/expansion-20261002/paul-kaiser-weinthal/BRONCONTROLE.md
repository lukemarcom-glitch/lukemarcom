# Paul Kaiser / Weinthal — ronde4 onderzoek, geen runtime

## Eerst duplicaatcontrole
Geen afzonderlijk PaulKaiser- of Weinthal-item aanwezig. Wel schematische Kolk&OpenRijstuin (18 indicatieve huizen). Historisch hoekperceel Hoofdsteeg43/Kolkkade ligt hoofdzakelijk ten zuidoosten daarvan. Proefcontour89.08m² heeft1.95m² intersectie (2.18%) met bestaande Kolkpolygon. Zie duplicate-check.json. **Niet naast bestaand straatmodel publiceren zonder laatste Kolkhuis/geometrie te controleren en overlap weg te nemen.** Dit is gedeeltelijke ruimtelijke overlap, geen bewezen volledige dubbele reconstructie. De strook Kolk gaat hier over in de Kolkkade; naamgrens klopt niet exact met modelinhoud.

## Beeld en identificatie
- Volledige PDprentbriefkaart circa1920 https://commons.wikimedia.org/w/index.php?curid=140689910 ; oorspronkelijke herkomst https://www.flickr.com/photos/jansluijter/18647148541 . Onbekende maker. Volledige1280pxCommonsreproductie lokaal, geen uitsnede en geen AI. Grotere scan gaf eerderHTTP429. Metadata opgeslagen.
- Herkenbare ronde linkerhoek met WEINTHAL op de beganegrond en P.C.KAISER op de puiband. SINCOBENZINE/BRUINKOLEN zijn afzonderlijke reclames en geen bewijs dat het hele gebouw een benzinebedrijf was.
- Archiefprentbriefkaart1932 https://hdl.handle.net/21.12133/E4B9DC6E75A047AB8D53E20B34D1B0E1 benoemt linkerhoekKolkkade expliciet als Hoofdsteeg43, rechterhoekMosseltrap als38. Lokale1932thumbnail erbij voor zijgevelcontrole.
- **Bombardementsbewijs per naam:** Stadsarchief2001-1515, juni1940, https://hdl.handle.net/21.12133/7C9962A639D04F728F5285BBCBC6F124 . Beschrijving benoemt restanten van firmaPaulKaiser en firmaZumpolle aan de door bombardement14mei1940 getroffenHoofdsteeg; links hoekKolkkade. Commons164569400, anoniemPD. Volledige metadata in Zumpolle.json.

## Voorgestelde plek
Pixelpoly op historischekaart6481×5098: [[3496,2198],[3509,2195],[3512,2214],[3502,2219]]. Klein hoekperceel, circa7×11m. Achtergrens voorlopig; kaart mist naam. Adres43 en rechter/linksrelatie foto zijn wel historisch bewezen. De1870/1900kaart of kadastrale hulpkaart kan de exacteperceelsdiepte nog aanscherpen. Niet via modernadres bepaald.

## Modelconcept
modelSpec-draft.json, bestaande city33renderer. Rechte hoofdgevel, rondehoek, lichtebanden, vierwinkelniveaus en eenvoudigehekposten. Standalonepreview functioneert (1960driehoeken, geenJSfouten), **niet klaar voor publicatie**. Rondhoekramen volgen nu de generieke renderer; verfijning nodig zodat verdiepingshoogten/bandlijnen op rechte en rondegevel volledig aansluiten. Dakhek heeft nog geen doorlopende horizontale railing. Werkelijke maatvoering, precieze gevelkleuren, ijzerwerk, dakvorm en achtergevel zijn niet bewezen. Hoogtecirca20m proportioneel geschat. Geenruntimewijziging, AI of exportgedaan.

## Vervolg
1. Kolkmodel laatstehuis op exactegeometry-overlap toetsen, niet alleencatalogpolygon.
2. Hoekperceel en achtergrens verfijnen met luchtfoto.
3. Geveltekening op basis vanfoto volgen; rondhoekramen moeten geen automatische dubbeleramen krijgen.
4. RolWeinthal(tabak),PaulKaiser(beschuit/banket) op deze specifiekeplek met zakelijke primairebron bevestigen voordat er een uitgebreid verhaal wordt geschreven.

## Verfijning en correctie duplicaatcontrole
De eerdere waarschuwing om een Kolkhuis te verwijderen is met geometrische controle aangescherpt: **geen Kolkhuis verwijderen**. De laatste drie huizen zijn één-op-één uit de rendererformules nagerekend, inclusief ruime marge voor dakoverstek en geveldetails. Laatste huis index17 (18e huis) ligt minimaal1.48m van de conservatieve PaulKaiser-modelenvelop; index16 5.08m, index15 11.60m. Geen 3Dhuizenoverlap. De1.95m² intersectie van de catalogpolygonen betreft de ruimer getekende kade-/straatstrook, geen huis. Bewijs `kolk-house-check.json`. Bij definitieve integratie is een visuele kaartcontrole nog vereist; alleen achtergrondmassa onder nieuwmodel uitsnijden.

Model verfijnd naar4316driehoeken: vier niveaus op gelijke hoogten, twee rechte gevelbays, smalle ronde erkerlichten, doorlopende gebogen lijsten en een open hek met boven-/onderrail. Hekornamenten, gevelletters en sierfiguren zijn bewust nog niet nagemaakt: simpele hekstructuur is een reductie van de zichtbare bron, geen exact ornament. Preview front/angle opnieuw gerenderd en bekeken. Achtergevel en bouwdiepte blijven benaderd.

**Technisch:** preview route gebruikt uitsluitend onderzoekskopie `renderer-preview.js`. Daar is één optionele guard toegevoegd rond automatische torenramen en lijsten: `if(t.windows!==false)`. Het model gebruikt `windows:false` voor de rondhoek en eigen gedocumenteerde raam-/lijstposities. Runtimebestand is niet gewijzigd. Deze guard moet bij eventuele integratie worden overgenomen (of geometrie anders gemaakt); zonder guard ontstaan ongewenste extra ramen. Standaardgedrag andere modellen verandert niet.

## Hergebruik fotopaar
Ja: het bestaande ongewijzigde beeld `zumpolle/hoofdsteeg-1920-1280.jpg` toont óók dit linkerhoekpand van plint tot dakhek. Het goedgekeurde `zumpolle/ai-1920-proef02.png` kan voor dezelfde opname worden hergebruikt, zonder nieuwe generatie. Wel opnieuw visueel toetsen op linkerhoek, en duidelijk omschrijven als hetzelfde straatbeeld met zowel Zumpolle als Kaiser/Weinthal. Bron/maker/circa1920/PD blijven identiek. Kleine reclameletters, winkelinhoud, personen en ornamenten zijn AI-interpretatie; de AI-versie niet als architectuurbron gebruiken. Er is nog niets gekopieerd naar runtime.

## Lokale integratie ronde4
2okt2026: catalogus123 na toevoegen. Origineel en geselecteerdeAI02 vanZumpolle byte-identiek hergebruikt, met afzonderlijk uitgelegde linkerhoekfocus. De bronprompt en AI-selectienotitie zijn bewaard. GeenextraAIgeneratie. Naamtranscripties vereenvoudigd geometrisch op de winkelgevel; niet het oorspronkelijke lettertype.

Eénregelige optionalguard `t.windows!==false` nu inruntimecity32renderer. **Regressiecontrole alle75 anderecity32/city33modellen:** allegeometryattribute-byteshashes exactgelijk met oude/nieuwerenderer. Zie renderer-regression.json. GeenKolkhuisgewijzigd.

Model6692driehoeken, GLB enBlendergeëxporteerd, achtergrondherknipt. npmruncheck9/9. Gerichtebrowserdesktop/mobiel/Nu3D/fullscreen geslaagd: errors[],failed[],geenoverflow. Kaartscreenshot en mobielegalerij bekeken; geenachtergrondblokken offacetflicker zichtbaar. Bewijsscreenshots artifacts/expansion-20261002/paul-kaiser-weinthal-model.png en artifacts/kaiser-browser/. Noggeencommit/publicatiedoordezesubagent.
