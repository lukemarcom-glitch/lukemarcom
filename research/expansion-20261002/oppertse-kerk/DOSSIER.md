# Oppertse kerk en pastorie — actueel onderzoeksdossier

2 oktober 2026. Kerk- en pastorieverlies primair bewezen. Vrije gevelfoto en AI-paar gekoppeld. Pastorie 107–109 lokaal gemodelleerd; definitieve browsercontrole en publicatie door parent.

## Identiteit en adressen

**Pastorie Oppert107 = perceel776.** De primaire [Voorloopige monumentenlijst1915,p340–341,onderdeelgB70](https://www.dbnl.org/tekst/_voo016voor12_01/_voo016voor12_01_0134.php) noemt expliciet de pastorie van de Oud-Katholieke St.-Laurenskerk, met gevel1791 en breed middenfronton. RCElabel “VoormaligeParadijskerk” is dus misleidend.

**Oppert109 = smalle voorbouw/entree op perceel771**, direct naast776. De aquarelcaption107–109 ondersteunt dat de brede gevelcompositie die entree omvat. Nummer111 is de buur ernaast. Oppert103/105 zijn afzonderlijke panden en horen niet bij dit model. De kerk achter de pastorie staat op **perceel2099**, met een eigen front aanLangeTorenstraat. Haar huisnummer is hier nog niet primair bevestigd.

[Eigen parochiegeschiedenis](https://paradijskerk.oudkatholiek.nl/over-ons/de-geschiedenis-van-de-parochie-van-de-hh-petrus-en-paulus/) onderscheidt OppertseLaurentius/MariaMagdalenakerk, de oudeParadijskerk en de vervanger uit1910. De bredeOppertfoto staat daar als schuilkerkOppert, maar1915inventaris maakt de functie **pastorie** precies. Geenverwisseling metHouttuinLaurentius ofGroteLaurenskerk.

## Verliesbewijs

SARXXXIII-568-01-23,collectie4287,juli–december1940: https://hdl.handle.net/21.12133/122472088D464CBCAB9C5323AEC1702D . Recordzelfgelezen/opgeslagen `loss.html`/`.txt`, identificeert oud-katholiekeSintLaurentiuskerk LangeTorenstraat in door bombardement14mei1940 getroffen gebied. AanvullendSAR1980-5148 noemtOppertsekerk expliciet; permanente link daarvan nog niet verkregen. Parochiegeschiedenis noemt eveneensverliesOppertsekerk14mei. **Diekerkbronnen niet automatisch als individueelverliesbewijs van elkpastoriepand behandelen.**

## Vrij fotopaar en referentie

`rce20192355.jpg`2110×2880: C.Hoogendijk/RCE20192355,CCBYSA4.0. [Commons](https://commons.wikimedia.org/wiki/File:Gevel_van_voormalige_katholieke_schuilkerk_-_Rotterdam_-_20192355_-_RCE.jpg), metadata `rce-photo-metadata.json`. Opnamejaar onbekend. Ongewijzigde foto toontpastoriegevel; AI-afgeleide behoudtCCBYSA4.0. Parent heeft afzonderlijke kleurproef/prompt/controle bewaard.

SAR4080XVIII-410-02,RaoulHermans1940, aquarel107–109: [record](https://www.archieven.nl/nl/zoeken?mivast=0&mizig=247&miadt=184&miview=ldt&micode=4080&minr=39806204&miaet=14). Parent bekeek deze als vorm/kleurreferentie; nietgedownloadofgepubliceerd wegensrestrictieverechten. Donkerbruinmetselwerk,gebrokenwitkozijnen/lijst,donkerblauwgroenedeuren,donkerhek; langkapdak,2dakkapellen,2schoorstenen. Kleuren blijven schilderinterpretatie. Details/herkomst in `hermans-colour-reference.json`.

## Geometrievoorbereiding

SAR4001/40110-Z8,sectieK1938: https://hdl.handle.net/21.12133/2D641F4B5AE14C008740B00DF7B61BCB . Volledige scan `house-map-Z8.jpg`, vergrote primaire nummercontrole `number-check.jpg`. Rodevoorbouw107/776 enblauwekerk2099 matchen via herkenbare aangrenzendepercelen de bestaande vooroorlogsewerkkaart; groene771voorbouw is toegevoegd. `place-draft.py`, `placement-draft.json`, `placement-overlay.jpg`.

Pastorie107: center[-105.228476,461.654808], hoofdbreedte11.94m/diepte13.42m;±5m. 109voorbouw circa3.60m breed en circa8.8m diep, conservatieveafkapping (geencomplete771achterbouw). Kerkcontourcontext±6m, geenkerkmodel. Model+z isgerichtnaarOppert/noordoost. De pastorie is als eigen model uitgewerkt; de kerk erachter niet.

`facade-specification.json` beschrijft **7verticalevensterassen** inclusief109linkerentree, niet8/9. Doorgaande3bouwlagen, centrale1791fronton,tweedeuren,hek,2dakkapellen/2schoorstenen; hoogtesgoot12.2/nok15m zijn proportieschattingen ±3m. Zeven assen aan foto getoetst; fijn beeldhouwwerk vereenvoudigd tot neutraal ovaal. Hek met vrije doorgang bij deur 107.

## Vervallen onderzoekslezingen

Eerdere1209wasverkeerdgelezen; leidend2099. Eerdere103/105/107alséénvoorbouw is onjuist; leidend107alleenop776,109op771. SecundairLangeTorenstraat47wordtnietgebruikt. Deze hypothesen zijngeenactieveplaatsingsgegevens.

## Rechtstreeks pastorieverlies gevonden — 2 oktober 2026

Zie `VERLIESBEWIJS-PASTORIE.md`. De Nederlander11juni1940 noemt expliciet de kerk **met pastorie aan den Oppert** als verwoest bij het bombardement: https://resolver.kb.nl/resolve?urn=MMKB15:000703032:mpeg21:a00009 . Originele krantenpagina en leesuitsnede zijn visueel gecontroleerd. Het Vaderland12juni1940 bevestigt de pastorie met ingangOppert en verlies van haar inhoud: https://resolver.kb.nl/resolve?urn=ddd:010019090:mpeg21:a0168 . Het eerdere open punt over uitsluitend kerkgebonden verliesbewijs is hiermee opgelost. Huisnummer107 komt uit de bestaande monumentenlijst1915; dag14mei uit de bestaande SAR-verliesbron. Geen huisnummer of exacte dag aan de krant toeschrijven waar die niet worden genoemd.


## Lokaal model en onzekerheid

`build-draft.py` en `modelSpec-draft.json` bouwen het voorhuis met zeven assen. Entree 109 blijft 8,79 m diep; de achterste delen van perceel 771 zijn niet gevuld. De kapovergang is een benadering, omdat foto en aquarel geen volledige achterzijde tonen. `pastorie-preview.png` is visueel gecontroleerd. AI01 is gebruikt; AI02 is door parent afgekeurd. Schrift en fijn beeldhouwwerk in de AI zijn geen bewijs.
