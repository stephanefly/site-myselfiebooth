import Meta from "../components/Meta"; // Composant pour le SEO
import Navbar from "../components/Navbar"; // Barre de navigation
import Footer from "../components/Footer"; // Footer
import SocialMedia from "../components/SocialMedia"; // Section réseaux sociaux
import PreFooter from "../components/PreFooter"; // Pré-footer

export default function Photobooth() {
  console.log("Photobooth page is rendered"); // Pour vérifier que la page se charge correctement

  return (
    <>
      {/* Meta pour le SEO */}
      <Meta
        title="Photobooth Classique à Paris - MySelfieBooth"
        description="Découvrez nos photobooths classiques pour vos événements à Paris. Parfait pour mariages, anniversaires et soirées d'entreprise."
        keywords="photobooth classique, location photobooth paris, photobooth mariage"
        ogTitle="Photobooth Classique - MySelfieBooth"
        ogDescription="Louez un photobooth classique avec impressions illimitées et personnalisation pour vos mariages ou événements à Paris."
        ogImage="https://myselfiebooth-paris.fr/images/photobooth.jpg"
        ogUrl="https://myselfiebooth-paris.fr/photobooth"
      />

      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Photobooth Classique
        </h1>
        <div className="text-center">
          <img
            src="/images/photobooth.jpg"
            alt="Photobooth Classique"
            className="mx-auto mb-6 rounded-lg shadow-lg max-w-md"
          />
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Le Photobooth Classique est une solution idéale pour capturer les moments
          précieux de vos événements. Grâce à ses impressions illimitées, ses
          animations en direct et sa personnalisation complète, il convient à tous
          types d'occasions, qu'il s'agisse de mariages, d'anniversaires ou de soirées
          professionnelles.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Impressions illimitées</li>
          <li>Animateur sur place</li>
          <li>Galerie Web pour partager vos souvenirs</li>
          <li>Livraison et installation incluses</li>
        </ul>
      </main>

      {/* Section réseaux sociaux */}
      <SocialMedia />

      {/* Pré-footer */}
      <PreFooter />

      {/* Footer */}
      <Footer />
    </>
  );
}
