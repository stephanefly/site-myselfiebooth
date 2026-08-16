import MarketingPage from "../components/marketing/MarketingPage";
import { marketingPages } from "../data/marketingPages";

const basePage = marketingPages.paris;

const parisPage = {
  ...basePage,
  title: "Location Photobooth premium à Paris | Mariage & entreprise",
  description:
    "Location de Photobooth premium à Paris pour mariage, soirée et entreprise, avec installation, personnalisation, tirages selon formule et galerie photo.",
  sections: [
    {
      anchor: "location-photobooth-paris",
      eyebrow: "Paris & événementiel",
      title: "Louer un photobooth premium à Paris avec une logistique adaptée au lieu",
      text:
        "À Paris, l'accès prestataire, le stationnement, les horaires de montage et l'espace disponible peuvent changer la configuration. Nous cadrons ces points avant l'événement pour proposer une installation adaptée au lieu et au flux d'invités.",
      cards: [
        {
          title: "Mariage à Paris",
          text: "Photobooth, Miroirbooth ou Vogue Booth selon le décor, les souvenirs souhaités et l'espace disponible.",
        },
        {
          title: "Entreprise & séminaire",
          text: "Animation personnalisée pour soirée corporate, salon, séminaire ou lancement de produit.",
        },
        {
          title: "Accès & installation",
          text: "Les contraintes de livraison, d'ascenseur, de stationnement et d'horaires sont validées avant le jour J.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
    { label: "Comprendre le prix d'une location Photobooth", href: "/blog/prix-location-photobooth/" },
    { label: "Photobooth pour entreprise", href: "/evenements/corporates/" },
    { label: "Photobooth pour mariage", href: "/evenements/mariages/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Photobooth Premium Paris | Mariage & Entreprise",
    description:
      "Location Photobooth premium à Paris pour mariage, entreprise et soirée : installation, personnalisation et tirages selon formule. Demandez votre devis.",
    ogTitle: "Location Photobooth premium à Paris | MySelfieBooth",
    ogDescription:
      "Photobooth, Miroirbooth, 360 Booth et Vogue Booth pour vos événements premium à Paris.",
  },
};

export default function Paris() {
  return <MarketingPage page={parisPage} />;
}
