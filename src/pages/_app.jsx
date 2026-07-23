import "../styles/styles.css";
import "../styles/page-rendering.css";
import "../styles/blog.css";
import { useRouter } from "next/router";
import useVisualLoadMotion from "../hooks/useVisualLoadMotion";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useVisualLoadMotion(router.asPath);

  return <Component {...pageProps} />;
}
