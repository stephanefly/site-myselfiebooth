import MarketingPage from "../components/marketing/MarketingPage";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  siteConfig,
  trustSignals,
} from "../data/site";

const path = "/prix-photobooth-ile-de-france-2026/";

const faq = [
  {
    question: "Quel est le prix d'un Photobooth en Île-de-France en 2026 ?",
    answer:
      "Chez MySelfieBooth, le Photobooth démarre à 450 €. Le prix final dépend notamment de la date, du lieu, de la durée, des impressions et des options retenues.",
  },
  {
    question: "Pourquoi certaines locations de Photobooth sont-elles moins chères ?",
    answer:
      "Les offres ne comprennent pas toujours les mêmes services. Il faut comparer la livraison, l'installation, la présence d'un animateur, les impressions, la personnalisation, la galerie et les conditions d'assistance.",
  },
  {
    question: "Combien coûte un Miroirbooth ?",
    answer:
      "Le Miroirbooth MySelfieBooth démarre à 550 €. Il est davantage orienté réception premium et mise en scène qu'une borne photo classique.",
  },
  {
    question: "Combien coûte un 360 Booth ?",
    answer:
      "Le 360 Booth MySelfieBooth démarre à 500 € pour les événements particuliers. Les demandes corporate font l'objet d'une proposition distincte selon le branding, la durée, les contenus et la logistique.",
  },
  {
    question: "Les entreprises ont-elles les mêmes tarifs que les particuliers ?",
    answer:
      "Non nécessairement. Les projets professionnels peuvent inclure branding, contraintes de site, gestion du flux, livrables et reporting. Les offres corporate démarrent à 900 € HT selon le dispositif.",
  },
];

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Prix Photobooth 2026", href: path },
];

const pricePage = {
  key: "prix-photobooth-ile-de-france-2026",
  eyebrow: "Tarifs 2026",
  title: "Prix Photobooth en Île-de-France en 2026",
  description:
    "Comparez les tarifs MySelfieBooth pour Photobooth, Miroirbooth, 360 Booth et Vogue Booth en Île-de-France, avec les services à vérifier avant de choisir une offre.",
  image: "/images/ai-from-real/tirages-invites-mariage-gala.webp",
  imageAlt: "Tirages Photobooth MySelfieBooth pendant un événement",
  highlights: ["Photobooth dès 450 €", "Miroirbooth dès 550 €", "360 Booth dès 500 €"],
  proof: trustSignals,
  breadcrumbs,
  sections: [
    {
      anchor: "tarifs",
      eyebrow: "Grille de départ",
      title: "Nos principaux tarifs Photobooth et animations en 2026",
      text:
        "Ces montants sont des prix de départ. Le devis confirme la durée, la zone d'intervention, les impressions, l'installation, la personnalisation et les options selon votre événement.",
      cards: [
        {
          title: "Photobooth — dès 450 €",
          text: "La borne photo polyvalente pour mariage, anniversaire et événement professionnel, avec tirages selon formule et galerie.",
        },
        {
          title: "Miroirbooth — dès 550 €",
          text: "Une expérience photo plus scénographique pour mariage élégant, gala, réception premium et entreprise.",
        },
        {
          title: "360 Booth — dès 500 €",
          text: "Une animation vidéo dynamique pour créer des contenus courts et personnalisés autour des invités.",
        },
        {
          title: "Vogue Booth — dès 500 €",
          text: "Un décor lumineux effet magazine pouvant être configuré comme Portrait Studio pour un rendu plus éditorial.",
        },
      ],
    },
    {
      anchor: "comparer",
      eyebrow: "Comparer correctement",
      title: "Le prix seul ne dit pas ce qui est réellement inclus",
      text:
        "Deux offres affichées à des prix différents peuvent couvrir des prestations très différentes. Pour comparer correctement, vérifiez les éléments qui ont un impact direct sur le déroulement et le résultat final.",
      cards: [
        {
          title: "Livraison & installation",
          text: "Vérifiez qui transporte, installe, teste et reprend le matériel, ainsi que les éventuels frais de déplacement.",
        },
        {
          title: "Présence & assistance",
          text: "Confirmez si un animateur ou un interlocuteur est prévu pendant la prestation et comment les incidents sont gérés.",
        },
        {
          title: "Impressions & contenus",
          text: "Comparez le nombre et le format des tirages, la personnalisation, la galerie et la remise des fichiers numériques.",
        },
        {
          title: "Durée réelle",
          text: "Vérifiez si le temps d'installation est inclus dans la durée facturée ou si les heures correspondent réellement à l'ouverture aux invités.",
        },
      ],
    },
    {
      anchor: "entreprise",
      eyebrow: "Entreprises & agences",
      title: "Des offres corporate distinctes à partir de 900 € HT",
      text:
        "Pour une entreprise, un salon, un lancement ou une activation de marque, la prestation peut inclure davantage que la machine : branding, gestion du flux, contenus, contraintes techniques et bilan après l'événement.",
      cards: [
        {
          title: "Brand Experience",
          text: "À partir de 900 € HT pour une expérience photo personnalisée avec logistique cadrée et livrables définis au brief.",
        },
        {
          title: "Social Content",
          text: "À partir de 1 090 € HT pour une expérience orientée vidéo et contenus courts avec 360 Booth ou Vogue Booth.",
        },
        {
          title: "Vogue Portrait Studio",
          text: "À partir de 900 € HT pour un dispositif plus éditorial destiné aux galas, lancements et opérations image.",
        },
      ],
    },
    {
      anchor: "devis",
      eyebrow: "Obtenir le bon prix",
      title: "Les 5 informations qui permettent d'obtenir un devis fiable",
      text:
        "La date, le lieu, la durée, le nombre d'invités et le résultat attendu suffisent généralement à orienter rapidement vers la bonne formule.",
      cards: [
        { title: "1. Date", text: "La disponibilité du matériel et de l'équipe dépend du calendrier." },
        { title: "2. Lieu", text: "Accès, distance, stationnement, étage et contraintes techniques influencent la logistique." },
        { title: "3. Durée", text: "Le temps d'ouverture aux invités doit être distingué du montage et du démontage." },
        { title: "4. Invités", text: "Le volume attendu aide à choisir la machine, l'équipe et la gestion du flux." },
        { title: "5. Objectif", text: "Souvenir imprimé, expérience premium, vidéo sociale ou activation de marque n'impliquent pas la même configuration." },
      ],
    },
  ],
  gallery: [],
  faq,
  finalTitle: "Recevez une proposition adaptée à votre date, votre lieu et votre événement",
  relatedLinks: [
    { label: "Voir le Photobooth", href: "/prestations/photobooth/" },
    { label: "Comparer toutes les animations", href: "/prestations/" },
    { label: "Offres pour entreprise", href: "/evenements/corporates/" },
    { label: "Guide du prix d'une location Photobooth", href: "/blog/prix-location-photobooth/" },
  ],
  primaryCta: {
    label: "Obtenir mon devis en 2 minutes",
    href: siteConfig.quoteUrl,
    event: "cta_quote_click",
  },
  secondaryCta: {
    label: "Comparer les animations",
    href: "/prestations/",
  },
  phoneCta: {
    label: siteConfig.phoneCtaLabel,
    href: siteConfig.phoneHref,
  },
  meta: {
    title: "Prix Photobooth Île-de-France 2026 | Tarifs dès 450 €",
    description:
      "Prix Photobooth en Île-de-France en 2026 : Photobooth dès 450 €, Miroirbooth 550 €, 360 Booth 500 € et conseils pour comparer les offres.",
    ogTitle: "Prix Photobooth en Île-de-France en 2026",
    ogDescription:
      "Les tarifs MySelfieBooth et les critères à comparer avant de réserver une animation photo ou vidéo.",
    ogImage: "/images/ai-from-real/tirages-invites-mariage-gala.webp",
    ogUrl: absoluteUrl(path),
    jsonLd: [
      breadcrumbJsonLd(breadcrumbs),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Location Photobooth et animations en Île-de-France",
        provider: {
          "@type": "Organization",
          "@id": `${siteConfig.baseUrl}/#organization`,
          name: siteConfig.name,
        },
        areaServed: "Île-de-France",
        url: absoluteUrl(path),
        offers: [
          { "@type": "Offer", name: "Photobooth", price: "450", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Miroirbooth", price: "550", priceCurrency: "EUR" },
          { "@type": "Offer", name: "360 Booth", price: "500", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Vogue Booth", price: "500", priceCurrency: "EUR" },
        ],
      },
      faqJsonLd(faq),
    ].filter(Boolean),
  },
};

export default function PrixPhotoboothIleDeFrance2026() {
  return <MarketingPage page={pricePage} />;
}
