export const serviceVisuals = Object.freeze({
  photobooth: {
    key: "photobooth",
    name: "Photobooth",
    image: "/images/machines-ai/photobooth-mariage-myselfiebooth.webp",
    alt: "Photobooth MySelfieBooth installé pendant une réception",
    href: "/prestations/photobooth",
  },
  miroirbooth: {
    key: "miroirbooth",
    name: "Miroirbooth",
    image: "/images/machines-ai/miroirbooth-mariage-myselfiebooth.webp",
    alt: "Miroirbooth MySelfieBooth installé pendant une réception élégante",
    href: "/prestations/miroirbooth",
  },
  videobooth: {
    key: "videobooth",
    name: "360 Booth",
    image: "/images/machines-ai/360booth-entreprise-myselfiebooth.webp",
    alt: "Invités sur le 360 Booth MySelfieBooth pendant un événement",
    href: "/prestations/videobooth",
  },
  air360booth: {
    key: "air360booth",
    name: "Air360 Booth",
    image: "/images/machines-ai/air360-gala-myselfiebooth.webp",
    alt: "Groupe d'invités sous l'Air360 Booth MySelfieBooth",
    href: "/prestations/air360booth",
  },
  ipadbooth: {
    key: "ipadbooth",
    name: "iPad Booth",
    image: "/images/machines-ai/ipadbooth-reception-myselfiebooth.webp",
    alt: "iPad Booth MySelfieBooth installé dans une réception",
    href: "/prestations/ipadbooth",
  },
  voguebooth: {
    key: "voguebooth",
    name: "Vogue Booth",
    image: "/images/ai-faithful/vogue-wedding-ai.webp",
    alt: "Vogue Booth Wedding Edition personnalisé par MySelfieBooth",
    href: "/prestations/voguebooth",
  },
  packvip: {
    key: "packvip",
    name: "Pack VIP",
    image: "/images/ai-fusions/pack-duo-vip.webp",
    alt: "Pack VIP MySelfieBooth avec Miroirbooth et 360 Booth",
    href: "/prestations/packvip",
  },
  personnalise: {
    key: "personnalise",
    name: "Formule complète",
    image: "/images/ai/installation-photobooth-premium-ai.webp",
    alt: "Formule complète MySelfieBooth installée sur mesure",
    href: "/prestations/personnalise",
  },
});

function normalizeServiceText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function getServiceVisual(value) {
  const text = normalizeServiceText(value);

  if (!text) return null;

  if (text.includes("pack vip")) return serviceVisuals.packvip;
  if (text.includes("formule complete")) return serviceVisuals.personnalise;
  if (text.includes("air360") || text.includes("air 360")) return serviceVisuals.air360booth;

  const matches = [
    [serviceVisuals.miroirbooth, ["miroirbooth", "miroir booth"]],
    [serviceVisuals.videobooth, ["360 booth", "360booth", "videobooth", "video booth"]],
    [serviceVisuals.ipadbooth, ["ipad booth", "ipadbooth"]],
    [serviceVisuals.voguebooth, ["vogue booth", "voguebooth"]],
    [serviceVisuals.photobooth, ["photobooth", "photo booth"]],
  ]
    .filter(([, aliases]) => aliases.some((alias) => text.includes(alias)))
    .map(([visual]) => visual);

  return matches.length === 1 ? matches[0] : null;
}
