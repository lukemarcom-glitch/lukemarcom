# Aigenwijs in de moderne weergave

Op 26 september 2026 vroeg de eigenaar om de moderne weergave in de Aigenwijs-huisstijl en een subtiele hobbyvermelding. De aangeleverde bron is `aigenwijs-huisstijl.zip`. De skill en tekstuele naslag zijn hier bewaard, zodat een volgende ontwikkelaar of AI-tool dezelfde afspraken kan volgen. Dit is een naslagkopie, geen volledig geïnstalleerd skillpakket: alleen het gebruikte logo is bij de website opgenomen, geen portretten of andere ongebruikte merkbeelden.

## Toepassing in RDAM39

- `site/aigenwijs.css` wordt na `theme.css` geladen. De merkkleuren en fonts zijn begrensd tot `body.era-modern`.
- Paars `#7100F6` voor accenten, links en gebouwmarkers; witte panelen, ink `#1A1815` voor tekst, `#F7F7F8` voor rustige vlakken. WOII-markers blijven herkenbaar als donkere vierkantjes.
- Groen `#00FF95` alleen op de actieve Nu-knop, met donkere tekst. Geen groene tekst op een witte achtergrond.
- Sora 500–600 voor koppen, Geist voor body en bediening. Beide fonts zijn lokaal meegeleverd; geen Google Fonts-netwerkverzoek tijdens gebruik.
- De historische vormgeving, foto's, luchtfoto en gebouwmaterialen behouden hun eigen kleuren. Geen merkkleurfilters op bronbeelden toepassen.
- RDAM39 blijft het hoofdlogo. Het aangeleverde antraciete Aigenwijs-logo staat ongewijzigd onderaan het uitklapmenu en in Over deze versie, met de tekst ‘Een hobbyproject van’. Het linkt naar `https://www.aigenwijs.com/` in een nieuw tabblad, zonder trackingparameters. Geen marketingknop of pop-up toevoegen.
- De vermelding blijft buiten het scrollende deel van het menu, verdwijnt bij inklappen en staat buiten de kaartbediening en de vereiste bronattributie.

Het logo staat in `site/assets/brand/aigenwijs-logo-anthracite.svg`; de oorspronkelijke verhouding, vorm en kleur behouden. Het bron-SVG heeft rondom al vrije ruimte. De CSS-breedte is 104px, zodat het zichtbare woordmerk ruim 80px breed is.

## Lettertypen en rechten

De ongewijzigde variabele fonts komen uit de officiële Google Fonts-repository:

- https://github.com/google/fonts/tree/main/ofl/sora
- https://github.com/google/fonts/tree/main/ofl/geist

De meegeleverde OFL-licenties staan naast de TTF-bestanden in `site/assets/fonts/`. Het Aigenwijs-merk krijgt hierdoor geen open-sourcelicentie.

## Controle na wijzigingen

Draai de bestaande project- en browsercontroles. Bekijk ook Nu met open menu en een gebouwpaneel op desktop en mobiel; controleer het terugschakelen naar Toen. Let op afbrekende namen, kleurcontrast, de zichtbaarheid van de makercredit en de botsingscontrole van labels na het laden van de fonts.
