# Refonte audiovisuelle — /realisations/ — 22 octobre 2026

La page conserve son URL et les composants communs du site. La refonte est limitée à cette route, ses composants, ses médias dérivés et ses contrôles. Aucun changement du CRM, de la réservation, du formulaire de contact ou des autres pages.

## Résultat et sélection

- Portfolio principal : **20 médias, 14 vidéos et 6 photos, soit 70 % de vidéos**.
- Premier affichage : **10 médias, 7 vidéos et 3 photos**. Le bouton « Voir plus de réalisations » révèle les 10 suivants.
- Total des séquences sélectionnées sur la page : **19**, dont 15 sources MP4 et 4 extraits animés réels exportés de GIF en MP4, sans interpolation ni génération. Les sections réemploient certains films dans le contexte de leur histoire ; elles ne les comptent pas comme de nouveaux événements.
- Photographies originales : 6 dans le portfolio et 3 complémentaires dans les histoires. Les posters et aperçus sont des dérivés de ces sources, pas de nouvelles réalisations.
- **4 extraits auparavant non rendus dans le site audité** : `photobooth-invites.gif`, `booth-360-sephora.gif`, `animation-soiree-tour-eiffel.gif`, `tirages-sur-mesure.gif`. Le premier apparaît dans le portfolio principal ; les autres enrichissent les références ou les petits formats invités.
- Les fichiers `brice-equipe-01.webp` et `composition-tirages-reference.webp` n’étaient pas rendus directement, mais leurs autres résolutions existaient déjà dans le site. Ils ne sont pas comptés comme des sources inédites.
- Les 16 logos clients déjà affichés sont conservés. TotalEnergies et Safran ne reçoivent aucun faux reportage : aucun média de leur événement n’a été trouvé.

## Autorisations et provenance

Le propriétaire a confirmé dans cette conversation, le 22 octobre 2026 : « Tous les médias réels du projet et les logos clients déjà affichés ». Chaque source sélectionnée porte `rights.status = owner_confirmed` et une provenance réelle dans le manifeste. Les documents existants décrivent les sources des films et les références clients. Les médias dont la provenance reste indéterminée sont exclus.

Le manifeste complet, les empreintes des originaux, les scores et les chemins de production restent dans les sources du projet. `getStaticProps` ne transmet au navigateur que les informations d’affichage utiles. Aucun chemin Windows ni justification interne de droits n’est ajouté aux données publiques.

## Inventaire et doublons

Inventaire initial : **429 fichiers dans `public/`**, dont 33 MP4, 30 GIF, 365 JPG/PNG/WebP et 1 favicon. Tous les sous-dossiers ont été parcourus. Les 33 vidéos ont été sondées avec ffprobe et inspectées à trois positions ; les 30 GIF et les photos candidates ont également été examinés visuellement.

Les catégories d’usage comparent l’export initial des 138 pages, les données de la page Réalisations et les références des bundles. Elles décrivent l’état courant observé, pas une garantie historique de non-publication :

1. Fichier non rendu dans l’état initial.
2. Média rendu ailleurs, absent de la page Réalisations.
3. Média déjà présent sur la page Réalisations ou variante reconnue d’une source déjà utilisée.

Les variantes sont regroupées par source : `video-360-mobile`, `videobooth-apercu`, `videobooth-sequence` et `360-red-carpet` ; les aperçus Miroirbooth et le film Alexandra & Loïc ; les aperçus Photobooth et Espace Eden ; les extraits Vogue et le film Cynthia & Ashok ; les versions de la photo d’équipe chez Silass & Brice ; les différentes tailles de composition de tirages. Aucun doublon binaire exact n’a été trouvé ; les doublons visuels et temporels sont néanmoins identifiés.

Les images de génération présentes dans `/workspace/generated_images` et les compositions suivies dans les manifestes ont été identifiées comme hors sélection. Les originaux de montage sur `P:\Montage-EVENT\ALL_MONTAGE\RENDU_MONTAGE-COURT` ne sont pas montés ici ; les exports locaux existants sont disponibles. Les sources CDN de logos sont documentées, sans nouveau téléchargement. Aucun accès intégral au compte Instagram ou à un disque distant n’est supposé.

## Portfolio retenu

| Média | Type | Source réelle | Usage initial | Score éditorial /100 |
| --- | --- | --- | ---: | ---: |
| La fête, sous tous les angles. | video | `/videos/event-archive/360-red-carpet.mp4` | 3 | 94 |
| Cynthia & Ashok | video | `/videos/instagram/reel-2-C9Ftp2ctg4u.mp4` | 3 | 94 |
| La soirée prend la pose. | video | `/videos/realisations-machines/photobooth-noel.mp4` | 2 | 91 |
| Sephora · Champs-Élysées | photo | `/images/realisations/sephora-360booth.webp` | 3 | 91 |
| Entre amis, sans se prendre au sérieux. | video | `/images/realisations-gifs/photobooth-invites.gif` | 1 | 81 |
| Un instant à deux. | video | `/videos/event-archive/maries-photobooth.mp4` | 2 | 90 |
| Le noir, l’or et les belles soirées. | photo | `/images/event-archive/goldbooth-gala.webp` | 3 | 86 |
| Un message, juste pour vous. | video | `/videos/event-archive/phonebooth-message.mp4` | 2 | 87 |
| Des souvenirs à emporter. | photo | `/images/event-archive/composition-tirages-reference.webp` | 2 | 85 |
| Ce soir, vous faites la une. | video | `/videos/vogue-real/vogue-booth-anniversaire.mp4` | 3 | 87 |
| Silass & Brice | video | `/videos/instagram/reel-4-Da-0z-to0VL.mp4` | 3 | 95 |
| Alexandra & Loïc | video | `/videos/realisations-machines/miroirbooth-invites.mp4` | 3 | 93 |
| Silass & Brice · Côté équipe | photo | `/images/event-archive/brice-equipe-01.webp` | 2 | 86 |
| Une réception à l’Espace Eden | video | `/videos/realisations-machines/photobooth-miroir-espace-eden.mp4` | 2 | 86 |
| Gala des Juristes · Le souvenir imprimé | video | `/videos/realisations-machines/tirages-gala.mp4` | 2 | 89 |
| Le savoir-faire commence ici. | photo | `/images/equipe/fabrication-photobooth-en-famille.webp` | 2 | 87 |
| Avant le premier invité. | video | `/videos/realisations-machines/installation-photobooth-timelapse.mp4` | 3 | 90 |
| Au salon, les animations prennent vie. | video | `/videos/instagram/reel-3-DQxM5TnCOKL.mp4` | 2 | 87 |
| Samir & Sarah · Les mots restent. | photo | `/images/event-archive/livre-or-mariage.webp` | 3 | 83 |
| Les sourires se répondent. | video | `/videos/event-archive/invites-en-fete.mp4` | 2 | 90 |

Les scores sont des appréciations éditoriales issues de l’examen des images, pas des mesures techniques : émotion et personnes en action, qualité, mise en valeur de la prestation, diversité et cadrage. Les motifs détaillés et métadonnées figurent dans le manifeste et le CSV.

## Médias écartés — raisons principales

| Source ou famille | Motif |
| --- | --- |
| Compositions `ai-from-real`, `ai-cards`, `editorial-ai` | Génération : interdite sur cette page. |
| `page-visuals`, `collection-2026` et visuels promotionnels non vérifiés | Provenance réelle insuffisamment établie pour cette sélection. |
| `air360-en-action.mp4` et ses GIF | Résolution limitée, plans de matériel et valeur émotionnelle inférieure. |
| `voguebooth-soiree.mp4` | Le contenu montre une installation 360, pas un VogueBooth ; contexte peu animé. |
| `personnalisation-tirages.mp4` | Montage promotionnel ancien avec formulations commerciales non revalidées. |
| `livre-dor-video-en-action.gif` | Le fichier montre surtout une borne photo ; nom trompeur. |
| `panneau-fontaine-coulisses.gif` | Plans trop courts et peu démonstratifs pour le récit retenu. |
| Variantes compressées des mêmes séquences | Regroupées ; aucun gonflement artificiel du nombre de réalisations. |

## Dix sections créées

1. Hero vidéo 360, titre et réassurance.
2. Best of : le montage existant `PUB_2024.mp4`, recompressé ; aucune nouvelle compilation prétendue.
3. Portfolio asymétrique, neuf filtres non vides et pagination.
4. Histoires : Silass & Brice, Cynthia & Ashok, Gala des Juristes.
5. Expérience corporate Sephora et 16 références clients.
6. Rail tactile de quatre moments invités.
7. Installation et préparation des porte-clés.
8. Trois extraits Google existants et sourcés.
9. Photobooth, Miroirbooth, 360 et VogueBooth avec leurs pages.
10. CTA final sur une autre vidéo que le hero.

## Conversion, preuves et référencement

- Discussions sur mesure : `/contact/`, conformément à la demande précédente du propriétaire.
- Devis et CTA final « Créer mon événement » : le formulaire de réservation existant. Aucun paramètre de suivi existant n’a été retiré.
- CTA corporate : `/evenements/corporates/`.
- Analytics : le mécanisme existant `mySelfieBoothTrack` gère le consentement. Consultation de page, filtre, ouverture/navigation de la visionneuse, lecture manuelle et chargement supplémentaire sont instrumentés. Un aperçu automatique ne compte pas comme lecture manuelle.
- H1 unique, canonique et URL préservées, CollectionPage et ItemList. Les dates d’upload n’étant pas connues, aucun VideoObject incomplet destiné aux rich results n’est fabriqué ; les vidéos sont décrites comme MediaObject. Aucune note structurée fictive.
- Valeurs actives conservées : +700 événements, 5 ans, 4,8/5 et 77 avis. Sources : brief du propriétaire, `siteConfig`, `trustSignals` et année de fondation 2021. Les anciennes valeurs 4,9/167 du document historique ne sont pas utilisées. Google n’a pas été interrogé à nouveau : ce sont les données du projet, pas une actualisation en direct.

## Performances et comportement vidéo

- Poster du hero : **26.3 Ko** ; aperçu du hero : **272.6 Ko**.
- Sources sélectionnées : **78.9 Mio** ; versions de lecture : **37.2 Mio**, soit **−52.8 %**. Ces fichiers ne sont pas tous chargés au démarrage.
- Tous les aperçus réunis : **4.55 Mio**, chacun limité à six secondes et sans audio. Lecture d’un seul aperçu à la fois.
- Charge utile JSON éditoriale uniquement (hors HTML, CSS et JavaScript) : **3.3 Ko compressés**. Aucune dépendance applicative ajoutée.
- Aucun élément vidéo ni source MP4 n’est chargé dans le HTML initial. La source vidéo est attachée après interaction ou après vérification du viewport et des préférences.
- Un coordinateur limite la page à une vidéo active ; un aperçu ne coupe pas un film lancé manuellement. Pause hors écran, onglet masqué et changement des préférences.
- Les modes économie de données, connexions 2G et réduction des animations désactivent les lectures automatiques ; la lecture volontaire reste possible.
- Contrôles natifs, son activable, plein écran natif, fallback vers le poster et lien direct si le lecteur échoue.
- Largeurs/hauteurs et contenants réservés, images hors écran différées. Adaptations CSS à 1 600, 1 100, 760 et 450 px ; rail horizontal volontaire sur mobile. Le bouton de devis mobile commun du site est conservé.

## Vérifications exécutées

- Projet JavaScript : aucune configuration TypeScript ou ESLint autonome n’est présente ; la compilation Next.js a été exécutée, sans prétendre à un contrôle TypeScript séparé.
- `npm run build` : export des 138 pages, intégrité, provenance, SEO, galeries, expérience et références médias réussis.
- `node scripts/check-realisations.mjs` : ratios, neuf filtres, autorisations, empreintes des originaux, fichiers présents, liens, ancres, métadonnées, absence de vidéo au premier HTML et budget de lecture réussis.
- `node scripts/check-contact.mjs` : non-régression du formulaire, sans envoi de message.
- FFmpeg : décodage complet des 19 versions de lecture, aucun échec.
- Simulation JSDOM de la page de production : 10→20 cartes, neuf filtres, ouverture photo/vidéo, suivant/précédent, flèche clavier, fermeture/cancel et retour au déclencheur, lecture manuelle avec Save-Data, contrôle du son, limitation à un lecteur, arrêt avec réduction des animations et fallback d’erreur. Aucune erreur JavaScript relevée pendant ces scénarios.
- Les API vidéo, visibilité et dialogue sont simulées dans ce test : cela ne prouve ni le rendu CSS, ni la fluidité, ni le comportement natif d’un téléphone.
- Comparaison des 137 autres contenus `main` avec l’état initial : aucun changement. Les 429 fichiers médias initiaux ont les mêmes empreintes SHA-256.

## À vérifier manuellement — limites

- Rendu réel à 320/390/768/1 440 px, gestes tactiles, plein écran natif iOS/Android, focus natif du dialogue et lecture depuis IONOS.
- Sous-titres vérifiés pour les éventuelles paroles des vidéos d’origine ; aucune transcription inventée n’a été ajoutée. Les résumés textuels décrivent les scènes.
- Note et nombre d’avis Google si une actualisation commerciale est souhaitée.
- Lighthouse, LCP, CLS et INP ne sont pas mesurés dans cette session ; les objectifs de 2,5 s / 0,1 / 200 ms ne sont donc pas déclarés atteints. Les anciens rapports Lighthouse ne sont pas présentés comme mesures de cette refonte.

Les outils de contrôle de navigateur ne sont pas exposés dans cette session. La consigne lue dans [Browser — SKILL.md](skill://plugin_connector_1p_51c1ba70f47481919149861084681943/control-browser/SKILL.md) exige « Use only the associated Browser app's `js` tool » et interdit de lui substituer Playwright autonome ou l’automatisation shell. Aucune capture ni mesure de navigateur n’a donc été fabriquée. La simulation DOM et le décodage FFmpeg sont distingués des contrôles natifs manquants.

## Fichiers de référence

- `src/data/realisationsManifest.json` : sélection, droits, provenance, scores, dérivés et sections.
- `src/pages/realisations.jsx` : données publiques filtrées à la génération statique.
- `src/components/portfolio/RealisationsPage.jsx` : composition des dix sections et métadonnées.
- `src/components/portfolio/showroom/VideoProvider.jsx`, `VideoSurface.jsx`, `model.mjs` : politique et coordination des lecteurs, filtrage des droits.
- `src/components/portfolio/showroom/PortfolioGallery.jsx`, `MediaViewer.jsx`, `StorySections.jsx` : galerie, visionneuse et récits.
- `src/components/portfolio/showroom/icons.jsx`, `Showroom.module.css` : icônes et styles isolés.
- Ancien `src/components/portfolio/realisationsSelection.js` remplacé par le manifeste central.
- `public/images/realisations-showroom/`, `public/videos/realisations-showroom/` : nouveaux fichiers sans écrasement des originaux.
- `scripts/prepare-realisations-media.py` : préparation reproductible (FFmpeg/ffprobe).
- `scripts/check-realisations.mjs` : contrôles reproductibles.
- `docs/design/realisations-premium-inventory.csv` : inventaire initial et motifs.
- `docs/design/realisations-premium-checks.json` : résultats chiffrés et simulation.
