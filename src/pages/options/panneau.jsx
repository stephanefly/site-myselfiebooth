import Layout from "../../components/Layout";
import HeroSplit from "../../components/longform/HeroSplit";
import Section from "../../components/longform/Section";
import FeatureGrid from "../../components/longform/FeatureGrid";
import Steps from "../../components/longform/Steps";
import GalleryGrid from "../../components/longform/GalleryGrid";
import VideoGrid from "../../components/longform/VideoGrid";
import FAQAccordion from "../../components/longform/FAQAccordion";
import CTASection from "../../components/longform/CTASection";
import TableOfContents from "../../components/longform/TableOfContents";
import SplitSection from "../../components/longform/SplitSection";
import BackToTop from "../../components/longform/BackToTop";

const avantages = [
  {
    title: "Signalétique élégante",
    description:
      "Un panneau qui guide vos invités dès l'entrée et pose l'ambiance.",
  },
  {
    title: "Design sur-mesure",
    description:
      "Création graphique adaptée à votre thème ou à votre branding.",
  },
  {
    title: "Finition premium",
    description:
      "Impression haute qualité sur support rigide ou transparent.",
  },
  {
    title: "Installation facile",
    description:
      "Nous livrons le panneau prêt à poser avec son chevalet.",
  },
];

const usages = [
  {
    title: "Mariages",
    description:
      "Accueil chaleureux et cohérence avec la décoration de cérémonie.",
  },
  {
    title: "Soirées privées",
    description:
      "Personnalisation avec un message de bienvenue ou un hashtag.",
  },
  {
    title: "Corporate",
    description:
      "Affichage du logo et des informations clés pour vos invités.",
  },
];

const steps = [
  {
    title: "Brief graphique",
    description:
      "Nous recueillons vos inspirations et votre charte visuelle.",
  },
  {
    title: "Design",
    description:
      "Création du panneau avec validation avant impression.",
  },
  {
    title: "Production",
    description:
      "Impression premium et préparation du support.",
  },
  {
    title: "Livraison",
    description:
      "Livraison sur site ou remise en main propre.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/Welcomeboard.webp", alt: "Panneau de bienvenue" },
  { src: "/images/ALL-MURS.webp", alt: "Décor mural" },
  { src: "/images/Livre-d'or.webp", alt: "Livre d'or" },
  { src: "/images/photobooth.webp", alt: "Photobooth" },
];

const faq = [
  {
    question: "Quel format de panneau proposez-vous ?",
    answer:
      "Nous proposons plusieurs formats selon le lieu, avec un format standard 60x90 cm très demandé.",
  },
  {
    question: "Peut-on intégrer notre logo ?",
    answer:
      "Oui, nous intégrons votre logo, vos couleurs et votre typographie.",
  },
  {
    question: "Le panneau est-il livré avec un support ?",
    answer:
      "Oui, un chevalet ou un support adapté est fourni pour chaque panneau.",
  },
];

const toc = [
  { id: "presentation", label: "Présentation" },
  { id: "avantages", label: "Avantages" },
  { id: "usages", label: "Usages" },
  { id: "processus", label: "Déroulé" },
  { id: "galerie", label: "Galerie" },
  { id: "video", label: "Vidéo" },
  { id: "faq", label: "FAQ" },
];

export default function Panneau() {
  return (
    <Layout
      metaProps={{
        title: "Option panneau de bienvenue | MySelfieBooth Paris",
        description:
          "Créez un panneau de bienvenue personnalisé pour vos événements. Design sur-mesure, impression premium et livraison clé en main.",
        ogImage: "/images/Welcomeboard.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/options/panneau",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Option déco"
          title="Panneau de bienvenue : une entrée mémorable"
          description="Un panneau élégant et personnalisé qui accueille vos invités et renforce la scénographie de votre événement."
          bullets={[
            "Design sur-mesure",
            "Impression premium",
            "Livré prêt à poser",
          ]}
          primaryCta={{
            label: "Ajouter un panneau",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les prestations", href: "/prestations" }}
          image="/images/Welcomeboard.webp"
          imageAlt="Panneau de bienvenue MySelfieBooth"
        />

        <div className="content">
          <TableOfContents items={toc} />
          <div className="main">
            <Section
              id="presentation"
              eyebrow="Présentation"
              title="Présentation des options"
              lead="Des options premium pour renforcer l'expérience et créer un univers visuel cohérent."
            >
              <SplitSection
                title="Présentation des options"
                text="Des options premium pour renforcer l'expérience et créer un univers visuel cohérent."
                image="/placeholders/placeholder-option.jpg"
                imageAlt="Visuel de présentation"
              />
            </Section>

            <Section
              id="avantages"
              eyebrow="Avantages"
              title="Un accueil soigné"
              lead="Le panneau de bienvenue crée un premier impact fort pour vos invités."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="usages"
              variant="alt"
              eyebrow="Usages"
              title="Pour quels événements ?"
              lead="Le panneau s'adapte à tous les formats d'événements premium."
            >
              <FeatureGrid items={usages} columns={3} />
            </Section>

            <Section
              id="processus"
              eyebrow="Déroulé"
              title="De la création à la livraison"
              lead="Un process simple pour une signalétique personnalisée."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Inspirations"
              lead="Quelques exemples de panneaux installés."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Panneau en situation"
              lead="Un aperçu de l'effet d'accueil et de mise en scène."
            >
              <VideoGrid
                videos={[
                  {
                    src: "/videos/PUB_2024.mp4",
                    type: "video/mp4",
                    title: "Option panneau de bienvenue",
                    poster: "/placeholders/placeholder-video.jpg",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses avant de commander votre panneau."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Envie d'un accueil élégant ?"
        description="Ajoutez un panneau de bienvenue personnalisé à votre prestation."
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
