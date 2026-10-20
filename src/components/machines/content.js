import { machines } from "../../data/catalog";

// Catalogue offers preserved; detailed conditions remain in the visible FAQ.
const details = {
  photobooth: {
    number: "01",
    label: "Photo · Impression",
    headline: "Des instants spontanés. Des souvenirs à garder.",
    intro:
      "Photos personnalisées, tirages à emporter et galerie web. Une animation accompagnée pour vos fêtes et événements d’entreprise.",
    seoTitle: "Location Photobooth Paris — 400 € pour 5 h | MySelfieBooth",
    seoDescription:
      "Location de photobooth à Paris et en Île-de-France : 400 € pour 5 h, animateur, tirages personnalisés selon formule et galerie web. Demandez votre devis.",
    hero: "photobooth-reception",
    heroAlt:
      "Borne photo noire et dorée MySelfieBooth dans un décor de réception élégant",
    heroPosition: "78% center",
    promise: "Le plaisir de repartir avec sa photo.",
    facts: [
      ["Le souvenir", "Photos & tirages"],
      ["La formule", "5 h d’animation"],
      ["L’accompagnement", "Animateur inclus"],
    ],
    experienceTitle: "Les sourires, en images.",
    proof: {
      src: "/images/collection-2026/photobooth-noir-or-900.webp",
      alt: "Photobooth noir et doré MySelfieBooth installé sur un tapis rouge dans une salle de réception",
      caption: "Notre Photobooth, prêt à accueillir vos invités",
      video:
        "/videos/realisations-machines/installation-photobooth-timelapse.mp4",
      videoLabel: "Voir l’installation du Photobooth",
      transcript:
        "L’équipe installe la borne photo, prépare l’espace de prise de vue et effectue les réglages avant l’arrivée des invités.",
    },
    detail: {
      src: "/images/collection-2026/exemples-tirages-personnalises-900.webp",
      alt: "Exemples réels de tirages photo avec cadres et compositions personnalisés",
      caption: "Des tirages à l’image de votre événement",
    },
    customTitle: "Vos couleurs. Vos souvenirs.",
    custom: [
      {
        src: "/images/ai-from-real/prospect-cadres-960.webp",
        caption: "Votre cadre photo",
        text: "Prénoms, date ou logo sur le modèle personnalisé.",
        alt: "Exemples de cadres photo personnalisés pour une réception",
      },
      {
        src: "/images/ai-from-real/prestations-2026-photobooth.webp",
        caption: "Votre espace photo",
        text: "Décor et habillage spécifiques sur étude et devis.",
        alt: "Photobooth noir et doré présenté dans un espace de réception",
      },
      {
        src: "/images/option-portecle.webp",
        caption: "Vos souvenirs à emporter",
        text: "Porte-clés, magnets et livre d’or en option.",
        alt: "Porte-clés photo MySelfieBooth présentés sur un support",
      },
    ],
    contexts: [
      {
        title: "Mariages",
        href: "/evenements/mariages/",
      },
      {
        title: "Anniversaires",
        href: "/evenements/anniversaires/",
      },
      {
        title: "Entreprises",
        href: "/evenements/corporates/",
      },
    ],
    rates: [
      {
        duration: "5 heures",
        price: 400,
        label: "400 € pour 5 h",
      },
    ],
    includes: [
      "Livraison et installation",
      "Animateur sur place",
      "Modèle de tirage personnalisé",
      "Impressions illimitées selon la formule",
      "Galerie web après l’événement",
    ],
    rateNote:
      "Formats, volume d’impression, accès au lieu et options sont confirmés dans le devis.",
    technical: [
      "Sol stable et prise à proximité",
      "Du recul pour les groupes",
      "Accès et horaires validés ensemble",
    ],
    faq: [
      [
        "Que comprend la location du Photobooth à 400 € ?",
        "400 € pour 5 h avec installation, animateur, modèle personnalisé et galerie. Les formats, impressions selon formule, déplacements et options sont précisés au devis.",
      ],
      [
        "Peut-on personnaliser les photos avec un logo ou des prénoms ?",
        "Oui : prénoms, date, couleurs ou logo sur le modèle photo, validé avec vous avant l’événement.",
      ],
      [
        "Combien de place faut-il prévoir ?",
        "Prévoyez la borne, le recul des groupes, une prise et une circulation dégagée. Envoyez une photo du lieu pour valider l’emplacement.",
      ],
      [
        "Les invités récupèrent-ils les photos après la soirée ?",
        "Oui, la formule prévoit une galerie web après l’événement. Les modalités d’accès sont confirmées à la réservation.",
      ],
      [
        "Intervenez-vous à Paris et en Seine-et-Marne ?",
        "Oui, à Paris, Melun et dans toute l’Île-de-France. Déplacement et accès sont confirmés au devis.",
      ],
    ],
    related: ["miroirbooth", "ipadbooth"],
    aliases: {
      experience: ["presentation", "inclus"],
      custom: [],
      installation: ["ile-de-france", "logistique"],
    },
  },
  miroirbooth: {
    number: "02",
    label: "Photo · Miroir interactif",
    headline: "Un grand miroir. Une vraie présence.",
    intro:
      "Un miroir tactile, un cadre doré et des photos personnalisées. Pour les mariages, galas et soirées d’entreprise.",
    seoTitle: "Location Miroirbooth Paris | Miroir photo dès 450 €",
    seoDescription:
      "Un miroir photobooth interactif pour votre mariage, gala ou entreprise à Paris. Dès 450 € pour 3 h, animateur et photos personnalisées selon formule.",
    hero: "miroirbooth-reception",
    heroAlt:
      "Miroir photo interactif au cadre doré et anneau lumineux dans une réception",
    heroPosition: "43% center",
    promise: "Une animation qui fait aussi partie du décor.",
    facts: [
      ["Le souvenir", "Photos & tirages"],
      ["L’expérience", "Miroir tactile"],
      ["L’accompagnement", "Animateur inclus"],
    ],
    experienceTitle: "Le miroir fait son entrée.",
    proof: {
      src: "/images/realisations-machines/miroirbooth-invites.webp",
      alt: "Des invités prennent la pose devant le Miroirbooth lors d’une réception",
      caption: "Le Miroirbooth, au milieu des invités",
      video: "/videos/realisations-machines/miroirbooth-invites.mp4",
      videoLabel: "Voir le Miroirbooth en réception",
      transcript:
        "Des invités se rassemblent devant le miroir photo interactif, prennent la pose et découvrent l’animation pendant une réception.",
    },
    detail: {
      src: "/images/collection-2026/miroir-photo-dore-900.webp",
      alt: "Miroir photo MySelfieBooth au cadre doré installé face à la tour Eiffel",
      caption: "Un cadre doré, une présence parisienne",
    },
    customTitle: "L’élégance, à votre image.",
    custom: [
      {
        src: "/images/ai-from-real/prospect-cadres-960.webp",
        caption: "Le cadre de vos photos",
        text: "Prénoms, couleurs ou logo, selon le modèle validé.",
        alt: "Cadres photo personnalisés avec compositions pour une réception",
      },
      {
        src: "/images/ai-from-real/prestations-2026-miroirbooth.webp",
        caption: "Un décor coordonné",
        text: "Fond et scénographie complémentaires, sur devis.",
        alt: "Grand Miroirbooth au cadre doré dans un salon élégant",
      },
      {
        src: "/images/event-archive/brice-tirages.webp",
        caption: "Des souvenirs à conserver",
        text: "Tirages et galerie selon la formule retenue.",
        alt: "Tirages photo personnalisés réalisés pendant une réception",
      },
    ],
    contexts: [
      {
        title: "Mariages élégants",
        href: "/evenements/mariages/",
      },
      {
        title: "Galas & soirées",
        href: "/evenements/soirees/",
      },
      {
        title: "Événements d’entreprise",
        href: "/evenements/corporates/",
      },
    ],
    rates: [
      {
        duration: "3 heures",
        price: 450,
        label: "450 € pour 3 h",
      },
      {
        duration: "5 heures",
        price: 500,
        label: "500 € pour 5 h",
      },
    ],
    includes: [
      "Livraison et installation",
      "Animateur sur place",
      "Modèle photo personnalisé",
      "Impressions illimitées selon la formule",
      "Galerie web après l’événement",
    ],
    rateNote:
      "Formats et volume d’impression, accès au lieu et décor optionnel sont détaillés au devis.",
    technical: [
      "Sol plat et prise à proximité",
      "Du recul devant le miroir",
      "Accès et extérieur à valider",
    ],
    faq: [
      [
        "Quelle différence entre un Photobooth et un Miroirbooth ?",
        "Le Photobooth est une borne compacte. Le Miroirbooth ajoute un grand miroir tactile et un cadre doré, avec davantage de recul à prévoir.",
      ],
      [
        "Quel est le tarif du Miroirbooth ?",
        "450 € pour 3 h ou 500 € pour 5 h. Installation, animateur, personnalisation, impressions selon formule et galerie sont prévus ; options et déplacements au devis.",
      ],
      [
        "Les photos peuvent-elles reprendre notre thème ?",
        "Oui : prénoms, date, couleurs ou logo sur le modèle photo. Un décor coordonné peut être ajouté en option.",
      ],
      [
        "Un animateur reste-t-il sur place ?",
        "Oui, la formule présentée comprend un animateur pour guider les invités et accompagner l’animation.",
      ],
      [
        "Le miroir peut-il être installé en extérieur ?",
        "Uniquement après validation d’un emplacement stable, protégé et compatible avec le matériel et l’alimentation.",
      ],
    ],
    related: ["photobooth", "voguebooth"],
    aliases: {
      experience: ["miroir-photobooth", "usages-miroir"],
      custom: ["personnalisation-miroir"],
      installation: ["installation-miroir"],
      related: ["photobooth-vs-miroirbooth"],
    },
  },
  videobooth: {
    number: "03",
    label: "Vidéo · Plateforme 360°",
    headline: "Une rotation. Toute l’énergie de votre soirée.",
    intro:
      "Montez sur la plateforme et laissez tourner la caméra. Des vidéos 4K personnalisables, jusqu’à 5 participants selon configuration.",
    seoTitle: "Location 360 Booth Paris | Vidéo 4K dès 400 €",
    seoDescription:
      "Louez un 360 Booth à Paris : vidéos 4K, jusqu’à 5 participants selon configuration, animateur et installation. 3 h dès 400 €. Devis personnalisé.",
    hero: "360-booth-reception",
    heroAlt:
      "Plateforme vidéo 360 MySelfieBooth éclairée dans une salle de réception",
    heroPosition: "52% center",
    promise: "Le souvenir se vit aussi en mouvement.",
    facts: [
      ["Le résultat", "Vidéos 4K"],
      ["Le groupe", "Jusqu’à 5 personnes*"],
      ["L’accompagnement", "Animateur inclus"],
    ],
    experienceTitle: "Le mouvement vous va bien.",
    proof: {
      src: "/images/event-archive/video-posters/360-red-carpet.webp",
      alt: "Deux invitées sur la plateforme vidéo 360 pendant une soirée",
      caption: "Une séquence 360, pendant une vraie soirée",
      video: "/videos/event-archive/360-red-carpet.mp4",
      videoLabel: "Regarder une vidéo 360 Booth",
      transcript:
        "Deux invitées posent et bougent sur la plateforme lumineuse pendant que la caméra tourne autour d’elles dans une salle de réception.",
    },
    detail: {
      src: "/images/collection-2026/plateforme-video-360-900.webp",
      alt: "Installation réelle de la plateforme vidéo 360 avec éclairages et balisage",
      caption: "La plateforme et son espace d’animation",
    },
    customTitle: "Votre signature, en mouvement.",
    custom: [
      {
        src: "/images/ai-from-real/prestations-2026-videobooth.webp",
        caption: "Votre scène vidéo",
        text: "Implantation et décor adaptés, sur devis.",
        alt: "Plateforme vidéo 360 avec éclairages dans un décor de réception",
      },
      {
        src: "/images/fond 360.webp",
        caption: "Une ambiance lumineuse",
        text: "Fond LED en option, selon l’espace disponible.",
        alt: "Fond LED vert proposé en option pour une animation vidéo 360",
      },
      {
        src: "/images/realisations/sephora-360booth.webp",
        caption: "L’univers de votre marque",
        text: "Logo et habillage vidéo selon configuration.",
        alt: "Installation réelle du 360 Booth lors d’un événement Sephora",
      },
    ],
    contexts: [
      {
        title: "Mariages & fêtes",
        href: "/evenements/mariages/",
      },
      {
        title: "Lancements de produits",
        href: "/evenements/corporates/",
      },
      {
        title: "Soirées & galas",
        href: "/evenements/soirees/",
      },
    ],
    rates: [
      {
        duration: "3 heures",
        price: 400,
        label: "400 € pour 3 h",
      },
      {
        duration: "5 heures",
        price: 450,
        label: "450 € pour 5 h",
      },
    ],
    includes: [
      "Vidéos 4K illimitées",
      "Jusqu’à 5 participants selon configuration",
      "Livraison et installation",
      "Animateur sur place",
      "Galerie web après l’événement",
    ],
    rateNote:
      "Habillage vidéo, fond, accès et options sont confirmés au devis. Le 360 Booth est une animation vidéo, sans tirage photo.",
    technical: [
      "Sol plat et alimentation électrique",
      "Zone de rotation entièrement dégagée",
      "Capacité et espace validés avant réservation",
    ],
    faq: [
      [
        "Quelle différence entre le 360 Booth et l’Air360 ?",
        "Le 360 Booth filme autour d’une plateforme, jusqu’à 5 personnes selon configuration. L’Air360 utilise une caméra en hauteur, jusqu’à 10 participants, dans un espace plus grand.",
      ],
      [
        "Combien coûte la location du 360 Booth ?",
        "400 € pour 3 h ou 450 € pour 5 h : vidéos 4K, livraison, installation, animateur et galerie. Options et conditions du lieu au devis.",
      ],
      [
        "Faut-il prévoir beaucoup d’espace ?",
        "La zone de rotation doit rester dégagée, séparée des passages et de l’attente. Sol, surface, hauteur et alimentation sont vérifiés avant réservation.",
      ],
      [
        "Peut-on ajouter notre logo aux vidéos ?",
        "Oui, un habillage graphique peut reprendre votre identité. Les éléments et la configuration sont validés avant la prestation.",
      ],
      [
        "Le 360 Booth imprime-t-il des photos ?",
        "Non, cette animation produit des vidéos. Un Photobooth ou Miroirbooth peut la compléter pour les tirages, sur devis.",
      ],
    ],
    related: ["air360booth", "photobooth"],
    aliases: {
      experience: ["spinner-360", "fonctionnement-360", "flux-360"],
      custom: ["personnalisation-video-360"],
      installation: ["securite-360"],
      related: ["360-vs-photobooth"],
    },
  },
  air360booth: {
    number: "04",
    label: "Vidéo · Caméra en hauteur",
    headline: "Voyez plus grand. Vivez le moment ensemble.",
    intro:
      "Une caméra en hauteur et une grande scène ouverte. Des vidéos 4K pour des groupes jusqu’à 10 personnes selon configuration.",
    seoTitle: "Location Air360 Booth Paris | Vidéo de groupe dès 400 €",
    seoDescription:
      "Air360 Booth à Paris et en Île-de-France : vidéos 4K, caméra en hauteur, jusqu’à 10 personnes selon configuration. Installation et animateur dès 400 €.",
    hero: "machines-air360",
    heroAlt:
      "Structure Air360 ouverte avec caméra en hauteur et groupe de participants dans une réception contemporaine",
    heroPosition: "62% center",
    promise: "Le grand format, pour les moments de groupe.",
    facts: [
      ["Le résultat", "Vidéos 4K"],
      ["Le groupe", "Jusqu’à 10 personnes*"],
      ["L’accompagnement", "Animateur inclus"],
    ],
    experienceTitle: "Le groupe au grand complet.",
    proof: {
      src: "/images/machines-premium/air360-en-action.webp",
      alt: "Participants réunis sous l’Air360 Booth pendant une prestation MySelfieBooth",
      caption: "L’Air360 en action, avec nos invités",
      video: "/videos/machines-premium/air360-en-action.mp4",
      videoLabel: "Voir l’Air360 Booth en action",
      transcript:
        "Un groupe d’invités participe à une séquence sous la structure Air360. La caméra en hauteur enregistre leurs mouvements pendant la réception.",
    },
    detail: {
      src: "/images/airbooth.webp",
      alt: "Structure réelle de l’Air360 Booth avec des participants sous la caméra en hauteur",
      caption: "Une structure ouverte pour filmer les groupes",
    },
    customTitle: "Votre univers, en grand.",
    custom: [
      {
        src: "/images/ai-from-real/prestations-2026-air360booth.webp",
        caption: "La scène grand format",
        text: "Une implantation étudiée pour votre lieu.",
        alt: "Structure Air360 Booth ouverte avec caméra montée en hauteur",
      },
      {
        src: "/images/ai-from-real/machines-air-scene-900.webp",
        caption: "L’esprit de votre événement",
        text: "Habillage vidéo personnalisé ; décor spécifique sur devis.",
        alt: "Air360 avec groupe de participants dans un espace événementiel lumineux",
      },
      {
        src: "/images/fond 360.webp",
        caption: "Le décor autour de vous",
        text: "Fond LED en option, après validation technique.",
        alt: "Fond lumineux LED pour compléter une animation vidéo compatible",
      },
    ],
    contexts: [
      {
        title: "Grandes réceptions",
        href: "/evenements/mariages/",
      },
      {
        title: "Entreprises & équipes",
        href: "/evenements/corporates/",
      },
      {
        title: "Galas & soirées",
        href: "/evenements/soirees/",
      },
    ],
    rates: [
      {
        duration: "3 heures",
        price: 400,
        label: "400 € pour 3 h",
      },
      {
        duration: "5 heures",
        price: 450,
        label: "450 € pour 5 h",
      },
    ],
    includes: [
      "Vidéos 4K illimitées",
      "Jusqu’à 10 participants selon configuration",
      "Livraison et installation",
      "Animateur sur place",
      "Personnalisation vidéo",
    ],
    rateNote:
      "L’espace, les accès, les horaires et les éventuels décors sont validés au devis. Animation vidéo sans impression photo.",
    technical: [
      "Surface et hauteur à valider",
      "Accès de montage vérifiés",
      "Périmètre et circulation dégagés",
    ],
    faq: [
      [
        "Combien de personnes peuvent participer à l’Air360 ?",
        "Jusqu’à 10 personnes selon configuration. L’espace et les conditions d’utilisation déterminent la capacité finale.",
      ],
      [
        "Quelle différence avec la plateforme 360 classique ?",
        "Le 360 classique utilise une plateforme. L’Air360 filme depuis une structure en hauteur, accueille des groupes plus grands et demande davantage d’espace.",
      ],
      [
        "Quel est le prix de l’Air360 Booth ?",
        "400 € pour 3 h ou 450 € pour 5 h : vidéos 4K, personnalisation vidéo, installation et animateur. Options et déplacements au devis.",
      ],
      [
        "L’Air360 convient-il à toutes les salles ?",
        "Surface, hauteur, alimentation et accès doivent être validés. Une photo ou un plan du lieu permet d’étudier l’installation.",
      ],
      [
        "Peut-on le réserver pour plusieurs jours ?",
        "Oui, sur devis spécifique selon les horaires, l’équipe, la sécurisation et le stockage du matériel.",
      ],
    ],
    related: ["videobooth", "voguebooth"],
    aliases: {},
  },
  voguebooth: {
    number: "05",
    label: "Photo · Décor éditorial",
    headline: "Votre événement mérite sa une.",
    intro:
      "Un décor lumineux façon couverture de magazine. Visuel personnalisé ; photographe et impressions en option.",
    seoTitle: "Location Vogue Booth Paris | Décor magazine dès 500 €",
    seoDescription:
      "Un Vogue Booth lumineux et personnalisable à Paris pour mariage, gala ou marque. 500 € pour 5 h ; photographe et impressions en option. Demandez votre devis.",
    hero: "vogue-booth-reception",
    heroAlt:
      "Vogue Booth lumineux avec façade effet couverture de magazine dans un décor de gala",
    heroPosition: "55% center",
    promise: "Le décor devient une partie du souvenir.",
    facts: [
      ["L’univers", "Effet magazine"],
      ["La formule", "5 h de location"],
      ["À personnaliser", "Visuel & décor"],
    ],
    experienceTitle: "À vous la une.",
    proof: {
      src: "/images/vogue-real/vogue-booth-anniversaire-card.webp",
      alt: "Vogue Booth personnalisé installé pour un anniversaire",
      caption: "Un Vogue Booth personnalisé pour un anniversaire",
      video: "/videos/vogue-real/vogue-booth-anniversaire.mp4",
      videoLabel: "Découvrir le Vogue Booth en événement",
      transcript:
        "La vidéo présente le Vogue Booth installé pour un anniversaire, son encadrement façon couverture de magazine et son décor de rideaux.",
    },
    detail: {
      src: "/images/collection-2026/vogue-booth-rideaux-blancs-900.webp",
      alt: "Vogue Booth MySelfieBooth avec rideaux blancs et façade personnalisée",
      caption: "Lumière, rideaux et façade personnalisable",
    },
    customTitle: "Une couverture qui vous ressemble.",
    custom: [
      {
        src: "/images/ai-from-real/prestations-2026-voguebooth.webp",
        caption: "Votre couverture",
        text: "Prénoms, date ou identité de marque sur le visuel.",
        alt: "Façade de Vogue Booth lumineux inspirée d’une couverture de magazine",
      },
      {
        src: "/images/ai-from-real/voguebooth-premium.webp",
        caption: "Votre scénographie",
        text: "Décor et fleurs complémentaires sur étude et devis.",
        alt: "Vogue Booth lumineux avec composition florale dans un décor de réception",
      },
      {
        src: "/images/collection-2026/portrait-vogue-booth-900.webp",
        caption: "Votre portrait",
        text: "Photographe et impressions disponibles en option.",
        alt: "Portrait réalisé dans le décor lumineux Vogue Booth MySelfieBooth",
      },
    ],
    contexts: [
      {
        title: "Mariages",
        href: "/evenements/mariages/",
      },
      {
        title: "Anniversaires & galas",
        href: "/evenements/anniversaires/",
      },
      {
        title: "Mode, beauté & marques",
        href: "/evenements/corporates/",
      },
    ],
    rates: [
      {
        duration: "5 heures",
        price: 500,
        label: "500 € pour 5 h",
      },
    ],
    includes: [
      "Livraison et installation",
      "Structure et décor lumineux",
      "Personnalisation du visuel",
    ],
    extras:
      "Photographe, impressions et décoration additionnelle en option, sur devis.",
    rateNote:
      "Formule particulière à partir de 500 €. Projets corporate et Portrait Studio à partir de 900 € HT, selon le brief et les options.",
    technical: [
      "Accès, surface et hauteur à valider",
      "Du recul pour les portraits",
      "Visuel et options validés avant montage",
    ],
    faq: [
      [
        "Le Vogue Booth est-il une borne photo automatique ?",
        "C’est un décor lumineux effet magazine. La prise de vue et les impressions dépendent des options ; ce n’est pas une borne automatique avec tirages inclus.",
      ],
      [
        "Quel est le prix du Vogue Booth ?",
        "500 € pour 5 h pour les particuliers : structure lumineuse, installation et visuel personnalisé. Corporate et Portrait Studio dès 900 € HT selon brief.",
      ],
      [
        "Le photographe et les impressions sont-ils inclus ?",
        "Non, ils sont en option, comme la décoration additionnelle. Chaque prestation est détaillée dans le devis.",
      ],
      [
        "Peut-on personnaliser le texte et les couleurs ?",
        "Oui : prénoms, date, titre de soirée ou identité de marque. Les adaptations de parois et de scénographie sont étudiées sur devis.",
      ],
      [
        "Quel espace faut-il prévoir pour le Vogue Booth ?",
        "Il faut la place pour la structure, le recul photo et la circulation. Dimensions, accès, hauteur et alimentation sont validés ensemble.",
      ],
    ],
    related: ["miroirbooth", "photobooth"],
    aliases: {
      experience: ["portrait-studio", "photocall-vogue", "flux-vogue"],
      custom: ["personnalisation-vogue"],
      installation: ["installation-vogue"],
      related: ["vogue-vs-photobooth"],
    },
  },
  ipadbooth: {
    number: "06",
    label: "Photo · 100 % numérique",
    headline: "Petit format. Grands sourires.",
    intro:
      "La borne compacte pour vos photos numériques : visuel personnalisé et galerie web, sans impression photo.",
    seoTitle: "Location iPad Booth Paris | Borne photo compacte dès 250 €",
    seoDescription:
      "Louez un iPad Booth compact à Paris : photos numériques illimitées, visuel personnalisé et galerie web. 250 € pour 24 à 48 h, livraison en option.",
    hero: "machines-ipad",
    heroAlt:
      "iPad Booth compact avec tablette et anneau lumineux dans une boutique contemporaine",
    heroPosition: "65% center",
    promise: "L’animation photo qui trouve sa place chez vous.",
    facts: [
      ["Le souvenir", "Photos numériques"],
      ["Le format", "Borne compacte"],
      ["La location", "24 à 48 heures"],
    ],
    experienceTitle: "Petit format, grands sourires.",
    proof: {
      src: "/images/ipadbooth.webp",
      alt: "iPad Booth MySelfieBooth avec tablette au centre d’un anneau lumineux",
      caption: "La tablette et son anneau lumineux",
    },
    customTitle: "Simple. Compact. À votre image.",
    custom: [
      {
        src: "/images/ai-from-real/prestations-2026-ipadbooth.webp",
        caption: "Votre visuel personnalisé",
        text: "Logo, couleurs ou message sur le modèle photo validé.",
        alt: "iPad Booth compact avec anneau lumineux et tablette sur pied",
      },
      {
        src: "/images/ai-from-real/prestations-2026-decors.webp",
        caption: "Votre point photo",
        text: "Un fond soigné et un espace adapté à votre lieu.",
        alt: "Décors de réception pour composer un espace photo événementiel",
      },
    ],
    contexts: [
      {
        title: "Salons & stands",
        href: "/evenements/corporates/",
      },
      {
        title: "Anniversaires",
        href: "/evenements/anniversaires/",
      },
      {
        title: "Boutiques & accueils",
        href: "/evenements/corporates/",
      },
    ],
    rates: [
      {
        duration: "24 à 48 heures",
        price: 250,
        label: "250 € pour 24 à 48 h",
      },
    ],
    includes: [
      "Montage rapide",
      "Photos numériques illimitées",
      "Personnalisation du visuel",
      "Galerie web après l’événement",
    ],
    extras:
      "Livraison en option. Présence d’un animateur selon la formule, à confirmer au devis.",
    rateNote:
      "Location numérique sans tirages. Modalités de remise du matériel, durée et options sont confirmées à la réservation.",
    technical: [
      "Un emplacement stable et visible",
      "Alimentation à vérifier selon la durée",
      "Remise du matériel et livraison à convenir",
    ],
    faq: [
      [
        "L’iPad Booth imprime-t-il les photos ?",
        "Non, cette formule est numérique, sans tirages. Choisissez le Photobooth ou le Miroirbooth pour imprimer sur place.",
      ],
      [
        "Que comprend le tarif de 250 € ?",
        "250 € pour 24 à 48 h avec photos numériques illimitées, visuel personnalisé et galerie web. Livraison et accompagnement éventuel sont précisés au devis.",
      ],
      [
        "La livraison et un animateur sont-ils inclus ?",
        "La livraison est en option. La présence d’un animateur dépend de la formule choisie.",
      ],
      [
        "Peut-on personnaliser les photos pour une entreprise ?",
        "Oui, le modèle photo peut reprendre un logo, des couleurs ou un message. Les fonctionnalités de partage sont à confirmer selon configuration.",
      ],
      [
        "Faut-il une connexion Internet ?",
        "Cela dépend du partage retenu. Les besoins réseau sont validés avant l’événement ; aucun envoi instantané n’est garanti sans vérification.",
      ],
    ],
    related: ["photobooth", "miroirbooth"],
    aliases: {},
    detail: {
      src: "/images/ai-from-real/machines-ipad-scene-900.webp",
      alt: "iPad Booth avec anneau lumineux utilisé dans un décor de boutique rose et blanc",
      caption: "Un format pensé pour vos boutiques et vos fêtes",
    },
  },
};

export const machinePages = Object.fromEntries(
  Object.entries(details).map(([key, detail]) => {
    const catalog = machines.find((machine) => machine.key === key);
    const firstLegacySection =
      key === "miroirbooth"
        ? 6
        : ["videobooth", "voguebooth"].includes(key)
          ? 7
          : 1;
    return [
      key,
      {
        ...detail,
        aliases: {
          ...detail.aliases,
          experience: [
            ...(detail.aliases.experience || []),
            `section-${firstLegacySection}`,
          ],
          offer: [`section-${firstLegacySection + 1}`],
          installation: [
            ...(detail.aliases.installation || []),
            `section-${firstLegacySection + 2}`,
          ],
        },
        key,
        name: catalog.name,
        href: `${catalog.href}/`,
        bookingUrl: catalog.bookingUrl,
        priceFrom: catalog.priceFrom,
      },
    ];
  }),
);

export function heroImage(page, width = 900) {
  return `/images/ai-from-real/${page.hero}-${width}.webp`;
}
