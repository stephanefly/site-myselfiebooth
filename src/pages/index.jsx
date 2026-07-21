import Layout from "../components/Layout";
import HomePage from "../components/home/HomePage";
import { absoluteUrl, siteConfig } from "../data/site";

export default function Home() {
  return (
    <Layout
      metaProps={{
        title:
          "MySelfieBooth - Location photobooth premium en Île-de-France",
        description:
          "Location de photobooth, miroirbooth, 360 booth, Vogue Booth et options premium pour entreprises, mariages et soirées en Île-de-France, à Lyon et à Rouen.",
        ogTitle: "MySelfieBooth - Photobooth premium pour événements",
        ogDescription:
          "Une animation photo élégante, clé en main et rassurante pour entreprises, marques, mariages et événements privés.",
        ogUrl: absoluteUrl("/"),
        jsonLd: [
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
