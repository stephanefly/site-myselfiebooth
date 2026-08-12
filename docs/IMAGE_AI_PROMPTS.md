# Images IA issues du réel

## Règle absolue

Le site ne référence plus aucune image entièrement générée par IA.

Une image assistée par IA doit obligatoirement partir d'une ou plusieurs photos ou vidéos réelles MySelfieBooth. Elle conserve un lien de provenance vers ces sources et porte le tag visible `Image IA issue du réel`.

## Dérivés principaux

| Dérivé | Sources réelles | Usage |
| --- | --- | --- |
| `hero-photobooth-reception.webp` | `event-archive/anogini-photobooth-01.webp`, `realisations-machines/duo-photobooth-miroir.webp` | Hero et vues Photobooth |
| `activation-360-entreprise.webp` | `realisations/sephora-360booth.webp`, `reel-gifs/booth-360-sephora.gif` | 360 Booth et entreprise |
| `vogue-maries-lydia-vincent.webp` | `vogue-real/vogue-booth-mariage-card.webp` | Mariage et Vogue Booth |
| `tirages-invites-mariage-gala.webp` | `event-archive/brice-tirages.webp`, `realisations-machines/tirages-gala.webp` | Tirages et souvenirs |
| `phonebooth-invitee-reelle.webp` | `reel-gifs/animation-phonebooth.gif`, `phonebooth.webp` | Phonebooth audio |
| `fabrication-famille-photobooth.webp` | `equipe/fabrication-photobooth-en-famille.webp`, `equipe/premier-photobooth-en-fabrication.webp` | Histoire et fabrication familiale |

Les pages réutilisent directement ces six fichiers canoniques. Aucune copie technique n'est créée. Le registre unique `src/data/mediaProvenanceManifest.json` relie chaque dérivé à ses sources réelles.

## Contraintes communes des prompts

- préserver la géométrie exacte des machines réelles ;
- préserver les identités, tenues et proportions des personnes sources ;
- ne pas inventer de client, de marié, d'invité, de marque ou de prestation ;
- ne pas ajouter de texte, logo ou filigrane fictif ;
- limiter les changements au cadrage, à la lumière, à la cohérence du fond et au nettoyage des artefacts de vidéo ;
- conserver un rendu documentaire crédible plutôt qu'une photographie de stock.

## Contrôle

```bash
npm run provenance:check
```

Le build échoue dès qu'une page référence un ancien dossier d'images entièrement synthétiques.
