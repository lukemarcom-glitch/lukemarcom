# RDAM39 — starten in Claude Code

@AGENTS.md
@docs/OVERDRACHT.md

Werk in `site/`; dat is de bron én de publicatiemap. Node.js 22+ is genoeg om de website te draaien. Geen ChatGPT-account, Sites-koppeling, API-sleutels of originele chat nodig.

- `npm run dev` — lokale website op http://127.0.0.1:8765/ (geen installatie nodig).
- `npm run check` — bestanden, catalogi en markerregressies.
- `npm ci && npx playwright install chromium` — eenmalig voor browsertests.
- `npm run test:browser` — met een draaiende lokale server; `BASE_URL` kan ook het openbare adres zijn.

Lees `docs/ONTWIKKELEN.md` voor geometrie en nieuwe locaties; `docs/PUBLICEREN.md` voor deployment. Gebruik bij samenwerking een branch en pull request. Push naar `main` publiceert relevante wijzigingen automatisch; behoud de bestaande historische scope en maak geen nieuwe opdracht van oude ideeën in de overdracht.
