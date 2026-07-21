import LegalPage from "../components/legal/LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Informations generales sur l'editeur du site MySelfieBooth et l'utilisation des contenus."
      sections={[
        {
          title: "Editeur",
          text: "Ce site est edite par MySelfieBooth. Pour toute question, vous pouvez nous contacter a contact@myselfiebooth-paris.fr.",
        },
        {
          title: "Hebergement",
          text: "Le site est heberge par un prestataire professionnel assurant la disponibilite et la securite technique.",
        },
        {
          title: "Propriete intellectuelle",
          text: "Les textes, images, logos et elements graphiques du site sont proteges. Toute reproduction necessite une autorisation ecrite.",
        },
      ]}
    />
  );
}
