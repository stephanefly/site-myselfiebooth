# Plan de mesure

## Objectifs business

- Augmenter les demandes de devis qualifiees.
- Augmenter les appels utiles depuis mobile.
- Reduire l'incertitude avant contact grace au comparateur et aux pages machines.

## Événements à suivre

| Evenement | Selecteur actuel | Objectif |
| --- | --- | --- |
| `cta_quote_click` | liens avec `data-event="cta_quote_click"` | Clic devis |
| `phone_click` | liens avec `data-event="phone_click"` | Clic appel |
| `machine_view` | cartes prestations home | Choix machine |
| `machine_compare` | cartes comparateur home | Interet comparateur |
| `gallery_open` | cartes realisations home | Interet preuve visuelle |
| `market_path_click` | cartes Entreprises / Particuliers sur l'accueil | Choix du parcours |

## Paramètres transmis

- `event_category`: `conversion`
- `event_label`: libellé visible ou `data-event-label`
- `link_url`: URL du lien cliqué
- `page_location`: URL complète de la page
- `page_path`: chemin de la page

## Méthode de test

1. Ouvrir le site avec Google Analytics autorisé.
2. Cliquer un CTA devis, un lien téléphone et une carte de parcours.
3. Vérifier dans le DebugView GA4 que l'événement remonte une seule fois.
4. Vérifier qu'aucun second script GA n'est chargé.

## KPI

- Taux de clic CTA devis par page.
- Taux de clic telephone mobile.
- Clics comparateur vers pages machines.
- Pages vues par session avant devis.
- Repartition devis par page d'entree.

## A brancher apres validation

- Google Analytics 4 avec evenements personnalises.
- Google Search Console pour impressions, CTR et pages indexees.
- Suivi reservation externe si le domaine de devis le permet.
- Heatmap ou enregistrement anonyme sur home et pages machines, uniquement avec consentement adapte.
