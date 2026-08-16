import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.phonebooth;

const phoneboothPage = {
  ...basePage,
  title: "Location livre d'or audio mariage : Phonebooth",
  description:
    "Louez un livre d'or audio Phonebooth pour mariage et événement : un téléphone rétro qui enregistre les messages vocaux de vos invités.",
  sections: [
    {
      anchor: "livre-or-audio-mariage",
      eyebrow: "Livre d'or audio",
      title: "Un téléphone livre d'or pour enregistrer la voix de vos invités",
      text:
        "Le Phonebooth remplace ou complète le livre d'or classique : les invités décrochent le téléphone et enregistrent un message vocal. Le format fonctionne particulièrement bien pour les mariages, anniversaires et événements où vous souhaitez conserver des souvenirs plus personnels.",
      cards: [
        {
          title: "Mariage",
          text: "Les proches laissent un message vocal pendant le cocktail ou la soirée.",
        },
        {
          title: "Souvenir audio",
          text: "Les enregistrements permettent de réécouter les voix et messages après l'événement.",
        },
        {
          title: "Avec un Photobooth",
          text: "Le Phonebooth complète les photos imprimées avec un souvenir sonore différent.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  relatedLinks: [
    { label: "Voir les options Photobooth", href: "/options/" },
    { label: "Photobooth pour mariage", href: "/evenements/mariages/" },
    { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Livre d'Or Audio Mariage | Phonebooth",
    description:
      "Location livre d'or audio pour mariage : le Phonebooth enregistre les messages vocaux de vos invités dans un téléphone rétro simple à utiliser.",
    ogTitle: "Phonebooth : livre d'or audio pour mariage",
    ogDescription:
      "Conservez les messages vocaux de vos invités avec un téléphone livre d'or rétro.",
  },
};

export default function Phonebooth() {
  return <MarketingPage page={phoneboothPage} />;
}
