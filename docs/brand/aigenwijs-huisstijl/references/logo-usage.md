# Logo gebruik

## Inhoud

- Beschikbare varianten
- Logo-vorm
- Minimum-formaat
- Clear space
- Plaatsing
- Wat niet te doen
- Op gekleurde achtergronden
- De bolt-separator
- Favicon
- OG image

## Beschikbare varianten

Alle in `assets/logos/`:

| Bestand | Kleur | Wanneer |
|---|---|---|
| `aigenwijs-logo-white.svg` | Wit | Op zwart, antraciet, donkere foto's, paars vlak |
| `aigenwijs-logo-anthracite.svg` | Antraciet | Op wit, lichte foto's, groen vlak |
| `aigenwijs-logo-black.svg` | Zwart | Op wit waar je harder contrast wil dan antraciet |
| `aigenwijs-logo-purple.svg` | Paars | Decoratief, als merk-illustratie |
| `aigenwijs-logo-green.svg` | Groen | Decoratief, alleen op zwart |
| `aigenwijs-logo-email.png` | Antraciet, raster | E-mail-signatures, mail-clients zonder SVG-support |

Op de website zelf heten de bestanden `/logo.svg` (wit) en `/logo-dark.svg` (donker); dat is dezelfde set in de Next.js-public-map.

## Logo-vorm

Het Aigenwijs-logo is een woordmerk: de letters "aigenwijs" in een eigen vorm. Geen los symbool, geen icon. Het leest als één geheel en blijft altijd intact. Onderdelen losknippen, herrangschikken, of een deel als symbool eruit halen: niet doen.

## Minimum-formaat

| Context | Minimum breedte |
|---|---|
| Digitaal (web, app) | 80px |
| Print | 20mm |
| Favicon en kleine icons | gebruik de favicon-set, niet het volledige logo |

Onder deze maat wordt het logo onleesbaar. Val dan terug op de favicon.

## Clear space

Houd rondom het logo een vrije zone gelijk aan de hoogte van de "a" in "aigenwijs". Geen tekst, iconen of containerranden binnen die zone. Praktisch: logo 100px hoog betekent ongeveer 25 tot 30px vrije ruimte rondom.

## Plaatsing

- **Linksbovenin** is de standaard in headers en briefpapier. Een conventie waar mensen op rekenen.
- **Linksonderin of midden-onder** op afsluitende slides, video-end-cards, poster-onderkant.
- **Niet centraal in een hero.** Het logo is geen hero-element; tekst is de hero. Het logo zit aan de rand.

Standaardmaten op web: nav ongeveer 44px hoog, footer ongeveer 48px hoog.

## Wat niet te doen

| Fout | Waarom niet |
|---|---|
| Logo uitrekken | Vervorming, onprofessioneel |
| Logo kantelen | Niet in deze stijl |
| Gradient over het logo | Vlakke kleuren only |
| Outline om het logo | Maakt het zwaarder, niet stoerder |
| Drop-shadow | Voelt gedateerd |
| Recoloren buiten het palet | Niet roze, oranje, of wat-dan-ook anders |
| Logo op drukke foto zonder overlay | Onleesbaar |
| Logo in een wit kadertje op gekleurde achtergrond | Plak het niet in een doos, gebruik de juiste kleurvariant |
| Logo + tagline als één blok | Het logo staat op zichzelf, taglines zijn aparte typografie |

## Op gekleurde achtergronden

| Achtergrond | Logo |
|---|---|
| Wit | anthracite of black |
| Antraciet | white |
| Zwart | white |
| Paars | white |
| Groen | anthracite of black (nooit wit) |
| Rood | white |
| Geel | anthracite of black |
| Foto, donker | white (overweeg overlay) |
| Foto, licht | anthracite (overweeg overlay) |

## De bolt-separator

`assets/separators/separator-bolt.svg` is een breed banner-element met een bliksem-knik. De bolt is op Aigenwijs **uitsluitend een sectie-separator**, geen los merk-icoon. Gebruik:

- Als overgang tussen secties, vooral tussen een licht en een donker vlak (op de website: de footer-bovenrand).
- Als grafisch ritme-element op een poster.

Niet voor: decoratie zonder reden, op elke pagina-overgang (verliest dan z'n functie), gekleurd of vervormd buiten het palet. De bolt werkt door zeldzaamheid; staat hij overal, haal de helft weg.

## Favicon

`assets/favicon/` is een complete set:
- `favicon.ico` (multi-size, oude browsers)
- `favicon-16x16.png`, `favicon-32x32.png` (browser-tabs)
- `apple-touch-icon.png` (180x180, iOS home-screen)
- `android-chrome-192x192.png`, `android-chrome-512x512.png` (Android, PWA)
- `site.webmanifest` (PWA-manifest)

Voor een nieuwe Aigenwijs-site: kopieer de hele map naar `public/` en voeg in `<head>` toe:
```html
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="manifest" href="/favicon/site.webmanifest">
<link rel="shortcut icon" href="/favicon/favicon.ico">
```

## OG image

`assets/og-image.png` is het default Open Graph-beeld voor social shares. Wijzig dit per pagina als die een eigen visual heeft; voor algemene shares is dit het default.
```html
<meta property="og:image" content="https://aigenwijs.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
```
Let op: de live website genereert per trainingspagina een eigen OG-kaart in de merkkleuren. Het bundel-beeld hier is het generieke default; check de site voor het actuele paginabeeld.
