import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.mariages;

const faq = [
  {
    question: "Quel est le meilleur photobooth pour un mariage ?",
    answer:
      "Le meilleur choix dépend du souvenir recherché. Le Photobooth classique est le plus polyvalent pour les tirages, le Miroirbooth privilégie le rendu scénographique, le 360 Booth la vidéo et le Vogue Booth l'effet photocall premium.",
  },
  {
    question: "Combien coûte un photobooth pour un mariage ?",
    answer:
      "Le Photobooth démarre à 450 €. Le tarif final dépend de la machine, de la durée, du lieu, des impressions, de la personnalisation et des options souvenirs choisies.",
  },
  {
    question: "Quand installer le photobooth pendant un mariage ?",
    answer:
      "L'installation doit être terminée avant l'ouverture prévue de l'animation. Le meilleur moment d'utilisation dépend du déroulé, mais le cocktail, l'après-repas et le début de soirée sont souvent des périodes adaptées pour répartir les passages.",
  },
  {
    question: "Peut-on personnaliser les photos avec les prénoms des mariés ?",
    answer:
      "Oui. Le cadre photo peut intégrer les prénoms, la date, des couleurs, un monogramme ou d'autres éléments graphiques selon la formule choisie.",
  },
  {
    question: "Quel espace prévoir pour un photobooth de mariage ?",
    answer:
      "Il faut prévoir la machine, le recul des invités et une zone de circulation. Le Photobooth classique est plus compact qu'un Miroirbooth, un 360 Booth ou un Vogue Booth.",
  },
  ...(basePage.faq || []),
];

const mariagePage = {
  ...basePage,
  title: "Photobooth mariage : location, idées & animations",
  description:
    "Location de Photobooth pour mariage : tirages personnalisés, Miroirbooth, 360 Booth, Vogue Booth et options souvenirs selon votre réception.",
  sections: [
    {
      anchor: "choisir-photobooth-mariage",
      eyebrow: "Choisir son animation mariage",
      title: "Quel photobooth choisir pour un mariage ?",
      text:
        "Le Photobooth convient si vous privilégiez les tirages et la simplicité. Le Miroirbooth apporte un rendu plus scénographique, le 360 Booth crée des vidéos dynamiques et le Vogue Booth transforme l'espace en photocall lumineux.",
      cards: [
        {
          title: "Photobooth",
          text: "Le choix polyvalent pour imprimer des souvenirs et faire participer toutes les générations.",
        },
        {
          title: "Miroirbooth",
          text: "Un format plus élégant pour les réceptions où le décor compte autant que le souvenir.",
        },
        {
          title: "360 Booth",
          text: "Le format vidéo pour une ambiance dynamique, des groupes et des contenus courts à partager.",
        },
        {
          title: "Vogue Booth",
          text: "Le choix le plus éditorial pour créer un photocall lumineux et très visible dans la réception.",
        },
      ],
    },
    {
      anchor: "meilleur-photobooth-mariage",
      eyebrow: "Comparatif mariage",
      title: "Quel est le meilleur photobooth pour votre mariage ?",
      text:
        "Il n'existe pas un seul meilleur photobooth pour tous les mariages. Le bon choix dépend de l'âge des invités, de la place disponible, du nombre de personnes, du style de la réception et du souvenir que vous voulez conserver après la soirée.",
      cards: [
        {
          title: "Pour toutes les générations",
          text: "Le Photobooth classique reste le plus simple à comprendre : les invités se placent, déclenchent et récupèrent leur souvenir selon la formule.",
        },
        {
          title: "Pour une salle élégante",
          text: "Le Miroirbooth s'intègre davantage au décor et crée un point photo plus visible dans une réception premium.",
        },
        {
          title: "Pour une soirée très dynamique",
          text: "Le 360 Booth privilégie le mouvement, la vidéo et les groupes qui veulent créer un contenu plus spectaculaire.",
        },
        {
          title: "Pour un effet magazine",
          text: "Le Vogue Booth est adapté aux mariages qui souhaitent un décor fort, un photocall lumineux et une expérience très identifiable.",
        },
      ],
    },
    {
      anchor: "moment-photobooth",
      eyebrow: "Timing de la journée",
      title: "À quel moment ouvrir le photobooth pendant un mariage ?",
      text:
        "Le photobooth fonctionne mieux lorsqu'il accompagne le rythme de la réception plutôt que lorsqu'il concurrence un moment fort. Le bon créneau dépend du cocktail, du repas, des discours, de l'ouverture de bal et de l'heure d'arrivée des invités.",
      cards: [
        {
          title: "Pendant le cocktail",
          text: "L'animation peut créer un premier point de rencontre pendant que les invités circulent et attendent l'entrée en salle.",
        },
        {
          title: "Entre les temps du repas",
          text: "Une ouverture progressive peut occuper les moments de transition sans détourner l'attention pendant les discours ou animations principales.",
        },
        {
          title: "Après le repas",
          text: "C'est souvent un moment de forte utilisation : les groupes se forment plus facilement et l'ambiance devient plus détendue.",
        },
        {
          title: "Pendant la soirée",
          text: "Le Photobooth peut rester un point d'animation parallèle à la piste de danse, à condition de ne pas être installé dans un passage.",
        },
      ],
    },
    {
      anchor: "nombre-invites-mariage",
      eyebrow: "Nombre d'invités",
      title: "Comment dimensionner le photobooth selon le nombre d'invités ?",
      text:
        "Le nombre d'invités aide à déterminer la durée, le type de dispositif et le niveau d'accompagnement. Un mariage intime n'a pas les mêmes besoins qu'une réception de plusieurs centaines de personnes avec un pic d'utilisation après le dîner.",
      cards: [
        {
          title: "Petit mariage",
          text: "Une borne compacte peut suffire si les passages sont répartis et si l'objectif principal reste le souvenir photo.",
        },
        {
          title: "Réception moyenne",
          text: "Le Photobooth ou le Miroirbooth offrent un bon équilibre entre débit, tirages et effet visuel pendant plusieurs heures.",
        },
        {
          title: "Grand mariage",
          text: "Le flux devient prioritaire : temps de passage, positionnement et éventuellement plusieurs expériences doivent être anticipés.",
        },
        {
          title: "Beaucoup de groupes",
          text: "Prévoyez assez de recul devant la machine et un format photo adapté afin que les invités puissent se placer sans ralentir la circulation.",
        },
      ],
    },
    {
      anchor: "personnalisation-mariage",
      eyebrow: "Décoration & souvenirs",
      title: "Comment personnaliser un photobooth de mariage sans surcharger le rendu ?",
      text:
        "La personnalisation la plus efficace reste cohérente avec la papeterie, les couleurs ou le thème du mariage. L'objectif est de reconnaître immédiatement votre univers tout en laissant la photo occuper la place principale.",
      cards: [
        {
          title: "Cadre photo",
          text: "Prénoms, date, monogramme, couleur et typographie peuvent être coordonnés avec les autres éléments du mariage.",
        },
        {
          title: "Fond & décor",
          text: "Mur floral, panneau, fond ou accessoires peuvent créer un espace photo identifiable sans multiplier les éléments visuels.",
        },
        {
          title: "Magnets & porte-clés",
          text: "Ces options permettent de transformer certains tirages en petits souvenirs à emporter après la réception.",
        },
        {
          title: "Livre d'or & Phonebooth",
          text: "Les photos peuvent être complétées par des messages écrits, audio ou vidéo afin de conserver davantage d'émotions de la journée.",
        },
      ],
    },
    {
      anchor: "installation-mariage",
      eyebrow: "Organisation du lieu",
      title: "Où installer un photobooth dans une salle de mariage ?",
      text:
        "L'emplacement influence directement le nombre de participations. Une animation invisible dans une pièce secondaire sera moins utilisée ; une animation placée dans un passage étroit gênera le service. Il faut chercher une zone visible, accessible et suffisamment dégagée.",
      cards: [
        {
          title: "Visible depuis la réception",
          text: "Le dispositif doit être repérable naturellement par les invités sans nécessiter une signalétique excessive.",
        },
        {
          title: "Hors des passages",
          text: "Évitez les portes, les issues, le service du traiteur et les zones où la file pourrait bloquer la circulation.",
        },
        {
          title: "Prise électrique proche",
          text: "Une alimentation accessible simplifie l'installation et réduit les longueurs de câbles dans les zones fréquentées.",
        },
        {
          title: "Recul suffisant",
          text: "La machine, les groupes et le décor éventuel doivent tenir sans empiéter sur les tables ou la piste de danse.",
        },
      ],
    },
    {
      anchor: "budget-mariage",
      eyebrow: "Budget mariage",
      title: "Que comprend le prix d'un photobooth de mariage ?",
      text:
        "Comparer uniquement le prix affiché peut être trompeur si les prestations ne comprennent pas la même chose. Vérifiez la machine, la durée, les impressions, la personnalisation, l'installation, le déplacement, la galerie et les options souvenirs avant de comparer deux devis.",
      cards: [
        {
          title: "Photobooth dès 450 €",
          text: "Le format classique constitue le point d'entrée pour une animation photo avec installation et personnalisation selon la formule.",
        },
        {
          title: "Miroirbooth dès 550 €",
          text: "Le prix supérieur correspond notamment au dispositif plus grand et à son positionnement plus scénographique.",
        },
        {
          title: "360 & Vogue dès 500 €",
          text: "Ces formats répondent à des usages vidéo ou photocall et doivent être comparés sur leur expérience, pas uniquement sur le nombre de tirages.",
        },
        {
          title: "Options sur mesure",
          text: "Magnets, porte-clés, mur floral, panneau, livre d'or audio ou vidéo peuvent compléter la prestation selon vos priorités.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  faq,
  relatedLinks: [
    { label: "Guide : quel photobooth choisir pour un mariage ?", href: "/blog/choisir-photobooth-mariage/" },
    { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
    { label: "Voir le Miroirbooth", href: "/prestations/miroirbooth/" },
    { label: "Voir les options souvenirs", href: "/options/" },
    { label: "Guide livre d'or photobooth", href: "/blog/livre-or-photo-photobooth/" },
    { label: "Guide prix location photobooth", href: "/blog/prix-location-photobooth/" },
    { label: "Zones d'intervention", href: "/zones-intervention/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Photobooth Mariage | Location & Animations MySelfieBooth",
    description:
      "Photobooth mariage : comparez Photobooth, Miroirbooth, 360 Booth et Vogue Booth, avec tirages personnalisés et options souvenirs.",
    ogTitle: "Photobooth mariage : quelle animation choisir ?",
    ogDescription:
      "Photo imprimée, miroir, vidéo 360 ou Vogue Booth pour créer les souvenirs de votre mariage.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "FAQPage") {
        return entry;
      }

      return {
        ...entry,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };
    }),
  },
};

export default function Mariages() {
  return <MarketingPage page={mariagePage} />;
}
