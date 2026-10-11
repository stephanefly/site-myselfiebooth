import MarketingPage from "../../components/marketing/MarketingPage";
import localSeoPages from "../../data/local-seo-pages.json";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  siteConfig,
  trustSignals,
} from "../../data/site";

const departmentPhrases = {
  "seine-et-marne": "en Seine-et-Marne",
  essonne: "dans l'Essonne",
  "hauts-de-seine": "dans les Hauts-de-Seine",
  "seine-saint-denis": "en Seine-Saint-Denis",
  "val-de-marne": "dans le Val-de-Marne",
  yvelines: "dans les Yvelines",
  "val-doise": "dans le Val-d'Oise",
};

function locationPhrase(location) {
  if (location.type === "department") {
    return departmentPhrases[location.slug] || `dans ${location.name}`;
  }
  return `à ${location.name}`;
}

function buildFaq(location) {
  const place = locationPhrase(location);
  return [
    {
      question: `Intervenez-vous ${place} pour une location de photobooth ?`,
      answer: `Oui, MySelfieBooth étudie les prestations ${place} selon la date, le lieu, les horaires et les conditions d'accès. Le devis confirme la disponibilité et la logistique exacte.`,
    },
    {
      question: `Quel photobooth choisir ${place} pour un mariage ?`,
      answer: "Le Photobooth convient à la majorité des mariages grâce aux tirages et à la galerie. Le Miroirbooth apporte un rendu plus scénographique, tandis que le Vogue Booth est adapté aux réceptions recherchant une mise en scène plus éditoriale.",
    },
    {
      question: `Quelle animation choisir ${place} pour une entreprise ou un salon ?`,
      answer: "Le choix dépend de l'objectif : Photobooth ou Miroirbooth pour le souvenir et le branding, 360 Booth pour la vidéo sociale, Vogue Booth pour une expérience visuelle premium, ou dispositif Event-Tech sur étude pour une activation plus interactive.",
    },
    {
      question: `Comment sont calculés les frais de déplacement ${place} ?`,
      answer: "Ils dépendent du lieu exact, de la date, des horaires, du matériel mobilisé et des contraintes d'accès. Ils sont indiqués dans la proposition avant validation afin d'éviter les surprises.",
    },
  ];
}

function buildLocalLinks(location) {
  const nearby = new Set(location.nearby || []);

  return localSeoPages
    .filter((entry) => entry.slug !== location.slug && entry.department === location.department)
    .sort((a, b) => {
      const score = (entry) => {
        if (nearby.has(entry.name)) return 0;
        if (entry.type === "department") return 1;
        return 2;
      };
      return score(a) - score(b) || a.name.localeCompare(b.name, "fr");
    })
    .slice(0, 4)
    .map((entry) => ({
      label: `Photobooth ${entry.name} (${entry.code})`,
      href: `/location-photobooth/${entry.slug}/`,
    }));
}

function buildPage(location) {
  const place = locationPhrase(location);
  const path = `/location-photobooth/${location.slug}/`;
  const faq = buildFaq(location);
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Zones d'intervention", href: "/zones-intervention/" },
    { label: location.name, href: path },
  ];
  const areaType = location.type === "department" ? "AdministrativeArea" : "City";
  const title = `Location Photobooth ${place} | Mariage & Entreprise`;
  const description = `Location de Photobooth ${place} pour ${location.focus}. Installation, personnalisation, options photo et vidéo, logistique cadrée et devis selon le lieu.`;

  return {
    key: `local-${location.slug}`,
    eyebrow: `${location.department} · ${location.code}`,
    title,
    description,
    image: "/images/ai-from-real/hero-photobooth-reception.webp",
    imageAlt: `Photobooth MySelfieBooth pour événement ${place}`,
    highlights: ["Photobooth", "360 & Vogue Booth", "Devis personnalisé"],
    proof: trustSignals,
    breadcrumbs,
    gallery: [
      {
        image: "/images/ai-from-real/activation-360-entreprise.webp",
        title: "Activation 360 en entreprise",
      },
      {
        image: "/images/miroirbooth.webp",
        title: "Miroirbooth en réception",
      },
      {
        image: "/images/ai-from-real/vogue-maries-lydia-vincent.webp",
        title: "Vogue Booth en événement",
      },
    ],
    sections: [
      {
        anchor: "location-photobooth-local",
        eyebrow: "Votre événement",
        title: `Louer un photobooth ${place} sans négliger la logistique`,
        text: `${location.angle} ${location.logistics}`,
        cards: [
          {
            title: "Photobooth",
            text: "Le format le plus polyvalent pour créer des photos personnalisées, proposer des tirages selon la formule et remettre une galerie après l'événement.",
          },
          {
            title: "Miroirbooth",
            text: "Une animation photo grand format avec une présence visuelle forte, particulièrement adaptée aux mariages, galas et réceptions premium.",
          },
          {
            title: "360 Booth",
            text: "Un format vidéo dynamique pour les soirées, lancements et événements qui veulent produire du contenu court et partageable.",
          },
          {
            title: "Vogue Booth",
            text: "Une mise en scène lumineuse et éditoriale pour les événements où le décor et l'expérience visuelle font partie du concept.",
          },
        ],
      },
      {
        anchor: "mariage-entreprise",
        eyebrow: "Mariage & entreprise",
        title: `Quel dispositif choisir ${place} ?`,
        text: `Les demandes concernent notamment ${location.focus}. Nous choisissons le dispositif à partir de l'objectif, du nombre d'invités, de la surface disponible et du niveau de personnalisation attendu.`,
        cards: [
          {
            title: "Mariage",
            text: "Tirages, galerie, livre d'or et personnalisation peuvent être combinés pour créer un souvenir simple à utiliser pendant toute la réception.",
          },
          {
            title: "Entreprise",
            text: "Branding, flux rapide, contenus réutilisables et reporting selon dispositif sont privilégiés pour les séminaires, salons et soirées corporate.",
          },
          {
            title: "Activation de marque",
            text: "Habillage, contenu social, Live Wall, lead capture ou expérience IA peuvent être étudiés selon le brief et la faisabilité technique.",
          },
          {
            title: "Événement privé",
            text: "Anniversaire, baptême ou soirée : le format est ajusté au lieu, au budget et au niveau d'accompagnement souhaité.",
          },
        ],
      },
      {
        anchor: "zone-proche",
        eyebrow: "Secteur desservi",
        title: `Interventions autour de ${location.name}`,
        text: `Nous étudions également les demandes autour de ${location.nearby.join(", ")}. La disponibilité, les frais de déplacement et les contraintes d'installation sont confirmés dans le devis.`,
        cards: [
          {
            title: "Accès prestataire",
            text: "Parking, quai, ascenseur, escaliers, distance de portage et contrôles éventuels sont vérifiés avant le déplacement.",
          },
          {
            title: "Espace nécessaire",
            text: "La surface et le recul varient selon la machine. Nous validons l'implantation pour éviter les problèmes de circulation le jour J.",
          },
          {
            title: "Horaires de montage",
            text: "Le créneau d'arrivée est défini à partir de l'ouverture au public, du temps de montage et des règles du lieu.",
          },
          {
            title: "Devis transparent",
            text: "Prestation, options, durée, déplacement et niveau de personnalisation sont cadrés avant confirmation.",
          },
        ],
      },
    ],
    faq,
    relatedLinks: [
      ...buildLocalLinks(location),
      { label: "Toutes les zones d'intervention", href: "/zones-intervention/" },
      { label: "Location Photobooth", href: "/prestations/photobooth/" },
      { label: "Photobooth pour entreprise", href: "/evenements/corporates/" },
      { label: "Photobooth pour mariage", href: "/evenements/mariages/" },
      { label: "Event-Tech & activations de marque", href: "/event-tech/" },
      { label: "Prix Photobooth en Île-de-France", href: "/prix-photobooth-ile-de-france-2026/" },
    ],
    finalEyebrow: location.name,
    finalTitle: `Recevez une proposition adaptée à votre événement ${place}.`,
    primaryCta: {
      label: `Demander un devis ${place}`,
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
      title,
      description,
      ogTitle: `Location Photobooth ${place} | MySelfieBooth`,
      ogDescription: description,
      ogImage: "/images/ai-from-real/hero-photobooth-reception.webp",
      ogUrl: absoluteUrl(path),
      jsonLd: [
        breadcrumbJsonLd(breadcrumbs),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Location de photobooth ${place}`,
          description,
          provider: {
            "@id": `${siteConfig.baseUrl}/#organization`,
          },
          serviceType: "Location de photobooth et animation photo événementielle",
          areaServed: {
            "@type": areaType,
            name: location.name,
          },
          url: absoluteUrl(path),
        },
        faqJsonLd(faq),
      ].filter(Boolean),
    },
  };
}

export default function LocalPhotoboothPage({ location }) {
  return <MarketingPage page={buildPage(location)} />;
}

export function getStaticPaths() {
  return {
    paths: localSeoPages.map((location) => ({
      params: { slug: location.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const location = localSeoPages.find((entry) => entry.slug === params.slug);

  if (!location) {
    return { notFound: true };
  }

  return {
    props: { location },
  };
}
