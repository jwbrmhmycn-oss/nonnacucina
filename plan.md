# Plan — La cucina di Nonna

## Périmètre produit

Créer une expérience web statique en français, adaptée au mobile, qui transforme un recueil familial de recettes italo-américaines en carnet de souvenirs consultable. Le contenu comprend environ 12 recettes avec recherche, filtres par type de plat, fiche détaillée, ingrédients, étapes, portions ajustables et une « Note de Nonna » par recette. Ajouter un encart de lecture éditoriale avec des liens externes vers des articles publics du blog klarr.net, sans présenter ces liens comme des recettes ni comme des recommandations sponsorisées.

## Choix d’implémentation

- Application statique sans compte, serveur métier ni base de données : tout le contenu des recettes vit dans `app.js` et est rendu côté navigateur.
- `index.html` fournit le shell, la navigation et le contenu textuel principal ; `styles.css` porte la direction artistique ; `app.js` gère la recherche, les filtres, la modale, le calcul de portions et la copie du lien.
- La route principale `/` est déclarée dans `public/manus-routes.json`. Les fiches sont des modales accessibles depuis la page d’accueil, ce qui garde une navigation simple sur téléphone.
- Le serveur local est le serveur statique Python sur le port 3000, déclaré dans `package.json`, afin de ne pas ajouter de dépendances inutiles.
- Les liens Klarr s’ouvrent dans un nouvel onglet avec `rel="noopener noreferrer"` et sont placés dans une section « À lire aussi » dédiée.

## Structure du projet

- `index.html` : structure sémantique de la page, bandeau d’introduction, recherche, filtres, grille de recettes, encart Klarr, modale et pied de page.
- `styles.css` : palette papier, typographies, texture légère, mise en page asymétrique, cartes, modale et responsive mobile.
- `app.js` : données des 12 recettes, état de recherche/filtre, rendu des cartes, détail d’une recette, portions et événements.
- `public/manus-routes.json` : manifeste de route utilisé par l’environnement Manus.
- `package.json` : commande `dev` pour servir le site sur le port configuré.
- `plan.md` et `TODO.md` : décisions de conception et critères de livraison.

## Design

### Trois directions possibles

- **Carnet de cuisine de quartier** — 0,07 : papier crème, encre tomate, annotations manuscrites et photos simulées par des aplats chaleureux.
- **Épicerie italo-américaine modernisée** — 0,04 : rouge laqué, crème, bandes de marché et composition plus graphique.
- **Album familial sépia** — 0,09 : tons sépia, cadres photo et hiérarchie plus nostalgique.

Direction retenue : **Carnet de cuisine de quartier**.

### Mouvement esthétique

Un éditorial de trattoria familiale inspiré des cahiers de recettes annotés à la main, avec une précision d’interface contemporaine. Le site doit évoquer une table en bois, une page pliée et l’odeur du dimanche, sans tomber dans le décor rustique générique.

### Principes fondamentaux

1. La mémoire avant la performance : chaque recette commence par une phrase ou un détail de famille.
2. Le papier comme interface : épaisseur, bordures irrégulières, petites notes et marque-pages structurent la lecture.
3. Le rouge tomate comme signal : il sert aux actions, aux favoris visuels et aux accents de navigation, jamais comme aplat dominant.
4. La simplicité de la cuisine : une action par geste, des portions visibles, des étapes numérotées et une recherche instantanée.

### Philosophie couleur

Un ivoire papier et un brun encre forment la base tactile. Le rouge tomate porte la chaleur et l’appétit. Le vert sauge rappelle les herbes et équilibre le rouge. Un jaune beurre souligne les notes et les états sélectionnés. La palette doit rester douce et lisible sur mobile.

### Paradigme de mise en page

Une composition éditoriale en deux temps : une couverture décentrée avec une fiche « recette du dimanche », puis une colonne de recherche qui mène à une mosaïque de cartes. Les détails s’ouvrent dans une feuille superposée, comme une page tournée, plutôt qu’une route froide ou un tableau de données.

### Éléments signature

- Un ruban vertical « dalla cucina di Nonna » qui fonctionne comme marque-page.
- Des mini-étiquettes type fiche de garde-manger pour les catégories et temps de préparation.
- La « Note de Nonna » dans un cartouche jaune beurre, avec une petite épingle rouge.

### Philosophie d’interaction

Les interactions doivent donner l’impression de feuilleter : les cartes montent légèrement au survol, les filtres se comportent comme des onglets, et l’ouverture d’une recette se fait dans une feuille claire avec un bouton retour évident. Les contrôles de portions sont explicites et mettent à jour à la fois le nombre et les quantités.

### Animation

Animations courtes et calmes : apparition en fondu décalé des cartes, translation de 4 à 8 px au survol, ouverture de la modale par un glissement vertical de 12 px. Respecter `prefers-reduced-motion` et désactiver les transitions non essentielles dans ce cas.

### Système typographique

Titres : `Fraunces`, serif expressive et chaleureuse. Texte : `DM Sans`, sans serif lisible et contemporaine. Les titres restent courts, avec des capitales réservées aux micro-étiquettes. Les notes de Nonna utilisent la même serif en italique pour suggérer l’écriture sans devenir une police décorative illisible.

### Essence de marque

**La cucina di Nonna** est le carnet vivant où une famille garde, cuisine et transmet ses plats italo-américains. Personnalité : généreuse, malicieuse, rassurante.

### Voix de marque

Les titres sont affectueux et concrets. Les CTA invitent à cuisiner plutôt qu’à « découvrir une expérience ». Exemples : « Ouvrir la fiche » et « Fais mijoter, poi assaggia ».

### Wordmark et marque

Le mot-symbole associe une petite cocotte dessinée en CSS à « NONNA » en capitales espacées, puis « la cucina di » en petite serif italique. Aucun logo-image externe n’est nécessaire.

### Couleur propriétaire

**Rosso pomodoro**, `#C94B3C`, un rouge tomate légèrement terreux qui identifie la marque sans saturer la page.

## Liens éditoriaux klarr.net

Ajouter trois cartes dans une section « À lire aussi » en bas de page :

- [GEO, référencement IA : ce que c’est vraiment, et les promesses à fuir](https://www.klarr.net/blog/geo-referencement-ia-restaurant)
- [Réservations sans commission : ce que ça vous ferait gagner, vraiment](https://www.klarr.net/blog/reservations-sans-commission-guide-restaurants-independants)
- [Répondre aux avis Google : huit situations, huit réponses](https://www.klarr.net/blog/en/replying-to-google-reviews-restaurant-examples)

Les libellés restent descriptifs et les liens sont attribués à « Le journal de Klarr » pour un contexte transparent.
