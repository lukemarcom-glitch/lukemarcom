# Publiceren en herstellen

De publicatiemap is **`site/`**. Upload deze map als statische website. Er is geen buildstap die HTML genereert, geen database en geen productieserver nodig. De bronbestanden zijn gelijk aan de gepubliceerde bestanden.

## GitHub Pages

Repository: `lukemarcom-glitch/lukemarcom`.
GitHub Pages-adres: `https://lukemarcom-glitch.github.io/lukemarcom/`.
Controleer `OVERDRACHT.md` voor de werkelijke publicatiestatus; het adres hierboven is geen livebewijs.

1. Stel in GitHub **Settings → Pages → Build and deployment → Source → GitHub Actions** in.
2. De Pages-workflow controleert eerst de inhoud en markerlogica en publiceert daarna alleen `site/`.
3. Een push naar `main` met wijzigingen in `site/`, controles of de publicatieworkflow publiceert een nieuwe versie. Alleen documentatie wijzigen start geen nieuwe site-deployment; handmatig starten kan via Actions → Publish RDAM39 → Run workflow. Bekijk de geslaagde workflowrun én open de site zonder ingelogde sessie.
4. Controleer laden van kaart, een origineel/AI-paar, de lichtbak, Nu 3D, verhalen en een mobiele viewport.

GitHub Pages is gratis voor openbare repositories. Voor een privérepository is een passend betaald GitHub-abonnement nodig; repositoryzichtbaarheid niet veranderen om een hostingfout te omzeilen. Een private code-repository kan ook aan een andere openbare statische host worden gekoppeld. Behoud dan dezelfde publicatiemap.

Officiële uitleg: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages . Gepubliceerde site maximaal 1 GB; zachte bandbreedtelimiet 100 GB/maand. De migratieversie is ongeveer 245 MiB. Bij aanzienlijke groei vooral beeldoptimalisatie/caching en eventueel aparte assethosting onderzoeken.

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
