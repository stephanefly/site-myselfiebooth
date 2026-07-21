# Audit SEO, UX et conversion

## Constat initial

Le site avait deja une bonne base visuelle, des routes commerciales utiles et des preuves importantes, mais la structure etait difficile a lire. Les CTA etaient disperses, les contenus de pages etaient proches les uns des autres, et les donnees commerciales etaient hardcodees dans plusieurs composants.

## Points faibles observes

- SEO technique: pas de `robots.txt`, pas de `sitemap.xml`, balises schema limitees.
- UX: home page dense mais peu orientee decision, absence de comparateur clair.
- Conversion: CTA principal non standardise, CTA telephone peu visible sur mobile.
- Contenu: machines et options non centralisees, risque d'oublier des offres existantes.
- Credibilite: logos et avis utiles, mais certaines preuves doivent rester a valider.
- Images IA: assets presents mais pas toujours documentes ni signales comme visuels d'ambiance.

## Actions realisees

- Centralisation de la marque, des CTA, contacts, machines, options et signaux de confiance.
- Home page restructuree autour de la decision: hero, selecteur, catalogue, comparateur, options, preuves, FAQ.
- Pages prestations et evenements enrichies avec contenu specifique, FAQ et maillage interne.
- Ajout de `robots.txt`, `sitemap.xml`, JSON-LD Organization, WebSite, Service, FAQ et BreadcrumbList.
- Ajout de barre CTA mobile devis + appel.
- Documentation des preuves a valider, des prompts IA et de la conservation de l'existant.

## Priorites suivantes

- Valider les chiffres commerciaux exacts: avis, nombre d'evenements, zones couvertes.
- Ajouter des photos reelles optimisees avec droits verifies.
- Publier des articles guides a forte intention avant de multiplier les pages locales.
- Mesurer les clics devis, appels, scroll comparateur et clics machines.

## Passe complémentaire 2026

| Priorité | Point contrôlé | Décision |
| --- | --- | --- |
| Critique | Domaine canonique `www` vs sans `www` | Domaine sans `www` retenu car c'est celui du brief et du site public cité. |
| Critique | Open Graph relatif | Conversion en URL absolue dans `Meta.jsx`. |
| Critique | Manifest absent | Ajout de `public/site.webmanifest`. |
| Important | Page Entreprises trop courte | Enrichissement de `/evenements/corporates/` sans créer de route concurrente. |
| Important | Données internes B2B | Documentées comme confidentielles et non exposées dans le site. |
| Important | Gestion manuelle des images | Ajout de `imageSlots.json`, `ImageSlot`, docs et contrôle npm. |
| Amélioration | README générique App Router | Remplacé par une documentation Pages Router. |
