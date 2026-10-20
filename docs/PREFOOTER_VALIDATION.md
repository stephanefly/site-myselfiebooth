# Bandeau avant le pied de page — 20 octobre 2026

Le composant partagé `PreFooter` présente désormais un titre court, un texte
lisible sur fond noir et un seul lien de devis. La photographie de fond et son
badge ont été supprimés. Aucune nouvelle image ni dépendance n’a été ajoutée.

La barre mobile observe la visibilité du bandeau et du footer : elle se masque
dès que l’un apparaît, puis revient en remontant dans la page. Les liens de devis,
les attributs de mesure et le téléphone du footer restent disponibles.

Vérifications sur l’export local :

- Build de production réussi : 133 pages, SEO, FAQ et médias validés.
- Contrôles machines, corporate et réalisations réussis.
- Chromium : accueil, Photobooth, Air360, corporate et réalisations, aux largeurs
  1440, 768, 390 et 320 px. Bandeau inférieur à 300 px, lien de réservation,
  navigation au clavier et absence de débordement ou d’erreur locale vérifiés.
- Masquage de la barre dans le bandeau et le footer, puis retour en haut de page.
- Axe : zéro violation dans le bandeau sur les cinq pages à 1440 et 390 px.
- Contenus principaux, descriptions et canonical des 127 pages hors machines
  identiques à l’export de référence ; seuls les deux composants partagés changent.
- `git diff --check` réussi.

Ces vérifications locales ne confirment pas la fin du déploiement en production.
