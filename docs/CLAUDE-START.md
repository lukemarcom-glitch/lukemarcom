# Verderwerken vanuit Claude

Repository: https://github.com/lukemarcom-glitch/lukemarcom

## Claude Code: daadwerkelijk aanpassen en testen

Selecteer deze repository in Claude Code op het web, of open een lokale clone in Claude Code (desktop, terminal of IDE). Voor toegang vanuit Claude Code op het web moet je GitHub binnen jouw Claude-account koppelen; de lokale GitHub CLI-aanmelding geeft Claude op het web niet automatisch toegang. Geef bij die koppeling alleen de benodigde repository toegang.

Een lokale clone maken:

```sh
git clone https://github.com/lukemarcom-glitch/lukemarcom.git
cd lukemarcom
npm run dev
```

Open http://127.0.0.1:8765/ . Start Claude Code vanuit deze map of selecteer de map in de desktopapp. `CLAUDE.md` importeert de projectafspraken en overdracht. Lees ter controle de geladen instructies; behandel ze als context, niet als garantie dat iedere AI ze altijd volgt.

Gebruik bijvoorbeeld deze startprompt:

> Werk aan RDAM39 in deze repository. Lees CLAUDE.md, AGENTS.md en docs/OVERDRACHT.md. Controleer de huidige staat met npm run check en start de website lokaal. Behoud de historische scope, bronvermeldingen, origineel/AI-fotoparen en mobiele bediening. Maak een aparte branch voor mijn wijziging, voer passende tests uit en lever een pull request op. Mijn wijziging is: [vul hier je verzoek in].

Lees `docs/ONTWIKKELEN.md` voor browsertests en eventuele modelwijzigingen. Voor schrijven naar GitHub is een geautoriseerd account met schrijfrechten nodig. Een openbaar project kun je zonder account lezen/clonen; openbaar betekent niet dat iedereen het kan wijzigen. Nieuwe commits op `main` publiceren relevante wijzigingen via GitHub Actions.

## Gewone Claude-chat of Project: context toevoegen

Gebruik **Add from GitHub** in een chat of **GitHub** bij projectkennis en selecteer deze repository. Begin met `README.md`, `AGENTS.md`, `CLAUDE.md` en `docs/`; voeg voor een concrete taak de relevante `.js`, `.css`, `.html` of catalogusbestanden toe. Niet alle honderden foto's en modellen hoeven in de chatcontext. Gebruik **Sync** na repositorywijzigingen.

Deze kennisintegratie geeft Claude broncontext. Voor het daadwerkelijk uitvoeren van code, testen en terugschrijven is Claude Code de geschikte route. Er is vanuit deze migratie geen Claude-taak gestart en geen afzonderlijke Claude-accountkoppeling uitgevoerd.

Officiële uitleg:

- https://code.claude.com/docs/en/memory
- https://support.claude.com/en/articles/12618689-claude-code-on-the-web
- https://support.claude.com/en/articles/10167454-use-the-github-integration
