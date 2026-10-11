import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.videobooth;

const faq = [
  {
    question: "Qu'est-ce qu'un 360 Booth ou Spinner 360 ?",
    answer:
      "Le 360 Booth est une plateforme autour de laquelle une caméra tourne pour produire une courte vidéo dynamique des participants. Il est aussi recherché sous les noms Spinner 360 ou Video Booth 360.",
  },
  {
    question: "Combien coûte la location d'un 360 Booth ?",
    answer:
      "La location démarre à 500 €. Le prix final dépend du lieu, de la durée, du niveau de personnalisation, de l'accompagnement et des options retenues.",
  },
  {
    question: "Combien de personnes peuvent monter sur le 360 Booth ?",
    answer:
      "La capacité dépend du modèle et de la configuration prévue. Le nombre de personnes autorisé est confirmé avant l'événement afin de respecter les conditions de sécurité et le rendu vidéo.",
  },
  {
    question: "Peut-on personnaliser les vidéos 360 avec un logo ?",
    answer:
      "Oui. Un habillage graphique, un logo, des couleurs ou un message peuvent être intégrés au rendu selon la formule et le projet.",
  },
  ...(basePage.faq || []),
];

const videoPage = {
  ...basePage,
  title: "Location 360 Booth vidéo 4K dès 500 €",
  description:
    "Louez un 360 Booth dès 500 € pour mariage, anniversaire et entreprise : vidéos 4K, personnalisation, installation et animateur selon la formule.",
  highlights: ["À partir de 500 €", "Vidéo 4K", "Mariage & entreprise"],
  sections: [
    {
      anchor: "spinner-360",
      eyebrow: "360 Booth & Spinner 360",
      title: "Une plateforme vidéo 360 pour créer des clips dynamiques",
      text:
        "Le 360 Booth, parfois recherché comme Spinner 360, filme les invités autour de la plateforme pour produire des vidéos courtes et personnalisées. Il convient aux mariages, anniversaires, soirées d'entreprise et activations de marque.",
      cards: [
        {
          title: "Vidéo 4K",
          text: "Des séquences dynamiques pensées pour être regardées et partagées après l'événement.",
        },
        {
          title: "Personnalisation",
          text: "Habillage vidéo adapté au thème de l'événement ou à l'identité de la marque.",
        },
        {
          title: "Installation",
          text: "Une zone dégagée et sécurisée est préparée selon le lieu et le flux d'invités.",
        },
      ],
    },
    {
      anchor: "fonctionnement-360",
      eyebrow: "Fonctionnement",
      title: "Comment fonctionne une animation 360 Booth ?",
      text:
        "Les participants montent sur la plateforme pendant que le bras de prise de vue effectue une rotation autour d'eux. La séquence est ensuite transformée en vidéo courte avec les effets et éléments graphiques prévus dans le projet.",
      cards: [
        {
          title: "Placement",
          text: "Les participants se positionnent au centre de la plateforme et suivent les consignes de sécurité avant le déclenchement.",
        },
        {
          title: "Rotation caméra",
          text: "Le bras tourne autour du groupe pour créer un mouvement circulaire qui différencie le rendu d'une vidéo classique.",
        },
        {
          title: "Montage automatique",
          text: "Selon la configuration, ralentis, accélérations, musique ou habillage peuvent être appliqués au clip final.",
        },
        {
          title: "Récupération",
          text: "Les modalités de remise ou de partage sont définies selon la formule, le réseau disponible et l'organisation de l'événement.",
        },
      ],
    },
    {
      anchor: "360-vs-photobooth",
      eyebrow: "Comparatif",
      title: "360 Booth ou Photobooth : photo imprimée ou vidéo sociale ?",
      text:
        "Le Photobooth classique et le 360 Booth répondent à deux usages différents. Le premier est centré sur la photo et le souvenir physique ; le second privilégie le mouvement, la vidéo et l'effet spectaculaire. Les deux peuvent être complémentaires sur un grand événement.",
      cards: [
        {
          title: "Photobooth",
          text: "Le choix le plus simple pour les tirages, les groupes de tous âges et une expérience rapide à comprendre.",
        },
        {
          title: "360 Booth",
          text: "À privilégier lorsque l'ambiance, la vidéo et les contenus courts à partager sont au cœur de l'événement.",
        },
        {
          title: "Vogue Booth",
          text: "Une alternative lorsque l'objectif principal est un décor premium et des portraits éditoriaux plutôt qu'une vidéo en mouvement.",
        },
        {
          title: "Air360",
          text: "Pour les projets nécessitant une capacité supérieure ou un effet plus grand format, l'Air360 peut être étudié selon la configuration.",
        },
      ],
    },
    {
      anchor: "securite-360",
      eyebrow: "Sécurité & exploitation",
      title: "Préparer un espace sécurisé autour du 360 Booth",
      text:
        "Une plateforme 360 a besoin d'une zone dégagée autour du bras en rotation. L'installation doit tenir compte du sol, de la circulation, de la distance avec les tables ou structures et du comportement attendu des participants.",
      cards: [
        {
          title: "Périmètre dégagé",
          text: "La rotation ne doit pas croiser un passage, une file d'attente ou du mobilier placé trop près de la plateforme.",
        },
        {
          title: "Sol stable",
          text: "Une surface plane améliore la stabilité du dispositif et le confort des participants pendant la séquence.",
        },
        {
          title: "Capacité respectée",
          text: "Le nombre de participants sur la plateforme doit rester conforme à la configuration retenue pour préserver sécurité et qualité vidéo.",
        },
        {
          title: "Accompagnement",
          text: "Un animateur est particulièrement utile pour gérer les entrées, les poses et le rythme sur les événements à fort passage.",
        },
      ],
    },
    {
      anchor: "personnalisation-video-360",
      eyebrow: "Branding & rendu",
      title: "Personnaliser une vidéo 360 pour un mariage ou une entreprise",
      text:
        "L'habillage vidéo permet de relier le clip à l'événement. Pour un mariage, il peut reprendre les prénoms, la date et les couleurs. Pour une entreprise, il peut intégrer le logo, une campagne ou un message de marque selon le brief.",
      cards: [
        {
          title: "Overlay graphique",
          text: "Un cadre, des éléments visuels ou un message peuvent être intégrés au montage final selon la formule.",
        },
        {
          title: "Musique & rythme",
          text: "Le style du clip peut être adapté à une ambiance festive, premium ou corporate dans les limites prévues par le projet.",
        },
        {
          title: "Branding entreprise",
          text: "Logo, couleurs et identité visuelle permettent d'utiliser le contenu comme prolongement d'une activation de marque.",
        },
        {
          title: "Décor autour de la plateforme",
          text: "Fond, éclairage ou éléments de scène peuvent renforcer la cohérence visuelle lorsque l'espace disponible le permet.",
        },
      ],
    },
    {
      anchor: "flux-360",
      eyebrow: "Flux invités",
      title: "Gérer l'attente et le nombre de participants sur une animation 360",
      text:
        "Une vidéo 360 demande plus de temps qu'une simple photo. Pour un grand nombre d'invités, il faut donc réduire les hésitations, préparer les groupes avant leur passage et organiser une zone d'attente qui ne gêne pas le reste de l'événement.",
      cards: [
        {
          title: "Groupes prêts avant le passage",
          text: "Préparer les participants pendant la séquence précédente réduit fortement les temps morts entre deux vidéos.",
        },
        {
          title: "Consignes courtes",
          text: "Quelques mouvements simples donnent souvent un meilleur rendu qu'une chorégraphie complexe improvisée sur place.",
        },
        {
          title: "Zone d'attente",
          text: "La file doit rester visible et distincte de la zone de rotation afin de préserver la sécurité et le rythme.",
        },
        {
          title: "Durée adaptée",
          text: "La durée d'ouverture doit tenir compte du nombre attendu de passages plutôt que du seul horaire général de l'événement.",
        },
      ],
    },
    ...basePage.sections,
  ],
  faq,
  relatedLinks: [
    { label: "Photobooth classique", href: "/prestations/photobooth/" },
    { label: "Vogue Booth", href: "/prestations/voguebooth/" },
    { label: "Air360 grand format", href: "/prestations/air360booth/" },
    { label: "Animations pour entreprise", href: "/evenements/corporates/" },
    { label: "Animations pour mariage", href: "/evenements/mariages/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location 360 Booth dès 500 € | Vidéo 4K",
    description:
      "Location 360 Booth dès 500 € : vidéos 4K personnalisées pour mariage, anniversaire et entreprise, avec installation et animateur selon formule.",
    ogTitle: "Location 360 Booth vidéo 4K | MySelfieBooth",
    ogDescription:
      "Une animation vidéo 360 personnalisable pour mariage, soirée et événement d'entreprise.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] === "Service") {
        return {
          ...entry,
          name: "Location 360 Booth vidéo 4K",
          offers: {
            ...(entry.offers || {}),
            price: "500",
            priceCurrency: "EUR",
            description: "Tarif à partir de 500 euros selon la date, le lieu et la formule.",
          },
        };
      }

      if (entry["@type"] === "FAQPage") {
        return {
          ...entry,
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        };
      }

      return entry;
    }),
  },
};

export default function Videobooth() {
  return <MarketingPage page={videoPage} />;
}
