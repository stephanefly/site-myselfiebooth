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

La page `/contact/` utilise un formulaire HTML classique avec envoi direct via FormSubmit vers `contact@myselfiebooth-paris.fr`. Le champ `email` permet de répondre au visiteur. Le traitement ne nécessite aucun PHP ni identifiant SMTP dans le site. Les paramètres d’envoi sont dans `src/lib/contactForm.mjs`.

FormSubmit exige une confirmation de l’adresse destinataire à la première utilisation : après une soumission, ouvrir l’e-mail d’activation reçu dans la boîte contact et cliquer sur son lien. Sans cette activation, la distribution des messages n’est pas confirmée. Documentation : https://formsubmit.co/.

Après `npm run build`, `node scripts/check-contact.mjs` vérifie le formulaire exporté (destinataire, champs requis, retour vers la page de confirmation et absence de PHP), sans soumettre de message. Le premier envoi et la confirmation doivent être effectués depuis un navigateur réel : le service peut afficher une vérification anti-robot. Les tests automatisés d’envoi ont été bloqués avant transmission et ne prouvent aucune réception. L’ancien traitement PHP est supprimé du serveur et son adresse renvoie HTTP 410.

Les références clients utilisent la liste commune `brandLogos` : les 16 logos disponibles sont affichés sur l’accueil et la page entreprise.

## SEO

Le projet inclut notamment :

- sitemap XML généré automatiquement ;
- pages locales structurées ;
- données Schema.org ;
- contrôle des titres, descriptions, canoniques, JSON-LD, attributs alt et liens internes ;
- notification IndexNow après déploiement ;
- fichier `llms.txt` pour exposer les pages de référence aux agents et moteurs qui le prennent en charge.
