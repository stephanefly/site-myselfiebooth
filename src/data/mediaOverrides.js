import { eventTypes, selectorNeeds, servicePacks } from "./catalog";

const packImages = {
  souvenirs: "/images/event-archive/brice-tirages.webp",
  "immersion-360": "/images/event-archive/video-posters/360-red-carpet.webp",
  signature: "/images/event-archive/video-posters/miroirbooth-installation.webp",
  "duo-vip": "/images/realisations-machines/duo-photobooth-miroir.webp",
  "vogue-premium": "/images/event-archive/video-posters/voguebooth-soiree.webp",
  "mariage-prestige": "/images/event-archive/caftan-portrait-01.webp",
};

const selectorImages = {
  "Photo imprimée": "/images/realisations-machines/personnalisation-tirages.webp",
  "Vidéo 360": "/images/event-archive/video-posters/invites-en-fete.webp",
  "Photo Vogue": "/images/vogue-real/vogue-booth-anniversaire-card.webp",
};

const eventImages = {
  mariages: "/images/event-archive/livre-or-mariage.webp",
  corporates: "/images/realisations-machines/photobooth-noel.webp",
  anniversaires: "/images/event-archive/goldbooth-gala.webp",
  soirees: "/images/event-archive/video-posters/maries-photobooth.webp",
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
