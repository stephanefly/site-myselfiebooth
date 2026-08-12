# Conservation de l'existant

## Regle appliquee

Aucune route existante n'a ete supprimee. La refonte enrichit et structure les contenus au lieu de retirer des offres, pages, images ou liens.

## Routes conservees

- `/`
- `/prestations/`
- `/prestations/photobooth/`
- `/prestations/miroirbooth/`
- `/prestations/videobooth/`
- `/prestations/voguebooth/`
- `/prestations/ipadbooth/`
- `/prestations/air360booth/`
- `/prestations/packvip/`
- `/prestations/personnalise/`
- `/evenements/`
- `/evenements/corporates/`
- `/evenements/mariages/`
- `/evenements/anniversaires/`
- `/evenements/soirees/`
- `/options/`
- `/options/phonebooth/`
- `/options/panneau/`
- `/paris/`
- `/lyon/`
- `/rouen/`
- `/a-propos/`
- `/blog/`
- `/terms/`
- `/privacy-policy/`
- `/conditions/`

## Prestations conservees et clarifiees

- Photobooth
- Miroirbooth
- 360 Booth
- Air360 Booth
- iPad Booth
- Vogue Booth
- Pack VIP
- Formule complète

## Options conservees et clarifiees

- Mur floral
- Phonebooth audio
- Porte-clés photo
- Magnets premium
- Magnets simples
- Panneau fontaine
- Livre d'or video
- Holo 3D
- Livre d'or physique
- Panneau de bienvenue
- Fond LED 360
- Photographe Vogue Booth
- Impression Vogue Booth
- Decoration Vogue Booth

## Fichiers et medias

- Les medias reels dans `public/images/`, `public/logos/` et `public/icons/` sont conserves.
- Les anciens visuels entierement synthetiques ont ete retires.
- Les derives IA traces sont ajoutes dans `public/images/ai-from-real/`.
- Les six dérivés IA canoniques sont centralisés dans `public/images/ai-from-real/`.
- Les sources réelles de chaque dérivé IA sont documentées dans le registre unique `src/data/mediaProvenanceManifest.json`.
- Les composants `Footer.jsx` et `next.config.js` ont ete reecrits pour nettoyer l'encodage et la structure, sans retirer de route ni fonctionnalite.
