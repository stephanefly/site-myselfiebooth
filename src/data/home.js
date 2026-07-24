import {
  eventTypes,
  galleryHighlights,
  machines,
  options,
  processSteps,
  selectorNeeds as catalogSelectorNeeds,
} from "./catalog";
import { brandLogos, siteConfig, trustSignals } from "./site";

export { brandLogos, galleryHighlights, processSteps };

const homeMachineImages = {
  photobooth: "/images/photobooth.webp",
  miroirbooth: "/images/miroirbooth.webp",
  videobooth: "/images/360booth.webp",
  air360booth: "/images/airbooth.webp",
  ipadbooth: "/images/ipadbooth.webp",
  voguebooth: "/images/voguebooth.webp",
  packvip: "/images/pack.webp",
  personnalise: "/images/all_presta.webp",
};

const homeSelectorImages = {
  "Photo imprimée": "/images/selector/photobooth-en-action-ai.webp",
  "Vidéo 360": "/images/selector/video-360-en-action-ai.webp",
  "Photo Vogue": "/images/selector/voguebooth-en-action-ai.webp",
};

const homeOptionImages = {
  "Mur floral": "/images/machines-ai/mur-floral-reception-myselfiebooth.webp",
  "Phonebooth audio": "/images/machines-ai/phonebooth-reception-myselfiebooth.webp",
  "Porte-clés photo": "/images/generated/instagram-keychain-favors.webp",
  "Magnets premium": "/images/machines-ai/magnets-photo-myselfiebooth.webp",
  "Magnets simples": "/images/ai/detail-souvenirs-premium-ai.webp",
  "Panneau fontaine": "/images/machines-ai/panneaux-bienvenue-myselfiebooth.webp",
  "Livre d'or vidéo": "/images/machines-ai/livre-or-video-myselfiebooth.webp",
  "Holo 3D": "/images/machines-ai/holo-3d-evenement-myselfiebooth.webp",
  "Livre d'or physique": "/images/machines-ai/livre-or-physique-myselfiebooth.webp",
  "Panneau de bienvenue": "/images/generated/premium-welcome-board-decor.webp",
  "Fond LED 360": "/images/ai/ambiance-360booth-premium-ai.webp",
  "Photographe Vogue Booth": "/images/ai/ambiance-vogue-booth-premium.webp",
  "Impression Vogue Booth": "/images/generated/instagram-print-strips.webp",
  "Décoration Vogue Booth": "/images/vogue-real/vogue-booth-anniversaire-card.webp",
};

export const selectorNeeds = catalogSelectorNeeds.map((item) => ({
  ...item,
  image: homeSelectorImages[item.need] || item.image,
}));

export const services = machines.map((machine) => ({
  key: machine.key,
  title: machine.name,
  tag: machine.tag,
  text: machine.short,
  image: homeMachineImages[machine.key] || machine.image,
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

export const googleReviews = [
  {
    name: "Kevin Narayanane",
    rating: 5,
    date: "Visité en mai",
    text: "Un grand merci à Stéphane et toute son équipe pour leur professionnalisme, leur réactivité et leur bonne humeur.",
  },
  {
    name: "Anusha Aravinthan",
    rating: 5,
    date: "Visité en mai",
    text: "Les invités ont adoré l’animation et se sont éclatés à prendre des photos.",
  },
  {
    name: "Elisabeth Severe",
    rating: 5,
    date: "Visité en mai",
    text: "Equipe disponible et à l écoute. Qualité des photos en tirage illimité parfaite. Une animation parfaite pour vos invités.",
  },
  {
    name: "Anne WANDUKISA",
    rating: 5,
    date: "Visité en juin",
    text: "Nous avons contacté Monsieur Faure pour la kermesse de l’école. Tout était impeccable.",
  },
  {
    name: "Lawrence ADZORMI",
    rating: 5,
    date: "Publié il y a un mois",
    text: "Les invités étaient très contents de repartir avec de beaux souvenirs et nous aussi d’ailleurs.",
  },
  {
    name: "Halima Lal",
    rating: 5,
    date: "Visité en juin",
    text: "Equipe ponctuelle, souriante et professionnelle. Les templates personnalisés proposés sont très beaux et la qualité des photos est parfaite.",
  },
];

export const featuredReels = [
  {
    title: "L'expérience MySelfieBooth",
    description: "Nos machines installées et utilisées en conditions réelles.",
    video: "/videos/instagram/reel-1-DO30-rNiDdA.mp4",
    poster: "/images/generated/premium-team-installation.webp",
    href: "https://www.instagram.com/reel/DO30-rNiDdA/",
  },
  {
    title: "Vogue Booth personnalisé",
    description: "Un décor VOGUE avec le thème, la date et les textes de l'événement.",
    video: "/videos/vogue-real/vogue-booth-anniversaire.mp4",
    poster: "/images/vogue-real/vogue-booth-anniversaire-la-baronne.webp",
    href: "https://www.instagram.com/myselfiebooth_paris/",
  },
  {
    title: "Au salon du mariage",
    description: "Une démonstration de nos animations face aux futurs mariés.",
    video: "/videos/instagram/reel-3-DQxM5TnCOKL.mp4",
    poster: "/images/generated/premium-wedding-photobooth.webp",
    href: "https://www.instagram.com/reel/DQxM5TnCOKL/",
  },
  {
    title: "Mariage Congo x Cap-Vert",
    description: "Une prestation festive captée au milieu des invités.",
    video: "/videos/instagram/reel-4-Da-0z-to0VL.mp4",
    poster: "/images/generated/instagram-party-guests.webp",
    href: "https://www.instagram.com/reel/Da-0z-to0VL/",
  },
];

export const caseStudies = [
  {
    category: "Activation de marque",
    title: "360 Booth pour une activation de marque",
    setup: "360 Booth · vidéo verticale",
    result:
      "Un format court et partageable, avec une installation pensée pour faire participer les visiteurs en continu.",
    image: "/images/ai/ambiance-360-booth-premium.webp",
  },
  {
    category: "Salon",
    title: "Photobooth au salon du mariage",
    setup: "Borne photo · tirage immédiat",
    result:
      "Une démonstration en conditions réelles pour montrer la prise de vue, la personnalisation et le souvenir imprimé.",
    image: "/images/generated/instagram-backstage-setup.webp",
  },
  {
    category: "Mariage",
    title: "Portraits dans le Vogue Booth",
    setup: "Vogue Booth · rendu éditorial",
    result:
      "Un espace lumineux qui guide naturellement les invités et produit une série de portraits cohérente.",
    image: "/images/generated/instagram-vogue-booth.webp",
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

export const optionHighlights = options.map((option) => ({
  ...option,
  image: homeOptionImages[option.name] || option.image,
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
      "Le Photobooth et le Miroirbooth conviennent aux souvenirs imprimés. Le 360 Booth apporte une vidéo dynamique, tandis que le Vogue Booth crée des portraits plus éditoriaux.",
  },
  {
    question: "Est-ce adapté à un événement d'entreprise ?",
    answer:
      "Oui. Le cadre photo, l'écran, les vidéos et certains décors peuvent reprendre votre logo, vos couleurs et le message de votre opération.",
  },
  {
    question: "Que faut-il prévoir sur place ?",
    answer:
      "Une zone stable, une prise électrique et un accès de livraison. L'espace exact dépend de la machine et nous le validons avec vous avant l'événement.",
  },
  {
    question: "La livraison et l'installation sont-elles prises en charge ?",
    answer:
      "Oui. Le devis précise la livraison, le montage, les tests, l'accompagnement prévu et la reprise du matériel.",
  },
  {
    question: "Un animateur reste-t-il pendant l'événement ?",
    answer:
      "Cela dépend de la machine et de la formule. Quand un animateur est prévu, il guide les invités et surveille le bon fonctionnement de l'installation.",
  },
  {
    question: "Peut-on personnaliser les photos et les vidéos ?",
    answer:
      "Oui. Les cadres photo, écrans d'accueil, habillages vidéo et messages peuvent être adaptés à votre mariage ou à votre identité de marque.",
  },
  {
    question: "Quels formats d'impression sont disponibles ?",
    answer:
      "Le format est défini avec vous selon la machine et le rendu souhaité : bande photo, format carte ou création personnalisée.",
  },
  {
    question: "Récupère-t-on les photos et vidéos après l'événement ?",
    answer:
      "Oui. Selon la prestation, les fichiers sont remis via une galerie ou un lien de téléchargement après l'événement.",
  },
  {
    question: "Combien d'invités peuvent utiliser les machines ?",
    answer:
      "Nous adaptons la machine, la durée et l'accompagnement au nombre d'invités. Pour un grand flux, nous recommandons une formule combinée ou plusieurs zones.",
  },
  {
    question: "Les machines peuvent-elles être installées en extérieur ?",
    answer:
      "C'est possible sous réserve d'un sol stable, d'un abri, d'une alimentation protégée et de conditions météo compatibles.",
  },
  {
    question: "Combien de temps avant l'événement faut-il réserver ?",
    answer:
      "Le plus tôt possible pour les week-ends et la saison des mariages. Nous vérifions néanmoins chaque demande, y compris à court délai.",
  },
  {
    question: "Comment obtenir un prix fiable ?",
    answer:
      "Indiquez la date, le lieu, la durée, le nombre d'invités et le résultat souhaité. Nous pouvons alors proposer une formule claire sans options inutiles.",
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
