# Lay-out, grid en spacing

Mediumneutrale principes voor het opbouwen van een vlak: een slide, social-beeld, poster, e-mail of webpagina. De website-implementatie in code staat in de skill `aigenwijs-website` (bron: `docs/design-system.md` in de repo).

## 8pt-spacing

Alle ruimte in veelvouden van 8: **8, 16, 24, 32, 48, 64, 96, 112**. Eén ritme houdt alles in de pas; verzin geen tussenmaten. Werk je in een tool met een ander raster (Canva, PowerPoint), rond dan af op deze stappen.

| Patroon | Richtwaarde |
|---|---|
| Sectie-ritme (verticaal) | 72 tot 112px tussen secties |
| Kolom-tussenruimte (gutter) | 32px |
| Sectiekop naar eerste content | 40 tot 64px |
| Kaart-padding | 24 tot 36px |

## Witruimte is geen leegte

Witruimte stuurt het oog, geeft prioriteit en maakt dat wat er wel staat impact heeft. Vuistregel: wordt alles even zwaar, dan ben je aan het volstoppen. Maak meer leeg dan comfortabel voelt en kijk opnieuw. "Te leeg" is bijna altijd juist goed.

## Grid

- **Container/canvas:** op web max ongeveer 1280px breed, met buitenmarges die meeschalen (28 tot 56px). Op een slide: houd een vaste veilige marge rondom (bijv. 64px op 1920x1080).
- **12-koloms raster** met 32px gutter is de basis. Secties claimen kolommen; op smal scherm vallen ze terug naar volle breedte.
- **Vaste verdelingen** die prettig werken: kaart-trio's 4+4+4, beeld naast tekst 7/5, een aandachtsblok dat de volle breedte pakt.
- **Lopende tekst staat los van het raster.** Zet body op een comfortabele regellengte (max ongeveer 60ch), niet over de volle 12 kolommen.

## Ritme: wissel vlakken af

Een stuk (pagina, deck, lange post) krijgt rust en spanning door vlakken af te wisselen, niet door elk vlak vol te maken. Het beproefde ritme:

```
wit  ->  zacht-grijs  ->  wit  ->  zwart of paars (één gewicht-/statement-vlak)  ->  wit
```

Regels:
1. **Maximaal twee volle kleurvlakken per stuk:** één zwart (gewicht) en één paars (statement/CTA). De rest blijft licht.
2. **Geef het zwaarste middel aan de belangrijkste inhoud, en zet dat blok in het midden van het stuk, niet onderaan.** Een pagina, deck of document dat pas bij de afsluiter kleur krijgt, mist de Aigenwijs-smoel. Lichte versies van kerncontent ogen steevast te veilig. Het zwarte blok met groene accenten is het merkmoment. Les uit de website-doorvertaling: Eric zei twee keer "te wit", 11 juni 2026. Meerdere kerncontent-stukken mogen samen in dat ene blok, gescheiden door een hairline. Dat is beter dan twee losse donkere vlakken.
3. **Zacht-grijs is het enige tussentintvlak** tussen witte secties. Nooit twee zacht-grijze vlakken op elkaar.
4. **Op een donker/paars vlak:** groene of paars-zachte accenten, witte tekst met opacity-trappen, dunne hairlines. Zie `colors.md`.

### Recept voor een donker vlak

Op een zwart of paars vlak:

- Zet de eyebrow in groen `#00FF95`, niet in paars.
- Geef één woord in de kop een groen accent.
- Gebruik hairlines van `rgba(255,255,255,0.12)`.
- Maak nummer-cirkels 36px, met een rand van `rgba(0,255,149,0.7)` en een wit cijfer.
- Volg voor kop, body, secundaire tekst en meta de opacity-trappen in `colors.md`, sectie "Tekst op donkere vlakken".
- Voeg de kruisjes-textuur uit `design-principles.md` toe.

## Asymmetrie mag

Niet alles hoeft gecentreerd. Tekst links-uitgelijnd op een hero, logo links-onderin, een quote rechts uit het midden: dat geeft karakter en past bij de no-nonsense houding. Werkt het best als je consistent asymmetrisch bent binnen één ontwerp, niet half-half.

## Eén kernboodschap per vlak

Elke slide, poster, social-post of hero heeft één ding te zeggen. Niet drie. Schrijf de kernboodschap op één regel; wat je overhoudt is het filter voor wat blijft. Geen volle slides met bullets, geen carrousels met 200 woorden per kaart.

## Vorm: radius en schaduw

- **Radius (web):** knoppen 10px (geen pills), chips en kleine kaarten 13 tot 14px, kaarten en menu's 16 tot 18px. Kies uit deze drie stappen. Uitzondering: kleine badges en statusbolletjes mogen rond.
- **Schaduw:** minimaal. Hairline-randen plus een zachte lift voor diepte. Geen gekleurde glows.
- Vlakke kleur, scherpe rand. Geen vervaagde randen, geen gradient-achtergronden.

## Beeld

Echte mensen in echte werksituaties: een trainer voor een groep, een deelnemer aan een laptop, een sticky-note op een whiteboard. Documentaire stijl, geen stockfoto-glans, geen robothanden of breinen-met-circuits. Schermafbeeldingen van tools mogen, mits ze iets concreets laten zien. Foto's met afgeronde hoeken (ongeveer 14px op web), liefst onbewerkt zodat echt werk echt oogt.
