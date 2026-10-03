# Originele MONNICKENDAM-bordjes hersteld

3 oktober 2026. Rechtstreekse toestemming gebruiker: **“Ja, plaats de originele bordjes terug”**. Geen nieuwe AI-generatie uitgevoerd na deze toestemming; uitsluitend de twee bewezen kleine projecting bordjes uit het ongewijzigde bronorigineel in de eerste conservatieve AI-probe teruggeplaatst.

## Goedgekeurde bestanden

- `hoogstraat-ai-bronbordjes-v1.png`: nieuw masterbestand, 1065 × 1477.
- `hoogstraat-ai-bronbordjes-v1.webp`: verliesloos webbestand, exact dezelfde RGB-pixels als PNG.

De bestaande gepubliceerde AI is niet overschreven. Catalogus/runtime-integratie wordt door de hoofdagent uitgevoerd uitsluitend voor Hoogstraat353/357.

## Methode en controles

Reproduceerbaar script `restore-source-signs.py`. Het bron-JPEG is slechts gelezen. Voor aansluiting op dezelfde volledige fotokadering is het origineel met LANCZOS van2127×2950 naar1065×1477 geresampled, zonder perspectiefvervorming of tekstretouchering. De bordjes liggen in beide versies op dezelfde plaats; geen aanvullende warp nodig.

Twee nauw begrensde vierhoekmaskers in uitvoercoördinaten: links `(254,931),(303,934),(303,951),(254,948)`; rechts `(347,920),(398,922),(398,939),(347,938)`. Randverzachting0,55pixel uitsluitend **naar binnen**, zodat geen pixels buiten deze bordjesmaskers worden gewijzigd. Geen nieuwe getypte letters, verscherping, inkleuring of opvulling. De bronbordjes blijven bewust zwart-wit en fotografisch zacht.

Detailuitsnede vergeleken met geresampled origineel: beide bordjes tonen weer de oorspronkelijke MONNICKENDAM-lettervormen en dezelfde woordvorm/perspectief. De bronsoftheid blijft behouden; geen valse scherpte of pseudoletters. Beide grote MONNICKENDAM-gevelwoorden en DE KAPLAARS visueel gecontroleerd: correct en door deze correctie ongewijzigd. Hele PNG/WebP-kadering opnieuw bekeken: architectuur, personen/mannequins, ramen, deuren, straat en overige scène blijven gelijk aan geselecteerde AI-probe buiten de bordjes. Pixelcontrole bewijst **nul wijziging buiten de maskers** en pixelgelijkheid PNG/WebP.

De nieuwe gecombineerde afbeelding is visueel goedgekeurd als AI-kleurinterpretatie met oorspronkelijke zwart-witbordjes teruggeplaatst. Kleuren, fijne winkelinhoud, vlagkleuren en overige AI-details blijven interpretatief. Het ongewijzigde originele archiefbeeld blijft het historische bewijs. Bij de galerie vermelden: “AI-kleurinterpretatie; twee kleine winkelbordjes uit het oorspronkelijke zwart-witbeeld teruggeplaatst om de bewezen spelling te behouden.”

Bron-/uitvoerhashes, maten, maskers en controles staan machineleesbaar in `BRONBORDJES-VERIFICATIE.json`. Detailbewijs: `bronbordjes-detail.png`. Originele SHA256 `f8aec159c365858c0f6f13d150bb8632cedf16139d41a4e85956816399c35ce1`; PNG `0e0320e6a543c54b05247c3834fc617ee9ad77d9724a2a7940c24ef2369d9363`; WebP `af8e2edbd28f9c516813c05949cdf3a02977ced7123cdbd0ce9a6a9ebe6472d7`.

De eerdere beide probes blijven afgekeurd als zelfstandige galeriebeelden. De nieuwe toestemming en correctie heffen uitsluitend de MONNICKENDAM-bordjesblokkade op. Dit is geen bewijs voor 3D/deploymentcontrole.


Publicatiebestandnamen: foto-1-ai.png en foto-1-ai.webp in deze map zijn de hierboven genoemde goedgekeurde master/WebP, met dezelfde hashes. PROMPT-AI-20261003.md bewaart beide generatieve prompts. Het correctiescript en afgewezen probes blijven losse lokale onderzoeksbestanden; de repository bewaart methode, maskers en hashes, niet iedere afgewezen generatie.
