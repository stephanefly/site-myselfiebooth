import { eventTypes, galleryHighlights, machines, options } from "./catalog";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  siteConfig,
  trustSignals,
  withSlash,
} from "./site";

const homeCrumb = { label: "Accueil", href: "/" };

function serviceJsonLd(page, category = "Service evenementiel") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    serviceType: category,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      telephone: siteConfig.phoneInternational,
    },
    areaServed: siteConfig.servedAreas,
    url: absoluteUrl(withSlash(page.path)),
  };
}

function cardsFrom(title, items) {
  return items.map((item) => ({
    title,
    text: item,
  }));
}

function page({
  key,
  eyebrow,
  title,
  description,
  image,
  path,
  highlights,
  breadcrumbs = [],
  sections = [],
  gallery = galleryHighlights,
  faq = [],
  finalTitle,
  relatedLinks = [],
  optionGrid,
  comparison,
  aiNote,
  category,
}) {
  const breadcrumbItems = [homeCrumb, ...breadcrumbs, { label: title, href: path }];
  const jsonLd = [
    breadcrumbJsonLd(breadcrumbItems),
    serviceJsonLd({ title, description, path }, category),
    faqJsonLd(faq),
  ].filter(Boolean);

  return {
    key,
    eyebrow,
    title,
    description,
    image,
    imageAlt: title,
    aiNote,
    highlights,
    proof: trustSignals,
    breadcrumbs: breadcrumbItems,
    sections,
    gallery,
    faq,
    finalTitle,
    relatedLinks,
    optionGrid,
    comparison,
    primaryCta: { label: siteConfig.primaryCtaLabel, href: siteConfig.quoteUrl },
    secondaryCta: { label: siteConfig.secondaryCtaLabel, href: "/#comparateur" },
    phoneCta: { label: siteConfig.phoneCtaLabel, href: siteConfig.phoneHref },
    meta: {
      title: `${title} | MySelfieBooth`,
      description,
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: absoluteUrl(withSlash(path)),
      jsonLd,
    },
  };
}

function machinePage(machine) {
  const faq = [
    ...(machine.faq || []),
    {
      question: `Cette animation convient-elle a mon evenement ?`,
      answer: `${machine.bestFor} Le devis permet de confirmer la configuration exacte selon le lieu, la duree et le nombre d'invites.`,
    },
  ];

  return page({
    key: machine.key,
    eyebrow: machine.tag,
    title: machine.title,
    description: machine.description,
    image: machine.aiImage || machine.image,
    path: machine.href,
    aiNote: machine.aiImage ? "Visuel d'ambiance genere par IA. Les photos reelles du materiel restent conservees dans le site." : undefined,
    highlights: [machine.print, machine.attendant, machine.sharing],
    breadcrumbs: [
      { label: "Nos animations", href: "/prestations" },
    ],
    category: "Location photobooth",
    sections: [
      {
        eyebrow: "Experience invite",
        title: `Ce que les invites vivent avec le ${machine.name}`,
        text: machine.short,
        cards: [
          { title: "Meilleur usage", text: machine.bestFor },
          { title: "Personnalisation", text: machine.personalization },
          { title: "Partage", text: machine.sharing },
        ],
      },
      {
        eyebrow: "Inclus",
        title: "Ce qui est compris ou a cadrer dans la formule",
        text: "Les informations restent prudentes pour ne pas promettre une option qui depend du devis.",
        cards: [
          ...cardsFrom("Inclus", machine.includes),
          ...cardsFrom("Selon formule", machine.depends),
        ],
      },
      {
        eyebrow: "Logistique",
        title: "Les points a verifier avant le jour J",
        text: "Un bon emplacement evite l'attente, les branchements compliques et les rendus decevants.",
        cards: cardsFrom("A prevoir", machine.logistics),
      },
      {
        eyebrow: "Options compatibles",
        title: "Les complements qui renforcent cette animation",
        text: "Les options doivent etre confirmees au moment du devis selon la machine et le lieu.",
        cards: machine.options.map((option) => ({ title: option, text: "A integrer au devis si cette option correspond a votre objectif." })),
      },
    ],
    faq,
    relatedLinks: [
      { label: "Comparer les animations", href: "/#comparateur" },
      { label: "Voir les options", href: "/options" },
      { label: "Evenements entreprise", href: "/evenements/corporates" },
      { label: "Mariages", href: "/evenements/mariages" },
    ],
  });
}

const machineCards = machines.map((machine) => ({
  title: machine.name,
  text: `${machine.tag} - ${machine.short}`,
}));

const comparison = machines.map((machine) => ({
  title: machine.name,
  image: machine.image,
  rows: [
    ["Impression", machine.print],
    ["Participants", machine.participants],
    ["Espace", machine.space],
    ["Animateur", machine.attendant],
    ["Usage", machine.bestFor],
  ],
  href: machine.href,
}));

const eventPages = {
  corporates: {
    title: "Photobooth entreprise a Paris pour salons, marques et soirees internes",
    description:
      "Une animation photo et video premium pour activation de marque, salon, seminaire, lancement produit ou soiree interne.",
    image: "/images/ai/ambiance-photobooth-corporate-premium.webp",
    highlights: ["Branding", "Volume", "Partage"],
    sections: [
      {
        eyebrow: "Objectifs B2B",
        title: "Faire participer sans perturber le deroule professionnel",
        text: "L'animation doit etre visible, rapide a comprendre et coherente avec l'image de marque.",
        cards: [
          { title: "Activation de marque", text: "Logo, couleurs et habillage peuvent etre integres aux visuels selon la formule." },
          { title: "Salon et stand", text: "L'iPad Booth ou le Photobooth compact conviennent aux espaces plus controles." },
          { title: "Grand volume", text: "Le Pack VIP ou une formule complete aide a repartir les flux sur plusieurs animations." },
        ],
      },
      {
        eyebrow: "Machines conseillees",
        title: "Les formats les plus efficaces pour l'entreprise",
        text: "Le choix depend de l'objectif: generer du contenu, animer un stand, offrir un souvenir ou creer un effet social media.",
        cards: [
          { title: "Photobooth", text: "Souvenir imprime et galerie pour soiree interne ou salon." },
          { title: "360 Booth", text: "Video partageable pour activation et lancement produit." },
          { title: "iPad Booth", text: "Format digital compact pour accueil, stand ou collecte de contenus simples." },
        ],
      },
    ],
    faq: [
      {
        question: "Peut-on personnaliser l'animation aux couleurs de la marque ?",
        answer: "Oui, les visuels peuvent reprendre logo, couleurs ou campagne lorsque la formule le prevoit.",
      },
      {
        question: "Est-ce adapte a un salon professionnel ?",
        answer: "Oui, a condition de cadrer l'espace, le flux d'invites, le format de partage et les contraintes du stand.",
      },
    ],
  },
  mariages: {
    title: "Photobooth mariage a Paris pour souvenirs elegants et invites engages",
    description:
      "Une animation photo rassurante pour mariage, avec tirages selon formule, livre d'or, options souvenirs et galerie web.",
    image: "/images/mariages/mariage1.JPG",
    highlights: ["Souvenirs", "Livre d'or", "Invites"],
    sections: [
      {
        eyebrow: "Mariage",
        title: "Une animation qui doit rester fluide pour toutes les generations",
        text: "Le bon photobooth s'integre au decor et laisse un souvenir simple a recuperer.",
        cards: [
          { title: "Timing", text: "Prevoir l'ouverture pendant le cocktail, le diner ou la soiree selon le rythme du mariage." },
          { title: "Souvenir", text: "Tirages, porte-cles, magnets ou livre d'or prolongent le moment." },
          { title: "Decor", text: "Mur floral, panneau ou fond adapte ameliorent le rendu des photos." },
        ],
      },
      {
        eyebrow: "Machines conseillees",
        title: "Photobooth, Miroirbooth ou Pack VIP selon le volume",
        text: "Le choix depend du nombre d'invites, du decor et de l'envie d'ajouter une experience video.",
        cards: [
          { title: "Photobooth", text: "Simple, efficace, imprime selon la formule." },
          { title: "Miroirbooth", text: "Plus scenographique pour une reception elegante." },
          { title: "Pack VIP", text: "Photo + video pour les grands mariages." },
        ],
      },
    ],
    faq: [
      {
        question: "Quel photobooth choisir pour un mariage ?",
        answer: "Le Photobooth suffit souvent pour les souvenirs imprimes. Le Miroirbooth ou le Pack VIP conviennent si l'effet decor ou video compte davantage.",
      },
      {
        question: "Peut-on ajouter un livre d'or ?",
        answer: "Oui, un livre d'or physique, audio ou video peut etre prevu selon l'animation et les options retenues.",
      },
    ],
  },
  anniversaires: {
    title: "Photobooth anniversaire pour une soiree vivante et memorable",
    description:
      "Une animation photo ou video festive, simple a utiliser et personnalisable pour anniversaire adulte, famille ou grande soiree.",
    image: "/images/ai/ambiance-photobooth-soiree-premium.webp",
    highlights: ["Festif", "Accessoires", "Partage"],
    sections: [
      {
        eyebrow: "Anniversaire",
        title: "Creer un point photo qui rythme la soiree",
        text: "Les invites doivent comprendre l'animation en quelques secondes et repartir avec un souvenir.",
        cards: [
          { title: "Convivial", text: "Accessoires et tirages rendent l'experience facile a adopter." },
          { title: "Video", text: "Le 360 Booth ajoute un contenu dynamique pour les reseaux." },
          { title: "Souvenirs", text: "Porte-cles et magnets peuvent transformer les photos en cadeaux." },
        ],
      },
    ],
    faq: [
      {
        question: "Quelle animation marche le mieux pour un anniversaire ?",
        answer: "Le Photobooth reste le plus simple. Le 360 Booth ou le Vogue Booth ajoutent un effet plus spectaculaire.",
      },
    ],
  },
  soirees: {
    title: "Photobooth pour soiree privee et evenement VIP",
    description:
      "Une animation photo et video qui habille la soiree, engage les invites et reste coherente avec une ambiance premium.",
    image: "/images/generated/instagram-party-guests.webp",
    highlights: ["VIP", "Ambiance", "Partage"],
    sections: [
      {
        eyebrow: "Soiree VIP",
        title: "Un rendu visible sans surcharge",
        text: "L'animation doit devenir un point fort de la soiree sans creer de congestion ni casser le decor.",
        cards: [
          { title: "Vogue Booth", text: "Scene lumineuse forte pour un effet magazine." },
          { title: "360 Booth", text: "Video courte et partageable pour dynamiser la soiree." },
          { title: "Pack VIP", text: "Plusieurs experiences pour repartir le flux d'invites." },
        ],
      },
    ],
    faq: [
      {
        question: "Comment eviter l'attente sur une grande soiree ?",
        answer: "Il faut adapter la machine, la duree, l'equipe et l'emplacement au nombre d'invites attendu.",
      },
    ],
  },
};

function eventPage(key, path) {
  const data = eventPages[key];
  return page({
    key,
    eyebrow: "Evenement",
    title: data.title,
    description: data.description,
    image: data.image,
    path,
    aiNote: data.image.includes("/ai/") || data.image.includes("/generated/")
      ? "Visuel d'ambiance genere par IA."
      : undefined,
    highlights: data.highlights,
    breadcrumbs: [{ label: "Vos evenements", href: "/evenements" }],
    sections: data.sections,
    faq: data.faq,
    relatedLinks: [
      { label: "Comparer les animations", href: "/#comparateur" },
      { label: "Voir les options", href: "/options" },
      { label: "Obtenir un devis", href: siteConfig.quoteUrl },
    ],
    category: "Animation evenementielle",
  });
}

export const marketingPages = {
  "prestations-index": page({
    key: "prestations-index",
    eyebrow: "Nos animations",
    title: "Comparer les photobooths, bornes video et packs MySelfieBooth",
    description:
      "Photobooth, Miroirbooth, 360 Booth, Air360, iPad Booth, Vogue Booth, Pack VIP et formule complete: comparez les animations avant votre devis.",
    image: "/images/ai/hero-photobooth-evenement-premium.webp",
    path: "/prestations",
    aiNote: "Visuel d'ambiance genere par IA.",
    highlights: ["8 formats", "Comparateur", "Options"],
    breadcrumbs: [],
    sections: [
      {
        eyebrow: "Catalogue",
        title: "Une gamme complete, lisible et orientee choix",
        text: "Toutes les prestations existantes restent accessibles et chaque carte renvoie vers sa page dediee.",
        cards: machineCards,
      },
    ],
    comparison,
    faq: [
      {
        question: "Quelle difference entre Photobooth et 360 Booth ?",
        answer: "Le Photobooth vise surtout la photo et les tirages selon formule. Le 360 Booth vise la video dynamique et partageable.",
      },
      {
        question: "Puis-je combiner plusieurs animations ?",
        answer: "Oui, le Pack VIP ou la formule complete sont prevus pour combiner photo, video et options souvenirs.",
      },
    ],
  }),
  photobooth: machinePage(machines.find((machine) => machine.key === "photobooth")),
  miroirbooth: machinePage(machines.find((machine) => machine.key === "miroirbooth")),
  videobooth: machinePage(machines.find((machine) => machine.key === "videobooth")),
  voguebooth: machinePage(machines.find((machine) => machine.key === "voguebooth")),
  ipadbooth: machinePage(machines.find((machine) => machine.key === "ipadbooth")),
  air360booth: machinePage(machines.find((machine) => machine.key === "air360booth")),
  packvip: machinePage(machines.find((machine) => machine.key === "packvip")),
  personnalise: machinePage(machines.find((machine) => machine.key === "personnalise")),
  "evenements-index": page({
    key: "evenements-index",
    eyebrow: "Vos evenements",
    title: "Choisir une animation photo adaptee a chaque public",
    description:
      "Mariage, entreprise, anniversaire ou soiree VIP: retrouvez les recommandations MySelfieBooth selon votre contexte.",
    image: "/images/ai/hero-photobooth-evenement-premium.webp",
    path: "/evenements",
    aiNote: "Visuel d'ambiance genere par IA.",
    highlights: ["Mariage", "Entreprise", "Prive"],
    sections: [
      {
        eyebrow: "Orienter",
        title: "Chaque evenement a ses contraintes",
        text: "Le contenu evite la duplication: chaque page traite timing, volume, logistique et options adaptees.",
        cards: eventTypes.map((event) => ({
          title: event.title,
          text: `${event.text} Machines conseillees: ${event.bestMachines.join(", ")}.`,
        })),
      },
    ],
    faq: [
      {
        question: "Faut-il choisir la machine avant le devis ?",
        answer: "Non. Le comparateur aide a se projeter, mais le devis confirme la meilleure configuration selon le lieu et les invites.",
      },
    ],
  }),
  corporates: eventPage("corporates", "/evenements/corporates"),
  mariages: eventPage("mariages", "/evenements/mariages"),
  anniversaires: eventPage("anniversaires", "/evenements/anniversaires"),
  soirees: eventPage("soirees", "/evenements/soirees"),
  "options-index": page({
    key: "options-index",
    eyebrow: "Options",
    title: "Toutes les options pour personnaliser votre photobooth",
    description:
      "Mur floral, Phonebooth audio, porte-cles photo, magnets, livre d'or, fond LED 360, Holo 3D et options Vogue Booth.",
    image: "/images/ai/options-souvenirs-premium.webp",
    path: "/options",
    aiNote: "Visuel d'ambiance genere par IA.",
    highlights: ["Souvenirs", "Decor", "Audio"],
    sections: [
      {
        eyebrow: "Hub options",
        title: "Completer l'animation sans creer de page pauvre",
        text: "Les options sont toutes decouvrables ici. Les pages dediees existantes sont conservees pour Phonebooth et panneau de bienvenue.",
        cards: options.map((option) => ({ title: option.name, text: option.text })),
      },
    ],
    optionGrid: options,
    faq: [
      {
        question: "Toutes les options sont-elles compatibles avec toutes les machines ?",
        answer: "Non, la compatibilite depend de la machine, du lieu et de la formule. Elle doit etre confirmee dans le devis.",
      },
    ],
  }),
  phonebooth: page({
    key: "phonebooth",
    eyebrow: "Livre d'or audio",
    title: "Phonebooth audio pour messages vocaux de mariage et soiree",
    description:
      "Un telephone retro pour enregistrer les messages vocaux des invites et conserver une trace plus emotionnelle de l'evenement.",
    image: "/images/phonebooth.webp",
    path: "/options/phonebooth",
    highlights: ["Audio", "Retro", "Souvenirs"],
    breadcrumbs: [{ label: "Options", href: "/options" }],
    sections: [
      {
        eyebrow: "Usage",
        title: "Une option simple quand les mots comptent autant que les photos",
        text: "Le Phonebooth audio capte les messages spontanes des invites sans remplacer l'animation photo.",
        cards: [
          { title: "Mariage", text: "Les proches laissent un message vocal pendant la reception." },
          { title: "Soiree privee", text: "Les invites enregistrent anecdotes, voeux ou souvenirs." },
          { title: "Association", text: "A combiner avec un livre d'or physique ou des tirages." },
        ],
      },
    ],
    faq: [
      {
        question: "Le Phonebooth remplace-t-il un livre d'or classique ?",
        answer: "Il peut le remplacer ou le completer selon l'ambiance souhaitee et les options retenues.",
      },
    ],
  }),
  panneau: page({
    key: "panneau",
    eyebrow: "Signaletique",
    title: "Panneau de bienvenue personnalise pour decor photo",
    description:
      "Un panneau d'accueil pour guider les invites, structurer l'entree de salle et renforcer l'univers visuel de l'evenement.",
    image: "/images/Welcomeboard.webp",
    path: "/options/panneau",
    highlights: ["Accueil", "Decor", "Personnalisation"],
    breadcrumbs: [{ label: "Options", href: "/options" }],
    sections: [
      {
        eyebrow: "Decor",
        title: "Un detail visuel qui aide l'entree de salle",
        text: "Le panneau peut accueillir, orienter ou renforcer la coherence avec le photobooth.",
        cards: [
          { title: "Mariage", text: "Accueil des invites et rappel de l'univers graphique." },
          { title: "Entreprise", text: "Signaletique propre pour stand, lancement ou reception." },
          { title: "Photo", text: "A associer a un fond, un mur floral ou une zone souvenir." },
        ],
      },
    ],
    faq: [
      {
        question: "Le panneau peut-il reprendre nos couleurs ?",
        answer: "Oui, la personnalisation graphique peut etre cadree au moment du devis.",
      },
    ],
  }),
  paris: page({
    key: "paris",
    eyebrow: "Paris",
    title: "Location photobooth premium a Paris et en Ile-de-France",
    description:
      "Photobooth, Miroirbooth, 360 Booth et options souvenirs pour evenements professionnels et prives a Paris et en Ile-de-France.",
    image: "/images/ai/ambiance-photobooth-corporate-premium.webp",
    path: "/paris",
    aiNote: "Visuel d'ambiance genere par IA.",
    highlights: ["Paris", "Ile-de-France", "Premium"],
    sections: [
      {
        eyebrow: "Local",
        title: "Une page locale utile, sans multiplier les villes artificielles",
        text: "Paris et l'Ile-de-France restent la priorite commerciale du site.",
        cards: [
          { title: "Acces", text: "Les contraintes de livraison, stationnement et horaires doivent etre cadrees avant devis." },
          { title: "Evenements", text: "Mariages, entreprises, salons, lancements et soirees privees." },
          { title: "Formats", text: "Photobooth, Miroirbooth, 360 Booth, Vogue Booth et packs." },
        ],
      },
    ],
  }),
  lyon: page({
    key: "lyon",
    eyebrow: "Lyon",
    title: "Location photobooth premium a Lyon",
    description:
      "Animation photo cle en main pour entreprises, mariages et soirees a Lyon, sous reserve de validation commerciale de la zone.",
    image: "/images/generated/premium-welcome-board-decor.webp",
    path: "/lyon",
    aiNote: "Visuel d'ambiance genere par IA.",
    highlights: ["Lyon", "Entreprise", "Mariage"],
    sections: [
      {
        eyebrow: "Zone a valider",
        title: "Une zone conservee car elle existe deja dans le site",
        text: "La page reste accessible, mais les preuves locales specifiques doivent etre confirmees avant enrichissement SEO fort.",
        cards: [
          { title: "A verifier", text: "Disponibilite, delais et exemples locaux." },
          { title: "A conserver", text: "URL existante et liens internes." },
          { title: "A enrichir", text: "Logistique locale lorsque les informations seront validees." },
        ],
      },
    ],
  }),
  rouen: page({
    key: "rouen",
    eyebrow: "Rouen",
    title: "Location photobooth premium a Rouen",
    description:
      "Service photobooth pour evenements a Rouen et en Normandie, avec informations locales a confirmer avant ciblage SEO fort.",
    image: "/images/generated/premium-booth-installation.webp",
    path: "/rouen",
    aiNote: "Visuel d'ambiance genere par IA.",
    highlights: ["Rouen", "Normandie", "Cle en main"],
    sections: [
      {
        eyebrow: "Zone a valider",
        title: "Conserver la page sans inventer de preuve locale",
        text: "La page reste indexable et utile, mais les informations specifiques doivent etre validees.",
        cards: [
          { title: "A verifier", text: "Disponibilite, exemples et contraintes de livraison." },
          { title: "A conserver", text: "URL existante et maillage interne." },
          { title: "A enrichir", text: "Cas reels ou informations locales lorsque disponibles." },
        ],
      },
    ],
  }),
  blog: page({
    key: "blog",
    eyebrow: "Conseils",
    title: "Conseils photobooth pour preparer votre evenement",
    description:
      "Guides pratiques pour choisir une animation photo, cadrer l'espace, personnaliser les tirages et preparer un evenement.",
    image: "/images/generated/instagram-backstage-setup.webp",
    path: "/blog",
    aiNote: "Visuel d'ambiance genere par IA.",
    highlights: ["Guides", "Choix", "Preparation"],
    sections: [
      {
        eyebrow: "Editorial",
        title: "Priorite aux sujets utiles avant de publier plus",
        text: "Le plan editorial 6 mois est documente dans SEO_CONTENT_PLAN.md pour eviter les articles faibles.",
        cards: [
          { title: "Comparer les machines", text: "Photobooth, Miroirbooth, 360 Booth: choisir selon l'objectif." },
          { title: "Preparer l'espace", text: "Surface, electricite, flux et acces de livraison." },
          { title: "Personnaliser", text: "Tirages, videos, livres d'or et souvenirs." },
        ],
      },
    ],
  }),
};
