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

Chaque page présente son expérience, des médias réels, la personnalisation,
les usages, les formules, les contraintes du lieu, cinq questions dédiées et
deux alternatives. Les visuels iPad Booth et Air360 ont été créés à partir des
photos des machines ; leur provenance est tracée dans le manifeste interne.
La rubrique « L’expérience, en vrai » utilise exclusivement des médias réels.
Les vidéos sont chargées seulement après ouverture de la fenêtre de lecture.

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
  Les 12 cas mobiles ont été rejoués après la dernière adaptation du hero.
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
| Photobooth | 97 | 100 | 100 | 2,63 s | 0 |
| Miroirbooth | 95 | 100 | 100 | 3,00 s | 0 |
| 360 Booth | 95 | 100 | 100 | 3,01 s | 0 |
| Air360 Booth | 95 | 100 | 100 | 3,00 s | 0 |
| Vogue Booth | 94 | 100 | 100 | 3,15 s | 0 |
| iPad Booth | 96 | 100 | 100 | 2,70 s | 0 |

Photobooth desktop : performance 100, SEO 100, bonnes pratiques 100,
LCP 0,55 s, CLS 0. Blocage JavaScript mobile mesuré entre 24 et 61 ms.

L’accessibilité Lighthouse globale reste à 96 : les signalements concernent
le contraste du pré-footer et le contraste/libellé du CTA du footer partagés,
hors périmètre de cette refonte. Les sections et fenêtres créées ne présentent
aucune violation Axe dans les scénarios contrôlés.

Ces vérifications portent sur l’export local ; elles ne confirment pas une
mise en production ni des résultats Lighthouse du serveur public.
