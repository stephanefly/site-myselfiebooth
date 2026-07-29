const instagramProfile = "https://www.instagram.com/myselfiebooth_paris/";

export const instagramMedia = [
  { file: "air360-en-action.gif", title: "Air360 Booth en action", category: "Air360 Booth" },
  { file: "animation-360-couple.gif", title: "Un tour à 360° en duo", category: "360 Booth" },
  { file: "animation-360-tour-eiffel.gif", title: "360 Booth face à la tour Eiffel", category: "360 Booth" },
  { file: "animation-360booth.gif", title: "La plateforme 360 Booth", category: "360 Booth" },
  { file: "animation-danse.gif", title: "Les invités entrent dans la danse", category: "Ambiance" },
  { file: "animation-ecran-partage.gif", title: "Le partage sur écran", category: "Photobooth" },
  { file: "animation-impression.gif", title: "Le souvenir sort en quelques secondes", category: "Tirages" },
  { file: "animation-mariage.gif", title: "Une animation au cœur du mariage", category: "Mariage" },
  { file: "animation-miroirbooth.gif", title: "Le Miroirbooth en réception", category: "Miroirbooth" },
  { file: "animation-phonebooth.gif", title: "Un message dans le Phonebooth", category: "Phonebooth" },
  { file: "animation-soiree-tour-eiffel.gif", title: "Soirée avec vue sur Paris", category: "Événement" },
  { file: "animation-tirage.gif", title: "Tirages prêts à emporter", category: "Tirages" },
  { file: "animation-tour-eiffel.gif", title: "MySelfieBooth à Paris", category: "Paris" },
  { file: "animation-vogue-femme.gif", title: "Portrait Vogue Booth", category: "Vogue Booth" },
  { file: "animation-vogue-homme.gif", title: "Pose magazine", category: "Vogue Booth" },
  { file: "animation-vogue-invites.gif", title: "Les invités dans le Vogue Booth", category: "Vogue Booth" },
  { file: "animation-voguebooth.gif", title: "Dans les coulisses du Vogue Booth", category: "Vogue Booth" },
  { file: "booth-360-mariage.gif", title: "360 Booth de mariage", category: "Mariage" },
  { file: "booth-360-peniche.gif", title: "360 Booth sur une péniche", category: "Événement" },
  { file: "booth-360-sephora.gif", title: "360 Booth en événement professionnel", category: "Entreprise" },
  { file: "livre-dor-video-en-action.gif", title: "Le livre d'or vidéo en action", category: "Livre d'or" },
  { file: "miroirbooth-mariage.gif", title: "Miroirbooth de mariage", category: "Miroirbooth" },
  { file: "panneau-fontaine-coulisses.gif", title: "Les coulisses du panneau fontaine", category: "Décor" },
  { file: "photobooth-installation.gif", title: "Installation du Photobooth", category: "Photobooth" },
  { file: "tirages-gala.gif", title: "Les tirages d'un gala", category: "Tirages" },
  { file: "tirages-mariage.gif", title: "Les tirages du mariage", category: "Tirages" },
].map((item) => ({
  ...item,
  sourceId: `instagram-${item.file}`,
  src: `/images/reel-gifs/${item.file}`,
  href: instagramProfile,
  alt: `${item.title}, prestation réelle MySelfieBooth`,
}));

export const instagramUrl = instagramProfile;
