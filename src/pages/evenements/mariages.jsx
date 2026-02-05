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
    title: "Animation élégante",
    description:
      "Une expérience photo chic qui s'intègre à votre décoration.",
  },
  {
    title: "Souvenirs personnalisés",
    description:
      "Cadres photo avec vos prénoms, date et thème du mariage.",
  },
  {
    title: "Partage instantané",
    description:
      "Les invités repartent avec leurs impressions et accèdent à la galerie privée.",
  },
  {
    title: "Fluidité le jour J",
    description:
      "Nous gérons l'installation et l'animation pour zéro stress.",
  },
];

const recommandations = [
  {
    title: "Photobooth classique",
    description:
      "Le choix sûr pour des impressions illimitées et des souvenirs tangibles.",
  },
  {
    title: "Miroirbooth",
    description:
      "Parfait pour les mariages élégants et les lieux prestigieux.",
  },
  {
    title: "Phonebooth",
    description:
      "Ajoutez des messages audio émotionnels en complément des photos.",
  },
];

const steps = [
  {
    title: "Brief créatif",
    description:
      "Nous échangeons sur votre thème, les couleurs et le planning.",
  },
  {
    title: "Design personnalisé",
    description:
      "Création des cadres photo et du message d'accueil.",
  },
  {
    title: "Installation",
    description:
      "Montage complet avant l'arrivée des invités.",
  },
  {
    title: "Animation",
    description:
      "Un animateur accompagne vos invités pendant la soirée.",
  },
  {
    title: "Livraison",
    description:
      "Galerie privée et fichiers HD livrés rapidement.",
  },
];

const inspirations = [
  {
    title: "Vintage chic",
    description:
      "Cadres dorés, typographie calligraphiée et lumière chaude.",
  },
  {
    title: "Moderne minimal",
    description:
      "Design épuré, couleurs neutres et accessoires raffinés.",
  },
  {
    title: "Garden party",
    description:
      "Mur floral, accessoires naturels et ambiance lumineuse.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/mariages/mariage1.JPG", alt: "Photobooth mariage" },
  { src: "/images/mariages/mariage2.JPG", alt: "Animation mariage" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth mariage" },
  { src: "/images/photobooth.webp", alt: "Photobooth classique" },
];

const videos = [
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "Animation mariage",
    poster: "/images/mariages/mariage1.JPG",
  },
];

const faq = [
  {
    question: "Quand réserver pour un mariage ?",
    answer:
      "Idéalement 4 à 6 mois à l'avance pour garantir la disponibilité sur les dates de haute saison.",
  },
  {
    question: "Peut-on personnaliser les cadres ?",
    answer:
      "Oui, nous créons des visuels personnalisés avec vos prénoms, couleurs et thème.",
  },
  {
    question: "Le photobooth fonctionne-t-il en extérieur ?",
    answer:
      "Oui, sous réserve d'un espace couvert et d'une alimentation électrique.",
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

export default function Mariages() {
  return (
    <Layout
      metaProps={{
        title: "Photobooth mariage à Paris | MySelfieBooth",
        description:
          "Animation photobooth pour mariages : impressions illimitées, personnalisation élégante, galerie privée et accompagnement complet.",
        ogImage: "/images/mariages/mariage1.JPG",
        ogUrl: "https://www.myselfiebooth-paris.fr/evenements/mariages",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Mariages"
          title="Un photobooth élégant pour le plus beau jour"
          description="Offrez à vos invités une animation chic et conviviale. Des souvenirs imprimés et numériques, parfaitement alignés à votre thème."
          bullets={[
            "Personnalisation des cadres photo",
            "Animateur sur place",
            "Galerie privée sécurisée",
          ]}
          primaryCta={{
            label: "Réserver pour mon mariage",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les prestations", href: "/prestations" }}
          image="/images/mariages/mariage1.JPG"
          imageAlt="Photobooth mariage"
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
              title="Ce que recherchent les couples"
              lead="Une animation élégante et des souvenirs durables pour chaque invité."
            >
              <FeatureGrid items={objectifs} columns={2} />
            </Section>

            <Section
              id="recommandations"
              variant="alt"
              eyebrow="Recommandations"
              title="Les machines idéales pour un mariage"
              lead="Nos recommandations selon votre ambiance et votre lieu."
            >
              <FeatureGrid items={recommandations} columns={3} />
            </Section>

            <Section
              id="processus"
              eyebrow="Déroulé"
              title="Comment se déroule l'animation"
              lead="Nous gérons l'installation, l'animation et la livraison."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="inspirations"
              variant="alt"
              eyebrow="Inspirations"
              title="Idées de mise en scène"
              lead="Des ambiances adaptées aux styles de mariage les plus demandés."
            >
              <FeatureGrid items={inspirations} columns={3} />
            </Section>

            <Section
              id="galerie"
              eyebrow="Galerie"
              title="Nos mariages en images"
              lead="Des moments capturés lors de nos prestations."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              variant="alt"
              eyebrow="Vidéo"
              title="Aperçu d'une animation mariage"
              lead="Une séquence pour visualiser l'expérience."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              eyebrow="Avis"
              title="Des couples ravis"
              lead="Le photobooth est souvent le souvenir préféré des invités."
            >
              <ProofSection
                stats={[
                  { value: "150+", label: "mariages réalisés" },
                  { value: "4.9/5", label: "note moyenne" },
                  { value: "24h", label: "livraison des photos" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Nos invités ont adoré, les photos sont magnifiques et personnalisées.",
                    name: "Camille & Lucas",
                    role: "Mariage",
                  },
                  {
                    quote:
                      "L'équipe a tout géré, nous avons pu profiter pleinement de la soirée.",
                    name: "Justine & Hugo",
                    role: "Mariage",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              variant="alt"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses pour planifier votre animation mariage."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à sublimer votre mariage ?"
        description="Contactez-nous pour une animation photobooth élégante et personnalisée."
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
