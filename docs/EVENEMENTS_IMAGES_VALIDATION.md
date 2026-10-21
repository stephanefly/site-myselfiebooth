# Images d’ouverture des événements — 21 octobre 2026

Cinq nouvelles compositions pour le portail événements, les mariages, les anniversaires, les soirées et le corporate. Les quatre cartes d’orientation du portail reprennent les nouveaux visuels correspondants. Aucun autre contenu de page modifié ; l’image de la page machine Vogue Booth est conservée.

Les visuels sont générés à partir des photographies des équipements réels de `collection-2026`. Les 17 fichiers WebP responsives sont enregistrés dans le manifeste interne de provenance ; ils ne constituent pas des références client. Le mariage reprend la personnalisation « Stephane & Juliette — 21.08.2021 ». Les textes alternatifs et les images de partage sont actualisés.

Vérifications locales sur l’export statique :

- Build et contrôles SEO, provenance, intégrité des images et médias réussis.
- Cinq pages vérifiées dans Chromium à 320, 390, 768 et 1 440 px : décodage de toutes les images, absence d’erreur HTTP/JavaScript et de débordement horizontal, priorité haute et tailles responsives des images principales.
- Rendu desktop et mobile inspecté visuellement ; nouvelle vérification après la retouche anniversaire et la compression finale du portail.
- Contrôles corporate, machines et réalisations réussis ; contenu principal des 128 autres exports HTML strictement identique à celui d’avant modification.
- Lighthouse mobile local : portail 90, mariages 91, corporate 96 en performance ; SEO et bonnes pratiques 100, CLS 0. Accessibilité 96, avec les limites communes du site déjà présentes. Mesures simulées, non assimilables aux données terrain des Core Web Vitals.

Captures, résultats navigateur et rapports Lighthouse : `/workspace/scratch/event-hero-refresh/` (artefacts locaux non versionnés). Le contrôle public du déploiement reste indisponible depuis cet environnement réseau.

## Ajustement des univers anniversaire et entreprise

À la demande du propriétaire, le visuel anniversaire montre désormais une jeune femme en robe rouge de princesse, avec un diadème et trois amies. Le corporate montre quatre collaborateurs en costumes et tailleurs, portant des badges professionnels, près du photobooth et du Miroirbooth. Le cadrage mobile corporate privilégie la partie droite de la photographie afin de montrer l’équipe. Les cartes du portail, les textes alternatifs et le partage social suivent ces changements ; huit nouvelles variantes WebP évitent de réutiliser les anciennes URL en cache.

Build, contrôles SEO, médias, provenance, corporate et machines validés. Trois pages vérifiées à 320, 390, 768 et 1 440 px : toutes les images décodent, aucun débordement ni erreur HTTP/JavaScript. Les 130 autres contenus principaux restent strictement identiques. Les artefacts de cette retouche se trouvent dans `/workspace/scratch/event-images-outfits/`.

Après l’ajustement du cadrage mobile, nouveau contrôle corporate aux quatre largeurs réussi. Lighthouse mobile final : anniversaires 91 et corporate 96 en performance ; SEO et bonnes pratiques 100, CLS 0 sur les deux pages.
