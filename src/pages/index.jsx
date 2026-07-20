import Layout from "../components/Layout";
import HomePage from "../components/home/HomePage";

export default function Home() {
  return (
    <Layout
      metaProps={{
        title: "MySelfieBooth - Photobooth premium pour entreprises et evenements",
        description:
          "Location de photobooth premium pour entreprises, mariages, salons, soirees et evenements prives a Paris, Lyon et Rouen.",
        ogTitle: "MySelfieBooth - Photobooth premium pour evenements",
        ogDescription:
          "Une animation photo elegante, cle en main et rassurante pour entreprises, marques, mariages et evenements prives.",
      }}
    >
      <HomePage />
    </Layout>
  );
}
