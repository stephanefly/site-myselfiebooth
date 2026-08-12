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

## Google Tag Manager et Analytics

Le suivi respecte le choix enregistré dans la bannière cookies.

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-4297YBLGR6
```

- Avec un identifiant `NEXT_PUBLIC_GTM_ID` valide, le site charge Google Tag Manager après acceptation.
- Sans identifiant GTM, le site conserve automatiquement le suivi GA4 direct existant.
- Les clics vers le devis, la brochure, le téléphone, l'e-mail et WhatsApp sont envoyés dans le `dataLayer`.
- Les balises publicitaires restent refusées par défaut dans Google Consent Mode.

## Structure utile

- `src/pages/index.jsx` : page d'accueil.
- `src/pages/evenements/corporates.jsx` : parcours Entreprises principal.
- `src/components/Layout.jsx` : layout global.
- `src/components/Meta.jsx` : title, description, canonical, Open Graph et JSON-LD.
- `src/components/AnalyticsConsent.jsx` : consentement, Google Tag Manager et secours GA4 direct.
- `src/components/AnalyticsEvents.jsx` : événements de conversion du site vitrine.
- `src/components/home/HomePage.jsx` : accueil.
- `src/components/marketing/MarketingPage.jsx` : gabarit commun des pages marketing.
- `src/data/site.js` : coordonnées, domaine canonique, CTA, zones, fondateur et preuves.
- `src/data/catalog.js` : machines, options, événements et galerie.
- `src/data/marketingPages.js` : contenus des pages prestations, événements, options, locales, blog et À propos.
- `src/data/mediaProvenanceManifest.json` : registre unique des images IA issues du réel et de leurs sources.
- `docs/` : audit, mapping SEO, plan de mesure, contenus à valider et guide de remplacement des images.

## Règles de maintenance

- Ne pas créer de dossier `app/`.
- Ne pas convertir en TypeScript.
- Ne pas casser les slugs existants.
- Ne pas publier de chiffres, logos, avis ou cas clients non validés.
- Les visuels IA doivent être issus d'une réalisation réelle, enregistrés dans le manifeste et identifiés par le badge automatique.
