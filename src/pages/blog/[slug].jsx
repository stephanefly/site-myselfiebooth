import BlogArticle from "../../components/blog/BlogArticle";
import { blogArticles, getBlogArticle } from "../../data/blogArticles";

const SEO_UPDATED_AT = "14 octobre 2026";
const SEO_UPDATED_ISO = "2026-10-14";

function withSeoUpdate(article, changes) {
  return {
    ...article,
    ...changes,
    modifiedAt: SEO_UPDATED_AT,
    modifiedIso: SEO_UPDATED_ISO,
  };
}

function optimizePriceArticle(article) {
  return withSeoUpdate(article, {
    title: "Prix location photobooth : tarifs 2026",
    seoTitle: "Prix Photobooth 2026 : tarifs & comparatif",
    excerpt:
      "Photobooth, Miroirbooth, 360 Booth ou Vogue Booth : comparez les tarifs de départ et les éléments qui font varier le prix final.",
    metaDescription:
      "Prix d'une location de photobooth : Photobooth 400 € / 5 h, 360 Booth dès 400 €, Miroirbooth dès 450 € et Vogue Booth dès 500 €. Comparez les tarifs.",
    takeaways: [
      "Photobooth : 400 € pour 5 h.",
      "360 Booth : dès 400 €. Vogue Booth : dès 500 €.",
      "Miroirbooth : à partir de 450 €.",
    ],
    sections: [
      {
        title: "Quels sont les tarifs de location chez MySelfieBooth ?",
        paragraphs: [
          "Le prix dépend d'abord de la machine choisie. Les tarifs de départ permettent de comparer les formats avant de préciser la durée, le lieu et les options dans le devis.",
        ],
        bullets: [
          "Photobooth : 400 € pour 5 h.",
          "360 Booth : à partir de 400 €.",
          "Vogue Booth : à partir de 500 €.",
          "Miroirbooth : à partir de 450 €.",
        ],
      },
      ...article.sections,
    ],
    faqs: [
      {
        question: "Quel est le prix d'une location de photobooth ?",
        answer:
          "Chez MySelfieBooth, le Photobooth est proposé à 400 € pour 5 h. Le tarif final dépend de la durée, du lieu, des impressions et des options choisies.",
      },
      {
        question: "Combien coûte un Miroirbooth ?",
        answer:
          "Le Miroirbooth démarre à 450 €. Le devis précise ensuite la durée, le déplacement, les impressions et les options éventuelles.",
      },
      {
        question: "Quel est le prix d'un 360 Booth ?",
        answer:
          "Le 360 Booth démarre à 400 €. Le tarif varie ensuite selon la durée, le lieu, le décor et les options vidéo.",
      },
      ...(article.faqs || []),
    ],
    relatedLinks: [
      { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
      { label: "Comparer toutes les animations", href: "/prestations/" },
      { label: "Demander un devis", href: "https://reservation.myselfiebooth-paris.fr/" },
      ...(article.relatedLinks || []),
    ],
  });
}

function optimizeEnterpriseArticle(article) {
  return withSeoUpdate(article, {
    title: "Photobooth entreprise : animation, logo & branding",
    seoTitle: "Photobooth entreprise : animation & branding",
    excerpt:
      "Salon, séminaire, soirée d'entreprise ou lancement : choisissez le bon photobooth, personnalisez le branding et fluidifiez le passage des invités.",
    metaDescription:
      "Photobooth entreprise : formats, logo, branding, salon, séminaire et soirée corporate. Conseils pour choisir l'animation et organiser le flux invités.",
    takeaways: [
      "Choisissez le format selon l'objectif : trafic, souvenir, contenu ou image de marque.",
      "Logo, couleurs, messages et cadres peuvent être adaptés au branding selon le dispositif.",
      "Sur un salon ou un séminaire, le flux et le temps de passage sont aussi importants que le rendu.",
    ],
    sections: [
      {
        title: "Photobooth entreprise : quel objectif avant de choisir la machine ?",
        paragraphs: [
          "Un photobooth d'entreprise peut servir à attirer sur un stand, animer un séminaire, remercier des collaborateurs, créer du contenu ou renforcer une activation de marque. Le choix du dispositif doit donc partir du résultat attendu plutôt que du nom de la machine.",
        ],
        bullets: [
          "Salon professionnel : attirer puis faire passer rapidement les visiteurs.",
          "Séminaire : créer un moment collectif facile à comprendre.",
          "Soirée d'entreprise : produire un souvenir photo ou vidéo personnalisé.",
          "Lancement de produit : aligner l'expérience avec le message et l'univers de marque.",
        ],
      },
      {
        title: "Logo, branding et personnalisation : que peut-on adapter ?",
        paragraphs: [
          "Selon le dispositif retenu, le cadre photo, certains écrans, les couleurs, les messages et l'habillage des contenus peuvent reprendre l'identité de l'entreprise. L'objectif est de rendre la marque identifiable sans réduire la place laissée aux participants.",
        ],
        bullets: [
          "Logo et couleurs de marque.",
          "Cadre ou overlay photo et vidéo.",
          "Message d'accueil ou nom de l'opération.",
          "Décor et expérience adaptés au brief lorsque la formule le permet.",
        ],
      },
      {
        title: "Quel photobooth choisir pour un événement d'entreprise ?",
        paragraphs: [
          "Le Photobooth convient aux souvenirs imprimés et aux flux réguliers. Le 360 Booth privilégie la vidéo et le partage. Le Vogue Booth crée un rendu plus premium pour un gala ou une activation de marque.",
        ],
        bullets: [
          "Salon professionnel : format rapide et visible.",
          "Séminaire : animation collective facile à intégrer.",
          "Soirée d'entreprise : souvenir photo ou vidéo personnalisé.",
          "Lancement produit : branding et contenus cohérents avec la marque.",
        ],
      },
      ...article.sections,
    ],
    faqs: [
      {
        question: "Quel photobooth choisir pour une entreprise ?",
        answer:
          "Le Photobooth est adapté aux souvenirs imprimés et au branding, le 360 Booth au contenu vidéo et le Vogue Booth aux activations qui recherchent un rendu plus éditorial.",
      },
      {
        question: "Peut-on personnaliser un photobooth avec le logo d'une entreprise ?",
        answer:
          "Oui. Le cadre photo, certains écrans, les couleurs, les messages et l'habillage des contenus peuvent être adaptés à l'identité de la marque selon le dispositif choisi.",
      },
      {
        question: "Quel photobooth choisir pour un salon professionnel ou un séminaire ?",
        answer:
          "Sur un salon, privilégiez un parcours rapide et visible. En séminaire ou en soirée interne, un Photobooth, un 360 Booth ou un Vogue Booth peut être choisi selon l'espace, le nombre de participants et le type de contenu recherché.",
      },
      ...(article.faqs || []),
    ],
    relatedLinks: [
      { label: "Location Photobooth entreprise", href: "/evenements/corporates/" },
      { label: "Event-Tech & activations de marque", href: "/event-tech/" },
      { label: "Photobooth pour salon et séminaire", href: "/blog/photobooth-salon-seminaire/" },
      { label: "Comparer les animations", href: "/prestations/" },
      ...(article.relatedLinks || []),
    ],
  });
}

function optimizeSalonSeminaireArticle(article) {
  return withSeoUpdate(article, {
    title: "Photobooth salon & séminaire : quel format ?",
    seoTitle: "Photobooth salon & séminaire : quel format ?",
    metaDescription:
      "Quel photobooth choisir pour un salon professionnel ou un séminaire ? Comparez Photobooth, iPad Booth, 360 Booth et Vogue Booth selon le flux et l'espace.",
    relatedLinks: [
      { label: "Location Photobooth entreprise", href: "/evenements/corporates/" },
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      ...(article.relatedLinks || []),
    ],
  });
}

function optimizeWeddingArticle(article) {
  return withSeoUpdate(article, {
    title: "Quel photobooth choisir pour un mariage ?",
    seoTitle: "Photobooth mariage : comparatif & meilleur choix",
    excerpt:
      "Photobooth, Miroirbooth, 360 Booth ou Vogue Booth : comparez les formats selon les tirages, le décor, l'espace, le nombre d'invités et l'ambiance du mariage.",
    metaDescription:
      "Quel est le meilleur photobooth pour un mariage ? Comparez Photobooth, Miroirbooth, 360 Booth et Vogue Booth selon le lieu, les invités et le souvenir voulu.",
    takeaways: [
      "Le Photobooth classique reste le plus polyvalent pour les tirages et les groupes.",
      "Le Miroirbooth privilégie la scénographie, le 360 Booth la vidéo et le Vogue Booth l'effet éditorial.",
      "Le meilleur choix dépend du lieu, du nombre d'invités, du souvenir et du niveau d'accompagnement souhaité.",
    ],
    sections: [
      {
        title: "Quel est le meilleur photobooth pour un mariage ?",
        paragraphs: [
          "Il n'existe pas un meilleur photobooth universel. Le Photobooth est souvent le plus simple pour les tirages et les groupes, le Miroirbooth apporte une présence décorative, le 360 Booth privilégie la vidéo et le Vogue Booth crée un décor très visuel.",
        ],
      },
      {
        title: "Comment choisir son photobooth en 5 critères ?",
        paragraphs: [
          "Pour comparer les offres, partez de l'usage réel pendant la réception. Cinq critères permettent généralement d'écarter rapidement les formats mal adaptés.",
        ],
        bullets: [
          "Le souvenir souhaité : tirage photo, vidéo ou portrait éditorial.",
          "L'espace et le recul disponibles dans le lieu.",
          "Le nombre d'invités et les pics de passage prévus.",
          "Le style recherché : discret, décoratif ou spectaculaire.",
          "Le niveau d'accompagnement : autonome ou avec animateur selon le projet.",
        ],
      },
      ...article.sections,
    ],
    faqs: [
      {
        question: "Quel est le meilleur photobooth pour un mariage ?",
        answer:
          "Le Photobooth classique est le plus polyvalent pour les tirages et les groupes. Le Miroirbooth est plus scénographique, le 360 Booth privilégie la vidéo et le Vogue Booth le rendu éditorial. Le meilleur choix dépend donc du lieu et du souvenir recherché.",
      },
      {
        question: "Comment choisir son photobooth pour un mariage ?",
        answer:
          "Comparez le type de souvenir, l'espace disponible, le nombre d'invités, le style du mariage et le niveau d'accompagnement prévu. Ces critères permettent de choisir un format réellement adapté à la réception.",
      },
      {
        question: "Faut-il choisir un photobooth avec animateur ou en formule autonome ?",
        answer:
          "Une formule autonome peut suffire pour un parcours simple. Un animateur devient utile lorsque le flux est important, que le dispositif est plus complexe ou que vous souhaitez accompagner davantage les invités.",
      },
      ...(article.faqs || []),
    ],
    relatedLinks: [
      { label: "Voir les animations mariage", href: "/evenements/mariages/" },
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      { label: "Prix d'une location Photobooth", href: "/blog/prix-location-photobooth/" },
      ...(article.relatedLinks || []),
    ],
  });
}

function optimizeSpaceArticle(article) {
  return withSeoUpdate(article, {
    seoTitle: "Espace Photobooth : dimensions & alimentation",
    excerpt:
      "Recul, prise électrique, circulation, accès et surface : voici les points à valider pour installer un Photobooth, un Miroirbooth ou un 360 Booth sans gêner l'événement.",
    metaDescription:
      "Quel espace et quelle alimentation prévoir pour un photobooth ? Recul, prise électrique, circulation, accès et conseils selon Photobooth, Miroirbooth et 360 Booth.",
    sections: [
      {
        title: "De quel espace et de quelle alimentation électrique a besoin un photobooth ?",
        paragraphs: [
          "Prévoyez à la fois l'emprise de la machine, le recul des participants et une zone de circulation. Une prise électrique accessible et un sol stable simplifient l'installation. La surface exacte varie selon le dispositif : une borne compacte demande moins de dégagement qu'un Miroirbooth ou un 360 Booth.",
        ],
        bullets: [
          "Une prise électrique accessible à proximité.",
          "Un sol plat, stable et protégé.",
          "Du recul pour cadrer les groupes sans bloquer le passage.",
          "Un accès de livraison compatible avec la taille du matériel.",
        ],
      },
      ...article.sections,
    ],
    faqs: [
      {
        question: "De quel espace a besoin un photobooth ?",
        answer:
          "Il faut prévoir l'emprise de la borne, le recul nécessaire aux participants et une zone de circulation. La surface exacte dépend du modèle et du nombre de personnes photographiées à chaque passage.",
      },
      {
        question: "Quelle alimentation électrique faut-il pour un photobooth ?",
        answer:
          "Une prise électrique accessible à proximité est généralement nécessaire. Les besoins précis dépendent de la machine et des équipements associés ; ils sont validés avant l'installation.",
      },
      ...(article.faqs || []),
    ],
    relatedLinks: [
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      { label: "Comparer les animations", href: "/prestations/" },
      ...(article.relatedLinks || []),
    ],
  });
}

function optimizeDurationArticle(article) {
  return withSeoUpdate(article, {
    seoTitle: "Durée location Photobooth : 3h, 5h ou soirée ?",
    metaDescription:
      "Combien de temps louer un photobooth ? Comparez 3 h, 5 h ou une soirée complète selon le nombre d'invités, le programme et le débit de l'animation.",
    faqs: [
      {
        question: "Combien de temps faut-il louer un photobooth ?",
        answer:
          "La bonne durée dépend du nombre d'invités et du programme. Une animation doit couvrir les périodes où les participants sont réellement disponibles, en tenant compte du repas, des discours et des pics de passage.",
      },
      ...(article.faqs || []),
    ],
    relatedLinks: [
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      { label: "Prix location Photobooth", href: "/blog/prix-location-photobooth/" },
      ...(article.relatedLinks || []),
    ],
  });
}

function optimizePersonalizationArticle(article) {
  return {
    ...article,
    title: "Photobooth personnalisé : idées & options",
    excerpt:
      "Cadre photo, écran, décor, mur floral et souvenirs : personnalisez votre photobooth sans surcharger le rendu de votre événement.",
    metaDescription:
      "Photobooth personnalisé : idées pour personnaliser tirages, cadre photo, écran, décor, mur floral et souvenirs pour mariage ou entreprise.",
    sections: [
      {
        title: "Que peut-on personnaliser sur un photobooth ?",
        paragraphs: [
          "Le cadre des tirages, les couleurs, les textes, certains écrans, le décor et les souvenirs peuvent être adaptés au thème du mariage ou à l'identité visuelle d'une entreprise.",
        ],
        bullets: [
          "Cadre photo avec noms, date ou logo.",
          "Couleurs et éléments graphiques de l'événement.",
          "Mur floral, panneau ou fond selon la configuration.",
          "Porte-clés, magnets et livre d'or pour prolonger le souvenir.",
        ],
      },
      ...article.sections,
    ],
    relatedLinks: [
      { label: "Voir toutes les options", href: "/options/" },
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      ...(article.relatedLinks || []),
    ],
  };
}

function optimizeAnniversaryArticle(article) {
  return {
    ...article,
    title: "Photobooth anniversaire : lequel choisir ?",
    excerpt:
      "Photo imprimée, vidéo 360 ou Vogue Booth : choisissez l'animation anniversaire adaptée à vos invités, votre espace et votre ambiance.",
    metaDescription:
      "Photobooth anniversaire : comparez Photobooth, 360 Booth et Vogue Booth selon vos invités, l'espace et le souvenir recherché.",
    relatedLinks: [
      { label: "Voir les animations anniversaire", href: "/evenements/anniversaires/" },
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      ...(article.relatedLinks || []),
    ],
  };
}

function optimizeVogueArticle(article) {
  return {
    ...article,
    title: "Vogue Booth : effet magazine & photocall",
    excerpt:
      "Découvrez le Vogue Booth, un photocall lumineux personnalisable inspiré des couvertures de magazine pour mariage, gala et événement de marque.",
    metaDescription:
      "Vogue Booth : découvrez le photocall lumineux effet magazine, personnalisable pour mariage, gala, soirée VIP et événement de marque.",
    relatedLinks: [
      { label: "Voir le Vogue Booth", href: "/prestations/voguebooth/" },
      ...(article.relatedLinks || []),
    ],
  };
}

function optimizeLivreOrArticle(article) {
  return {
    ...article,
    title: "Livre d'or photobooth : idées mariage",
    metaDescription:
      "Livre d'or photobooth : combinez tirages photo et messages des invités pour créer un souvenir de mariage à conserver après la réception.",
    relatedLinks: [
      { label: "Voir le livre d'or audio Phonebooth", href: "/options/phonebooth/" },
      { label: "Voir les options Photobooth", href: "/options/" },
      ...(article.relatedLinks || []),
    ],
  };
}

function applySearchConsoleOverrides(article) {
  if (!article) {
    return article;
  }

  const optimizers = {
    "prix-location-photobooth": optimizePriceArticle,
    "animation-photobooth-entreprise": optimizeEnterpriseArticle,
    "photobooth-salon-seminaire": optimizeSalonSeminaireArticle,
    "choisir-photobooth-mariage": optimizeWeddingArticle,
    "espace-installation-photobooth": optimizeSpaceArticle,
    "duree-location-photobooth": optimizeDurationArticle,
    "personnaliser-photobooth": optimizePersonalizationArticle,
    "photobooth-anniversaire": optimizeAnniversaryArticle,
    "vogue-booth-effet-magazine": optimizeVogueArticle,
    "livre-or-photo-photobooth": optimizeLivreOrArticle,
  };

  const optimize = optimizers[article.slug];
  return optimize ? optimize(article) : article;
}

export default function BlogArticlePage({ article }) {
  return <BlogArticle article={article} />;
}

export function getStaticPaths() {
  return {
    paths: blogArticles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      article: applySearchConsoleOverrides(getBlogArticle(params.slug)),
    },
  };
}
