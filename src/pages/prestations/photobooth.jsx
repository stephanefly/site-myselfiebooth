import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.photobooth;

const locationSection = {
  anchor: "ile-de-france",
  eyebrow: "Île-de-France & Seine-et-Marne",
  title: "Location de photobooth à Melun, en Seine-et-Marne (77) et en Île-de-France",
  text:
    "Nous intervenons pour les mariages, anniversaires et événements professionnels à Paris et en Île-de-France, notamment autour de Melun et en Seine-et-Marne. La disponibilité et les conditions de déplacement sont confirmées selon la date, l'adresse, les horaires et les accès du lieu.",
  cards: [
    {
      title: "Seine-et-Marne (77)",
      text: "Demandes étudiées à Melun et dans les communes de Seine-et-Marne selon la date et la logistique.",
    },
    {
      title: "Paris & petite couronne",
      text: "Installation adaptée aux contraintes d'accès, de stationnement et aux horaires des lieux événementiels.",
    },
    {
      title: "Toute l'Île-de-France",
      text: "Le devis confirme le déplacement, la durée, la formule et les options adaptées à votre événement.",
    },
  ],
};

const sections = basePage.sections.flatMap((section) => {
  const updatedSection = section.anchor === "tarif"
    ? {
        ...section,
        eyebrow: "Tarif à partir de 450 €",
        title: "Location Photobooth dès 450 € : une formule claire et personnalisable",
        text:
          "Le tarif de départ du Photobooth est de 450 €. Le devis précise la durée, les impressions prévues, la livraison, l'installation, la personnalisation et les options retenues pour votre événement.",
      }
    : section;

  return section.anchor === "evenements"
    ? [updatedSection, locationSection]
    : [updatedSection];
});

const faq = [
  ...basePage.faq.map((item) => {
    if (item.question === "Quel est le prix d'une location de photobooth ?") {
      return {
        ...item,
        answer:
          "La location du Photobooth démarre à 450 €. Le devis confirme la durée, la zone d'intervention, les impressions et les éventuelles options selon votre événement.",
      };
    }

    if (item.question === "Intervenez-vous à Paris et dans toute l'Île-de-France ?") {
      return {
        ...item,
        answer:
          "Oui. Nous étudions les demandes à Paris, en Seine-et-Marne autour de Melun et dans toute l'Île-de-France. Les conditions de déplacement sont confirmées selon la commune, la date, les horaires et les accès du lieu.",
      };
    }

    return item;
  }),
  {
    question: "Peut-on louer un photobooth en Seine-et-Marne (77) ?",
    answer:
      "Oui. Les demandes en Seine-et-Marne, notamment autour de Melun, sont étudiées selon la date, le lieu, les horaires et les contraintes d'accès.",
  },
];

const photoboothPage = {
  ...basePage,
  title: "Location Photobooth en Île-de-France dès 450 €",
  description:
    "Louez un Photobooth pour mariage, anniversaire ou entreprise en Île-de-France, avec tirages personnalisés selon la formule, installation et galerie photo après l'événement.",
  highlights: ["À partir de 450 €", "Tirages selon formule", "Installation & personnalisation"],
  sections,
  faq,
  meta: {
    ...basePage.meta,
    title: "Location Photobooth Île-de-France dès 450 € | MySelfieBooth",
    description:
      "Location Photobooth dès 450 € en Île-de-France : mariage, entreprise, Melun et Seine-et-Marne, avec installation, personnalisation et galerie photo.",
    ogTitle: "Location Photobooth en Île-de-France dès 450 €",
    ogDescription:
      "Photobooth pour mariage et entreprise, avec installation, personnalisation, tirages selon formule et galerie photo.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] === "Service") {
        return {
          ...entry,
          name: "Location Photobooth en Île-de-France",
          description:
            "Location de Photobooth pour mariage, anniversaire et entreprise en Île-de-France, avec installation et personnalisation.",
          offers: {
            ...(entry.offers || {}),
            price: "450",
            priceCurrency: "EUR",
            description: "Tarif à partir de 450 euros, ajusté selon la date, le lieu et la formule.",
          },
        };
      }

      if (entry["@type"] === "FAQPage") {
        return {
          ...entry,
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        };
      }

      return entry;
    }),
  },
};

export default function Photobooth() {
  return <MarketingPage page={photoboothPage} />;
}
