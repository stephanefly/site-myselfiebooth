import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.miroirbooth;

const miroirPage = {
  ...basePage,
  title: "Location Miroir Photobooth (Miroirbooth)",
  description:
    "Louez un miroir photo interactif pour mariage, gala ou entreprise : Miroirbooth personnalisé, installation, tirages et galerie selon la formule.",
  highlights: ["À partir de 450 €", "Miroir photo interactif", "Mariage & entreprise"],
  sections: [
    {
      anchor: "miroir-photobooth",
      eyebrow: "Miroir Photobooth",
      title: "Location miroir photo : une expérience plus élégante qu'une borne classique",
      text:
        "Le Miroirbooth, aussi recherché comme miroir photobooth ou mirror booth, combine une grande surface miroir, une expérience tactile et un rendu scénographique. Il convient particulièrement aux mariages, galas, soirées premium et événements d'entreprise.",
      cards: [
        {
          title: "Effet miroir",
          text: "Une animation visible dans la salle qui attire naturellement les invités et crée un véritable point photo.",
        },
        {
          title: "Personnalisation",
          text: "Cadre photo et éléments graphiques adaptés au thème du mariage ou à l'identité de l'entreprise.",
        },
        {
          title: "Souvenirs",
          text: "Photos et tirages selon la formule, avec options décor, magnets, porte-clés et livre d'or disponibles.",
        },
      ],
    },
    {
      anchor: "photobooth-vs-miroirbooth",
      eyebrow: "Comparatif",
      title: "Miroirbooth ou Photobooth classique : quelles différences ?",
      text:
        "Les deux dispositifs permettent de créer des photos personnalisées, mais ils ne répondent pas exactement au même besoin. Le Photobooth classique privilégie la compacité et la polyvalence ; le Miroirbooth devient aussi un élément visuel de la scénographie.",
      cards: [
        {
          title: "Encombrement",
          text: "Le Photobooth classique est plus simple à intégrer dans un espace réduit. Le Miroirbooth demande davantage de recul et de place autour de la zone photo.",
        },
        {
          title: "Impact visuel",
          text: "Le miroir grand format attire davantage le regard et s'intègre naturellement à une réception premium, un gala ou un lancement.",
        },
        {
          title: "Public",
          text: "Les deux formats sont faciles à utiliser. Le Miroirbooth convient particulièrement lorsqu'on recherche une animation qui fasse aussi partie du décor.",
        },
        {
          title: "Budget",
          text: "Le Miroirbooth démarre à 450 €, contre 400 € pour 5 h de Photobooth classique. Le devis final dépend ensuite du lieu, de la durée et des options.",
        },
      ],
    },
    {
      anchor: "usages-miroir",
      eyebrow: "Pour quels événements ?",
      title: "Quand choisir un miroir photo interactif ?",
      text:
        "Le Miroirbooth est particulièrement pertinent lorsque l'apparence de l'animation compte autant que les photos produites. Il peut devenir un point de passage central pendant une réception, sans nécessiter un décor très complexe autour de la machine.",
      cards: [
        {
          title: "Mariage",
          text: "Un choix adapté aux salles élégantes, aux réceptions avec décoration travaillée et aux invités qui souhaitent repartir avec une photo personnalisée.",
        },
        {
          title: "Gala & soirée premium",
          text: "Le format grand miroir apporte une présence plus haut de gamme qu'une borne compacte et s'intègre bien à un photocall.",
        },
        {
          title: "Entreprise",
          text: "Logo, couleurs et message de marque peuvent être intégrés au rendu pour une soirée interne, un lancement ou un événement clients.",
        },
        {
          title: "Salon & activation",
          text: "Le dispositif peut servir de point d'attraction sur un espace de marque lorsque le flux, le recul et la visibilité sont adaptés.",
        },
      ],
    },
    {
      anchor: "installation-miroir",
      eyebrow: "Installation",
      title: "Quel espace prévoir pour un Miroirbooth ?",
      text:
        "Le miroir lui-même n'est qu'une partie de l'installation. Il faut aussi prévoir le recul des participants, l'espace de circulation, une alimentation électrique et un accès suffisamment simple pour le montage et le démontage.",
      cards: [
        {
          title: "Recul photo",
          text: "Le groupe doit pouvoir se positionner confortablement devant le miroir sans bloquer un passage ou une porte.",
        },
        {
          title: "Sol stable",
          text: "Une surface plane et dégagée facilite l'installation et protège le matériel pendant toute la prestation.",
        },
        {
          title: "Accès prestataire",
          text: "Escaliers, ascenseur, quai, distance de portage et stationnement sont à confirmer avant le jour J.",
        },
        {
          title: "Éclairage & décor",
          text: "La zone doit rester lisible visuellement. Un fond, un mur floral ou un panneau peut compléter le miroir selon le rendu recherché.",
        },
      ],
    },
    {
      anchor: "personnalisation-miroir",
      eyebrow: "Personnalisation",
      title: "Comment personnaliser un Miroirbooth pour votre événement ?",
      text:
        "La personnalisation peut rester discrète ou devenir un élément fort de l'expérience. Le cadre photo, les textes, les couleurs, le décor et les souvenirs peuvent être coordonnés avec le thème du mariage ou l'identité visuelle d'une entreprise.",
      cards: [
        {
          title: "Cadre photo",
          text: "Prénoms, date, logo ou éléments graphiques peuvent être intégrés au rendu final selon la formule retenue.",
        },
        {
          title: "Décor",
          text: "Mur floral, panneau, fond ou accessoires peuvent renforcer l'effet visuel autour du miroir.",
        },
        {
          title: "Souvenirs",
          text: "Magnets, porte-clés ou livre d'or permettent de prolonger l'expérience avec un objet ou un message à conserver.",
        },
        {
          title: "Branding entreprise",
          text: "Logo, couleurs et message de campagne peuvent être déclinés sur l'expérience lorsque la prestation est destinée à une marque.",
        },
      ],
    },
    ...(basePage.sections || []),
  ],
  faq: [
    {
      question: "Qu'est-ce qu'un Miroirbooth ou miroir photobooth ?",
      answer:
        "Le Miroirbooth est un miroir photo interactif grand format. Les invités se placent devant le miroir pour déclencher l'expérience et récupérer leurs photos ou tirages selon la formule choisie.",
    },
    {
      question: "Quelle différence entre un Photobooth et un Miroirbooth ?",
      answer:
        "Le Photobooth est une borne photo plus compacte et polyvalente. Le Miroirbooth occupe davantage l'espace visuel et apporte un rendu plus scénographique, particulièrement adapté aux mariages, galas et événements premium.",
    },
    {
      question: "Peut-on louer un miroir photo pour un mariage ou une entreprise ?",
      answer:
        "Oui. Le Miroirbooth peut être personnalisé pour un mariage, une soirée d'entreprise, un gala ou une activation de marque. Le devis confirme la configuration, le lieu, les tirages et les options.",
    },
    {
      question: "Quel est le prix d'un Miroirbooth ?",
      answer:
        "La location du Miroirbooth démarre à 450 €. Le prix final dépend de la date, du lieu, de la durée, des tirages, de la personnalisation et des options retenues.",
    },
    {
      question: "Le Miroirbooth peut-il être personnalisé avec un logo ?",
      answer:
        "Oui. Pour un événement d'entreprise, le cadre photo et plusieurs éléments graphiques peuvent reprendre le logo, les couleurs ou le message de la marque selon la formule choisie.",
    },
    {
      question: "Faut-il beaucoup de place pour installer un miroir photobooth ?",
      answer:
        "Il faut prévoir la surface du miroir, le recul des participants et une zone de circulation. Le besoin exact dépend de la configuration du lieu et des options de décor.",
    },
    {
      question: "Peut-on ajouter un mur floral derrière le Miroirbooth ?",
      answer:
        "Oui, un mur floral ou un autre fond peut être ajouté selon la configuration et l'espace disponible afin de renforcer le rendu visuel.",
    },
    ...(basePage.faq || []),
  ],
  relatedLinks: [
    { label: "Comparer Photobooth et Miroirbooth", href: "/prestations/photobooth/" },
    { label: "Photobooth pour mariage", href: "/evenements/mariages/" },
    { label: "Photobooth pour entreprise", href: "/evenements/corporates/" },
    { label: "Zones d'intervention", href: "/zones-intervention/" },
    { label: "Voir les options", href: "/options/" },
    { label: "Guide personnalisation Photobooth", href: "/blog/personnaliser-photobooth/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Miroir Photobooth (Miroirbooth) dès 450 €",
    description:
      "Location miroir photobooth dès 450 € : Miroirbooth interactif pour mariage et entreprise, personnalisation, installation et tirages selon formule.",
    ogTitle: "Location Miroir Photobooth | MySelfieBooth",
    ogDescription:
      "Un miroir photo interactif et personnalisable pour mariage, gala et événement d'entreprise.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] !== "Service") {
        return entry;
      }

      return {
        ...entry,
        name: "Location Miroir Photobooth et Miroirbooth",
        description:
          "Location de miroir photo interactif pour mariage, gala et événement d'entreprise avec personnalisation et tirages selon formule.",
        offers: {
          ...(entry.offers || {}),
          price: "450",
          priceCurrency: "EUR",
          description: "Tarif à partir de 450 euros selon la date, le lieu et la formule.",
        },
      };
    }),
  },
};

export default function Miroirbooth() {
  return <MarketingPage page={miroirPage} />;
}
