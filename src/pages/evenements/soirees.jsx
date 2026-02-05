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

const objectifs = [
  {
    title: "Ambiance festive",
    description:
      "Créer un moment fort qui rythme la soirée et rassemble les invités.",
  },
  {
    title: "Contenu social",
    description:
      "Des photos et vidéos prêtes à être partagées immédiatement.",
  },
  {
    title: "Souvenirs premium",
    description:
      "Impressions instantanées et galerie privée pour revivre la soirée.",
  },
  {
    title: "Animation fluide",
    description:
      "Un animateur pour gérer le flux et maintenir l'énergie."
  },
];

const recommandations = [
  {
    title: "360 Booth",
    description:
      "Parfait pour les soirées club et les events à forte énergie.",
  },
  {
    title: "Vogue Booth",
    description:
      "Pour une ambiance glamour avec rendu magazine.",
  },
  {
    title: "Photobooth classique",
    description:
      "Indispensable pour des impressions illimitées et rapides.",
  },
];

const steps = [
  {
    title: "Brief ambiance",
    description:
      "Nous définissons le style de la soirée et les options de personnalisation.",
  },
  {
    title: "Préparation",
    description:
      "Création des templates et scénographie adaptés.",
  },
  {
    title: "Installation",
    description:
      "Montage et tests techniques avant l'ouverture de la soirée.",
  },
  {
    title: "Animation",
    description:
      "Gestion des invités et assistance pour un rendu fluide.",
  },
  {
    title: "Livraison",
    description:
      "Galerie privée et contenus HD livrés après l'événement.",
  },
];

const inspirations = [
  {
    title: "Soirée chic",
    description:
      "Décor élégant et photobooth miroir pour un rendu premium.",
  },
  {
    title: "Soirée club",
    description:
      "360 Booth et éclairages dynamiques pour un effet spectaculaire.",
  },
  {
    title: "Afterwork",
    description:
      "Photobooth classique avec impressions pour un souvenir convivial.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/360booth.webp", alt: "360 booth" },
  { src: "/images/voguebooth.webp", alt: "Vogue booth" },
  { src: "/images/photobooth.webp", alt: "Photobooth classique" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth premium" },
];

const videos = [
  {
    src: "/videos/compress-TOUR-EIFFEL-FINAL.mp4",
    type: "video/mp4",
    title: "Animation soirée",
    poster: "/images/360booth.webp",
  },
];

const faq = [
  {
    question: "Pouvez-vous intervenir en soirée tardive ?",
    answer:
      "Oui, nous proposons des horaires étendus pour couvrir l'intégralité de votre soirée.",
  },
  {
    question: "Combien d'invités peuvent participer ?",
    answer:
      "Le flux est illimité, notre animateur gère la rotation pour éviter les attentes.",
  },
  {
    question: "Peut-on ajouter des options décoratives ?",
    answer:
      "Oui, nous proposons des décors personnalisés et des accessoires premium.",
  },
];

const toc = [
  { id: "presentation", label: "Présentation" },
  { id: "objectifs", label: "Objectifs" },
  { id: "recommandations", label: "Recommandations" },
  { id: "processus", label: "Déroulé" },
  { id: "inspirations", label: "Inspirations" },
  { id: "galerie", label: "Galerie" },
  { id: "video", label: "Vidéo" },
  { id: "preuves", label: "Avis" },
  { id: "faq", label: "FAQ" },
];

export default function Soirees() {
  return (
    <Layout
      metaProps={{
        title: "Photobooth soirées à Paris | MySelfieBooth",
        description:
          "Animation photobooth pour soirées privées et afterworks : 360 booth, Vogue booth, impressions illimitées et personnalisation premium.",
        ogImage: "/images/360booth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/evenements/soirees",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Soirées"
          title="Une animation photobooth pour une soirée inoubliable"
          description="Créez un moment fort pendant votre soirée grâce à une animation photo ou vidéo premium, scénographiée et animée par notre équipe."
          bullets={[
            "Impressions illimitées",
            "Vidéo 360 disponible",
            "Animateur sur place",
          ]}
          primaryCta={{
            label: "Réserver pour ma soirée",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les prestations", href: "/prestations" }}
          image="/images/360booth.webp"
          imageAlt="Soirée photobooth"
        />

        <div className="content">
          <TableOfContents items={toc} />
          <div className="main">
            <Section
              id="presentation"
              eyebrow="Présentation"
              title="Présentation de l'événement"
              lead="Une animation photo et vidéo qui s'adapte au rythme de votre événement et à vos invités."
            >
              <SplitSection
                title="Présentation de l'événement"
                text="Une animation photo et vidéo qui s'adapte au rythme de votre événement et à vos invités."
                image="/placeholders/placeholder-event.jpg"
                imageAlt="Visuel de présentation"
              />
            </Section>

            <Section
              id="objectifs"
              eyebrow="Objectifs"
              title="Créer un moment fort"
              lead="Une animation photobooth qui capte l'énergie de la soirée."
            >
              <FeatureGrid items={objectifs} columns={2} />
            </Section>

            <Section
              id="recommandations"
              variant="alt"
              eyebrow="Recommandations"
              title="Machines recommandées"
              lead="Nos machines les plus adaptées pour des soirées réussies."
            >
              <FeatureGrid items={recommandations} columns={3} />
            </Section>

            <Section
              id="processus"
              eyebrow="Déroulé"
              title="Organisation fluide"
              lead="Nous gérons l'installation et l'animation pour un rendu optimal."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="inspirations"
              variant="alt"
              eyebrow="Inspirations"
              title="Styles de soirées"
              lead="Quelques scénarios populaires pour vos soirées."
            >
              <FeatureGrid items={inspirations} columns={3} />
            </Section>

            <Section
              id="galerie"
              eyebrow="Galerie"
              title="Nos soirées en images"
              lead="Des instants capturés lors de nos événements."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              variant="alt"
              eyebrow="Vidéo"
              title="Extrait d'une soirée"
              lead="Un aperçu de l'ambiance créée par nos animations."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              eyebrow="Avis"
              title="Des invités conquis"
              lead="Les soirées MySelfieBooth laissent un souvenir durable."
            >
              <ProofSection
                stats={[
                  { value: "100+", label: "soirées réalisées" },
                  { value: "4.8/5", label: "note moyenne" },
                  { value: "90%", label: "taux de participation" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Le 360 booth a mis une ambiance incroyable, tout le monde voulait sa vidéo.",
                    name: "Rania J.",
                    role: "Soirée privée",
                  },
                  {
                    quote:
                      "Photos magnifiques et équipe très pro, merci pour cette animation.",
                    name: "Antoine D.",
                    role: "Afterwork",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              variant="alt"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses pour préparer votre soirée."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à faire vibrer votre soirée ?"
        description="Contactez-nous pour une animation photobooth sur-mesure."
        primaryCta={{
          label: "Demander un devis",
          href: "https://reservation.myselfiebooth-paris.fr",
          external: true,
        }}
        secondaryCta={{ label: "Découvrir les options", href: "/options" }}
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
