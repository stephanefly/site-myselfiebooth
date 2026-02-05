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
    title: "Moments fun",
    description:
      "Des photos spontanées pour immortaliser chaque moment de la fête.",
  },
  {
    title: "Souvenirs à emporter",
    description:
      "Impressions instantanées pour chaque invité.",
  },
  {
    title: "Animation dynamique",
    description:
      "Un photobooth qui rythme la soirée et crée du lien.",
  },
  {
    title: "Personnalisation",
    description:
      "Cadres photo aux couleurs de l'anniversaire.",
  },
];

const recommandations = [
  {
    title: "Photobooth classique",
    description:
      "Le format idéal pour des impressions illimitées et faciles à partager.",
  },
  {
    title: "iPad Booth",
    description:
      "Compact et parfait pour les anniversaires à domicile.",
  },
  {
    title: "Phonebooth",
    description:
      "Ajoutez des messages audio amusants pour un souvenir unique.",
  },
];

const steps = [
  {
    title: "Brief",
    description:
      "Nous validons l'horaire, le lieu et le style souhaité.",
  },
  {
    title: "Personnalisation",
    description:
      "Création des cadres photo et messages personnalisés.",
  },
  {
    title: "Installation",
    description:
      "Mise en place rapide avant l'arrivée des invités.",
  },
  {
    title: "Animation",
    description:
      "Accompagnement des invités pour maximiser les souvenirs.",
  },
  {
    title: "Livraison",
    description:
      "Galerie privée et photos HD livrées après l'événement.",
  },
];

const inspirations = [
  {
    title: "Thème coloré",
    description:
      "Cadres dynamiques et accessoires fun pour un rendu festif.",
  },
  {
    title: "Soirée chic",
    description:
      "Décor élégant et impressions premium pour une touche raffinée.",
  },
  {
    title: "Anniversaire enfant",
    description:
      "Accessoires ludiques et templates adaptés aux plus jeunes.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/photobooth.webp", alt: "Photobooth classique" },
  { src: "/images/ipadbooth.webp", alt: "iPad booth compact" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth" },
  { src: "/images/all_presta.webp", alt: "Prestations MySelfieBooth" },
];

const videos = [
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "Anniversaire en action",
    poster: "/images/photobooth.webp",
  },
];

const faq = [
  {
    question: "Peut-on installer un photobooth chez soi ?",
    answer:
      "Oui, nos formats compactes comme l'iPad booth sont parfaits pour une installation à domicile.",
  },
  {
    question: "Les impressions sont-elles illimitées ?",
    answer:
      "Oui, selon la formule choisie nous proposons des impressions illimitées pour les invités.",
  },
  {
    question: "Peut-on choisir un thème graphique ?",
    answer:
      "Oui, nous personnalisons les cadres photo selon votre thème d'anniversaire.",
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

export default function Anniversaires() {
  return (
    <Layout
      metaProps={{
        title: "Photobooth anniversaire à Paris | MySelfieBooth",
        description:
          "Animation photobooth pour anniversaires : impressions illimitées, personnalisation et installation rapide pour des souvenirs fun et élégants.",
        ogImage: "/images/photobooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/evenements/anniversaires",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Anniversaires"
          title="Un photobooth pour une fête mémorable"
          description="Des souvenirs fun, des impressions instantanées et une animation conviviale pour célébrer chaque anniversaire."
          bullets={[
            "Impressions illimitées",
            "Personnalisation graphique",
            "Installation rapide",
          ]}
          primaryCta={{
            label: "Réserver pour mon anniversaire",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les prestations", href: "/prestations" }}
          image="/images/photobooth.webp"
          imageAlt="Photobooth anniversaire"
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
              title="Créer une ambiance festive"
              lead="Le photobooth devient un moment fort de votre anniversaire."
            >
              <FeatureGrid items={objectifs} columns={2} />
            </Section>

            <Section
              id="recommandations"
              variant="alt"
              eyebrow="Recommandations"
              title="Les options les plus adaptées"
              lead="Nos machines recommandées pour les anniversaires."
            >
              <FeatureGrid items={recommandations} columns={3} />
            </Section>

            <Section
              id="processus"
              eyebrow="Déroulé"
              title="Organisation simple"
              lead="Nous gérons l'installation et l'animation pour que vous profitiez."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="inspirations"
              variant="alt"
              eyebrow="Inspirations"
              title="Idées de mise en scène"
              lead="Des thèmes adaptés à chaque style d'anniversaire."
            >
              <FeatureGrid items={inspirations} columns={3} />
            </Section>

            <Section
              id="galerie"
              eyebrow="Galerie"
              title="Anniversaires en images"
              lead="Quelques instants capturés lors de nos prestations."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              variant="alt"
              eyebrow="Vidéo"
              title="Ambiance anniversaire"
              lead="Une séquence pour visualiser l'animation."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              eyebrow="Avis"
              title="Des invités ravis"
              lead="Le photobooth est toujours un succès lors des anniversaires."
            >
              <ProofSection
                stats={[
                  { value: "120+", label: "anniversaires réalisés" },
                  { value: "4.8/5", label: "note moyenne" },
                  { value: "95%", label: "invités satisfaits" },
                ]}
                testimonials={[
                  {
                    quote:
                      "L'animation a mis une super ambiance, tout le monde est reparti avec ses photos.",
                    name: "Laura G.",
                    role: "30 ans",
                  },
                  {
                    quote:
                      "Installation rapide et service très pro, je recommande vivement.",
                    name: "Thomas P.",
                    role: "Anniversaire",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              variant="alt"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses pour préparer votre fête."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à célébrer ?"
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
