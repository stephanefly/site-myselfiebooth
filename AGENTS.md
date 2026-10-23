# Codex — Site vitrine MySelfieBooth

Site vitrine Next.js 15 / React 19 en Pages Router, export statique vers out/. La branche master déclenche un workflow GitHub Actions de publication SFTP vers IONOS.

- Préserver routes, prestations, options, contacts, formulaire, SEO, médias et fonctionnement existants sauf demande explicite.
- Respecter le système visuel dans src/styles/styles.css et les composants, notamment Navbar et pages de conversion.
- Les données clients, avis, références et chiffres commerciaux doivent être vérifiés; ne jamais inventer des preuves commerciales.
- Priorité aux photos/vidéos réelles. Respecter les règles de provenance dans docs/REMPLACER_LES_IMAGES.md et le manifeste de médias.
- Vérifier npm run build et, pour le formulaire, node scripts/check-contact.mjs si les dépendances sont disponibles. Dire ce qui n'a pas été testé.
- Tout push vers master peut publier en production via .github/workflows/deploy-ionos.yml. Ne pas pousser ou fusionner automatiquement sans demande claire de publication.
- Les workflows réutilisables se trouvent sous .agents/skills/: safe-code-modification, myselfiebooth-design, test-and-deploy.
- Conclure par un résumé des changements, contrôles et risques restants.
