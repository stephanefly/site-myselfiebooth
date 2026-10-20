# Pages machines — validation du 20 octobre 2026

## Périmètre

Refonte des six pages `/prestations/photobooth/`, `/prestations/miroirbooth/`,
`/prestations/videobooth/`, `/prestations/air360booth/`, `/prestations/voguebooth/`
et `/prestations/ipadbooth/`.

Le composant `src/components/machines/MachinePage.jsx`, sa feuille CSS isolée et
son contenu dédié remplacent les longues pages génériques. Navigation, pied de
page, catalogue partagé, prix, liens de réservation et autres pages sont préservés.
Les anciennes ancres explicites, les ancres des sections génériques et `#faq`
restent disponibles.

La dernière révision donne la priorité aux images : galerie de deux grandes
vues, deux ou trois cartes de personnalisation illustrées, légendes courtes,
offre et installation condensées. Les détails restent disponibles dans les
cinq réponses de FAQ, raccourcies sans supprimer les conditions essentielles.
Les photos réelles et les visuels créés à partir des machines sont tracés dans
le manifeste interne. Aucun visuel de projection n’est présenté comme une
réalisation d’un nouveau client. Les vidéos se chargent uniquement à l’ouverture.

## Réduction du texte et place des images

Comparaison Playwright à 1440 px, FAQ fermée, sur le contenu propre à la page.

| Page | Mots visibles avant → après | Images avant → après |
| --- | ---: | ---: |
| Photobooth | 682 → 321 | 5 → 8 |
| Miroirbooth | 685 → 320 | 5 → 8 |
| 360 Booth | 695 → 339 | 5 → 8 |
| Air360 Booth | 706 → 344 | 5 → 8 |
| Vogue Booth | 709 → 330 | 5 → 8 |
| iPad Booth | 690 → 325 | 4 → 7 |

Le texte visible diminue de 51 à 53 %. La hauteur du contenu diminue d’environ
30 % sur ordinateur. Même en comptant les réponses de FAQ, chaque page reste
sous 450 mots. Le contrôle automatique protège un minimum de sept images
distinctes et un plafond de 550 mots, FAQ comprise.

## Offres conservées

| Machine | Durée et tarif du catalogue |
| --- | --- |
| Photobooth | 400 € / 5 h |
| Miroirbooth | 450 € / 3 h ; 500 € / 5 h |
| 360 Booth | 400 € / 3 h ; 450 € / 5 h |
| Air360 Booth | 400 € / 3 h ; 450 € / 5 h |
| Vogue Booth | 500 € / 5 h ; corporate à partir de 900 € HT selon brief |
| iPad Booth | 250 € / 24 à 48 h |

Vogue : photographe et impressions en option. iPad : offre numérique, livraison
optionnelle et animateur selon formule. Les capacités 360 / Air360 restent
soumises à la configuration ; l’espace et les conditions techniques sont à
valider avant confirmation. Personnalisations complexes et options sur devis.

## Vérifications

- `npm run build` : export de 133 pages, contrôles des images, provenance,
  sources, SEO, FAQ, médias et absence de doublon sur une page réussis.
- `node scripts/check-machine-pages.mjs` : tarifs/durées, machine sélectionnée
  dans le devis, H1, canonical, Service, FAQ visible/JSON-LD, ancres, images
  descriptives et vidéos à la demande validés sur les six pages.
- `node scripts/check-corporate.mjs` et `node scripts/check-realisations.mjs` :
  réussis.
- Playwright / Chromium : 6 pages × 4 largeurs (1440, 768, 390, 320 px).
  Les 24 cas ont été vérifiés après la révision visuelle.
  Aucun débordement horizontal, média manquant, échec HTTP local ou erreur JS.
  Vérification de la FAQ au clavier, des ancres sous la navigation fixe,
  ouverture des photos/vidéos, métadonnées vidéo, fermeture par Échap et retour
  du focus au bouton d’origine.
- Axe : zéro violation dans les contenus refaits à 1440 et 390 px et dans les
  fenêtres de médias à 390 px.
- Comparaison avant/après : contenu principal, footer, title, description et
  canonical identiques pour les 127 pages hors périmètre.
- `git diff --check` : réussi.

## Lighthouse

Mesures locales de l’export de production avec compression HTTP, Chromium et
simulation mobile Lighthouse. Scores de laboratoire, sans mesure terrain des
Core Web Vitals.

| Page | Performance mobile | SEO | Bonnes pratiques | LCP mobile | CLS |
| --- | ---: | ---: | ---: | ---: | ---: |
| Photobooth | 96 | 100 | 100 | 2,78 s | 0 |
| Miroirbooth | 92 | 100 | 100 | 3,31 s | 0 |
| 360 Booth | 93 | 100 | 100 | 3,23 s | 0 |
| Air360 Booth | 92 | 100 | 100 | 3,38 s | 0 |
| Vogue Booth | 91 | 100 | 100 | 3,38 s | 0 |
| iPad Booth | 95 | 100 | 100 | 2,93 s | 0 |

Photobooth desktop : performance 100, SEO 100, bonnes pratiques 100,
LCP 0,55 s, CLS 0. Blocage JavaScript mobile mesuré entre 21 et 65 ms.

L’accessibilité Lighthouse globale reste à 96 : les signalements concernent
le contraste du pré-footer et le contraste/libellé du CTA du footer partagés,
hors périmètre de cette refonte. Les sections et fenêtres créées ne présentent
aucune violation Axe dans les scénarios contrôlés.

Ces vérifications portent sur l’export local ; elles ne confirment pas une
mise en production ni des résultats Lighthouse du serveur public.
