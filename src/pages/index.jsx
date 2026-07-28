import Layout from "../components/Layout";
import HomePage from "../components/home/HomePage";
import { faqs } from "../data/home";
import { absoluteUrl, faqJsonLd, siteConfig } from "../data/site";

export default function Home() {
  return (
    <Layout
      metaProps={{
        title:
          "Location photobooth Paris & Île-de-France | MySelfieBooth",
        description:
          "Location de photobooth premium à Paris et en Île-de-France pour entreprises, mariages et événements privés. Installation, personnalisation et accompagnement inclus.",
        ogTitle: "Location de photobooth premium à Paris | MySelfieBooth",
        ogDescription:
          "Plus de 700 événements réalisés : photobooth, 360 Booth, Vogue Booth et expériences personnalisées pour entreprises et particuliers.",
        ogImage: "/images/hero-pub-2024.webp",
        ogUrl: absoluteUrl("/"),
        includeOrganization: true,
        includeWebsite: true,
        jsonLd: [
          faqJsonLd(faqs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Location photobooth premium",
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            areaServed: siteConfig.servedAreas,
            serviceType: "Animation photo événementielle",
            url: siteConfig.baseUrl,
          },
        ],
      }}
    >
      <HomePage />
    </Layout>
  );
}
