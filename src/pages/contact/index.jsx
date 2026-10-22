import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { breadcrumbJsonLd, siteConfig } from "../../data/site";
import { contactAccessKey, contactEndpoint, contactSubject, contactThanksUrl, sendContact } from "../../lib/contactForm.mjs";
import styles from "../../styles/contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const sending = useRef(false);
  const notice = useRef(null);

  useEffect(() => {
    if (status === "sent" || status === "error") notice.current?.focus();
  }, [status]);

  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      await sendContact(data, { signal: controller.signal });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      sending.current = false;
    }
  }

  return (
    <Layout showPreFooter={false} metaProps={{
      title: "Contact MySelfieBooth | Paris & Île-de-France",
      description: "Une question sur nos animations photo et vidéo ? Contactez MySelfieBooth pour votre mariage, soirée ou événement d’entreprise à Paris et en Île-de-France.",
      ogUrl: "/contact/",
      jsonLd: [breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Contact", href: "/contact/" }])],
    }}>
      <section className={styles.page}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>On en parle ?</p>
            <h1>Parlons de votre événement.</h1>
            <p>Une question, une idée ou besoin d’un conseil ? Écrivez-nous et racontez-nous votre projet.</p>
            <a className={styles.phone} href={siteConfig.phoneHref} data-event="phone_click">{siteConfig.phoneLabel}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p className={styles.quote}>Vous connaissez déjà votre date et vos envies ? <a href={siteConfig.quoteUrl}>Demander un devis</a></p>
          </div>
          <div className={styles.panel}>
            <h2>Votre message</h2>
            <p className={styles.hint}>Seuls le nom, l’e-mail et le message sont obligatoires.</p>
            <form action={contactEndpoint} method="post" onSubmit={submit} aria-busy={status === "sending"}>
              <input type="hidden" name="access_key" value={contactAccessKey} />
              <input type="hidden" name="subject" value={contactSubject} />
              <input type="hidden" name="from_name" value="MySelfieBooth" />
              <input type="hidden" name="redirect" value={contactThanksUrl} />
              <fieldset disabled={status === "sending"} className={styles.fields}>
                <div className={styles.row}>
                  <label htmlFor="contact-name">Votre nom <span aria-hidden="true">*</span><input id="contact-name" name="name" autoComplete="name" maxLength={100} required /></label>
                  <label htmlFor="contact-email">Votre e-mail <span aria-hidden="true">*</span><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
                </div>
                <div className={styles.row}>
                  <label htmlFor="contact-phone">Téléphone <span>(facultatif)</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
                  <label htmlFor="contact-date">Date de l’événement <span>(facultatif)</span><input id="contact-date" name="event_date" type="date" /></label>
                </div>
                <label htmlFor="contact-city">Ville ou lieu <span>(facultatif)</span><input id="contact-city" name="city" autoComplete="address-level2" maxLength={120} /></label>
                <label htmlFor="contact-message">Votre message <span aria-hidden="true">*</span><textarea id="contact-message" name="message" rows={6} maxLength={5000} required placeholder="Votre projet, vos questions, les animations qui vous intéressent…" /></label>
                <input className={styles.trap} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <p className={styles.privacy}>Vos informations servent à répondre à votre demande. <a href="/privacy-policy/">Politique de confidentialité</a></p>
                <button className={styles.button} type="submit">{status === "sending" ? "Envoi en cours…" : "Envoyer mon message"}</button>
              </fieldset>
              {status === "sent" && <div ref={notice} tabIndex={-1} role="status" className={styles.notice}>Votre message a bien été transmis. Merci, nous reviendrons vers vous par e-mail.</div>}
              {status === "error" && <div ref={notice} tabIndex={-1} role="alert" className={styles.notice}>Nous n’avons pas pu confirmer l’envoi. Votre texte est conservé : réessayez, ou écrivez à <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</div>}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
