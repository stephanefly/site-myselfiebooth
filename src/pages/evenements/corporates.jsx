import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.corporates;

const searchIntentSection = {
  anchor: "photobooth-entreprise",
  eyebrow: "Entreprise, salon & séminaire",
  title: "Animation photobooth pour entreprise, salon professionnel et séminaire",
  text:
    "Pour une soirée d'entreprise, un séminaire, un salon ou un lancement de produit, le Photobooth doit être rapide à comprendre, visible et cohérent avec votre marque. Nous adaptons la machine, la personnalisation, le flux invités et la logistique au format de votre événement.",
  cards: [
    {
      title: "Photobooth entreprise",
      text: "Photos personnalisées, souvenirs et galerie pour collaborateurs, clients ou partenaires.",
    },
    {
      title: "Salon professionnel",
      text: "Animation pensée pour attirer sur le stand sans créer une file d'attente trop longue.",
    },
    {
      title: "Séminaire",
      text: "Un moment collectif facile à intégrer à une pause, un cocktail ou une soirée interne.",
    },
    {
      title: "Lancement de produit",
      text: "Habillage visuel, logo et contenus adaptés à l'univers de la marque et de l'opération.",
    },
  ],
};

const corporatePage = {
  ...basePage,
  title: "Photobooth entreprise, salon & séminaire en Île-de-France",
  description:
    "Photobooth, 360 Booth et Vogue Booth pour entreprise, salon professionnel, séminaire, soirée corporate et lancement de produit en Île-de-France.",
  sections: [searchIntentSection, ...basePage.sections],
  relatedLinks: [
    { label: "Guide photobooth entreprise", href: "/blog/animation-photobooth-entreprise/" },
    { label: "Quel photobooth pour un salon ou séminaire ?", href: "/blog/photobooth-salon-seminaire/" },
    { label: "Comparer les animations", href: "/prestations/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Photobooth Entreprise | Salon, Séminaire & Corporate",
    description:
      "Location de Photobooth pour entreprise en Île-de-France : salon professionnel, séminaire, soirée corporate et lancement produit avec personnalisation.",
    ogTitle: "Photobooth entreprise, salon & séminaire",
    ogDescription:
      "Animations photo et vidéo personnalisées pour salons, séminaires, soirées d'entreprise et activations de marque.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Photobooth et animations pour entreprise",
        description:
          "Location de Photobooth et animations photo-vidéo pour salons, séminaires, soirées d'entreprise et lancements de produit.",
      };
    }),
  },
};

export default function Corporates() {
  return <MarketingPage page={corporatePage} />;
}
