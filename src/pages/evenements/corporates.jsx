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
    title: "Engagement collaborateurs",
    description:
      "Créer un moment fédérateur pendant vos événements internes.",
  },
  {
    title: "Branding fort",
    description:
      "Diffuser votre image de marque grâce à des visuels personnalisés.",
  },
  {
    title: "Contenu social",
    description:
      "Générer des photos et vidéos prêtes à partager sur LinkedIn et Instagram.",
  },
  {
    title: "Data et insights",
    description:
      "Collecter des données de participation et mesurer l'engagement.",
  },
];

const recommandations = [
  {
    title: "360 Booth",
    description:
      "Idéal pour des activations virales et des lancements de produit.",
  },
  {
    title: "Vogue Booth",
    description:
      "Pour des événements premium, awards et soirées de gala.",
  },
  {
    title: "Prestation personnalisée",
    description:
      "Scénographie et branding sur-mesure pour vos stands et salons.",
  },
];

const steps = [
  {
    title: "Brief stratégique",
    description:
      "Définition des objectifs, KPI et messages clés à diffuser.",
  },
  {
    title: "Design branding",
    description:
      "Création des templates photo/vidéo alignés à votre charte.",
  },
  {
    title: "Installation",
    description:
      "Mise en place sur site, tests et calibrage des machines.",
  },
  {
    title: "Animation",
    description:
      "Accompagnement des invités et gestion du flux de participation.",
  },
  {
    title: "Reporting",
    description:
      "Livraison des contenus et statistiques d'engagement.",
  },
];

const inspirations = [
  {
    title: "Lancement produit",
    description:
      "Contenus vidéo dynamiques et mise en scène de marque.",
  },
  {
    title: "Soirée annuelle",
    description:
      "Photo call premium et impressions illimitées.",
  },
  {
    title: "Salon professionnel",
    description:
      "Collecte de leads et animations interactives.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/voguebooth.webp", alt: "Vogue booth corporate" },
  { src: "/images/360booth.webp", alt: "360 booth corporate" },
  { src: "/images/photobooth.webp", alt: "Photobooth corporate" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth premium" },
];

const videos = [
  {
    src: "/videos/compress-TOUR-EIFFEL-FINAL.mp4",
    type: "video/mp4",
    title: "Activation corporate 360",
    poster: "/images/360booth.webp",
  },
];

const faq = [
  {
    question: "Pouvez-vous intégrer notre charte graphique ?",
    answer:
      "Oui, nous personnalisons les cadres, écrans et vidéos selon votre branding.",
  },
  {
    question: "Proposez-vous des solutions pour salons ?",
    answer:
      "Oui, nos prestations personnalisées sont idéales pour générer du trafic sur les stands.",
  },
  {
    question: "Peut-on obtenir des statistiques ?",
    answer:
      "Nous fournissons un reporting avec le nombre de participants et les contenus générés.",
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

export default function Corporates() {
  return (
    <Layout
      metaProps={{
        title: "Photobooth corporate à Paris | MySelfieBooth",
        description:
          "Animations photobooth pour événements corporate : branding, contenus photo/vidéo, reporting et coordination premium.",
        ogImage: "/images/voguebooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/evenements/corporates",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Corporate"
          title="Des activations photobooth pour vos événements d'entreprise"
          description="Boostez l'engagement, créez du contenu social et valorisez votre marque avec nos solutions photobooth premium."
          bullets={[
            "Branding complet",
            "Animation gérée par nos équipes",
            "Reporting après événement",
          ]}
          primaryCta={{
            label: "Planifier un événement corporate",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les prestations", href: "/prestations" }}
          image="/images/voguebooth.webp"
          imageAlt="Photobooth corporate"
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
              title="Pourquoi intégrer un photobooth corporate"
              lead="Une animation stratégique pour renforcer votre image de marque."
            >
              <FeatureGrid items={objectifs} columns={2} />
            </Section>

            <Section
              id="recommandations"
              variant="alt"
              eyebrow="Recommandations"
              title="Nos formats préférés pour les entreprises"
              lead="Des machines adaptées à chaque type d'événement corporate."
            >
              <FeatureGrid items={recommandations} columns={3} />
            </Section>

            <Section
              id="processus"
              eyebrow="Déroulé"
              title="Une organisation maîtrisée"
              lead="Nous pilotons chaque étape pour garantir un événement fluide."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="inspirations"
              variant="alt"
              eyebrow="Inspirations"
              title="Scénarios corporate"
              lead="Des activations pensées pour chaque objectif marketing."
            >
              <FeatureGrid items={inspirations} columns={3} />
            </Section>

            <Section
              id="galerie"
              eyebrow="Galerie"
              title="Nos activations corporate"
              lead="Quelques exemples d'événements corporate réalisés."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              variant="alt"
              eyebrow="Vidéo"
              title="Exemple de rendu"
              lead="Un extrait pour visualiser l'impact d'une activation corporate."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              eyebrow="Avis"
              title="Des marques satisfaites"
              lead="Des collaborations réussies avec des équipes marketing et RH."
            >
              <ProofSection
                stats={[
                  { value: "80+", label: "événements corporate" },
                  { value: "4.9/5", label: "note moyenne" },
                  { value: "30%", label: "taux moyen de partage" },
                ]}
                testimonials={[
                  {
                    quote:
                      "L'animation a généré beaucoup de contenu et renforcé notre image.",
                    name: "Marina D.",
                    role: "Marketing",
                  },
                  {
                    quote:
                      "Une équipe très réactive et un rendu impeccable pour notre soirée annuelle.",
                    name: "Romain F.",
                    role: "RH",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              variant="alt"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses pour organiser votre événement corporate."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à activer votre marque ?"
        description="Contactez-nous pour un dispositif corporate sur-mesure."
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
