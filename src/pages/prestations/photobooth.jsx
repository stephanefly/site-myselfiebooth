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

const tarifs = [
  {
    title: "Formule 3h",
    description: "Idéale pour les formats courts et les cocktails.",
    list: ["Impressions illimitées", "Galerie privée", "Animateur dédié"],
  },
  {
    title: "Formule 5h",
    description: "Parfaite pour couvrir l'intégralité de la soirée.",
    list: ["Personnalisation des cadres", "Livraison incluse", "Assistance continue"],
  },
  {
    title: "Formule soirée",
    description: "Jusqu'à la fin de l'événement pour un maximum de souvenirs.",
    list: ["Temps étendu", "Support technique", "Livraison express"],
  },
];

const avantages = [
  {
    title: "Qualité studio",
    description:
      "Capteurs haute définition et éclairage constant pour un rendu impeccable.",
  },
  {
    title: "Expérience fluide",
    description:
      "Interface intuitive, déclenchement rapide et partage instantané des photos.",
  },
  {
    title: "Personnalisation premium",
    description:
      "Cadres photo, écran d'accueil et messages adaptés à votre événement.",
  },
  {
    title: "Accompagnement complet",
    description:
      "Un animateur veille au bon déroulement et à la satisfaction des invités.",
  },
];

const inclusions = [
  {
    title: "Tout est inclus",
    list: [
      "Impressions illimitées en double bande",
      "Galerie web sécurisée",
      "Fichiers HD livrés après l'événement",
      "Installation, désinstallation et transport",
    ],
  },
  {
    title: "Options compatibles",
    list: [
      "Livre d'or numérique",
      "Fond personnalisé ou mur floral",
      "Accessoires premium",
      "Phonebooth audio",
    ],
  },
  {
    title: "Support technique",
    list: [
      "Assistance pendant l'événement",
      "Hotline disponible",
      "Tests préalables sur site",
    ],
  },
];

const steps = [
  {
    title: "Validation du brief",
    description:
      "Nous définissons ensemble le timing, le lieu et l'ambiance souhaitée.",
  },
  {
    title: "Création graphique",
    description:
      "Nos designers préparent les cadres photo et écrans personnalisés.",
  },
  {
    title: "Installation sur place",
    description:
      "Montage complet et tests avant l'arrivée des invités.",
  },
  {
    title: "Animation et suivi",
    description:
      "Un animateur accompagne les invités pour maximiser les prises de vue.",
  },
  {
    title: "Livraison des contenus",
    description:
      "Accès aux photos HD et à la galerie privée sous 24h.",
  },
];

const requirements = [
  {
    title: "Espace requis",
    description: "2 à 3 m2 libres pour installer le photobooth et un fond photo.",
  },
  {
    title: "Accès électrique",
    description: "Une prise 220V standard à proximité immédiate.",
  },
  {
    title: "Temps de montage",
    description: "45 minutes pour installer et calibrer l'équipement.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/photobooth.webp", alt: "Photobooth classique" },
  { src: "/images/photobooth.webp", alt: "Interface photobooth" },
  { src: "/images/photobooth.webp", alt: "Impressions photobooth" },
  { src: "/images/miroirbooth.webp", alt: "Miroirbooth en complément" },
];

const videos = [
  {
    src: "/videos/PUB_2024.mp4",
    type: "video/mp4",
    title: "Photobooth en action",
    poster: "/images/photobooth.webp",
  },
];

const faq = [
  {
    question: "Quel format d'impression proposez-vous ?",
    answer:
      "Nous livrons des impressions en bande ou en format carte postale selon la personnalisation souhaitée.",
  },
  {
    question: "Les photos sont-elles accessibles après l'événement ?",
    answer:
      "Oui, un lien sécurisé vous est envoyé avec toutes les photos HD et les doubles imprimées.",
  },
  {
    question: "Peut-on installer le photobooth en extérieur ?",
    answer:
      "C'est possible sous réserve d'un abri et de conditions météo favorables, à valider ensemble.",
  },
  {
    question: "Combien d'invités peuvent utiliser le photobooth ?",
    answer:
      "Le flux est illimité, nos animateurs assurent la rotation pour que chacun profite de l'expérience.",
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

export default function Photobooth() {
  return (
    <Layout
      metaProps={{
        title: "Location Photobooth classique | MySelfieBooth Paris",
        description:
          "Louez un photobooth classique avec impressions illimitées, personnalisation premium et animateur sur place. Idéal pour mariages, soirées privées et événements corporate.",
        ogImage: "/images/photobooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/prestations/photobooth",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Best seller"
          title="Photobooth classique : l'animation photo incontournable"
          description="Des souvenirs imprimés en illimité, une expérience fluide pour vos invités et une personnalisation haut de gamme pour mettre en valeur votre événement."
          bullets={[
            "Impressions instantanées et doubles exemplaires",
            "Animateur dédié et support technique",
            "Galerie privée accessible sous 24h",
          ]}
          primaryCta={{
            label: "Réserver le photobooth",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les options", href: "/options" }}
          image="/images/photobooth.webp"
          imageAlt="Photobooth MySelfieBooth"
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
              title="Pourquoi choisir notre photobooth classique ?"
              lead="Une solution premium, simple à prendre en main, conçue pour maximiser les souvenirs.">
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="formules"
              variant="alt"
              eyebrow="Formules"
              title="Des packs clairs et flexibles"
              lead="Choisissez la durée qui correspond à votre timing et à votre budget."
            >
              <FeatureGrid items={tarifs} columns={3} />
            </Section>

            <Section
              id="inclusions"
              eyebrow="Inclus"
              title="Tout est prévu pour votre événement"
              lead="Un service clé en main avec options premium pour aller encore plus loin."
            >
              <FeatureGrid items={inclusions} columns={3} />
            </Section>

            <Section
              id="processus"
              variant="alt"
              eyebrow="Déroulé"
              title="Comment ça marche"
              lead="Un accompagnement simple et rassurant avant, pendant et après l'événement."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="exigences"
              eyebrow="Exigences techniques"
              title="Ce qu'il faut prévoir"
              lead="Nous nous adaptons à votre lieu, voici les prérequis principaux."
            >
              <FeatureGrid items={requirements} columns={3} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Aperçu des souvenirs livrés"
              lead="Des photos lumineuses, prêtes à être partagées."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Le photobooth en action"
              lead="Un extrait pour visualiser l'expérience sur place."
            >
              <VideoGrid videos={videos} />
            </Section>

            <Section
              id="preuves"
              variant="alt"
              eyebrow="Avis"
              title="Ils ont adoré l'expérience"
              lead="Des retours authentiques de clients particuliers et professionnels."
            >
              <ProofSection
                stats={[
                  { value: "350+", label: "prestations photobooth" },
                  { value: "4.9/5", label: "note moyenne" },
                  { value: "24h", label: "livraison des fichiers" },
                ]}
                testimonials={[
                  {
                    quote:
                      "Service impeccable, les impressions étaient magnifiques et l'équipe très disponible.",
                    name: "Camille R.",
                    role: "Mariage",
                  },
                  {
                    quote:
                      "Le photobooth a rythmé toute la soirée, les invités ont tous adoré.",
                    name: "Patrick L.",
                    role: "Anniversaire",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Toutes les réponses pour réserver en toute confiance."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Prêt à créer des souvenirs inoubliables ?"
        description="Nos équipes vous répondent rapidement avec une formule adaptée à votre événement."
        primaryCta={{
          label: "Demander un devis",
          href: "https://reservation.myselfiebooth-paris.fr",
          external: true,
        }}
        secondaryCta={{ label: "Explorer les événements", href: "/evenements" }}
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
