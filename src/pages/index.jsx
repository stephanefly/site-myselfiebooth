import Layout from "../components/Layout";
import HomePage from "../components/home/HomePage";
import { absoluteUrl, siteConfig } from "../data/site";

export default function Home() {
  return (
    <Layout
      metaProps={{
        title:
          "MySelfieBooth - Location photobooth premium a Paris et Ile-de-France",
        description:
          "Location de photobooth, miroirbooth, 360 booth, Vogue Booth et options premium pour entreprises, mariages et soirees a Paris, Lyon et Rouen.",
        ogTitle: "MySelfieBooth - Photobooth premium pour evenements",
        ogDescription:
          "Une animation photo elegante, cle en main et rassurante pour entreprises, marques, mariages et evenements prives.",
        ogUrl: absoluteUrl("/"),
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Location photobooth premium",
            provider: {
              "@type": "LocalBusiness",
              name: siteConfig.name,
            },
            areaServed: siteConfig.servedAreas,
            serviceType: "Animation photo evenementielle",
            url: siteConfig.baseUrl,
          },
        ],
      }}
    >
      <HomePage />
    </Layout>
  );
}
