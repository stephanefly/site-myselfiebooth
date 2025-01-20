import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import SocialMedia from "../components/SocialMedia";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";
import Besoins from "../components/Besoins";

export default function Home() {
  return (
    <>
      <Meta />
      <Navbar />
      <Hero />
        <Besoins />
        <Portfolio />
      <Services />
      <SocialMedia />
      <PreFooter />
      <Footer />
    </>
  );
}
