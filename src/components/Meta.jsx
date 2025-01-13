import Head from "next/head";

export default function Meta({
  title = "MySelfieBooth - Location de Photobooth pour Mariages, Événements et Soirées à Paris",
  description = "Louez un photobooth moderne pour capturer des souvenirs mémorables lors de vos événements à Paris : mariages, anniversaires, soirées d'entreprise et plus encore.",
  keywords = "photobooth paris, location photobooth, photobooth mariage, miroir photo, photobooth entreprise, selfie box, photobooth événementiel",
  ogTitle = "MySelfieBooth - Transformez Vos Événements avec Nos Photobooths",
  ogDescription = "Découvrez nos photobooths modernes et interactifs pour capturer des souvenirs inoubliables lors de vos mariages, anniversaires ou soirées professionnelles à Paris.",
  ogImage = "/images/photobooth.jpg",
  ogUrl = "https://www.myselfiebooth.com",
  twitterCard = "summary_large_image",
}) {
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>

      {/* Description */}
      <meta name="description" content={description} />

      {/* Keywords */}
      <meta name="keywords" content={keywords} />

      {/* Author */}
      <meta name="author" content="MySelfieBooth" />

      {/* Robots (indexation) */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph (OG) for Social Media */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile-Friendly */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

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
  );
}
