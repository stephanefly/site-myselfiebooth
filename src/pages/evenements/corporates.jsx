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

const corporateOffersSection = {
  anchor: "offres-corporate",
  eyebrow: "Offres Corporate",
  title: "Des offres pensées par objectif, pas seulement par machine",
  text:
    "Pour les entreprises et les agences, nous construisons la prestation autour du résultat attendu : engagement, contenu social, image premium ou activation de marque. Les tarifs sont ajustés au brief, au lieu, à la durée et au niveau de personnalisation.",
  cards: [
    {
      title: "Brand Experience — dès 900 € HT",
      text: "Photobooth ou Miroirbooth, personnalisation de marque, installation, accompagnement, galerie et bilan post-événement selon le dispositif.",
    },
    {
      title: "Social Content — dès 1 090 € HT",
      text: "360 Booth ou Vogue Booth, habillage personnalisé et contenus courts pensés pour être récupérés et réutilisés après l'événement.",
    },
    {
      title: "Vogue Portrait Studio — dès 900 € HT",
      text: "Mise en scène lumineuse, rendu éditorial, personnalisation et configuration adaptée aux galas, lancements et opérations image.",
    },
    {
      title: "Photobooth IA — projet pilote",
      text: "Transformation visuelle assistée par IA et univers de marque sur étude. Le dispositif, les rendus et les règles de transparence sont validés avant commercialisation.",
    },
  ],
};

const reliabilitySection = {
  anchor: "fiabilite",
  eyebrow: "Fiabilité & exploitation",
  title: "Une prestation préparée pour réduire les imprévus le jour J",
  text:
    "Sur un événement professionnel, la qualité du rendu ne suffit pas : la préparation, les accès, les tests, le flux invités et la remise des contenus doivent être cadrés avant l'ouverture.",
  cards: [
    {
      title: "Contrôles avant événement",
      text: "Machine, personnalisation, accès, horaires, alimentation et configuration sont vérifiés avant la prestation.",
    },
    {
      title: "Tests après installation",
      text: "La configuration est testée sur place avant l'ouverture de l'animation afin de limiter les incidents de dernière minute.",
    },
    {
      title: "Interlocuteur identifié",
      text: "Un référent est défini pour la prestation afin de simplifier les échanges entre votre équipe, le lieu et MySelfieBooth.",
    },
    {
      title: "Bilan post-événement",
      text: "Selon le dispositif, nous pouvons restituer les contenus produits et des indicateurs disponibles comme le nombre de sessions, photos ou vidéos.",
    },
  ],
};

const corporatePage = {
  ...basePage,
  title: "Photobooth entreprise & Brand Experience en Île-de-France",
  description:
    "Photobooth, 360 Booth et Vogue Portrait Studio pour entreprise, salon, séminaire et activation de marque, avec branding, logistique cadrée et reporting selon le dispositif.",
  highlights: ["Offres dès 900 € HT", "Branding", "Contenus & reporting"],
  sections: [
    searchIntentSection,
    corporateOffersSection,
    reliabilitySection,
    ...basePage.sections,
  ],
  relatedLinks: [
    { label: "Prix Photobooth en Île-de-France en 2026", href: "/prix-photobooth-ile-de-france-2026/" },
    { label: "Guide photobooth entreprise", href: "/blog/animation-photobooth-entreprise/" },
    { label: "Quel photobooth pour un salon ou séminaire ?", href: "/blog/photobooth-salon-seminaire/" },
    { label: "Comparer les animations", href: "/prestations/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Photobooth Entreprise & Brand Experience | MySelfieBooth",
    description:
      "Animations photo et vidéo pour entreprise en Île-de-France dès 900 € HT : branding, Photobooth, 360 Booth, Vogue Portrait Studio et reporting selon dispositif.",
    ogTitle: "Photobooth entreprise & Brand Experience",
    ogDescription:
      "Des animations photo et vidéo pensées pour l'engagement, le contenu de marque et une exploitation fiable le jour J.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Photobooth et Brand Experience pour entreprise",
        description:
          "Animations photo et vidéo pour entreprise, salon, séminaire et activation de marque avec branding, contenus et reporting selon le dispositif.",
        offers: {
          "@type": "Offer",
          price: "900",
          priceCurrency: "EUR",
          description: "Offres corporate à partir de 900 euros HT, ajustées selon le brief, le lieu, la durée et la personnalisation.",
        },
      };
    }),
  },
};

export default function Corporates() {
  return <MarketingPage page={corporatePage} />;
}
