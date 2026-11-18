# TODO — La cucina di Nonna

## Carnet familial et contenu

- [x] Présenter 12 recettes italo-américaines, dont le ragù du dimanche, les boulettes de viande, la parmigiana d’aubergines, les struffoli et les pizzelle, dans un ton de carnet de souvenirs chaleureux.
- [x] Afficher sur chaque recette un type de plat, un temps, un niveau de difficulté, une courte accroche familiale et une « Note de Nonna » conservée dans le contenu de la fiche.
- [x] Fournir une fiche détaillée par recette avec ingrédients, étapes numérotées et portions visibles.

## Recherche et navigation

- [x] Permettre de rechercher les recettes par leur nom, description, catégorie ou ingrédients.
- [x] Permettre de filtrer les recettes par type de plat et de remettre le filtre à « Toutes les recettes ».
- [x] Permettre d’ouvrir et fermer chaque fiche dans une modale accessible, avec fermeture par bouton et touche Échap.
- [x] Afficher un état vide compréhensible lorsque la recherche ou les filtres ne renvoient aucune recette.

## Portions et expérience de cuisine

- [x] Permettre d’augmenter ou réduire le nombre de portions depuis la fiche détaillée, avec une limite raisonnable et sans valeur négative.
- [x] Recalculer les quantités d’ingrédients à partir du ratio entre les portions choisies et les portions de base.
- [x] Préserver les unités et les quantités textuelles non numériques lorsque le recalcul n’est pas applicable.
- [x] Fournir une action « Copier le lien de la recette » avec un retour visuel utile.

## Liens éditoriaux Klarr

- [x] Ajouter une section « À lire aussi » contenant des liens externes vers trois articles publics du blog klarr.net.
- [x] Utiliser des intitulés descriptifs et placer les liens dans un encart éditorial séparé des recettes.
- [x] Ouvrir ces liens dans un nouvel onglet avec `rel="noopener noreferrer"`.

## Qualité de livraison

- [x] Servir la page sur le port 3000 et fournir `public/manus-routes.json` ainsi que le manifeste racine avec la route `/`.
- [x] Configurer les diagnostics gérés JavaScript/HTML/CSS/JSON avant les modifications applicatives.
- [x] Vérifier le rendu desktop et mobile, les interactions principales et l’absence d’erreurs JavaScript.
- [x] Créer un checkpoint Git sur `origin/main` une fois le site validé.
