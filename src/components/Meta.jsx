import Head from "next/head";
import Script from "next/script";

export default function Meta({
  title = "MySelfieBooth - Location photobooth entreprise, mariage et evenement a Paris",
  description = "Louez un photobooth premium pour vos evenements professionnels et prives: soirees d'entreprise, salons, lancements produit, mariages et anniversaires a Paris, Lyon et Rouen.",
  keywords = "photobooth entreprise paris, location photobooth paris, photobooth mariage, animation evenementielle, miroir photobooth, selfie box, photobooth corporate",
  ogTitle = "MySelfieBooth - Photobooth premium pour entreprises et evenements prives",
  ogDescription = "Decouvrez des photobooths modernes et personnalises pour vos soirees d'entreprise, activations de marque, mariages et receptions privees.",
  ogImage = "/images/logo.jpg",
  ogUrl = "https://www.myselfiebooth-paris.fr",
  twitterCard = "summary_large_image",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="MySelfieBooth" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href={ogUrl} />

        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#000000" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MySelfieBooth",
              description:
                "Location de photobooths premium pour evenements professionnels et prives a Paris, Lyon et Rouen.",
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
              areaServed: ["Paris", "Lyon", "Rouen", "France"],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Location photobooth entreprise",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Location photobooth mariage",
                  },
                },
              ],
            }),
          }}
        />
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
