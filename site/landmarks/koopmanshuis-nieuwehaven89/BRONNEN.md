# Nieuwehaven 89 — onderzoeksvoorstel (geen runtimewijziging)

## Geschikt voor de aangescherpte scope

**Ja, dit historische koopmanshuis ging in mei 1940 verloren.** Primaire bevestiging is het gemeentelijke museumjaarverslag 1940: p.2 introduceert de bergingswerkzaamheden na 14 mei, p.3 beschrijft de op 22 mei ingestelde commissie, p.4 noemt expliciet de uit het puin geborgen gevelfragmenten van Nieuwehaven59 én89. Dit is bewijs voor het verloren oorspronkelijke pand; niet slechts voor schade aan een nog bestaand gebouw. Formuleer bombardement en daaropvolgende brand als context, geen claim dat een individuele bom het huis rechtstreeks raakte.

- Museum Boijmans, verslag1940, p2–4: https://storage.boijmans.nl/uploads/2018/12/21/qehh1lyt3OMsRfN8AkMfIWOowlc6z39BJi1vCtY2.pdf#page=4 . `supports`: berging na14mei1940 en specifieke bouwfragmentenNieuwehaven89.
- Foto RCE20192314 april1933, https://commons.wikimedia.org/w/index.php?curid=23743022 . `supports`: hoge3-assigegevel, drie bovenlagen, middenentree met kolommen/boog, platte kroonlijst, langsdak met twee luiken en schoorstenen. Origineel2331×3156. Makeronbekend, collectieRCE, CC BY-SA4.0 (AI-afgeleide dezelfde licentie/vermelding).
- DetailRCE20192313 juli1928, https://commons.wikimedia.org/w/index.php?curid=23743021 . Zelfderechten; geschikt2epaar.
- Kadaster/huisnummerkaart1938Z17, https://hdl.handle.net/21.12133/465C6A184A41416CB5DD1EE39CF9C54B . `supports`: historische noordzijdeNieuwehaven89/perceel737, tenoostenOostmolenstraat en tenwestenNieuwehavensteeg. Modernehuisnummer89nietgebruikt.
- J.Verheul1936, overgenomen doorEngelfriet: https://www.engelfriet.net/Alie/Hans/haringvliet.htm . `supports`: koopmanshuis, laterekantoren, circa1720, LodewijkXIV/Régence, WillemBrouwerkoopt1701oudhuis, gevel12m. **Secundairetranscriptie, origineelVerheulnog niet geopend.** Niet doen alsof dit primaireopmetingis. Geenarchitecttoeschrijven.
- Verheul1935aquarel ingang89 bestaat: https://commons.wikimedia.org/wiki/File:Prent_de_rijkelijk_versierde_ingang_van_het_Koopmanshuis_aan_de_Nieuwehaven_nummer_89_1935.jpg . In deze onderzoekstaak nog niet kunnen ophalen/bekijken. Dus geen kleurclaim eraan ontlenen vóór inspectie.

## Plaatsing en model

`placement.json` bewaart de afgeleide punten. Bronkaartfront handgelezen(3382,2603)–(3447,2588), kadaster737. Affine uit NH59onderzoek geeft doelfront(3926.23,2046.61)–(3942.41,2038.41). Historische doelkaart visueel beoordeeld in `placement-target.png`. Model staat aan de noordkade, laat water/kade vrij. Voor de ruime 12m uit Verheul is de kaartbreedte circa10.8m iets verruimd. Bij definitieveintegratie zijrand aan perceelgrens controleren; globaleplaatsing circa8m onzeker. Geen modernegeocode gebruikt.

`model-draft.json` is city32schematischevoorbouw: breedte12m, diepte16m(geschat), goot19.2m, nok21.4m, schoorsteen23.45m(fotoverhoudingen). Driebovenlagen/3assen, lagerstraatniveau met centraleboogdeur/kolommen en zijopeningen; hoofdingang niet als raam getekend. Voorgevel verfijnder dan blindezijgevels. Rijke middenornamenten slechts als reliëfpanelen; niet authentiekgebeeldhouwd. Geen volledige langwerpigeperceel737 als hooghuis! Achtererf/achterbouwbewustnietgespecificeerd zonder zichtbarebron. Achtergevel RCE20192315maart1940 bekend, download gaf403; geenherhaaldomzeilen.

`nh89-preview.png` bekeken naast origineel. Herkenbaremassa engevelritme, maar deze werkcamera snijdt schoorstenen/grond deels af; parent maakt definitieveQA. Kleuren voorlopig bruinbaksteen/lichtnatuursteen/donkerekap als **interpretatie**, kleurbron nogvalideren. Dakluiken inmodelruimtelijkvereenvoudigd. Nietonmiddellijkbouwklaarverklaren:parentplaatsings/overlapreviewnogvereist.

## Tekstvoorstel (158woorden)

Aan de noordzijde van de Nieuwehaven stond dit hoge koopmanshuis met drie vensterassen en een rijk versierde middenpartij. De boogvormige ingang, stenen zuilen en ornamenten lieten zien dat dit meer was dan een eenvoudig havenpakhuis. Volgens een overgeleverde beschrijving van architect J. Verheul dateerde de gevel van omstreeks1720. Hij plaatste het huis op de overgang van de LodewijkXIV-stijl naar de Régence.

In de jaren dertig was het vroegere woonhuis bij verschillende firma's als kantoorpand in gebruik. Op de foto uit1933 zijn ook handelsactiviteiten op straatniveau te zien: achter de deftige gevel leefde de werkende havenstad voort.

Het pand ging verloren in de verwoesting van mei1940. Toch verdween niet ieder spoor. Het jaarverslag van Museum Boijmans vermeldt dat bergingsploegen gevelfragmenten van Nieuwehaven89 uit het puin haalden. De reconstructie brengt de vroegere voorgevel terug op de historische kade. Hoogten, achterzijde, verfkleuren en vereenvoudigde ornamenten blijven benaderingen; het huidige adresNieuwehaven89 is geen plaatsingsbewijs.

## Extra parentchecks

- Lees kleurbron vóór AI/modelkleuren definitief.
- BronbeschrijvingaanPDMnietverzinnen: RCECCBYSA4 isexpliciet.
- P.DOLK&ZOON op linkerwinkelgedeelte89 zichtbaar; buur87isrechtslager, geenkerk/polikliniekfunctie89afleidenuitbuur.
- Geen claims exactdirectbominslag of huidigegeveloverleving.

## Integratiecontrole

Het model is lokaal geïntegreerd (128 gebouwen), 1142 driehoeken; losse footprint heeft nul overlap met andere losse gebouwpolygonen. Achtergrond opnieuw uitgesneden (972 contouren); GLB/Blend geëxporteerd. Dakluiken zijn na review gesloten; raamroeden per verdieping onderscheiden, middenas voorzien van zijomlijsting. Kleurbron alsnog door parent opgehaald en bekeken: Verheul1935, https://hdl.handle.net/21.12133/B9DF7FB62EF1461FB47D81711D9ACC02 . Roodbruin baksteen, beige/grijs steen, lichte kozijnen en donkerblauwgrijze deuren nu in model verwerkt. Dit vervangt de eerdere notitie dat de aquarel niet kon worden bekeken. AI-kleurcorrectie wordt door parent afgerond; oude tijdelijkeparen niet publiceren zonder die controle. npm run check en npm run test:browser geslaagd; gerichte NH89 desktop/mobiel/Nu3D zonder JS/HTTPfouten/overflow. Nog geen publicatieclaim.
