import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.voguebooth;

const faq = [
  {
    question: "Qu'est-ce qu'un Vogue Booth ?",
    answer:
      "Le Vogue Booth est un décor lumineux de type photocall, inspiré d'un univers magazine ou éditorial. Les invités prennent place dans la structure pour créer des portraits et contenus visuels personnalisés.",
  },
  {
    question: "Combien coûte la location d'un Vogue Booth ?",
    answer:
      "La location démarre à 500 € pour les formules particulières. Les projets corporate et Portrait Studio personnalisés sont chiffrés selon le brief, avec des offres à partir de 900 € HT.",
  },
  {
    question: "Peut-on personnaliser le Vogue Booth avec un logo ou des prénoms ?",
    answer:
      "Oui. Les textes, couleurs et plusieurs éléments visuels peuvent être adaptés au mariage, au gala ou à l'identité de marque selon la formule retenue.",
  },
  {
    question: "Quelle différence entre un Vogue Booth et un Photobooth ?",
    answer:
      "Le Photobooth classique privilégie la prise de vue et les tirages dans un format compact. Le Vogue Booth est d'abord un décor lumineux et un photocall grand format, pensé pour un rendu plus visuel et éditorial.",
  },
  ...(basePage.faq || []),
];

const voguePage = {
  ...basePage,
  title: "Vogue Booth & Portrait Studio : effet magazine personnalisable",
  description:
    "Location de Vogue Booth dès 500 € pour créer un Portrait Studio lumineux effet magazine, personnalisable pour mariage, gala, soirée VIP ou événement de marque.",
  highlights: ["À partir de 500 €", "Portrait Studio", "Mariage & entreprise"],
  sections: [
    {
      anchor: "portrait-studio",
      eyebrow: "Vogue Portrait Studio",
      title: "Un mini studio photo événementiel au rendu éditorial",
      text:
        "Le Vogue Booth ne se limite pas à un décor lumineux : il peut être pensé comme un Portrait Studio avec une mise en scène propre, une lumière maîtrisée et un rendu plus éditorial pour vos invités ou votre marque.",
      cards: [
        {
          title: "Lumière & rendu",
          text: "Un espace lumineux conçu pour obtenir des portraits nets, lisibles et cohérents avec une ambiance premium.",
        },
        {
          title: "Direction des invités",
          text: "Selon la formule, l'accompagnement aide les invités à se placer et à obtenir un portrait plus travaillé qu'une simple photo souvenir.",
        },
        {
          title: "Version corporate",
          text: "Pour les entreprises, le Portrait Studio peut intégrer branding, visuels de campagne et configuration sur mesure à partir de 900 € HT.",
        },
      ],
    },
    {
      anchor: "photocall-vogue",
      eyebrow: "Photocall Vogue",
      title: "Un magazine photo booth conçu comme un véritable décor événementiel",
      text:
        "Le Vogue Booth transforme l'espace en photocall lumineux avec une mise en scène inspirée des couvertures de magazine. Le visuel, les textes et le décor peuvent être adaptés au thème de votre mariage, gala ou événement de marque.",
      cards: [
        {
          title: "Effet magazine",
          text: "Une scène lumineuse immédiatement identifiable pour créer des portraits au rendu éditorial.",
        },
        {
          title: "Personnalisation",
          text: "Noms, date, couleurs et éléments graphiques sont adaptés au projet selon la formule choisie.",
        },
        {
          title: "Mariage & entreprise",
          text: "Le format convient aux mariages premium, galas, lancements, soirées VIP et activations de marque.",
        },
      ],
    },
    {
      anchor: "vogue-vs-photobooth",
      eyebrow: "Comparatif",
      title: "Vogue Booth, Photobooth ou Miroirbooth : quel rendu choisir ?",
      text:
        "Le Vogue Booth est pertinent lorsque le décor doit être immédiatement visible. Le Photobooth classique privilégie la simplicité et le tirage ; le Miroirbooth apporte une présence élégante ; le Vogue Booth crée un espace scénographique qui devient lui-même une partie des photos.",
      cards: [
        {
          title: "Vogue Booth",
          text: "Pour un rendu éditorial, un photocall lumineux et une expérience très reconnaissable dans les photos et vidéos de l'événement.",
        },
        {
          title: "Photobooth",
          text: "Pour une animation compacte, rapide à utiliser et orientée vers les souvenirs imprimés et la galerie.",
        },
        {
          title: "Miroirbooth",
          text: "Pour une expérience photo premium qui s'intègre au décor tout en conservant un fonctionnement proche du photobooth.",
        },
        {
          title: "360 Booth",
          text: "Pour privilégier le mouvement et la vidéo plutôt que le portrait fixe et la scénographie magazine.",
        },
      ],
    },
    {
      anchor: "installation-vogue",
      eyebrow: "Installation & espace",
      title: "Quel espace prévoir pour installer un Vogue Booth ?",
      text:
        "Le Vogue Booth est une structure plus imposante qu'une borne photo classique. Il faut anticiper la largeur, la profondeur, la hauteur disponible, le passage du matériel, l'alimentation et une zone de recul suffisante pour photographier les groupes sans bloquer la circulation.",
      cards: [
        {
          title: "Accès au lieu",
          text: "Portes, escaliers, ascenseurs, quais et distance de portage doivent être vérifiés avant l'installation de la structure.",
        },
        {
          title: "Zone dégagée",
          text: "Les participants doivent pouvoir entrer, poser et ressortir sans gêner le service, la piste de danse ou un passage principal.",
        },
        {
          title: "Temps de montage",
          text: "Le montage demande davantage de préparation qu'une borne compacte ; le créneau technique doit donc être prévu avec le lieu.",
        },
        {
          title: "Éclairage ambiant",
          text: "La structure reste lumineuse mais son emplacement doit éviter les contre-jours ou éclairages parasites qui nuisent au rendu.",
        },
      ],
    },
    {
      anchor: "personnalisation-vogue",
      eyebrow: "Design sur mesure",
      title: "Personnaliser une Vogue Box pour un mariage ou une marque",
      text:
        "La force du Vogue Booth vient de son impact graphique. Une personnalisation réussie utilise peu d'éléments mais les rend très lisibles : nom de l'événement, logo, date, slogan ou univers visuel peuvent être intégrés à la structure et aux contenus selon le projet.",
      cards: [
        {
          title: "Mariage",
          text: "Prénoms, date, monogramme et couleurs de la réception créent un photocall cohérent avec la décoration générale.",
        },
        {
          title: "Gala & soirée VIP",
          text: "Un visuel plus sobre, premium et fortement contrasté permet d'obtenir un décor identifiable sur les photos de groupe.",
        },
        {
          title: "Lancement de produit",
          text: "La structure peut reprendre le nom de la campagne, un produit, une accroche ou les codes visuels d'une activation de marque.",
        },
        {
          title: "Couverture magazine",
          text: "Le concept peut être adapté à un univers éditorial ou une fausse couverture, sous réserve de validation du design et des droits utilisés.",
        },
      ],
    },
    {
      anchor: "flux-vogue",
      eyebrow: "Expérience invités",
      title: "Gérer le flux devant un Vogue Booth pendant un grand événement",
      text:
        "Le Vogue Booth attire rapidement des groupes. Pour conserver une expérience fluide, il faut définir une zone d'attente, limiter les changements de pose trop longs et prévoir un accompagnement lorsque le nombre de participants est important.",
      cards: [
        {
          title: "Groupes",
          text: "La structure est particulièrement attractive pour les photos de groupe ; le cadrage et la capacité doivent être validés selon la configuration.",
        },
        {
          title: "File visible",
          text: "Une zone d'attente claire évite que les participants occupent les accès ou masquent le décor aux autres invités.",
        },
        {
          title: "Accompagnement",
          text: "Sur un projet premium ou corporate, une personne dédiée peut aider au placement, au rythme et au respect du parcours.",
        },
        {
          title: "Contenus après l'événement",
          text: "Les modalités de récupération des photos ou vidéos sont cadrées dans la formule afin de prolonger l'expérience après le jour J.",
        },
      ],
    },
    ...basePage.sections,
  ],
  faq,
  relatedLinks: [
    { label: "Voir les offres entreprise", href: "/evenements/corporates/" },
    { label: "Photobooth pour mariage", href: "/evenements/mariages/" },
    { label: "Comparer avec le Miroirbooth", href: "/prestations/miroirbooth/" },
    { label: "Comparer les animations", href: "/prestations/" },
    { label: "Animations pour entreprises", href: "/evenements/corporates/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Vogue Booth & Portrait Studio | Effet Magazine",
    description:
      "Location Vogue Booth dès 500 € : Portrait Studio lumineux effet magazine pour mariage, gala et événement de marque. Version corporate dès 900 € HT.",
    ogTitle: "Vogue Booth & Portrait Studio | MySelfieBooth",
    ogDescription:
      "Un décor lumineux personnalisable pensé comme un mini studio photo pour mariage, gala et événement premium.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] === "Service") {
        return {
          ...entry,
          name: "Vogue Booth et Portrait Studio",
          description:
            "Location de Vogue Booth et Portrait Studio lumineux effet magazine pour mariage, gala et événement de marque.",
          offers: {
            ...(entry.offers || {}),
            price: "500",
            priceCurrency: "EUR",
            description: "Tarif particulier à partir de 500 euros selon la date, le lieu et la formule.",
          },
        };
      }

      if (entry["@type"] === "FAQPage") {
        return {
          ...entry,
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        };
      }

      return entry;
    }),
  },
};

export default function Voguebooth() {
  return <MarketingPage page={voguePage} />;
}
