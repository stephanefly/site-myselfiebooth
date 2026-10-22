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

La page `/contact/` envoie les demandes à `contact@myselfiebooth-paris.fr` via `public/api/contact.php`. L’hébergement doit exécuter PHP 8 avec la fonction `mail()` disponible et autoriser l’écriture dans son répertoire temporaire pour limiter les envois répétés. L’adresse du visiteur sert uniquement de `Reply-To` après validation ; le destinataire et l’expéditeur restent fixes.

`php scripts/check-contact.php` vérifie la validation, la limitation et les erreurs d’envoi avec un transport simulé, sans envoyer d’e-mail. Le déploiement contrôle ensuite la page et le refus d’une soumission vide sur l’hébergement, sans soumettre de message réel. La distribution finale dans la boîte de réception doit être confirmée avec un message autorisé.

Les références clients affichées sur le site sont volontairement limitées aux références publiquement validées. Les anciens logos non utilisés sont supprimés afin que le contrôle des médias inutilisés reste bloquant avant mise en production.

## SEO

Le projet inclut notamment :

- sitemap XML généré automatiquement ;
- pages locales structurées ;
- données Schema.org ;
- contrôle des titres, descriptions, canoniques, JSON-LD, attributs alt et liens internes ;
- notification IndexNow après déploiement ;
- fichier `llms.txt` pour exposer les pages de référence aux agents et moteurs qui le prennent en charge.
