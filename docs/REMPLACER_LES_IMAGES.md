# Remplacer les images

## Remplacer un slot manuel

1. Ajouter le fichier dans `public/images/` ou un sous-dossier clair.
2. Ouvrir `src/data/imageSlots.json`.
3. Trouver le slot par son `id`.
4. Renseigner `src` avec un chemin commençant par `/`, par exemple `/images/realisations/client-salon.webp`.
5. Renseigner `alt` avec une description honnête de ce qui est visible.
6. Passer `kind` à `real` si c'est une photo réelle validée.
7. Vider `note` ou garder une note factuelle si nécessaire.
8. Lancer `npm run images:check`, puis `npm run build`.

## Remplacer un visuel IA

1. Ajouter la photo réelle dans `public/images/`.
2. Modifier le slot correspondant dans `src/data/imageSlots.json`.
3. Passer `kind` de `ai` à `real`.
4. Remplacer l'alt illustratif par un alt descriptif réel.
5. Retirer la note `Visuel d'ambiance généré par IA.`

## À ne pas faire

- Ne pas mettre un chemin vers un fichier absent.
- Ne pas laisser un `alt` vide sur une image informative.
- Ne pas présenter un visuel IA comme une prestation réelle.
- Ne pas renommer ou supprimer les anciens médias sans vérifier leur usage.
- Ne pas créer une deuxième source de vérité dans un composant.
