import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { siteConfig } from "../data/site";

const keyPages = new Set(["/", "/prestations", "/evenements", "/options", "/realisations", "/a-propos"]);

export default function ContactRequest() {
  const { pathname } = useRouter();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const sending = useRef(false);
  const feedback = useRef(null);
  const visible = keyPages.has(pathname) || /^\/(prestations|evenements|options)\//.test(pathname);
  if (!visible) return null;
  const expanded = pathname === "/evenements/corporates" || pathname === "/prestations/personnalise";

  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    setStatus("sending");
    setError("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"), email: data.get("email"), company: data.get("company"),
          message: data.get("message"), website: data.get("website"), page: pathname,
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "L’envoi n’a pas abouti. Réessayez dans quelques instants.");
      }
      form.reset();
      setStatus("success");
      requestAnimationFrame(() => feedback.current?.focus());
    } catch (cause) {
      setError(cause.name === "AbortError"
        ? "Le serveur met trop de temps à répondre. Votre envoi n’est pas confirmé."
        : cause instanceof SyntaxError || cause instanceof TypeError
          ? "L’envoi est momentanément indisponible. Vos informations restent dans le formulaire."
          : cause.message);
      setStatus("error");
      requestAnimationFrame(() => feedback.current?.focus());
    } finally {
      clearTimeout(timeout);
      sending.current = false;
    }
  }

  return (
    <section className="contact-request" aria-labelledby="contact-request-title">
      <div className="contact-request-inner">
        <div className="contact-request-intro">
          <p className="contact-request-eyebrow">Votre projet, votre formule</p>
          <h2 id="contact-request-title">Envie d’un devis pour votre événement ?</h2>
          <p>Choisissez votre animation, indiquez votre date et votre lieu : notre formulaire de devis vous guide.</p>
          <a className="contact-request-quote" href={siteConfig.quoteUrl} data-event="cta_quote_click" data-event-label="Contact besoin spécifique">Demander mon devis <span aria-hidden="true">↗</span></a>
        </div>
        <details className="contact-request-details" open={expanded} data-navigation-disclosure>
          <summary>Un besoin particulier ? Écrivez-nous <span aria-hidden="true">+</span></summary>
          <p className="contact-request-context">Événement d’entreprise, décor sur mesure, plusieurs machines, lieu atypique… Décrivez votre besoin pour que nous préparions une réponse adaptée.</p>
          <form onSubmit={submit} action="/contact.php" method="post" aria-label="Contacter MySelfieBooth pour un besoin spécifique" aria-busy={status === "sending"}>
            <fieldset disabled={status === "sending"}>
              <legend className="contact-request-sr">Vos coordonnées et votre demande</legend>
              <div className="contact-request-fields">
                <label htmlFor="contact-name">Nom et prénom <span>(obligatoire)</span>
                  <input id="contact-name" name="name" autoComplete="name" required maxLength={120} />
                </label>
                <label htmlFor="contact-email">Adresse e-mail <span>(obligatoire)</span>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
                </label>
                <label htmlFor="contact-company" className="contact-request-full">Raison sociale <span>(facultatif)</span>
                  <input id="contact-company" name="company" autoComplete="organization" maxLength={180} />
                </label>
                <label htmlFor="contact-message" className="contact-request-full">Votre demande <span>(obligatoire)</span>
                  <textarea id="contact-message" name="message" rows={5} required minLength={10} maxLength={5000} placeholder="Votre projet, la date et le lieu si vous les connaissez, les machines souhaitées ou votre besoin particulier…" />
                </label>
              </div>
              <div className="contact-request-trap" aria-hidden="true">
                <label htmlFor="contact-website">Laissez ce champ vide</label>
                <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <p className="contact-request-privacy">Vos informations servent à répondre à votre demande. <a href="/privacy-policy/">Politique de confidentialité</a>.</p>
              <button type="submit">{status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"} <span aria-hidden="true">→</span></button>
            </fieldset>
            <div ref={feedback} tabIndex={-1} role="status" aria-live="polite" aria-atomic="true" className="contact-request-feedback">
              {status === "success" && <p className="contact-request-success">Merci, votre message a été envoyé à notre équipe. Nous vous répondrons à l’adresse indiquée.</p>}
              {status === "error" && <p className="contact-request-error">{error} Vous pouvez aussi nous écrire à <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ou nous appeler au <a href={siteConfig.phoneHref}>{siteConfig.phoneLabel}</a>.</p>}
            </div>
            <noscript><p>Activez JavaScript pour envoyer ce formulaire, ou écrivez-nous à <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></noscript>
          </form>
        </details>
      </div>
    </section>
  );
}
