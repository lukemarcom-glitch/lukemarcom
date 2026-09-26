# Eigen domein: rdam39.nl

De eigenaar bevestigde op 26 september 2026 dat **rdam39.nl** het juiste domein is. De koppeling aan de bestaande GitHub Pages-site is geautoriseerd. `rdam.nl` hoort niet bij deze wijziging.

## Actuele status

- Hostnet beheert de DNS, via `ns01.hostnet.nl` en `ns02.hostnet.nl`.
- `rdam39.nl` is op 26 september 2026 geverifieerd bij GitHub-account `lukemarcom-glitch`. Het onderstaande TXT-record is bij Hostnet opgeslagen en blijft staan.
- De repository heeft custom domain `rdam39.nl`. Daarna zijn de onderstaande website-DNS-records bij Hostnet opgeslagen, met TTL 600.
- Beide Hostnet-nameservers en de publieke resolvers van Cloudflare en Google geven de nieuwe A-, AAAA- en www-CNAME-records terug. Nameservers, root-MX en overige mail-/TXT-records zijn behouden.
- De oude automatische A-/AAAA-records voor root en www zijn uitgeschakeld. Het automatische null-MX-record op www is eveneens uitgeschakeld, zodat het niet conflicteert met de CNAME. De root-MX blijft `0 .`.
- HTTPS-certificaatuitgifte en anonieme livecontrole zijn nog in uitvoering. De oude Hostnet-server gaf een zelfondertekend certificaat; lokale DNS-caches kunnen die server nog bereiken. De GitHub-URL verwijst voortaan naar het eigen domein.
- GitHub meldde tijdens de controle **DNS check successful**, maar latere controles wisselden nog tussen correct en de oude verwijzing. De afzonderlijke HTTPS-controle zag bij de laatste controle nog een oud IP-adres (`is_non_github_pages_ip_present: true`), terwijl beide autoritatieve servers uitsluitend GitHub-adressen teruggeven. Dit past bij DNS-cacheverloop. Wijzig daarom niet opnieuw de correcte DNS om deze tijdelijke situatie op te lossen. Het controlesnapshot staat in `VERIFICATIE-DOMEIN.json`; dit bewijst nog geen werkende HTTPS-site.

## Domeinverificatie bewaren

Dit door GitHub verstrekte TXT-record is opgeslagen en geverifieerd:

| Recordnaam (volledig) | Type | Inhoud |
| --- | --- | --- |
| `_github-pages-challenge-lukemarcom-glitch.rdam39.nl` | TXT | `d255cff1cd52018e218def5d4ef03a` |

Dit is een DNS-verificatiecode, geen login-token. Controleer de actuele code op https://github.com/settings/pages_verified_domains/rdam39.nl als het verificatieverzoek opnieuw is aangemaakt. Laat het TXT-record na verificatie staan.

## Ingestelde websitekoppeling

In de repository onder Settings → Pages staat custom domain `rdam39.nl`. Dit is ingesteld **vóór** de website-DNS naar GitHub werd omgezet. De publicatie blijft via GitHub Actions lopen; een `CNAME`-bestand in `site/` is hiervoor niet nodig.

De Hostnet-websiteverwijzingen voor het hoofddomein en www zijn vervangen door deze records, met TTL 600 seconden:

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

## HTTPS en livecontrole

1. Controleer de DNS bij beide Hostnet-nameservers en een publieke resolver.
2. Wacht op de domeincontrole en certificaatuitgifte in GitHub Pages en schakel **Enforce HTTPS** in zodra beschikbaar.
3. Controleer `https://rdam39.nl/`, `https://www.rdam39.nl/` en de HTTP-doorsturingen zonder certificaatwaarschuwing of bypass. Het hoofdadres wordt `https://rdam39.nl/`.
4. Draai `BASE_URL=https://rdam39.nl/ npm run test:browser`, controleer desktop en mobiel en bekijk de originele/AI-foto's en Nu 3D.
5. Werk README, publicatiedocumentatie en overdracht bij met het werkelijk gecontroleerde hoofdadres en de verificatiestatus. De oude Sites-publicatie blijft een afzonderlijke deployment.

### Vervolgcontrole via GitHub CLI

Gebruik een al geautoriseerd account met beheerrechten op deze repository; geen tokens in de broncode opslaan.

```sh
gh api repos/lukemarcom-glitch/lukemarcom/pages
gh api repos/lukemarcom-glitch/lukemarcom/pages/health
# Pas zodra het certificaat beschikbaar is:
gh api --method PUT repos/lukemarcom-glitch/lukemarcom/pages -F https_enforced=true
curl -I https://rdam39.nl/
curl -I https://www.rdam39.nl/
curl -I http://rdam39.nl/
BASE_URL=https://rdam39.nl/ npm run test:browser
```

Bij een nog lopende DNS-controle kan het health-endpoint tijdelijk een leeg object teruggeven. Gebruik geen `curl -k` of andere certificaatbypass voor de eindcontrole. De oorspronkelijke webrecords hadden TTL 3600; caches kunnen deze nog tot hun vervaltijd bewaren. Hostnet noemt maximaal 24 uur voor wereldwijde overname.

Bronnen: [GitHub: custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [GitHub: domein verifiëren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), [Hostnet: DNS wijzigen](https://helpdesk.hostnet.nl/hc/nl-nl/articles/360014581437-DNS-wijzigen).
