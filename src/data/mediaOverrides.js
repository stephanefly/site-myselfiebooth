import { eventTypes, selectorNeeds, servicePacks } from "./catalog";

const packImages = {
  souvenirs: "/images/event-archive/anogini-photobooth-01.webp",
  "immersion-360": "/images/realisations/sephora-360booth.webp",
  signature: "/images/realisations-machines/miroirbooth-invites.webp",
  "duo-vip": "/images/realisations-machines/duo-photobooth-miroir.webp",
  "vogue-premium": "/images/event-archive/video-posters/voguebooth-soiree.webp",
  "mariage-prestige": "/images/vogue-real/vogue-booth-mariage-card.webp",
};

const selectorImages = {
  "Photo imprimée": "/images/event-archive/brice-tirages.webp",
  "Vidéo 360": "/images/event-archive/video-posters/360-red-carpet.webp",
  "Photo Vogue": "/images/vogue-real/vogue-booth-anniversaire-card.webp",
};

const eventImages = {
  mariages: "/images/event-archive/caftan-portrait-01.webp",
  corporates: "/images/realisations/sephora-360booth.webp",
  anniversaires: "/images/vogue-real/vogue-booth-anniversaire-card.webp",
  soirees: "/images/event-archive/goldbooth-gala.webp",
};

for (const pack of servicePacks) {
  const image = packImages[pack.key];
  if (!image) continue;
  pack.image = image;
  pack.fusionImage = image;
  pack.fusionAlt = `${pack.name} illustré par une prestation réelle MySelfieBooth`;
}

for (const choice of selectorNeeds) {
  const image = selectorImages[choice.need];
  if (!image) continue;
  choice.image = image;
  choice.imageAlt = `${choice.need} MySelfieBooth sur une prestation réelle`;
}

for (const event of eventTypes) {
  const image = eventImages[event.key];
  if (!image) continue;
  event.image = image;
}
