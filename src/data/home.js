import {
  eventTypes,
  galleryHighlights,
  machines,
  options,
  processSteps,
  selectorNeeds,
} from "./catalog";
import { brandLogos, trustSignals } from "./site";

export { brandLogos, galleryHighlights, processSteps, selectorNeeds };

export const services = machines.map((machine) => ({
  title: machine.name,
  tag: machine.tag,
  text: machine.short,
  image: machine.image,
  href: machine.href,
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

export const trustCards = [
  {
    title: "Image premium",
    text: "Machines soignees, visuels propres, photos et videos exploitables apres l'evenement.",
  },
  {
    title: "Logistique rassurante",
    text: "Preparation, livraison, montage, tests et accompagnement sont cadres avant le jour J.",
  },
  {
    title: "Personnalisation utile",
    text: "Tirages, habillages video, decors et options souvenirs peuvent reprendre votre univers.",
  },
];

export const optionHighlights = options.slice(0, 8);

export const comparisonRows = machines.map((machine) => ({
  name: machine.name,
  href: machine.href,
  image: machine.image,
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
    question: "Est-ce adapte aux entreprises ?",
    answer:
      "Oui. Les visuels peuvent reprendre votre logo, vos couleurs et le contexte de votre operation pour un salon, un seminaire, une activation ou une soiree interne.",
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
