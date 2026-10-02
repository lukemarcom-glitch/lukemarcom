# Standalone modelcontrole

2 oktober 2026. Draft via echte `createLandmark`/city33-renderer geladen in lege browserpagina; runtimecatalogus ongemoeid. Script `artifacts/nieuwe-westerkerk-preview.mjs`. Screenshots `model-preview-front.png` en `model-preview-angle.png`.

- Renderer compatibel inclusief beide `roofProfile`-spitsen. Geen browserfouten, 3904 driehoeken. Zie render-check.json.
- Frontale en schuine render visueel bekeken. Symmetrische torenpaar, bolvormige tussenknoop plus slanke naald, centraal puntgevelvolume, drielicht/roos, dubbele entrees kloppen als vereenvoudigde silhouetinterpretatie van de geveltekening.
- Na inspectie galmgatlamellen en de twee kleine geveltopopeningen toegevoegd. Loslijk zwevende topstaaf gecorrigeerd zodat deze op de spits aansluit.
- Voorgevel is lokaal+z, hoek2.253574 zet deze aan de noordoostelijke Ammanstraatrand. Preview is alleen voor beoordeling met center0/angle0 gerenderd, echte positie blijft in JSON.
- Geen exacte ornamentkopie: torenonderbouw/raamprofielen vereenvoudigd; zijramen, zijbeukdaken en achtergevel blijven interpretatie. De standaard renderbaksteentextuur oogt op deze schaal grof; geen rendererwijziging gedaan.
- Hoogte model circa35.25m plus runtimevloer0.35m; footprintmodelomhulling22.42×36.65m inclusief dakranden. Archieftekening geeft verhoudingen maar geen harde maat: torenhoogte niet als bewezen presenteren.

Shapely op actuele117catalog: geldige onderzoekspolygoon835.80m², volledig binnen werkboundary, buitenoppervlak0.0m², geen overlap met bestaande cataloguspolygonen. Zie spatial-check.json. Dit bewijst de plaatsing binnen projectwerkgrens, niet een onafhankelijke exacte brandgrensmeting. Automatische achtergrondblokken moeten bij runtimeplaatsing via gebruikelijke clearance worden verwijderd.

## Lokale runtime-integratie

Na expliciete opdracht hoofdagent lokaal geïntegreerd als `nieuwe-westerkerk-ammanstraat` (catalogus118). Roos verkleind tot radius0.95 en lager op14.65m, geïntegreerd boven drielicht. Los GLB/.blend geëxporteerd uit actuele renderer; achtergrond opnieuw uitgesneden (971 massa's). Foto1933 ongewijzigd byte-identiek, AI als apart WebP met expliciete context-/detailonzekerheid; bronmetadata en prompt lokaal bij model. Achtergrondtekst160woorden.

`npm run check` geslaagd, 9tests. Gerichte uitvoering van browser-check op dit item: desktopfoto, fullscreen, Nu3D, mobiele galerie/fullscreen geslaagd, geen browserfouten/mislukte responses/overflow. Kaartclose-up en mobiele screenshot visueel bekeken: model goed zichtbaar zonder doorsnijdende achtergrondblokken, bron en AI-caveat zichtbaar op mobiel. Zie artifacts/nieuwe-westerkerk-browser/ en artifacts/expansion-20261002/nieuwe-westerkerk-ammanstraat-model.png. Niet gecommit/gepusht/gepubliceerd door deze agent.
