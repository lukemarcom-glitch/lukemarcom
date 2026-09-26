# Ontwerpprincipes

Wat Aigenwijs visueel onderscheidt is een houding, niet één signature-element: stoer en helder, niet aangekleed. De praktische lay-out- en grid-regels staan in `layout-grid.md`; dit document gaat over de houding en over beweging.

## Inhoud

- 1. Typografie doet het zware werk
- 2. Vlakke kleur, scherpe rand
- 3. Hoog contrast, geen subtiele tinten
- 4. Geen "AI-look"
- 5. Animatie is functioneel, niet decoratief
- 6. Het bolt-element is een wink, geen statement
- 7. Textuur
- 8. Icoonsysteem
- Checklist bij elk ontwerp

## 1. Typografie doet het zware werk

Sora in een medium gewicht, op zichzelf, met veel ruimte eromheen, vertelt al wat Aigenwijs is: zelfverzekerd, helder, geen poespas. Vertrouw op typografie. Voeg geen illustratie toe als de tekst het al kan zeggen. Een goede Aigenwijs-poster kan bestaan uit een zwart vlak, een grote witte Sora-kop en een klein logo links-onder. Klaar.

## 2. Vlakke kleur, scherpe rand

Geen gradients, geen vervaagde randen, geen glow. Het palet is vlak, vormen zijn helder afgebakend. Dit onderscheidt de huisstijl van de gemiddelde AI-startup-look (die altijd in paars-naar-roze gradient drijft). Uitzondering: een zachte schaduw onder een kaart in een UI mag, als functionele diepte, niet als decoratie.

## 3. Hoog contrast, geen subtiele tinten

Aigenwijs werkt niet met grijswaarden, maar met hard contrast: zwart of wit met een merkkleur. Twijfel je tussen lichtgrijs en wit, kies wit. Tussen donkergrijs en zwart, kies zwart of het officiële antraciet.

## 4. Geen "AI-look"

Wat we vermijden, want het is overal en zegt niks specifieks:

- Gradients in paars-roze of blauw-paars
- Holografische effecten en "cyber"-typografie met glow of fake-glitch
- Robothanden, breinen met circuits, code-regens
- Iconen van neurale netwerken als achtergrond
- 3D-renders van pastel-bollen of -kubussen
- Glassmorphism (doorzichtige glazen kaarten met frosted blur)

Dit zijn signalen dat een merk "AI" wil roepen zonder iets te zeggen. Aigenwijs zegt iets, dus de visuals zijn net zo direct als de tekst.

## 5. Animatie is functioneel, niet decoratief

Beweegt iets, dan heeft het een reden: aandacht naar een CTA, een transitie tussen secties, een hover-state. Geen animatie omdat het kan.

- **Snelheden:** 200 tot 300ms voor UI-transities en hovers, 400 tot 900ms voor scroll-onthullingen.
- **Easing:** `ease-out` of een zachte custom curve (bijv. `cubic-bezier(0.16, 1, 0.3, 1)`). Geen bouncy, geen elastic.
- **Dosering:** hover subtiel (lichte lift, pijl-verschuiving, kleurwissel). Load-animaties alleen op de hero; de rest onthult via scroll.
- **Toegankelijk:** respecteer `prefers-reduced-motion`. Autoplay (carrousels, sliders) is altijd pauzeerbaar en staat uit bij reduced-motion.

## 6. Het bolt-element is een wink, geen statement

De bolt-separator is een subtiel merk-cue, niet de hoofdpersoon. Gebruik hem waar hij ritme toevoegt (een overgang tussen licht en donker), niet als versiering. Staat hij op elke pagina, slide of grafiek, haal de helft weg. Hij werkt door zeldzaamheid. Zie `logo-usage.md`.

## 7. Textuur

De kruisjes-textuur geeft een donker vlak merkdetail zonder er illustratie van te maken. Gebruik hem alleen op zwarte, antracieten of paarse vlakken. Nooit op licht.

- Tile: 36 bij 36px.
- Kruis: 8 bij 8px, gecentreerd in de tile.
- Lijn: wit, stroke-width 1.
- Opacity: 0.14.
- Masker rechtsonder: `radial-gradient(ellipse 90% 70% at 90% 100%, black 0%, transparent 70%)`.
- Gespiegelde variant linksonder: vervang `90% 100%` door `10% 100%`.

Exacte CSS:

```css
.cross-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-size: 36px 36px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><g stroke='%23ffffff' stroke-width='1' fill='none'><line x1='14' y1='14' x2='22' y2='22'/><line x1='22' y1='14' x2='14' y2='22'/></g></svg>");
  opacity: 0.14;
  -webkit-mask-image: radial-gradient(ellipse 90% 70% at 90% 100%, black 0%, transparent 70%);
  mask-image: radial-gradient(ellipse 90% 70% at 90% 100%, black 0%, transparent 70%);
}

.cross-pattern--bl {
  -webkit-mask-image: radial-gradient(ellipse 90% 70% at 10% 100%, black 0%, transparent 70%);
  mask-image: radial-gradient(ellipse 90% 70% at 10% 100%, black 0%, transparent 70%);
}
```

### Printbeperking in WeasyPrint 69

De data-URI-SVG rendert als vectorpatroon. `mask-image` rendert niet: WeasyPrint
negeert de property en toont het patroon zonder fade. Gebruik in print dus het
vlakke patroon, of leg op een zwart vlak deze radial-gradient over het patroon:

```css
.cross-pattern--print::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 90% 70% at 90% 100%,
    transparent 0%,
    #000 70%
  );
}
```

Deze overlay-fade is gerenderd en visueel gecontroleerd op 23 juli 2026. Gebruik
op antraciet of paars dezelfde aanpak met exact de kleur van het onderliggende
vlak. Kan dat niet betrouwbaar, kies dan het patroon zonder fade.

## 8. Icoonsysteem

Gebruik Lucide als vaste icoonfamilie: `lucide-static` via npm voor losse SVG-bestanden en `lucide-react` op web. Houd de stroke overal op 2px.

| Medium en rol | Maat |
|---|---:|
| Web, inline naast tekst | 18px |
| Web, zelfstandig | 22 tot 24px |
| Print, blok-icoon boven een kop | 5,5mm |
| Print, lijst-icoon in een vaste flexkolom | 4,4mm |
| Print, inline in een label | 3,6mm |

Lijn iconen optisch uit met de tekst. Gebruik geen tekst-glyphs voor pijlen, vinkjes of plusjes. Gebruik de Lucide-iconen `ArrowRight`, `Check` en `Plus`. Kies één icoonstijl per document. Iconen vervangen zware kleurbalken, niet andersom.

## Checklist bij elk ontwerp

1. **Eén kernboodschap?** Of stapel je dingen op?
2. **Genoeg lucht?** Of is alles dichtgeplakt?
3. **Vlakke kleuren?** Of zijn er gradients ingeslopen?
4. **Echte typografie?** Sora-koppen (500/600), Geist-body, geen random font?
5. **Groen goed gebruikt?** Vlak-met-donkere-tekst, of accent alléén op zwart/paars?
6. **Mensen, geen mockups?** Geen stockfoto-AI-clichés?

Drie keer "nee": het is nog niet af.
