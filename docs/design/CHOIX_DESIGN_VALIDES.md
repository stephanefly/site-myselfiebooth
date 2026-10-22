# Choix de design validés

**Dernière mise à jour : 22 octobre 2026**

Ce document rassemble les choix de design confirmés sur le site MySelfieBooth. Il sert de référence pour les prochaines évolutions : les choix décrits ici doivent rester cohérents, sauf nouvelle demande explicite.

## Direction artistique

- Une ambiance éditoriale, élégante et haut de gamme, inspirée des magazines de mode.
- Palette déjà validée : noir et tons sombres pour les expériences immersives, or pour les accents et les actions, ivoire/crème pour aérer certaines pages. Le vert profond sert de contraste à quelques blocs de conclusion.
- Privilégier les équipements, les événements et les souvenirs réels de MySelfieBooth. Les dérivés créés à partir du réel doivent garder une provenance traçable.

## Typographie

- **Titres et nom de marque dans la navigation : Playfair Display.** Cette police remplace Bodoni Moda, jugée trop fine.
- Titres principaux en graisse 600 ; titres secondaires en graisse 500.
- Utiliser l’italique comme accent éditorial dans certains titres, notamment en or dans le hero d’accueil. Garder le reste des titres droits pour préserver la lisibilité.
- **Textes courants, navigation et contrôles : DM Sans.**
- Les éléments internes des titres (spans compris) suivent eux aussi Playfair Display. Ce point est nécessaire au rendu de titres découpés sur plusieurs lignes.

## Navigation principale

Ordre et contenu de la navigation visibles :

1. **MySelfieBooth** (nom de marque)
2. **Nos expériences**
3. **Événements**
4. **Entreprises**
5. **Réalisations**
6. **Tarifs & Packs**
7. **Plus**
8. Bouton principal **Demander un devis**

Les entrées regroupées restent accessibles depuis leurs menus. Le bouton de devis doit rester facile à repérer dans l’en-tête. La navigation et ses libellés sont conservés pendant les changements visuels, sauf demande contraire.

## Page d’accueil

### Hero

- Panorama pleine largeur avec les machines MySelfieBooth, inspiré de photos réelles.
- Conserver le fond sombre autour du panorama et le texte posé sur l’image avec un contraste suffisant.
- Montrer les machines dans une composition équilibrée : Photobooth, Miroirbooth, plateforme 360, Vogue Booth et Phonebooth.
- Afficher le message d’accueil et ses actions à gauche ; présenter la vidéo d’accueil dans un lecteur dédié à droite.
- La carte de prix « Photobooth 400 € » a été retirée du haut de page. Le bloc « Une animation photo pour chaque événement » prend sa place dans le contenu du hero.
- Sur téléphone et tablette, respecter l’ordre **panorama, texte, vidéo**. La vidéo verticale garde son format 9:16 et les contrôles de lecture.

### Suite de la page

- Garder le contenu de présentation de l’équipe et des prestations déjà présent sous le hero.
- Sur l’accueil, placer les zones d’intervention avant la conclusion finale.
- Garder un appel au devis final clair sans répéter inutilement la même action dans des blocs successifs.

## Page Réalisations

- Direction centrée sur les mariages et les événements de marque, avec des photos et vidéos originales.
- Le hero présente une vidéo ou un aperçu d’événement et mène aux réalisations.
- Présenter les machines réelles avant la galerie d’événements : Photobooth noir & or, Miroirbooth doré, plateforme 360 et Vogue Booth. Chaque présentation associe une photo de l’équipement, une courte description, un film original et un lien vers la prestation correspondante.
- Les vidéos de la galerie se chargent à la demande, après clic.
- Organiser les réalisations par filtres (type d’événement, machine et coulisses), puis proposer des histoires de clients, des références de marque, des moments d’invités, des coulisses et des avis.
- Garder des actions claires vers les prestations et le devis sans multiplier les conclusions identiques.

## Pied de page et fins de page

- Séparer visuellement les blocs qui se confondaient sur fond sombre : avis sur fond crème, conclusion devis sur vert profond, contact sur ivoire, navigation du pied de page sur anthracite.
- Sur mobile, répartir les liens du pied de page en rubriques repliées.
- Réunir les liens sociaux dans le pied de page.
- Masquer la barre de devis fixe mobile quand la conclusion ou le pied de page est déjà à l’écran.

## Images et vidéos

- Utiliser en priorité les médias originaux des événements et des équipements.
- Ne pas publier d’image générée sans lien vérifiable avec une source réelle ; conserver le manifeste de provenance pour les dérivés issus du réel.
- Pour les vidéos, choisir des scènes représentatives, garder une lecture accessible et optimiser les fichiers destinés au web sans remplacer les rushes de production.
- Versionner les URL des nouveaux médias lorsque nécessaire pour éviter que le cache affiche une ancienne version.

## Éléments à confirmer avant une nouvelle refonte

Ce document ne fixe pas les détails qui n’ont pas été approuvés comme règle générale : les couleurs exactes de chaque section, la police du corps de texte si la direction typographique évolue, les animations, les espacements précis, ainsi que les futures rubriques ou leur ordre complet. Les conserver selon la page existante jusqu’à une demande de changement.

## Historique et décisions de référence

- [Accueil : panorama des machines et blocs vidéo](https://github.com/stephanefly/site-myselfiebooth/pull/8)
- [Ordre et lecture mobile de l’accueil](https://github.com/stephanefly/site-myselfiebooth/pull/9)
- [Affinages du panorama d’accueil](https://github.com/stephanefly/site-myselfiebooth/pull/10)
- [Composition finale du hero et retrait de la carte de prix](https://github.com/stephanefly/site-myselfiebooth/pull/15)
- [Refonte Prestations et Réalisations](https://github.com/stephanefly/site-myselfiebooth/pull/16)
- [Fins de page et pied de page](https://github.com/stephanefly/site-myselfiebooth/pull/18)
- [Contraste des blocs de fin de page](https://github.com/stephanefly/site-myselfiebooth/pull/19)
- [Machines réelles et leurs vidéos dans Réalisations](https://github.com/stephanefly/site-myselfiebooth/pull/20)
- [Clip réel du Miroirbooth](https://github.com/stephanefly/site-myselfiebooth/pull/22)
- [Typographie luxe initiale](https://github.com/stephanefly/site-myselfiebooth/pull/23)
- [Police Playfair Display plus charpentée](https://github.com/stephanefly/site-myselfiebooth/pull/24)
- [Application de la police aux éléments internes des titres](https://github.com/stephanefly/site-myselfiebooth/pull/26)
