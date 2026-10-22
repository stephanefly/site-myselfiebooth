import blogArticleIllustrations from "./blogArticleIllustrations.json";

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

export function articleIllustration(slug) {
  const illustration = blogArticleIllustrations[slug];
  if (!illustration) throw new Error(`Illustration dédiée manquante pour l’article : ${slug}`);
  return illustration;
}

export function localIllustration(location) {
  // Choisir une ambiance pertinente sans prétendre représenter un lieu précis.
  if (/salons|salon|grands comptes|lancements|médias/.test(location.focus)) return editorialVisuals.corporate;
  if (/premium|réceptions/.test(location.focus)) return editorialVisuals.reception;
  return editorialVisuals.guests;
}
