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
    title: "Deux animations",
    description:
      "Combinez le miroirbooth et le 360 booth pour une expérience complète.",
  },
  {
    title: "Effet premium",
    description:
      "Une animation photo et une animation vidéo pour couvrir tous les moments.",
  },
  {
    title: "Deux animateurs",
    description:
      "Un staff dédié pour chaque stand afin d'assurer un service fluide.",
  },
  {
    title: "Contenus variés",
    description:
      "Photos imprimées et vidéos immersives livrées en HD.",
  },
];

const formules = [
  {
    title: "Formule VIP",
    description: "Pour les grandes réceptions et les soirées premium.",
    list: ["Miroirbooth + 360", "2 animateurs", "Impressions illimitées"],
  },
  {
    title: "Formule VIP+",
    description: "Avec personnalisation avancée et scénographie.",
    list: ["Branding complet", "Décor premium", "Livraison express"],
  },
];

const inclusions = [
  {
    title: "Inclus",
    list: [
      "Deux machines",
      "Scénographie coordonnée",
      "Impressions et vidéos illimitées",
      "Galerie privée",
    ],
  },
  {
    title: "Options",
    list: [
      "Backdrops personnalisés",
      "Livre d'or",
      "Hôtesse d'accueil",
      "Écran de diffusion",
    ],
  },
  {
    title: "Livraison",
    list: ["Exports HD", "Liens de partage", "Archivage sécurisé"],
  },
];

const steps = [
  {
    title: "Audit du lieu",
    description:
      "Validation des espaces pour installer deux animations complémentaires.",
  },
  {
    title: "Scénographie",
    description:
      "Design des décors et des templates pour un rendu cohérent.",
  },
  {
    title: "Installation",
    description:
      "Montage des deux stands et tests techniques complets.",
  },
  {
    title: "Animation",
    description:
      "Deux animateurs dédiés pour guider les invités.",
  },
  {
    title: "Livraison",
    description:
      "Photos et vidéos livrées rapidement via galerie privée.",
  },
];

const requirements = [
  {
    title: "Espace requis",
    description: "6 à 8 m2 pour deux stands distincts.",
  },
  {
    title: "Alimentation",
    description: "Deux prises 220V ou un circuit dédié.",
  },
  {
    title: "Temps de montage",
    description: "90 minutes pour un déploiement complet.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/pack.webp", alt: "Pack VIP" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth" },
  { src: "/images/360booth.webp", alt: "360 booth" },
  { src: "/images/voguebooth.webp", alt: "Décor premium" },
];

const videos = [
  {
    src: "/videos/compress-TOUR-EIFFEL-FINAL.mp4",
    type: "video/mp4",
    title: "Expérience 360",
    poster: "/images/360booth.webp",
  },
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "Ambiance photobooth",
    poster: "/images/miroirbooth.webp",
  },
];

const faq = [
  {
    question: "Peut-on choisir d'autres machines ?",
    answer:
      "Oui, nous adaptons le pack en fonction de votre lieu et de vos objectifs.",
  },
  {
    question: "Faut-il deux espaces distincts ?",
    answer:
      "Oui, pour garantir un flux optimal et la sécurité des invités.",
  },
  {
    question: "Le pack inclut-il la personnalisation ?",
    answer:
      "La personnalisation des cadres et des vidéos est incluse dans toutes nos formules VIP.",
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

export default function Packvip() {
  return (
    <Layout
      metaProps={{
        title: "Pack VIP Photobooth | MySelfieBooth Paris",
        description:
          "Pack VIP : combinez miroirbooth et 360 booth pour une animation photo + vidéo premium. Deux animateurs, scénographie et contenu HD.",
        ogImage: "/images/pack.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/packvip",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Pack VIP"
          title="L'expérience complète photo + vidéo"
          description="Le Pack VIP combine le miroirbooth et le 360 booth pour une animation premium et immersive. Idéal pour les grandes réceptions et événements corporate."
          bullets={[
            "Deux machines complémentaires",
            "Deux animateurs dédiés",
            "Contenus photo et vidéo illimités",
          ]}
          primaryCta={{
            label: "Réserver le Pack VIP",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/pack.webp"
          imageAlt="Pack VIP MySelfieBooth"
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
              title="Pourquoi choisir le Pack VIP ?"
              lead="Une animation double pour maximiser l'expérience et les souvenirs."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des packs premium"
              lead="Une offre complète, adaptable à votre scénographie."
            >
              <FeatureGrid items={formules} columns={2} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Service clé en main"
              lead="Nous nous occupons de tout pour que vous profitiez de l'événement."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Une coordination maîtrisée"
              lead="Un process clair pour un événement sans stress."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences techniques"
              title="Pré-requis"
              lead="Les éléments techniques indispensables."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Exemples de prestations VIP"
              lead="Un aperçu des installations premium."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Rendus photo et vidéo"
              lead="Découvrez les formats livrés avec le Pack VIP."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Des clients enchantés"
              lead="Le Pack VIP est plébiscité pour son impact."
            >
              <ProofSection
                stats={[
                  { value: "60+", label: "packs VIP réalisés" },
                  { value: "4.9/5", label: "note moyenne" },
                  { value: "2", label: "animateurs dédiés" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Le double stand a créé un vrai show, tout le monde a participé.",
                    name: "Fanny R.",
                    role: "Mariage",
                  },
                  {
                    quote:
                      "Un service ultra pro pour notre soirée annuelle, rendu parfait.",
                    name: "Victor A.",
                    role: "Entreprise",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses avant de réserver."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à offrir un événement exceptionnel ?"
        description="Le Pack VIP est la solution complète pour un maximum d'impact."
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
