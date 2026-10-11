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
      anchor: "parcours-activation",
      eyebrow: "Parcours visiteur",
      title: "Concevoir l'activation comme un parcours, pas comme une simple borne",
      text:
        "Une activation efficace enchaîne plusieurs étapes sans friction : attirer, expliquer, faire participer, créer le contenu, permettre sa récupération et éventuellement mesurer l'interaction. Chaque étape doit rester compréhensible en quelques secondes dans le contexte réel de l'événement.",
      cards: [
        {
          title: "1. Attirer",
          text: "Le dispositif, son éclairage, son écran ou son décor doivent être suffisamment visibles pour être compris à distance.",
        },
        {
          title: "2. Participer",
          text: "Le nombre d'étapes doit rester limité. Plus le flux est important, plus l'expérience doit être directe et guidée.",
        },
        {
          title: "3. Récupérer",
          text: "Tirage, QR code, galerie ou remise des médias sont choisis selon le format et l'objectif du projet.",
        },
        {
          title: "4. Mesurer",
          text: "Lorsque le dispositif le permet, les sessions, volumes produits et actions disponibles peuvent alimenter le bilan post-événement.",
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
      anchor: "photobooth-ia",
      eyebrow: "Photobooth IA",
      title: "Comment peut fonctionner une expérience de photobooth assistée par IA ?",
      text:
        "Une expérience IA peut partir d'un portrait capturé sur place puis appliquer un univers visuel défini en amont. Le principal enjeu n'est pas seulement la génération : il faut maîtriser le temps de traitement, la cohérence du style, les cas d'échec, le rendu final et l'information donnée au participant.",
      cards: [
        {
          title: "Style préparé",
          text: "L'univers visuel est défini et testé avant l'événement afin d'éviter des résultats trop aléatoires en production.",
        },
        {
          title: "Temps de génération",
          text: "Le parcours doit intégrer le délai de traitement sans créer de file d'attente disproportionnée.",
        },
        {
          title: "Validation des rendus",
          text: "Des tests permettent d'identifier les limites du dispositif et les cas où un rendu doit être régénéré ou écarté.",
        },
        {
          title: "Transparence",
          text: "Le participant doit comprendre lorsqu'un contenu est transformé ou généré avec une technologie d'IA.",
        },
      ],
    },
    {
      anchor: "live-wall",
      eyebrow: "Affichage temps réel",
      title: "Live Wall : transformer les contenus produits en décor vivant",
      text:
        "Un Live Wall peut afficher progressivement les photos ou vidéos créées pendant l'événement. Ce type de dispositif augmente la visibilité de l'activation et crée un effet collectif, mais il nécessite de cadrer la connexion, l'écran, le format des médias et une éventuelle modération.",
      cards: [
        {
          title: "Écran ou mur dédié",
          text: "La résolution, l'orientation et la distance de lecture doivent être compatibles avec les contenus produits.",
        },
        {
          title: "Connexion",
          text: "Le fonctionnement en direct dépend du réseau disponible ou de l'architecture technique prévue pour transférer les médias.",
        },
        {
          title: "Modération",
          text: "Selon le contexte, les contenus peuvent nécessiter une validation avant d'être visibles publiquement sur le Live Wall.",
        },
        {
          title: "Habillage de marque",
          text: "Cadre, fond, logos et messages peuvent transformer l'affichage en prolongement visuel de la campagne.",
        },
      ],
    },
    {
      anchor: "lead-capture-event-tech",
      eyebrow: "Lead Generation",
      title: "Lead Capture : relier l'animation à un objectif marketing",
      text:
        "Sur un salon ou une activation commerciale, la collecte de contacts peut être intégrée au parcours sous réserve d'un cadre clair. La priorité reste de demander uniquement les informations utiles et d'éviter qu'un formulaire trop long dégrade l'expérience.",
      cards: [
        {
          title: "Qualification légère",
          text: "Email, société ou choix simple peuvent suffire selon l'objectif ; chaque champ supplémentaire augmente la friction.",
        },
        {
          title: "Consentement",
          text: "La finalité de la collecte doit être claire pour le participant avant validation du formulaire.",
        },
        {
          title: "Export défini",
          text: "Le format et la destination des données doivent être convenus avant l'événement pour faciliter le traitement ensuite.",
        },
        {
          title: "Mesure séparée",
          text: "Il est utile de distinguer le nombre de participations, les leads réellement consentis et les téléchargements de contenus.",
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
      anchor: "mesure-event-tech",
      eyebrow: "KPI & reporting",
      title: "Quels indicateurs suivre après une activation Event-Tech ?",
      text:
        "Le reporting doit rester lié à l'objectif initial. Mesurer uniquement le nombre de photos n'a pas beaucoup de sens si l'objectif était la collecte de contacts, le partage social ou le trafic sur un stand.",
      cards: [
        {
          title: "Participation",
          text: "Sessions, photos, vidéos ou créations produites indiquent le volume d'utilisation du dispositif lorsque ces données sont disponibles.",
        },
        {
          title: "Engagement",
          text: "Téléchargements, partages, interactions ou temps forts peuvent compléter le volume brut lorsque le parcours permet de les mesurer.",
        },
        {
          title: "Lead Capture",
          text: "Nombre de contacts consentis, taux de complétion du parcours et données exportées doivent être distingués des simples participations.",
        },
        {
          title: "Qualité opérationnelle",
          text: "Temps d'attente, incidents, pics d'utilisation et retours terrain aident à améliorer le dispositif pour une prochaine opération.",
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
    {
      question: "Qu'est-ce qu'un photobooth IA ?",
      answer:
        "Un photobooth IA est une expérience où un portrait peut être transformé ou stylisé dans un univers visuel défini. Chez MySelfieBooth, ces dispositifs sont étudiés sur projet avec tests et validation avant l'événement.",
    },
    {
      question: "Qu'est-ce qu'un Live Wall événementiel ?",
      answer:
        "Un Live Wall affiche progressivement des photos ou vidéos produites pendant l'événement sur un écran ou un mur dédié. Son fonctionnement dépend de la connexion, du matériel d'affichage et du besoin éventuel de modération.",
    },
    {
      question: "Quels KPI peut-on mesurer avec une activation photobooth ?",
      answer:
        "Selon le dispositif, il est possible de suivre des volumes comme les sessions ou contenus produits, certaines actions de partage, les leads consentis et les périodes de forte utilisation.",
    },
    {
      question: "Peut-on créer une activation entièrement sur mesure ?",
      answer:
        "Oui sur étude. Le niveau de personnalisation dépend du délai, du budget, des contraintes techniques, du lieu et des intégrations demandées.",
    },
  ],
  relatedLinks: [
    { label: "Offres pour entreprises et agences", href: "/evenements/corporates/" },
    { label: "Voir toutes les animations", href: "/prestations/" },
    { label: "Vogue Booth", href: "/prestations/voguebooth/" },
    { label: "360 Booth", href: "/prestations/videobooth/" },
    { label: "Photobooth classique", href: "/prestations/photobooth/" },
    { label: "Guide photobooth entreprise", href: "/blog/animation-photobooth-entreprise/" },
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
