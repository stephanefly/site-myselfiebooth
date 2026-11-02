import MarketingPage from "../../components/marketing/MarketingPage";
import { souvenirOptionPage } from "../../data/souvenirOptionPages";

const base = souvenirOptionPage("panneaux-xxl");
const page = {
  ...base,
  illustration: base.heroVisual,
  gallery: [
    { name: "panneauxXxlQuatre", title: "Votre histoire en quatre images", text: "Plusieurs poses pour composer votre décor d’accueil." },
    { name: "panneauxXxlVille", title: "Le chic en extérieur", text: "Des portraits en tenues de ville pour votre réception." },
  ],
  galleryTitle: "Deux autres idées pour votre réception",
  galleryEyebrow: "Inspirations",
  galleryNote: "Illustrations générées par IA. Fleurs, photophores et autres accessoires sont proposés selon le devis.",
  comparison: [{
    title: "Tarifs par lot de panneaux",
    rows: [["1 panneau", "150 €"], ["2 panneaux", "300 €"], ["3 panneaux", "350 €"], ["4 panneaux", "400 €"], ["5 panneaux", "450 €"], ["6 panneaux", "500 €"]],
  }],
};
export default function PanneauxXxl() {
  return <MarketingPage page={page} />;
}
