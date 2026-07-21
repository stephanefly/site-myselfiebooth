import { absoluteUrl, siteConfig, withSlash } from "./site";

export const blogArticles = [
  {
    slug: "choisir-photobooth-mariage",
    category: "Mariage",
    title: "Quel photobooth choisir pour un mariage ?",
    excerpt:
      "Photobooth, Miroirbooth ou 360 Booth : choisissez selon le souvenir voulu, le lieu et le rythme de votre réception.",
    image: "/images/mariages/mariage1.JPG",
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
    image: "/images/generated/instagram-corporate-activation.webp",
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
    image: "/images/ai/installation-photobooth-premium-ai.webp",
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
    image: "/images/ai/detail-souvenirs-premium-ai.webp",
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
        datePublished: "2026-07-21",
        dateModified: "2026-07-21",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
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
