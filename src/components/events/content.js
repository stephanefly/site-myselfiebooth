const collection = "/images/collection-2026/";
const ai = "/images/ai-from-real/";
const real = "/images/realisations-machines/";

export const eventPages = {
  mariages: {
    name: "Mariages",
    title: "Photobooth mariage : vos plus beaux souvenirs.",
    seoTitle: "Photobooth Mariage Paris | Photos & Vogue Booth | MySelfieBooth",
    description:
      "Photobooth pour mariage à Paris et en Île-de-France : photos personnalisées, Miroirbooth, Vogue Booth et souvenirs à offrir. Préparez votre devis sur mesure.",
    eyebrow: "Le jour où tout se partage",
    intro:
      "Des premières poses aux messages de vos proches, créez un espace où toutes les générations se retrouvent. Des photos à garder, des voix à réécouter et un décor à votre image.",
    hero: "evenement-ouverture-mariages",
    heroAlt:
      "Couple de mariés dans un Vogue Booth personnalisé Stephane & Juliette, 21.08.2021, au sein d’une orangerie ouverte sur un jardin",
    heroPosition: "55% center",
    cta: "Imaginer notre animation",
    machineTitle: "À chaque couple, son expérience.",
    machineIntro:
      "Choisissez le souvenir qui vous ressemble. Nous adaptons ensuite la durée, le décor et les options au rythme de votre réception.",
    machines: [
      {
        key: "photobooth",
        image: `${collection}photobooth-noir-or-900.webp`,
        alt: "Borne photo noire et dorée MySelfieBooth installée pour une réception",
        text: "Le point de rencontre de toutes les générations, avec des photos personnalisées et des tirages selon la formule.",
        note: "Animateur et galerie web inclus",
      },
      {
        key: "miroirbooth",
        image: `${collection}miroir-photo-dore-900.webp`,
        alt: "Grand miroir photo doré et anneau lumineux installés dans un lieu de réception",
        text: "Un grand miroir tactile qui fait partie du décor et invite vos proches à prendre la pose ensemble.",
        note: "Animateur sur place · tirages selon formule",
      },
      {
        key: "voguebooth",
        image: "/images/vogue-real/vogue-booth-mariage-card.webp",
        alt: "Vogue Booth Wedding Edition avec une couverture personnalisée pour un mariage",
        text: "Vos prénoms en couverture, un cadre lumineux et l’allure d’un portrait de magazine.",
        note: "Photographe et impressions en option",
      },
    ],
    galleryTitle: "Votre histoire se glisse dans les détails.",
    galleryIntro:
      "Prénoms, date, palette de couleurs : nous préparons votre visuel avant le mariage. Les souvenirs complémentaires se choisissent en option ou dans un pack.",
    gallery: [
      {
        src: "/images/event-archive/bandelettes-mariage-reference.webp",
        alt: "Bandelettes photo de mariage avec un cadre et une mise en page personnalisés",
        title: "Vos prénoms sur chaque photo",
        text: "Un cadre coordonné à votre mariage.",
      },
      {
        src: "/images/event-archive/livre-or-mariage.webp",
        alt: "Livre d’or photo ouvert avec des tirages et des messages manuscrits",
        title: "Leurs mots, près de vos photos",
        text: "Le livre d’or physique, en option.",
      },
      {
        src: `${collection}livre-or-audio-telephone-900.webp`,
        alt: "Téléphone à cadran noir pour enregistrer les messages audio des invités",
        title: "Des voix à réécouter",
        text: "Le Phonebooth audio, en option.",
      },
    ],
    motion: {
      poster: "/images/machines-premium/voguebooth-apercu.webp",
      src: "/videos/machines-premium/voguebooth-sequence.mp4",
      title: "Le Vogue Booth en mouvement",
      description:
        "Un aperçu réel de la prise de pose dans notre décor magazine. Séquence sans audio.",
    },
    pack: "souvenirs",
    packIntro:
      "Une photo, un message, un petit cadeau : le Pack Souvenirs réunit trois façons de garder une trace de cette journée.",
    planning: [
      [
        "Votre date et votre lieu",
        "Invités, déroulé du mariage et accès de la salle : nous préparons la bonne configuration.",
      ],
      [
        "Votre univers graphique",
        "Prénoms, date et couleurs sont validés avec vous avant la préparation des visuels.",
      ],
      [
        "Le jour de la réception",
        "Installation, essais et accompagnement selon la formule, en coordination avec votre lieu.",
      ],
    ],
    faq: [
      [
        "Quel budget prévoir pour un photobooth de mariage ?",
        "Le Photobooth est proposé à 400 € pour 5 h, le Miroirbooth dès 450 € pour 3 h et le Vogue Booth dès 500 € pour 5 h. Le déplacement, les impressions selon formule et les options sont confirmés au devis.",
      ],
      [
        "Peut-on personnaliser les photos avec nos prénoms et notre date ?",
        "Oui. Nous préparons un modèle photo ou une couverture Vogue avec vos prénoms, votre date et les couleurs de votre mariage. Le visuel est validé avec vous avant l’événement.",
      ],
      [
        "À quel moment ouvrir l’animation pendant le mariage ?",
        "Au cocktail, entre les temps du repas ou pendant la soirée : nous définissons le créneau selon votre programme. L’installation et les essais sont préparés avant l’ouverture prévue, sans gêner le traiteur ni les moments forts.",
      ],
      [
        "Quel espace et quelle alimentation faut-il prévoir ?",
        "Il faut une prise à proximité, un sol stable, du recul pour les groupes et une circulation dégagée. La surface, la hauteur et l’éventuel extérieur sont validés selon la machine et le lieu.",
      ],
      [
        "Peut-on ajouter un livre d’or ou des cadeaux invités ?",
        "Oui, un livre d’or physique, audio ou vidéo, des porte-clés ou des magnets peuvent compléter l’animation. Leur compatibilité, leur quantité et leur tarif sont précisés dans votre formule.",
      ],
    ],
    links: [
      [
        "Choisir son photobooth de mariage",
        "/blog/choisir-photobooth-mariage/",
      ],
      ["Les options souvenirs", "/options/"],
      ["Nos zones d’intervention", "/zones-intervention/"],
    ],
    aliases: {
      animations: [
        "choisir-photobooth-mariage",
        "meilleur-photobooth-mariage",
        "nombre-invites-mariage",
        "section-9",
      ],
      personnalisation: ["personnalisation-mariage", "section-8"],
      formule: ["budget-mariage"],
      organisation: ["moment-photobooth", "installation-mariage"],
    },
  },
  anniversaires: {
    name: "Anniversaires",
    title: "Photobooth anniversaire : la fête en grand.",
    seoTitle: "Photobooth Anniversaire Paris | Photo & Vidéo | MySelfieBooth",
    description:
      "Animation photobooth pour anniversaire à Paris et en Île-de-France : photos personnalisées, vidéo 360 et Vogue Booth. Découvrez les machines et les packs.",
    eyebrow: "Votre anniversaire, votre ambiance",
    intro:
      "Un anniversaire intime ou une grande fête : donnez à vos invités une bonne raison de se retrouver devant l’objectif. Photos, vidéos et portraits magazine prennent les couleurs de votre soirée.",
    hero: "evenement-ouverture-anniversaires",
    heroAlt:
      "Photobooth noir et doré avec trois amis et leurs tirages dans un décor d’anniversaire pêche et corail",
    heroPosition: "50% center",
    cta: "Préparer mon anniversaire",
    machineTitle: "Trois façons de faire la fête.",
    machineIntro:
      "Des photos pour la famille, une vidéo pour les amis ou une couverture de magazine pour marquer le coup : choisissez votre format.",
    machines: [
      {
        key: "photobooth",
        image: `${collection}photobooth-noir-or-900.webp`,
        alt: "Photobooth noir et or avec son écran et ses lumières dans une salle de réception",
        text: "Simple à utiliser, il rassemble les proches autour de photos avec votre prénom, votre âge ou le thème de la fête.",
        note: "Tirages selon formule · animateur inclus",
      },
      {
        key: "videobooth",
        image: `${collection}plateforme-video-360-900.webp`,
        alt: "Plateau vidéo 360 lumineux avec bras caméra prêt pour une fête",
        text: "Pour bouger, poser et créer de courtes vidéos de groupe. Le rythme de la soirée devient le souvenir.",
        note: "Jusqu’à 5 personnes selon configuration",
      },
      {
        key: "voguebooth",
        image: "/images/vogue-real/vogue-booth-anniversaire-card.webp",
        alt: "Vogue Booth avec façade de magazine personnalisée pour un anniversaire",
        text: "Votre anniversaire fait la une. Un grand décor lumineux pour des portraits plus éditoriaux.",
        note: "Photographe et impressions en option",
      },
    ],
    galleryTitle: "Une fête qui porte votre signature.",
    galleryIntro:
      "Votre prénom, vos couleurs, votre univers : nous créons un visuel facile à reconnaître. Ajoutez les souvenirs qui feront plaisir à vos proches, selon les options retenues.",
    gallery: [
      {
        src: `${collection}exemples-tirages-personnalises-900.webp`,
        alt: "Exemples de tirages photo avec différents cadres et compositions personnalisées",
        title: "Un cadre rien que pour vous",
        text: "Prénom, thème et couleurs sur vos photos.",
      },
      {
        src: "/images/option-magnet-premium.webp",
        alt: "Magnets photo personnalisés présentés comme souvenirs à offrir aux invités",
        title: "Un souvenir à offrir",
        text: "Magnets et porte-clés en option.",
      },
      {
        src: `${ai}prestations-2026-souvenirs.webp`,
        alt: "Téléphone audio, album photo et petits souvenirs réunis sur une table de réception",
        title: "Des mots et des petites attentions",
        text: "Les options audio et livre d’or à découvrir.",
      },
    ],
    motion: {
      poster: "/images/machines-premium/videobooth-apercu.webp",
      src: "/videos/machines-premium/videobooth-sequence.mp4",
      title: "L’énergie du 360 Booth",
      description:
        "Deux invitées prennent la pose sur la plateforme 360 lors d’une réception. Séquence sans audio.",
    },
    pack: "vogue-premium",
    packIntro:
      "Envie d’une expérience magazine complète ? Le Pack Vogue Premium associe le décor, le photographe et les impressions.",
    planning: [
      [
        "L’esprit de votre fête",
        "Date, lieu, nombre d’invités et thème : nous choisissons le dispositif qui vous correspond.",
      ],
      [
        "Un visuel personnel",
        "Prénom, âge si vous le souhaitez et couleurs sont préparés et validés avant la soirée.",
      ],
      [
        "Le bon moment",
        "Nous organisons l’installation et le créneau d’animation autour du repas et des surprises.",
      ],
    ],
    faq: [
      [
        "Quelle animation choisir pour un anniversaire ?",
        "Le Photobooth privilégie la photo personnalisée et les tirages selon formule. Le 360 Booth crée des vidéos en mouvement. Le Vogue Booth apporte un décor magazine, avec photographe et impressions en option ou inclus dans le Pack Vogue Premium.",
      ],
      [
        "Peut-on afficher mon prénom, mon âge ou mon thème ?",
        "Oui. Votre modèle photo ou votre couverture Vogue peut intégrer les éléments retenus pour la fête. Nous vous faisons valider le visuel avant la préparation de l’animation.",
      ],
      [
        "Quels sont les tarifs pour un anniversaire ?",
        "Le Photobooth est à 400 € pour 5 h. Le 360 Booth commence à 400 € pour 3 h et le Vogue Booth à 500 € pour 5 h. Le Pack Vogue Premium est proposé à partir de 600 €. Les options et conditions du lieu sont confirmées au devis.",
      ],
      [
        "Peut-on installer l’animation dans un petit espace ou à domicile ?",
        "Nous étudions l’accès, la surface, le recul et l’alimentation électrique. Une borne photo ou un iPad Booth numérique peut être plus adapté qu’un grand décor. L’iPad Booth ne prévoit pas d’impression photo.",
      ],
      [
        "Combien de temps à l’avance faut-il réserver ?",
        "Contactez-nous dès que la date et le lieu sont définis, surtout pour un week-end ou une période demandée. La disponibilité de la machine et le calendrier de personnalisation sont confirmés dans la proposition.",
      ],
    ],
    links: [
      ["Guide photobooth anniversaire", "/blog/photobooth-anniversaire/"],
      ["Les packs photo et vidéo", "/prestations/#packs"],
      ["Le format iPad Booth", "/prestations/ipadbooth/"],
    ],
    aliases: { animations: ["animation-photo-anniversaire", "section-2"] },
  },
  soirees: {
    name: "Soirées privées",
    title: "Photobooth pour vos soirées privées & VIP.",
    seoTitle: "Photobooth Soirée Privée & VIP Paris | MySelfieBooth",
    description:
      "Photobooth, Miroirbooth, vidéo 360 et Vogue Booth pour soirée privée ou réception VIP à Paris. Personnalisation et installation selon votre lieu. Devis sur mesure.",
    eyebrow: "Réceptions privées · soirées VIP",
    intro:
      "Un miroir qui attire les regards, des vidéos qui captent l’ambiance et des photos à partager. Faites de l’animation un vrai rendez-vous dans votre soirée, sans casser le rythme de la fête.",
    hero: "evenement-ouverture-soirees",
    heroAlt:
      "Deux invitées sur un plateau vidéo 360 lumineux lors d’une soirée sur un rooftop parisien à l’heure bleue",
    heroPosition: "50% center",
    cta: "Imaginer ma soirée",
    machineTitle: "L’allure, le mouvement, la pose.",
    machineIntro:
      "Une seule animation ou plusieurs expériences : nous vous aidons à composer un espace photo et vidéo cohérent avec le lieu et vos invités.",
    machines: [
      {
        key: "miroirbooth",
        image: `${collection}miroir-photo-dore-900.webp`,
        alt: "Miroir photo interactif au cadre doré avec un anneau lumineux dans une réception parisienne",
        text: "Une présence élégante dans le décor, des poses spontanées et des tirages personnalisés selon la formule.",
        note: "Animateur et galerie web inclus",
      },
      {
        key: "videobooth",
        image: `${ai}prestations-2026-videobooth.webp`,
        alt: "Plateau vidéo 360 avec caméra rotative et fond lumineux dans un espace événementiel",
        text: "Un format vidéo dynamique pour donner du mouvement aux passages de vos invités.",
        note: "Vidéos personnalisées · animateur inclus",
      },
      {
        key: "voguebooth",
        image: `${ai}prestations-2026-voguebooth.webp`,
        alt: "Grand Vogue Booth noir et blanc avec une façade de couverture de magazine",
        text: "Un photocall lumineux et un visuel de couverture pour donner un accent éditorial à la réception.",
        note: "Photographe et impressions en option",
      },
    ],
    galleryTitle: "Du premier portrait au dernier souvenir.",
    galleryIntro:
      "Coordonnez les cadres photo, les contenus vidéo et les accessoires au style de votre soirée. Les décors et souvenirs supplémentaires sont chiffrés selon votre projet.",
    gallery: [
      {
        src: `${real}tirages-gala.webp`,
        alt: "Tirages photo personnalisés préparés lors du Gala des Juristes",
        title: "Des tirages aux couleurs de la soirée",
        text: "Un modèle photo validé avant l’événement.",
      },
      {
        src: `${real}fabrication-porte-cles-photo.webp`,
        alt: "Préparation de porte-clés photo personnalisés pour les invités MySelfieBooth",
        title: "Le petit cadeau qui reste",
        text: "Porte-clés et magnets en option.",
      },
      {
        src: `${collection}portrait-vogue-booth-900.webp`,
        alt: "Portrait d’une invitée dans un Vogue Booth à la couverture personnalisée",
        title: "Le portrait prend la pose",
        text: "Un aperçu réel du rendu magazine.",
      },
    ],
    motion: {
      poster: "/images/machines-premium/miroirbooth-apercu.webp",
      src: "/videos/machines-premium/miroirbooth-sequence.mp4",
      title: "Le Miroirbooth en réception",
      description:
        "Des invités prennent des photos dans le grand miroir interactif. Séquence sans audio.",
    },
    pack: "duo-vip",
    packIntro:
      "Pour varier les expériences et répartir les passages, le Pack Duo VIP associe photo, vidéo et souvenirs audio dans un décor coordonné.",
    planning: [
      [
        "Votre lieu, vos contraintes",
        "Accès, horaires de réception, espace et circulation des invités sont étudiés ensemble.",
      ],
      [
        "Votre ambiance",
        "Cadres photo, habillage vidéo et options de décor suivent le thème validé pour votre soirée.",
      ],
      [
        "Une installation préparée",
        "Montage et tests avant l’ouverture ; animateur ou photographe selon les machines et la formule.",
      ],
    ],
    faq: [
      [
        "Quelle animation choisir pour une soirée VIP ?",
        "Le Miroirbooth apporte un grand miroir interactif au décor. Le 360 Booth privilégie la vidéo et le mouvement. Le Vogue Booth propose une expérience magazine ; son photographe et ses impressions sont en option hors pack.",
      ],
      [
        "Peut-on associer plusieurs machines ?",
        "Oui. Nous pouvons étudier plusieurs espaces ou une combinaison photo et vidéo. Le Pack Duo VIP réunit notamment Miroirbooth, 360 Booth, Phonebooth audio et mur floral. Le lieu et les conditions d’exploitation sont validés au devis.",
      ],
      [
        "Comment éviter l’attente pendant la soirée ?",
        "Le nombre d’invités, la durée, l’emplacement et l’accompagnement orientent la configuration. Pour une grande réception, plusieurs expériences peuvent aider à répartir les passages, sous réserve d’espace et de faisabilité.",
      ],
      [
        "Les horaires tardifs ou plusieurs jours sont-ils possibles ?",
        "Ces demandes sont étudiées selon le calendrier, les accès, le personnel et la sécurisation du matériel. Une durée supplémentaire ou une organisation sur plusieurs jours fait l’objet d’un devis spécifique.",
      ],
      [
        "Comment récupère-t-on les photos et vidéos ?",
        "Les tirages, la galerie et les modalités de remise des contenus dépendent du dispositif et de la formule. Le partage instantané et les besoins de connexion sont vérifiés avec le lieu avant confirmation.",
      ],
    ],
    links: [
      ["Voir toutes les réalisations", "/realisations/"],
      ["Les options de décor", "/options/"],
      ["Les événements d’entreprise", "/evenements/corporates/"],
    ],
    aliases: { animations: ["section-1"] },
  },
};
