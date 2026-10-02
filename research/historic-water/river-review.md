# Nieuwe Maas / Leuvehaven: tracecontrole

Getraceerd 2oktober2026 op `site/onderzoek/centrum-voor-mei-1940.jpg` (6481×5098). Geen runtimewijzigingen door deze agent.

`river.json` heeft drie gebieden: Nieuwe Maas met Koningshaven, Leuvehaven noord en Leuvehaven zuid. Pixelcoördinaten, schema `areas[].polygons[].outer/holes`.

- Geometrie met Shapely gecontroleerd: alle polygonen geldig, geen onderlinge oppervlakte-overlap.
- Noordereiland uitgesloten. De vier brugcorridors verbinden het uitgesloten eiland met buitengebied; daardoor resteert na difference een ingesneden buitenring zonder losse holes. Dit is opzettelijk, geen verloren eilandgat.
- Leuvebrug, oude Maasbruggen, Koningshavenbruggen en legenda blijven zichtbaar/droog. De contouren zijn op `river-preview.jpg` bekeken.
- Handtrace is indicatief, meestal circa5–10m; kleine kademuurtjes, pontons en aanlegsteigers zijn vereenvoudigd. Geen exacte kadasterclaim.
- Belangrijk: bronkaart combineert toestand vóórmei1940 en wederopbouw1955. In de oostelijke Maasstation-railzone zijn lijnen over het water zichtbaar. Niet bewezen welke elk1955 zijn. Oever volgt zichtbare kaartlijn; claim daarom niet dat alle overblijvende rails water moesten zijn. Bij strenge voorkeur conservatief terugtrekken nabij railzone of ouderekaart aparttoetsen.
- Maasouter stopt op kaart- en legendakader. Zuidelijke Binnenhaven enEntrepothaven niet apart ingekleurd. Leuvehaven heeft korteverbindingen Wijnhaven/Blaak nietoverhelehavenuitgewerkt; aansluiten bij anderetraceagent.

Herbouw: `.venv/bin/python research/historic-water/trace-river.py`, daarna `python3 research/historic-water/render-river.py` (systeemPythonPillow; venvShapely).
