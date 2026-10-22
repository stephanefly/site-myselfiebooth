import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { contactEndpoint, contactThanksUrl } from "../src/lib/contactForm.mjs";

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
assert.ok(form.includes(`name="_next" value="${contactThanksUrl}"`));
assert.match(form, /name="_honey"/);
const source = await readFile(new URL("../src/pages/contact/index.jsx", import.meta.url), "utf8");
assert.doesNotMatch(source, /onSubmit|preventDefault|fetch\(/, "Browser must submit directly to the service");
const thanks = await readFile(new URL("../out/contact/merci/index.html", import.meta.url), "utf8");
assert.match(thanks, /name="robots" content="noindex, follow"/);
const files = await readdir(new URL("../out/", import.meta.url), { recursive: true });
assert.ok(!files.some(file => /\.php$/i.test(file)), "Static export must not include PHP");
console.log("Exported native contact form verified: destination, required fields, confirmation page and no PHP. No message sent.");
