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
    title: "Effet viral",
    description:
      "Des vidéos 360 dynamiques prêtes à être partagées sur les réseaux sociaux.",
  },
  {
    title: "Habillage vidéo",
    description:
      "Intégration de votre logo, animations et musiques pour un rendu unique.",
  },
  {
    title: "Expérience immersive",
    description:
      "Les invités montent sur la plateforme et deviennent acteurs de la vidéo.",
  },
  {
    title: "Animateur dédié",
    description:
      "Un expert guide les participants et sécurise la prise de vue.",
  },
];

const formules = [
  {
    title: "Formule 3h",
    description: "Idéale pour un cocktail ou un lancement produit.",
    list: ["Vidéos illimitées", "Habillage personnalisé", "Partage instantané"],
  },
  {
    title: "Formule 5h",
    description: "Une couverture complète de la soirée.",
    list: ["Animateur sur place", "Livraison express", "Option slow motion"],
  },
];

const inclusions = [
  {
    title: "Inclus dans la prestation",
    list: [
      "Plateforme 360 sécurisée",
      "Éclairage professionnel",
      "Montage vidéo automatisé",
      "Galerie privée",
    ],
  },
  {
    title: "Options disponibles",
    list: [
      "Décor scénographié",
      "Hôtesse dédiée",
      "Template sur-mesure",
      "Écran de diffusion live",
    ],
  },
  {
    title: "Livraison des contenus",
    list: ["Liens de partage", "Exports HD", "Archivage 30 jours"],
  },
];

const steps = [
  {
    title: "Brief créatif",
    description:
      "Définition du style vidéo et des éléments graphiques à intégrer.",
  },
  {
    title: "Personnalisation",
    description:
      "Création du template vidéo et validation avant l'événement.",
  },
  {
    title: "Installation",
    description:
      "Montage, sécurisation de la plateforme et tests techniques.",
  },
  {
    title: "Animation",
    description:
      "Prise en main des invités pour maximiser les vidéos créées.",
  },
  {
    title: "Livraison",
    description:
      "Partage instantané et envoi des contenus HD après l'événement.",
  },
];

const requirements = [
  {
    title: "Espace requis",
    description: "Minimum 4 m2 pour assurer la sécurité autour de la plateforme.",
  },
  {
    title: "Accès électrique",
    description: "Une prise 220V dédiée à proximité immédiate.",
  },
  {
    title: "Hauteur sous plafond",
    description: "Hauteur minimale de 2,5 m recommandée.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/360booth.webp", alt: "Plateforme 360" },
  { src: "/images/fond 360.webp", alt: "Décor 360" },
  { src: "/images/airbooth.webp", alt: "Ambiance 360" },
  { src: "/images/voguebooth.webp", alt: "Ambiance premium" },
];

const videos = [
  {
    src: "/videos/compress-TOUR-EIFFEL-FINAL.mp4",
    type: "video/mp4",
    title: "Animation 360 Booth",
    poster: "/images/fond 360.webp",
  },
];

const faq = [
  {
    question: "Combien de personnes peuvent monter sur la plateforme ?",
    answer:
      "Jusqu'à 4 personnes par session, selon la configuration et la sécurité du lieu.",
  },
  {
    question: "Le montage vidéo est-il automatique ?",
    answer:
      "Oui, la vidéo est générée automatiquement avec votre habillage graphique.",
  },
  {
    question: "La plateforme est-elle sécurisée ?",
    answer:
      "Oui, nous installons une zone sécurisée et un animateur supervise chaque prise.",
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

export default function Videobooth() {
  return (
    <Layout
      metaProps={{
        title: "Location 360 Booth à Paris | MySelfieBooth",
        description:
          "Créez des vidéos 360 immersives pour vos événements. Habillage personnalisé, partage instantané et animation premium par MySelfieBooth.",
        ogImage: "/images/360booth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/videobooth",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Expérience 360"
          title="360 Booth : la vidéo immersive qui marque les esprits"
          description="Des vidéos spectaculaires en slow motion, des habillages graphiques sur-mesure et une animation dynamique pour booster votre événement."
          bullets={[
            "Vidéos 360 illimitées",
            "Habillage graphique personnalisé",
            "Partage instantané pour les invités",
          ]}
          primaryCta={{
            label: "Réserver un 360 Booth",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/360booth.webp"
          imageAlt="360 Booth MySelfieBooth"
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
              title="Une expérience immersive et virale"
              lead="Le 360 Booth transforme chaque invité en star et crée un contenu mémorable."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des packs adaptés à vos timings"
              lead="Choisissez la durée idéale pour votre événement."
            >
              <FeatureGrid items={formules} columns={2} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Service clé en main"
              lead="Tout ce qu'il faut pour une animation fluide et premium."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Comment se déroule l'animation"
              lead="Un accompagnement complet avant, pendant et après la prestation."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences techniques"
              title="Pré-requis pour le 360"
              lead="Nous validons ensemble ces éléments avant installation."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Aperçu des installations 360"
              lead="Des setups premium pour des vidéos impactantes."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Exemple de rendu"
              lead="Un extrait vidéo 360 pour visualiser l'expérience."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Des retours enthousiastes"
              lead="La preuve par l'expérience de nos clients."
            >
              <ProofSection
                stats={[
                  { value: "180+", label: "événements 360" },
                  { value: "95%", label: "taux de partage" },
                  { value: "4.8/5", label: "note moyenne" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Le 360 Booth a créé une animation spectaculaire, tout le monde voulait sa vidéo.",
                    name: "Maxime R.",
                    role: "Soirée privée",
                  },
                  {
                    quote:
                      "Rendu très pro avec notre logo intégré, parfait pour notre lancement produit.",
                    name: "Julia C.",
                    role: "Marketing",
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
        title="Envie d'un effet spectaculaire ?"
        description="Réservez votre 360 Booth et offrez une animation immersive à vos invités."
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
