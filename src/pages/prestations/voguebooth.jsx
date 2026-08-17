import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.voguebooth;

const voguePage = {
  ...basePage,
  title: "Vogue Booth & Portrait Studio : effet magazine personnalisable",
  description:
    "Location de Vogue Booth dès 500 € pour créer un Portrait Studio lumineux effet magazine, personnalisable pour mariage, gala, soirée VIP ou événement de marque.",
  highlights: ["À partir de 500 €", "Portrait Studio", "Mariage & entreprise"],
  sections: [
    {
      anchor: "portrait-studio",
      eyebrow: "Vogue Portrait Studio",
      title: "Un mini studio photo événementiel au rendu éditorial",
      text:
        "Le Vogue Booth ne se limite pas à un décor lumineux : il peut être pensé comme un Portrait Studio avec une mise en scène propre, une lumière maîtrisée et un rendu plus éditorial pour vos invités ou votre marque.",
      cards: [
        {
          title: "Lumière & rendu",
          text: "Un espace lumineux conçu pour obtenir des portraits nets, lisibles et cohérents avec une ambiance premium.",
        },
        {
          title: "Direction des invités",
          text: "Selon la formule, l'accompagnement aide les invités à se placer et à obtenir un portrait plus travaillé qu'une simple photo souvenir.",
        },
        {
          title: "Version corporate",
          text: "Pour les entreprises, le Portrait Studio peut intégrer branding, visuels de campagne et configuration sur mesure à partir de 900 € HT.",
        },
      ],
    },
    {
      anchor: "photocall-vogue",
      eyebrow: "Photocall Vogue",
      title: "Un magazine photo booth conçu comme un véritable décor événementiel",
      text:
        "Le Vogue Booth transforme l'espace en photocall lumineux avec une mise en scène inspirée des couvertures de magazine. Le visuel, les textes et le décor peuvent être adaptés au thème de votre mariage, gala ou événement de marque.",
      cards: [
        {
          title: "Effet magazine",
          text: "Une scène lumineuse immédiatement identifiable pour créer des portraits au rendu éditorial.",
        },
        {
          title: "Personnalisation",
          text: "Noms, date, couleurs et éléments graphiques sont adaptés au projet selon la formule choisie.",
        },
        {
          title: "Mariage & entreprise",
          text: "Le format convient aux mariages premium, galas, lancements, soirées VIP et activations de marque.",
        },
      ],
    },
    ...basePage.sections,
  ],
  relatedLinks: [
    { label: "Voir les offres entreprise", href: "/evenements/corporates/" },
    { label: "Comparer les animations", href: "/prestations/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Vogue Booth & Portrait Studio | Effet Magazine",
    description:
      "Location Vogue Booth dès 500 € : Portrait Studio lumineux effet magazine pour mariage, gala et événement de marque. Version corporate dès 900 € HT.",
    ogTitle: "Vogue Booth & Portrait Studio | MySelfieBooth",
    ogDescription:
      "Un décor lumineux personnalisable pensé comme un mini studio photo pour mariage, gala et événement premium.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Vogue Booth et Portrait Studio",
        description:
          "Location de Vogue Booth et Portrait Studio lumineux effet magazine pour mariage, gala et événement de marque.",
        offers: {
          ...(entry.offers || {}),
          price: "500",
          priceCurrency: "EUR",
          description: "Tarif particulier à partir de 500 euros selon la date, le lieu et la formule.",
        },
      };
    }),
  },
};

export default function Voguebooth() {
  return <MarketingPage page={voguePage} />;
}
