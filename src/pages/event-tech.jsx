import MarketingPage from "../components/marketing/MarketingPage";
import { absoluteUrl, siteConfig } from "../data/site";

const eventTechPage = {
  key: "event-tech",
  eyebrow: "Innovation corporate",
  title: "Event-Tech & activations de marque",
  description:
    "Des expériences photo et vidéo pensées pour l'engagement, le contenu social et la marque : dispositifs classiques éprouvés, automatisations et innovations étudiées au cas par cas.",
  image: "/images/ai-from-real/activation-360-entreprise.webp",
  imageAlt: "Activation photo et vidéo MySelfieBooth lors d'un événement corporate",
  highlights: ["Brand Experience", "Social Content", "Innovation sur étude"],
  breadcrumbs: [
    { label: "Accueil", href: "/" },
    { label: "Entreprises", href: "/evenements/corporates/" },
    { label: "Event-Tech", href: "/event-tech/" },
  ],
  sections: [
    {
      anchor: "offres",
      eyebrow: "3 approches",
      title: "Choisir l'expérience selon l'objectif de l'événement",
      text:
        "Nous partons du résultat attendu plutôt que d'une machine imposée : créer un souvenir de marque, produire du contenu réutilisable ou tester une expérience plus innovante.",
      cards: [
        {
          title: "Brand Experience",
          text: "Photobooth, Miroirbooth ou dispositif premium avec identité visuelle, installation et parcours invités adaptés au brief.",
        },
        {
          title: "Social Content",
          text: "360 Booth, Vogue Booth et formats vidéo courts conçus pour être récupérés rapidement et réutilisés après l'événement.",
        },
        {
          title: "Innovation Event-Tech",
          text: "Expériences pilotes mêlant automatisation, interaction et création assistée par IA, uniquement après validation du rendu et du parcours.",
        },
      ],
    },
    {
      anchor: "innovation",
      eyebrow: "Innovation Lab",
      title: "Les expériences que nous étudions pour les marques et les agences",
      text:
        "Ces fonctions ne sont pas présentées comme des options standard. Elles sont proposées sur étude lorsque le contexte, le délai et le niveau de personnalisation permettent de garantir une expérience cohérente.",
      cards: [
        {
          title: "AI Sticker & portrait augmenté",
          text: "Transformation ou stylisation contrôlée d'un portrait dans un univers de marque, avec validation préalable des rendus avant mise en production.",
        },
        {
          title: "Live Wall interactif",
          text: "Affichage dynamique de contenus produits pendant l'événement sur un écran ou un mur dédié, selon la configuration technique du lieu.",
        },
        {
          title: "Lead Capture",
          text: "Collecte de coordonnées ou qualification d'un contact possible sur projet, avec parcours, consentement et destination des données définis avec le client.",
        },
        {
          title: "Automatisation post-événement",
          text: "Remise des médias, synthèse d'activité et reporting peuvent être automatisés lorsque les données nécessaires sont disponibles sur le dispositif choisi.",
        },
      ],
    },
    {
      anchor: "processus",
      eyebrow: "Avant le jour J",
      title: "Une innovation n'est utile que si elle reste simple pour l'invité",
      text:
        "Chaque activation doit rester rapide à comprendre, exploitable sur le lieu et compatible avec la réalité du flux visiteurs.",
      cards: [
        {
          title: "Rendu validé",
          text: "La direction artistique, les cadres, overlays ou transformations sont testés avant l'événement.",
        },
        {
          title: "Parcours invité cadré",
          text: "Nombre d'étapes, temps de passage, partage et récupération des contenus sont définis pour éviter les files inutiles.",
        },
        {
          title: "Données cadrées",
          text: "Si une collecte est activée, les champs, le consentement et la destination des données sont définis dans le brief.",
        },
        {
          title: "Livrables prévus",
          text: "Médias, galerie, exports et indicateurs disponibles sont précisés avant la prestation pour faciliter le bilan post-événement.",
        },
      ],
    },
    {
      anchor: "agences-marques",
      eyebrow: "Agences & marques",
      title: "Un dispositif construit pour être intégré à une activation plus large",
      text:
        "MySelfieBooth peut intervenir comme brique photo ou vidéo dans un lancement, un salon, une soirée corporate ou une opération de marque, avec un niveau de personnalisation adapté au projet.",
      cards: [
        {
          title: "Identité de marque",
          text: "Habillage, messages, univers visuel et contenu remis aux participants peuvent être alignés avec la campagne.",
        },
        {
          title: "Déploiement opérationnel",
          text: "Accès, horaires, alimentation, implantation, tests et rôle de l'équipe sont cadrés avant l'ouverture au public.",
        },
        {
          title: "Contenu réutilisable",
          text: "Les formats produits peuvent être pensés pour l'événement lui-même puis pour une utilisation interne ou sociale selon les droits prévus.",
        },
        {
          title: "Mesure selon dispositif",
          text: "Sessions, volumes produits, partages ou autres indicateurs peuvent être consolidés lorsqu'ils sont effectivement mesurables.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Les fonctions IA sont-elles déjà incluses dans toutes les prestations ?",
      answer:
        "Non. Les expériences IA sont étudiées comme des dispositifs pilotes ou personnalisés. Le rendu, le délai et la configuration technique doivent être validés avant commercialisation.",
    },
    {
      question: "Peut-on récupérer des contacts pendant un salon ?",
      answer:
        "Une mécanique de lead capture peut être étudiée. Les données demandées, le consentement, le stockage et l'usage prévu doivent être définis avec le client avant l'événement.",
    },
    {
      question: "Peut-on afficher les contenus en direct sur un écran ?",
      answer:
        "Oui sur certains projets, sous réserve de validation de la connexion, de l'écran, du flux de modération éventuel et de la configuration retenue.",
    },
    {
      question: "Travaillez-vous avec les agences événementielles ?",
      answer:
        "Oui. Le dispositif peut être intégré à une activation plus large avec un brief de marque, des contraintes de lieu et des livrables définis en amont.",
    },
  ],
  relatedLinks: [
    { label: "Offres pour entreprises et agences", href: "/evenements/corporates/" },
    { label: "Voir toutes les animations", href: "/prestations/" },
    { label: "Vogue Booth", href: "/prestations/voguebooth/" },
    { label: "360 Booth", href: "/prestations/videobooth/" },
  ],
  primaryCta: {
    label: "Parler de mon activation",
    href: siteConfig.quoteUrl,
    event: "cta_quote_click",
  },
  secondaryCta: {
    label: "Voir les offres entreprise",
    href: "/evenements/corporates/",
  },
  phoneCta: {
    label: siteConfig.phoneCtaLabel,
    href: siteConfig.phoneHref,
  },
  finalEyebrow: "Activation sur mesure",
  finalTitle: "Construisons une expérience utile à votre marque.",
  meta: {
    title: "Event-Tech & Activations de Marque | MySelfieBooth",
    description:
      "Event-Tech pour entreprises et agences : Brand Experience, Social Content, Live Wall, lead capture et expériences IA sur étude en Île-de-France.",
    ogTitle: "Event-Tech & activations de marque | MySelfieBooth",
    ogDescription:
      "Des expériences photo et vidéo corporate mêlant branding, contenu social, automatisation et innovations sur étude.",
    ogImage: "/images/ai-from-real/activation-360-entreprise.webp",
    ogUrl: absoluteUrl("/event-tech/"),
    robots: "index, follow",
  },
};

export default function EventTech() {
  return <MarketingPage page={eventTechPage} />;
}
