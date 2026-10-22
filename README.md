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

La page `/contact/` envoie les messages via Web3Forms, avec une clé publique fournie par le propriétaire de la boîte `contact@myselfiebooth-paris.fr`. Le champ `email` permet de répondre au visiteur. Aucun PHP ni identifiant SMTP n’est nécessaire. Les paramètres sont dans `src/lib/contactForm.mjs`.

L’envoi JavaScript conserve le visiteur sur le site. Une confirmation apparaît uniquement après une réponse HTTP réussie et `success: true`. Les champs restent remplis si l’envoi n’est pas confirmé ; aucun nouvel essai automatique n’est effectué. Un envoi HTML classique avec retour à `/contact/merci/` reste possible sans JavaScript. Documentation : https://docs.web3forms.com/.

Après `npm run build`, `node scripts/check-contact.mjs` vérifie le formulaire exporté et simule les réponses de l’API, sans envoyer de message. La réception en boîte doit être confirmée avec un essai réel. L’ancien traitement PHP est supprimé du serveur et son adresse renvoie HTTP 410.

Les références clients utilisent la liste commune `brandLogos` : les 16 logos disponibles sont affichés sur l’accueil et la page entreprise.

## SEO

Le projet inclut notamment :

- sitemap XML généré automatiquement ;
- pages locales structurées ;
- données Schema.org ;
- contrôle des titres, descriptions, canoniques, JSON-LD, attributs alt et liens internes ;
- notification IndexNow après déploiement ;
- fichier `llms.txt` pour exposer les pages de référence aux agents et moteurs qui le prennent en charge.
