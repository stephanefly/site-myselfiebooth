import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Besoins from "../components/Besoins";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Besoins />
      <Portfolio />
      <Services />
    </Layout>
  );
}
