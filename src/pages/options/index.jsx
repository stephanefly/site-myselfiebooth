import Layout from "../../components/Layout";
import HeroSplit from "../../components/longform/HeroSplit";
import Section from "../../components/longform/Section";
import FeatureGrid from "../../components/longform/FeatureGrid";
import GalleryGrid from "../../components/longform/GalleryGrid";
import VideoGrid from "../../components/longform/VideoGrid";
import FAQAccordion from "../../components/longform/FAQAccordion";
import CTASection from "../../components/longform/CTASection";
import TableOfContents from "../../components/longform/TableOfContents";
import SplitSection from "../../components/longform/SplitSection";
import BackToTop from "../../components/longform/BackToTop";

const options = [
  {
    title: "Phonebooth",
    description: "Cabine rétro pour laisser un message audio personnalisé.",
    list: ["Messages d'invités", "Décor vintage", "Livraison des audios"],
  },
  {
    title: "Panneau de bienvenue",
    description: "Signalétique élégante pour accueillir vos invités.",
    list: ["Format sur-mesure", "Impression premium", "Design graphique"],
  },
  {
    title: "Livre d'or numérique",
    description: "Collecte d'avis et de photos complémentaires.",
    list: ["Partage instantané", "Export facile", "Souvenir durable"],
  },
  {
    title: "Fond personnalisé",
    description: "Un décor aligné à votre thème ou votre marque.",
    list: ["Mur floral", "Backdrop studio", "Habillage sur mesure"],
  },
  {
    title: "Accessoires premium",
    description: "Sélection d'accessoires élégants pour des poses variées.",
    list: ["Accessoires qualitatifs", "Thèmes harmonisés", "Renouvellement"],
  },
  {
    title: "Temps supplémentaire",
    description: "Prolongez l'expérience pour couvrir l'intégralité de la soirée.",
    list: ["Extension flexible", "Animateur inclus", "Aucun stress"],
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/all_options.webp", alt: "Panorama des options" },
  { src: "/images/Livre-d'or.webp", alt: "Livre d'or" },
  { src: "/images/Welcomeboard.webp", alt: "Panneau de bienvenue" },
  { src: "/images/ALL-MURS.webp", alt: "Mur personnalisé" },
  { src: "/images/3d Holo-site.webp", alt: "Option hologramme" },
  { src: "/images/decoration-voguebooth.webp", alt: "Décor premium" },
];

const faq = [
  {
    question: "Peut-on réserver plusieurs options ?",
    answer:
      "Oui, toutes nos options sont combinables. Nous recommandons un mix cohérent avec votre format et votre lieu.",
  },
  {
    question: "Les options sont-elles disponibles pour chaque prestation ?",
    answer:
      "La plupart des options sont compatibles avec nos photobooths. Nous validons ensemble la faisabilité lors du brief.",
  },
  {
    question: "Quel est le délai de production d'un décor personnalisé ?",
    answer:
      "Comptez en moyenne 10 à 15 jours selon la complexité du visuel et le niveau de personnalisation.",
  },
];

const toc = [
  { id: "presentation", label: "Présentation" },
  { id: "catalogue", label: "Catalogue" },
  { id: "galerie", label: "Galerie" },
  { id: "video", label: "Vidéo" },
  { id: "faq", label: "FAQ" },
];

export default function OptionsIndex() {
  return (
    <Layout
      metaProps={{
        title: "Options photobooth premium | MySelfieBooth",
        description:
          "Personnalisez votre photobooth avec nos options : phonebooth, panneaux de bienvenue, décors premium, livre d'or et accessoires élégants.",
        ogImage: "/images/all_options.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/options",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Options"
          title="Des détails qui subliment votre événement"
          description="Ajoutez une touche signature à votre photobooth grâce à nos options premium. Chaque option est pensée pour renforcer l'expérience et la mémorisation de votre événement."
          bullets={[
            "Design sur-mesure et finitions soignées",
            "Intégration parfaite à votre scénographie",
            "Options compatibles avec toutes nos prestations",
          ]}
          primaryCta={{
            label: "Composer mon pack",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Découvrir les prestations", href: "/prestations" }}
          image="/images/all_options.webp"
          imageAlt="Options photobooth MySelfieBooth"
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
              id="catalogue"
              eyebrow="Catalogue"
              title="Les options les plus demandées"
              lead="Créez une expérience unique en combinant nos options premium."
            >
              <FeatureGrid items={options} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Des finitions élégantes"
              lead="Des exemples d'options installées sur nos événements récents."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Options en situation réelle"
              lead="Une vidéo pour visualiser la mise en scène et les finitions."
            >
              <VideoGrid
                videos={[
                  {
                    src: "/videos/PUB_2024.mp4",
                    type: "video/mp4",
                    title: "Options MySelfieBooth",
                    poster: "/placeholders/placeholder-video.jpg",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes sur les options"
              lead="Les informations pratiques pour planifier votre personnalisation."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à créer une expérience signature ?"
        description="Notre équipe vous guide pour composer un pack cohérent et premium."
        primaryCta={{
          label: "Demander un devis",
          href: "https://reservation.myselfiebooth-paris.fr",
          external: true,
        }}
        secondaryCta={{ label: "Voir les événements", href: "/evenements" }}
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
