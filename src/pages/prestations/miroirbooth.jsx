import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.miroirbooth;

const miroirPage = {
  ...basePage,
  title: "Location Miroir Photobooth dès 550 €",
  description:
    "Louez un Miroirbooth pour mariage, gala ou entreprise : miroir photo interactif, personnalisation, installation et galerie selon la formule.",
  highlights: ["À partir de 550 €", "Miroir interactif", "Mariage & entreprise"],
  sections: [
    {
      anchor: "miroir-photobooth",
      eyebrow: "Miroir Photobooth",
      title: "Un miroir photo interactif pour une réception plus élégante",
      text:
        "Le Miroirbooth combine une grande surface miroir, une expérience tactile et un rendu plus scénographique qu'une borne photo classique. Il convient particulièrement aux mariages, galas, soirées premium et événements d'entreprise.",
      cards: [
        {
          title: "Effet miroir",
          text: "Une animation visible dans la salle qui attire naturellement les invités.",
        },
        {
          title: "Personnalisation",
          text: "Cadre photo et éléments graphiques adaptés au thème ou à l'identité de l'événement.",
        },
        {
          title: "Souvenirs",
          text: "Photos et tirages selon la formule, avec options décor et livre d'or disponibles.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Comparer Photobooth et Miroirbooth", href: "/prestations/photobooth/" },
    { label: "Voir les options", href: "/options/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Miroir Photobooth dès 550 € | Miroirbooth",
    description:
      "Location Miroir Photobooth dès 550 € pour mariage et entreprise : miroir interactif, personnalisation, installation et galerie selon formule.",
    ogTitle: "Location Miroir Photobooth | MySelfieBooth",
    ogDescription:
      "Un miroir photo interactif et personnalisable pour mariage, gala et événement d'entreprise.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Location Miroir Photobooth",
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
