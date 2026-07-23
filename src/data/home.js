import {
  eventTypes,
  galleryHighlights,
  machines,
  options,
  processSteps,
  selectorNeeds,
} from "./catalog";
import { brandLogos, siteConfig, trustSignals } from "./site";

export { brandLogos, galleryHighlights, processSteps, selectorNeeds };

const serviceMotionImages = {
  photobooth: "/images/reel-gifs/photobooth-installation.gif",
  miroirbooth: "/images/reel-gifs/miroirbooth-mariage.gif",
  videobooth: "/images/reel-gifs/booth-360-sephora.gif",
  air360booth: "/images/reel-gifs/air360-en-action.gif",
  ipadbooth: "/images/reel-gifs/animation-ecran-partage.gif",
  voguebooth: "/images/reel-gifs/animation-vogue-femme.gif",
  packvip: "/images/reel-gifs/booth-360-mariage.gif",
  personnalise: "/images/reel-gifs/booth-360-peniche.gif",
};

export const services = machines.map((machine) => ({
  key: machine.key,
  title: machine.name,
  tag: machine.tag,
  text: machine.short,
  motionImage: serviceMotionImages[machine.key],
  stillImage: machine.image,
  href: `/prestations#machine-${machine.key}`,
  price: machine.price || "Sur devis",
}));

export const audiences = eventTypes.map((event) => ({
  title: event.title,
  text: event.text,
  href: event.href,
  image: event.image,
  bestMachines: event.bestMachines,
}));

export const proofPoints = trustSignals;

export const featuredReels = [
  {
    title: "L'expérience MySelfieBooth",
    video: "/videos/instagram/reel-1-DO30-rNiDdA.mp4",
    poster: "/videos/instagram/reel-1-DO30-rNiDdA.jpg",
    href: "https://www.instagram.com/reel/DO30-rNiDdA/",
  },
  {
    title: "VogueBooth",
    video: "/videos/instagram/reel-2-C9Ftp2ctg4u.mp4",
    poster: "/videos/instagram/reel-2-C9Ftp2ctg4u.jpg",
    href: "https://www.instagram.com/reel/C9Ftp2ctg4u/",
  },
  {
    title: "Au salon du mariage",
    video: "/videos/instagram/reel-3-DQxM5TnCOKL.mp4",
    poster: "/videos/instagram/reel-3-DQxM5TnCOKL.jpg",
    href: "https://www.instagram.com/reel/DQxM5TnCOKL/",
  },
  {
    title: "Mariage Congo x Cap-Vert",
    video: "/videos/instagram/reel-4-Da-0z-to0VL.mp4",
    poster: "/videos/instagram/reel-4-Da-0z-to0VL.jpg",
    href: "https://www.instagram.com/reel/Da-0z-to0VL/",
  },
];

export const marketPaths = [
  {
    eyebrow: "Entreprises",
    title: "Salons, séminaires et activations",
    text: "Des formats pensés pour votre marque et vos invités.",
    href: "/evenements/corporates",
    cta: "Voir le parcours entreprise",
  },
  {
    eyebrow: "Particuliers",
    title: "Mariages, anniversaires et soirées",
    text: "Des souvenirs photo et vidéo faciles à partager.",
    href: "/evenements/mariages",
    cta: "Voir le parcours particulier",
  },
];

export const trustCards = [
  {
    title: "Image premium",
    text: "Machines soignées, visuels propres, photos et vidéos exploitables après l'événement.",
  },
  {
    title: "Logistique rassurante",
    text: "Préparation, livraison, montage, tests et accompagnement sont cadrés avant le jour J.",
  },
  {
    title: "Personnalisation utile",
    text: "Tirages, habillages vidéo, décors et options souvenirs peuvent reprendre votre univers.",
  },
];

const optionMotionImages = [
  "/images/reel-gifs/animation-vogue-invites.gif",
  "/images/reel-gifs/animation-phonebooth.gif",
  "/images/reel-gifs/tirages-mariage.gif",
  "/images/reel-gifs/tirages-gala.gif",
  "/images/reel-gifs/tirages-mariage.gif",
  "/images/reel-gifs/panneau-fontaine-coulisses.gif",
  "/images/reel-gifs/livre-dor-video-en-action.gif",
  "/images/reel-gifs/animation-ecran-partage.gif",
  "/images/reel-gifs/tirages-gala.gif",
  "/images/reel-gifs/panneau-fontaine-coulisses.gif",
  "/images/reel-gifs/air360-en-action.gif",
  "/images/reel-gifs/animation-vogue-homme.gif",
  "/images/reel-gifs/animation-tirage.gif",
  "/images/reel-gifs/animation-vogue-invites.gif",
];

export const optionHighlights = options.map((option, index) => ({
  ...option,
  motionImage: optionMotionImages[index],
}));

export const comparisonRows = machines.map((machine) => ({
  name: machine.name,
  href: machine.href,
  image: machine.aiImage || machine.image,
  print: machine.print,
  participants: machine.participants,
  space: machine.space,
  attendant: machine.attendant,
  personalization: machine.personalization,
  sharing: machine.sharing,
  bestFor: machine.bestFor,
}));

export const faqs = [
  {
    question: "Quelle animation choisir pour un mariage ?",
    answer:
      "Le Photobooth et le Miroirbooth sont les plus simples pour des souvenirs imprimes. Le Pack VIP ajoute une dimension video si le volume d'invites est important.",
  },
  {
    question: "Est-ce adapté aux entreprises ?",
    answer:
      "Oui. Les visuels peuvent reprendre votre logo, vos couleurs et le contexte de votre opération pour un salon, un séminaire, une activation ou une soirée interne.",
  },
  {
    question: "Que faut-il prevoir sur place ?",
    answer:
      "Une zone stable, une prise electrique et un acces de livraison. Les besoins precis dependent de la machine, du lieu et du nombre d'invites.",
  },
  {
    question: "Comment obtenir un prix fiable ?",
    answer:
      "Le devis depend de la date, du lieu, de la duree, de la machine et des options. Le formulaire permet de cadrer rapidement ces informations.",
  },
];

export const founderStory = {
  eyebrow: "Notre histoire",
  title: "Une expertise technique derrière une expérience événementielle premium",
  text: siteConfig.founder.summary,
  href: "/a-propos",
  linkLabel: "Découvrir MySelfieBooth",
  imageSlotId: "founder-portrait",
};
