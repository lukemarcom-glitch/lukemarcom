# Westelijke singels en oostelijke havens — controle

Bron: ongewijzigde `site/onderzoek/centrum-voor-mei-1940.jpg`, 6481×5098 pixels. Handmatige intekening; geen exacte hydrografische meting. Gemiddeld enkele meters lijnonzekerheid, bij de fijnere Buizengat-industriekades circa 5–10m. De kaart combineert de oude stad met een later plan; daarom gebouwen, spoorbanen en gazons niet als water opgevat.

Opgeleverd: `edge-extra.json`, 6 gebieden/9 geldige polygonen; `edge-extra-overlay.jpg` en `edge-east-review.jpg`. Script `trace-edge-extra.py` maakt deze opnieuw.

- Westersingel: vier aparte waterdelen, droge gazonstroken en bruggen behouden. Geen speculatieve verlenging voorbij het zichtbare einde bij ca y3590.
- Diergaardesingel: smalle kronkelende waterloop langs diergaarde. Niet het hele straatprofiel. Bekende historische waterverbinding diergaarde: https://oudewesten.wordpress.com/een-zeeleeuw-in-de-diergaardesingel/ .
- Spoorsingel: de doorlopende binnenste waterfiguur; plantsoenstroken westelijk droog. Provenierssingel/Statensingel nog niet uitgewerkt.
- Boerengat: emplacement Maasstation droog, Boslandbrug droog. Westelijke aansluiting Oude Oostplein heeft de grootste lokale onzekerheid.
- Buizengat: oude industriële inhammen benaderd; gevels/roze bouwvlakken zoveel mogelijk ontzien. Medium zekerheid, dus geen exact kadasterclaim.
- Schiedamse Vest: uitsluitend water beneden Witte de Withstraat. Noordelijke Gedempte Vest blijft droog. Primaire bouwhistorische analyse bevat een foto van de bevroren Vest uit1940 en benoemt demping met puin na bombardement: https://repository.officiele-overheidspublicaties.nl/Bijlagen/TerInzageLegging/2024/til-2024-13938/1/bijlage/16.231110_Rapport_Crimson.pdf . Ook gemeentelijke MIP-beschrijving: https://020apps.nl/mip/beschrijvingen/Rotterdam.pdf .

Shapely: alle polygonen geldig. Geen overlap met river.json of north-extra.json. Eén kleine raak-overlap van39.64px² met parent Haringvliet bij westzijde Boerengat; bij integratie verschil aftrekken of als aangrenzend water union gebruiken. Niet dubbel als transparante vlakken renderen. Geen runtimebestanden gewijzigd.
