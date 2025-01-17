import Head from "next/head";
import Script from "next/script";

export default function Meta({
  title = "MySelfieBooth - Location de Photobooth pour Mariages, Événements et Soirées à Paris",
  description = "Louez un photobooth moderne pour capturer des souvenirs mémorables lors de vos événements à Paris : mariages, anniversaires, soirées d'entreprise et plus encore.",
  keywords = "photobooth paris, location photobooth, photobooth mariage, miroir photo, photobooth entreprise, selfie box, photobooth événementiel",
  ogTitle = "MySelfieBooth - Transformez Vos Événements avec Nos Photobooths",
  ogDescription = "Découvrez nos photobooths modernes et interactifs pour capturer des souvenirs inoubliables lors de vos mariages, anniversaires ou soirées professionnelles à Paris.",
  ogImage = "/images/logo.jpg",
  ogUrl = "https://www.myselfiebooth-paris.com",
  twitterCard = "summary_large_image",
}) {
  return (
    <>
      <Head>
        {/* SEO General */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="MySelfieBooth" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href={ogUrl} />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MySelfieBooth",
              description:
                "Louez des photobooths modernes et interactifs pour capturer des souvenirs inoubliables lors de vos événements à Paris.",
              url: ogUrl,
              logo: ogImage,
              sameAs: [
                "https://www.instagram.com/myselfiebooth_paris/",
                "https://www.linkedin.com/myselfiebooth_paris/",
                "https://www.tiktok.com/@myselfiebooth_paris",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Paris",
                addressCountry: "France",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33 6 99 73 39 98",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>

      {/* Google Analytics (gtag.js) */}
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
