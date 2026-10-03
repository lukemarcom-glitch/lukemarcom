# Onafhankelijke controle Sol 6.1-proef — Wijnhaven 69

3 oktober 2026. Controlecheckout startte schoon op 8dc3b7c; de afzonderlijke `lukemarcom`-checkout met ongecommitteerde ronde22 bleef onaangeroerd. Geen catalogus of runtime door deze controleagent gewijzigd.

## Geometrie

Reproduceerbaar: `node research/sol61-controle/dump-meshes.mjs`, daarna `.venv/bin/python research/sol61-controle/mesh-qa.py wijnhaven69` en hetzelfde voor `wijnhaven67`. De dump is een groot lokaal tussenbestand en wordt niet gecommit of gepubliceerd.

Alle driehoeken worden met de runtime-modelbouwer en echte wereldtransformaties verzameld; geprojecteerde driehoekunions worden tegen de overige 212 modellen, achtergrondpolygonen en bestaande werkgrens gecontroleerd. GLB wordt onafhankelijk geparseerd inclusief node-transformaties; ongeordende driehoekmultisets vergelijken op 1 mm. Dit controleert geometrie, niet materiaalkleur of historische zekerheid.

Eerste controle vond 2,9431 m² overlap met Wijnhaven 67 en 0,19846 m² met achtergrond M0109-1. Hoofdtaak corrigeerde de brongebonden gedeelde zijlijn en achtergronduitsnede. Finale controle: beide panden nul overlap, nul achtergrondoverlap, nul buiten werkgrens; GLB-pariteit 69:1080/1080, 67:1258/1258 driehoeken.

Vier windrichtingen en selectiecamera vastgelegd en zelf bekeken. Vier raamassen, lagere voorgevel, kroonlijst en dakkapel zichtbaar; gevel staat naar de Wijnhaven gericht. Sobere achterzijde en kapdelen blijven expliciete benaderingen.

## Browser en bronnen

Op lokaal publicatiesubpad http://127.0.0.1:8871/lukemarcom/ slagen algemene Plan C-controle en gerichte LANDMARK_ID=wijnhaven69-controle: 213 locaties, 18 verhalen, geen JavaScript-/HTTP-fouten of mobiele overflow; selectiecamera, alle foto-/AI-varianten, fullscreen en Nu 3D werken.

Extra `credits-browser.mjs` controleert het origineel en AI op desktop en mobiel, gewone galerie en fullscreen. Maker C. Hoogendijk/RCE, opnamedatum onzeker, collectienummer RCE20192617, exacte bronregistratie en CC BY-SA 4.0 met AI-licentie aanwezig. Alle drie `supports`-teksten staan zichtbaar bij de directe bronnen. Verhaal telt 187 woorden. Desktop- en mobiele galerie-, bron- en fullscreenbeelden zelf bekeken, inclusief naar credits gescrollde mobiele fullscreen.

Lokale QA vormt geen publicatiebewijs. Openbare browser-/bytecontrole en geslaagde Pages-deployment moeten apart door de hoofdtaak worden vastgelegd. Voor precieze historische identificatie, verliesbewijs en AI-fotocomparatie gelden de afzonderlijke onderzoeks-/beelddossiers.
