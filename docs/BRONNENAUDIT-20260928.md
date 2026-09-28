# Bronnenronde 28 september 2026

Alle **107 gebouwen/buurten en 18 oorlogsverhalen** zijn meegenomen: **253 fotovermeldingen**, waarvan **233 met AI-afgeleide**. Het gaat om vermeldingen, niet noodzakelijk unieke opnamen: sommige locaties delen een bronfoto. Het volledige register per locatie, inclusief URL, gebruiksdoel en bereikbaarheidsresultaat, staat in [BRONNENAUDIT-20260928.json](BRONNENAUDIT-20260928.json).

## Wat de bezoeker nu ziet

- Direct onder iedere gekozen foto: herkomstpagina, maker, datering of expliciete onbekendheid, collectienummer waar gevonden, rechten en bijbehorende onzekerheden. De AI-afgeleide behoudt de credit van het origineel en benoemt de bewerking.
- 88 aanvullende verwijzingen naar de oorspronkelijke archiefregistratie, naast bijvoorbeeld de Commons-bestandspagina. Een generieke collectiehomepage geldt niet als een exact fotorecord. 177 fotovermeldingen hebben nu een herkenbaar collectienummer; 252 een datering. De ongedateerde Laurenskerk-opname wordt niet van een verzonnen datum voorzien.
- De vergrote fotoweergave heeft een blijvend zichtbare knop **Fotobron**, naast de volledige scrollbare credit.
- Inhoudelijke bronnen staan bij de tekst, met het onderwerp, de passage of het gebruiksdoel. Wikipedia is aanvullende achtergrond. Een link naar een straat, organisatie of hofjestype pretendeert niet het specifieke gebouw te beschrijven.
- De uitsnede op de Diergaarde-minikaart heeft ook een directe kaartbron.

## Belangrijkste correcties

Verhuisde museumregistraties teruggevonden: koperfragment van de Lutherse kerk (object 76659, record 2221621) en Van Nelle-reclameblik (object 30337, record 2177927). Twee oude Hoogstraat-beeldbankadressen vervangen door de juiste recordverwijzingen. De Stadsarchief-testomgeving voor Verheul vervangen door de publieke pagina. De onjuiste Wikipedia-URL van de Beurs hersteld. Bij de verdwenen Houttuinkerk is de link naar een andere kathedraal verwijderd; de specifieke bisdompublicatie en archiefopname blijven staan.

Extra inhoudelijke bronnen opgenomen voor het bankgebouw Mees & Zoonen (RCE 513762), de twee voorlopers van het Oogziekenhuis (Platform Wederopbouw en Henkes/Erasmus Universiteit), de kleurenreferentie voor Coomans (Boske-opname), de sloop van de oude spoorbrug (cultuurhistorische verkenning Feijenoord, p. 37) en de bibliografische vindplaats van de gewijzigde gevel van Café De Unie. Een bron over Café De Unie stond ten onrechte bij de Doelenzaal; die is daar verwijderd. Dubbele bronverwijzingen zijn samengevoegd. Esders behoudt één volledige bibliografische verwijzing naar Guill de Valk, Rotterdams Jaarboekje 2003, pp. 151–161.

## Methode en grenzen

Alle huidige bronverwijzingen zijn geïnventariseerd en op bereikbaarheid gecontroleerd. Daarbij zijn exacte Commons-bestandsbeschrijvingen, archiefpermalinks, bestaande bronregisters en relevante institutionele artikelen vergeleken. Waar de Stadsarchiefpagina een JavaScript-doorverwijzing bevatte, is de specifieke record-URL gevolgd. Detailvelden worden daar soms verder via JavaScript geladen; een HTTP 200 alleen bewijst dus niet dat alle velden inhoudelijk zijn herbevestigd. Nieuwe collectienummers zijn ontleend aan recordtitels, expliciete metadata of eerder opgeslagen archiefbeschrijvingen; een digitaliseringsdatum is niet als fotodatum overgenomen.

Deze ronde maakt de informatie herleidbaar. Zij is geen nieuwe inmeting van de 3D-modellen en geen onafhankelijke juridische verklaring voor alle bestaande beelden. `sourceChecked` / `checkedAt` duiden de datum van de verwijzingscontrole aan, niet een garantie dat iedere claim in de externe publicatie juist is. De scopes bij `supports` maken onderscheid tussen historische tekst, zichtbaar beeld, kaartligging en moderne plaatsingsreferenties. Onbekende makers, onzekere datering, interpretatieve kleuren en bestaande rechtenvoorbehouden blijven zichtbaar.

Er blijven externe beperkingen:

- De oude `rjb.x-cago.com`-reader is onbereikbaar; het Stadsarchief meldt problemen met de digitale Jaarboekje-inzage. Auteur/titel/jaargang/pagina blijven bewaard. De interface presenteert deze verwijzingen niet als werkende bewijslinks.
- Engelfriet gaf certificaatfouten. Geen certificaatcontrole is uitgeschakeld. Dit raakt ook de derde Tivoli-foto; daarvan is de herkomstpagina bekend, maar een zelfstandige oorspronkelijke archiefregistratie is nog niet vastgesteld.
- Sommige Spaarnestad-verwijzingen werken niet; waar beschikbaar blijft de exacte Commons-bestandsregistratie als bereikbare metadata bij het beeld staan.
- WUR, KNOB, FlipHTML5 en enkele Library of Congress-verwijzingen beperkten geautomatiseerde toegang. Oorlogsbronnen gaf bij enkele URL’s een controlepagina (HTTP 202). Dit is geen bewijs dat een gewone bezoeker die sites niet kan openen. Deze beperkingen zijn afzonderlijk vermeld.
- Onder meer de eerste drie Tivoli-foto’s hadden al een onvastgestelde rechtenstatus. Die wordt nu direct onder de foto getoond; ouderdom of online beschikbaarheid is niet als nieuwe toestemming opgevat.

De catalogi zijn de actuele publicatiebron. Oudere README’s, bronbestanden en metadata in model-exports documenteren de eerdere onderzoeksronde en kunnen oude URL’s bevatten. Ze worden niet stilzwijgend als nieuwe verificatie gepresenteerd.

## Onderhoud en controle

`site/sources.js` / `site/sources.css` verzorgen de gedeelde bronweergave. `sources[].supports` is verplicht voor nieuwe inhoudelijke bronnen; `unavailable`, `accessNote` en eventueel `accessUrl` beschrijven feitelijke toegankelijkheidsbeperkingen. Houd fotobronnen bij het specifieke beeld, ook na hergebruik bij een verhaal of fotopunt.

Gedraaid: `npm run check`, algemene desktop-/mobiele browsercontrole en `node scripts/sources-browser-check.mjs`. De gerichte browsercontrole opent alle 125 locaties en controleert alle 253 originele credits plus 233 AI-credits, zichtbare bronlijsten, mobiele breedte en fullscreenverwijzingen. Screenshots zijn visueel beoordeeld. Lokale uitvoer staat onder `artifacts/source-audit/` en wordt niet meegepubliceerd.
