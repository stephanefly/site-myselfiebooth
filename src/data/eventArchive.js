export const eventArchiveVideos = [
  { slug: "360-red-carpet", title: "360 Booth sur tapis rouge", category: "360 Booth", sourceId: "video-360-red-carpet" },
  { slug: "maries-photobooth", title: "Les mariés devant le Photobooth", category: "Mariage", sourceId: "video-maries-photobooth" },
  { slug: "phonebooth-message", title: "Un message laissé au Phonebooth", category: "Phonebooth", sourceId: "video-phonebooth-message" },
  { slug: "miroirbooth-installation", title: "Le Miroirbooth installé", category: "Miroirbooth", sourceId: "video-miroirbooth-installation" },
  { slug: "voguebooth-soiree", title: "Une entrée dans le Vogue Booth", category: "Vogue Booth", sourceId: "video-voguebooth-soiree" },
  { slug: "porte-cles-en-action", title: "Le porte-clé photo en action", category: "Souvenir", sourceId: "video-porte-cles-en-action" },
  { slug: "invites-en-fete", title: "Les invités célèbrent ensemble", category: "Ambiance", sourceId: "video-invites-en-fete" },
].map((item) => ({
  ...item,
  video: `/videos/event-archive/${item.slug}.mp4`,
  poster: `/images/event-archive/video-posters/${item.slug}.webp`,
}));

export const eventArchivePhotos = [
  { slug: "anogini-photobooth-01", title: "Photobooth fleuri en réception", category: "Photobooth", sourceId: "photo-anogini-machine-reception" },
  { slug: "brice-equipe-01", title: "L'équipe MySelfieBooth sur place", category: "Équipe", sourceId: "photo-brice-equipe" },
  { slug: "brice-tirages", title: "Souvenirs imprimés du mariage", category: "Tirages", sourceId: "photo-brice-tirages" },
  { slug: "caftan-portrait-01", title: "Portrait imprimé des mariés", category: "Mariage", sourceId: "photo-caftan-couple" },
  { slug: "goldbooth-gala", title: "Goldbooth et miroir pour un gala", category: "Goldbooth", sourceId: "photo-goldbooth-gala" },
  { slug: "livre-or-mariage", title: "Livre d'or photo personnalisé", category: "Livre d'or", sourceId: "photo-livre-or-mariage" },
  { slug: "porte-cles-fabrication", title: "Fabrication du porte-clé photo", category: "Porte-clés", sourceId: "photo-porte-cles-fabrication" },
].map((item) => ({
  ...item,
  image: `/images/event-archive/${item.slug}.webp`,
  alt: `${item.title}, réalisation réelle MySelfieBooth issue d'un reportage unique`,
}));
