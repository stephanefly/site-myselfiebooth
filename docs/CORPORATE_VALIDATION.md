# Refonte corporate — vérification du 20 octobre 2026

Périmètre : `/evenements/corporates/`, ses contenus, styles isolés, projections et test d'export. Aucun changement de dépendances ou de lockfile. Aucun déploiement ni push.

## Résultat

Hero corporate, quatre machines, trois concepts de cabines, neuf axes de personnalisation, comparatif natif au clavier, six cas d'usage, six étapes de service, références TotalEnergies/Sephora/Safran, galerie de huit images, trois formules sans prix fixes, six FAQ et sept liens de conversion vers la réservation.

Les photos réelles et les projections sont identifiées. Les trois cabines sont des concepts soumis à étude, sans disponibilité en stock annoncée. Les nouvelles identités sont fictives. Les neuf variantes WebP des quatre nouvelles compositions sont tracées dans le manifeste de provenance avec leurs références sources réelles. Aucun visuel de mariage n'est utilisé.

## Contrôles exécutés

- `npm ci --cache /workspace/site-myselfiebooth/.npm-cache --no-audit --no-fund` : installation verrouillée réussie, intégrité conservée.
- Serveur Next.js de développement : HTTP 200 et contenu corporate vérifiés.
- `npm run build` : compilation, export, intégrité des images, provenance, sources des galeries, sitemap, SEO, expérience et références médias réussis. La banque de médias inutilisés est conservée selon le comportement existant du projet.
- `node scripts/check-corporate.mjs` : H1 unique, canonique, Service sans prix inventé, FAQ visible conforme au JSON-LD, images uniques, absence d'assets de mariage et CTA de réservation.
- Chromium/Playwright : 1440, 768, 390 et 320 px ; aucune image cassée, erreur JavaScript, ancre absente, duplication d'identifiant ou débordement horizontal. Curseur testé avec Home/End, FAQ ouverte par interaction. Aucun problème axe WCAG A/AA dans le contenu `main`.
- Comparaison des 132 autres exports HTML avec l'état initial : aucun changement de contenu/balisage après exclusion des scripts générés et versions de ressources.
- `git diff --check` : réussi.

## Lighthouse local

Mesures sur l'export de production, avec compression gzip du texte et cache statique correspondant aux directives Apache déjà présentes dans `public/.htaccess`. Il s'agit de simulations locales, pas de mesures terrain ni d'un audit du site déployé.

| Mesure | Mobile | Ordinateur |
| --- | --- | --- |
| Performance | 95 | 99 |
| Accessibilité | 96 | 96 |
| Bonnes pratiques | 100 | 100 |
| SEO | 100 | 100 |
| LCP | 2,9 s | 0,9 s |
| CLS | 0 | 0 |
| TBT | 90 ms | 0 ms |

L'accessibilité globale reste limitée par des éléments communs existants : contraste du fil d'Ariane, texte de la section réseaux sociaux, bouton de devis du footer et correspondance du libellé accessible du lien d'avis Google. Ces composants partagés n'ont pas été modifiés dans cette refonte. Le LCP mobile reste à confirmer en conditions réelles ; aucun résultat Core Web Vitals terrain n'est revendiqué.

Rapports JSON, journal de build et captures disponibles dans `/workspace/scratch/corporate-validation/`.

## Environnement et publication

`install_script` et `start_skill` enregistrés dans le brouillon d'environnement : installation npm avec cache local, démarrage Next.js, vérification HTTP, export et contrôle statique. Ces instructions ont été exercées dans l'instance courante. La publication du brouillon et la restauration dans une nouvelle tâche n'ont pas été réalisées.

Dans les paramètres d'environnement, revoir et enregistrer les instructions puis publier l'environnement si souhaité. Cette publication d'environnement est distincte du déploiement du site. Un push sur master déclenche le workflow IONOS existant : aucun push n'a été effectué.
