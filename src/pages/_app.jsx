import '../../public/styles/styles.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>MySelfieBooth - Photobooth pour vos événements</title>
            <meta name="description"
                  content="Découvrez nos solutions de photobooth modernes et interactives pour vos événements à Paris. Parfait pour mariages, anniversaires et soirées professionnelles."/>
            <meta name="keywords"
                  content="photobooth, location photobooth, miroir photo, selfie box, photobooth mariage, videobooth"/>
            <meta name="author" content="MySelfieBooth"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="MySelfieBooth Paris - Location de Photobooth"/>
            <meta property="og:description"
                  content="Rendez vos événements inoubliables avec nos photobooths modernes. Découvrez nos services dès maintenant."/>
            <meta property="og:image" content="https://myselfiebooth-paris.fr/assets/images/photobooth.jpg"/>
            <meta property="og:url" content="https://myselfiebooth-paris.fr"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="MySelfieBooth"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
    </>
  );
}
