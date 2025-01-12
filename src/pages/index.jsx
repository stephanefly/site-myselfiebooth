import Head from "next/head"; // Import du composant Head
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import SocialMedia from "../components/SocialMedia";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>MySelfieBooth - Photobooth pour vos événements</title>
        <meta
          name="description"
          content="Louez un photobooth pour vos événements à Paris. Expériences photo inoubliables."
        />
        <meta
          property="og:title"
          content="MySelfieBooth - Photobooth pour vos événements"
        />
        <meta
          property="og:description"
          content="Louez un photobooth pour vos événements à Paris. Expériences photo inoubliables."
        />
        <meta property="og:image" content="/images/photobooth.jpg" />
        <meta property="og:url" content="https://www.myselfiebooth.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
        <SocialMedia />
        <PreFooter />
      <Footer />
    </>
  );
}
