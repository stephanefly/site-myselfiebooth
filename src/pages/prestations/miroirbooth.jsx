import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.miroirbooth;

const miroirPage = {
  ...basePage,
  title: "Location Miroir Photobooth (Miroirbooth)",
  description:
    "Louez un miroir photo interactif pour mariage, gala ou entreprise : Miroirbooth personnalisé, installation, tirages et galerie selon la formule.",
  highlights: ["À partir de 550 €", "Miroir photo interactif", "Mariage & entreprise"],
  sections: [
    {
      anchor: "miroir-photobooth",
      eyebrow: "Miroir Photobooth",
      title: "Location miroir photo : une expérience plus élégante qu'une borne classique",
      text:
        "Le Miroirbooth, aussi recherché comme miroir photobooth ou mirror booth, combine une grande surface miroir, une expérience tactile et un rendu scénographique. Il convient particulièrement aux mariages, galas, soirées premium et événements d'entreprise.",
      cards: [
        {
          title: "Effet miroir",
          text: "Une animation visible dans la salle qui attire naturellement les invités et crée un véritable point photo.",
        },
        {
          title: "Personnalisation",
          text: "Cadre photo et éléments graphiques adaptés au thème du mariage ou à l'identité de l'entreprise.",
        },
        {
          title: "Souvenirs",
          text: "Photos et tirages selon la formule, avec options décor, magnets, porte-clés et livre d'or disponibles.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  faq: [
    {
      question: "Qu'est-ce qu'un Miroirbooth ou miroir photobooth ?",
      answer:
        "Le Miroirbooth est un miroir photo interactif grand format. Les invités se placent devant le miroir pour déclencher l'expérience et récupérer leurs photos ou tirages selon la formule choisie.",
    },
    {
      question: "Quelle différence entre un Photobooth et un Miroirbooth ?",
      answer:
        "Le Photobooth est une borne photo plus compacte et polyvalente. Le Miroirbooth occupe davantage l'espace visuel et apporte un rendu plus scénographique, particulièrement adapté aux mariages, galas et événements premium.",
    },
    {
      question: "Peut-on louer un miroir photo pour un mariage ou une entreprise ?",
      answer:
        "Oui. Le Miroirbooth peut être personnalisé pour un mariage, une soirée d'entreprise, un gala ou une activation de marque. Le devis confirme la configuration, le lieu, les tirages et les options.",
    },
    ...(basePage.faq || []),
  ],
  relatedLinks: [
    { label: "Comparer Photobooth et Miroirbooth", href: "/prestations/photobooth/" },
    { label: "Photobooth pour mariage", href: "/evenements/mariages/" },
    { label: "Photobooth pour entreprise", href: "/evenements/corporates/" },
    { label: "Zones d'intervention", href: "/zones-intervention/" },
    { label: "Voir les options", href: "/options/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Miroir Photobooth (Miroirbooth) dès 550 €",
    description:
      "Location miroir photobooth dès 550 € : Miroirbooth interactif pour mariage et entreprise, personnalisation, installation et tirages selon formule.",
    ogTitle: "Location Miroir Photobooth | MySelfieBooth",
    ogDescription:
      "Un miroir photo interactif et personnalisable pour mariage, gala et événement d'entreprise.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Location Miroir Photobooth et Miroirbooth",
        description:
          "Location de miroir photo interactif pour mariage, gala et événement d'entreprise avec personnalisation et tirages selon formule.",
        offers: {
          ...(entry.offers || {}),
          price: "550",
          priceCurrency: "EUR",
          description: "Tarif à partir de 550 euros selon la date, le lieu et la formule.",
        },
      };
    }),
  },
};

export default function Miroirbooth() {
  return <MarketingPage page={miroirPage} />;
}
