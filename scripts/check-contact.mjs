import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const included = ["", "prestations", "prestations/personnalise", "prestations/photobooth", "evenements/corporates", "evenements/mariages", "options", "options/phonebooth", "realisations", "a-propos"];
for (const route of included) {
  const html = readFileSync(`out/${route ? `${route}/` : ""}index.html`, "utf8");
  assert.equal((html.match(/class="contact-request"/g) || []).length, 1, `One contact section: /${route}`);
  const form = html.match(/<form[^>]*action="\/contact.php"[\s\S]*?<\/form>/)?.[0];
  assert.ok(form, `Contact form rendered: /${route}`);
  for (const field of ["name", "email", "company", "message"]) assert.ok(form.includes(`name="${field}"`));
  assert.match(form, /type="email"/);
  assert.match(form, /role="status"/);
  assert.match(form, /href="\/privacy-policy\/"/);
  assert.ok(!/<input[^>]*name="company"[^>]*required/.test(form), "Company stays optional");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `Unique IDs: /${route}`);
  assert.match(html, /href="https:\/\/reservation.myselfiebooth-paris.fr\/"/);
  const open = /<details[^>]*class="contact-request-details"[^>]*\bopen(?:="")?/.test(html);
  assert.equal(open, ["evenements/corporates", "prestations/personnalise"].includes(route), `Context-specific expansion: /${route}`);
}
for (const route of ["merci", "privacy-policy", "terms", "conditions", "404", "blog"]) {
  const file = route === "404" ? "out/404.html" : `out/${route}/index.html`;
  const html = readFileSync(file, "utf8");
  assert.ok(!html.includes('class="contact-request"'), `No unsolicited form: /${route}`);
}
assert.ok(existsSync("out/contact.php"), "PHP handler included in IONOS deployment");
console.log("Contact export validated: key pages, optional company, quote CTA, context-specific expansion, feedback, privacy link and deployed PHP handler.");
