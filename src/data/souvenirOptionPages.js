import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, siteConfig } from "./site";

const details = {
  "livre-or-photo": {
    label: "Livre d’or photo",
    eyebrow: "Photos & petits mots",
    title: "Un livre d’or photo à feuilleter après la fête",
    metaTitle: "Livre d’or photo mariage à Paris | MySelfieBooth",
    description: "Réunissez les tirages du Photobooth et les messages de vos invités dans un livre d’or photo pour votre mariage ou réception à Paris et en Île-de-France.",
    image: "/images/ai-from-real/accueil-souvenir-livre-or-photo.webp",
    imageAlt: "Album de mariage ouvert avec tirages photo et messages manuscrits dorés",
    highlights: ["Album papier", "Photos & messages", "Sur devis"],
    sections: [
      {
        anchor: "souvenir",
        eyebrow: "Le souvenir",
        title: "Leurs photos, leurs mots, votre album",
        text: "Le livre d’or photo complète les tirages de votre animation. Les invités choisissent une photo, la collent dans l’album et ajoutent un message à côté.",
        cards: [
          { title: "Une photo", text: "Un portrait ou une bandelette à conserver dans l’album." },
          { title: "Un message", text: "Un vœu, une anecdote ou quelques mots écrits à la main." },
          { title: "Un album", text: "Les souvenirs de vos proches réunis dans un objet à garder." },
        ],
      },
      {
        anchor: "preparation",
        eyebrow: "À prévoir",
        title: "Une petite table près du Photobooth",
        text: "Prévoyez un endroit accessible où les invités peuvent se poser pour écrire. Le modèle d’album, le matériel d’écriture et de collage ainsi que les tirages destinés au livre d’or sont précisés dans le devis.",
      },
    ],
    faq: [
      { question: "Faut-il réserver un Photobooth avec le livre d’or ?", answer: "Le livre d’or photo est conçu pour accompagner les souvenirs imprimés. Nous confirmons la machine, les formats et la quantité de tirages adaptés à votre projet." },
      { question: "L’album peut-il être personnalisé ?", answer: "Le modèle d’album et les possibilités de personnalisation sont définis lors de la préparation du devis." },
      { question: "Quelle différence avec le Phonebooth ?", answer: "Le livre d’or photo conserve des tirages et des mots écrits. Le Phonebooth enregistre les messages vocaux. Les deux peuvent se compléter." },
    ],
    finalTitle: "Ajoutez un livre d’or photo à votre événement.",
  },
  "livre-or-video": {
    label: "Livre d’or vidéo",
    eyebrow: "Visages & émotions",
    title: "Un livre d’or vidéo pour garder leurs messages",
    metaTitle: "Livre d’or vidéo mariage à Paris | MySelfieBooth",
    description: "Gardez les messages filmés de vos invités avec notre livre d’or vidéo : une borne avec caméra, écran et microphone pour vos réceptions à Paris et en Île-de-France.",
    image: "/images/ai-from-real/accueil-souvenir-livre-or-video.webp",
    imageAlt: "Livre d’or vidéo sur borne blanche avec caméra, écran et pupitre à microphone",
    highlights: ["Messages filmés", "Caméra & microphone", "Sur devis"],
    sections: [
      {
        anchor: "fonctionnement",
        eyebrow: "Le fonctionnement",
        title: "Un message face caméra, à votre rythme",
        text: "La borne filme les invités pendant qu’ils laissent un mot au microphone. Vœux, anecdotes et rires deviennent des souvenirs à revoir après votre mariage ou votre réception.",
        cards: [
          { title: "Prenez place", text: "L’écran aide les invités à se placer devant la caméra." },
          { title: "Laissez un mot", text: "Le microphone recueille leur message pendant l’enregistrement." },
          { title: "Retrouvez les émotions", text: "Les vidéos gardent les voix, les expressions et les sourires." },
        ],
      },
      {
        anchor: "installation",
        eyebrow: "L’installation",
        title: "Un coin calme pour entendre chaque message",
        text: "Prévoyez un emplacement stable, une alimentation électrique et une zone à l’écart des enceintes. L’installation, l’accompagnement et les modalités de remise des vidéos sont définis avec vous avant l’événement.",
      },
    ],
    faq: [
      { question: "Quelle différence avec une vidéo 360 ?", answer: "Le livre d’or vidéo enregistre un message face caméra avec la voix des invités. Le 360 Booth crée un clip en mouvement autour des participants." },
      { question: "Comment récupérer les messages filmés ?", answer: "Le support de remise, le format des fichiers et le délai sont précisés dans votre proposition. Ils sont confirmés avant l’événement." },
      { question: "Peut-on l’associer à un Photobooth ?", answer: "Oui, les deux usages se complètent : les photos pour les souvenirs imprimés et le livre d’or vidéo pour les messages personnels." },
    ],
    finalTitle: "Gardez leurs voix et leurs sourires.",
  },
  "panneau-fontaine": {
    label: "Panneau fontaine",
    eyebrow: "Un accueil qui marque",
    title: "Un panneau fontaine pour accueillir vos invités",
    metaTitle: "Location panneau fontaine Paris | MySelfieBooth",
    description: "Découvrez notre panneau fontaine : un rideau d’eau, un cadre lumineux et un décor floral pour l’entrée de votre mariage ou réception à Paris et en Île-de-France.",
    image: "/images/ai-from-real/accueil-souvenir-panneau-fontaine.webp",
    imageAlt: "Panneau fontaine de bienvenue blanc avec eau en mouvement et fleurs de réception",
    highlights: ["Rideau d’eau", "Cadre lumineux", "Sur devis"],
    sections: [
      {
        anchor: "decor",
        eyebrow: "Le décor",
        title: "L’eau, la lumière et les fleurs à l’entrée",
        text: "Le panneau fontaine associe une surface parcourue par un rideau d’eau à un cadre blanc lumineux. Il crée un point d’accueil décoratif pour votre mariage, votre soirée ou votre réception professionnelle.",
        cards: [
          { title: "Un effet en mouvement", text: "Le rideau d’eau apporte du relief à votre décor d’accueil." },
          { title: "Un accueil personnalisé", text: "Le message et sa présentation sont définis selon votre événement." },
          { title: "Une touche florale", text: "L’habillage floral est précisé selon le thème et la formule retenue." },
        ],
      },
      {
        anchor: "installation",
        eyebrow: "À prévoir",
        title: "Un emplacement validé avec votre lieu",
        text: "L’accès de livraison, la surface disponible, l’alimentation électrique et les conditions d’utilisation sont vérifiés avant la réservation. Nous définissons ensemble l’implantation du panneau et les éléments de personnalisation.",
      },
    ],
    faq: [
      { question: "Quelle différence avec un panneau de bienvenue classique ?", answer: "Un panneau classique présente un message fixe. Le panneau fontaine ajoute un rideau d’eau en mouvement et un cadre lumineux à la mise en scène de l’accueil." },
      { question: "Peut-on choisir le message et les fleurs ?", answer: "Le texte, le rendu graphique et l’habillage floral sont étudiés avec vous puis précisés dans le devis." },
      { question: "Peut-on l’installer dans tous les lieux ?", answer: "L’installation dépend des accès, de l’espace et des conditions techniques du lieu. Ces points sont validés avant de confirmer la prestation." },
    ],
    finalTitle: "Imaginez l’accueil de votre réception.",
  },
};

export function souvenirOptionPage(key) {
  const detail = details[key];
  const path = `/options/${key}/`;
  return {
    ...detail,
    key,
    heroVisual: { src: detail.image, alt: detail.imageAlt },
    primaryCta: { label: "Demander un devis", href: siteConfig.quoteUrl },
    secondaryCta: { label: "Voir toutes les options", href: "/options/" },
    relatedLinks: [
      ...Object.entries(details).filter(([other]) => other !== key).map(([slug, item]) => ({ label: item.label, href: `/options/${slug}/` })),
      { label: "Phonebooth : livre d’or audio", href: "/options/phonebooth/" },
    ],
    meta: {
      title: detail.metaTitle,
      description: detail.description,
      ogUrl: absoluteUrl(path),
      ogImage: detail.image,
      ogImageAlt: detail.imageAlt,
      jsonLd: [
        breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Options", href: "/options/" }, { label: detail.label, href: path }]),
        {
          "@context": "https://schema.org", "@type": "Service",
          name: detail.label, description: detail.description, url: absoluteUrl(path), image: absoluteUrl(detail.image),
          provider: { "@type": "Organization", "@id": `${siteConfig.baseUrl}/#organization`, name: siteConfig.name, url: siteConfig.baseUrl },
          areaServed: siteConfig.servedAreas,
        },
        faqJsonLd(detail.faq),
      ],
    },
  };
}
