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

const evenements = [
  {
    title: "Mariages",
    description: "Une animation élégante pour sublimer votre cérémonie.",
    list: ["Cadres personnalisés", "Livre d'or", "Souvenirs pour les invités"],
  },
  {
    title: "Anniversaires",
    description: "Des photos fun et spontanées pour marquer la fête.",
    list: ["Accessoires ludiques", "Partage instantané", "Impressions illimitées"],
  },
  {
    title: "Soirées privées",
    description: "Un stand photo scénographié pour une ambiance premium.",
    list: ["Décor ajusté", "Animateur sur place", "Photos HD"],
  },
  {
    title: "Corporate",
    description: "Activations de marque et team building en entreprise.",
    list: ["Branding complet", "Rapports de performance", "Contenus réseaux"],
  },
];

const steps = [
  {
    title: "Audit du lieu",
    description:
      "Nous vérifions les accès, l'espace disponible et les besoins électriques pour garantir une installation sereine.",
  },
  {
    title: "Sélection de la machine",
    description:
      "Choix du photobooth le plus adapté à votre format, votre timing et vos objectifs.",
  },
  {
    title: "Scénographie",
    description:
      "Création d'un univers visuel cohérent : fond, accessoires, templates et messages.",
  },
  {
    title: "Animation fluide",
    description:
      "Notre animateur pilote les prises de vue et assure la satisfaction des invités.",
  },
  {
    title: "Livraison des contenus",
    description:
      "Toutes les photos et vidéos sont livrées et optimisées pour le partage.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/mariages/mariage1.JPG", alt: "Animation mariage" },
  { src: "/images/photobooth.webp", alt: "Photobooth classique" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth" },
  { src: "/images/360booth.webp", alt: "360 booth" },
  { src: "/images/voguebooth.webp", alt: "Vogue booth" },
  { src: "/images/ipadbooth.webp", alt: "iPad booth" },
];

const videos = [
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "Teaser événementiel MySelfieBooth",
    poster: "/images/photobooth.webp",
  },
];

const faq = [
  {
    question: "Quels événements couvrez-vous ?",
    answer:
      "Nous intervenons sur les mariages, soirées privées, événements d'entreprise, salons, lancements de produit et anniversaires en Île-de-France.",
  },
  {
    question: "Peut-on intégrer notre branding ?",
    answer:
      "Oui, nous adaptons les cadres, écrans d'accueil et templates vidéo à votre charte graphique.",
  },
  {
    question: "Quel est le délai de réservation recommandé ?",
    answer:
      "Pour les dates les plus demandées, réservez idéalement 4 à 6 semaines à l'avance.",
  },
];

const toc = [
  { id: "presentation", label: "Présentation" },
  { id: "evenements", label: "Événements" },
  { id: "processus", label: "Organisation" },
  { id: "galerie", label: "Galerie" },
  { id: "videos", label: "Vidéo" },
  { id: "preuves", label: "Preuves sociales" },
  { id: "faq", label: "FAQ" },
];

export default function EvenementsIndex() {
  return (
    <Layout
      metaProps={{
        title: "Photobooth pour événements à Paris | MySelfieBooth",
        description:
          "Mariages, anniversaires, soirées privées et événements corporate : découvrez nos solutions photobooth premium pour chaque format d'événement.",
        ogImage: "/images/photobooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/evenements",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Événements"
          title="Des expériences photobooth pensées pour chaque moment clé"
          description="Nous créons des animations photo et vidéo adaptées à l'énergie de vos invités. Scénographie, personnalisation et animation : tout est orchestré pour maximiser l'engagement."
          bullets={[
            "Mise en scène alignée à votre thème",
            "Templates sur-mesure et partage instantané",
            "Support technique tout au long de l'événement",
          ]}
          primaryCta={{
            label: "Planifier mon événement",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les prestations", href: "/prestations" }}
          image="/images/photobooth.webp"
          imageAlt="Animation événementielle MySelfieBooth"
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
              id="evenements"
              eyebrow="Formats"
              title="Des formats adaptés à chaque événement"
              lead="Notre équipe ajuste la machine, la scénographie et le rythme d'animation selon vos objectifs."
            >
              <FeatureGrid items={evenements} columns={2} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Organisation"
              title="Une coordination premium"
              lead="Nous assurons la fluidité de l'organisation pour que vos invités profitent pleinement de l'expérience."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="galerie"
              eyebrow="Galerie"
              title="Inspiration par type d'événement"
              lead="Quelques instants capturés lors de nos événements récents."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="videos"
              variant="alt"
              eyebrow="Vidéo"
              title="Un rendu immersif pour les réseaux"
              lead="Teaser de nos activations photo et vidéo en conditions réelles."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              eyebrow="Preuves sociales"
              title="Une équipe reconnue pour sa fiabilité"
              lead="Nous accompagnons les marques et les particuliers avec un niveau de service constant."
            >
              <ProofSection
                stats={[
                  { value: "150+", label: "mariages accompagnés" },
                  { value: "80+", label: "événements corporate" },
                  { value: "4.9/5", label: "note moyenne" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Le photobooth a été le point central de notre soirée, tout le monde a repartit avec un souvenir.",
                    name: "Léa & Marc",
                    role: "Mariage à Paris",
                  },
                  {
                    quote:
                      "Nos équipes ont adoré les vidéos 360, tout était prêt avant notre arrivée.",
                    name: "Sophie T.",
                    role: "DRH",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              variant="alt"
              eyebrow="FAQ"
              title="Les questions fréquentes"
              lead="Toutes les informations utiles pour préparer votre événement."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Besoin d'un scénario sur-mesure ?"
        description="Recevez une recommandation de machine, un déroulé et un devis personnalisé en moins de 24h."
        primaryCta={{
          label: "Recevoir mon devis",
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
