# Image slots

Le registre central se trouve dans `src/data/imageSlots.json`. Il sert à remplacer un visuel depuis un seul endroit, sans chercher dans les composants.

## Règles

- `kind: "real"` : photo réelle déjà présente et utilisable.
- `kind: "ai"` : visuel d'ambiance généré par IA, toujours signalé comme tel.
- `kind: "manual"` : emplacement prévu pour une photo réelle à fournir.
- Un slot manuel vide garde `src: ""` et ne rend aucune balise `<img>`.
- Chaque slot doit avoir `id`, `page`, `usage`, `ratio` et `kind`.
- Une image avec `src` doit avoir un fichier réel dans `public/` et un `alt` utile.

## Slots actuels

| Slot | Page | Type | État |
| --- | --- | --- | --- |
| `home-hero-ambience` | `/` | IA | Fichier présent |
| `b2b-hero-ambience` | `/evenements/corporates/` | IA | Fichier présent |
| `b2b-case-salon` | `/evenements/corporates/` | IA | Fichier present |
| `b2b-case-seminaire` | `/evenements/corporates/` | IA | Fichier present |
| `founder-portrait` | `/a-propos/` | IA | Fichier present |
| `wedding-real-hero` | `/evenements/mariages/` | Réel | Fichier présent |
| `options-souvenirs-ai` | `/options/` | IA | Fichier présent |
| `video-poster-event` | `/` | IA | Fichier present |

## Contrôle

```bash
npm run images:check
```

Le script signale les slots manuels vides en avertissement. Il échoue uniquement si un identifiant est dupliqué, un champ obligatoire manque ou un fichier déclaré n'existe pas.
