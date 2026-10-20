import { machines } from "../../data/catalog";

const ai = "/images/ai-from-real/";
const collection = "/images/collection-2026/";
const real = "/images/realisations-machines/";

// Starting prices and booking identifiers come from the existing catalogue.
// Duration offers preserve its prices; bespoke additions remain subject to a quote.
const details = {
  photobooth: {
    number: "01",
    label: "Photo · Impression",
    headline: "Des instants spontanés. Des souvenirs à garder.",
    intro:
      "Un écran, un sourire, une photo à emporter. Notre borne photo réunit vos invités autour de tirages personnalisés pour un mariage, un anniversaire ou un événement d’entreprise à Paris et en Île-de-France.",
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
    experienceTitle:
      "Les photos qu’on prend ensemble. Et qu’on garde longtemps.",
    experienceText:
      "En duo, en famille ou entre collègues, les invités prennent la pose devant la borne. Le cadre photo reprend votre univers et la galerie prolonge les souvenirs après la fête.",
    proof: {
      src: collection + "photobooth-noir-or-900.webp",
      alt: "Photobooth noir et doré MySelfieBooth installé sur un tapis rouge dans une salle de réception",
      caption: "Notre Photobooth, prêt à accueillir vos invités",
      video:
        "/videos/realisations-machines/installation-photobooth-timelapse.mp4",
      videoLabel: "Voir l’installation du Photobooth",
      transcript:
        "L’équipe installe la borne photo, prépare l’espace de prise de vue et effectue les réglages avant l’arrivée des invités.",
    },
    detail: {
      src: collection + "exemples-tirages-personnalises-900.webp",
      alt: "Exemples réels de tirages photo avec cadres et compositions personnalisés",
      caption: "Des tirages à l’image de votre événement",
    },
    benefits: [
      [
        "Simple pour tous",
        "Les invités suivent l’écran, se placent et déclenchent leur photo. L’animateur les accompagne pendant la prestation.",
      ],
      [
        "Un souvenir tangible",
        "Le tirage se glisse dans un sac, se partage et se conserve. Formats et impressions sont précisés dans votre devis.",
      ],
      [
        "Une galerie pour revivre la fête",
        "Retrouvez les photos numériques après l’événement dans la galerie web prévue dans votre formule.",
      ],
    ],
    customTitle: "Votre date. Vos couleurs. Vos souvenirs.",
    custom: [
      [
        "Le cadre photo",
        "Prénoms, date, message ou logo : le modèle de tirage est personnalisé pour votre événement.",
      ],
      [
        "Le décor autour de vous",
        "Mur floral et accessoires peuvent compléter votre espace photo, en option selon le lieu.",
      ],
      [
        "Le souvenir à emporter",
        "Magnets, porte-clés photo et livre d’or physique sont disponibles en complément, sur devis.",
      ],
    ],
    contexts: [
      [
        "Mariages",
        "Une animation qui réunit les générations, du cocktail à la soirée.",
        "/evenements/mariages/",
      ],
      [
        "Anniversaires",
        "Des photos de groupe, des poses libres et un souvenir de la fête.",
        "/evenements/anniversaires/",
      ],
      [
        "Entreprises",
        "Un cadre aux couleurs de votre équipe pour un salon ou une soirée.",
        "/evenements/corporates/",
      ],
    ],
    rates: [{ duration: "5 heures", price: 400, label: "400 € pour 5 h" }],
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
      [
        "L’emplacement",
        "Un sol stable, une prise à proximité et du recul pour les groupes. Nous validons ensemble l’espace photo et le fond.",
      ],
      [
        "L’accès au lieu",
        "Précisez l’adresse, les étages, le stationnement et les horaires de montage. Une installation extérieure nécessite une validation préalable.",
      ],
      [
        "Le rythme",
        "Indiquez le nombre d’invités et les temps forts : nous organisons l’animation pour qu’elle s’intègre à votre réception.",
      ],
    ],
    faq: [
      [
        "Que comprend la location du Photobooth à 400 € ?",
        "La formule de 5 h comprend la livraison et l’installation, un animateur, un modèle de tirage personnalisé, les impressions selon la formule et une galerie web après l’événement. Le devis précise les formats, le volume d’impression, la zone de livraison et les éventuels compléments.",
      ],
      [
        "Peut-on personnaliser les photos avec un logo ou des prénoms ?",
        "Oui, le modèle photo peut reprendre vos prénoms, votre date, vos couleurs ou votre logo. Les éléments graphiques et le rendu sont validés avec vous avant l’événement.",
      ],
      [
        "Combien de place faut-il prévoir ?",
        "Il faut tenir compte de la borne, du recul des participants, du fond et de la circulation. Envoyez une photo ou un plan de l’emplacement : nous vérifions l’installation plutôt que de donner une dimension unique pour tous les lieux.",
      ],
      [
        "Les invités récupèrent-ils les photos après la soirée ?",
        "La formule prévoit une galerie web après l’événement. Les modalités d’accès et de remise des fichiers sont précisées lors de la réservation.",
      ],
      [
        "Intervenez-vous à Paris et en Seine-et-Marne ?",
        "Oui, nous accompagnons les événements à Paris, à Melun, en Seine-et-Marne et dans toute l’Île-de-France. Les conditions de déplacement et d’accès sont confirmées au devis.",
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
      "Un cadre doré, un miroir tactile et vos invités sous les projecteurs. Le Miroirbooth apporte une touche élégante à votre mariage, votre gala ou votre soirée d’entreprise, avec des photos personnalisées à conserver.",
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
    experienceTitle: "Prenez la pose. Le miroir s’occupe de l’ambiance.",
    experienceText:
      "Le grand miroir attire le regard et invite les groupes à se retrouver. L’interface guide la séance, l’animateur accompagne les invités et le modèle photo fait le lien avec votre événement.",
    proof: {
      src: real + "miroirbooth-invites.webp",
      alt: "Des invités prennent la pose devant le Miroirbooth lors d’une réception",
      caption: "Le Miroirbooth, au milieu des invités",
      video: "/videos/realisations-machines/miroirbooth-invites.mp4",
      videoLabel: "Voir le Miroirbooth en réception",
      transcript:
        "Des invités se rassemblent devant le miroir photo interactif, prennent la pose et découvrent l’animation pendant une réception.",
    },
    detail: {
      src: collection + "miroir-photo-dore-900.webp",
      alt: "Miroir photo MySelfieBooth au cadre doré installé face à la tour Eiffel",
      caption: "Un cadre doré, une présence parisienne",
    },
    benefits: [
      [
        "Un point photo visible",
        "Le miroir grand format s’intègre à la scénographie d’une salle élégante et devient un lieu de rendez-vous pour vos invités.",
      ],
      [
        "Une séance accompagnée",
        "L’animateur aide à se placer et à lancer les prises de vue pour des photos à deux ou en petit groupe.",
      ],
      [
        "Des photos à conserver",
        "Tirages personnalisés selon formule et galerie web permettent de garder le souvenir au-delà de la soirée.",
      ],
    ],
    customTitle: "L’élégance du miroir. La signature de votre événement.",
    custom: [
      [
        "Votre identité sur la photo",
        "Un cadre avec vos prénoms, votre date ou le logo de votre entreprise, selon le modèle validé.",
      ],
      [
        "Un décor coordonné",
        "Mur floral ou panneau de bienvenue peuvent compléter l’espace miroir en option.",
      ],
      [
        "Des souvenirs en plus",
        "Magnets et livre d’or physique sont proposés en complément selon votre projet, sur devis.",
      ],
    ],
    contexts: [
      [
        "Mariages élégants",
        "Un miroir doré pour prolonger une décoration de réception soignée.",
        "/evenements/mariages/",
      ],
      [
        "Galas & soirées",
        "Une présence visuelle forte à l’accueil ou près d’un photocall.",
        "/evenements/soirees/",
      ],
      [
        "Événements d’entreprise",
        "Des photos personnalisées pour vos équipes, partenaires et invités.",
        "/evenements/corporates/",
      ],
    ],
    rates: [
      { duration: "3 heures", price: 450, label: "450 € pour 3 h" },
      { duration: "5 heures", price: 500, label: "500 € pour 5 h" },
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
      [
        "Le recul photo",
        "Prévoyez un emplacement assez large pour le miroir, les groupes et leur recul, sans bloquer une porte ou un passage.",
      ],
      [
        "La stabilité",
        "Le miroir nécessite un sol plat et une alimentation électrique à proximité. Nous validons les accès de livraison avant le montage.",
      ],
      [
        "Le décor",
        "Un fond lisible et un espace dédié valorisent les portraits. Le mur floral et la signalétique sont proposés en option.",
      ],
    ],
    faq: [
      [
        "Quelle différence entre un Photobooth et un Miroirbooth ?",
        "Les deux créent des photos personnalisées. Le Photobooth est une borne plus compacte ; le Miroirbooth dispose d’un grand miroir tactile et d’un cadre doré qui participent au décor. Le miroir demande davantage de recul pour les participants.",
      ],
      [
        "Quel est le tarif du Miroirbooth ?",
        "Les tarifs du catalogue sont de 450 € pour 3 h et de 500 € pour 5 h. Livraison, installation, animateur, personnalisation photo, impressions selon formule et galerie web sont prévus. Les conditions d’accès et les options sont confirmées au devis.",
      ],
      [
        "Les photos peuvent-elles reprendre notre thème ?",
        "Oui. Prénoms, date, couleurs et logo peuvent être intégrés au modèle photo. Un décor coordonné peut également être étudié en option.",
      ],
      [
        "Un animateur reste-t-il sur place ?",
        "Oui, un animateur est prévu pour accompagner les invités et le bon déroulement de l’animation dans la formule présentée.",
      ],
      [
        "Le miroir peut-il être installé en extérieur ?",
        "L’emplacement doit être stable, protégé et compatible avec le matériel et l’alimentation. Toute installation extérieure est étudiée et validée avant la réservation.",
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
      "Montez sur la plateforme, bougez, souriez : la caméra tourne autour de vous pour créer une vidéo 360 personnalisée. Une animation de groupe qui met le mouvement au cœur de votre événement.",
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
    experienceText:
      "Les invités prennent place sur la plateforme. Guidés par l’animateur, ils jouent avec la caméra pendant sa rotation. Le clip reçoit un habillage graphique adapté à votre événement.",
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
      src: collection + "plateforme-video-360-900.webp",
      alt: "Installation réelle de la plateforme vidéo 360 avec éclairages et balisage",
      caption: "La plateforme et son espace d’animation",
    },
    benefits: [
      [
        "Un souvenir dynamique",
        "La rotation donne une autre dimension aux gestes, aux tenues et aux poses de groupe.",
      ],
      [
        "Un format collectif",
        "La plateforme accueille jusqu’à 5 personnes selon configuration. L’animateur organise chaque passage.",
      ],
      [
        "Des vidéos personnalisées",
        "Le clip peut reprendre les éléments graphiques de votre soirée ou de votre marque selon le brief.",
      ],
    ],
    customTitle: "Un clip qui porte votre signature.",
    custom: [
      [
        "L’habillage graphique",
        "Prénoms, date, logo ou couleurs de marque peuvent accompagner vos vidéos selon la configuration validée.",
      ],
      [
        "L’arrière-plan",
        "Un fond LED 360 ou un décor compatible peut compléter l’installation, en option après validation de l’espace.",
      ],
      [
        "L’univers de l’événement",
        "L’animation peut s’intégrer à un lancement, un gala ou une fête privée. Les demandes spécifiques sont étudiées sur devis.",
      ],
    ],
    contexts: [
      [
        "Mariages & fêtes",
        "Des poses complices et des séquences de groupe au rythme de la soirée.",
        "/evenements/mariages/",
      ],
      [
        "Lancements de produits",
        "Du mouvement et une identité graphique pour votre activation de marque.",
        "/evenements/corporates/",
      ],
      [
        "Soirées & galas",
        "Une animation visible, accompagnée et pensée pour créer de l’ambiance.",
        "/evenements/soirees/",
      ],
    ],
    rates: [
      { duration: "3 heures", price: 400, label: "400 € pour 3 h" },
      { duration: "5 heures", price: 450, label: "450 € pour 5 h" },
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
      [
        "La rotation",
        "La zone autour du bras doit rester entièrement dégagée, à l’écart du mobilier, des passages et de la file d’attente.",
      ],
      [
        "Le sol et l’alimentation",
        "Un sol plat et stable ainsi qu’une prise électrique sont nécessaires. Surface et hauteur sont validées avec le lieu avant confirmation.",
      ],
      [
        "Les participants",
        "La capacité dépend de la configuration retenue. L’animateur gère les entrées et sorties pour préserver la sécurité et le rythme.",
      ],
    ],
    faq: [
      [
        "Quelle différence entre le 360 Booth et l’Air360 ?",
        "Le 360 Booth filme autour d’une plateforme sur laquelle montent les invités, jusqu’à 5 personnes selon configuration. L’Air360 utilise une structure avec caméra en hauteur et permet des groupes jusqu’à 10 personnes selon configuration, dans un espace plus grand.",
      ],
      [
        "Combien coûte la location du 360 Booth ?",
        "Les tarifs sont de 400 € pour 3 h et de 450 € pour 5 h. La formule prévoit vidéos 4K illimitées, livraison, installation, animateur et galerie web. Les options et contraintes du lieu sont précisées au devis.",
      ],
      [
        "Faut-il prévoir beaucoup d’espace ?",
        "Il faut dégager toute la zone de rotation et séparer l’attente du passage des invités. Nous vérifions le sol, la surface, la hauteur et l’alimentation à partir des informations de votre lieu avant de confirmer la faisabilité.",
      ],
      [
        "Peut-on ajouter notre logo aux vidéos ?",
        "Oui, un habillage graphique peut être adapté à votre événement ou à votre marque. Les éléments intégrés et la configuration sont validés avant la prestation.",
      ],
      [
        "Le 360 Booth imprime-t-il des photos ?",
        "Cette animation produit des vidéos, sans impression photo. Si vous souhaitez aussi des tirages, nous pouvons étudier une combinaison avec un Photobooth ou un Miroirbooth, sur devis.",
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
      "Avec sa caméra en hauteur et son espace ouvert, l’Air360 Booth donne une autre ampleur à vos vidéos. Jusqu’à 10 participants selon configuration pour réunir une équipe, une famille ou un groupe d’amis dans le même souvenir.",
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
    experienceTitle: "Tout le groupe entre dans le souvenir.",
    experienceText:
      "La structure place la caméra au-dessus de la scène pour une expérience collective. L’animateur guide les participants et organise les passages dans un espace dédié à l’animation.",
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
    benefits: [
      [
        "Plus de place pour vos invités",
        "Jusqu’à 10 personnes selon configuration : une capacité adaptée aux photos de famille en mouvement et aux équipes.",
      ],
      [
        "Une présence spectaculaire",
        "La grande structure identifie immédiatement l’espace d’animation dans une salle de réception ou un événement professionnel.",
      ],
      [
        "Une expérience guidée",
        "L’animateur accompagne les mouvements et le placement pour que chacun profite de son passage.",
      ],
    ],
    customTitle: "Une vidéo de groupe, aux couleurs de votre événement.",
    custom: [
      [
        "Votre identité graphique",
        "L’habillage vidéo est personnalisé avec les éléments retenus : prénoms, date, couleurs ou logo.",
      ],
      [
        "Votre scène",
        "Fond LED ou décor complémentaire peuvent être étudiés selon l’espace disponible et la compatibilité technique.",
      ],
      [
        "Votre format d’événement",
        "La durée, les horaires et les projets sur plusieurs jours sont organisés sur devis selon les contraintes du lieu.",
      ],
    ],
    contexts: [
      [
        "Grandes réceptions",
        "Un format collectif pour retrouver sa famille ou son groupe d’amis.",
        "/evenements/mariages/",
      ],
      [
        "Entreprises & équipes",
        "Une animation vidéo pour réunir les collaborateurs dans le même cadre.",
        "/evenements/corporates/",
      ],
      [
        "Galas & soirées",
        "Une installation de grande ampleur qui devient un temps fort de la fête.",
        "/evenements/soirees/",
      ],
    ],
    rates: [
      { duration: "3 heures", price: 400, label: "400 € pour 3 h" },
      { duration: "5 heures", price: 450, label: "450 € pour 5 h" },
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
      [
        "L’espace et la hauteur",
        "La grande structure nécessite une surface et une hauteur libres suffisantes. Envoyez un plan et des photos pour valider l’implantation.",
      ],
      [
        "Les accès de montage",
        "Portes, escaliers, ascenseur, stationnement et créneau d’installation doivent être vérifiés avant confirmation.",
      ],
      [
        "La circulation",
        "Un périmètre dédié sépare les participants du public et de l’attente. La capacité finale est validée selon la configuration et le lieu.",
      ],
    ],
    faq: [
      [
        "Combien de personnes peuvent participer à l’Air360 ?",
        "L’Air360 accueille jusqu’à 10 personnes selon configuration. La capacité finale est confirmée en fonction du lieu, de l’espace disponible et des conditions d’utilisation.",
      ],
      [
        "Quelle différence avec la plateforme 360 classique ?",
        "Sur le 360 Booth classique, les invités montent sur une plateforme et la caméra tourne autour d’eux. L’Air360 dispose d’une grande structure avec caméra en hauteur, adaptée aux groupes plus nombreux. Il nécessite davantage d’espace.",
      ],
      [
        "Quel est le prix de l’Air360 Booth ?",
        "Les formules du catalogue sont de 400 € pour 3 h et de 450 € pour 5 h. Vidéos 4K illimitées, personnalisation vidéo, livraison, installation et animateur sont prévus. Les options et conditions de déplacement sont détaillées au devis.",
      ],
      [
        "L’Air360 convient-il à toutes les salles ?",
        "La surface, la hauteur, l’alimentation et les accès doivent être contrôlés avant réservation. Une photo ou un plan permet de vérifier que la structure et sa zone d’utilisation peuvent être installées correctement.",
      ],
      [
        "Peut-on le réserver pour plusieurs jours ?",
        "Oui, un événement de plusieurs jours peut être étudié. La durée, l’équipe, les horaires, la sécurisation et les conditions de stockage du matériel font l’objet d’un devis spécifique.",
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
      "Une structure lumineuse, un décor inspiré des couvertures de magazine et vos invités au premier plan. Le Vogue Booth crée un véritable espace de pose pour un mariage, un gala ou une expérience de marque.",
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
    experienceTitle: "Entrez dans le cadre. Prenez votre place à la une.",
    experienceText:
      "Le Vogue Booth est un décor photo à part entière. Ses parois et sa lumière dessinent une scène éditoriale où les invités posent seuls ou en petit groupe. Le photographe et les tirages peuvent compléter la prestation en option.",
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
      src: collection + "vogue-booth-rideaux-blancs-900.webp",
      alt: "Vogue Booth MySelfieBooth avec rideaux blancs et façade personnalisée",
      caption: "Lumière, rideaux et façade personnalisable",
    },
    benefits: [
      [
        "Un décor qui se remarque",
        "Le grand cadre transforme l’espace photo en élément de scénographie visible dans la salle et dans les souvenirs.",
      ],
      [
        "Une identité à vous",
        "Les textes, couleurs et éléments du visuel sont adaptés à votre événement selon la configuration retenue.",
      ],
      [
        "Un studio à composer",
        "Photographe, impressions et décoration complémentaire sont des options à choisir selon le rendu souhaité.",
      ],
    ],
    customTitle: "Votre histoire en couverture.",
    custom: [
      [
        "La façade",
        "Prénoms, date, titre de soirée ou identité de marque peuvent prendre place sur le visuel personnalisé.",
      ],
      [
        "La scénographie",
        "Couleurs, rideaux et décor complémentaire sont étudiés pour composer votre univers, selon faisabilité et sur devis.",
      ],
      [
        "Le Portrait Studio",
        "Pour un projet corporate, l’accompagnement photo et le rendu éditorial peuvent être travaillés dans une proposition dédiée.",
      ],
    ],
    contexts: [
      [
        "Mariages",
        "Un cadre lumineux pour des portraits en tenue de réception.",
        "/evenements/mariages/",
      ],
      [
        "Anniversaires & galas",
        "Une mise en scène forte pour les invités et les photos de la soirée.",
        "/evenements/anniversaires/",
      ],
      [
        "Mode, beauté & marques",
        "Un photocall éditorial à adapter à votre lancement ou activation.",
        "/evenements/corporates/",
      ],
    ],
    rates: [{ duration: "5 heures", price: 500, label: "500 € pour 5 h" }],
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
      [
        "La structure",
        "Vérifiez largeur, profondeur et hauteur disponibles, ainsi que les portes et accès permettant l’acheminement du décor.",
      ],
      [
        "Le recul photo",
        "L’espace devant le cadre doit permettre la prise de vue et la circulation. Nous étudions la position du photographe si cette option est retenue.",
      ],
      [
        "La préparation",
        "La personnalisation du visuel, la scénographie et les horaires de montage sont validés avant l’événement. Les projets spécifiques nécessitent une étude.",
      ],
    ],
    faq: [
      [
        "Le Vogue Booth est-il une borne photo automatique ?",
        "Le Vogue Booth est avant tout une structure lumineuse et un décor photo effet magazine. La prise de vue, la présence d’un photographe et les impressions sont définies selon la formule. Si vous cherchez une borne avec écran et tirages, consultez aussi le Photobooth ou le Miroirbooth.",
      ],
      [
        "Quel est le prix du Vogue Booth ?",
        "La formule particulière démarre à 500 € pour 5 h, avec livraison, installation, décor lumineux et personnalisation du visuel. Photographe, impressions et décoration additionnelle sont en option. Les projets corporate et Portrait Studio démarrent à 900 € HT selon le brief.",
      ],
      [
        "Le photographe et les impressions sont-ils inclus ?",
        "Ils sont proposés en option. Le devis distingue la structure lumineuse, le visuel personnalisé, l’éventuel photographe et la prestation d’impression pour préciser exactement ce que vous réservez.",
      ],
      [
        "Peut-on personnaliser le texte et les couleurs ?",
        "Oui. Le visuel peut être adapté à des prénoms, une date, un titre d’événement ou une identité de marque. Les parois, les couleurs et la scénographie plus poussée sont étudiées selon la faisabilité et le budget.",
      ],
      [
        "Quel espace faut-il prévoir pour le Vogue Booth ?",
        "Le décor demande plus d’espace qu’une borne compacte, ainsi qu’un recul de prise de vue. Nous validons largeur, profondeur, hauteur, accès et alimentation sur la base des informations du lieu avant confirmation.",
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
      "L’essentiel de l’animation photo dans une borne légère avec tablette et anneau lumineux. L’iPad Booth trouve sa place sur un stand, dans une boutique ou lors d’une fête où l’espace est compté.",
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
    experienceTitle: "Une tablette. Un sourire. Et c’est parti.",
    experienceText:
      "Un écran tactile au centre d’un anneau lumineux : les invités se photographient dans un dispositif facile à intégrer. Les photos restent numériques et la galerie permet de les retrouver après l’événement.",
    proof: {
      src: "/images/ipadbooth.webp",
      alt: "iPad Booth MySelfieBooth avec tablette au centre d’un anneau lumineux",
      caption: "La tablette et son anneau lumineux",
    },
    benefits: [
      [
        "Un format léger",
        "Le faible encombrement convient aux stands, aux accueils et aux espaces où une grande structure serait difficile à installer.",
      ],
      [
        "Tout en numérique",
        "Les photos numériques sont illimitées dans la formule présentée. L’iPad Booth privilégie la simplicité, sans impression photo.",
      ],
      [
        "Votre galerie après l’événement",
        "Retrouvez les images dans la galerie web prévue avec la location. Les modalités sont confirmées à la réservation.",
      ],
    ],
    customTitle: "Le format compact. Votre identité en grand.",
    custom: [
      [
        "Un visuel personnalisé",
        "Adaptez le modèle photo à votre fête ou à votre marque avec les éléments graphiques validés ensemble.",
      ],
      [
        "Un espace bien pensé",
        "Un fond soigné et une bonne visibilité suffisent à identifier le point photo. Nous vérifions l’emplacement avec vous.",
      ],
      [
        "Une formule adaptée",
        "Livraison possible en option ; accompagnement et besoins spécifiques sont précisés dans votre devis.",
      ],
    ],
    contexts: [
      [
        "Salons & stands",
        "Un point photo numérique qui préserve l’espace d’échange avec vos visiteurs.",
        "/evenements/corporates/",
      ],
      [
        "Anniversaires",
        "Une borne simple à intégrer pour photographier la fête à votre rythme.",
        "/evenements/anniversaires/",
      ],
      [
        "Boutiques & accueils",
        "Une animation compacte pour accompagner une opération ou un événement clients.",
        "/evenements/corporates/",
      ],
    ],
    rates: [
      { duration: "24 à 48 heures", price: 250, label: "250 € pour 24 à 48 h" },
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
      [
        "L’emplacement",
        "Choisissez un sol stable, un fond propre et assez de recul pour les personnes photographiées, même dans un petit espace.",
      ],
      [
        "L’alimentation",
        "La proximité d’une alimentation et les conditions d’utilisation sont vérifiées selon la durée de location.",
      ],
      [
        "La logistique",
        "Confirmez les horaires et les modalités de remise du matériel. La livraison peut être ajoutée en option et l’animation dépend de la formule.",
      ],
    ],
    faq: [
      [
        "L’iPad Booth imprime-t-il les photos ?",
        "La formule iPad Booth présentée est numérique, sans tirages. Pour imprimer sur place, le Photobooth ou le Miroirbooth seront plus adaptés.",
      ],
      [
        "Que comprend le tarif de 250 € ?",
        "Le catalogue prévoit une location de 24 à 48 h à 250 €, avec photos numériques illimitées, visuel personnalisé, montage rapide et galerie web après l’événement. Livraison et accompagnement éventuel sont à préciser au devis.",
      ],
      [
        "La livraison et un animateur sont-ils inclus ?",
        "La livraison est disponible en option. La présence d’un animateur dépend de la formule retenue : ces éléments sont précisés avant la réservation.",
      ],
      [
        "Peut-on personnaliser les photos pour une entreprise ?",
        "Oui, le visuel peut reprendre un logo, des couleurs ou un message d’événement selon le modèle validé. Les fonctionnalités de partage et les demandes spécifiques sont à confirmer selon la configuration.",
      ],
      [
        "Faut-il une connexion Internet ?",
        "Les besoins de connexion dépendent des fonctionnalités de partage retenues. Nous précisons les conditions techniques avant l’événement ; aucun envoi instantané n’est promis sans validation de la configuration et du réseau.",
      ],
    ],
    related: ["photobooth", "miroirbooth"],
    aliases: {},
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
  return `${ai}${page.hero}-${width}.webp`;
}
