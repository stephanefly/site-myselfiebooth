import LegalPage from "../components/legal/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Politique de confidentialite"
      intro="MySelfieBooth respecte vos donnees personnelles et les utilise uniquement pour traiter vos demandes et reservations."
      sections={[
        {
          title: "Donnees collectees",
          text: "Nous collectons les informations necessaires au traitement d'une demande: coordonnees, date, lieu, type d'evenement et preferences de prestation.",
        },
        {
          title: "Utilisation",
          text: "Ces informations servent a repondre a vos demandes, preparer la prestation et ameliorer notre qualite de service.",
        },
        {
          title: "Vos droits",
          text: "Vous pouvez demander l'acces, la correction ou la suppression de vos donnees en ecrivant a contact@myselfiebooth-paris.fr.",
        },
      ]}
    />
  );
}
