import LegalPage from "../components/legal/LegalPage";

export default function Conditions() {
  return (
    <LegalPage
      title="Conditions generales de location"
      path="/conditions/"
      intro="Les conditions principales de reservation, livraison et annulation sont resumees ici pour clarifier le deroule."
      sections={[
        {
          title: "Reservation",
          text: "La reservation est confirmee apres validation du devis et versement de l'acompte prevu. La date est bloquee apres confirmation.",
        },
        {
          title: "Livraison et installation",
          text: "MySelfieBooth assure la livraison, l'installation, les tests et la reprise du materiel selon les horaires convenus.",
        },
        {
          title: "Annulation",
          text: "Toute annulation doit etre notifiee par ecrit. Des frais peuvent s'appliquer selon le delai et les conditions du devis signe.",
        },
      ]}
    />
  );
}
