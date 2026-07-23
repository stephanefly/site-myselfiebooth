import Head from "next/head";
import {
  absoluteUrl,
  organizationJsonLd,
  siteConfig,
  websiteJsonLd,
} from "../data/site";

export default function Meta({
  title = "MySelfieBooth - Location photobooth premium en Île-de-France",
  description = "Louez un photobooth premium pour vos événements professionnels et privés : entreprises, mariages, anniversaires et soirées en Île-de-France.",
  keywords,
  ogTitle,
  ogDescription,
  ogImage = siteConfig.defaultOgImage,
  ogUrl = siteConfig.baseUrl,
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd = [],
  robots = "index, follow",
  includeOrganization = false,
  includeWebsite = false,
}) {
  const socialTitle = ogTitle || title;
  const socialDescription = ogDescription || description;
  const canonicalUrl = ogUrl === null
    ? null
    : ogUrl?.startsWith("http")
      ? ogUrl
      : absoluteUrl(ogUrl || "/");
  const socialImage = ogImage?.startsWith("http") ? ogImage : absoluteUrl(ogImage || siteConfig.defaultOgImage);
  const structuredData = [
    includeOrganization ? organizationJsonLd : null,
    includeWebsite ? websiteJsonLd : null,
    ...jsonLd,
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <meta name="author" content="MySelfieBooth" />
        <meta name="robots" content={robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:image" content={socialImage} />
        {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="fr_FR" />

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
              __html: JSON.stringify(entry).replace(/</g, "\\u003c"),
            }}
          />
        ))}
      </Head>
    </>
  );
}
