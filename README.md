# Site MySelfieBooth

Site vitrine Next.js statique de MySelfieBooth.

## Développement

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

Le build génère le site statique dans `out/` et exécute les contrôles SEO/médias avant déploiement.

## Déploiement

Les push sur `master` déclenchent GitHub Actions, puis le contenu de `out/` est envoyé vers IONOS en SFTP.

## SEO

Le projet inclut notamment :

- sitemap XML généré automatiquement ;
- pages locales structurées ;
- données Schema.org ;
- contrôle des titres, descriptions, canoniques, JSON-LD, attributs alt et liens internes ;
- notification IndexNow après déploiement ;
- fichier `llms.txt` pour exposer les pages de référence aux agents et moteurs qui le prennent en charge.
