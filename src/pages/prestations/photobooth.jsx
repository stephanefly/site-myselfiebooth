import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

const basePage = marketingPages.photobooth;

const locationSection = {
  anchor: "ile-de-france",
  eyebrow: "Île-de-France & Seine-et-Marne",
  title: "Location de photobooth à Melun, en Seine-et-Marne (77) et en Île-de-France",
  text:
    "Nous intervenons pour les mariages, anniversaires et événements professionnels à Paris et en Île-de-France, notamment autour de Melun et en Seine-et-Marne. La disponibilité et les conditions de déplacement sont confirmées selon la date, l'adresse, les horaires et les accès du lieu.",
  cards: [
    {
      title: "Seine-et-Marne (77)",
      text: "Demandes étudiées à Melun et dans les communes de Seine-et-Marne selon la date et la logistique.",
    },
    {
      title: "Paris & petite couronne",
      text: "Installation adaptée aux contraintes d'accès, de stationnement et aux horaires des lieux événementiels.",
    },
    {
      title: "Toute l'Île-de-France",
      text: "Le devis confirme le déplacement, la durée, la formule et les options adaptées à votre événement.",
    },
  ],
};

const extraSections = [
  {
    anchor: "fonctionnement",
    eyebrow: "Comment ça marche ?",
    title: "Comment fonctionne une location de Photobooth de A à Z ?",
    text:
      "La prestation ne se résume pas à déposer une borne. Nous préparons le rendu, validons la logistique, installons le matériel puis remettons les contenus prévus par la formule. Cette préparation permet de conserver une expérience simple pour les invités tout en sécurisant le jour J.",
    cards: [
      {
        title: "1. Cadrage",
        text: "Date, lieu, nombre d'invités, durée, type d'événement, contraintes d'accès et objectif du photobooth sont définis avant le devis final.",
      },
      {
        title: "2. Personnalisation",
        text: "Le cadre photo, les textes, les couleurs et les éléments graphiques prévus sont préparés avant l'événement.",
      },
      {
        title: "3. Installation",
        text: "Le matériel est positionné, branché et testé sur place avant l'ouverture de l'animation selon les conditions convenues.",
      },
      {
        title: "4. Remise des contenus",
        text: "Les photos et la galerie prévues dans la formule sont récupérées après l'événement, avec les options complémentaires choisies.",
      },
    ],
  },
  {
    anchor: "quel-photobooth",
    eyebrow: "Choisir la bonne animation",
    title: "Photobooth, Miroirbooth, 360 Booth ou Vogue Booth : lequel choisir ?",
    text:
      "Le bon choix dépend davantage du souvenir recherché et du rythme de l'événement que du nom de la machine. Le Photobooth classique reste le plus polyvalent, mais les autres formats peuvent être plus pertinents lorsqu'on recherche une expérience visuelle, vidéo ou scénographique.",
    cards: [
      {
        title: "Photobooth classique",
        text: "À privilégier pour les photos imprimées, les groupes, les mariages, anniversaires et événements où toutes les générations doivent participer facilement.",
      },
      {
        title: "Miroirbooth",
        text: "À choisir lorsque le dispositif doit aussi faire partie du décor et apporter une présence plus premium dans la salle.",
      },
      {
        title: "360 Booth",
        text: "Pertinent pour produire des vidéos courtes, créer du mouvement et alimenter une logique de contenu social pendant une soirée ou une activation.",
      },
      {
        title: "Vogue Booth",
        text: "Adapté aux galas, lancements, mariages premium et événements qui recherchent un rendu éditorial ou photocall très visible.",
      },
    ],
  },
  {
    anchor: "impressions-galerie",
    eyebrow: "Souvenirs & fichiers",
    title: "Tirages, galerie et souvenirs : ce que vos invités récupèrent réellement",
    text:
      "Avant de comparer deux offres, il faut vérifier ce qui est réellement inclus. Nombre d'impressions, format du tirage, galerie, récupération des fichiers et options souvenirs peuvent modifier fortement l'expérience et le budget final.",
    cards: [
      {
        title: "Tirages personnalisés",
        text: "Le cadre peut reprendre des prénoms, une date, un logo, des couleurs ou des éléments graphiques adaptés à l'événement selon la formule.",
      },
      {
        title: "Galerie après l'événement",
        text: "La galerie permet de retrouver les photos produites et de prolonger l'expérience une fois la prestation terminée.",
      },
      {
        title: "Magnets & porte-clés",
        text: "Ces options transforment une photo en souvenir physique complémentaire et peuvent être prévues en quantité définie.",
      },
      {
        title: "Livre d'or & Phonebooth",
        text: "Les photos peuvent être associées à des messages écrits, audio ou vidéo afin de conserver davantage que le simple tirage.",
      },
    ],
  },
  {
    anchor: "flux-invites",
    eyebrow: "Nombre d'invités",
    title: "Combien de personnes peuvent utiliser un Photobooth pendant une soirée ?",
    text:
      "Il n'existe pas un nombre universel : le débit dépend du temps passé devant la machine, du nombre de poses, des choix à l'écran, de l'impression et de la manière dont les groupes se forment. Pour un événement important, nous raisonnons surtout en flux afin d'éviter une longue file d'attente.",
    cards: [
      {
        title: "Petit événement",
        text: "Une borne bien placée suffit généralement lorsque les passages sont répartis sur plusieurs heures et que les invités utilisent l'animation librement.",
      },
      {
        title: "Mariage",
        text: "Les pics arrivent souvent après le repas et autour des temps forts. L'emplacement et l'ouverture de l'animation doivent être pensés pour répartir les passages.",
      },
      {
        title: "Salon professionnel",
        text: "Le parcours doit être plus court afin de conserver un débit élevé et d'éviter de bloquer le stand ou l'allée.",
      },
      {
        title: "Très grand événement",
        text: "Plusieurs dispositifs, un parcours simplifié ou un animateur peuvent devenir plus pertinents qu'une seule machine surchargée.",
      },
    ],
  },
  {
    anchor: "checklist-photobooth",
    eyebrow: "Checklist réservation",
    title: "Les 8 points à vérifier avant de réserver votre Photobooth",
    text:
      "Une offre claire doit permettre de savoir ce qui sera réellement livré. Avant de confirmer, vérifiez la durée, le nombre d'impressions, la personnalisation, les horaires de montage, le déplacement, la présence éventuelle d'un animateur, les fichiers remis et les options choisies.",
    cards: [
      {
        title: "Date, lieu & horaires",
        text: "Le créneau d'installation et de retrait doit être compatible avec le lieu, le traiteur, la sécurité et les autres prestataires.",
      },
      {
        title: "Impressions incluses",
        text: "Vérifiez si les tirages sont limités, illimités selon conditions ou prévus dans une quantité déterminée.",
      },
      {
        title: "Personnalisation validée",
        text: "Le rendu graphique doit être préparé avant l'événement pour éviter les changements improvisés au dernier moment.",
      },
      {
        title: "Livrables après l'événement",
        text: "Galerie, photos, vidéos et éventuels exports doivent être clairement identifiés dans la formule retenue.",
      },
    ],
  },
];

const sections = [
  ...basePage.sections.flatMap((section) => {
    const updatedSection = section.anchor === "tarif"
      ? {
          ...section,
          eyebrow: "Tarif à partir de 450 €",
          title: "Location Photobooth dès 450 € : une formule claire et personnalisable",
          text:
            "Le tarif de départ du Photobooth est de 450 €. Le devis précise la durée, les impressions prévues, la livraison, l'installation, la personnalisation et les options retenues pour votre événement.",
        }
      : section;

    return section.anchor === "evenements"
      ? [updatedSection, locationSection]
      : [updatedSection];
  }),
  ...extraSections,
];

const faq = [
  ...basePage.faq.map((item) => {
    if (item.question === "Quel est le prix d'une location de photobooth ?") {
      return {
        ...item,
        answer:
          "La location du Photobooth démarre à 450 €. Le devis confirme la durée, la zone d'intervention, les impressions et les éventuelles options selon votre événement.",
      };
    }

    if (item.question === "Intervenez-vous à Paris et dans toute l'Île-de-France ?") {
      return {
        ...item,
        answer:
          "Oui. Nous étudions les demandes à Paris, en Seine-et-Marne autour de Melun et dans toute l'Île-de-France. Les conditions de déplacement sont confirmées selon la commune, la date, les horaires et les accès du lieu.",
      };
    }

    return item;
  }),
  {
    question: "Peut-on louer un photobooth en Seine-et-Marne (77) ?",
    answer:
      "Oui. Les demandes en Seine-et-Marne, notamment autour de Melun, sont étudiées selon la date, le lieu, les horaires et les contraintes d'accès.",
  },
  {
    question: "Faut-il un animateur avec un photobooth ?",
    answer:
      "Pas toujours. Pour un événement simple, le Photobooth peut fonctionner avec un parcours autonome. Pour un salon, un grand nombre d'invités ou une animation plus complexe, un animateur peut améliorer le flux et accompagner les participants.",
  },
  {
    question: "Peut-on mettre le logo d'une entreprise sur les photos ?",
    answer:
      "Oui. Le cadre photo et plusieurs éléments graphiques peuvent être personnalisés avec le logo, les couleurs et le message de l'entreprise selon la formule retenue.",
  },
  {
    question: "Quel espace faut-il prévoir pour installer un photobooth ?",
    answer:
      "Il faut prévoir l'emprise de la borne, le recul des participants et une zone de circulation. L'espace exact dépend du dispositif choisi et de la configuration du lieu.",
  },
  {
    question: "Quand reçoit-on les photos après l'événement ?",
    answer:
      "Les modalités de remise sont précisées dans la formule. Une galerie ou un accès aux fichiers peut être prévu après l'événement selon la prestation choisie.",
  },
];

const photoboothPage = {
  ...basePage,
  title: "Location Photobooth en Île-de-France dès 450 €",
  description:
    "Louez un Photobooth pour mariage, anniversaire ou entreprise en Île-de-France, avec tirages personnalisés selon la formule, installation et galerie photo après l'événement.",
  highlights: ["À partir de 450 €", "Tirages selon formule", "Installation & personnalisation"],
  sections,
  faq,
  relatedLinks: [
    { label: "Photobooth pour mariage", href: "/evenements/mariages/" },
    { label: "Photobooth pour entreprise", href: "/evenements/corporates/" },
    { label: "Miroir Photobooth", href: "/prestations/miroirbooth/" },
    { label: "Prix location Photobooth", href: "/blog/prix-location-photobooth/" },
    { label: "Quel espace prévoir ?", href: "/blog/espace-installation-photobooth/" },
    { label: "Toutes les zones d'intervention", href: "/zones-intervention/" },
    ...(basePage.relatedLinks || []),
  ],
  meta: {
    ...basePage.meta,
    title: "Location Photobooth Île-de-France dès 450 € | MySelfieBooth",
    description:
      "Location Photobooth dès 450 € en Île-de-France : mariage, entreprise, Melun et Seine-et-Marne, avec installation, personnalisation et galerie photo.",
    ogTitle: "Location Photobooth en Île-de-France dès 450 €",
    ogDescription:
      "Photobooth pour mariage et entreprise, avec installation, personnalisation, tirages selon formule et galerie photo.",
    jsonLd: basePage.meta.jsonLd.map((entry) => {
      if (entry["@type"] === "Service") {
        return {
          ...entry,
          name: "Location Photobooth en Île-de-France",
          description:
            "Location de Photobooth pour mariage, anniversaire et entreprise en Île-de-France, avec installation et personnalisation.",
          offers: {
            ...(entry.offers || {}),
            price: "450",
            priceCurrency: "EUR",
            description: "Tarif à partir de 450 euros, ajusté selon la date, le lieu et la formule.",
          },
        };
      }

      if (entry["@type"] === "FAQPage") {
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
      }

      return entry;
    }),
  },
};

export default function Photobooth() {
  return <MarketingPage page={photoboothPage} />;
}
