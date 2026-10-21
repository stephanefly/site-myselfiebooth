# Pages événements — validation du 21 octobre 2026

## Périmètre

- `/evenements/` : quatre univers illustrés — entreprises, mariages, anniversaires
  et soirées privées — avec des liens vers leurs pages dédiées.
- `/evenements/mariages/`, `/evenements/anniversaires/`, `/evenements/soirees/` :
  nouvelles pages dédiées, avec une structure commune et un contenu propre à chaque
  événement. Le composant MarketingPage des autres rubriques n’est pas modifié.
- Les 129 autres contenus principaux exportés, dont la page corporate, sont
  identiques à l’export enregistré avant les modifications.

## Contenu et visuels

Chaque page dédiée comporte quatre sections : présentation, trois animations
conseillées, personnalisation et souvenirs, puis formule et informations pratiques.
Huit images, une vidéo réelle et cinq questions fréquentes par page.

Les prix des machines et les packs viennent du catalogue existant. Les anciens
montants incohérents de la page Mariages ont été remplacés. Vogue : photographe
et impressions en option hors pack adapté. iPad : formule numérique sans tirages.
Le lieu, le déplacement, les options et les organisations particulières restent
soumis à validation et devis.

Deux nouvelles images d’ambiance utilisent les photos réelles du Photobooth et
du Miroirbooth comme références. Leurs versions 480/900/1440 sont tracées dans le
manifeste interne. Aucune nouvelle réalisation client n’est revendiquée. Le visuel
Vogue personnalisé Stephane & Juliette est repris sur la page Mariages.

Les extraits réels sont les séquences déjà contrôlées des pages machines : Vogue
pour Mariages, 360 pour Anniversaires, Miroirbooth pour Soirées. Lecture au clic,
miniature visible, contrôles natifs, transfert du focus vers le lecteur et lien de
secours en cas d’échec. Aucun téléchargement vidéo automatique.

Les deux images du hero du portail ont des versions adaptées à leur affichage :
146 352 octets pour les sources de repli, contre 575 474 auparavant, soit environ
75 % de moins. Les originaux sont conservés. Le placement des figures et du fil
d’Ariane est corrigé dans le périmètre des pages événements.

## Vérifications

- `npm run build` : 133 fichiers HTML exportés, 130 pages indexables. Contrôles
  d’intégrité, provenance, sources, SEO et médias réussis, sans avertissement SEO.
- Contrôles machines, corporate et réalisations réussis.
- Comparaison des contenus principaux des 129 fichiers hors périmètre : identiques.
- Anciennes ancres conservées sur les trois pages dédiées ; IDs uniques et liens
  d’ancrage valides. Un H1, canonical propre, Service, BreadcrumbList et FAQPage.
- Les cinq questions affichées correspondent exactement à leurs données structurées.
- Chromium : quatre routes × quatre largeurs (1440, 768, 390, 320 px). Rejeu des
  cas portail/Anniversaires après les ajustements visuels, puis du portail après
  l’optimisation des images. Décodage des images, lecture, FAQ au clavier, focus,
  absence de débordement et d’erreur JS/HTTP locale vérifiés.
- Axe : zéro violation dans le contenu des nouvelles pages dédiées et dans les
  quatre cartes d’orientation du portail, à 1440 et 390 px.
- Vidéos testées avec les préférences de mouvement normales et réduites : aperçu
  net avant lecture, aucun effet de chargement bloquant.
- `git diff --check` réussi.

## Lighthouse

Mesures de laboratoire sur l’export local avec compression HTTP. Le portail a été
remesuré après optimisation des images ; les autres pages n’ont pas changé depuis
leurs mesures. Aucune donnée terrain des Core Web Vitals n’est disponible ici.

| Page               | Format     | Performance | Accessibilité globale | SEO | Bonnes pratiques |    LCP | CLS |
| ------------------ | ---------- | ----------: | --------------------: | --: | ---------------: | -----: | --: |
| Portail événements | Mobile     |          89 |                    96 | 100 |              100 | 3,83 s |   0 |
| Mariages           | Mobile     |          90 |                    96 | 100 |              100 | 3,61 s |   0 |
| Anniversaires      | Mobile     |          90 |                    96 | 100 |              100 | 3,68 s |   0 |
| Soirées            | Mobile     |          91 |                    96 | 100 |              100 | 3,53 s |   0 |
| Mariages           | Ordinateur |         100 |                    96 | 100 |              100 | 0,71 s |   0 |

Les signalements d’accessibilité globale restants concernent notamment le bandeau
social et le footer partagés, déjà décrits dans l’audit. Les LCP mobiles restent
au-dessus de l’objectif de 2,5 s dans ce scénario ; ces mesures ne constituent pas
une validation des Core Web Vitals en production.

Captures et résultats détaillés : `/workspace/scratch/events-review/`.
Les contrôles locaux ne confirment pas la fin du déploiement public.
