---
name: aigenwijs-huisstijl
description: "Het Aigenwijs-designsysteem en de huisstijl, met logo, kleuren, typografie (Sora + Geist), grid, spacing en ontwerpregels; het mediumneutrale merk-fundament. Activeer bij directe huisstijlvragen: 'iets in de Aigenwijs-stijl', 'het logo', 'de huisstijl', 'de kleuren', 'het designsysteem', het bolt/bliksem-element, de fonts (Sora, Geist), bij het beoordelen of iets on-brand is, of wanneer een Aigenwijs-bestand visueel moet matchen met bestaand werk. Bij het MAKEN van iets visueels is de medium-skill de ingang en levert deze skill de regels: slides via aigenwijs-presenter, video en animatie via aigenwijs-video, PDF's via aigenwijs-pdf, social-berichten via aigenwijs-socialtool; roep deze skill daar als naslag bij aan. Voor de website-implementatie in code zie aigenwijs-website."
---

# Aigenwijs Designsysteem

De visuele identiteit van Aigenwijs: AI-trainingsbedrijf voor Nederlandse professionals. Stoer, betrouwbaar, direct, no-nonsense, toegankelijk. Geen corporate look, geen generieke AI-vibe.

Dit is het **mediumneutrale fundament** dat geldt voor elk middel: slide, social post, e-mail, poster, website of web-app. De website en de chat-oefenomgeving bouwen hierop voort met hun eigen code-implementatie (zie de skill `aigenwijs-website` voor de marketingsite).

## Snelle kerngegevens

**Kleuren (HEX)**
- Paars `#7100F6` (primair merkaccent)
- Groen `#00FF95` (actie/CTA, met een belangrijke regel, zie onder)
- Ink `#1A1815` (primaire tekst op licht)
- Zwart `#000000` (hero- en gewicht-vlakken)
- Wit `#FFFFFF` (basisvlak, lichte secties)
- Zacht-grijs `#F7F7F8` (rustig wisselvlak)
- Rood `#F15A24` / Geel `#FFE599` (alleen functioneel resp. zacht accent, spaarzaam)

**Typografie**
- Koppen: **Sora**, gewicht **500-600** (medium/semibold, niet zwaar bold)
- Body: **Geist**
- Beide Google Fonts. Fallback: `system-ui`, daarna Inter.

**Logo**: `assets/logos/aigenwijs-logo-*.svg` in vijf varianten (white, anthracite, black, purple, green) + email-PNG.

**Favicon-set**: `assets/favicon/` (16, 32, 192, 512, apple-touch, .ico, webmanifest).

**Bolt-separator**: `assets/separators/separator-bolt.svg` (bliksem-knik, sectie-separator, geen los icoon).

## De drie ontwerpprincipes

1. **Minimalisme en focus**: weinig elementen, veel ruimte. Elk element moet waarde toevoegen.
2. **Eenvoud boven decoratie**: geen versiering om de versiering.
3. **Krachtige typografie**: tekst doet het zware werk, niet de illustratie.

Geen afvinklijst maar filters. Twijfel je over een element? Vraag of het iets toevoegt of alleen ruimte vult. Het tweede: weg ermee.

## De vibe in één zin

Aigenwijs ziet eruit zoals het klinkt: stoer en helder, met paars of groen op zwart of wit, scherpe typografie, en zonder de glanzende-AI-pitch-deck look die je overal ziet.

## De groen-regel (geldt merk-breed)

Groen `#00FF95` is fel en fluorescerend. Het haalt op wit nauwelijks contrast (groene tekst op wit = ~1,7:1, faalt zelfs voor grote tekst). Daarom één vaste regel op elk medium:

- **Groen als vlak met donkere tekst mag overal**: een groene CTA-knop of -blok met zwarte/inkt-tekst erop is prima (zwart op groen ~14,7:1).
- **Groen als tekst of accentkleur alleen op zwart of paars.** Nooit groene lopende tekst of groene accenten op wit of licht.

Dit is een toegankelijkheidsregel, geen smaak. Hij geldt voor slides, social en e-mail net zo goed als voor de website.

## Waar je de details vindt

Lees alleen wat de taak vraagt:

- **Kleuren gebruiken, combineren, contrast, tokens**: `references/colors.md`
- **Fonts laden, gewichten, type-schaal**: `references/typography.md`
- **Logo plaatsen, minimum-size, clear-space, bolt, favicon, og-image**: `references/logo-usage.md`
- **Grid, 8pt-spacing, witruimte, pagina-/slide-ritme**: `references/layout-grid.md`
- **Foto kiezen, sectorlabels, rollen en gezichtenstatus**: `references/fotos.md`
- **Lay-out-houding, "AI-look" vermijden, motion-principes**: `references/design-principles.md`
- **Kant-en-klare code (CSS-variabelen, Tailwind v4, Next.js fonts)**: `references/code-snippets.md`

## Beslisboom: welk logo waarop?

| Achtergrond | Gebruik |
|---|---|
| Wit of lichte foto | `aigenwijs-logo-anthracite.svg` (of `-black.svg` voor harder contrast) |
| Zwart, antraciet, donkere foto | `aigenwijs-logo-white.svg` |
| Paars vlak | `aigenwijs-logo-white.svg` |
| Groen vlak | `aigenwijs-logo-anthracite.svg` of `-black.svg` (nooit wit, te weinig contrast) |
| E-mail-signature, presentatie-rand | `aigenwijs-logo-email.png` of `-anthracite.svg` |
| Decoratief als merk-illustratie | `aigenwijs-logo-purple.svg` of `-green.svg` |

Plaats het logo nooit op een drukke foto zonder donker overlay. Nooit gekanteld, uitgerekt, met schaduw, met outline, of in een andere kleur dan de geleverde varianten.

## Beslisboom: welke kleurcombinatie?

De betrouwbare combinaties:

1. **Zwart of antraciet + paars-accent + wit-tekst** (hero's, donkere blokken). Paars als accent, niet als achtergrond van grote tekstvlakken.
2. **Wit + ink + paars-accent** (lichte content). Groen hier alléén als knop/vlak met donkere tekst, niet als tekstaccent.
3. **Paars-vlak + wit + groen-accent** (eind-CTA, statement-blok).
4. **Zwart + groen** (high-impact, social ads). Spaarzaam: hard contrast, wordt schreeuwerig bij overgebruik.

Vermijd: paars en groen direct op elkaar (vibreren), rood en groen samen, geel als hoofdkleur, gradient-achtergronden.

## Wat we niet doen

- Geen gradient-achtergronden (paars-naar-roze, blauw-naar-paars). De merkkleuren zijn vlak.
- Geen 3D-glassmorphism, neon-glow, of "AI-cyber" esthetiek.
- Geen stockfoto's van robots, breinen met circuits, of handen met holografische schermen.
- Geen em-dashes in tekst op visuals. Herschrijf de zin met een komma of een punt, en ruil de dash niet in voor haakjes; dan blijft dezelfde onderbreking staan.
- Geen Title Case in headings. Normale zinkapitalisatie.
- Geen vervangende fonts voor Sora/Geist. Niet beschikbaar? Fallback Inter, niet willekeurig iets anders.

## Snelle checklist voor elk ontwerp

1. Klopt het logo (juiste variant, niet vervormd, genoeg ruimte)?
2. Komen de kleuren exact uit het palet?
3. Staat de groene kleur alleen als vlak-met-donkere-tekst, of als accent uitsluitend op zwart/paars?
4. Staat de tekst in Sora (koppen, 500-600) en Geist (body)?
5. Eén duidelijke kernboodschap, of zit je vol te stoppen?
6. Heeft het de Aigenwijs-vibe (stoer, helder) of de generieke AI-startup-vibe (gradients, glow, complex)?

Bij twijfel op een ervan: terug naar het ontwerp, niet "het is goed genoeg".
