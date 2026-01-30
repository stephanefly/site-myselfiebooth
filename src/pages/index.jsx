import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Besoins from "../components/Besoins";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Besoins />
      <Portfolio />
      <Services />
    </Layout>
  );
}
