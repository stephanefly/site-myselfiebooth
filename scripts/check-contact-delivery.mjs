// One real submission, explicitly enabled by a diagnostic commit or manual run.
import { contactAjaxEndpoint, contactRecipient, contactPayload, contactResult } from "../src/lib/contactForm.mjs";
const origin = "https://myselfiebooth-paris.fr";
const reference = `CONTACT-${process.env.GITHUB_RUN_ID || Date.now()}`;
const form = new FormData();
form.set("name", "Test technique MySelfieBooth");
form.set("email", contactRecipient);
form.set("message", `Message de test technique du formulaire de contact, sans demande de réservation. Référence : ${reference}. Destinataire : ${contactRecipient}.`);
const body = contactPayload(form);
body.set("_subject", `Test du formulaire MySelfieBooth — ${reference}`);
const response = await fetch(contactAjaxEndpoint, {
  method: "POST",
  headers: { Accept: "application/json", Origin: origin, Referer: `${origin}/contact/` },
  body,
  signal: AbortSignal.timeout(30000),
});
const result = await response.json();
const state = contactResult(result);
console.log(JSON.stringify({ test: "real-delivery", recipient: contactRecipient, reference, status: response.status, state }));
if (!response.ok || state === "error") {
  console.log(String(result.message || "").replace(/https?:\/\/\S+/g, "[service URL]").slice(0, 350));
  throw new Error("The submission was not accepted by the form service.");
}
console.log(state === "activation_required" ? "Recipient activation required: check the email sent by FormSubmit. Delivery is not confirmed." : "Submission accepted by FormSubmit. Check for an activation email on first use, then confirm inbox receipt.");
