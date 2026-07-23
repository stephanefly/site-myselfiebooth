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
      "@type": "Organization",
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
  gallery = galleryHighlights.slice(0, 4),
  faq = [],
  finalTitle,
  relatedLinks = [],
  optionGrid,
  comparison,
  pathways,
  caseStudies,
  story,
  primaryCta,
  secondaryCta,
  phoneCta,
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
    pathways,
    caseStudies,
    story,
    primaryCta: primaryCta || { label: siteConfig.primaryCtaLabel, href: siteConfig.quoteUrl },
    secondaryCta: secondaryCta || { label: siteConfig.secondaryCtaLabel, href: "/prestations#machines" },
    phoneCta: phoneCta || { label: siteConfig.phoneCtaLabel, href: siteConfig.phoneHref },
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
    image: machine.image,
    path: machine.href,
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
        title: "Ce qui est prévu dans la formule",
        cards: cardsFrom("Inclus", machine.includes.slice(0, 4)),
      },
      {
        eyebrow: "Logistique",
        title: "Les points a verifier avant le jour J",
        text: "Un bon emplacement evite l'attente, les branchements compliques et les rendus decevants.",
        cards: cardsFrom("A prevoir", machine.logistics),
      },
    ],
    faq,
    relatedLinks: [
      { label: "Comparer les animations", href: "/prestations#machines" },
      { label: "Voir les options", href: "/prestations#options" },
      { label: "Événements entreprise", href: "/evenements/corporates" },
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
    title: "Animations photo et vidéo pour entreprise et activation de marque",
    description:
      "Photobooth, 360 Booth, iPad Booth et formats premium pour soirées d'entreprise, séminaires, lancements, inaugurations et activations de marque.",
    image: "/images/machines-ai/360booth-entreprise-myselfiebooth.webp",
    highlights: ["Branding", "Logistique", "Contenus"],
    primaryCta: {
      label: siteConfig.professionalCtaLabel,
      href: siteConfig.quoteUrl,
      event: "cta_quote_click",
    },
    secondaryCta: {
      label: "Voir les formats B2B",
      href: "#formats-b2b",
    },
    pathways: [
      {
        eyebrow: "Entreprises",
        title: "Je prépare un événement professionnel",
        text: "Soirée interne, lancement produit, salon, séminaire ou activation : le parcours met en avant image, flux, personnalisation et contenus.",
        href: "/evenements/corporates",
      },
      {
        eyebrow: "Particuliers",
        title: "Je prépare un mariage ou une soirée privée",
        text: "Le parcours particuliers reste accessible avec les conseils mariage, anniversaire, souvenirs et options cadeaux.",
        href: "/evenements/mariages",
      },
    ],
    sections: [
      {
        eyebrow: "Objectifs B2B",
        title: "Faire participer sans perturber le déroulé professionnel",
        text: "L'animation doit être visible, rapide à comprendre et cohérente avec l'image de marque.",
        cards: [
          { title: "Engagement", text: "Créer une expérience mémorable qui fait participer collaborateurs, invités, prospects ou partenaires." },
          { title: "Image de marque", text: "Intégrer logo, couleurs, habillage, fond ou rendu vidéo lorsque la formule le permet." },
          { title: "Contenu partageable", text: "Produire des photos ou vidéos exploitables après l'événement, sans promettre de reporting marketing non confirmé." },
        ],
      },
      {
        eyebrow: "Événements couverts",
        title: "Des usages professionnels clairement identifiés",
        text: "Ces catégories restent formulées prudemment et doivent être confirmées au devis selon le lieu, la date et la configuration.",
        cards: [
          { title: "Soirées d'entreprise", text: "Fédérer les équipes avec une animation simple, visible et facile à utiliser." },
          { title: "Lancements de produits", text: "Créer une scène photo ou vidéo cohérente avec l'univers de lancement." },
          { title: "Séminaires et conférences", text: "Ajouter un point d'engagement sans alourdir l'organisation principale." },
          { title: "Inaugurations", text: "Marquer l'accueil, le photocall ou le moment de célébration." },
          { title: "Anniversaires d'entreprise", text: "Donner un souvenir collectif et personnalisable aux équipes." },
          { title: "Salons et activations", text: "À confirmer selon stand, flux, électricité et droits d'affichage." },
        ],
      },
      {
        anchor: "formats-b2b",
        eyebrow: "Formats B2B",
        title: "Les machines les plus adaptées à chaque besoin professionnel",
        text: "Le choix dépend de l'objectif : générer du contenu, animer un stand, offrir un souvenir ou créer un effet social media.",
        cards: [
          { title: "Photobooth", text: "Souvenir imprimé selon formule, idéal pour soirée interne, salon ou événement collaborateurs." },
          { title: "360 Booth", text: "Vidéo dynamique pour activation, lancement produit ou contenu social court." },
          { title: "iPad Booth", text: "Format digital compact pour accueil, stand ou espace contraint." },
          { title: "Vogue Booth", text: "Expérience très visuelle pour soirée premium, gala ou opération image." },
          { title: "Pack VIP", text: "Combinaison photo et vidéo pour absorber davantage de passage." },
          { title: "Formule complète", text: "Parcours sur mesure quand plusieurs zones ou objectifs coexistent." },
        ],
      },
      {
        eyebrow: "Processus",
        title: "Un déroulé pensé pour les responsables événementiels",
        text: "Le parcours doit rassurer une équipe qui compare plusieurs prestataires et veut limiter les imprévus.",
        cards: [
          { title: "Brief", text: "Objectif, public, lieu, contraintes, horaires et niveau de personnalisation sont cadrés." },
          { title: "Personnalisation", text: "Logo, couleurs, template, écran, fond ou habillage vidéo sont préparés selon la formule." },
          { title: "Validation", text: "Les visuels et conditions techniques sont confirmés avant l'événement." },
          { title: "Installation", text: "Livraison, montage, branchements et tests sont anticipés." },
          { title: "Animation", text: "L'équipe accompagne les invités selon la machine, le volume et la formule retenue." },
          { title: "Remise des contenus", text: "Les contenus numériques et la galerie sont transmis selon les modalités validées." },
        ],
      },
      {
        eyebrow: "Logistique",
        title: "Les informations dont une entreprise a besoin avant de réserver",
        text: "La page évite les promesses floues et explique les points qui influencent vraiment le devis.",
        cards: [
          { title: "Espace", text: "Prévoir une zone stable, visible et dimensionnée selon la machine choisie." },
          { title: "Électricité", text: "Une alimentation à proximité est généralement nécessaire, à confirmer selon la configuration." },
          { title: "Flux invités", text: "Le volume attendu oriente le choix entre machine simple, équipe renforcée ou pack." },
          { title: "Accès et horaires", text: "Livraison, montage, tests, démontage et accès prestataire doivent être anticipés." },
          { title: "Personnalisation", text: "Templates, fonds, habillages et options sont validés avant production." },
          { title: "Facturation", text: "Les modalités exactes restent à confirmer dans le devis et les échanges commerciaux." },
        ],
      },
    ],
    caseStudies: [
      {
        title: "Salon professionnel ou activation de marque",
        context: "Configuration type pour stand, lancement ou activation de marque avec flux invité à organiser.",
        solution: "Mettre en scène une borne visible, un décor propre et une personnalisation cohérente avec l'univers de l'événement.",
        result: "Rassurer sur le rendu premium avant devis, sans présenter le visuel comme une preuve client réelle.",
        imageSlotId: "b2b-case-salon",
      },
      {
        title: "Séminaire, conférence ou soirée interne",
        context: "Configuration type pour fédérer les équipes pendant un cocktail, une conférence ou une soirée interne.",
        solution: "Prévoir une zone claire, une animation facile à comprendre et une remise de contenus cadrée selon la formule.",
        result: "Montrer l'ambiance possible tout en gardant une distinction nette avec les photos réelles validées.",
        imageSlotId: "b2b-case-seminaire",
      },
    ],
    faq: [
      {
        question: "Peut-on personnaliser l'animation aux couleurs de la marque ?",
        answer: "Oui, les visuels peuvent reprendre logo, couleurs, template, écran, fond ou habillage vidéo lorsque la formule le prévoit.",
      },
      {
        question: "Est-ce adapté à un salon professionnel ?",
        answer: "Oui, à condition de cadrer l'espace, le flux d'invités, le format de partage et les contraintes du stand.",
      },
      {
        question: "Quels délais prévoir pour une demande entreprise ?",
        answer: "Le délai dépend de la date, du niveau de personnalisation et des contraintes du lieu. Le formulaire de devis permet de cadrer rapidement ces éléments.",
      },
      {
        question: "Les logos clients peuvent-ils être affichés ?",
        answer: "Ils ne doivent être affichés comme preuve commerciale que si la collaboration et le droit d'utilisation sont confirmés.",
      },
      {
        question: "Peut-on gérer un grand volume d'invités ?",
        answer: "Oui, mais le choix de la machine, la durée, la file d'attente et l'équipe doivent être adaptés au volume attendu.",
      },
    ],
  },
  mariages: {
    title: "Photobooth mariage pour des souvenirs élégants et des invités engagés",
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
          { title: "Décor", text: "Mur floral, panneau ou fond adapté améliorent le rendu des photos." },
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
    image: "/images/machines-ai/photobooth-mariage-myselfiebooth.webp",
    highlights: ["Festif", "Accessoires", "Partage"],
    sections: [
      {
        eyebrow: "Anniversaire",
        title: "Creer un point photo qui rythme la soiree",
        text: "Les invites doivent comprendre l'animation en quelques secondes et repartir avec un souvenir.",
        cards: [
          { title: "Convivial", text: "Accessoires et tirages rendent l'experience facile a adopter." },
          { title: "Video", text: "Le 360 Booth ajoute un contenu dynamique pour les reseaux." },
          { title: "Souvenirs", text: "Porte-clés et magnets peuvent transformer les photos en cadeaux." },
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
    image: "/images/machines-ai/air360-gala-myselfiebooth.webp",
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

const commonEventFaq = [
  {
    question: "Combien d'espace faut-il prévoir pour installer une animation ?",
    answer: "L'espace dépend de la machine et du décor. Nous vérifions la surface disponible, la hauteur, les accès et la circulation avant de confirmer la configuration.",
  },
  {
    question: "L'installation et le démontage sont-ils pris en charge ?",
    answer: "Oui, les conditions de livraison, de montage, de tests et de démontage sont précisées dans la proposition selon le lieu et la formule.",
  },
  {
    question: "Faut-il prévoir une prise électrique ou une connexion internet ?",
    answer: "Une alimentation électrique à proximité est généralement nécessaire. La connexion internet dépend des fonctions de partage retenues et doit être vérifiée avec le lieu.",
  },
  {
    question: "Un animateur reste-t-il présent pendant l'événement ?",
    answer: "Cela dépend de la machine et de la formule choisie. Lorsque sa présence est prévue, il guide les invités et veille au bon fonctionnement de l'installation.",
  },
  {
    question: "Peut-on personnaliser les photos et l'écran ?",
    answer: "Oui, le cadre photo, les couleurs, le logo, certains écrans et plusieurs éléments du décor peuvent être personnalisés selon la prestation.",
  },
  {
    question: "Combien de temps avant l'événement faut-il réserver ?",
    answer: "Le plus tôt possible pour sécuriser la date, surtout en période chargée. Un délai supplémentaire est utile lorsque le projet demande un décor ou une personnalisation spécifique.",
  },
];

function eventPage(key, path) {
  const data = eventPages[key];
  return page({
    key,
    eyebrow: "Evenement",
    title: data.title,
    description: data.description,
    image: data.image,
    path,
    highlights: data.highlights,
    primaryCta: data.primaryCta,
    secondaryCta: data.secondaryCta,
    pathways: data.pathways,
    caseStudies: data.caseStudies,
    breadcrumbs: [{ label: "Vos evenements", href: "/evenements" }],
    sections: data.sections,
    faq: [...data.faq, ...commonEventFaq],
    relatedLinks: [
      { label: "Comparer les animations", href: "/prestations#machines" },
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
    image: "/images/machines-ai/hero-machines-myselfiebooth.webp",
    path: "/prestations",
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
    image: "/images/machines-ai/hero-machines-myselfiebooth.webp",
    path: "/evenements",
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
      ...commonEventFaq,
      {
        question: "Récupère-t-on les photos ou vidéos après l'événement ?",
        answer: "Oui, les modalités de remise des contenus numériques ou de la galerie sont indiquées dans la formule et confirmées dans le devis.",
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
    image: "/images/all_options.webp",
    path: "/options",
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
          { title: "Photo", text: "À associer à un fond, un mur floral ou une zone souvenir." },
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
    title: "Location photobooth premium en Île-de-France",
    description:
      "Photobooth, Miroirbooth, 360 Booth et options souvenirs pour événements professionnels et privés en Île-de-France.",
    image: "/images/machines-ai/360booth-entreprise-myselfiebooth.webp",
    path: "/paris",
    highlights: ["Paris", "Île-de-France", "Premium"],
    sections: [
      {
        eyebrow: "Local",
        title: "Une page locale utile, sans multiplier les villes artificielles",
        text: "Paris et l'Île-de-France restent la priorité commerciale du site.",
        cards: [
          { title: "Acces", text: "Les contraintes de livraison, stationnement et horaires doivent etre cadrees avant devis." },
          { title: "Événements", text: "Mariages, entreprises, salons, lancements et soirées privées." },
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
    image: "/images/machines-ai/panneaux-bienvenue-myselfiebooth.webp",
    path: "/lyon",
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
    image: "/images/machines-ai/atelier-machines-myselfiebooth.webp",
    path: "/rouen",
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
  "a-propos": page({
    key: "a-propos",
    eyebrow: "À propos",
    title: "L'expertise derrière les machines MySelfieBooth",
    description:
      "Découvrez l'histoire de MySelfieBooth, une marque d'animations photo et vidéo premium fondée par Stéphane Faure.",
    image: "/images/machines-ai/atelier-machines-myselfiebooth.webp",
    path: "/a-propos",
    highlights: ["Fondateur", "Machines conçues", "Expériences premium"],
    sections: [
      {
        eyebrow: "Histoire",
        title: "Une approche technique au service de l'événementiel",
        text: "Ce récit reste volontairement court et factuel, avec les éléments à valider centralisés dans la documentation.",
        cards: [
          { title: "Origine", text: "Stéphane Faure, ingénieur en aéronautique, s'est lancé dans l'entrepreneuriat en 2021." },
          { title: "Différenciation", text: "La marque s'appuie sur des photobooths conçus pour proposer des expériences différentes." },
          { title: "Promesse", text: "Créer des expériences photo et vidéo uniques, immersives et mémorables pour événements privés et professionnels." },
        ],
      },
    ],
    story: {
      eyebrow: "Fondateur",
      title: siteConfig.founder.title,
      text: siteConfig.founder.summary,
      href: "/evenements/corporates",
      linkLabel: "Voir le parcours entreprise",
      imageSlotId: "founder-portrait",
    },
    faq: [
      {
        question: "Pourquoi certaines informations sont-elles formulées prudemment ?",
        answer: "Les chiffres, preuves et droits d'affichage doivent être validés avant d'être utilisés comme arguments commerciaux publics.",
      },
    ],
  }),
};
