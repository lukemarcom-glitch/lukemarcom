# Corso Coolsingel89 — researchdraft

Bronnenpakket: ../round5-candidates/aanvullende-selectie.md. Daarin expliciete vernietiging14mei1940, historische adresbevestiging CinemaContext, en PDM1.0 gevelbeeld SAR4282/2001-1182 april1936.

## Plaatsing

Huisnummerkaart **40110-Z4**, 1938 (al lokaal bij round4-cineac), toont aan westzijdeCoolsingel noordelijkAertvanNesstraat nummers93,91,89,87,85. **89 = perceel2289**, een lange strook met achteraan uitbreiding naar AertvanNesstraat5. Nummer91 perceel1744 en hoek93 perceel598 zijn dus geen deel van de Corso-voorgevel.

De projectkaart toont overeenkomstige smalle stroken en achterbinnenplaats. De centrale lange Corso-strook voorlopig visueel getraceerd: [[2242.5,1957],[2246.7,1971.6],[2184,1989.5],[2179.8,1974.9]]. Zie placement-overlay.jpg naast house-number-crop.jpg. Model 8.68m breed,38.76m diep,center[-432.8102,266.4344],angle1.85678. **Positie-onzekerheid10m, geen landmeetkundige nauwkeurigheid.** CinemaContext51.92140,4.47921 is externe plausibiliteitscheck, geen grondslag voor definitievefootprint.

De L-vormige achteruitbouw is nog niet opgenomen; frontstrook is conservatieve beperkte modelenvelop. Niet hele perceel automatisch uitsnijden bij integratie. Controleer modelrichting en overlap met bestaande modellen; Losse modelpreview gerenderd en bekeken: geen JavaScriptfouten,1404driehoeken. Bronpolygon heeft geen overlap met catalogusmodellen; daadwerkelijke globale meshcontrole nog bij integratie. Positieve lokalez is gecontroleerd richtingCoolsingel: angle1.85678.

## Vorm en onzekerheid

Bronfoto4430px klasse, volledig origineel4420×3305; detail in facade-reference-crop.jpg visueel bekeken. Front: lichte gevel, brede beganegrondtoegang, centrale hoge venstergroep met gebogen bekroning, smalle zijvensters, twee hogere openingen, donker steil voorste dakvlak, grote losse lettersCORSO boven dakvlak. Bomen/hek onttrekken delenpui aan zicht.

Modeldraft gebruikt bestaande city33-bouwer. Voorgebouwhoogte15.6m+dak3.1m is **geschat** uit verhoudingen, evenals 10mvoorbouwdiepte en7.5mzaalhoogte. Achterdak niet afgebeeld dus bewust sober. Palet is interpretatie, geen bewezen kleuren. Film-/postertekst niet overgenomen wegens onvoldoende leesbaarheid. CORSO-dakletters zijn schematisch toegevoegd. Model is **nog niet publicatieklaar** zonder globale plaatsingscontrole.

Geen runtime of catalog aangepast. build-draft.py reproduceert JSON en bronuitsneden. Volgende stap: globale mesh/plaatsingscontrole en AI-paar, daarna integratie. Losse front- en hoekpreview beschikbaar; geen detailinvulling van verborgen zaal.

## Integratie afgerond

Corso als131e locatie geïntegreerd met AI-paar en5inhoudelijke bronnen. Entreecorrectie: donker ingangsvlak zonder winkelkruisroeden; centraal hoogvenster3verticalebanen. Definitieve lichte mesh1356driehoeken. ModelGLB geëxporteerd en achtergrondgeknipt. `integration-spatial.json`: geprojecteerde conservatieve meshenvelop geen overlap met nabije geëxporteerde gebouwen. Kaartpreview bekeken. npmcheck10/10 en browsercheck geslaagd. Geencommitpush.
