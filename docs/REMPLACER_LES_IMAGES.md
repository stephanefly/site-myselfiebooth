# Remplacer une image

## Par une image vraie

1. Ajouter la photo ou la capture réelle dans `public/images/`.
2. Remplacer la référence dans la source de données concernée.
3. Utiliser un texte alternatif factuel.
4. Lancer les contrôles. Une image absente du manifeste est automatiquement considérée comme réelle.

## Par un dérivé IA du réel

1. Choisir une ou plusieurs sources réelles MySelfieBooth clairement identifiées.
2. Générer uniquement une amélioration ou une mise en scène dérivée de ces sources.
3. Conserver les personnes, machines et produits réels sans en inventer.
4. Placer le fichier sous `public/images/ai-from-real/`.
5. Ajouter le chemin, le tag `ai_from_real` et toutes les sources dans le manifeste de provenance.
6. Lancer les contrôles.

## Interdit

- utiliser une image entièrement synthétique ;
- présenter un dérivé IA comme une photo réelle ;
- inventer un client, un marié, un invité ou une machine ;
- omettre la source réelle d'un dérivé ;
- laisser un ancien chemin vers `ai`, `blog-ai`, `generated`, `machines-ai`, `ai-faithful`, `ai-fusions`, `selector` ou `ia`.

## Contrôles

```bash
npm run images:check
npm run build
```
