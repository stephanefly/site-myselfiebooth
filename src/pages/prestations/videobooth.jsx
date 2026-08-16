import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.videobooth;

const videoPage = {
  ...basePage,
  title: "Location 360 Booth vidéo 4K dès 500 €",
  description:
    "Louez un 360 Booth dès 500 € pour mariage, anniversaire et entreprise : vidéos 4K, personnalisation, installation et animateur selon la formule.",
  highlights: ["À partir de 500 €", "Vidéo 4K", "Mariage & entreprise"],
  sections: [
    {
      anchor: "spinner-360",
      eyebrow: "360 Booth & Spinner 360",
      title: "Une plateforme vidéo 360 pour créer des clips dynamiques",
      text:
        "Le 360 Booth, parfois recherché comme Spinner 360, filme les invités autour de la plateforme pour produire des vidéos courtes et personnalisées. Il convient aux mariages, anniversaires, soirées d'entreprise et activations de marque.",
      cards: [
        {
          title: "Vidéo 4K",
          text: "Des séquences dynamiques pensées pour être regardées et partagées après l'événement.",
        },
        {
          title: "Personnalisation",
          text: "Habillage vidéo adapté au thème de l'événement ou à l'identité de la marque.",
        },
        {
          title: "Installation",
          text: "Une zone dégagée et sécurisée est préparée selon le lieu et le flux d'invités.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location 360 Booth dès 500 € | Vidéo 4K",
    description:
      "Location 360 Booth dès 500 € : vidéos 4K personnalisées pour mariage, anniversaire et entreprise, avec installation et animateur selon formule.",
    ogTitle: "Location 360 Booth vidéo 4K | MySelfieBooth",
    ogDescription:
      "Une animation vidéo 360 personnalisable pour mariage, soirée et événement d'entreprise.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Location 360 Booth vidéo 4K",
        offers: {
          ...(entry.offers || {}),
          price: "500",
          priceCurrency: "EUR",
          description: "Tarif à partir de 500 euros selon la date, le lieu et la formule.",
        },
      };
    }),
  },
};

export default function Videobooth() {
  return <MarketingPage page={videoPage} />;
}
