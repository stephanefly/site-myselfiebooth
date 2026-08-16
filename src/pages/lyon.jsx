import MarketingPage from "../components/marketing/MarketingPage";
import { marketingPages } from "../data/marketingPages";

const basePage = marketingPages.lyon;

const lyonPage = {
  ...basePage,
  title: "Location Photobooth à Lyon pour mariage & entreprise",
  description:
    "Location de Photobooth à Lyon pour mariage, soirée et entreprise, avec installation, personnalisation et animations photo ou vidéo selon le projet.",
  sections: [
    {
      anchor: "location-photobooth-lyon",
      eyebrow: "Lyon & Rhône",
      title: "Photobooth à Lyon : choisir la bonne animation selon votre événement",
      text:
        "Photobooth, Miroirbooth, 360 Booth ou Vogue Booth : le choix dépend du lieu, du nombre d'invités et du souvenir recherché. La disponibilité et les conditions de déplacement sont confirmées dans la proposition.",
      cards: [
        {
          title: "Mariage",
          text: "Photo imprimée, miroir ou expérience Vogue selon l'ambiance et le décor de votre réception.",
        },
        {
          title: "Entreprise",
          text: "Formats photo et vidéo pour soirée corporate, séminaire, lancement ou activation de marque.",
        },
        {
          title: "360 Booth",
          text: "Animation vidéo dynamique pour les événements qui recherchent un contenu court et partageable.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Comparer les animations", href: "/prestations/" },
    { label: "Voir le 360 Booth", href: "/prestations/videobooth/" },
    { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Photobooth Lyon | Mariage & Entreprise",
    description:
      "Location Photobooth à Lyon : Photobooth, Miroirbooth, 360 Booth et Vogue Booth pour mariage et entreprise, avec installation et personnalisation.",
    ogTitle: "Location Photobooth à Lyon | MySelfieBooth",
    ogDescription:
      "Animations photo et vidéo pour mariage, entreprise et soirée à Lyon.",
  },
};

export default function Lyon() {
  return <MarketingPage page={lyonPage} />;
}
