import BlogArticle from "../../components/blog/BlogArticle";
import { blogArticles, getBlogArticle } from "../../data/blogArticles";

function optimizePriceArticle(article) {
  return {
    ...article,
    title: "Prix location photobooth : tarifs 2026",
    excerpt:
      "Photobooth, Miroirbooth, 360 Booth ou Vogue Booth : comparez les tarifs de départ et les éléments qui font varier le prix final.",
    metaDescription:
      "Prix d'une location de photobooth : Photobooth dès 450 €, 360 Booth dès 500 €, Miroirbooth dès 550 € et Vogue Booth dès 500 €. Comparez les tarifs.",
    takeaways: [
      "Photobooth : à partir de 450 €.",
      "360 Booth et Vogue Booth : à partir de 500 €.",
      "Miroirbooth : à partir de 550 €.",
    ],
    sections: [
      {
        title: "Quels sont les tarifs de location chez MySelfieBooth ?",
        paragraphs: [
          "Le prix dépend d'abord de la machine choisie. Les tarifs de départ permettent de comparer les formats avant de préciser la durée, le lieu et les options dans le devis.",
        ],
        bullets: [
          "Photobooth : à partir de 450 €.",
          "360 Booth : à partir de 500 €.",
          "Vogue Booth : à partir de 500 €.",
          "Miroirbooth : à partir de 550 €.",
        ],
      },
      ...article.sections,
    ],
    faqs: [
      {
        question: "Quel est le prix d'une location de photobooth ?",
        answer:
          "Chez MySelfieBooth, le Photobooth démarre à 450 €. Le tarif final dépend de la durée, du lieu, des impressions et des options choisies.",
      },
      {
        question: "Combien coûte un Miroirbooth ?",
        answer:
          "Le Miroirbooth démarre à 550 €. Le devis précise ensuite la durée, le déplacement, les impressions et les options éventuelles.",
      },
      {
        question: "Quel est le prix d'un 360 Booth ?",
        answer:
          "Le 360 Booth démarre à 500 €. Le tarif varie ensuite selon la durée, le lieu, le décor et les options vidéo.",
      },
      ...(article.faqs || []),
    ],
    relatedLinks: [
      { label: "Voir la location Photobooth", href: "/prestations/photobooth/" },
      { label: "Comparer toutes les animations", href: "/prestations/" },
      { label: "Demander un devis", href: "https://reservation.myselfiebooth-paris.fr/" },
      ...(article.relatedLinks || []),
    ],
  };
}

function optimizeEnterpriseArticle(article) {
  return {
    ...article,
    title: "Photobooth entreprise : guide & idées",
    excerpt:
      "Choisissez une animation photobooth adaptée à votre objectif : salon professionnel, séminaire, soirée d'entreprise ou lancement de produit.",
    metaDescription:
      "Photobooth entreprise : conseils pour salon, séminaire et soirée corporate. Comparez les formats, le branding, le flux invités et les contenus.",
    sections: [
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
      ...(article.faqs || []),
    ],
    relatedLinks: [
      { label: "Location Photobooth entreprise", href: "/evenements/corporates/" },
      { label: "Event-Tech & activations de marque", href: "/event-tech/" },
      { label: "Comparer les animations", href: "/prestations/" },
      ...(article.relatedLinks || []),
    ],
  };
}

function optimizeSalonSeminaireArticle(article) {
  return {
    ...article,
    title: "Photobooth salon & séminaire : quel format ?",
    metaDescription:
      "Quel photobooth choisir pour un salon professionnel ou un séminaire ? Comparez Photobooth, iPad Booth, 360 Booth et Vogue Booth selon le flux et l'espace.",
    relatedLinks: [
      { label: "Location Photobooth entreprise", href: "/evenements/corporates/" },
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      ...(article.relatedLinks || []),
    ],
  };
}

function optimizeWeddingArticle(article) {
  return {
    ...article,
    title: "Quel photobooth choisir pour un mariage ?",
    excerpt:
      "Photobooth, Miroirbooth, 360 Booth ou Vogue Booth : comparez les formats selon les tirages, le décor, l'espace et l'ambiance de votre mariage.",
    metaDescription:
      "Quel photobooth choisir pour un mariage ? Comparez Photobooth, Miroirbooth, 360 Booth et Vogue Booth selon le souvenir, le lieu et vos invités.",
    sections: [
      {
        title: "Quel est le meilleur photobooth pour un mariage ?",
        paragraphs: [
          "Le meilleur format dépend surtout du souvenir recherché. Le Photobooth reste le plus polyvalent pour les tirages, le Miroirbooth apporte une présence décorative, le 360 Booth privilégie la vidéo et le Vogue Booth crée un décor très visuel.",
        ],
      },
      ...article.sections,
    ],
    relatedLinks: [
      { label: "Voir les animations mariage", href: "/evenements/mariages/" },
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      ...(article.relatedLinks || []),
    ],
  };
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
