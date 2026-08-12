import {
  eventTypes,
  machines,
  options,
  processSteps,
  selectorNeeds as catalogSelectorNeeds,
  servicePacks,
} from "./catalog";
import { brandLogos, siteConfig, trustSignals } from "./site";

export { brandLogos, processSteps };

const homeSelectorImages = {
  "Photo imprimée": "/images/ai-from-real/tirages-invites-mariage-gala.webp",
  "Vidéo 360": "/images/ai-from-real/activation-360-entreprise.webp",
  "Photo Vogue": "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
};

const homeOptionImages = {
  "Mur floral": "/images/decoration-voguebooth.webp",
  "Phonebooth audio": "/images/phonebooth.webp",
  "Porte-clés photo": "/images/option-portecle.webp",
  "Magnets premium": "/images/option-magnet-premium.webp",
  "Magnets simples": "/images/option-magnet-simple.webp",
  "Panneau fontaine": "/images/Welcomeboard.webp",
  "Livre d'or vidéo": "/images/livre-dor-video.webp",
  "Holo 3D": "/images/3d Holo-site.webp",
  "Livre d'or physique": "/images/Livre-d'or.webp",
  "Panneau de bienvenue": "/images/Welcomeboard.webp",
  "Fond LED 360": "/images/fond 360.webp",
  "Photographe Vogue Booth": "/images/photographe-voguebooth.webp",
  "Impression Vogue Booth": "/images/impression-voguebooth.webp",
  "Décoration Vogue Booth": "/images/decoration-voguebooth.webp",
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
  image: machine.image,
  href: machine.href,
  linkLabel: `Découvrir ${machine.name}`,
  price: machine.price || "Sur devis",
}));

export const featuredPacks = servicePacks;

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
    poster: "/videos/instagram/reel-1-DO30-rNiDdA.jpg",
    href: "https://www.instagram.com/reel/DO30-rNiDdA/",
  },
  {
    title: "Vogue Booth personnalisé",
    description: "Un décor VOGUE avec le thème, la date et les textes de l'événement.",
    video: "/videos/vogue-real/vogue-booth-anniversaire.mp4",
    poster: "/images/vogue-real/vogue-booth-anniversaire-card.webp",
    href: "https://www.instagram.com/myselfiebooth_paris/",
  },
  {
    title: "Au salon du mariage",
    description: "Une démonstration de nos animations face aux futurs mariés.",
    video: "/videos/instagram/reel-3-DQxM5TnCOKL.mp4",
    poster: "/videos/instagram/reel-3-DQxM5TnCOKL.jpg",
    href: "https://www.instagram.com/reel/DQxM5TnCOKL/",
  },
  {
    title: "Mariage Congo x Cap-Vert",
    description: "Une prestation festive captée au milieu des invités.",
    video: "/videos/instagram/reel-4-Da-0z-to0VL.mp4",
    poster: "/videos/instagram/reel-4-Da-0z-to0VL.jpg",
    href: "https://www.instagram.com/reel/Da-0z-to0VL/",
  },
];

export const caseStudies = [
  {
    category: "Événement professionnel",
    title: "360 Booth en soirée d'entreprise",
    setup: "360 Booth · expérience sur mesure",
    result:
      "Une animation réelle pensée pour créer des vidéos courtes, rythmées et immédiatement partageables.",
    image: "/images/ai-from-real/activation-360-entreprise.webp",
  },
  {
    category: "Mariage",
    title: "Vogue Booth Wedding Edition",
    setup: "Vogue Booth · décor personnalisé",
    result:
      "Un couloir lumineux personnalisé pour le mariage de Lydia et Vincent et des portraits au rendu éditorial.",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
  },
  {
    category: "Mariage",
    title: "Souvenirs photo en réception",
    setup: "Photobooth · tirages invités",
    result:
      "Une animation accessible à toutes les générations, avec des souvenirs imprimés pendant la soirée.",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
  },
];

export const marketPaths = [
  {
    eyebrow: "Entreprises",
    title: "Salons, séminaires et soirées d'entreprise",
    text: "Des formats pensés pour votre marque et vos invités.",
    href: "/evenements/corporates",
    cta: "Voir le parcours entreprise",
    image: "/images/ai-from-real/activation-360-entreprise.webp",
    imageAlt: "Photobooth MySelfieBooth lors d'un événement professionnel",
  },
  {
    eyebrow: "Particuliers",
    title: "Mariages, anniversaires et soirées",
    text: "Des souvenirs photo et vidéo faciles à partager.",
    href: "/evenements/mariages",
    cta: "Voir le parcours particulier",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
    imageAlt: "Invités profitant d'une animation MySelfieBooth pendant un mariage",
  },
];

export const galleryHighlights = [
  {
    title: "Animation photo lors d'une soirée d'entreprise",
    image: "/images/ai-from-real/activation-360-entreprise.webp",
    category: "Entreprises",
  },
  {
    title: "Vogue Booth au mariage de Lydia et Vincent",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
    category: "Mariages",
  },
  {
    title: "Vogue Booth personnalisé pour un anniversaire",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
    category: "Mariages",
  },
  {
    title: "Animation photo pendant une réception de mariage",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
    category: "Mariages",
  },
  {
    title: "Souvenirs MySelfieBooth avec les invités",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
    category: "Mariages",
  },
  {
    title: "Photobooth MySelfieBooth prêt pour l'événement",
    image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
    category: "Machines",
  },
  {
    title: "Plateforme 360 Booth MySelfieBooth",
    image: "/images/ai-from-real/activation-360-entreprise.webp",
    category: "Machines",
  },
  {
    title: "Miroirbooth MySelfieBooth en configuration événementielle",
    image: "/images/miroirbooth.webp",
    category: "Machines",
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
  image: "/images/ai-from-real/fabrication-famille-photobooth.webp",
  imageAlt: "Fabrication familiale d'un photobooth MySelfieBooth, visuel IA issu de photos réelles de l'atelier",
};
