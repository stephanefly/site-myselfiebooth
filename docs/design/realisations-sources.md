# Réalisations — sélection du 20 octobre 2026

La page `/realisations/` utilise les photographies et vidéos originales déjà présentes dans le dépôt. Aucun client, lieu, chiffre ou témoignage n'a été ajouté sans source dans le projet.

## Événements présentés

| Sujet | Fichiers originaux | Source et présentation |
| --- | --- | --- |
| Cynthia & Ashok | `images/realisations-2026/cynthia-ashok.webp`, `videos/instagram/reel-2-C9Ftp2ctg4u.mp4` | Film d'ouverture, affiche existante extraite à 12 s ; post Instagram `C9Ftp2ctg4u` |
| Sephora Champs-Élysées | `images/realisations/sephora-360booth.webp` | Photographie existante de l'animation 360 en boutique ; aucune nouvelle prestation ou donnée de campagne revendiquée |
| Silass & Brice | `images/realisations-2026/silass-brice.webp`, `videos/instagram/reel-4-Da-0z-to0VL.mp4` | Film de réception, affiche extraite à 5 s ; post Instagram `Da-0z-to0VL` |
| Lydia & Vincent | `images/realisations-2026/lydia-vincent.webp`, `videos/vogue-real/vogue-booth-mariage.mp4` | Vogue Booth de mariage ; affiche existante |
| Gala | `images/event-archive/goldbooth-gala.webp` | Duo de machines ; aucun nom de client ou lieu ajouté |
| Alexandra & Loïc | `images/realisations-machines/miroirbooth-invites.webp`, vidéo du même nom | Miroirbooth et habillage visibles dans le média source |
| Anniversaire Vogue | `images/vogue-real/vogue-booth-anniversaire-card.webp`, `videos/vogue-real/vogue-booth-anniversaire.mp4` | Réception d'anniversaire ; aucun nom de client ajouté |
| Réception 360 | `images/event-archive/video-posters/360-red-carpet.webp`, `videos/event-archive/360-red-carpet.mp4` | Réception classée dans « Fêtes & soirées » ; aucun type de réception plus précis affirmé |

Le portrait imprimé de Zakaria et Kawtar (`event-archive/caftan-portrait-01.webp`) accompagne l'ouverture. Les autres souvenirs sont les tirages de Silass et Brice, le livre d'or de Samir et Sarah et la fabrication des porte-clés. La vidéo de montage est `videos/realisations-machines/installation-photobooth-timelapse.mp4` avec son affiche existante.

Les témoignages reprennent sans réécriture les extraits de Kevin Narayanane, Anusha Aravinthan et Lawrence ADZORMI présents dans `googleReviews`. Ils renvoient aux avis Google. Aucun compteur commercial non nécessaire n'est affiché.

## Fonctionnement

- Galerie filtrable : tous les événements (7), mariages (3), entreprises et galas (2), fêtes et soirées (2).
- Photos et films s'ouvrent dans une boîte de dialogue native, avec navigation, fermeture par Échap, focus contenu dans la fenêtre et retour au déclencheur.
- Aucun fichier vidéo n'est demandé avant une interaction. Lecture et son sont contrôlables dans la fenêtre ; les proportions originales y sont conservées.
- Les photos sous la ligne de flottaison sont chargées paresseusement. L'image d'ouverture est prioritaire.
- Anciennes ancres `films`, `tirages`, `machines` et `avis-reels` conservées.
- Styles limités à la page, sans nouvelle dépendance applicative.

## Vérifications de la refonte

- `npm run build` : export de 133 pages, contrôles d'intégrité, provenance, galeries, SEO, expérience et références médias réussis.
- `node scripts/check-realisations.mjs` : sept événements, treize photos uniques, canonique, CollectionPage, ancres conservées, filtres et dialogue accessibles dans l'export, absence de vidéo chargée avant interaction.
- `node scripts/check-corporate.mjs` : contrôle de non-régression de la page corporate réussi.
- Chromium/Playwright aux largeurs 1440, 768, 390 et 320 px : médias chargés, aucun débordement ni erreur JavaScript ; filtres 7/3/2/2 ; lecture vidéo, photo agrandie, suivant/précédent, flèches, fermeture Échap et retour du focus vérifiés.
- Contrôle axe WCAG A/AA du contenu principal et de la fenêtre photo : aucune violation détectée.
- Lighthouse mobile local sur export compressé selon les directives Apache existantes : performance 93, accessibilité globale 96, bonnes pratiques 100, SEO 100 ; LCP 2,6 s, CLS 0. Le score global d'accessibilité reste affecté par les composants communs existants hors de cette page. Ces mesures de laboratoire ne constituent pas des mesures terrain du site publié.
- Variante WebP de 600 px pour l'image d'ouverture, obtenue uniquement par redimensionnement et compression de la photographie existante ; environ 49 Ko, sans retouche du contenu.

Rapports et captures conservés dans `/workspace/scratch/realisations-review/`.
- Lighthouse desktop local : performance 100, accessibilité globale 96, bonnes pratiques 100, SEO 100 ; LCP 0,5 s, CLS 0, TBT 0 ms.


## Mise en avant des machines — 21 octobre 2026

Une section `nos-machines`, placée avant les événements et accessible depuis le bouton principal, présente quatre équipements réels avec descriptions et liens vers leurs prestations. Les films s’ouvrent dans le lecteur existant, uniquement après clic.

| Machine | Photo | Film original |
| --- | --- | --- |
| Photobooth noir & or | `collection-2026/photobooth-noir-or-900.webp` | `realisations-machines/photobooth-miroir-espace-eden.mp4` |
| Miroirbooth doré | `event-archive/video-posters/miroirbooth-installation.webp` | `realisations-machines/miroirbooth-invites.mp4` |
| Plateforme 360 | `collection-2026/plateforme-video-360-900.webp` | `event-archive/360-red-carpet.mp4` |
| Vogue Booth | `vogue-real/vogue-booth-mariage-card.webp` | `vogue-real/vogue-booth-mariage.mp4` |

Les photos présentent les équipements ; les films montrent leur utilisation lors d’événements. Les descriptions précisent ce que le visiteur peut regarder, puis les informations utiles pour préparer son devis. Aucun média généré ni nouvelle promesse commerciale ajouté.
