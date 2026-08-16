import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages["options-index"];

const optionsPage = {
  ...basePage,
  title: "Options Photobooth : personnalisation, décors & souvenirs",
  description:
    "Personnalisez votre Photobooth avec mur floral, livre d'or audio ou vidéo, porte-clés, magnets, panneau, fond LED et autres options événementielles.",
  sections: [
    {
      anchor: "personnalisation-photobooth",
      eyebrow: "Personnalisation Photobooth",
      title: "Décor, tirages et souvenirs : personnalisez votre animation",
      text:
        "La personnalisation ne se limite pas au cadre photo. Vous pouvez adapter le décor, les souvenirs, l'accueil et les contenus selon le thème du mariage ou l'identité de votre entreprise.",
      cards: [
        {
          title: "Décor",
          text: "Mur floral, fond LED ou panneau pour structurer l'espace photo et améliorer le rendu.",
        },
        {
          title: "Souvenirs",
          text: "Porte-clés, magnets et livre d'or pour prolonger l'expérience après l'événement.",
        },
        {
          title: "Audio & vidéo",
          text: "Phonebooth et livre d'or vidéo pour conserver les messages des invités en plus des photos.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Guide : personnaliser un photobooth", href: "/blog/personnaliser-photobooth/" },
    { label: "Livre d'or audio Phonebooth", href: "/options/phonebooth/" },
    { label: "Comparer les animations", href: "/prestations/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Options & Personnalisation Photobooth | MySelfieBooth",
    description:
      "Options Photobooth : personnalisation, mur floral, livre d'or audio/vidéo, porte-clés, magnets, panneau et fond LED pour votre événement.",
    ogTitle: "Options et personnalisation Photobooth",
    ogDescription:
      "Décors, souvenirs, livre d'or et accessoires pour personnaliser votre animation MySelfieBooth.",
  },
};

export default function Options() {
  return <MarketingPage page={optionsPage} />;
}
