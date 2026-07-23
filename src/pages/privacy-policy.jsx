import LegalPage from "../components/legal/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      path="/privacy-policy/"
      intro="MySelfieBooth utilise vos données pour répondre à vos demandes, préparer les prestations et, avec votre accord, mesurer l'audience du site."
      sections={[
        {
          title: "Données collectées",
          text: "Lors d'une demande, nous collectons les informations nécessaires à la réponse : nom, coordonnées, date, lieu, type d'événement et prestations envisagées.",
        },
        {
          title: "Utilisation",
          text: "Ces informations servent à répondre à votre demande, établir une proposition, préparer la prestation et assurer le suivi de la relation commerciale.",
        },
        {
          title: "Mesure d'audience et cookies",
          text: "Google Analytics n'est chargé qu'après votre accord dans le bandeau de consentement. Vous pouvez refuser sans perdre l'accès au site et modifier votre choix depuis le lien Gérer les cookies en bas de page.",
        },
        {
          title: "Durée et destinataires",
          text: "Les données sont accessibles uniquement aux personnes qui traitent la demande et sont conservées pendant la durée nécessaire au suivi commercial et aux obligations applicables.",
        },
        {
          title: "Vos droits",
          text: "Vous pouvez demander l'accès, la rectification, l'effacement ou la limitation de vos données en écrivant à contact@myselfiebooth-paris.fr.",
        },
      ]}
    />
  );
}
