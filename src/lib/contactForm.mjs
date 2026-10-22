export const contactRecipient = "contact@myselfiebooth-paris.fr";
export const contactEndpoint = `https://formsubmit.co/${contactRecipient}`;
export const contactAjaxEndpoint = `https://formsubmit.co/ajax/${contactRecipient}`;
export const contactSubject = "Nouveau message depuis le site MySelfieBooth";
export const contactThanksUrl = "https://myselfiebooth-paris.fr/contact/merci/";

export function contactPayload(formData) {
  const value = (name) => String(formData.get(name) || "").trim();
  const name = value("name");
  const email = value("email");
  const message = value("message");
  if (!name || name.length > 100 || !message || message.length > 5000 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || value("_honey")) {
    throw new Error("Vérifiez votre nom, votre adresse e-mail et votre message.");
  }
  const date = value("event_date");
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date)) {
    throw new Error("Vérifiez la date de votre événement.");
  }
  return new URLSearchParams({ name, email, message, telephone: value("phone"), date, lieu: value("city"), _subject: contactSubject, _template: "table", _captcha: "false", _honey: "", _next: contactThanksUrl });
}

export function contactResult(result) {
  if (/activat|confirm.{0,40}(?:e-?mail|address)|verif.{0,40}(?:e-?mail|address)/i.test(String(result?.message || ""))) return "activation_required";
  return result?.success === true || result?.success === "true" ? "sent" : "error";
}
