import RealisationsPage from "../components/portfolio/RealisationsPage";

export async function getStaticProps() {
  const { default: manifest } = await import(
    "../data/realisationsManifest.json"
  );
  const { preparePublicShowroom } = await import(
    "../components/portfolio/showroom/model.mjs"
  );
  return { props: { showroom: preparePublicShowroom(manifest) } };
}

export default function Realisations({ showroom }) {
  return <RealisationsPage showroom={showroom} />;
}
