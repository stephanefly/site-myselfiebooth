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
      <section className={styles.page} data-contact-page>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>On en parle ?</p>
            <h1>Parlons de votre événement.</h1>
            <p className={styles.lead}>Une question ou une idée ? Racontez-nous votre projet, nous vous aidons à choisir votre animation.</p>
            <div className={styles.contactMethods}>
              <a className={styles.contactMethod} href={siteConfig.phoneHref} data-event="phone_click">
                <span className={styles.contactIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z" /></svg></span>
                <span className={styles.contactDetails}><span className={styles.contactLabel}>Par téléphone</span><span className={styles.phone}>{siteConfig.phoneLabel}</span></span>
                <span className={styles.contactArrow} aria-hidden="true">↗</span>
              </a>
              <a className={styles.contactMethod} href={`mailto:${siteConfig.email}`}>
                <span className={styles.contactIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
                <span className={styles.contactDetails}><span className={styles.contactLabel}>Par e-mail</span><span className={styles.email}>{siteConfig.email}</span></span>
                <span className={styles.contactArrow} aria-hidden="true">↗</span>
              </a>
            </div>
            <p className={styles.area}>À Paris et dans toute l’Île-de-France.</p>
            <div className={styles.quote}>
              <p>Votre date et vos envies sont déjà définies ?</p>
              <a href={siteConfig.quoteUrl}>Demander un devis <span aria-hidden="true">↗</span></a>
            </div>
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
                <label htmlFor="contact-message">Votre message <span aria-hidden="true">*</span><textarea id="contact-message" name="message" rows={5} maxLength={5000} required placeholder="Votre projet, vos questions, les animations qui vous intéressent…" /></label>
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
