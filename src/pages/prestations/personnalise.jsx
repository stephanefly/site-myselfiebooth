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
    title: "Sur-mesure complet",
    description:
      "Une scénographie pensée pour vos objectifs marketing et votre identité visuelle.",
  },
  {
    title: "Branding avancé",
    description:
      "Intégration de votre logo, charte graphique et messages clés.",
  },
  {
    title: "Expérience immersive",
    description:
      "Décors, accessoires et animations adaptés à votre événement.",
  },
  {
    title: "Pilotage expert",
    description:
      "Chef de projet dédié pour coordonner toutes les équipes.",
  },
];

const formules = [
  {
    title: "Activation branding",
    description: "Idéal pour salons, lancements et pop-up stores.",
    list: ["Design custom", "Analytics de diffusion", "Captation photo"],
  },
  {
    title: "Scénographie premium",
    description: "Un décor immersif complet pour un événement signature.",
    list: ["Décor sur-mesure", "Vidéos personnalisées", "Équipe dédiée"],
  },
];

const inclusions = [
  {
    title: "Inclus",
    list: [
      "Chef de projet dédié",
      "Repérage technique",
      "Design graphique",
      "Pilotage sur site",
    ],
  },
  {
    title: "Options",
    list: [
      "Photocall branded",
      "Hologrammes",
      "Intégration CRM",
      "Rapport de performance",
    ],
  },
  {
    title: "Livraison",
    list: ["Exports HD", "Statistiques", "Kit média"],
  },
];

const steps = [
  {
    title: "Immersion",
    description:
      "Compréhension de vos objectifs, cibles et contraintes techniques.",
  },
  {
    title: "Concept créatif",
    description:
      "Proposition de concepts visuels et validation des maquettes.",
  },
  {
    title: "Production",
    description:
      "Fabrication des décors, templates et supports personnalisés.",
  },
  {
    title: "Installation",
    description:
      "Montage complet et coordination des équipes sur place.",
  },
  {
    title: "Analyse",
    description:
      "Livraison des contenus et reporting de performance.",
  },
];

const requirements = [
  {
    title: "Temps de préparation",
    description: "Prévoir 2 à 3 semaines pour la production sur-mesure.",
  },
  {
    title: "Accès au lieu",
    description: "Accès anticipé pour le montage et les tests techniques.",
  },
  {
    title: "Coordination",
    description: "Point de contact dédié côté client pour fluidifier la communication.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/all_presta.webp", alt: "Scénographie personnalisée" },
  { src: "/images/voguebooth.webp", alt: "Activation premium" },
  { src: "/images/360booth.webp", alt: "Contenus immersifs" },
  { src: "/images/3d Holo-site.webp", alt: "Option hologramme" },
];

const videos = [
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "Activation personnalisée",
    poster: "/images/photobooth.webp",
  },
];

const faq = [
  {
    question: "Quels délais pour une prestation personnalisée ?",
    answer:
      "Nous recommandons un délai de 3 à 4 semaines pour les projets sur-mesure afin d'assurer une production optimale.",
  },
  {
    question: "Pouvez-vous intégrer notre équipe créative ?",
    answer:
      "Oui, nous collaborons avec vos agences ou équipes internes pour assurer la cohérence du branding.",
  },
  {
    question: "Proposez-vous des rapports de performance ?",
    answer:
      "Oui, nous fournissons des statistiques de participation et des insights sur l'engagement.",
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

export default function Personnalise() {
  return (
    <Layout
      metaProps={{
        title: "Prestation personnalisée | MySelfieBooth Paris",
        description:
          "Créations photobooth sur-mesure pour marques et événements premium : scénographie, branding et coordination complète par MySelfieBooth.",
        ogImage: "/images/all_presta.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/personnalise",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Sur-mesure"
          title="Prestation personnalisée : créez une expérience signature"
          description="Nous concevons des activations photobooth uniques pour les marques et événements premium. Scénographie, branding, contenus et coordination complète."
          bullets={[
            "Direction artistique et branding avancé",
            "Production sur-mesure",
            "Pilotage de projet dédié",
          ]}
          primaryCta={{
            label: "Parler à un expert",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/all_presta.webp"
          imageAlt="Prestation personnalisée MySelfieBooth"
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
              title="Une activation sur-mesure pour vos objectifs"
              lead="Nous créons un dispositif aligné à votre marque et vos KPI."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des formats personnalisés"
              lead="Choisissez un niveau d'accompagnement adapté à votre projet."
            >
              <FeatureGrid items={formules} columns={2} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Un pilotage complet"
              lead="Nous coordonnons l'ensemble de la chaîne pour un résultat cohérent."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Notre méthode"
              lead="Un process éprouvé pour les projets sur-mesure."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences"
              title="Pré-requis"
              lead="Quelques éléments clés pour une activation réussie."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Inspirations sur-mesure"
              lead="Quelques exemples de scénographies et d'options premium."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Une activation en action"
              lead="Un aperçu des expériences personnalisées que nous produisons."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Ils nous font confiance"
              lead="Des marques et agences pour des activations premium."
            >
              <ProofSection
                stats={[
                  { value: "50+", label: "projets sur-mesure" },
                  { value: "15", label: "secteurs couverts" },
                  { value: "4.9/5", label: "note moyenne" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Une équipe créative et réactive, notre activation a dépassé nos attentes.",
                    name: "Élise M.",
                    role: "Chef de projet",
                  },
                  {
                    quote:
                      "Le dispositif était parfaitement aligné à notre marque.",
                    name: "Marc B.",
                    role: "Agence événementielle",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Les réponses aux questions sur les projets personnalisés."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt pour une activation sur-mesure ?"
        description="Contactez notre équipe pour concevoir votre projet premium."
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
