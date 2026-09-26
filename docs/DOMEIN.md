# Eigen domein: rdam39.nl

De eigenaar bevestigde op 26 september 2026 dat **rdam39.nl** het juiste domein is. De koppeling aan de bestaande GitHub Pages-site is geautoriseerd. `rdam.nl` hoort niet bij deze wijziging.

## Actuele status

- De website werkt op https://lukemarcom-glitch.github.io/lukemarcom/.
- Hostnet beheert de DNS, via `ns01.hostnet.nl` en `ns02.hostnet.nl`.
- `rdam39.nl` is toegevoegd aan de domeinverificatie van GitHub-account `lukemarcom-glitch`, maar **nog niet geverifieerd**. Het TXT-record moet nog bij Hostnet worden geplaatst.
- Hostnet vraagt nog om aanmelding door de eigenaar. Er zijn geen DNS-records gewijzigd.
- De repository heeft nog geen custom domain (`cname: null`). Stel dat pas in wanneer de Hostnet-wijziging kan worden afgerond, zodat de werkende GitHub-URL niet voortijdig naar het nog onjuist geconfigureerde domein gaat verwijzen.
- HTTPS voor het eigen domein is nog niet opgelost; de Hostnet-server gaf bij controle een zelfondertekend certificaat. Meld de overstap pas als afgerond na een geldige HTTPS-controle.

## Stap 1: eigendom verifiëren

Voeg bij Hostnet het door GitHub verstrekte TXT-record toe:

| Recordnaam (volledig) | Type | Inhoud |
| --- | --- | --- |
| `_github-pages-challenge-lukemarcom-glitch.rdam39.nl` | TXT | `d255cff1cd52018e218def5d4ef03a` |

Dit is een DNS-verificatiecode, geen login-token. Controleer de actuele code op https://github.com/settings/pages_verified_domains/rdam39.nl als het verificatieverzoek opnieuw is aangemaakt. Laat het TXT-record na verificatie staan.

## Stap 2: website koppelen

Stel in de repository onder Settings → Pages het custom domain `rdam39.nl` in, **vóór** de website-DNS naar GitHub wordt omgezet. De publicatie blijft via GitHub Actions lopen; een `CNAME`-bestand in `site/` is hiervoor niet nodig.

Vervang daarna de Hostnet-websiteverwijzingen voor het hoofddomein en www door deze records. TTL 600 seconden is geschikt als Hostnet dit toestaat.

| Recordnaam | Type | Inhoud |
| --- | --- | --- |
| `rdam39.nl` | A | `185.199.108.153` |
| `rdam39.nl` | A | `185.199.109.153` |
| `rdam39.nl` | A | `185.199.110.153` |
| `rdam39.nl` | A | `185.199.111.153` |
| `rdam39.nl` | AAAA | `2606:50c0:8000::153` |
| `rdam39.nl` | AAAA | `2606:50c0:8001::153` |
| `rdam39.nl` | AAAA | `2606:50c0:8002::153` |
| `rdam39.nl` | AAAA | `2606:50c0:8003::153` |
| `www.rdam39.nl` | CNAME | `lukemarcom-glitch.github.io` |

Schakel de oude domeindoorsturing/automatische website-records uit, zodat deze geen conflicterende records terugplaatsen. De oude A-waarde is `77.111.241.223`; de oude AAAA-waarde is `2a02:2350:5:119:f9:e7fa:3e5b:ed40`. Beide werden voor het hoofddomein en www teruggegeven.

Behoud de nameservers en overige mail-, TXT- en verificatierecords. Controleer bij www of Hostnet naast de webrecords ook een automatisch null-MX-record toont: een CNAME mag daar niet naast andere recordtypen bestaan. Wijzig geen echte mailbestemming zonder eerst de functie vast te stellen. Er is geen domeinverhuizing of betaald hostingpakket nodig voor deze koppeling.

## Stap 3: HTTPS en livecontrole

1. Controleer de DNS bij beide Hostnet-nameservers en een publieke resolver.
2. Wacht op de domeincontrole en certificaatuitgifte in GitHub Pages en schakel **Enforce HTTPS** in zodra beschikbaar.
3. Controleer `https://rdam39.nl/`, `https://www.rdam39.nl/` en de HTTP-doorsturingen zonder certificaatwaarschuwing of bypass. Het hoofdadres wordt `https://rdam39.nl/`.
4. Draai `BASE_URL=https://rdam39.nl/ npm run test:browser`, controleer desktop en mobiel en bekijk de originele/AI-foto's en Nu 3D.
5. Werk README, publicatiedocumentatie en overdracht bij met het werkelijk gecontroleerde hoofdadres en de verificatiestatus. De oude Sites-publicatie blijft een afzonderlijke deployment.

Bronnen: [GitHub: custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [GitHub: domein verifiëren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), [Hostnet: DNS wijzigen](https://helpdesk.hostnet.nl/hc/nl-nl/articles/360014581437-DNS-wijzigen).
