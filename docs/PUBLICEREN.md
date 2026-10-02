# Publiceren en herstellen

De publicatiemap is **`site/`**. Upload deze map als statische website. Er is geen buildstap die HTML genereert, geen database en geen productieserver nodig. De bronbestanden zijn gelijk aan de gepubliceerde bestanden.

## GitHub Pages

Repository: `lukemarcom-glitch/lukemarcom`.
Openbare website: **https://rdam39.nl/**. Domein, geldig HTTPS-certificaat en verplichte HTTPS-doorsturing zijn gecontroleerd op 26 september 2026. Zie [domeininstellingen](DOMEIN.md).
Het oorspronkelijke GitHub Pages-adres `https://lukemarcom-glitch.github.io/lukemarcom/` verwijst nu naar het eigen domein en is geen onafhankelijke uitwijkwebsite.
De eerste deployment is geslaagd en openbaar getest; zie `OVERDRACHT.md` en `VERIFICATIE-GITHUB.json`. Controleer na iedere nieuwe wijziging opnieuw de bijbehorende Actions-run en het openbare adres.

1. Stel in GitHub **Settings → Pages → Build and deployment → Source → GitHub Actions** in.
2. De Pages-workflow controleert eerst de inhoud en markerlogica en publiceert daarna alleen `site/`.
3. Een push naar `main` met wijzigingen in `site/`, controles of de publicatieworkflow publiceert een nieuwe versie. Alleen documentatie wijzigen start geen nieuwe site-deployment; handmatig starten kan via Actions → Publish RDAM39 → Run workflow. Bekijk de geslaagde workflowrun én open de site zonder ingelogde sessie.
4. Controleer laden van kaart, een origineel/AI-paar, de lichtbak, Nu 3D, verhalen en een mobiele viewport.

GitHub Pages is gratis voor openbare repositories. Voor een privérepository is een passend betaald GitHub-abonnement nodig; repositoryzichtbaarheid niet veranderen om een hostingfout te omzeilen. Een private code-repository kan ook aan een andere openbare statische host worden gekoppeld. Behoud dan dezelfde publicatiemap.

Officiële uitleg: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages . Gepubliceerde site maximaal 1 GB; zachte bandbreedtelimiet 100 GB/maand. De migratieversie is ongeveer 245 MiB. Bij aanzienlijke groei vooral beeldoptimalisatie/caching en eventueel aparte assethosting onderzoeken.

## Eigen domein

De eigenaar koos `rdam39.nl`. Domeinverificatie, DNS-koppeling, HTTPS en de anonieme desktop-/mobiele eindcontrole zijn afgerond. GitHub beheert het certificaat; **Enforce HTTPS** blijft ingeschakeld. Zie [domeininstellingen](DOMEIN.md) en [controlebewijs](VERIFICATIE-DOMEIN.json).

## Veilige updates

```sh
git status
npm run check
# Browsercontrole indien UI, inhoudspaden, modellen of hosting veranderden.
git add <bewust gewijzigde bestanden>
git commit -m "Beschrijf de wijziging"
git push origin main
```

Gebruik voor samenwerking een branch/pull request. `.github`-workflows gebruiken de tijdelijke `GITHUB_TOKEN`; een persoonlijk token hoort nooit in code, documentatie of een workflow.

## Terugdraaien

Gebruik `git revert <commit>` gevolgd door een push en controleer de nieuwe deployment. Dit bewaart de geschiedenis. Een tag markeert een terugvindbare versie maar is op zichzelf geen terugdraaiing. Voor grote wijzigingen kun je een tag maken en de repository klonen als extra backup.

## Verhuizen naar een andere host

Iedere host voor statische HTML/CSS/JS kan `site/` aanbieden. Houd relatieve URL's, correcte MIME-types voor `.js`, `.json`, `.webp` en `.glb` en HTTPS. Start niet met een nieuwe kaartondergrond of andere historische scope omdat de host verandert.

De oude Sites-publicatie is een afzonderlijke deployment. Een GitHub-push werkt die oude URL niet automatisch bij. Verwijder die niet zolang de nieuwe website niet geverifieerd is; spreek een eventuele latere verhuizing van domein/links afzonderlijk af.

## Vijf nieuwe locaties na publicatie vergelijken

Na een aantoonbaar geslaagde Pages-run kan de bytecontrole voor een uitbreidingsronde worden uitgevoerd met:

```sh
RELEASE=<volledige-commit-sha> PAGES_RUN=<geslaagde-run-id> node scripts/verify-public-round.mjs id1,id2,id3,id4,id5 docs/VERIFICATIE-RONDE.json
```

De controle vereist vijf verschillende bestaande locaties, een schone publicatiemap en dezelfde lokale HEAD als de opgegeven release. Zij vergelijkt de openbare kaartcode, catalogus, achtergrond, vijf modellen en alle originele/AI-webbeelden met de lokale bestanden. Het rapport wordt pas geschreven als alle bestanden overeenkomen. De controle bewijst alleen bestandsgelijkheid; de Pages-status, historische bronnen en visuele desktop-/mobielcontrole blijven afzonderlijke stappen.
