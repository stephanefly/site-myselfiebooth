const masters = [
  { slug: "360-booth", title: "360 Booth sur tapis rouge", category: "360 Booth" },
  { slug: "photobooth-reception", title: "Photobooth noir et or en réception", category: "Photobooth" },
  { slug: "photobooth-lobby", title: "Photobooth dans un lieu contemporain", category: "Photobooth" },
  { slug: "phonebooth", title: "Livre d'or audio et téléphone vintage", category: "Phonebooth" },
  { slug: "miroirbooth", title: "Miroirbooth dans un décor de mariage", category: "Miroirbooth" },
  { slug: "vogue-booth", title: "Vogue Booth dans un salon historique", category: "Vogue Booth" },
  { slug: "invites-rideau-rouge", title: "Invitées devant un décor rouge", category: "Ambiance" },
  { slug: "invites-team-bride", title: "Photo de groupe avec accessoires", category: "Mariage" },
  { slug: "invites-reception", title: "Portrait de groupe en réception", category: "Réception" },
];

const formats = [
  { key: "portrait", label: "Vue générale", width: 720, height: 900 },
  { key: "square", label: "Cadrage carré", width: 720, height: 720 },
  { key: "landscape", label: "Vue panoramique", width: 900, height: 600 },
  { key: "detail", label: "Détail de l'installation", width: 720, height: 900 },
];

const stills = masters.flatMap((master) =>
  formats.map((format) => ({
    id: `${master.slug}-${format.key}`,
    image: `/images/ai-event-gallery/${master.slug}-${format.key}.webp`,
    title: format.key === "portrait" ? master.title : `${master.title} · ${format.label}`,
    category: master.category,
    alt: `${master.title}, visuel IA fidèle créé à partir d'une réalisation MySelfieBooth`,
    width: format.width,
    height: format.height,
    animated: false,
  })),
);

const singleMotions = masters.map((master) => ({
  id: `${master.slug}-motion`,
  image: `/images/ai-event-gallery/${master.slug}-motion.gif`,
  title: `${master.title} en mouvement`,
  category: master.category,
  alt: `${master.title}, GIF animé dérivé d'un visuel IA fidèle MySelfieBooth`,
  width: 420,
  height: 525,
  animated: true,
}));

const pairedMotions = [
  { slug: "machines-signature", title: "Nos machines signature", category: "Sélection" },
  { slug: "options-souvenirs", title: "Options et souvenirs", category: "Options" },
  { slug: "experiences-lumineuses", title: "Expériences lumineuses", category: "Ambiance" },
  { slug: "moments-complices", title: "Moments complices", category: "Mariage" },
  { slug: "duo-vip", title: "Duo 360 et Vogue Booth", category: "Pack VIP" },
].map((item) => ({
  id: `${item.slug}-motion`,
  image: `/images/ai-event-gallery/${item.slug}-motion.gif`,
  title: item.title,
  category: item.category,
  alt: `${item.title}, GIF animé dérivé de visuels IA fidèles MySelfieBooth`,
  width: 420,
  height: 525,
  animated: true,
}));

const leadItems = [
  stills[0],
  stills[4],
  singleMotions[0],
  stills[8],
  stills[12],
  singleMotions[3],
  stills[16],
  stills[20],
  singleMotions[5],
  stills[24],
  stills[28],
  singleMotions[7],
];

const leadIds = new Set(leadItems.map((item) => item.id));

export const aiEventGallery = [
  ...leadItems,
  ...stills.filter((item) => !leadIds.has(item.id)),
  ...singleMotions.filter((item) => !leadIds.has(item.id)),
  ...pairedMotions,
];
