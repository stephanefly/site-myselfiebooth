import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { contactAccessKey, contactEndpoint, contactThanksUrl, sendContact } from "../src/lib/contactForm.mjs";

const html = await readFile(new URL("../out/contact/index.html", import.meta.url), "utf8");
const form = html.match(/<form\b[^>]*>[\s\S]*?<\/form>/)?.[0];
assert.ok(form, "Export must include the contact form");
assert.ok(form.includes(`action="${contactEndpoint}"`));
assert.match(form, /method="post"/);
for (const name of ["name", "email", "message"]) {
  const field = form.match(new RegExp(`<(?:input|textarea)\\b[^>]*name="${name}"[^>]*>`))?.[0];
  assert.ok(field?.includes("required"), `${name} must be required`);
  if (name === "email") assert.match(field, /type="email"/);
}
assert.ok(form.includes(`name="redirect" value="${contactThanksUrl}"`));
assert.ok(form.includes(`name="access_key" value="${contactAccessKey}"`));
assert.match(form, /<input\b(?=[^>]*type="checkbox")(?=[^>]*name="botcheck")[^>]*>/);
const source = await readFile(new URL("../src/pages/contact/index.jsx", import.meta.url), "utf8");
assert.match(source, /onSubmit=\{submit\}/);
assert.doesNotMatch(source, /formsubmit\.co/);
const thanks = await readFile(new URL("../out/contact/merci/index.html", import.meta.url), "utf8");
assert.match(thanks, /name="robots" content="noindex, follow"/);
const files = await readdir(new URL("../out/", import.meta.url), { recursive: true });
assert.ok(!files.some(file => /\.php$/i.test(file)), "Static export must not include PHP");
const data = new FormData();
data.set("name", "Test");
data.set("email", "visitor@example.com");
data.set("message", "Une question sur un événement.");
data.set("redirect", contactThanksUrl);
let calls = 0;
await sendContact(data, { fetchImpl: async (url, options) => {
  calls++;
  assert.equal(url, "https://api.web3forms.com/submit");
  const payload = JSON.parse(options.body);
  assert.equal(payload.access_key, contactAccessKey);
  assert.equal(payload.email, "visitor@example.com");
  assert.equal(payload.message, data.get("message"));
  assert.ok(!("redirect" in payload));
  return { ok: true, json: async () => ({ success: true }) };
} });
assert.equal(calls, 1);
for (const response of [
  { ok: false, json: async () => ({ success: true }) },
  { ok: true, json: async () => ({ success: false }) },
  { ok: true, json: async () => ({ success: "true" }) },
  { ok: true, json: async () => { throw new SyntaxError("Invalid JSON"); } },
]) await assert.rejects(sendContact(data, { fetchImpl: async () => response }));
await assert.rejects(sendContact(data, { fetchImpl: async () => { throw new TypeError("Network failure"); } }));
assert.equal(data.get("message"), "Une question sur un événement.");
console.log("Web3Forms export and submission handling verified: valid acknowledgement, failed requests, unchanged input and no PHP. No message sent.");
