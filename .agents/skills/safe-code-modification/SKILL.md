---
name: safe-code-modification
description: "Utiliser pour corriger ou faire évoluer le site Next.js MySelfieBooth en préservant pages, SEO, médias, formulaire et conversion."
---

# Modification ciblée — site vitrine

1. Identifier les routes dans src/pages, les composants dans src/components, les données dans src/data et les styles dans src/styles. Lire leurs dépendances avant de modifier.
2. Définir les invariants de la demande: routes, liens internes, CTA devis/appel, textes importants, catalogue d'offres, SEO, affichage mobile, médias et provenance.
3. Garder le diff réduit et réutiliser les composants existants. Ne pas supprimer pages, prestations, liens, avis ou ressources sans instruction explicite.
4. Ne pas modifier le comportement du formulaire Web3Forms dans src/lib/contactForm.mjs sans vérifier les traitements réussis/échoués et le mode sans JavaScript. Ne jamais lancer d'envoi réel pour tester.
5. Pour SEO: préserver titres/canoniques, données structurées, redirections/URLs, sitemap et domaines prévus. Vérifier avant de supprimer des contenus déjà indexés.
6. Respecter docs/REMPLACER_LES_IMAGES.md: vrais médias prioritaires; toute image dérivée de réel doit avoir sa provenance; jamais une image entièrement inventée présentée comme réelle.
7. En cas de problème visuel, chercher la cause dans la cascade CSS, les composants et les états; éviter le bricolage global ou les doublons.
8. Après modification, utiliser test-and-deploy et fournir résultats, fichiers modifiés et limites.

Ne pas utiliser ce skill pour une simple question SEO sans modification du dépôt.
