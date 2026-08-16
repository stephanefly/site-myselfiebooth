import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.voguebooth;

const voguePage = {
  ...basePage,
  title: "Vogue Booth : photocall effet magazine personnalisable",
  description:
    "Location de Vogue Booth pour créer un photocall lumineux effet magazine, personnalisable pour mariage, gala, soirée VIP ou événement de marque.",
  sections: [
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
  meta: {
    ...basePage.meta,
    title: "Vogue Booth & Photocall Vogue | Effet Magazine",
    description:
      "Location Vogue Booth : photocall lumineux effet magazine personnalisable pour mariage, gala, soirée VIP et événement de marque.",
    ogTitle: "Vogue Booth : photocall effet magazine",
    ogDescription:
      "Un décor lumineux personnalisable inspiré des couvertures de magazine pour mariage, gala et événement premium.",
  },
};

export default function Voguebooth() {
  return <MarketingPage page={voguePage} />;
}
