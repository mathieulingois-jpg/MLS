# Site MLS TRAVAUX (www.mlstravaux.fr)

Site vitrine statique, sans cookie, sans dépendance. Construit à partir du cahier des charges et de la charte validés le 11/10/2026.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Téléphone, adresse, horaires, communes desservies, clé du formulaire | `src/site.mjs` |
| Textes d'une page service (titre, FAQ, prestations…) | `src/services.mjs` |
| Accueil, Professionnels, L'entreprise, Contact, pages légales | `src/pages.mjs` |
| En-tête, menu, pied de page, balises SEO | `src/layout.mjs` |
| Couleurs, polices, mise en page | `assets/css/site.css` |

## Construire

```
npm run build      # site de production dans dist/
npm run preview    # aperçu (liens relatifs) dans preview/
```

## Mise en ligne (Cloudflare Pages ou Netlify)

- Commande de build : `npm run build`
- Dossier publié : `dist`
- Version de Node : 18 ou plus

## À faire avant la mise en ligne

- Remplacer peu à peu les photos d'illustration (`src/photos.mjs`, `assets/img/photos/`) par de vraies photos de chantier (jamais de photo d'illustration sur la page Réalisations).
- Créer contact@mlstravaux.fr, puis une clé Web3Forms et la coller dans `web3formsKey` (`src/site.mjs`).
- Compléter la zone couverte par la décennale et confirmer l'hébergeur (`src/pages.mjs`, mentions légales).
- Fichier d'origine du logo (.svg) pour un rendu plus net.
- Page Réalisations : retirer `noindex` quand les premiers chantiers sont publiés.

## Photos d'illustration

Elles viennent d'Unsplash (licence gratuite, usage commercial autorisé, pas de mention obligatoire). Le poste de travail de Claude n'a pas accès à Unsplash : pour en télécharger de nouvelles, ajouter `nom identifiant` dans `photos/candidats.txt` sur la branche `photos-candidats` et pousser ; l'action GitHub « Photos » les télécharge dans `photos/candidats/`.
