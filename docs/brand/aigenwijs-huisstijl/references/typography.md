# Typografie

## Inhoud

- De twee fonts
- Fonts laden
- Gewichten
- Type-schaal
- Letter-spacing
- All-caps gebruik
- Headline-accent
- Fallbacks
- Voor print en Office-documenten
- Voor social media

## De twee fonts

**Sora** voor koppen. Geometrisch, zelfverzekerd, modern zonder trendy te zijn. Op Aigenwijs gebruiken we Sora op **medium gewicht (500 tot 600)**, niet op zware bold. Dat oogt strakker en moderner dan de 700/800 die je vaak ziet. Te zwaar? Kies 600, niet 700.

**Geist** voor body. Neutrale, hoog leesbare sans (van Vercel), prettig in lange tekst en UI. Eerder gebruikte Aigenwijs Heebo; dat is vervangen door Geist op web. Houd Geist aan voor consistentie met de huidige website en chat-omgeving.

Beide zijn gratis Google Fonts met Latin Extended voor Nederlandse karakters (é, ë, ï).

> Let op: ouder Aigenwijs-materiaal en oudere skill-versies noemen **Heebo** als body-font. Dat is verouderd. Nieuw werk gebruikt **Geist**.

## Fonts laden

### Next.js (next/font), aanbevolen op web
```tsx
import { Sora, Geist } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});
```
Zet `${sora.variable} ${geist.variable}` op `<html>` en koppel via CSS-variabelen (zie `code-snippets.md`).

### Google Fonts via HTML (snel, voor losse pagina's)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Gewichten

**Sora:**
- 600 (SemiBold) voor de meeste koppen (H1 tot H3) en hero-titels.
- 500 (Medium) voor rustige koppen en sectie-titels in een lichter ritme.
- 700 (Bold) spaarzaam, alleen waar een kop echt moet knallen.
- 400 (Regular) voor display-quotes als bewuste stijlkeuze.

Vuistregel: begin op 500 of 600. Voegt 700 niets toe, laat het.

**Geist:**
- 400 (Regular) voor body.
- 500 (Medium) voor lichte nadruk en kleine UI-labels.
- 600 (SemiBold) voor inline-bold en knop-labels.

## Type-schaal

Een fluid schaal werkt het best op web (groottes schalen mee met het scherm via `clamp()`). De richtwaarden, met grootte van klein naar groot:

| Naam | Grootte (px) | Line-height | Font / gewicht | Gebruik |
|---|---|---|---|---|
| Display | 44 tot 80 (fluid) | 1.0 tot 1.05 | Sora 500/600 | Hero-kop op landing |
| H1 | 36 tot 56 | 1.05 | Sora 600 | Pagina-titel |
| H2 | 28 tot 42 | 1.12 | Sora 600 | Sectie-titel |
| H3 | 20 tot 24 | 1.25 | Sora 600 | Sub-sectie, kaart-titel |
| Lead | 19 tot 22 | 1.55 | Geist 400 | Intro-paragraaf |
| Body | 17 | 1.65 | Geist 400 | Standaard bodytekst |
| Meta | 12,5 | 1.5 | Sora 500, uppercase, +0.08em | Labels, captions |
| Eyebrow | 12,5 | n.v.t. | Sora 600, uppercase, +0.1em, paars (op licht; op donker vlak groen, zie layout-grid.md) | Sectie-aanduiding boven een kop |

Voor statische middelen (slides, print) kun je vaste px-waarden uit het bovenste deel van elk bereik nemen. Op mobile schaal display/H1 ongeveer 25 tot 30% kleiner.

**Vuistregels:**
- **Leading kantelt:** strak op groot (1.0), ruim op klein (1.65). Body nooit onder 1.5.
- **Negatief tracking schaalt mee:** ongeveer min 0.035em op display, naar 0 op body.
- **Regellengte 45 tot 75 tekens, ~66 optimaal.** Body max 60ch, intro max 58ch. Nooit volle breedte.
- **Eyebrow heeft geen eigen ondermarge:** geef hem expliciet ruimte (ongeveer 18px) onder zich, anders plakt hij op de titel.

## Letter-spacing

- Sora-koppen: min 0.03em op groot (display), min 0.01em op middel, 0 op klein.
- Geist-body: standaard 0, nooit gespreid.
- All-caps labels: +0.08em tot +0.1em voor leesbaarheid.

## All-caps gebruik

Spaarzaam. Werkt voor kleine labels en eyebrows (Sora 500/600, met letter-spacing). Niet voor koppen (gebruik gewicht, geen capslock) of lopende tekst. **Nooit all-caps op zin-lange tekst** zoals bio's of omschrijvingen.

## Headline-accent

Eén woord in een kop highlighten in `paars` (op licht) of `groen` (op donker/paars). Eén accentwoord per kop, niet meer.

## Fallbacks

```css
font-family: 'Sora', 'Inter', system-ui, -apple-system, sans-serif;
font-family: 'Geist', 'Inter', system-ui, -apple-system, sans-serif;
```
Inter is een prima visuele fallback. Niet Arial/Helvetica als eerste fallback, die breken het ritme.

## Voor print en Office-documenten

Sora en Geist werken in PDF, embed de fonts bij grote drukoplages. Voor Word (offertes, briefpapier) is Sora bij de ontvanger niet altijd aanwezig: gebruik Calibri als fallback voor koppen en geef aan dat de huisstijl Sora vraagt.

## Voor social media

In Canva/Figma of als export: minimaal 2x de displaygrootte renderen, zodat typografie scherp blijft op retina. Upload Sora en Geist als merk-fonts in de tool.
