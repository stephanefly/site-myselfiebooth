# Site MySelfieBooth

Site vitrine Next.js statique de MySelfieBooth.

## Développement

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

Le build génère le site statique dans `out/` et exécute les contrôles SEO/médias avant déploiement.

## Déploiement

Les push sur `master` déclenchent GitHub Actions, puis le contenu de `out/` est envoyé vers IONOS en SFTP.

## Formulaire de contact

La page `/contact/` utilise un formulaire HTML avec envoi AJAX via FormSubmit vers `contact@myselfiebooth-paris.fr`. Le champ `email` permet de répondre au visiteur. Le traitement ne nécessite aucun PHP ni identifiant SMTP dans le site. Les paramètres d’envoi sont dans `src/lib/contactForm.mjs`.

FormSubmit exige une confirmation de l’adresse destinataire à la première utilisation : après une soumission, ouvrir l’e-mail d’activation reçu dans la boîte contact et cliquer sur son lien. Sans cette activation, la distribution des messages n’est pas confirmée. Documentation : https://formsubmit.co/.

`node scripts/check-contact.mjs` vérifie les champs, le destinataire et les réponses du service sans soumettre de message. Pour envoyer un unique test réel, lancer **Deploy MySelfieBooth to IONOS** avec `test_contact_delivery` coché, ou utiliser un commit portant `[test-contact-delivery]`. Le résultat distingue une activation nécessaire d’une soumission acceptée. La réception en boîte doit être confirmée séparément. L’ancien traitement PHP est supprimé du serveur et son adresse renvoie HTTP 410.

Les références clients affichées sur le site sont volontairement limitées aux références publiquement validées. Les anciens logos non utilisés sont supprimés afin que le contrôle des médias inutilisés reste bloquant avant mise en production.

## SEO

Le projet inclut notamment :

- sitemap XML généré automatiquement ;
- pages locales structurées ;
- données Schema.org ;
- contrôle des titres, descriptions, canoniques, JSON-LD, attributs alt et liens internes ;
- notification IndexNow après déploiement ;
- fichier `llms.txt` pour exposer les pages de référence aux agents et moteurs qui le prennent en charge.
