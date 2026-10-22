export const contactRecipient = "contact@myselfiebooth-paris.fr";
export const contactEndpoint = "https://api.web3forms.com/submit";
// Public form identifier supplied by the mailbox owner; safe for client-side use.
export const contactAccessKey = "1f48aaf7-e12e-4ee3-bd77-5ee53b52c792";
export const contactSubject = "Nouveau message depuis le site MySelfieBooth";
export const contactThanksUrl = "https://myselfiebooth-paris.fr/contact/merci/";

export async function sendContact(formData, { fetchImpl = fetch, signal } = {}) {
  if (formData.get("botcheck")) throw new Error("Invalid submission");
  const body = Object.fromEntries(formData);
  // Native HTML fallback redirects; AJAX displays the result on the contact page.
  delete body.redirect;
  body.access_key = contactAccessKey;
  body.subject = contactSubject;
  const response = await fetchImpl(contactEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    signal,
  });
  const result = await response.json();
  if (!response.ok || result?.success !== true) throw new Error("Submission not confirmed");
}
