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

const prestations = [
  {
    title: "Photobooth classique",
    description:
      "Le best seller pour des souvenirs imprimés et numériques illimités.",
    list: [
      "Impressions instantanées",
      "Galerie privée",
      "Personnalisation complète",
    ],
  },
  {
    title: "Miroirbooth",
    description:
      "Un miroir interactif haut de gamme avec animations et déclenchement tactile.",
    list: ["Effet waouh", "Interface élégante", "Accessoires premium"],
  },
  {
    title: "360 Booth",
    description:
      "Captations vidéo immersives pour un rendu viral sur les réseaux sociaux.",
    list: ["Slow motion", "Habillage vidéo", "Partage instantané"],
  },
  {
    title: "Vogue Booth",
    description:
      "Une mise en scène magazine avec éclairage studio pour un rendu éditorial.",
    list: ["Décor scénographié", "Lumière maîtrisée", "Photos glamour"],
  },
  {
    title: "Air360 Booth",
    description:
      "Version ultra fluide du 360 pour des captations 4K spectaculaires.",
    list: ["Vidéos 4K", "Jusqu'à 10 personnes", "Animateur dédié"],
  },
  {
    title: "iPad Booth",
    description:
      "Compact et rapide, idéal pour les formats plus intimes.",
    list: ["Installation express", "Format mobile", "Partage numérique"],
  },
  {
    title: "Pack VIP",
    description:
      "Le duo miroir + 360 pour une expérience immersive complète.",
    list: ["Deux machines", "Deux animateurs", "Effet premium"],
  },
  {
    title: "Prestation personnalisée",
    description:
      "Un format sur-mesure pour scénographies, salons et activations de marque.",
    list: ["Décor branding", "Templates dédiés", "Coordination technique"],
  },
];

const steps = [
  {
    title: "Brief créatif",
    description:
      "Nous définissons ensemble l'ambiance, les contraintes techniques et les objectifs de votre événement.",
  },
  {
    title: "Personnalisation",
    description:
      "Création des cadres, animations, écrans d'accueil et messages de partage.",
  },
  {
    title: "Installation premium",
    description:
      "Livraison, montage et tests complets avant l'arrivée des invités.",
  },
  {
    title: "Animation sur place",
    description:
      "Un animateur dédié accompagne les invités et garantit la fluidité.",
  },
  {
    title: "Livraison des contenus",
    description:
      "Accès à la galerie privée et aux assets optimisés dès la fin de l'événement.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/photobooth.webp", alt: "Animation photobooth" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth élégant" },
  { src: "/images/voguebooth.webp", alt: "Vogue booth premium" },
  { src: "/images/360booth.webp", alt: "360 booth dynamique" },
  { src: "/images/ipadbooth.webp", alt: "iPad booth compact" },
  { src: "/images/airbooth.webp", alt: "Air360 booth" },
  { src: "/images/pack.webp", alt: "Pack VIP" },
  { src: "/images/all_presta.webp", alt: "Panorama des prestations" },
];

const videos = [
  {
    src: "/videos/compress-voguebooth.mp4",
    type: "video/mp4",
    title: "Aperçu Vogue Booth",
    poster: "/images/decoration-voguebooth.webp",
  },
  {
    src: "/videos/compress-TOUR-EIFFEL-FINAL.mp4",
    type: "video/mp4",
    title: "Animation 360 Booth",
    poster: "/images/fond 360.webp",
  },
];

const faq = [
  {
    question: "Proposez-vous des prestations clé en main ?",
    answer:
      "Oui, toutes nos formules incluent la livraison, l'installation, l'accompagnement sur place et la reprise du matériel.",
  },
  {
    question: "Peut-on personnaliser les visuels ?",
    answer:
      "Nous concevons des cadres photo et écrans d'accueil sur mesure pour chaque événement, selon votre charte ou votre thème.",
  },
  {
    question: "Quel espace prévoir ?",
    answer:
      "La plupart des photobooths nécessitent entre 2 et 4 m2. Nous validons ensemble les contraintes techniques avant l'installation.",
  },
  {
    question: "Les contenus sont-ils livrés après l'événement ?",
    answer:
      "Oui, vous recevez un lien vers une galerie sécurisée et les fichiers HD sont livrés rapidement après la prestation.",
  },
];

const toc = [
  { id: "presentation", label: "Présentation" },
  { id: "prestations", label: "Prestations" },
  { id: "processus", label: "Comment ça marche" },
  { id: "galerie", label: "Galerie" },
  { id: "videos", label: "Vidéos" },
  { id: "preuves", label: "Preuves sociales" },
  { id: "faq", label: "FAQ" },
];

export default function PrestationsIndex() {
  return (
    <Layout
      metaProps={{
        title: "Prestations photobooth premium à Paris | MySelfieBooth",
        description:
          "Découvrez toutes nos prestations photobooth, du classique au Vogue Booth en passant par le 360. Formules premium, personnalisation et accompagnement complet à Paris.",
        ogImage: "/images/all_presta.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Prestations"
          title="Toutes nos expériences photobooth haut de gamme"
          description="Choisissez la machine idéale pour votre événement : photos imprimées, vidéos immersives, miroir interactif ou activations sur-mesure. Nous gérons l'installation, l'animation et la livraison des contenus."
          bullets={[
            "Installation incluse partout en Île-de-France",
            "Personnalisation premium des cadres et écrans",
            "Accompagnement par un animateur dédié",
          ]}
          primaryCta={{
            label: "Demander un devis",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/all_presta.webp"
          imageAlt="Toutes les prestations MySelfieBooth"
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
              id="prestations"
              eyebrow="Nos formats"
              title="Une gamme complète pour chaque ambiance"
              lead="Du mariage intimiste au lancement de marque, nos prestations s'adaptent à vos besoins avec un niveau de finition premium."
            >
              <FeatureGrid items={prestations} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Méthode"
              title="Un accompagnement fluide du brief à la livraison"
              lead="Nous assurons une coordination complète pour que vous profitiez de votre événement sans stress."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="galerie"
              eyebrow="Galerie"
              title="Ambiances captées lors de nos prestations"
              lead="Aperçu des formats photo et vidéo livrés après chaque événement."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="videos"
              variant="alt"
              eyebrow="Vidéos"
              title="Extraits de nos animations phares"
              lead="Des vidéos courtes pour illustrer le rendu réel des machines."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              eyebrow="Preuves sociales"
              title="La confiance des marques et des particuliers"
              lead="Nos clients apprécient la qualité des images, la fluidité de l'animation et notre réactivité."
            >
              <ProofSection
                stats={[
                  { value: "400+", label: "événements accompagnés" },
                  { value: "98%", label: "clients satisfaits" },
                  { value: "24h", label: "délai moyen de livraison" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Installation rapide, équipe attentive et photos superbes. Nos invités ont adoré.",
                    name: "Claire D.",
                    role: "Mariage à Paris",
                  },
                  {
                    quote:
                      "Le 360 booth a créé un vrai moment viral pendant notre soirée corporate.",
                    name: "Julien M.",
                    role: "Responsable événementiel",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              variant="alt"
              eyebrow="FAQ"
              title="Tout savoir avant de réserver"
              lead="Les réponses aux questions les plus fréquentes sur nos prestations."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à choisir votre prestation ?"
        description="Recevez une recommandation personnalisée, un devis rapide et une proposition adaptée à votre événement."
        primaryCta={{
          label: "Parler à un expert",
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
