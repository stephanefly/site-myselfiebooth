import Layout from "../../components/Layout";
import HeroSplit from "../../components/longform/HeroSplit";
import Section from "../../components/longform/Section";
import FeatureGrid from "../../components/longform/FeatureGrid";
import Steps from "../../components/longform/Steps";
import GalleryGrid from "../../components/longform/GalleryGrid";
import VideoGrid from "../../components/longform/VideoGrid";
import ProofSection from "../../components/longform/ProofSection";
import FAQAccordion from "../../components/longform/FAQAccordion";
import CTASection from "../../components/longform/CTASection";
import TableOfContents from "../../components/longform/TableOfContents";
import SplitSection from "../../components/longform/SplitSection";
import BackToTop from "../../components/longform/BackToTop";

const avantages = [
  {
    title: "Effet magazine",
    description:
      "Un rendu éditorial inspiré des couvertures Vogue avec un éclairage maîtrisé.",
  },
  {
    title: "Scénographie premium",
    description:
      "Décor élégant, tapis et lumières pour une vraie expérience tapis rouge.",
  },
  {
    title: "Direction artistique",
    description:
      "Un animateur guide les poses pour un rendu glamour et naturel.",
  },
  {
    title: "Formats multi-supports",
    description:
      "Photos imprimées, digitales et prêtes pour les réseaux sociaux.",
  },
];

const formules = [
  {
    title: "Formule tapis rouge",
    description: "Idéale pour soirées VIP et brand events.",
    list: ["Scénographie incluse", "Photos HD", "Impressions premium"],
  },
  {
    title: "Formule éditoriale",
    description: "Une expérience complète avec direction artistique.",
    list: ["Animateur styliste", "Décor personnalisé", "Livraison express"],
  },
];

const inclusions = [
  {
    title: "Inclus",
    list: [
      "Éclairage studio",
      "Backdrop premium",
      "Impressions illimitées",
      "Galerie privée",
    ],
  },
  {
    title: "Options",
    list: [
      "Tapis rouge",
      "Logo lumineux",
      "Make-up corner",
      "Vidéos backstage",
    ],
  },
  {
    title: "Livraison",
    list: ["Exports HD", "Sélection best-of", "Partage instantané"],
  },
];

const steps = [
  {
    title: "Brief artistique",
    description:
      "Nous définissons la direction artistique, les couleurs et le décor.",
  },
  {
    title: "Pré-production",
    description:
      "Création des supports graphiques et validation du décor.",
  },
  {
    title: "Installation",
    description:
      "Montage du décor, réglage lumière et tests photo.",
  },
  {
    title: "Animation",
    description:
      "Direction artistique des poses pour un rendu magazine.",
  },
  {
    title: "Livraison",
    description:
      "Livraison rapide des photos HD et des impressions.",
  },
];

const requirements = [
  {
    title: "Espace requis",
    description: "4 à 5 m2 pour le décor et le flux invité.",
  },
  {
    title: "Alimentation",
    description: "Deux prises 220V pour l'éclairage studio.",
  },
  {
    title: "Temps d'installation",
    description: "60 à 90 minutes selon la scénographie.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/voguebooth.webp", alt: "Vogue booth" },
  { src: "/images/decoration-voguebooth.webp", alt: "Décor Vogue booth" },
  { src: "/images/photobooth.webp", alt: "Photos premium" },
  { src: "/images/miroirbooth.webp", alt: "Expérience premium" },
];

const videos = [
  {
    src: "/videos/compress-voguebooth.mp4",
    type: "video/mp4",
    title: "Vogue booth en action",
    poster: "/images/decoration-voguebooth.webp",
  },
];

const faq = [
  {
    question: "Le Vogue booth est-il adapté aux marques ?",
    answer:
      "Oui, il est parfait pour les activations premium et les événements VIP avec branding.",
  },
  {
    question: "Peut-on personnaliser le décor ?",
    answer:
      "Nous proposons des décors sur-mesure selon votre thème et votre charte graphique.",
  },
  {
    question: "Quelle est la différence avec un photobooth classique ?",
    answer:
      "Le Vogue booth propose une mise en scène éditoriale avec un éclairage studio et un accompagnement artistique.",
  },
];

const toc = [
  { id: "presentation", label: "Présentation" },
  { id: "avantages", label: "Avantages" },
  { id: "formules", label: "Formules" },
  { id: "inclusions", label: "Inclus" },
  { id: "processus", label: "Déroulé" },
  { id: "exigences", label: "Exigences" },
  { id: "galerie", label: "Galerie" },
  { id: "video", label: "Vidéo" },
  { id: "preuves", label: "Avis" },
  { id: "faq", label: "FAQ" },
];

export default function Voguebooth() {
  return (
    <Layout
      metaProps={{
        title: "Location Vogue Booth à Paris | MySelfieBooth",
        description:
          "Vogue Booth : une animation photo magazine avec décor premium, éclairage studio et impressions élégantes pour vos événements VIP.",
        ogImage: "/images/voguebooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/voguebooth",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Glamour"
          title="Vogue Booth : une expérience éditoriale"
          description="Inspiré des tapis rouges, le Vogue Booth transforme vos invités en stars de magazine avec une scénographie premium et un rendu studio."
          bullets={[
            "Décor et éclairage studio",
            "Direction artistique sur place",
            "Photos HD prêtes à partager",
          ]}
          primaryCta={{
            label: "Réserver le Vogue Booth",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/voguebooth.webp"
          imageAlt="Vogue Booth MySelfieBooth"
        />

        <div className="content">
          <TableOfContents items={toc} />
          <div className="main">
            <Section
              id="presentation"
              eyebrow="Présentation"
              title="Présentation de la prestation"
              lead="Une mise en scène premium pensée pour valoriser votre événement et offrir des souvenirs mémorables."
            >
              <SplitSection
                title="Présentation de la prestation"
                text="Une mise en scène premium pensée pour valoriser votre événement et offrir des souvenirs mémorables."
                image="/placeholders/placeholder-section.jpg"
                imageAlt="Visuel de présentation"
              />
            </Section>

            <Section
              id="avantages"
              eyebrow="Avantages"
              title="Une animation glamour et élégante"
              lead="Le Vogue Booth offre un rendu éditorial unique pour vos invités."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des packs sur-mesure"
              lead="Choisissez le niveau de scénographie et de direction artistique."
            >
              <FeatureGrid items={formules} columns={2} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Service complet"
              lead="Nous gérons la scénographie, l'animation et la livraison."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Notre processus"
              lead="Un accompagnement artistique pour un résultat haut de gamme."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences techniques"
              title="Pré-requis"
              lead="Les éléments nécessaires pour installer le Vogue Booth."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Exemples de rendus"
              lead="Un aperçu de nos shootings Vogue Booth."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Vogue Booth en action"
              lead="Une séquence pour visualiser l'expérience."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Ils ont choisi le Vogue Booth"
              lead="Des retours enthousiastes sur l'effet premium obtenu."
            >
              <ProofSection
                stats={[
                  { value: "70+", label: "événements Vogue" },
                  { value: "4.9/5", label: "note moyenne" },
                  { value: "100%", label: "effet wow" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Les photos étaient dignes d'un shooting pro, un vrai moment glamour.",
                    name: "Isabelle F.",
                    role: "Soirée VIP",
                  },
                  {
                    quote:
                      "Notre marque a gagné en visibilité grâce aux visuels produits.",
                    name: "Adrien V.",
                    role: "Brand manager",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Tout savoir avant de réserver."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt pour un rendu magazine ?"
        description="Contactez-nous pour une scénographie Vogue Booth sur-mesure."
        primaryCta={{
          label: "Demander un devis",
          href: "https://reservation.myselfiebooth-paris.fr",
          external: true,
        }}
        secondaryCta={{ label: "Découvrir les événements", href: "/evenements" }}
      />
      <BackToTop />

      <style jsx>{`
        .page {
          background: #fff;
        }
        .content {
          display: grid;
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 40px;
        }
        .main {
          min-width: 0;
        }
        @media (min-width: 1024px) {
          .content {
            grid-template-columns: minmax(0, 1fr) minmax(0, 860px) minmax(0, 1fr);
            align-items: start;
          }
          .content :global(.toc) {
            grid-column: 1;
            justify-self: end;
          }
          .content .main {
            grid-column: 2;
          }
        }
      `}</style>
    </Layout>
  );
}
