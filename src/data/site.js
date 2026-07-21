export const siteConfig = {
  name: "MySelfieBooth",
  baseUrl: "https://www.myselfiebooth-paris.fr",
  quoteUrl: "https://reservation.myselfiebooth-paris.fr/",
  phoneLabel: "06 99 73 39 98",
  phoneHref: "tel:0699733998",
  phoneInternational: "+33 6 99 73 39 98",
  email: "contact@myselfiebooth-paris.fr",
  primaryCtaLabel: "Obtenir mon devis en 2 minutes",
  secondaryCtaLabel: "Comparer les animations",
  galleryCtaLabel: "Voir nos realisations",
  phoneCtaLabel: "Appeler MySelfieBooth",
  microcopy: "Formulaire rapide, proposition personnalisee.",
  mainArea: "Paris et Ile-de-France",
  servedAreas: ["Paris", "Ile-de-France", "Lyon", "Rouen"],
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
  { name: "Sephora", src: "/logos/sephora.webp" },
  { name: "Prada", src: "/logos/prada.webp" },
  { name: "Safran", src: "/logos/safran.webp" },
  { name: "Decathlon", src: "/logos/decathlon.webp" },
  { name: "Air France", src: "/logos/airfrance.webp" },
  { name: "Renault", src: "/logos/renault.webp" },
  { name: "SNCF", src: "/logos/sncf.webp" },
  { name: "Veolia", src: "/logos/veolia.webp" },
];

export const trustSignals = [
  { value: "+500", label: "evenements accompagnes", needsValidation: true },
  { value: "4.9/5", label: "note moyenne affichee", needsValidation: true },
  { value: "167", label: "avis clients affiches", needsValidation: true },
  { value: "3 zones", label: "Paris, Lyon, Rouen", needsValidation: true },
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
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description:
    "Location de photobooths premium pour evenements professionnels et prives.",
  url: siteConfig.baseUrl,
  logo: absoluteUrl("/images/logo.jpg"),
  sameAs: siteConfig.socialLinks.map((link) => link.href),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneInternational,
    contactType: "customer service",
    email: siteConfig.email,
  },
  areaServed: siteConfig.servedAreas,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
};
