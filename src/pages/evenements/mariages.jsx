import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.mariages;

const mariagePage = {
  ...basePage,
  title: "Photobooth mariage : location, idées & animations",
  description:
    "Location de Photobooth pour mariage : tirages personnalisés, Miroirbooth, 360 Booth, Vogue Booth et options souvenirs selon votre réception.",
  sections: [
    {
      anchor: "choisir-photobooth-mariage",
      eyebrow: "Choisir son animation mariage",
      title: "Quel photobooth choisir pour un mariage ?",
      text:
        "Le Photobooth convient si vous privilégiez les tirages et la simplicité. Le Miroirbooth apporte un rendu plus scénographique, le 360 Booth crée des vidéos dynamiques et le Vogue Booth transforme l'espace en photocall lumineux.",
      cards: [
        {
          title: "Photobooth",
          text: "Le choix polyvalent pour imprimer des souvenirs et faire participer toutes les générations.",
        },
        {
          title: "Miroirbooth",
          text: "Un format plus élégant pour les réceptions où le décor compte autant que le souvenir.",
        },
        {
          title: "360 & Vogue Booth",
          text: "Deux formats plus visuels pour vidéo, photocall et moments forts pendant la soirée.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Guide : quel photobooth choisir pour un mariage ?", href: "/blog/choisir-photobooth-mariage/" },
    { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
    { label: "Voir les options souvenirs", href: "/options/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Photobooth Mariage | Location & Animations MySelfieBooth",
    description:
      "Photobooth mariage : comparez Photobooth, Miroirbooth, 360 Booth et Vogue Booth, avec tirages personnalisés et options souvenirs.",
    ogTitle: "Photobooth mariage : quelle animation choisir ?",
    ogDescription:
      "Photo imprimée, miroir, vidéo 360 ou Vogue Booth pour créer les souvenirs de votre mariage.",
  },
};

export default function Mariages() {
  return <MarketingPage page={mariagePage} />;
}
