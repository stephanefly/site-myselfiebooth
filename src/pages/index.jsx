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
        <link rel="preload" as="image" href="/images/ai-from-real/hero-photobooth-reception.webp" />
      </Head>
      <Layout
        metaProps={{
          title:
            "Location Photobooth Île-de-France | Mariage & Entreprise",
          description:
            "Location de Photobooth en Île-de-France pour mariage, entreprise, séminaire et soirée : installation, personnalisation, tirages selon formule et galerie photo.",
          ogTitle: "Location Photobooth en Île-de-France | MySelfieBooth",
          ogDescription:
            "Photobooth, MiroirBooth, 360 Booth et Vogue Booth pour mariages et entreprises en Île-de-France, avec livraison et installation.",
          ogImage: siteConfig.defaultOgImage,
          ogUrl: absoluteUrl("/"),
          includeOrganization: true,
          includeWebsite: true,
          jsonLd: [
            faqJsonLd(faqs),
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Location de photobooth haut de gamme",
              provider: {
                "@id": `${siteConfig.baseUrl}/#organization`,
              },
              areaServed: siteConfig.servedAreas,
              serviceType: "Animation photo événementielle",
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
