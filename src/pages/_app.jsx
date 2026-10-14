import "../styles/styles.css";
import "../styles/page-rendering.css";
import "../styles/blog.css";
import "../styles/image-framing.css";
import "../styles/media-provenance.css";
import "../styles/catalog-premium.css";
import "../styles/visual-refresh.css";
import "../data/mediaOverrides";
import { useRouter } from "next/router";
import useVisualLoadMotion from "../hooks/useVisualLoadMotion";
import MediaProvenanceAnnotator from "../components/MediaProvenanceAnnotator";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useVisualLoadMotion(router.asPath);

  return (
    <>
      <Component {...pageProps} />
      <MediaProvenanceAnnotator />
    </>
  );
}
