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
    title: "Format compact",
    description:
      "Idéal pour les petits espaces, avec une installation rapide et discrète.",
  },
  {
    title: "Partage instantané",
    description:
      "Envoi par QR code, email ou SMS pour une diffusion immédiate.",
  },
  {
    title: "Expérience fluide",
    description:
      "Interface intuitive pour des prises de vue rapides et spontanées.",
  },
  {
    title: "Budget maîtrisé",
    description:
      "Une option premium accessible pour des événements intimistes.",
  },
];

const formules = [
  {
    title: "Formule 2h",
    description: "Parfait pour un cocktail ou un événement court.",
    list: ["Photos numériques illimitées", "Personnalisation", "Livraison"],
  },
  {
    title: "Formule 4h",
    description: "Couverture complète d'un anniversaire ou d'une soirée.",
    list: ["Animateur sur place", "Partage instantané", "Assistance"],
  },
];

const inclusions = [
  {
    title: "Inclus",
    list: [
      "iPad booth premium",
      "Interface personnalisée",
      "Éclairage LED",
      "Galerie privée",
    ],
  },
  {
    title: "Options",
    list: [
      "Impressions instantanées",
      "Accessoires premium",
      "Fond personnalisé",
      "Livre d'or numérique",
    ],
  },
  {
    title: "Livraison",
    list: ["Export HD", "Lien sécurisé", "Support technique"],
  },
];

const steps = [
  {
    title: "Brief rapide",
    description:
      "Validation du lieu et des besoins pour l'installation compacte.",
  },
  {
    title: "Personnalisation",
    description:
      "Création d'un visuel adapté à votre événement.",
  },
  {
    title: "Installation",
    description:
      "Mise en place en moins de 30 minutes.",
  },
  {
    title: "Animation",
    description:
      "Accompagnement des invités et assistance technique.",
  },
  {
    title: "Livraison",
    description:
      "Accès immédiat aux photos via une galerie privée.",
  },
];

const requirements = [
  {
    title: "Espace requis",
    description: "1 à 2 m2 suffisent pour un usage confortable.",
  },
  {
    title: "Alimentation",
    description: "Une prise 220V standard.",
  },
  {
    title: "Temps de montage",
    description: "30 minutes environ.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/ipadbooth.webp", alt: "iPad booth" },
  { src: "/images/photobooth.webp", alt: "Photobooth compact" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth complémentaire" },
  { src: "/images/all_presta.webp", alt: "Prestations" },
];

const videos = [
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "iPad booth en action",
    poster: "/images/ipadbooth.webp",
  },
];

const faq = [
  {
    question: "Peut-on ajouter des impressions ?",
    answer:
      "Oui, nous proposons une imprimante compacte en option pour offrir des souvenirs papier.",
  },
  {
    question: "Est-ce adapté aux petits espaces ?",
    answer:
      "Absolument, l'iPad booth est pensé pour s'intégrer dans des espaces réduits.",
  },
  {
    question: "Les photos sont-elles en HD ?",
    answer:
      "Oui, toutes les photos numériques sont fournies en haute définition.",
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

export default function Ipadbooth() {
  return (
    <Layout
      metaProps={{
        title: "Location iPad Booth à Paris | MySelfieBooth",
        description:
          "L'iPad booth compact et élégant pour vos événements intimistes. Installation rapide, personnalisation et partage instantané des photos.",
        ogImage: "/images/ipadbooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/ipadbooth",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Compact"
          title="iPad Booth : la solution photo agile"
          description="Une animation photo élégante et compacte, parfaite pour les petits espaces, les événements intimistes et les budgets maîtrisés."
          bullets={[
            "Installation rapide",
            "Partage instantané",
            "Personnalisation incluse",
          ]}
          primaryCta={{
            label: "Réserver un iPad booth",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/ipadbooth.webp"
          imageAlt="iPad booth MySelfieBooth"
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
              title="Une expérience simple et qualitative"
              lead="Un format compact sans compromis sur l'expérience client."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des packs flexibles"
              lead="Choisissez la durée qui correspond à votre format."
            >
              <FeatureGrid items={formules} columns={2} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Tout est prêt pour votre événement"
              lead="Nous nous occupons de la mise en place, du design et de la livraison."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Une mise en place rapide"
              lead="Un process simple pour une expérience fluide."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences techniques"
              title="Pré-requis"
              lead="L'essentiel pour l'installation de l'iPad booth."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Aperçu des installations"
              lead="Des setups compacts et élégants."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="iPad booth en situation"
              lead="Un aperçu de l'expérience sur place."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Des clients satisfaits"
              lead="Un format plébiscité pour les événements intimes."
            >
              <ProofSection
                stats={[
                  { value: "120+", label: "prestations iPad booth" },
                  { value: "4.8/5", label: "note moyenne" },
                  { value: "30 min", label: "installation" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Installation ultra rapide, parfait pour notre cocktail en petit comité.",
                    name: "Aline V.",
                    role: "Anniversaire",
                  },
                  {
                    quote:
                      "Les photos étaient superbes et partagées instantanément.",
                    name: "Yanis K.",
                    role: "Corporate",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Tout ce qu'il faut savoir avant de réserver."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Besoin d'une animation compacte ?"
        description="L'iPad booth s'adapte à vos événements les plus intimistes."
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
