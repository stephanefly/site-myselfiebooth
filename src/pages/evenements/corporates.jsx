import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.corporates;

const searchIntentSection = {
  anchor: "photobooth-entreprise",
  eyebrow: "Entreprise, salon & séminaire",
  title: "Location photobooth entreprise pour salon, séminaire et soirée corporate",
  text:
    "Pour une soirée d'entreprise, un séminaire, un salon ou un lancement de produit, le Photobooth doit être rapide à comprendre, visible et cohérent avec votre marque. Nous adaptons la machine, la personnalisation, le flux invités et la logistique au format de votre événement.",
  cards: [
    {
      title: "Photobooth entreprise",
      text: "Photos personnalisées, souvenirs et galerie pour collaborateurs, clients ou partenaires.",
    },
    {
      title: "Salon professionnel",
      text: "Animation pensée pour attirer sur le stand sans créer une file d'attente trop longue.",
    },
    {
      title: "Séminaire",
      text: "Un moment collectif facile à intégrer à une pause, un cocktail ou une soirée interne.",
    },
    {
      title: "Lancement de produit",
      text: "Habillage visuel, logo et contenus adaptés à l'univers de la marque et de l'opération.",
    },
  ],
};

const corporateOffersSection = {
  anchor: "offres-corporate",
  eyebrow: "Offres Corporate",
  title: "Des offres pensées par objectif, pas seulement par machine",
  text:
    "Pour les entreprises et les agences, nous construisons la prestation autour du résultat attendu : engagement, contenu social, image premium ou activation de marque. Les tarifs sont ajustés au brief, au lieu, à la durée et au niveau de personnalisation.",
  cards: [
    {
      title: "Brand Experience — dès 900 € HT",
      text: "Photobooth ou Miroirbooth, personnalisation de marque, installation, accompagnement, galerie et bilan post-événement selon le dispositif.",
    },
    {
      title: "Social Content — dès 1 090 € HT",
      text: "360 Booth ou Vogue Booth, habillage personnalisé et contenus courts pensés pour être récupérés et réutilisés après l'événement.",
    },
    {
      title: "Vogue Portrait Studio — dès 900 € HT",
      text: "Mise en scène lumineuse, rendu éditorial, personnalisation et configuration adaptée aux galas, lancements et opérations image.",
    },
    {
      title: "Photobooth IA — projet pilote",
      text: "Transformation visuelle assistée par IA et univers de marque sur étude. Le dispositif, les rendus et les règles de transparence sont validés avant commercialisation.",
    },
  ],
};

const useCasesSection = {
  anchor: "cas-usage-entreprise",
  eyebrow: "Cas d'usage",
  title: "Quel photobooth choisir selon l'objectif de l'événement d'entreprise ?",
  text:
    "Une animation corporate performante commence par l'objectif. Attirer sur un stand, créer un souvenir collaborateurs, produire du contenu social ou installer une expérience premium ne nécessite pas le même parcours ni la même machine.",
  cards: [
    {
      title: "Salon professionnel",
      text: "Privilégiez un parcours rapide, visible depuis l'allée, avec une personnalisation lisible et un emplacement qui ne bloque pas le stand.",
    },
    {
      title: "Séminaire & team building",
      text: "Le Photobooth ou le Miroirbooth fonctionnent bien comme animation collective pendant une pause, un cocktail ou la soirée de clôture.",
    },
    {
      title: "Lancement de produit",
      text: "Le Vogue Booth, le 360 Booth ou une activation sur mesure peuvent produire un contenu plus visuel et cohérent avec un univers de campagne.",
    },
    {
      title: "Soirée clients ou collaborateurs",
      text: "Tirages personnalisés, galerie et branding permettent d'associer le souvenir de la soirée à l'identité de l'entreprise.",
    },
  ],
};

const innovationSection = {
  anchor: "event-tech",
  eyebrow: "Event-Tech & Innovation",
  title: "Des expériences interactives à intégrer aux activations de marque",
  text:
    "Nous développons une approche plus logicielle de l'animation événementielle : automatisation, personnalisation avancée et expériences interactives. Les nouveautés sont proposées sur étude lorsqu'elles apportent une vraie valeur au parcours invité.",
  cards: [
    {
      title: "AI Sticker & portrait augmenté",
      text: "Concept pilote de transformation ou stylisation d'un portrait dans un univers de marque, avec rendus validés avant l'événement.",
    },
    {
      title: "Live Wall interactif",
      text: "Affichage dynamique des contenus créés pendant l'événement sur écran ou mur dédié, sous réserve de validation technique du lieu.",
    },
    {
      title: "Lead Capture",
      text: "Collecte de coordonnées ou qualification de contacts possible sur projet, avec parcours, consentement et destination des données définis en amont.",
    },
    {
      title: "Automatisation post-événement",
      text: "Remise des médias, synthèse d'activité et reporting peuvent être automatisés lorsque le dispositif permet de mesurer les données utiles.",
    },
  ],
};

const briefSection = {
  anchor: "brief-corporate",
  eyebrow: "Brief efficace",
  title: "Les informations à préparer pour obtenir un devis corporate précis",
  text:
    "Plus le brief est clair, plus la proposition peut être pertinente. Les informations essentielles sont la date, le lieu, les horaires, le nombre attendu de participants, l'objectif de l'animation, les contraintes de marque et les livrables souhaités.",
  cards: [
    {
      title: "Objectif business",
      text: "Engagement, trafic stand, contenu social, souvenir collaborateurs, image premium ou collecte de contacts : l'objectif oriente le dispositif.",
    },
    {
      title: "Flux attendu",
      text: "Le nombre de participants et la durée disponible permettent d'estimer le temps de passage et le niveau d'accompagnement nécessaire.",
    },
    {
      title: "Charte graphique",
      text: "Logo, couleurs, typographies, messages et contraintes de validation doivent être transmis assez tôt pour préparer le rendu.",
    },
    {
      title: "Contraintes du lieu",
      text: "Accès, badges, sécurité, quai, ascenseur, parking, alimentation, Wi-Fi et horaires techniques sont intégrés à la préparation.",
    },
  ],
};

const dataSection = {
  anchor: "donnees-lead-capture",
  eyebrow: "Données & lead capture",
  title: "Collecte de contacts : cadrer le consentement avant l'événement",
  text:
    "Lorsqu'une activation inclut une collecte de coordonnées, le parcours doit rester clair pour le participant. Les champs demandés, la finalité, le consentement, le stockage et la destination des données doivent être définis avec le client avant la mise en production.",
  cards: [
    {
      title: "Champs utiles uniquement",
      text: "Limiter la collecte aux informations nécessaires réduit la friction et accélère le passage sur le dispositif.",
    },
    {
      title: "Consentement explicite",
      text: "Le participant doit comprendre ce qu'il accepte et pour quelle utilisation les données sont demandées.",
    },
    {
      title: "Destination des données",
      text: "Export, transmission ou intégration éventuelle doivent être définis en amont afin d'éviter les traitements improvisés après l'événement.",
    },
    {
      title: "Parcours alternatif",
      text: "Selon le projet, il peut être pertinent de séparer la création du contenu de l'inscription marketing pour conserver une expérience fluide.",
    },
  ],
};

const corporateReportSection = {
  anchor: "rapport-corporate-automatique",
  eyebrow: "Reporting post-événement",
  title: "Rapport corporate automatique après votre événement",
  text:
    "Pour les formules corporate concernées, un rapport synthétique peut être généré après l'événement afin de mesurer l'utilisation de l'animation et de faciliter votre bilan interne. Les indicateurs dépendent des fonctions réellement activées et des données disponibles sur la prestation.",
  cards: [
    {
      title: "Activité de l'animation",
      text: "Nombre de sessions, photos ou vidéos produites et volume global d'utilisation lorsque ces données sont disponibles.",
    },
    {
      title: "Partage des contenus",
      text: "Téléchargements, QR codes, emails ou autres actions de partage peuvent être intégrés au bilan lorsque le dispositif permet de les mesurer.",
    },
    {
      title: "Temps forts",
      text: "Identification des périodes de forte utilisation et des principaux volumes de contenus afin de mieux comprendre le rythme de l'animation.",
    },
    {
      title: "Livrable exploitable",
      text: "Un bilan clair à transmettre à votre équipe, votre agence ou votre client avec les indicateurs disponibles et les contenus remis après l'événement.",
    },
  ],
};

const procurementSection = {
  anchor: "organisation-achat",
  eyebrow: "Organisation & achat",
  title: "Une prestation compatible avec les contraintes d'une entreprise ou d'une agence",
  text:
    "Les projets corporate impliquent souvent plusieurs interlocuteurs : communication, événementiel, achats, agence, lieu, sécurité ou production. Nous cadrons les informations opérationnelles et les livrables pour faciliter la validation avant le jour J.",
  cards: [
    {
      title: "Devis détaillé",
      text: "Machine, durée, personnalisation, options, déplacement et conditions spécifiques sont distingués pour faciliter la validation interne.",
    },
    {
      title: "Référent projet",
      text: "Un interlocuteur identifié limite les pertes d'information entre le client, l'agence, le lieu et l'équipe terrain.",
    },
    {
      title: "Planning de validation",
      text: "Les éléments graphiques et techniques sont idéalement validés avant la semaine de l'événement afin de garder une marge de test.",
    },
    {
      title: "Livrables définis",
      text: "Galerie, médias, exports, reporting ou autres éléments remis après l'événement sont précisés avant confirmation.",
    },
  ],
};

const reliabilitySection = {
  anchor: "fiabilite",
  eyebrow: "Fiabilité & exploitation",
  title: "Une prestation préparée pour réduire les imprévus le jour J",
  text:
    "Sur un événement professionnel, la qualité du rendu ne suffit pas : la préparation, les accès, les tests, le flux invités et la remise des contenus doivent être cadrés avant l'ouverture.",
  cards: [
    {
      title: "Contrôles avant événement",
      text: "Machine, personnalisation, accès, horaires, alimentation et configuration sont vérifiés avant la prestation.",
    },
    {
      title: "Tests après installation",
      text: "La configuration est testée sur place avant l'ouverture de l'animation afin de limiter les incidents de dernière minute.",
    },
    {
      title: "Interlocuteur identifié",
      text: "Un référent est défini pour la prestation afin de simplifier les échanges entre votre équipe, le lieu et MySelfieBooth.",
    },
    {
      title: "Bilan post-événement",
      text: "Selon le dispositif, nous pouvons restituer les contenus produits et des indicateurs disponibles comme le nombre de sessions, photos ou vidéos.",
    },
  ],
};

const faq = [
  {
    question: "Quel photobooth choisir pour un événement d'entreprise ?",
    answer:
      "Le Photobooth convient aux tirages et à un usage simple, le Miroirbooth à une mise en scène premium, le 360 Booth à la vidéo sociale et le Vogue Booth à un photocall très visuel. Le choix dépend surtout de l'objectif et du flux attendu.",
  },
  {
    question: "Peut-on personnaliser le photobooth avec notre charte graphique ?",
    answer:
      "Oui. Logo, couleurs, cadre photo, messages et plusieurs éléments de l'expérience peuvent être adaptés selon la formule et les fichiers fournis.",
  },
  {
    question: "Peut-on collecter des leads avec un photobooth ?",
    answer:
      "Une mécanique de lead capture peut être étudiée. Les champs, le consentement, le stockage et la destination des données doivent être définis avant l'événement.",
  },
  {
    question: "Fournissez-vous un reporting après l'événement ?",
    answer:
      "Selon le dispositif, des indicateurs comme le nombre de sessions, de contenus produits ou certaines actions de partage peuvent être consolidés dans un bilan post-événement.",
  },
  {
    question: "Intervenez-vous sur les salons professionnels en Île-de-France ?",
    answer:
      "Oui. Nous étudions les prestations sur salons, séminaires, lancements et soirées corporate à Paris et en Île-de-France selon le lieu, les accès et le calendrier.",
  },
  ...(basePage.faq || []),
];

const corporatePage = {
  ...basePage,
  title: "Photobooth entreprise & activations de marque",
  description:
    "Location photobooth entreprise pour salon, séminaire, soirée corporate et lancement de produit en Île-de-France, avec branding, 360 Booth, Vogue Booth et reporting selon le dispositif.",
  highlights: ["Offres dès 900 € HT", "Brand Experience", "Event-Tech & reporting"],
  sections: [
    searchIntentSection,
    corporateOffersSection,
    useCasesSection,
    innovationSection,
    briefSection,
    dataSection,
    corporateReportSection,
    procurementSection,
    reliabilitySection,
    ...basePage.sections,
  ],
  faq,
  relatedLinks: [
    { label: "Prix Photobooth en Île-de-France en 2026", href: "/prix-photobooth-ile-de-france-2026/" },
    { label: "Guide photobooth entreprise", href: "/blog/animation-photobooth-entreprise/" },
    { label: "Quel photobooth pour un salon ou séminaire ?", href: "/blog/photobooth-salon-seminaire/" },
    { label: "Comparer les animations", href: "/prestations/" },
    { label: "Zones d'intervention", href: "/zones-intervention/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Photobooth Entreprise | MySelfieBooth",
    description:
      "Location photobooth entreprise pour salon, séminaire, soirée corporate et activation de marque : branding, 360 Booth, Vogue Booth et reporting.",
    ogTitle: "Photobooth entreprise & activations de marque",
    ogDescription:
      "Des animations photo et vidéo pensées pour l'engagement, le contenu de marque, l'innovation et le reporting post-événement.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Location Photobooth entreprise et activation de marque",
        description:
          "Photobooth, 360 Booth, Vogue Booth et Event-Tech pour entreprise, salon, séminaire et activation de marque avec branding et reporting selon le dispositif.",
        offers: {
          "@type": "Offer",
          price: "900",
          priceCurrency: "EUR",
          description: "Offres corporate à partir de 900 euros HT, ajustées selon le brief, le lieu, la durée et la personnalisation.",
        },
      };
    }),
  },
};

export default function Corporates() {
  return <MarketingPage page={corporatePage} />;
}
