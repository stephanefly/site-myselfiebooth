import assert from "node:assert/strict";
import { contactRecipient, contactEndpoint, contactAjaxEndpoint, contactPayload, contactResult } from "../src/lib/contactForm.mjs";

const valid = { name: " Émilie Test ", email: "visitor@example.com", message: "Une question pour notre événement.", event_date: "2027-06-12" };
const data = (values) => {
  const form = new FormData();
  for (const [key, value] of Object.entries(values)) form.set(key, value);
  return form;
};
const body = contactPayload(data(valid));
assert.equal(contactRecipient, "contact@myselfiebooth-paris.fr");
assert.equal(contactEndpoint, "https://formsubmit.co/contact@myselfiebooth-paris.fr");
assert.equal(contactAjaxEndpoint, "https://formsubmit.co/ajax/contact@myselfiebooth-paris.fr");
assert.equal(body.get("name"), "Émilie Test");
assert.equal(body.get("email"), valid.email);
assert.equal(body.get("message"), valid.message);
assert.equal(body.get("date"), "2027-06-12");
assert.equal(body.get("_template"), "table");
assert.equal(body.get("_captcha"), "false");
assert.equal(body.get("_next"), "https://myselfiebooth-paris.fr/contact/merci/");
assert.equal(contactPayload(data({ name: "Test", email: "test@example.com", message: "Bonjour" })).get("date"), "");
for (const override of [{ name: " " }, { message: " " }, { message: "a".repeat(5001) }, { email: "invalid" }, { email: "user@example.com\r\nBcc: other@example.com" }, { _honey: "spam" }, { event_date: "2027-02-30" }]) {
  assert.throws(() => contactPayload(data({ ...valid, ...override })));
}
assert.equal(contactResult({ success: true }), "sent");
assert.equal(contactResult({ success: "true" }), "sent");
assert.equal(contactResult({ success: "false" }), "error");
assert.equal(contactResult({ success: true, message: "This form needs Activation. Check your email." }), "activation_required");
assert.equal(contactResult({ success: false, message: "Please confirm your email address" }), "activation_required");
assert.equal(contactResult(null), "error");
console.log("Contact checks OK: recipient, payload, validation, reply email and activation states. No PHP or email sent.");
