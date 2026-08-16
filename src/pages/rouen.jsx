import MarketingPage from "../components/marketing/MarketingPage";
import { marketingPages } from "../data/marketingPages";

const basePage = marketingPages.rouen;

const rouenPage = {
  ...basePage,
  title: "Location Photobooth à Rouen pour mariage & entreprise",
  description:
    "Location de Photobooth à Rouen et en Normandie pour mariage, soirée et entreprise, avec installation, personnalisation et animations photo ou vidéo.",
  sections: [
    {
      anchor: "location-photobooth-rouen",
      eyebrow: "Rouen & Normandie",
      title: "Photobooth à Rouen : une animation adaptée au lieu et aux invités",
      text:
        "Nous étudions les demandes à Rouen et en Normandie selon la date, le lieu, les horaires et les accès. Photobooth, Miroirbooth, 360 Booth ou Vogue Booth sont proposés selon le rendu recherché et la configuration de l'événement.",
      cards: [
        {
          title: "Mariage",
          text: "Une animation photo simple à intégrer avec tirages et options souvenirs selon la formule.",
        },
        {
          title: "Entreprise",
          text: "Formats personnalisables pour séminaire, soirée corporate, salon ou lancement de produit.",
        },
        {
          title: "Logistique",
          text: "Accès, horaires, alimentation et emplacement sont validés avant l'installation.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Comparer les animations", href: "/prestations/" },
    { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
    { label: "Photobooth pour entreprise", href: "/evenements/corporates/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Photobooth Rouen & Normandie | MySelfieBooth",
    description:
      "Location Photobooth à Rouen et en Normandie pour mariage et entreprise : installation, personnalisation et animations photo ou vidéo.",
    ogTitle: "Location Photobooth à Rouen | MySelfieBooth",
    ogDescription:
      "Photobooth, Miroirbooth, 360 Booth et Vogue Booth pour vos événements à Rouen et en Normandie.",
  },
};

export default function Rouen() {
  return <MarketingPage page={rouenPage} />;
}
