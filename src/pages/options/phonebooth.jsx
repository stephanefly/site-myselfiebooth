import Layout from "../../components/Layout";
import HeroSplit from "../../components/longform/HeroSplit";
import Section from "../../components/longform/Section";
import FeatureGrid from "../../components/longform/FeatureGrid";
import Steps from "../../components/longform/Steps";
import GalleryGrid from "../../components/longform/GalleryGrid";
import VideoGrid from "../../components/longform/VideoGrid";
import FAQAccordion from "../../components/longform/FAQAccordion";
import CTASection from "../../components/longform/CTASection";
import TableOfContents from "../../components/longform/TableOfContents";
import SplitSection from "../../components/longform/SplitSection";
import BackToTop from "../../components/longform/BackToTop";

const avantages = [
  {
    title: "Souvenir émotion",
    description:
      "Les invités laissent un message audio authentique et spontané.",
  },
  {
    title: "Design rétro",
    description:
      "Une cabine vintage qui attire l'attention et se marie aux décors premium.",
  },
  {
    title: "Installation légère",
    description:
      "Un format autonome facile à intégrer près du photobooth.",
  },
  {
    title: "Livraison audio",
    description:
      "Les messages sont livrés et montés après l'événement.",
  },
];

const usages = [
  {
    title: "Mariages",
    description:
      "Des messages intimes et émouvants pour accompagner votre album photo.",
  },
  {
    title: "Anniversaires",
    description:
      "Un souvenir original et plein d'humour à réécouter.",
  },
  {
    title: "Corporate",
    description:
      "Collectez des témoignages collaborateurs ou des messages clients.",
  },
];

const steps = [
  {
    title: "Brief audio",
    description:
      "Nous définissons le message d'accueil et les instructions aux invités.",
  },
  {
    title: "Installation",
    description:
      "Mise en place rapide à proximité du photobooth ou d'un espace calme.",
  },
  {
    title: "Collecte",
    description:
      "Les invités enregistrent leurs messages en toute autonomie.",
  },
  {
    title: "Livraison",
    description:
      "Nous vous livrons l'ensemble des audios après l'événement.",
  },
];

const gallery = [
  { src: "/placeholders/placeholder-gallery-1.jpg", alt: "Galerie photobooth" },
  { src: "/placeholders/placeholder-gallery-2.jpg", alt: "Galerie evenement" },
  { src: "/images/phonebooth.webp", alt: "Phonebooth vintage" },
  { src: "/images/all_options.webp", alt: "Options premium" },
  { src: "/images/photobooth.webp", alt: "Photobooth" },
  { src: "/images/Welcomeboard.webp", alt: "Panneau de bienvenue" },
];

const faq = [
  {
    question: "Combien de messages peut-on enregistrer ?",
    answer:
      "Autant que nécessaire, la capacité est illimitée pendant la prestation.",
  },
  {
    question: "Les messages sont-ils montés ?",
    answer:
      "Nous livrons les fichiers audio et pouvons fournir un montage best-of sur demande.",
  },
  {
    question: "Le phonebooth nécessite-t-il une connexion ?",
    answer:
      "Non, l'enregistrement est autonome et ne nécessite pas d'accès réseau.",
  },
];

const toc = [
  { id: "presentation", label: "Présentation" },
  { id: "avantages", label: "Avantages" },
  { id: "usages", label: "Usages" },
  { id: "processus", label: "Déroulé" },
  { id: "galerie", label: "Galerie" },
  { id: "video", label: "Vidéo" },
  { id: "faq", label: "FAQ" },
];

export default function Phonebooth() {
  return (
    <Layout
      metaProps={{
        title: "Option Phonebooth audio | MySelfieBooth Paris",
        description:
          "Ajoutez une cabine phonebooth vintage pour enregistrer des messages audio. Un souvenir émotionnel complémentaire à votre photobooth.",
        ogImage: "/images/phonebooth.webp",
        ogUrl: "https://www.myselfiebooth-paris.fr/options/phonebooth",
      }}
    >
      <div id="top" className="page">
        <HeroSplit
          tag="Option audio"
          title="Phonebooth : capturez les voix de vos invités"
          description="Une cabine téléphonique vintage pour enregistrer des messages audio authentiques. Parfait pour accompagner les souvenirs photo et créer un best-of émotionnel."
          bullets={[
            "Messages audio illimités",
            "Design rétro premium",
            "Livraison des fichiers après l'événement",
          ]}
          primaryCta={{
            label: "Ajouter le phonebooth",
            href: "https://reservation.myselfiebooth-paris.fr",
            external: true,
          }}
          secondaryCta={{ label: "Voir les prestations", href: "/prestations" }}
          image="/images/phonebooth.webp"
          imageAlt="Phonebooth MySelfieBooth"
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
              id="avantages"
              eyebrow="Avantages"
              title="Une option émotionnelle"
              lead="Les messages audio complètent l'expérience photo avec une dimension intime."
            >
              <FeatureGrid items={avantages} columns={2} />
            </Section>

            <Section
              id="usages"
              variant="alt"
              eyebrow="Usages"
              title="Pour quels événements ?"
              lead="Le phonebooth s'adapte aux mariages, anniversaires et événements corporate."
            >
              <FeatureGrid items={usages} columns={3} />
            </Section>

            <Section
              id="processus"
              eyebrow="Déroulé"
              title="Comment ça fonctionne"
              lead="Une installation simple et une collecte fluide des messages."
            >
              <Steps steps={steps} />
            </Section>

            <Section
              id="galerie"
              variant="alt"
              eyebrow="Galerie"
              title="Exemples d'intégration"
              lead="Un élément rétro qui s'intègre parfaitement à votre scénographie."
            >
              <GalleryGrid images={gallery} />
            </Section>

            <Section
              id="video"
              eyebrow="Vidéo"
              title="Phonebooth en action"
              lead="Une vidéo pour visualiser l'option audio en situation."
            >
              <VideoGrid
                videos={[
                  {
                    src: "/videos/PUB_2024.mp4",
                    type: "video/mp4",
                    title: "Option phonebooth",
                    poster: "/placeholders/placeholder-video.jpg",
                  },
                ]}
              />
            </Section>

            <Section
              id="faq"
              eyebrow="FAQ"
              title="Questions fréquentes"
              lead="Tout ce qu'il faut savoir avant d'ajouter l'option phonebooth."
            >
              <FAQAccordion items={faq} />
            </Section>
          </div>
        </div>
      </div>

      <CTASection
        title="Envie d'un souvenir audio unique ?"
        description="Ajoutez le phonebooth à votre prestation photobooth."
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
