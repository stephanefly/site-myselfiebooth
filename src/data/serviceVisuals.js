export const serviceVisuals = Object.freeze({
  photobooth: {
    key: "photobooth",
    name: "Photobooth",
    image: "/images/event-archive/anogini-photobooth-01.webp",
    alt: "Photobooth MySelfieBooth installé lors d'une réception réelle",
    href: "/prestations/photobooth",
  },
  miroirbooth: {
    key: "miroirbooth",
    name: "Miroirbooth",
    image: "/images/realisations-machines/miroirbooth-invites.webp",
    alt: "Miroirbooth MySelfieBooth utilisé par des invités lors d'un événement réel",
    href: "/prestations/miroirbooth",
  },
  videobooth: {
    key: "videobooth",
    name: "360 Booth",
    image: "/images/realisations/sephora-360booth.webp",
    alt: "360 Booth MySelfieBooth installé lors d'un événement réel",
    href: "/prestations/videobooth",
  },
  air360booth: {
    key: "air360booth",
    name: "Air360 Booth",
    image: "/images/airbooth.webp",
    alt: "Air360 Booth grand format MySelfieBooth",
    href: "/prestations/air360booth",
  },
  ipadbooth: {
    key: "ipadbooth",
    name: "iPad Booth",
    image: "/images/ipadbooth.webp",
    alt: "iPad Booth MySelfieBooth installé pour une animation événementielle",
    href: "/prestations/ipadbooth",
  },
  voguebooth: {
    key: "voguebooth",
    name: "Vogue Booth",
    image: "/images/vogue-real/vogue-booth-mariage-card.webp",
    alt: "Vogue Booth MySelfieBooth installé lors d'un mariage réel",
    href: "/prestations/voguebooth",
  },
  packvip: {
    key: "packvip",
    name: "Pack VIP",
    image: "/images/realisations-machines/duo-photobooth-miroir.webp",
    alt: "Duo de machines MySelfieBooth lors d'une prestation réelle",
    href: "/prestations/packvip",
  },
  personnalise: {
    key: "personnalise",
    name: "Formule complète",
    image: "/images/event-archive/brice-equipe-01.webp",
    alt: "Équipe MySelfieBooth en prestation sur un événement réel",
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
