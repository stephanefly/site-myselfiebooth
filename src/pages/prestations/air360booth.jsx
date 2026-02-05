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
    title: "Vidéo 4K",
    description:
      "Qualité cinématographique avec une stabilisation fluide et des effets premium.",
  },
  {
    title: "Grande capacité",
    description:
      "Jusqu'à 10 personnes par session pour des vidéos de groupe spectaculaires.",
  },
  {
    title: "Rendu premium",
    description:
      "Slow motion, effets et branding intégrés pour un rendu spectaculaire.",
  },
  {
    title: "Équipe dédiée",
    description:
      "Animateur et technicien présents pour gérer le flux et la sécurité.",
  },
];

const formules = [
  {
    title: "Formule 4h",
    description: "Idéale pour un événement corporate ou un lancement.",
    list: ["Vidéos 4K illimitées", "Branding vidéo", "Partage immédiat"],
  },
  {
    title: "Formule 6h",
    description: "Couverture complète avec scénographie premium.",
    list: ["Décor personnalisé", "Animateur dédié", "Livraison rapide"],
  },
];

const inclusions = [
  {
    title: "Inclus",
    list: [
      "Plateforme Air360",
      "Éclairage studio",
      "Montage vidéo automatique",
      "Galerie privée",
    ],
  },
  {
    title: "Options",
    list: [
      "Animation DJ",
      "Backdrops premium",
      "Confettis ou fumée",
      "Écran de diffusion live",
    ],
  },
  {
    title: "Livraison",
    list: ["Exports HD", "Liens de partage", "Archivage sécurisé"],
  },
];

const steps = [
  {
    title: "Brief technique",
    description:
      "Validation du lieu, du flux de passage et des contraintes de sécurité.",
  },
  {
    title: "Préparation graphique",
    description:
      "Création des templates vidéo et validation avant l'événement.",
  },
  {
    title: "Installation",
    description:
      "Mise en place de la plateforme, éclairage et tests complets.",
  },
  {
    title: "Animation",
    description:
      "Gestion du passage des invités et accompagnement dynamique.",
  },
  {
    title: "Livraison",
    description:
      "Partage immédiat et envoi des vidéos HD après l'événement.",
  },
];

const requirements = [
  {
    title: "Espace requis",
    description: "Minimum 5 m2 pour sécuriser la plateforme et la rotation.",
  },
  {
    title: "Accès électrique",
    description: "Deux prises 220V ou un circuit dédié recommandé.",
  },
  {
    title: "Hauteur",
    description: "Hauteur sous plafond de 3 m recommandée.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/airbooth.webp", alt: "Air360 booth" },
  { src: "/images/360booth.webp", alt: "Plateforme 360" },
  { src: "/images/fond 360.webp", alt: "Décor 360" },
  { src: "/images/voguebooth.webp", alt: "Décor premium" },
];

const videos = [
  {
    src: "/videos/compress-TOUR-EIFFEL-FINAL.mp4",
    type: "video/mp4",
    title: "Air360 en action",
    poster: "/images/airbooth.webp",
  },
];

const faq = [
  {
    question: "Quelle différence entre 360 et Air360 ?",
    answer:
      "Air360 propose une plateforme plus large, une qualité vidéo 4K et une capacité jusqu'à 10 personnes.",
  },
  {
    question: "La sécurité est-elle assurée ?",
    answer:
      "Oui, une zone dédiée est sécurisée et un animateur supervise chaque session.",
  },
  {
    question: "Peut-on personnaliser l'habillage ?",
    answer:
      "Oui, nous intégrons votre branding, logo et animations sur les vidéos.",
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

export default function Air360Booth() {
  return (
    <Layout
      metaProps={{
        title: "Location Air360 Booth à Paris | MySelfieBooth",
        description:
          "Air360 Booth : vidéos 4K immersives, grande capacité et animation premium. Idéal pour événements corporate, soirées VIP et lancements de marque.",
        ogImage: "/images/airbooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/air360booth",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Ultra immersif"
          title="Air360 Booth : l'expérience vidéo 4K grand format"
          description="Offrez une animation spectaculaire avec une plateforme 360 premium, des vidéos 4K et un rendu cinématographique."
          bullets={[
            "Vidéos 4K et slow motion",
            "Jusqu'à 10 personnes par session",
            "Animateur dédié et sécurité assurée",
          ]}
          primaryCta={{
            label: "Réserver Air360",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/airbooth.webp"
          imageAlt="Air360 Booth MySelfieBooth"
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
              title="Une animation spectaculaire"
              lead="Air360 combine capacité, qualité vidéo et effet waouh."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des packs adaptés à vos besoins"
              lead="Des durées flexibles pour s'adapter à votre événement."
            >
              <FeatureGrid items={formules} columns={2} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Prestation clé en main"
              lead="Tout est compris pour une animation fluide et premium."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Notre organisation"
              lead="Une coordination complète pour un résultat sans stress."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences techniques"
              title="Pré-requis sur site"
              lead="Nous validons ces éléments avant l'installation."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Exemples Air360"
              lead="Des installations premium pour des vidéos mémorables."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Air360 en situation réelle"
              lead="Un extrait pour visualiser l'expérience immersive."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Des clients conquis"
              lead="Nos retours d'expérience sur les activations Air360."
            >
              <ProofSection
                stats={[
                  { value: "90+", label: "activations Air360" },
                  { value: "4.9/5", label: "note moyenne" },
                  { value: "10", label: "personnes par vidéo" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Le rendu était impressionnant, les vidéos ont fait le tour des réseaux.",
                    name: "Hugo P.",
                    role: "Lancement produit",
                  },
                  {
                    quote:
                      "Le format grand groupe a parfaitement fonctionné pour notre team building.",
                    name: "Sarah L.",
                    role: "RH",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Tout ce qu'il faut savoir pour réserver."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Envie d'une animation spectaculaire ?"
        description="Contactez-nous pour une proposition Air360 sur-mesure."
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
