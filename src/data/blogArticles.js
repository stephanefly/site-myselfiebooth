import { absoluteUrl, siteConfig, withSlash } from "./site";

export const blogArticles = [
  {
    slug: "choisir-photobooth-mariage",
    category: "Mariage",
    title: "Quel photobooth choisir pour un mariage ?",
    excerpt:
      "Photobooth, Miroirbooth ou 360 Booth : choisissez selon le souvenir voulu, le lieu et le rythme de votre réception.",
    image: "/images/machines-ai/miroirbooth-mariage-myselfiebooth.webp",
    imageAlt: "Photobooth installé pendant une réception de mariage",
    readTime: "4 min",
    publishedAt: "21 juillet 2026",
    metaDescription:
      "Comparez Photobooth, Miroirbooth et 360 Booth pour choisir l'animation adaptée à votre mariage, votre lieu et vos invités.",
    keywords: "photobooth mariage, choisir photobooth mariage, miroir photobooth mariage, animation mariage",
    takeaways: [
      "Des tirages pour tous : Photobooth.",
      "Un décor élégant : Miroirbooth.",
      "Des vidéos dynamiques : 360 Booth.",
    ],
    sections: [
      {
        title: "Commencez par le souvenir",
        paragraphs: [
          "Le Photobooth convient si vous voulez des photos imprimées et un fonctionnement compris immédiatement par toutes les générations.",
          "Le Miroirbooth apporte une présence plus décorative. Le 360 Booth privilégie la vidéo, le mouvement et le partage.",
        ],
      },
      {
        title: "Adaptez le format au lieu",
        paragraphs: [
          "Prévoyez une zone visible, proche de l'ambiance mais hors des passages. L'accès de livraison, la prise électrique et la circulation comptent autant que la surface disponible.",
        ],
        bullets: [
          "Petite salle : iPad Booth ou Photobooth compact.",
          "Décor travaillé : Miroirbooth ou Vogue Booth.",
          "Beaucoup d'invités : plusieurs expériences ou Pack VIP.",
        ],
      },
      {
        title: "Gardez seulement les options utiles",
        paragraphs: [
          "Un cadre de tirage assorti, un livre d'or et quelques souvenirs suffisent souvent. Ajoutez le Phonebooth si vous souhaitez aussi conserver les voix de vos proches.",
        ],
      },
    ],
    ctaLabel: "Comparer les animations mariage",
    ctaHref: "/evenements/mariages",
  },
  {
    slug: "animation-photobooth-entreprise",
    category: "Entreprise",
    title: "Photobooth d'entreprise : réussir une animation de marque",
    excerpt:
      "Une animation efficace sert un objectif clair : attirer, faire participer, créer du contenu ou remercier les équipes.",
    image: "/images/machines-ai/360booth-entreprise-myselfiebooth.webp",
    imageAlt: "Activation photobooth personnalisée pour une entreprise",
    readTime: "5 min",
    publishedAt: "21 juillet 2026",
    metaDescription:
      "Préparez une animation photobooth d'entreprise cohérente avec votre marque, votre public et le flux de votre événement.",
    keywords: "photobooth entreprise, animation corporate, activation de marque, photobooth salon professionnel",
    takeaways: [
      "Définissez un objectif avant de choisir la machine.",
      "Personnalisez le parcours, pas seulement le logo.",
      "Placez l'animation dans le flux naturel des invités.",
    ],
    sections: [
      {
        title: "Un objectif, un format",
        paragraphs: [
          "Pour attirer sur un stand, choisissez une expérience rapide et visible. Pour une soirée interne, privilégiez la participation et le souvenir. Pour produire du contenu, pensez au 360 Booth ou au Vogue Booth.",
        ],
      },
      {
        title: "Rendez la marque visible sans l'alourdir",
        paragraphs: [
          "Couleurs, écran d'accueil, cadre photo et habillage des contenus doivent former un ensemble cohérent. Une identité simple reste plus lisible sur les photos et les vidéos.",
        ],
        bullets: [
          "Un message court.",
          "Un logo bien placé.",
          "Un format adapté au partage.",
        ],
      },
      {
        title: "Préparez le flux",
        paragraphs: [
          "Le bon emplacement évite les files d'attente et améliore la participation. Validez en amont l'accès, l'électricité, les horaires de montage et la présence éventuelle d'un animateur.",
        ],
      },
    ],
    ctaLabel: "Découvrir les offres entreprise",
    ctaHref: "/evenements/corporates",
  },
  {
    slug: "espace-installation-photobooth",
    category: "Organisation",
    title: "Quel espace prévoir pour installer un photobooth ?",
    excerpt:
      "La surface ne suffit pas : il faut aussi penser au recul photo, à la circulation, à l'électricité et à l'accès de livraison.",
    image: "/images/machines-ai/atelier-machines-myselfiebooth.webp",
    imageAlt: "Installation et réglage d'un photobooth avant un événement",
    readTime: "4 min",
    publishedAt: "21 juillet 2026",
    metaDescription:
      "Préparez l'emplacement d'un photobooth : recul, circulation des invités, alimentation électrique et accès de livraison.",
    keywords: "espace photobooth, installation photobooth, emplacement borne photo, logistique photobooth",
    takeaways: [
      "Choisissez un sol stable et une prise accessible.",
      "Gardez le passage principal dégagé.",
      "Validez le recul nécessaire selon la machine.",
    ],
    sections: [
      {
        title: "Les quatre points à vérifier",
        paragraphs: [
          "Une installation fluide dépend de quatre éléments : l'espace de la machine, le recul pour les invités, la circulation autour de l'animation et l'accès technique.",
        ],
        bullets: [
          "Une alimentation électrique proche.",
          "Un sol plat et protégé.",
          "Un accès de livraison praticable.",
          "Une zone qui ne bloque ni porte ni service.",
        ],
      },
      {
        title: "Le format change les besoins",
        paragraphs: [
          "L'iPad Booth est le plus simple dans un espace réduit. Un Photobooth demande davantage de recul. Le 360 Booth nécessite une zone dégagée autour de la plateforme.",
        ],
      },
      {
        title: "Le bon emplacement attire naturellement",
        paragraphs: [
          "Installez l'animation dans une zone visible entre les temps forts, sans la coller à la piste de danse ni à l'entrée. Les invités doivent la repérer sans créer de bouchon.",
        ],
      },
    ],
    ctaLabel: "Choisir une animation adaptée au lieu",
    ctaHref: "/prestations",
  },
  {
    slug: "personnaliser-photobooth",
    category: "Personnalisation",
    title: "Personnaliser un photobooth : tirages, décor et souvenirs",
    excerpt:
      "Une bonne personnalisation relie le décor, les contenus et les souvenirs sans surcharger l'expérience.",
    image: "/images/machines-ai/options-souvenirs-myselfiebooth.webp",
    imageAlt: "Tirages et souvenirs personnalisés autour d'un photobooth",
    readTime: "4 min",
    publishedAt: "21 juillet 2026",
    metaDescription:
      "Découvrez comment personnaliser un photobooth avec des tirages, un décor et des souvenirs cohérents avec votre événement.",
    keywords: "personnaliser photobooth, tirage photo personnalisé, décor photobooth, souvenirs photobooth",
    takeaways: [
      "Choisissez une direction visuelle unique.",
      "Gardez le texte court sur les tirages.",
      "Sélectionnez deux ou trois souvenirs maximum.",
    ],
    sections: [
      {
        title: "Créez une identité simple",
        paragraphs: [
          "Reprenez deux ou trois couleurs, une typographie lisible et un élément distinctif de l'événement. Cette base peut vivre sur l'écran, les tirages et la galerie.",
        ],
      },
      {
        title: "Pensez au tirage comme à un souvenir",
        paragraphs: [
          "Le prénom, la date ou un message court suffisent. Laissez de la place à la photo et vérifiez la lisibilité du cadre avant l'événement.",
        ],
        bullets: [
          "Format classique pour les groupes.",
          "Bande photo pour un rendu ludique.",
          "Cadre vertical pour les contenus sociaux.",
        ],
      },
      {
        title: "Prolongez l'expérience",
        paragraphs: [
          "Porte-clés, magnets, livre d'or ou Phonebooth donnent une seconde vie aux contenus. Choisissez les options qui correspondent réellement à vos invités.",
        ],
      },
    ],
    ctaLabel: "Voir toutes les options",
    ctaHref: "/options",
  },
  {
    slug: "prix-location-photobooth",
    category: "Budget",
    title: "Combien coûte la location d'un photobooth ?",
    excerpt:
      "Machine, durée, impressions et déplacement : voici les éléments qui déterminent réellement le prix d'une animation.",
    image: "/images/machines-ai/hero-machines-myselfiebooth.webp",
    imageAlt: "Plusieurs machines photobooth MySelfieBooth présentées dans une réception",
    readTime: "5 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Comprenez le prix d'une location de photobooth selon la machine, la durée, les impressions, l'animateur et les options choisies.",
    keywords: "prix location photobooth, tarif photobooth, budget photobooth, location borne photo prix",
    takeaways: [
      "Le choix de la machine est le premier facteur de prix.",
      "La durée et les impressions modifient la formule.",
      "Un devis précis évite les options inutiles.",
    ],
    sections: [
      {
        title: "Les éléments qui composent le prix",
        paragraphs: [
          "Le tarif dépend de la machine, du temps de présence, de la livraison, du nombre de tirages et de l'accompagnement prévu. Un Photobooth classique ne demande pas la même logistique qu'un Air360 Booth grand format.",
        ],
        bullets: [
          "Type de machine et capacité.",
          "Durée de l'animation.",
          "Nombre et format des impressions.",
          "Distance, accès et horaires de montage.",
        ],
      },
      {
        title: "Comparez des formules équivalentes",
        paragraphs: [
          "Vérifiez toujours ce qui est inclus : installation, personnalisation, animateur, galerie et récupération des fichiers. Un prix plus bas peut couvrir une durée plus courte ou exclure les tirages.",
        ],
      },
      {
        title: "Donnez cinq informations pour un devis fiable",
        paragraphs: [
          "Indiquez la date, le lieu, le nombre d'invités, la durée souhaitée et le type de souvenir recherché. Ces informations suffisent pour proposer rapidement une configuration cohérente.",
        ],
      },
    ],
    ctaLabel: "Comparer les machines et les tarifs",
    ctaHref: "/prestations",
  },
  {
    slug: "photobooth-anniversaire",
    category: "Anniversaire",
    title: "Quel photobooth choisir pour un anniversaire ?",
    excerpt:
      "Photos imprimées, vidéos 360 ou portraits Vogue : choisissez une animation adaptée à l'âge, au lieu et au nombre d'invités.",
    image: "/images/machines-ai/photobooth-mariage-myselfiebooth.webp",
    imageAlt: "Photobooth MySelfieBooth utilisé pendant une fête",
    readTime: "4 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Choisissez le bon photobooth pour un anniversaire selon les invités, l'espace, le souvenir souhaité et l'ambiance de la soirée.",
    keywords: "photobooth anniversaire, animation anniversaire, borne photo anniversaire, 360 booth anniversaire",
    takeaways: [
      "Le Photobooth convient à tous les âges.",
      "Le 360 Booth privilégie l'énergie et la vidéo.",
      "Le lieu doit guider le choix de la machine.",
    ],
    sections: [
      {
        title: "Choisissez selon les invités",
        paragraphs: [
          "Pour une fête familiale, le Photobooth reste le plus accessible et permet de repartir avec un tirage. Pour une soirée très dynamique, le 360 Booth crée des clips courts et faciles à partager.",
        ],
      },
      {
        title: "Adaptez la machine à l'espace",
        paragraphs: [
          "Dans une petite salle, l'iPad Booth ou une borne compacte limite l'encombrement. Une grande réception permet d'installer un décor, un Vogue Booth ou une plateforme 360 avec une circulation confortable.",
        ],
        bullets: [
          "Petit espace : iPad Booth.",
          "Souvenir imprimé : Photobooth.",
          "Ambiance vidéo : 360 Booth.",
          "Portrait premium : Vogue Booth.",
        ],
      },
      {
        title: "Personnalisez sans surcharger",
        paragraphs: [
          "Un cadre photo avec le prénom, l'âge ou la date suffit. Ajoutez des magnets ou des porte-clés si vous souhaitez offrir un souvenir supplémentaire aux invités.",
        ],
      },
    ],
    ctaLabel: "Voir les animations pour anniversaire",
    ctaHref: "/evenements/anniversaires",
  },
  {
    slug: "360-booth-ou-air360",
    category: "Comparatif",
    title: "360 Booth ou Air360 Booth : quelles différences ?",
    excerpt:
      "Les deux machines créent des vidéos dynamiques, mais leur capacité, leur espace et leur effet visuel ne sont pas les mêmes.",
    image: "/images/machines-ai/air360-gala-myselfiebooth.webp",
    imageAlt: "Air360 Booth MySelfieBooth installé pendant un gala",
    readTime: "4 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Comparez le 360 Booth et l'Air360 Booth : capacité, espace nécessaire, rendu vidéo et types d'événements recommandés.",
    keywords: "360 booth, air360 booth, comparatif 360 booth, location plateforme 360",
    takeaways: [
      "Le 360 Booth accueille jusqu'à cinq personnes selon la configuration.",
      "L'Air360 Booth convient mieux aux grands groupes.",
      "Les deux formats demandent une zone sécurisée.",
    ],
    sections: [
      {
        title: "Le 360 Booth pour un format compact",
        paragraphs: [
          "Le 360 Booth convient aux petits groupes et aux événements qui recherchent une animation vidéo visible sans occuper une très grande surface. Il fonctionne bien pour les anniversaires, mariages et activations de marque.",
        ],
      },
      {
        title: "L'Air360 Booth pour voir plus grand",
        paragraphs: [
          "L'Air360 Booth accueille davantage de participants et produit un effet plus spectaculaire. Il est adapté aux galas, grands mariages et soirées d'entreprise avec un flux important.",
        ],
      },
      {
        title: "Vérifiez l'espace avant de choisir",
        paragraphs: [
          "Les deux machines nécessitent un sol plat, une alimentation et une zone dégagée autour du mouvement de caméra. Pour l'Air360 Booth, la surface et l'accès de livraison doivent être validés en amont.",
        ],
      },
    ],
    ctaLabel: "Comparer les animations vidéo",
    ctaHref: "/prestations#machine-videobooth",
  },
  {
    slug: "vogue-booth-effet-magazine",
    category: "Inspiration",
    title: "Vogue Booth : comment obtenir un effet magazine ?",
    excerpt:
      "Éclairage, pose, décor et photographe : les quatre éléments qui donnent au Vogue Booth son rendu éditorial.",
    image: "/images/machines-ai/voguebooth-studio-myselfiebooth.webp",
    imageAlt: "Vogue Booth MySelfieBooth avec éclairage studio et photographe",
    readTime: "4 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Découvrez comment le Vogue Booth crée des portraits effet magazine grâce à son éclairage, son décor et ses options.",
    keywords: "vogue booth, photo effet magazine, animation photo premium, studio photo événement",
    takeaways: [
      "L'éclairage régulier crée la signature visuelle.",
      "Un décor simple renforce le portrait.",
      "Le photographe améliore le rythme et les poses.",
    ],
    sections: [
      {
        title: "Un espace lumineux immédiatement identifiable",
        paragraphs: [
          "Le Vogue Booth forme un couloir de lumière qui guide naturellement le regard. Les invités comprennent où se placer et obtiennent une série de portraits visuellement cohérente.",
        ],
      },
      {
        title: "Le décor doit rester lisible",
        paragraphs: [
          "Une palette courte, quelques fleurs ou un marquage discret suffisent. Trop de texte ou d'accessoires détourne l'attention des personnes photographiées.",
        ],
      },
      {
        title: "Ajoutez les options selon votre objectif",
        paragraphs: [
          "Un photographe dédié aide les invités à poser et maintient le rythme. Les impressions instantanées transforment ensuite les portraits en souvenirs à emporter.",
        ],
      },
    ],
    ctaLabel: "Découvrir le Vogue Booth",
    ctaHref: "/prestations#machine-voguebooth",
  },
  {
    slug: "phonebooth-livre-or-audio",
    category: "Souvenirs",
    title: "Phonebooth : créer un livre d'or audio réussi",
    excerpt:
      "Le Phonebooth conserve les voix, les rires et les messages spontanés que les photos ne peuvent pas enregistrer.",
    image: "/images/machines-ai/phonebooth-reception-myselfiebooth.webp",
    imageAlt: "Phonebooth audio MySelfieBooth installé sur une table de réception",
    readTime: "4 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Préparez un livre d'or audio avec un Phonebooth : emplacement, consigne, ambiance sonore et récupération des messages.",
    keywords: "phonebooth, livre d'or audio, téléphone livre d'or, message vocal mariage",
    takeaways: [
      "Placez le téléphone dans une zone calme et visible.",
      "Affichez une consigne très courte.",
      "Invitez les proches à laisser un message tôt dans la soirée.",
    ],
    sections: [
      {
        title: "Choisissez un emplacement calme",
        paragraphs: [
          "Le Phonebooth doit rester facile à trouver sans être collé aux enceintes. Une table dédiée, une petite lumière et un décor simple rendent l'expérience plus accueillante.",
        ],
      },
      {
        title: "Expliquez le geste en une phrase",
        paragraphs: [
          "Une consigne courte suffit : décrocher, écouter puis parler après le signal. Un exemple de message peut aider les invités les plus hésitants.",
        ],
      },
      {
        title: "Créez une collection de voix",
        paragraphs: [
          "Les messages peuvent être tendres, drôles ou très courts. Le résultat forme un souvenir sonore complémentaire aux photos, particulièrement précieux après un mariage ou un anniversaire.",
        ],
      },
    ],
    ctaLabel: "Découvrir le Phonebooth",
    ctaHref: "/options/phonebooth",
  },
  {
    slug: "livre-or-photo-photobooth",
    category: "Souvenirs",
    title: "Comment réussir un livre d'or avec les photos du photobooth ?",
    excerpt:
      "Organisation de la table, double tirage et matériel d'écriture : préparez un livre d'or que les invités auront envie de remplir.",
    image: "/images/machines-ai/livre-or-physique-myselfiebooth.webp",
    imageAlt: "Livre d'or physique avec tirages photobooth et messages manuscrits",
    readTime: "4 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Organisez un livre d'or photobooth avec les tirages des invités : emplacement, matériel, double impression et conseils pratiques.",
    keywords: "livre d'or photobooth, album photo mariage, tirage photobooth livre d'or, souvenir invités",
    takeaways: [
      "Prévoyez un tirage pour l'invité et un pour l'album.",
      "Installez le livre près du photobooth.",
      "Fournissez des stylos lisibles et une colle simple.",
    ],
    sections: [
      {
        title: "Rapprochez le livre de l'animation",
        paragraphs: [
          "Le livre d'or fonctionne mieux lorsqu'il se trouve juste après la prise de vue. Les invités peuvent coller une photo et écrire leur message sans interrompre le passage devant la borne.",
        ],
      },
      {
        title: "Préparez le matériel",
        paragraphs: [
          "Choisissez un album assez grand, des stylos qui sèchent rapidement et un système de collage facile. Une personne de l'équipe peut lancer les premières pages pour montrer l'exemple.",
        ],
        bullets: [
          "Album à pages épaisses.",
          "Stylos noirs et métallisés.",
          "Adhésifs photo ou colle adaptée.",
          "Petite consigne visible.",
        ],
      },
      {
        title: "Anticipez le nombre de tirages",
        paragraphs: [
          "La formule d'impression doit tenir compte du double usage : un souvenir pour les invités et une photo pour l'album. Ce besoin est à préciser avant le devis.",
        ],
      },
    ],
    ctaLabel: "Voir les options souvenirs",
    ctaHref: "/prestations#options",
  },
  {
    slug: "duree-location-photobooth",
    category: "Organisation",
    title: "Combien de temps louer un photobooth ?",
    excerpt:
      "Trois, cinq heures ou toute la soirée : la bonne durée dépend du nombre d'invités et du programme de l'événement.",
    image: "/images/machines-ai/atelier-machines-myselfiebooth.webp",
    imageAlt: "Préparation technique des machines MySelfieBooth avant un événement",
    readTime: "4 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Calculez la durée idéale de location d'un photobooth selon le nombre d'invités, le programme et le type de machine.",
    keywords: "durée location photobooth, combien de temps photobooth, location photobooth soirée, horaire photobooth",
    takeaways: [
      "Le photobooth doit couvrir les temps de présence des invités.",
      "Le dîner et les discours ralentissent le passage.",
      "Un grand nombre d'invités demande plus de temps ou plusieurs machines.",
    ],
    sections: [
      {
        title: "Partez du programme",
        paragraphs: [
          "L'animation est plus utilisée pendant l'accueil, entre les plats et après les temps officiels. Une installation trop courte peut manquer la période où les invités sont le plus disponibles.",
        ],
      },
      {
        title: "Estimez le flux",
        paragraphs: [
          "Plus les groupes sont grands et les impressions nombreuses, plus chaque passage prend du temps. Pour un événement important, il peut être préférable d'allonger la durée ou de répartir les invités entre deux expériences.",
        ],
      },
      {
        title: "Gardez une marge réaliste",
        paragraphs: [
          "Les horaires d'un événement évoluent souvent. Une marge évite de démonter au moment où la soirée démarre réellement et permet aux retardataires de profiter de l'animation.",
        ],
      },
    ],
    ctaLabel: "Définir la bonne formule",
    ctaHref: "/prestations",
  },
  {
    slug: "photobooth-salon-seminaire",
    category: "Entreprise",
    title: "Quel photobooth pour un salon ou un séminaire ?",
    excerpt:
      "Attirer sur un stand, animer une pause ou créer du contenu : chaque objectif professionnel appelle un format différent.",
    image: "/images/machines-ai/ipadbooth-reception-myselfiebooth.webp",
    imageAlt: "iPad Booth MySelfieBooth installé dans un espace professionnel",
    readTime: "5 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Choisissez un photobooth pour salon, séminaire ou soirée d'entreprise selon l'objectif, le flux et l'espace disponible.",
    keywords: "photobooth salon professionnel, photobooth séminaire, animation entreprise, borne photo stand",
    takeaways: [
      "Sur un stand, privilégiez une expérience rapide.",
      "En séminaire, cherchez la participation des équipes.",
      "La personnalisation doit servir le message de marque.",
    ],
    sections: [
      {
        title: "Sur un salon, réduisez le temps de passage",
        paragraphs: [
          "L'iPad Booth et le Photobooth conviennent aux espaces limités et aux visiteurs pressés. Le parcours doit être compris immédiatement, avec un visuel de marque lisible.",
        ],
      },
      {
        title: "En séminaire, créez un moment collectif",
        paragraphs: [
          "Le 360 Booth et le Vogue Booth favorisent les groupes et les contenus plus expressifs. Ils fonctionnent particulièrement bien pendant une pause, un cocktail ou une soirée interne.",
        ],
      },
      {
        title: "Préparez les contraintes du lieu",
        paragraphs: [
          "Validez les horaires de livraison, les badges d'accès, la puissance électrique, la connexion éventuelle et la surface du stand. Ces détails conditionnent une installation fluide.",
        ],
      },
    ],
    ctaLabel: "Voir les solutions entreprise",
    ctaHref: "/evenements/corporates",
  },
  {
    slug: "fond-decor-photobooth",
    category: "Décoration",
    title: "Quel fond choisir pour un photobooth ?",
    excerpt:
      "Mur floral, fond lumineux ou décor de marque : choisissez un arrière-plan qui valorise les personnes sans voler la photo.",
    image: "/images/machines-ai/mur-floral-reception-myselfiebooth.webp",
    imageAlt: "Mur floral MySelfieBooth mis en scène dans une réception",
    readTime: "4 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Choisissez le fond de votre photobooth : mur floral, décor lumineux, fond de marque et conseils de couleurs et d'espace.",
    keywords: "fond photobooth, mur floral photobooth, décor photobooth, backdrop photo événement",
    takeaways: [
      "Le fond doit contraster avec les tenues.",
      "Évitez les textes trop petits et les motifs chargés.",
      "Adaptez sa largeur aux photos de groupe.",
    ],
    sections: [
      {
        title: "Choisissez une direction visuelle",
        paragraphs: [
          "Un mur floral apporte une ambiance élégante, un fond LED renforce l'effet vidéo et un décor de marque structure une activation professionnelle. Le fond doit rester cohérent avec le lieu.",
        ],
      },
      {
        title: "Pensez au cadrage",
        paragraphs: [
          "Le décor doit couvrir tout l'arrière-plan visible, même pour les groupes. Vérifiez sa hauteur, sa largeur et le recul disponible avant l'installation.",
        ],
      },
      {
        title: "Gardez les visages au centre",
        paragraphs: [
          "Les couleurs et la lumière doivent mettre les invités en valeur. Une composition simple, avec quelques détails forts, produit généralement un meilleur résultat qu'un décor très chargé.",
        ],
      },
    ],
    ctaLabel: "Voir les décors et options",
    ctaHref: "/prestations#options",
  },
  {
    slug: "choisir-pack-photobooth",
    category: "Packs",
    title: "Quel pack photobooth choisir pour son événement ?",
    excerpt:
      "Photo, vidéo, messages et souvenirs : les packs combinent plusieurs expériences pour simplifier l'organisation.",
    image: "/images/ai-fusions/pack-duo-vip.webp",
    imageAlt: "Pack Duo VIP avec Miroirbooth, 360 Booth et décor floral",
    readTime: "5 min",
    publishedAt: "23 juillet 2026",
    publishedIso: "2026-07-23",
    metaDescription:
      "Comparez les packs photobooth selon votre événement : souvenirs imprimés, vidéo 360, Vogue Booth et options incluses.",
    keywords: "pack photobooth, formule photobooth mariage, pack 360 booth, photobooth et miroir",
    takeaways: [
      "Un pack doit couvrir des usages complémentaires.",
      "Deux zones réduisent l'attente sur un grand événement.",
      "Comparez toujours le contenu inclus au prix séparé.",
    ],
    sections: [
      {
        title: "Pack Souvenirs pour repartir avec un objet",
        paragraphs: [
          "Une borne photo associée au Phonebooth, aux porte-clés ou aux magnets convient aux événements qui veulent laisser plusieurs formes de souvenirs aux invités.",
        ],
      },
      {
        title: "Pack vidéo pour créer du mouvement",
        paragraphs: [
          "Le 360 Booth avec un fond lumineux ou un livre d'or vidéo forme une expérience cohérente pour les soirées, lancements et événements où le partage compte beaucoup.",
        ],
      },
      {
        title: "Pack complet pour les grands flux",
        paragraphs: [
          "Associer un Miroirbooth à un 360 Booth ou à un Vogue Booth permet de répartir les invités et d'offrir plusieurs rendus. Prévoyez deux zones clairement identifiées.",
        ],
      },
    ],
    ctaLabel: "Comparer les 6 packs",
    ctaHref: "/prestations#packs",
  },
];

export function getBlogArticle(slug) {
  return blogArticles.find((article) => article.slug === slug);
}

export function articleMeta(article) {
  const path = `/blog/${article.slug}`;

  return {
    title: `${article.title} | MySelfieBooth`,
    description: article.metaDescription,
    keywords: article.keywords,
    ogTitle: article.title,
    ogDescription: article.metaDescription,
    ogImage: article.image,
    ogUrl: absoluteUrl(withSlash(path)),
    ogType: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        image: absoluteUrl(article.image),
        datePublished: article.publishedIso || "2026-07-21",
        dateModified: "2026-07-23",
        author: {
          "@type": "Person",
          name: siteConfig.founder.name,
          url: absoluteUrl("/a-propos/"),
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl(siteConfig.defaultOgImage),
          },
        },
        mainEntityOfPage: absoluteUrl(withSlash(path)),
      },
    ],
  };
}
