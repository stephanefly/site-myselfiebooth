import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const base = marketingPages.photobooth;
const page = {
  ...base,
  sections: [...base.sections, {
    anchor: "ile-de-france",
    eyebrow: "Votre lieu",
    title: "Paris, Melun et toute l’Île-de-France",
    text: "Nous préparons votre animation selon l’adresse, les horaires et les accès du lieu. À Paris, pensez au stationnement et au créneau de livraison ; en Seine-et-Marne et autour de Melun, indiquez les accès du domaine et la distance de portage. Hors Île-de-France, les projets sont étudiés au cas par cas.",
    cards: [
      { title: "Avant la réception", text: "Nous validons le cadre photo, le recul nécessaire et la prise électrique avec vous." },
      { title: "Pendant les 5 heures", text: "Vos invités utilisent la borne pour créer les photos et tirages prévus dans votre formule." },
      { title: "Après l’événement", text: "La galerie photo prolonge les souvenirs. Les modalités de remise sont précisées dans la proposition." },
    ],
  }],
};
export default function Photobooth() { return <MarketingPage page={page} />; }
