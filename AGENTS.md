# MySelfieBooth — instructions pour Codex

Ce dépôt porte le site vitrine, les visuels et les contenus MySelfieBooth. Ne jamais inventer le modèle d'une machine, une réalisation, un tarif ou une fonctionnalité commerciale.

## Contexte réutilisable
- Référentiel métier : https://app.notion.com/p/40f481b9179581fc8385c0a9cafa0dc3
- Skills Notion : machines https://app.notion.com/p/40f481b9179581fa85f4ead298ae7056 ; catalogue https://app.notion.com/p/40f481b917958190b16cebb7bad2a1ea ; communication https://app.notion.com/p/40f481b9179581689e6ec928c0e38410.
- Au début des travaux liés à ces sujets, lire la skill pertinente si l'outil Notion est disponible. Sinon utiliser les skills locales sous `.agents/skills/` et les documentations du dépôt. Une skill n'accorde aucun accès aux outils.
- Source images : `docs/MACHINES_VALIDATION.md`, `docs/IMAGE_AI_PROMPTS.md`, `src/data/mediaProvenanceManifest.json`. Pour le fonctionnement du devis : https://github.com/stephanefly/reservation/blob/main/docs/catalogue-commercial.md

## Règles
1. Le Photobooth est une borne photo ; le Miroirbooth est un grand miroir tactile ; le 360 est une plateforme vidéo rotative ; le Vogue est un studio/couloir lumineux ; ne pas les confondre.
2. Utiliser les médias réels de la machine concernée, sans inventer un nouveau modèle ou un client. Conserver la traçabilité et les tests de provenance.
3. Prix : source commerciale à jour = catalogue CRM effectivement actif ; page web et docs peuvent différer. Ne pas promettre sans vérification.
4. Respecter le design noir/doré, un style réaliste, et des textes commerciaux courts, factuels.
5. Ne pas publier de modifications directement sur la branche principale ; proposer une PR avec tests. Ne pas modifier le CRM de production.
6. À la fin, fournir les fichiers touchés, vérifications exécutées et éventuels manques d'information.
