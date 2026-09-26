# Code snippets

Kant-en-klare code om de huisstijl in een web-project te zetten. Afgestemd op de huidige stack (Tailwind v4, Next.js, Geist). Voor de volledige website-implementatie zie de skill `aigenwijs-website` en `docs/design-system.md` in de repo.

## Inhoud

- CSS custom properties
- Tailwind v4 (CSS-first via @theme)
- Next.js fonts laden (App Router)
- Hero-sectie (Aigenwijs-stijl)
- Inline-SVG logo (voor recoloring of animatie)
- E-mail-signature
- Figma / Canva

## CSS custom properties

```css
:root {
  /* Merkkleuren */
  --color-purple: #7100F6;
  --color-purple-deep: #5B00C4;
  --color-purple-soft: #B392FF;
  --color-green: #00FF95;

  /* Neutralen */
  --color-ink: #1A1815;
  --color-ink-soft: #5A544C;
  --color-muted: #6A655E;
  --color-black: #000000;
  --color-anthracite: #212121;
  --color-white: #FFFFFF;
  --color-bg-soft: #F7F7F8;
  --color-line: #D7D9E6;

  /* Signaal */
  --color-red: #F15A24;
  --color-red-deep: #9A3412;
  --color-yellow: #FFE599;

  /* Fonts */
  --font-heading: 'Sora', 'Inter', system-ui, sans-serif;
  --font-body: 'Geist', 'Inter', system-ui, sans-serif;

  /* Radius (geen pills) */
  --radius-button: 10px;
  --radius-chip: 13px;
  --radius-card: 16px;
}

body {
  font-family: var(--font-body);
  color: var(--color-ink);
  background: var(--color-white);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  font-weight: 600;            /* medium/semibold, geen zware bold */
  letter-spacing: -0.02em;
  line-height: 1.1;
}
```

## Tailwind v4 (CSS-first via @theme)

De huidige projecten draaien Tailwind v4: tokens via `@theme` in `globals.css`, geen `tailwind.config.ts`.

```css
@import "tailwindcss";

@theme {
  --color-purple: #7100F6;
  --color-purple-deep: #5B00C4;
  --color-purple-soft: #B392FF;
  --color-green: #00FF95;
  --color-ink: #1A1815;
  --color-ink-soft: #5A544C;
  --color-muted: #6A655E;
  --color-bg-soft: #F7F7F8;
  --color-line: #D7D9E6;
  --color-red: #F15A24;
  --color-red-deep: #9A3412;
  --color-yellow: #FFE599;

  --font-heading: var(--font-sora), 'Inter', system-ui, sans-serif;
  --font-body: var(--font-geist), 'Inter', system-ui, sans-serif;
}
```
Daarna werken classes als `bg-purple`, `text-ink`, `bg-bg-soft`, `font-heading`, en opacity-modifiers als `text-white/82` of `bg-purple/10`.

## Next.js fonts laden (App Router)

```tsx
// app/layout.tsx
import { Sora, Geist } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${sora.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

## Hero-sectie (Aigenwijs-stijl)

```tsx
export function Hero() {
  return (
    <section className="bg-black text-white px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading font-semibold text-5xl md:text-7xl leading-[1.05] tracking-tight">
          AI met verstand <br /> en vertrouwen
        </h1>
        <p className="font-body text-lg md:text-xl mt-6 max-w-2xl text-white/80">
          Wij trainen Nederlandse professionals om AI effectief en verantwoord
          in te zetten. Hands-on, geen death by PowerPoint.
        </p>
        {/* Groene CTA met zwarte tekst: groen als vlak mag, ook hier op zwart */}
        <a
          href="/contact"
          className="inline-block mt-10 bg-green text-black font-body font-semibold px-8 py-4 rounded-[10px] hover:bg-green/90 transition"
        >
          Plan een kennismaking
        </a>
      </div>
    </section>
  );
}
```

## Inline-SVG logo (voor recoloring of animatie)

```tsx
function AigenwijsLogo({ className = '', fill = 'currentColor' }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 672.8 358.3" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Aigenwijs">
      {/* Plak de <path>-elementen uit assets/logos/aigenwijs-logo-anthracite.svg
          en zet er fill={fill} of fill="currentColor" op om de kleur via CSS te sturen. */}
    </svg>
  );
}
```

## E-mail-signature

```html
<table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Geist', Arial, sans-serif; color: #1A1815; font-size: 14px; line-height: 1.5;">
  <tr>
    <td style="padding-right: 16px; vertical-align: top;">
      <img src="https://aigenwijs.com/email/logo.png" alt="Aigenwijs" width="120" style="display: block;">
    </td>
    <td style="border-left: 2px solid #7100F6; padding-left: 16px; vertical-align: top;">
      <strong style="font-family: 'Sora', Arial, sans-serif; font-weight: 600;">Eric Kalsbeek</strong><br>
      Oprichter &amp; trainer<br>
      <a href="mailto:hallo@aigenwijs.com" style="color: #7100F6; text-decoration: none;">hallo@aigenwijs.com</a><br>
      <a href="https://aigenwijs.com" style="color: #7100F6; text-decoration: none;">aigenwijs.com</a>
    </td>
  </tr>
</table>
```
Gebruik de PNG-versie van het logo voor e-mail; veel clients renderen SVG slecht.

## Figma / Canva

Color styles:
- `brand/purple` `#7100F6`, `brand/purple-deep` `#5B00C4`, `brand/purple-soft` `#B392FF`
- `brand/green` `#00FF95`
- `ink` `#1A1815`, `ink-soft` `#5A544C`, `muted` `#6A655E`
- `black` `#000000`, `white` `#FFFFFF`, `bg-soft` `#F7F7F8`, `line` `#D7D9E6`
- `signal/red` `#F15A24`, `signal/red-deep` `#9A3412`, `signal/yellow` `#FFE599`

Text styles (Sora koppen op 600, Geist body):
- `display` Sora SemiBold, groot
- `h1` Sora SemiBold
- `h2` Sora SemiBold
- `h3` Sora SemiBold
- `body` Geist Regular 17/28
- `meta` Sora Medium 12,5, uppercase, +0.08em

Upload Sora en Geist als merk-fonts in de Canva brand kit.
