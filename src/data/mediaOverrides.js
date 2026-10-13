import { eventTypes, options, selectorNeeds, servicePacks } from "./catalog";

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

const optionImages = {
  "Mur floral": "/images/event-archive/anogini-photobooth-01.webp",
  "Phonebooth audio": "/images/phonebooth.webp",
  "Porte-clés photo": "/images/realisations-machines/fabrication-porte-cles-photo.webp",
  "Magnets premium": "/images/option-magnet-premium.webp",
  "Magnets simples": "/images/option-magnet-simple.webp",
  "Panneau fontaine": "/images/panneau-fontaine.webp",
  "Livre d'or vidéo": "/images/livre-dor-video.webp",
  "Holo 3D": "/images/3d Holo-site.webp",
  "Livre d'or physique": "/images/Livre-d'or.webp",
  "Panneau de bienvenue": "/images/Welcomeboard.webp",
  "Fond LED 360": "/images/fond 360.webp",
  "Photographe Vogue Booth": "/images/photographe-voguebooth.webp",
  "Impression Vogue Booth": "/images/impression-voguebooth.webp",
  "Décoration Vogue Booth": "/images/decoration-voguebooth.webp",
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

for (const option of options) {
  const image = optionImages[option.name];
  if (!image) continue;
  option.image = image;
}
