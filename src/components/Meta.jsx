import Head from "next/head";
import Script from "next/script";
import {
  absoluteUrl,
  organizationJsonLd,
  siteConfig,
  websiteJsonLd,
} from "../data/site";

export default function Meta({
  title = "MySelfieBooth - Location photobooth premium en Île-de-France",
  description = "Louez un photobooth premium pour vos événements professionnels et privés : entreprises, mariages, anniversaires et soirées en Île-de-France.",
  keywords = "photobooth entreprise paris, location photobooth paris, photobooth mariage, animation événementielle, miroir photobooth, selfie box, photobooth corporate",
  ogTitle,
  ogDescription,
  ogImage = siteConfig.defaultOgImage,
  ogUrl = siteConfig.baseUrl,
  twitterCard = "summary_large_image",
  jsonLd = [],
}) {
  const socialTitle = ogTitle || title;
  const socialDescription = ogDescription || description;
  const canonicalUrl = ogUrl?.startsWith("http") ? ogUrl : absoluteUrl(ogUrl || "/");
  const socialImage = ogImage?.startsWith("http") ? ogImage : absoluteUrl(ogImage || siteConfig.defaultOgImage);
  const structuredData = [organizationJsonLd, websiteJsonLd, ...jsonLd];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="MySelfieBooth" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={socialDescription} />
        <meta name="twitter:image" content={socialImage} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#000000" />

        {structuredData.map((entry, index) => (
          <script
            key={`${entry["@type"]}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(entry),
            }}
          />
        ))}
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4297YBLGR6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4297YBLGR6');
        `}
      </Script>
    </>
  );
}
