const DEFAULT_PUBLISHED_AT = "12 août 2026";
const DEFAULT_PUBLISHED_ISO = "2026-08-12";

export function section(title, paragraphs, bullets) {
  return {
    title,
    paragraphs: Array.isArray(paragraphs) ? paragraphs : [paragraphs],
    ...(bullets?.length ? { bullets } : {}),
  };
}

export function guide({
  slug, topic, category, title, excerpt, image, imageAlt,
  readTime = "7 min", metaDescription = excerpt, keywords,
  takeaways, sections, faqs, ctaLabel, ctaHref, relatedLinks = [],
}) {
  return {
    slug, topic, category, title, excerpt, image, imageAlt, readTime,
    publishedAt: DEFAULT_PUBLISHED_AT,
    publishedIso: DEFAULT_PUBLISHED_ISO,
    metaDescription, keywords, takeaways, sections, faqs,
    ctaLabel, ctaHref, relatedLinks,
  };
}

export const weddingLinks = [
  { label: "Animations pour un mariage", href: "/evenements/mariages/" },
  { label: "Comparer nos prestations", href: "/prestations/" },
  { label: "Voir des réalisations réelles", href: "/realisations/" },
];
