const GOOGLE_PLACE_ID = "ChIJP2dCemoVuCMRaY5EKxf6mI4";

export const siteConfig = {
  name: "MySelfieBooth",
  baseUrl: "https://myselfiebooth-paris.fr",
  quoteUrl: "https://reservation.myselfiebooth-paris.fr/",
  ratesUrl: "https://reservation.myselfiebooth-paris.fr/tarifs/",
  phoneLabel: "06 99 73 39 98",
  phoneHref: "tel:0699733998",
  phoneInternational: "+33 6 99 73 39 98",
  email: "contact@myselfiebooth-paris.fr",
  googlePlaceId: GOOGLE_PLACE_ID,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=MySelfieBooth&query_place_id=${GOOGLE_PLACE_ID}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=MySelfieBooth&destination_place_id=${GOOGLE_PLACE_ID}`,
  reviewsUrl: `https://www.google.com/maps/search/?api=1&query=MySelfieBooth&query_place_id=${GOOGLE_PLACE_ID}`,
  reviewCtaUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
  reviews: {
    rating: "4,8/5",
    count: 77,
    source: "Google",
  },
  defaultOgImage: "/images/ai-from-real/hero-photobooth-reception.webp",
  defaultOgImageAlt: "Animations Photobooth, Miroirbooth, 360 Booth et Vogue Booth MySelfieBooth",
  primaryCtaLabel: "Demander mon devis",
  secondaryCtaLabel: "Comparer les animations",
  galleryCtaLabel: "Voir nos réalisations",
  phoneCtaLabel: "Appeler MySelfieBooth",
  professionalCtaLabel: "Demander un devis entreprise",
  microcopy: "Formulaire rapide, proposition personnalisée.",
  mainArea: "Île-de-France",
  servedAreas: [
    "Paris",
    "Île-de-France",
    "Seine-et-Marne",
    "Essonne",
    "Hauts-de-Seine",
    "Seine-Saint-Denis",
    "Val-de-Marne",
    "Yvelines",
    "Val-d'Oise",
  ],
  founder: {
    name: "Stéphane Faure",
    title: "Ingénieur aéronautique et fondateur de MySelfieBooth",
    summary:
      "Ingénieur en aéronautique devenu entrepreneur en 2021, Stéphane a conçu ses propres photobooths pour proposer des expériences photo et vidéo différenciantes.",
    needsValidation: true,
  },
  socialLinks: [
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.png",
      href: "https://www.linkedin.com/myselfiebooth_paris/",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.png",
      href: "https://www.instagram.com/myselfiebooth_paris/",
    },
    {
      name: "TikTok",
      icon: "/icons/tiktok.png",
      href: "https://www.tiktok.com/@myselfiebooth_paris",
    },
  ],
};

export const brandLogos = [
  { name: "L’Oréal", src: "/logos/loreal.png" },
  { name: "LVMH", src: "/logos/lvmh.png" },
  { name: "TotalEnergies", src: "/logos/totalenergies.png" },
  { name: "Schneider Electric", src: "/logos/schneider-electric.png" },
  { name: "Airbus", src: "/logos/airbus.png" },
  { name: "Hermès", src: "/logos/hermes.png" },
  { name: "Safran", src: "/logos/safran.webp" },
  { name: "Air Liquide", src: "/logos/air-liquide.png" },
  { name: "BNP Paribas", src: "/logos/bnp-paribas.png" },
  { name: "AXA", src: "/logos/axa.png" },
  { name: "Sanofi", src: "/logos/sanofi.png" },
  { name: "EssilorLuxottica", src: "/logos/essilorluxottica.png" },
  { name: "Vinci", src: "/logos/vinci.png" },
  { name: "ENGIE", src: "/logos/engie.png" },
  { name: "Crédit Agricole", src: "/logos/credit-agricole.png" },
  { name: "Sephora", src: "/logos/sephora.webp" },
];

export const trustSignals = [
  { value: "+700", label: "événements réalisés" },
  { value: "5 ans", label: "d'expertise événementielle" },
  { value: siteConfig.reviews.rating, label: "note moyenne sur Google", href: siteConfig.reviewsUrl },
  { value: String(siteConfig.reviews.count), label: "avis clients Google", href: siteConfig.reviewsUrl },
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.baseUrl}${cleanPath}`;
}

export function withSlash(path = "/") {
  if (path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path : `${path}/`;
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(withSlash(item.href)),
    })),
  };
}

export function faqJsonLd(faq = []) {
  if (!faq.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.baseUrl}/#organization`,
  name: siteConfig.name,
  description:
    "Location de photobooths premium et activations photo-vidéo pour événements professionnels et privés.",
  url: siteConfig.baseUrl,
  logo: absoluteUrl("/images/logo.jpg"),
  image: absoluteUrl("/images/ai-from-real/hero-photobooth-reception.webp"),
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  hasMap: siteConfig.mapsUrl,
  sameAs: siteConfig.socialLinks.map((link) => link.href),
  brand: {
    "@type": "Brand",
    name: siteConfig.name,
  },
  knowsAbout: [
    "Location de photobooth",
    "Photo Booth événementiel",
    "Miroirbooth",
    "360 Booth",
    "Vogue Booth",
    "Air360 Booth",
    "iPad Booth",
    "Livre d'or audio",
    "Animation photo pour mariage",
    "Animation photo pour entreprise",
    "Activation de marque événementielle",
  ],
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.title,
    url: absoluteUrl("/a-propos/"),
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneInternational,
    contactType: "customer service",
    email: siteConfig.email,
    availableLanguage: ["fr-FR"],
  },
  areaServed: siteConfig.servedAreas,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.baseUrl}/#website`,
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  inLanguage: "fr-FR",
  publisher: {
    "@id": `${siteConfig.baseUrl}/#organization`,
  },
};
