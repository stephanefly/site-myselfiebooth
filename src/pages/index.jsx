import Head from "next/head";
import Layout from "../components/Layout";
import HomePage from "../components/home/HomePage";
import HomeSearchIntentSection from "../components/home/HomeSearchIntentSection";
import { faqs } from "../data/home";
import { absoluteUrl, faqJsonLd, siteConfig } from "../data/site";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/ai-from-real/accueil-machines-panorama.webp?v=20261019-bienvenue-blanc" />
      </Head>
      <Layout
        metaProps={{
          title:
            "Location Photobooth Paris & Île-de-France | MySelfieBooth",
          description:
            "Photobooth à 400 € pour 5 h à Paris et en Île-de-France. Tirages personnalisés, miroir photo, vidéo 360 et Vogue Booth pour mariages et entreprises.",
          ogTitle: "Location Photobooth & Photo Booth en Île-de-France | MySelfieBooth",
          ogDescription:
            "Photobooth, MiroirBooth, 360 Booth et Vogue Booth pour mariages et entreprises à Paris et en Île-de-France, avec livraison et installation.",
          ogImage: siteConfig.defaultOgImage,
          ogUrl: absoluteUrl("/"),
          includeOrganization: true,
          includeWebsite: true,
          jsonLd: [
            faqJsonLd(faqs),
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Location de Photobooth et Photo Booth en Île-de-France",
              provider: {
                "@id": `${siteConfig.baseUrl}/#organization`,
              },
              areaServed: siteConfig.servedAreas,
              audience: {
                "@type": "Audience",
                audienceType: "Mariages, entreprises, salons, séminaires, anniversaires et soirées privées",
              },
              serviceType: "Location de photobooth, borne photo et animation photo-vidéo événementielle",
              url: siteConfig.baseUrl,
            },
          ],
        }}
      >
        <HomePage />
        <HomeSearchIntentSection />
      </Layout>
    </>
  );
}
