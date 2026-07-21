# MySelfieBooth

Site vitrine Next.js de MySelfieBooth, en Pages Router, export statique et contenus centralisés.

## Stack

- Next.js 15
- React 19
- JavaScript et JSX
- Pages Router dans `src/pages/`
- Export statique avec `output: "export"`
- URLs avec `trailingSlash: true`
- npm et `package-lock.json`

## Commandes

```bash
npm ci
npm run dev
npm run images:check
npm run build
```

`npm run build` génère déjà l'export statique grâce à `output: "export"`. Il ne faut pas lancer l'ancien `next export` après le build.

## Structure utile

- `src/pages/index.jsx` : page d'accueil.
- `src/pages/evenements/corporates.jsx` : parcours Entreprises principal.
- `src/components/Layout.jsx` : layout global.
- `src/components/Meta.jsx` : title, description, canonical, Open Graph, JSON-LD et Google Analytics.
- `src/components/home/HomePage.jsx` : accueil.
- `src/components/marketing/MarketingPage.jsx` : gabarit commun des pages marketing.
- `src/data/site.js` : coordonnées, domaine canonique, CTA, zones, fondateur et preuves.
- `src/data/catalog.js` : machines, options, événements et galerie.
- `src/data/marketingPages.js` : contenus des pages prestations, événements, options, locales, blog et À propos.
- `src/data/imageSlots.json` : registre central des emplacements image remplaçables.
- `docs/` : audit, mapping SEO, plan de mesure, contenus à valider et guide de remplacement des images.

## Règles de maintenance

- Ne pas créer de dossier `app/`.
- Ne pas convertir en TypeScript.
- Ne pas casser les slugs existants.
- Ne pas publier de chiffres, logos, avis ou cas clients non validés.
- Les visuels IA doivent rester identifiés comme visuels d'ambiance.
- Les emplacements image vides doivent passer par `ImageSlot` et rester sans balise `<img>` tant qu'aucun fichier réel n'est fourni.
