import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.anniversaires;

const anniversairePage = {
  ...basePage,
  title: "Photobooth anniversaire : animation photo & vidéo",
  description:
    "Photobooth pour anniversaire : photos imprimées, 360 Booth, Vogue Booth et options personnalisées pour créer une animation adaptée à votre soirée.",
  sections: [
    {
      anchor: "animation-photo-anniversaire",
      eyebrow: "Animation anniversaire",
      title: "Quelle animation photo choisir pour un anniversaire ?",
      text:
        "Le Photobooth reste le format le plus simple pour réunir toutes les générations et repartir avec un souvenir. Le 360 Booth privilégie la vidéo et l'énergie, tandis que le Vogue Booth crée un décor plus spectaculaire.",
      cards: [
        {
          title: "Photo imprimée",
          text: "Photobooth avec cadre personnalisé et souvenirs selon la formule choisie.",
        },
        {
          title: "Vidéo 360",
          text: "Une animation dynamique pour groupes, musique et contenus courts à partager.",
        },
        {
          title: "Effet magazine",
          text: "Vogue Booth pour transformer un espace de la soirée en véritable photocall lumineux.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Guide Photobooth anniversaire", href: "/blog/photobooth-anniversaire/" },
    { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
    { label: "Voir le 360 Booth", href: "/prestations/videobooth/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Photobooth Anniversaire | Animation Photo & 360 Booth",
    description:
      "Photobooth anniversaire : photo imprimée, 360 Booth et Vogue Booth pour une soirée personnalisée. Comparez les animations MySelfieBooth.",
    ogTitle: "Photobooth anniversaire : photo, vidéo & Vogue Booth",
    ogDescription:
      "Choisissez une animation photo ou vidéo adaptée à votre anniversaire et à vos invités.",
  },
};

export default function Anniversaires() {
  return <MarketingPage page={anniversairePage} />;
}
