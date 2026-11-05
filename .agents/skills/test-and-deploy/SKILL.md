---
name: test-and-deploy
description: "Utiliser avant commit, push, fusion ou mise en production du site Next.js MySelfieBooth pour vérifier le build, SEO, médias et contact."
---

# Vérification et publication — site vitrine

1. Inspecter git status et git diff; refuser les fichiers secrets, changements hors périmètre ou suppression involontaire d'actifs/références.
2. Si Node.js et les dépendances sont disponibles, exécuter dans le dépôt:
    npm ci
    npm run build
    node scripts/check-contact.mjs
   La commande build lance les contrôles de médias/provenance, sitemap, SEO, pages et export statique configurés dans package.json.
3. Vérifier que out/index.html existe après un build réussi. Exécuter au besoin les commandes ciblées déjà définies dans package.json (images:check, media:check, local:check, seo:check après build).
4. Pour navigation, formulaire, design ou conversion, faire des vérifications visuelles desktop/mobile si un navigateur est disponible. Aucun test de contact ne doit soumettre un véritable email.
5. Le dépôt exporte un site statique (next.config.js) et .github/workflows/deploy-ionos.yml publie out/ vers IONOS à chaque push sur master, avec contrôles post-publication.
6. Le push sur master est une action de production potentielle: ne pas le lancer implicitement, même pour un changement de documentation. Proposer une branche/PR, sauf demande explicite de publication.
7. Si un contrôle échoue ou ne peut pas tourner, ne pas annoncer « déployé/testé ». Donner l'erreur, la cause probable et le correctif conseillé.
8. Conclure par branche et commit, contrôles exécutés/résultats, risques restants et confirmation explicite de l'état non déployé ou déployé.

Ne pas confondre préparation d'une PR et publication sur IONOS.
