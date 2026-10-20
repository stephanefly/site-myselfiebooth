# Pages machines — validation du 20 octobre 2026

## Périmètre

Les six pages machines : Photobooth, Miroirbooth, 360 Booth, Air360 Booth,
Vogue Booth et iPad Booth. Navigation générale, autres pages, prix et liens
vers le devis restent préservés.

## Cohérence et médias

- Même structure : hero, trois repères identiques pour les informations clés,
  galerie de trois vues, deux cartes de personnalisation, formule et FAQ courte.
- Huit visuels distincts par page, dont deux suggestions d’autres machines.
- Galeries propres à chaque dispositif : machine, expérience et souvenir ou visuel.
  Les textes restent sous 450 mots, FAQ comprise.
- Quatre aperçus réels en boucle, sans audio. Chaque extrait a été inspecté et
  recadré dans le temps pour montrer le bon équipement. Les anciens liens vers
  des montages mélangeant plusieurs dispositifs ont été remplacés sur ces pages.
- Lecture uniquement lorsque l’aperçu est visible, arrêt hors écran, avec l’onglet
  masqué ou à l’ouverture de la fenêtre de lecture. La pause manuelle est conservée.
- Pas de chargement automatique avec mouvements réduits ou économie de données.
  Le bouton de lecture reste disponible. La séquence agrandie charge seulement au clic.
- L’Air360 et l’iPad Booth utilisent des photos dédiées et des visuels de
  personnalisation : aucune vidéo d’une autre machine n’est utilisée pour ces
  deux appareils. Le GIF nommé `air360-en-action.gif` a été exclu après inspection :
  il montre une plateforme 360 classique, pas la structure Air360.
- Les visuels créés à partir des photos de machines restent tracés dans le manifeste
  interne. Aucun nouveau client, témoignage ou événement réel n’est inventé.

### Sources des extraits

Les boucles utilisent du MP4 silencieux, plus léger qu’un GIF. Les fichiers
`*-sequence.mp4` servent à la lecture agrandie ; les `*-apercu.mp4` sont les
versions légères. Les originaux ont été conservés.

| Machine | Source réelle | Début extrait | Durée exportée | Aperçu |
| --- | --- | ---: | ---: | ---: |
| Photobooth | `/videos/realisations-machines/photobooth-miroir-espace-eden.mp4` | 4 s | 6.00 s | 213 Kio |
| Miroirbooth | `/videos/realisations-machines/miroirbooth-invites.mp4` | 11 s | 6.00 s | 291 Kio |
| 360 Booth | `/videos/event-archive/360-red-carpet.mp4` | 1 s | 4.05 s | 172 Kio |
| Vogue Booth | `/videos/instagram/reel-2-C9Ftp2ctg4u.mp4` | 6 s | 6.00 s | 253 Kio |

## Offres conservées

| Machine | Durée et tarif du catalogue |
| --- | --- |
| Photobooth | 400 € / 5 h |
| Miroirbooth | 450 € / 3 h ; 500 € / 5 h |
| 360 Booth | 400 € / 3 h ; 450 € / 5 h |
| Air360 Booth | 400 € / 3 h ; 450 € / 5 h |
| Vogue Booth | 500 € / 5 h ; corporate à partir de 900 € HT selon brief |
| iPad Booth | 250 € / 24 à 48 h |

Vogue : photographe et impressions en option. iPad : formule numérique, livraison
optionnelle et animateur selon formule. Capacités 360/Air360 selon configuration,
installation et personnalisations spécifiques soumises à validation et devis.

## Vérifications

- `npm run build` : export de 133 pages et contrôles d’intégrité, provenance,
  sources, SEO, FAQ et médias réussis.
- `node scripts/check-machine-pages.mjs` : six offres, prix, ancres, trois vues,
  aperçus propres à chaque machine sous 350 Ko, huit images et texte court validés.
- `node scripts/check-corporate.mjs` et `node scripts/check-realisations.mjs` : réussis.
- Playwright / Chromium : six pages × quatre largeurs (1440, 768, 390 et 320 px).
  Les huit cas Air360/360 ont été rejoués après la correction des sources.
  Images décodées, absence d’erreur JS/HTTP locale ou de débordement, FAQ au clavier,
  ancres, agrandissement, Échap et retour du focus vérifiés.
- Aperçus : lecture manuelle avec mouvements réduits, pause, ouverture de la séquence,
  conservation de la pause après fermeture. Puis lecture automatique à l’écran,
  pause hors écran et persistance de la pause manuelle sur les quatre machines.
  Le mode économie de données empêche bien le chargement automatique.
- Axe : zéro violation dans les contenus à 1440/390 px, y compris les commandes de
  lecture et les vidéos intégrées, ainsi que les fenêtres vidéo à 390 px.
- Comparaison : contenu principal, footer, title, description et canonical des
  127 pages hors périmètre inchangés.
- `git diff --check` : réussi.

## Lighthouse

Dernières mesures de l’export local avec compression HTTP, Chromium et simulation
mobile Lighthouse. Pages représentatives avec et sans aperçu vidéo. Il s’agit de
mesures de laboratoire, sans mesure terrain des Core Web Vitals.

| Page | Format | Performance | SEO | Bonnes pratiques | LCP | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Photobooth | mobile | 97 | 100 | 100 | 2.63 s | 0 |
| Miroirbooth | mobile | 93 | 100 | 100 | 3.23 s | 0 |
| iPad Booth | mobile | 95 | 100 | 100 | 2.93 s | 0 |
| Photobooth | desktop | 100 | 100 | 100 | 0.55 s | 0 |
| Air360 Booth | mobile | 92 | 100 | 100 | 3.38 s | 0 |
| 360 Booth | mobile | 93 | 100 | 100 | 3.23 s | 0 |

Accessibilité Lighthouse globale : 96. Les signalements restants concernent le
pré-footer et le CTA du footer partagés, hors périmètre. Les contenus et les
commandes créés ne présentent aucune violation Axe dans les scénarios contrôlés.
Ces contrôles locaux ne confirment pas la fin d’un déploiement en production.
