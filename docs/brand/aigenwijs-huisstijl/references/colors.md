# Kleuren

## Inhoud

- Het palet
- De groen-regel (de belangrijkste kleurregel)
- Wanneer gebruik je wat?
- Combinaties die werken
- Combinaties die niet werken
- Contrast en toegankelijkheid (WCAG 2.2)
- Pas op met overlays op foto's
- Duotone-filter voor beeld
- Tekst op donkere vlakken

## Het palet

### Merkkleuren
| Naam | HEX | Rol |
|---|---|---|
| Paars | `#7100F6` | Primair merkaccent: links, knoppen op licht, eyebrows, accentwoord in koppen, iconen die aandacht trekken. Dit is wat mensen onthouden van Aigenwijs. |
| Paars-diep | `#5B00C4` | Hover/diepte op paars (bijv. knop-hover) |
| Paars-zacht | `#B392FF` | Paars-accent op donkere vlakken, waar `#7100F6` te weinig contrast geeft |
| Groen | `#00FF95` | Actie-kleur: CTA's en highlights. Eén harde regel, zie onder. |

### Neutralen
| Naam | HEX | Rol |
|---|---|---|
| Ink | `#1A1815` | Primaire tekst op licht |
| Ink-zacht | `#5A544C` | Secundaire tekst, intro's |
| Muted | `#6A655E` | Meta, captions (~5,8:1 op wit, AA) |
| Zwart | `#000000` | Hero-achtergronden, gewicht-vlakken, maximaal contrast |
| Antraciet | `#212121` | Productkleur AI-Adoptie; donkere panelen; legacy bodytekst-kleur |
| Panel | `#262320` | Warm donker feature-paneel |
| Panel-2 | `#201D1A` | Warme donkere footer of voet |
| Wit | `#FFFFFF` | Basisvlak, lichte secties, tekst op donker |
| Zacht-grijs | `#F7F7F8` | Rustig wisselvlak tussen witte secties (het enige tussentintvlak) |
| Lijn | `#D7D9E6` | Hairlines, randen |

### Signaalkleuren (functioneel, spaarzaam)
| Naam | HEX | Rol |
|---|---|---|
| Rood | `#F15A24` | Alléén als vlak/rand of op donker. Foutmeldingen, vereiste velden. Niet decoratief. |
| Rood-diep | `#9A3412` | Fout-**tekst** op licht (haalt ≥4,5:1 op wit en op een lichte rood-tint). Gebruik dit als rood tekst moet zijn, niet `#F15A24`. |
| Geel | `#FFE599` | Zacht accent, bijna pastel. Highlight-streep, attentieblok. Werkt niet als bodykleur. |

## De groen-regel (de belangrijkste kleurregel)

Groen `#00FF95` is fel en pakt aandacht, maar verliest op wit al z'n contrast. Daarom:

- **Groen als vlak met donkere tekst: overal toegestaan.** Een groene knop of blok met zwarte/inkt-tekst (~15,7:1) is prima op elk medium.
- **Groen als tekst of accentkleur: alleen op zwart of paars.** Nooit groene lopende tekst, groene koppen of groene accenten op wit of licht.

Werkt het mooist op zwart of antraciet. Op wit verliest het impact én contrast. Dit is een WCAG-regel, geen smaak, en geldt merk-breed (slides, social, e-mail, web).

## Wanneer gebruik je wat?

**Paars `#7100F6`** is de primaire merkkleur. Voor links, primaire knoppen op licht, iconen met aandacht, één centraal accent per scherm of slide. Niet als achtergrond van grote tekstvlakken: het is verzadigd en wordt zwaar op groot oppervlak. Uitzondering: één paars statement-vlak (bijv. een eind-CTA) per stuk.

**Ink `#1A1815`** is de werkpaard-tekstkleur op licht. Geen puur zwart voor lopende tekst: ink is zachter en leesbaarder. (De oude site gebruikte `#212121` antraciet; dat blijft geldig maar nieuw werk gebruikt ink.)

**Zwart `#000000`** voor maximale impact: hero's, full-bleed donkere blokken, achtergrond voor groene CTA's.

**Wit `#FFFFFF`** is het basisvlak. Witruimte is een ontwerpkeuze, geen afwezigheid.

**Zacht-grijs `#F7F7F8`** is het enige rustige wisselvlak tussen witte secties. Nooit twee zacht-grijze vlakken direct op elkaar.

## Combinaties die werken

### 1. Donker + paars-accent + wit-tekst
```
Achtergrond:  #000000 of #212121
Tekst:        #FFFFFF
Accent:       #7100F6 of #B392FF (kleine elementen, niet als achtergrond)
CTA:          #00FF95-knop met zwarte tekst
```

### 2. Wit + ink + paars-accent
```
Achtergrond:  #FFFFFF
Tekst:        #1A1815
Accent:       #7100F6 (links, eyebrows, iconen)
CTA:          paarse knop met witte tekst (groen hier alleen als knop/vlak, niet als tekst)
```

### 3. Paars-vlak + wit + groen-accent (statement / eind-CTA)
```
Achtergrond:  #7100F6
Tekst:        #FFFFFF
Accent/CTA:   #00FF95 als groot display-accent of als knopvlak met zwarte tekst
```
Let op: groen op paars haalt ~5,2:1. Dat is AA voor normale tekst (geen AAA), dus een groen accentwoord, cijfer of knopvlak op paars is technisch in orde. Houd lopende tekst op paars toch wit: dat is een stijlkeuze voor rust, geen WCAG-eis. (Tot 13 augustus 2026 stond hier ten onrechte 2,1:1; dat cijfer klopte niet.)

### 4. Zwart + groen (high impact)
```
Achtergrond:  #000000
Tekst:        #FFFFFF of #00FF95
Accent:       alleen groen
```
Spaarzaam: als statement-moment krachtig, bij elk ontwerp niet.

## Combinaties die niet werken

- Paars + groen vlak naast elkaar: vibrerende randen.
- Rood + groen: te veel signaal.
- Geel als hoofdkleur: contrast te laag.
- Paars als grote achtergrond met witte tekst op pagina-niveau: wordt zwaar (kleine blokken oké).

## Contrast en toegankelijkheid (WCAG 2.2)

Drempels: normale tekst 4,5:1, grote tekst (≥24px, of ≥18,7px bold) 3:1, randen/iconen/focus 3:1. Niet afronden, 4,49:1 zakt.

Onderstaande waarden zijn exact doorgerekend met de WCAG-formule op
13 augustus 2026. Dit is de canonieke tabel; andere references (o.a.
`huisstijl-video.md` in aigenwijs-video) verwijzen hierheen en noemen alleen
hun mediumspecifieke afwijkingen.

| Combinatie | Ratio | Oordeel |
|---|---:|---|
| Ink `#1A1815` op wit | 17,7:1 | AAA |
| Ink-zacht `#5A544C` op wit | 7,5:1 | AAA |
| Paars `#7100F6` op wit | 6,9:1 | AA |
| Muted `#6A655E` op wit | 5,8:1 | AA |
| Wit op paars | 6,9:1 | AA |
| Wit op zwart | 21:1 | AAA |
| Groen `#00FF95` op zwart | 15,7:1 | AAA |
| Zwart op groen (knop) | 15,7:1 | AAA |
| Groen op paars | 5,2:1 | AA (geen AAA); lopende tekst liever wit, zie boven |
| Paars-zacht `#B392FF` op zwart | 8,5:1 | AAA |
| Paars op zwart | 3,0:1 | op de grens voor grote tekst, faalt voor normale tekst |
| Groen op wit | 1,3:1 | faalt overal |
| Wit op groen | 1,3:1 | faalt overal |

Vuistregels: gebruik groen nooit als tekstkleur op wit. Paars als tekstkleur
op zwart zit op de grens (3,0:1) en is dus niets voor tekst; gebruik daar
paars-zacht `#B392FF` (8,5:1).

## Pas op met overlays op foto's

Oversaturated kleur op foto's oogt goedkoop. Wil je kleur op beeld:
- Zwart/antraciet overlay 60-80% opacity onder witte tekst: werkt altijd.
- Paars overlay alleen op rustige beelden, opacity onder 40%.
- Groen overlay: zelden, alleen als merkmoment.

## Duotone-filter voor beeld

Gebruik dit filter als een beeld op het palet moet aansluiten:

```css
filter: grayscale(1) sepia(0.2) hue-rotate(206deg) saturate(1.5) brightness(1.03) contrast(1.02);
```

Gebruik het spaarzaam. Laat trainingsfotografie onbewerkt, want echt werk mag echt ogen.

## Tekst op donkere vlakken

Op zwart/paars/antraciet: witte tekst met vaste opacity-trappen i.p.v. losse grijstinten. `wit` (koppen), `wit/82%` (body), `wit/55%` (secundair), `wit/40-45%` (meta). Randen: `wit/10-14%`.

Voor CSS-variabelen en Tailwind-tokens met deze kleuren: `code-snippets.md`.
