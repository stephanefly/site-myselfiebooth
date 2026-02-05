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
    title: "Miroir interactif",
    description:
      "Un écran tactile élégant qui guide vos invités pour des poses naturelles.",
  },
  {
    title: "Effets premium",
    description:
      "Animations, signatures et filtres personnalisés pour un rendu haut de gamme.",
  },
  {
    title: "Scénographie élégante",
    description:
      "Un stand qui s'intègre aux décors raffinés et aux ambiances chic.",
  },
  {
    title: "Accompagnement",
    description:
      "Animateur sur place pour fluidifier la prise de vue et le partage.",
  },
];

const formules = [
  {
    title: "Formule élégance",
    description: "Idéale pour un cocktail ou un dîner de mariage.",
    list: ["Impressions illimitées", "Animations miroir", "Galerie privée"],
  },
  {
    title: "Formule prestige",
    description: "Un service complet pour couvrir toute la soirée.",
    list: ["Cadres personnalisés", "Animateur dédié", "Livraison express"],
  },
];

const inclusions = [
  {
    title: "Ce qui est inclus",
    list: [
      "Miroir tactile XXL",
      "Personnalisation graphique",
      "Impressions instantanées",
      "Installation et support",
    ],
  },
  {
    title: "Options recommandées",
    list: [
      "Mur floral",
      "Livre d'or numérique",
      "Décor lumineux",
      "Accessoires premium",
    ],
  },
  {
    title: "Livraison",
    list: [
      "Galerie privée sécurisée",
      "Exports HD",
      "Partage par QR code",
    ],
  },
];

const steps = [
  {
    title: "Brief ambiance",
    description:
      "Nous validons les couleurs, les textures et le style souhaité.",
  },
  {
    title: "Design des cadres",
    description:
      "Création de visuels personnalisés et validation avant l'événement.",
  },
  {
    title: "Installation",
    description:
      "Mise en place, calibrage et tests complets sur site.",
  },
  {
    title: "Animation",
    description:
      "Accueil des invités et gestion du flux pour une expérience fluide.",
  },
  {
    title: "Livraison",
    description:
      "Toutes les photos sont mises à disposition en HD après l'événement.",
  },
];

const requirements = [
  {
    title: "Espace recommandé",
    description: "3 à 4 m2 pour le miroir et le fond photo.",
  },
  {
    title: "Alimentation",
    description: "Une prise 220V à proximité du stand.",
  },
  {
    title: "Temps d'installation",
    description: "60 minutes pour la mise en place et les tests.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth tactile" },
  { src: "/images/miroirbooth.webp", alt: "Décor miroirbooth" },
  { src: "/images/pack.webp", alt: "Pack VIP avec miroirbooth" },
];

const videos = [
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "Expérience miroirbooth",
    poster: "/images/miroirbooth.webp",
  },
];

const faq = [
  {
    question: "Le miroirbooth est-il adapté aux mariages ?",
    answer:
      "Oui, il apporte une touche chic et interactive parfaite pour les mariages et événements premium.",
  },
  {
    question: "Combien de personnes peuvent poser ?",
    answer:
      "Jusqu'à 6 personnes par photo, selon l'espace disponible.",
  },
  {
    question: "Peut-on personnaliser les animations ?",
    answer:
      "Nous personnalisons les animations, les cadres et les messages pour refléter votre thème.",
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

export default function Miroirbooth() {
  return (
    <Layout
      metaProps={{
        title: "Location Miroirbooth à Paris | MySelfieBooth",
        description:
          "Offrez une animation élégante avec le miroirbooth interactif. Photos premium, impressions illimitées et personnalisation complète pour événements haut de gamme.",
        ogImage: "/images/miroirbooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/miroirbooth",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Élégance"
          title="Miroirbooth : l'animation chic et interactive"
          description="Le miroir tactile transforme la prise de vue en expérience glamour. Idéal pour les mariages, soirées VIP et événements corporate premium."
          bullets={[
            "Interface tactile et animations personnalisées",
            "Qualité photo studio",
            "Animateur dédié pendant l'événement",
          ]}
          primaryCta={{
            label: "Réserver un miroirbooth",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/miroirbooth.webp"
          imageAlt="Miroirbooth MySelfieBooth"
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
              title="Un miroir interactif qui impressionne"
              lead="Design raffiné, animations élégantes et qualité photo exceptionnelle."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des packs adaptés à votre soirée"
              lead="Choisissez la durée idéale pour votre événement."
            >
              <FeatureGrid items={formules} columns={2} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Un service clé en main"
              lead="Chaque prestation inclut l'installation, l'animation et la livraison des contenus."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Une organisation fluide"
              lead="Nous orchestrons chaque étape pour un rendu parfait."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences techniques"
              title="Pré-requis techniques"
              lead="Les principaux éléments nécessaires à l'installation."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Exemples de réalisations"
              lead="Découvrez les rendus premium du miroirbooth."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Le miroirbooth en action"
              lead="Un aperçu de l'expérience sur place."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Des clients conquis"
              lead="Ils ont choisi le miroirbooth pour marquer les esprits."
            >
              <ProofSection
                stats={[
                  { value: "200+", label: "prestations miroirbooth" },
                  { value: "4.9/5", label: "note moyenne" },
                  { value: "24h", label: "livraison photo" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Le miroirbooth a donné une dimension chic à notre réception.",
                    name: "Nadia B.",
                    role: "Mariage",
                  },
                  {
                    quote:
                      "Animation fluide et photos magnifiques, nos invités ont adoré.",
                    name: "Arthur G.",
                    role: "Soirée privée",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses essentielles avant de réserver."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Envie d'une animation élégante ?"
        description="Recevez une proposition personnalisée avec notre miroirbooth premium."
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
