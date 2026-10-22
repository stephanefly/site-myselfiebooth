import Layout from "../../components/Layout";
import { siteConfig } from "../../data/site";
import styles from "../../styles/contact.module.css";

export default function ContactMerci() {
  return <Layout showPreFooter={false} metaProps={{ title: "Message transmis | MySelfieBooth", description: "Merci pour votre message. L’équipe MySelfieBooth reviendra vers vous par e-mail.", ogUrl: "/contact/merci/", robots: "noindex, follow" }}>
    <section className={styles.page}><div className={styles.thanks}><p className={styles.eyebrow}>Merci pour votre message</p><h1>Votre demande a bien été transmise.</h1><p>Nous reviendrons vers vous par e-mail. Vous pouvez aussi nous joindre au <a href={siteConfig.phoneHref}>{siteConfig.phoneLabel}</a>.</p><a className={styles.button} href="/">Revenir à l’accueil</a></div></section>
  </Layout>;
}
