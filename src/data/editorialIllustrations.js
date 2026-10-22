// Illustrations éditoriales : elles ne représentent pas des prestations locales réalisées.
const visual = (src, alt) => ({ src, alt });

export const editorialVisuals = {
  planning: visual("/images/editorial-ai/preparer-mariage.webp", "Illustration IA : carnet, calendrier et papeterie pour préparer un mariage"),
  reception: visual("/images/editorial-ai/reception-mariage.webp", "Illustration IA : salle de réception avec tables fleuries et accès à un jardin"),
  guests: visual("/images/editorial-ai/invites-photobooth.webp", "Illustration IA : des invités de plusieurs générations réunis dans un espace photo"),
  photo: visual("/images/ai-from-real/hero-photobooth-reception.webp", "Projection d'une borne photobooth dans un décor de réception"),
  prints: visual("/images/ai-from-real/tirages-invites-mariage-gala.webp", "Projection de tirages photo personnalisés et de souvenirs de réception"),
  audio: visual("/images/ai-from-real/phonebooth-livre-or-audio-900.webp", "Projection d'un téléphone livre d'or audio pour les messages des invités"),
  corporate: visual("/images/ai-from-real/evenement-ouverture-corporates-900.webp", "Projection d'une animation photo lors d'une réception professionnelle"),
  video: visual("/images/ai-from-real/360-booth-reception-900.webp", "Projection d'un dispositif vidéo 360 dans une réception"),
  air360: visual("/images/ai-from-real/machines-air360-900.webp", "Projection d'une installation Air360 pour une animation vidéo"),
  vogue: visual("/images/ai-from-real/voguebooth-premium.webp", "Projection d'un Vogue Booth avec cadre lumineux et décor de magazine"),
  mirror: visual("/images/ai-from-real/miroirbooth-paris-premium.webp", "Projection d'un miroir photobooth à cadre doré en réception"),
  birthday: visual("/images/ai-from-real/evenement-ouverture-anniversaires-900.webp", "Projection d'un espace photo pour une fête d'anniversaire"),
};

const groups = {
  planning: ["budget-mariage-repartition", "cadeaux-liste-urne-mariage", "checklist-location-photobooth", "checklist-semaine-avant-mariage", "choisir-date-saison-mariage", "choisir-prestataires-mariage", "duree-location-photobooth", "faire-part-site-mariage-informations", "liste-invites-mariage", "planning-jour-j-mariage", "planning-mariage-12-mois", "prix-location-photobooth"],
  reception: ["ceremonie-laique-mariage", "choisir-lieu-reception-mariage", "cocktail-vin-honneur-mariage", "decoration-mariage-coherente", "hebergement-transport-invites-mariage", "lendemain-retour-mariage", "menu-traiteur-mariage", "musique-mariage-playlist-dj", "plan-b-pluie-mariage", "plan-table-mariage"],
  guests: ["animations-mariage-sans-gener-invites", "discours-mariage-reussis", "mariage-accessible-personnes-agees-handicap", "mariage-avec-enfants", "photos-groupe-mariage", "photobooth-bapteme-communion"],
  prints: ["personnalisation-tirages-photobooth-mariage", "personnaliser-photobooth", "photobooth-mariage-combien-tirages", "livre-or-photo-photobooth", "magnet-ou-porte-cle-photo"],
  audio: ["livre-or-photo-ou-audio", "phonebooth-livre-or-audio", "phonebooth-messages-mariage"],
  corporate: ["animation-photobooth-entreprise", "photobooth-gala-entreprise", "photobooth-inauguration", "photobooth-lancement-produit", "photobooth-noel-entreprise", "photobooth-salon-seminaire", "photobooth-soiree-cse", "photobooth-team-building"],
  video: ["360-booth-mariage-securite-espace", "photobooth-ou-360-booth"],
  air360: ["360-booth-ou-air360"],
  vogue: ["photobooth-ou-vogue-booth", "vogue-booth-effet-magazine", "voguebooth-mariage-installation", "fond-decor-photobooth"],
  mirror: ["miroirbooth-ou-photobooth-mariage"],
  birthday: ["photobooth-anniversaire"],
  photo: ["choisir-pack-photobooth", "choisir-photobooth-mariage", "espace-installation-photobooth", "meilleur-emplacement-photobooth", "photobooth-avec-ou-sans-animateur", "photobooth-interieur-ou-exterieur", "photobooth-petite-salle", "temps-installation-photobooth"],
};

const articleVisualKeys = Object.fromEntries(
  Object.entries(groups).flatMap(([key, slugs]) => slugs.map((slug) => [slug, key])),
);

export function articleIllustration(slug) {
  return editorialVisuals[articleVisualKeys[slug] || "photo"];
}

export function localIllustration(location) {
  // Choisir une ambiance pertinente sans prétendre représenter un lieu précis.
  if (/salons|salon|grands comptes|lancements|médias/.test(location.focus)) return editorialVisuals.corporate;
  if (/premium|réceptions/.test(location.focus)) return editorialVisuals.reception;
  return editorialVisuals.guests;
}
