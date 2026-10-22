// A real delivery test, explicitly enabled for a one-off diagnostic commit.
const origin = "https://myselfiebooth-paris.fr";
const endpoint = `${origin}/api/contact.php`;
const headers = { Accept: "application/json", Origin: origin, "Cache-Control": "no-cache" };
const cases = [
  ["missing-fields", {}, 400],
  ["invalid-email", { name: "Test technique", email: "not-an-email", message: "Vérification des champs." }, 400],
  ["header-injection", { name: "Test technique", email: "test@example.com\r\nBcc: other@example.com", message: "Vérification des champs." }, 400],
  ["invalid-date", { name: "Test technique", email: "test@example.com", event_date: "2027-02-30", message: "Vérification des champs." }, 400],
];
for (const [name, input, status] of cases) {
  const response = await fetch(endpoint, { method: "POST", headers, body: new URLSearchParams(input), signal: AbortSignal.timeout(20000) });
  const result = await response.json();
  console.log(`${name}: HTTP ${response.status}, code=${result.code}`);
  if (response.status !== status || result.ok) throw new Error(`${name}: unexpected validation result`);
}

const reference = `CONTACT-${process.env.GITHUB_RUN_ID || Date.now()}`;
const response = await fetch(endpoint, {
  method: "POST", headers,
  body: new URLSearchParams({
    name: "Test technique MySelfieBooth",
    email: "contact@myselfiebooth-paris.fr",
    message: `Message de test technique du formulaire de contact. Aucune demande de réservation. Référence : ${reference}. Ce message vérifie l’envoi vers contact@myselfiebooth-paris.fr.`,
  }),
  signal: AbortSignal.timeout(30000),
});
const result = await response.json();
console.log(JSON.stringify({ test: "real-delivery", reference, status: response.status, code: result.code, accepted: result.ok }));
if (!response.ok || !result.ok) throw new Error(`Contact delivery failed: ${result.code}`);
console.log("Message accepted by the hosting mail transport. Inbox receipt still needs verification.");
