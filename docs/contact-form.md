# Contact pour les demandes spécifiques

Le formulaire accompagne le parcours de devis sur l’accueil, les pages prestations, événements, options, réalisations et à propos. Une seule instance par page. Le devis reste le bouton principal. Le formulaire est ouvert sur les pages Entreprises et Personnalisation ; ailleurs, le visiteur ouvre « Un besoin particulier ? Écrivez-nous ».

Champs : nom et prénom, adresse e-mail, raison sociale facultative et message. Le serveur transmet également le chemin de la page, sans paramètres d’URL. Le message est envoyé à `contact@myselfiebooth-paris.fr`, depuis cette même adresse ; `Reply-To` contient l’adresse validée du visiteur.

## Hébergement et envoi

Le site reste un export statique Next.js. `public/contact.php` est copié vers `out/contact.php` puis transféré par le workflow SFTP IONOS existant. Cet endpoint nécessite PHP 7.4 ou supérieur avec `mail()` disponible et configuré sur l’hébergement IONOS, ainsi qu’un répertoire temporaire accessible en écriture. Aucun prestataire de formulaires externe ni clé API ajouté. Les identifiants de messagerie ne sont jamais exposés au navigateur.

L’endpoint accepte uniquement du JSON en POST, refuse les origines étrangères, valide les champs, conserve un destinataire et des en-têtes d’expéditeur fixes et ajoute un champ piège ainsi qu’une limite de cinq soumissions par IP sur quinze minutes. Le compteur se trouve dans le répertoire temporaire système, hors de l’arborescence publique, sans message ni adresse IP en clair. La confirmation n’est affichée que si `mail()` accepte le message ; une erreur conserve les champs et propose e-mail et téléphone. L’acceptation par `mail()` ne garantit pas la remise en boîte de réception.

## Vérification

```sh
npm run build
node scripts/check-contact.mjs
python3 scripts/test-contact.py --php php
```

Les tests PHP démarrent un serveur local avec un transport de capture : aucun e-mail réel n’est envoyé. Ils vérifient le destinataire, le Reply-To, les accents, les champs, les limites, les requêtes étrangères et l’échec du transport.

Après publication sur IONOS, vérifier que `GET /contact.php` renvoie HTTP 405 et du JSON (le serveur exécute PHP), puis effectuer un envoi depuis le formulaire et vérifier la réception à l’adresse contact ainsi que la réponse vers l’adresse du visiteur. Cette vérification de livraison nécessite le site publié et l’accès à la boîte de réception ; elle n’est pas couverte par les tests locaux.
