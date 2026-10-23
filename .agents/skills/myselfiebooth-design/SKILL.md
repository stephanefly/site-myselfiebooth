---
name: myselfiebooth-design
description: "Utiliser pour concevoir ou améliorer l'UI/UX du site vitrine premium MySelfieBooth, notamment accueil, navigation, offres et réalisations."
---

# Design premium et conversion — site vitrine

1. Lire les composants, styles et données de la page cible avant la modification. Réutiliser le design system de src/styles/styles.css: fond ivoire #f7f3ea, texte #171717, panneaux sombres #111111, or #b89445 et variantes existantes.
2. Chercher un résultat premium, sobre, rapide et orienté réservation. Éviter l'accumulation d'effets, les textes trop petits et les cartes décoratives non utiles.
3. Conserver la navigation et ses interactions clavier/tactiles; respecter Navbar.module.css et les composants en place. Sur mobile, concevoir pour la lecture et l'action immédiate.
4. Mettre en avant prestations réelles, photos/vidéos d'événements, avis vérifiés, logos autorisés et appels à l'action clairs; ne jamais inventer preuves ni clients.
5. Pour la page Réalisations, privilégier les médias réels et vidéos si c'est l'objectif demandé, en respectant accessibilité, performances, ratio et alternatives utiles.
6. Réutiliser les images déjà stockées lorsqu'elles sont fiables et non répétitives. Respecter src/data/mediaProvenanceManifest.json et docs/REMPLACER_LES_IMAGES.md.
7. Veiller aux contrastes, titres hiérarchisés, focus, tailles des éléments tactiles, bonnes performances et absence de débordements horizontaux.
8. Valider les parcours depuis navigation jusqu'à devis/contact, sur mobile et desktop si un navigateur est disponible; sinon préciser la limite. Passer test-and-deploy avant publication.

Ne pas appliquer ce thème noir/or au CRM Django, qui possède ses propres thèmes backend/équipe.
