import LegalPage from "../components/legal/LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Mentions légales"
      path="/terms/"
      intro="Informations générales sur l'éditeur du site MySelfieBooth et l'utilisation de ses contenus."
      sections={[
        {
          title: "Éditeur et contact",
          text: "Le site MySelfieBooth est édité sous la responsabilité de Stéphane Faure. Contact : contact@myselfiebooth-paris.fr ou 06 99 73 39 98.",
        },
        {
          title: "Informations commerciales",
          text: "Les coordonnées administratives complètes de l'entreprise figurent sur les devis et documents contractuels remis avant la réservation.",
        },
        {
          title: "Propriété intellectuelle",
          text: "Les textes, photographies, vidéos, logos et éléments graphiques du site sont protégés. Toute reproduction ou réutilisation nécessite une autorisation écrite.",
        },
      ]}
    />
  );
}
