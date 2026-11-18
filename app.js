const recipes = [
  {
    id: 'ragu', title: 'Le ragù du dimanche', category: 'Pasta', time: '3 h', difficulty: 'Patient', servings: 6,
    description: 'La sauce qui commence avant midi et finit toujours sur un morceau de pain.',
    note: '« Si tu peux encore voir le fond de la casserole, ce n’est pas prêt. » — Nonna Rosa',
    ingredients: [
      [900, 'g', 'bœuf haché et porc haché'], [2, 'c. à soupe', 'huile d’olive'], [1, ' ', 'oignon jaune, finement haché'], [2, ' ', 'carottes, finement hachées'], [2, ' ', 'branches de céleri, finement hachées'], [3, ' ', 'gousses d’ail, écrasées'], [800, 'g', 'tomates pelées'], [2, 'c. à soupe', 'concentré de tomate'], [240, 'ml', 'vin rouge'], [500, 'g', 'rigatoni ou pappardelle'], [1, 'poignée', 'persil plat'], [null, ' ', 'sel, poivre et parmesan']
    ],
    steps: ['Chauffez l’huile dans une grande cocotte. Faites revenir l’oignon, la carotte et le céleri 8 minutes, jusqu’à ce qu’ils soient doux et brillants.', 'Ajoutez les viandes. Écrasez-les à la cuillère et laissez-les prendre une belle couleur brune. C’est là que le goût arrive.', 'Versez le vin, grattez le fond et laissez réduire 5 minutes. Ajoutez l’ail, le concentré et les tomates.', 'Portez à frémissement, baissez le feu et laissez mijoter à demi-couvert au moins 2 heures. Remuez quand vous passez dans la cuisine.', 'Faites cuire les pâtes. Gardez une tasse d’eau de cuisson, mélangez les pâtes au ragù et terminez avec le persil et le parmesan.']
  },
  {
    id: 'polpette', title: 'Les polpette de Nonna', category: 'Secondi', time: '1 h 15', difficulty: 'Facile', servings: 5,
    description: 'Tendres au milieu, dorées sur les bords, et toujours une de plus que prévu.',
    note: '« Une boulette réussie doit être plus douce qu’une poignée de main. »',
    ingredients: [[500, 'g', 'bœuf haché'], [250, 'g', 'porc haché'], [1, ' ', 'œuf'], [80, 'g', 'chapelure'], [80, 'ml', 'lait entier'], [60, 'g', 'parmesan râpé'], [2, ' ', 'gousses d’ail, râpées'], [1, 'poignée', 'persil haché'], [700, 'ml', 'sauce tomate'], [2, 'c. à soupe', 'huile d’olive'], [null, ' ', 'sel et poivre']],
    steps: ['Mélangez la chapelure et le lait dans un grand bol. Attendez 5 minutes qu’elle devienne moelleuse.', 'Ajoutez les viandes, l’œuf, le parmesan, l’ail et le persil. Mélangez avec les mains sans trop tasser.', 'Formez 20 boulettes de la taille d’une noix. Posez-les sur une assiette et laissez-les reposer 10 minutes.', 'Dorez les boulettes dans l’huile, en plusieurs fois. Elles n’ont pas besoin d’être cuites à cœur à cette étape.', 'Ajoutez la sauce tomate, couvrez et laissez mijoter 35 minutes. Servez avec du pain croustillant ou des pâtes.']
  },
  {
    id: 'parmigiana', title: 'Parmigiana d’aubergines', category: 'Forno', time: '1 h 45', difficulty: 'Week-end', servings: 6,
    description: 'Des couches d’aubergine, de tomate et de fromage qui font toujours taire la table.',
    note: '« L’aubergine aime le sel, mais elle aime encore plus le temps de repos. »',
    ingredients: [[3, ' ', 'grosses aubergines'], [2, 'c. à café', 'sel fin'], [700, 'ml', 'passata de tomates'], [2, ' ', 'gousses d’ail'], [250, 'g', 'mozzarella'], [80, 'g', 'parmesan râpé'], [1, 'poignée', 'basilic frais'], [120, 'g', 'farine'], [3, ' ', 'œufs'], [null, ' ', 'huile d’olive et poivre']],
    steps: ['Coupez les aubergines en tranches. Salez-les et laissez-les dégorger 30 minutes, puis séchez-les bien.', 'Préparez la sauce avec un filet d’huile, l’ail et la passata. Laissez mijoter 20 minutes et ajoutez le basilic.', 'Farinez les tranches, passez-les dans l’œuf battu et faites-les dorer à la poêle. Égouttez sur du papier.', 'Dans un plat, alternez sauce, aubergine, mozzarella, parmesan et basilic. Terminez par le parmesan.', 'Enfournez à 190 °C pendant 35 minutes. Attendez 15 minutes avant de couper : les couches se remercieront.']
  },
  {
    id: 'ziti', title: 'Baked ziti du samedi', category: 'Pasta', time: '1 h', difficulty: 'Facile', servings: 6,
    description: 'Le plat qui se prépare dans le calme et nourrit tout le monde quand la maison se remplit.',
    note: '« Les pâtes au four sont meilleures quand quelqu’un arrive en retard. »',
    ingredients: [[500, 'g', 'ziti ou penne'], [700, 'ml', 'sauce tomate'], [250, 'g', 'ricotta'], [250, 'g', 'mozzarella râpée'], [60, 'g', 'parmesan'], [1, ' ', 'œuf'], [1, 'poignée', 'basilic'], [null, ' ', 'huile d’olive, sel et poivre']],
    steps: ['Faites cuire les pâtes 2 minutes de moins que le temps indiqué. Égouttez-les sans les rincer.', 'Mélangez la ricotta, l’œuf, la moitié du parmesan, du sel et du poivre.', 'Mélangez les pâtes avec la sauce et la moitié de la mozzarella. Ajoutez le basilic déchiré.', 'Versez la moitié dans un plat huilé. Répartissez la ricotta par cuillerées, puis couvrez avec le reste des pâtes.', 'Ajoutez le reste de mozzarella et de parmesan. Enfournez 25 minutes à 200 °C, puis reposez 10 minutes.']
  },
  {
    id: 'chickenparm', title: 'Chicken parm de la maison', category: 'Secondi', time: '55 min', difficulty: 'Convivial', servings: 4,
    description: 'Une escalope croustillante, un peu de sauce et beaucoup trop de mozzarella — comme il faut.',
    note: '« Ne noie pas le poulet sous la sauce : il faut entendre le croustillant. »',
    ingredients: [[4, ' ', 'escalopes de poulet'], [100, 'g', 'farine'], [2, ' ', 'œufs'], [160, 'g', 'chapelure'], [70, 'g', 'parmesan'], [300, 'ml', 'sauce tomate'], [200, 'g', 'mozzarella'], [1, 'poignée', 'basilic'], [null, ' ', 'huile, sel et poivre']],
    steps: ['Aplatissez les escalopes entre deux feuilles de papier cuisson. Salez et poivrez.', 'Passez chaque escalope dans la farine, l’œuf puis la chapelure mélangée au parmesan.', 'Faites dorer dans un fond d’huile 3 minutes par côté. Déposez sur du papier absorbant.', 'Mettez un peu de sauce dans un plat, posez le poulet dessus, ajoutez une cuillère de sauce et la mozzarella.', 'Passez sous le gril 4 à 5 minutes, juste le temps que le fromage fonde. Ajoutez le basilic au dernier moment.']
  },
  {
    id: 'sausage-peppers', title: 'Saucisses & poivrons', category: 'Secondi', time: '50 min', difficulty: 'Facile', servings: 4,
    description: 'Le sandwich de la fête de quartier, avec des poivrons doux et des oignons bien fondants.',
    note: '« Le poivron doit être doux comme une chanson, pas croquant comme une dispute. »',
    ingredients: [[500, 'g', 'saucisses italiennes'], [3, ' ', 'poivrons rouges et jaunes'], [2, ' ', 'oignons'], [3, ' ', 'gousses d’ail'], [400, 'g', 'tomates concassées'], [120, 'ml', 'vin rouge'], [4, ' ', 'pains italiens'], [2, 'c. à soupe', 'huile d’olive'], [null, ' ', 'origan, sel et poivre']],
    steps: ['Faites dorer les saucisses dans une grande poêle, puis réservez-les. Gardez les sucs.', 'Ajoutez l’huile, les poivrons et les oignons en lamelles. Salez légèrement et faites cuire 12 minutes.', 'Ajoutez l’ail et l’origan. Déglacez au vin, puis versez les tomates.', 'Remettez les saucisses, couvrez et laissez mijoter 25 minutes, jusqu’à ce que les poivrons soient très tendres.', 'Servez dans les pains grillés, avec une cuillère de jus et une serviette épaisse.']
  },
  {
    id: 'beans-greens', title: 'Scarole & haricots blancs', category: 'Zuppe', time: '45 min', difficulty: 'Tout doux', servings: 4,
    description: 'Une soupe pauvre en ingrédients, riche en chaleur, et meilleure le lendemain.',
    note: '« Si la soupe ne tient pas la cuillère, ajoute un peu de pain dans le bol. »',
    ingredients: [[1, ' ', 'grosse scarole'], [2, 'boîtes', 'haricots cannellini, rincés'], [1, ' ', 'oignon'], [3, ' ', 'gousses d’ail'], [1, 'l', 'bouillon de légumes'], [4, 'tranches', 'pain de campagne'], [60, 'g', 'pecorino'], [3, 'c. à soupe', 'huile d’olive'], [null, ' ', 'piment, sel et poivre']],
    steps: ['Lavez la scarole dans plusieurs eaux. Faites revenir l’oignon dans l’huile 6 minutes, puis ajoutez l’ail et le piment.', 'Ajoutez la scarole par poignées. Quand elle tombe, versez le bouillon et les haricots.', 'Laissez frémir 25 minutes. Écrasez quelques haricots contre la paroi pour épaissir le bouillon.', 'Grillez les tranches de pain, frottez-les avec une gousse d’ail et posez-les au fond des bols.', 'Versez la soupe, finissez avec le pecorino et un filet d’huile.']
  },
  {
    id: 'garlic-bread', title: 'Pain à l’ail du dimanche', category: 'Contorni', time: '25 min', difficulty: 'Très facile', servings: 6,
    description: 'Le premier à disparaître de la table, même quand personne ne voulait « prendre de pain ».',
    note: '« Il n’y a pas trop d’ail. Il y a seulement des gens qui n’ont pas encore goûté. »',
    ingredients: [[1, ' ', 'gros pain italien'], [100, 'g', 'beurre doux'], [4, ' ', 'gousses d’ail'], [1, 'poignée', 'persil'], [40, 'g', 'parmesan'], [null, ' ', 'sel et huile d’olive']],
    steps: ['Chauffez le four à 200 °C. Entaillez le pain en tranches sans aller jusqu’au bout.', 'Mélangez le beurre mou avec l’ail, le persil, le parmesan et une pincée de sel.', 'Glissez le beurre dans chaque entaille. Arrosez d’un filet d’huile.', 'Enveloppez dans du papier cuisson puis du papier aluminium. Enfournez 12 minutes.', 'Ouvrez le papier et poursuivez 5 minutes pour dorer les bords. Servez très chaud.']
  },
  {
    id: 'pasta-peas', title: 'Pasta e piselli', category: 'Pasta', time: '30 min', difficulty: 'Semaine', servings: 4,
    description: 'Des petits pois, de l’oignon et des pâtes courtes : le dîner qui connaît déjà le chemin.',
    note: '« On ne cuisine pas pour impressionner. On cuisine pour nourrir quelqu’un. »',
    ingredients: [[350, 'g', 'ditalini ou petites pâtes'], [300, 'g', 'petits pois'], [1, ' ', 'oignon'], [1, 'l', 'bouillon de poulet ou légumes'], [50, 'g', 'pecorino'], [2, 'c. à soupe', 'huile d’olive'], [null, ' ', 'sel et poivre']],
    steps: ['Faites revenir l’oignon dans l’huile 8 minutes, sans le laisser colorer.', 'Ajoutez les petits pois et le bouillon. Portez à ébullition puis versez les pâtes directement dans la casserole.', 'Faites cuire en remuant souvent, comme un risotto, jusqu’à ce que les pâtes soient tendres et le bouillon crémeux.', 'Goûtez, ajustez le sel et le poivre. Ajoutez un peu d’eau si le plat devient trop épais.', 'Servez avec le pecorino et un filet d’huile.']
  },
  {
    id: 'pizzelle', title: 'Les pizzelle croustillantes', category: 'Dolci', time: '45 min', difficulty: 'Tradition', servings: 24,
    description: 'Fines comme une dentelle, parfumées à l’anis et bonnes avec le café.',
    note: '« La première est pour tester le fer. La deuxième est pour Nonna. »',
    ingredients: [[3, ' ', 'œufs'], [150, 'g', 'sucre'], [120, 'g', 'beurre fondu'], [1, 'c. à café', 'extrait d’anis'], [250, 'g', 'farine'], [2, 'c. à café', 'levure chimique'], [1, ' ', 'zeste de citron'], [null, ' ', 'sucre glace']],
    steps: ['Battez les œufs et le sucre jusqu’à ce que le mélange pâlisse. Incorporez le beurre tiède, l’anis et le zeste.', 'Ajoutez la farine et la levure. La pâte doit être épaisse mais souple.', 'Chauffez le fer à pizzelle et graissez-le légèrement. Déposez une cuillère de pâte au centre.', 'Fermez 45 secondes à 1 minute, jusqu’à ce que la pizzella soit dorée. Décollez-la et laissez-la refroidir à plat.', 'Saupoudrez de sucre glace. Pour les rouler, faites-le dès la sortie du fer, quand elles sont encore souples.']
  },
  {
    id: 'struffoli', title: 'Les struffoli de Noël', category: 'Dolci', time: '1 h 20', difficulty: 'Fête', servings: 8,
    description: 'Des petites boules dorées, du miel, des agrumes et assez de confettis pour faire briller janvier.',
    note: '« On ne compte pas les boules de struffoli. On compte les personnes qui sourient. »',
    ingredients: [[400, 'g', 'farine'], [4, ' ', 'œufs'], [50, 'g', 'sucre'], [60, 'g', 'beurre fondu'], [1, ' ', 'zeste d’orange'], [500, 'g', 'miel'], [60, 'g', 'écorces d’agrumes confites'], [40, 'g', 'amandes'], [null, ' ', 'huile de friture et confettis']],
    steps: ['Mélangez la farine, les œufs, le sucre, le beurre et le zeste jusqu’à obtenir une pâte souple. Reposez 20 minutes.', 'Roulez la pâte en longs cordons puis coupez de petites billes. Farinez très légèrement pour qu’elles ne collent pas.', 'Faites frire les boules par petites fournées dans une huile à 170 °C. Elles doivent gonfler et dorer.', 'Chauffez doucement le miel dans une grande poêle. Ajoutez les struffoli et mélangez pour les enrober.', 'Empilez sur un plat en couronne. Ajoutez les écorces, les amandes et les confettis avant que le miel ne fige.']
  },
  {
    id: 'rainbow-cookies', title: 'Les rainbow cookies', category: 'Dolci', time: '2 h', difficulty: 'Patience', servings: 24,
    description: 'Trois couches d’amande, une fine robe de chocolat : le petit gâteau qui disparaît en premier.',
    note: '« Les couleurs n’ont pas besoin d’être parfaites. Elles ont besoin d’être ensemble. »',
    ingredients: [[225, 'g', 'pâte d’amande'], [225, 'g', 'beurre doux'], [200, 'g', 'sucre'], [4, ' ', 'œufs, blancs et jaunes séparés'], [170, 'g', 'farine'], [1, 'c. à café', 'extrait d’amande'], [3, 'gouttes', 'colorant rouge et vert'], [180, 'g', 'confiture d’abricot'], [200, 'g', 'chocolat noir']],
    steps: ['Battez la pâte d’amande, le beurre et le sucre. Ajoutez les jaunes puis la farine et l’extrait d’amande.', 'Montez les blancs en neige et incorporez-les délicatement. Divisez la pâte en trois, colorez deux parts.', 'Étalez chaque pâte en couche fine dans trois moules chemisés. Faites cuire 10 à 12 minutes à 180 °C.', 'Laissez tiédir. Assemblez avec la confiture d’abricot entre les couches, puis pressez sous un poids au frais 1 heure.', 'Nappez de chocolat fondu. Quand il est presque pris, découpez en petits carrés nets.']
  },
  {
    id: 'ricotta-cheesecake', title: 'Cheesecake ricotta-citron', category: 'Dolci', time: '1 h 30', difficulty: 'Dimanche', servings: 8,
    description: 'Crémeux sans être lourd, avec du citron dans la pâte et les conversations qui s’attardent.',
    note: '« Laisse-le refroidir. Les gâteaux aussi ont besoin de reprendre leur souffle. »',
    ingredients: [[500, 'g', 'ricotta'], [250, 'g', 'cream cheese'], [160, 'g', 'sucre'], [3, ' ', 'œufs'], [1, ' ', 'zeste de citron'], [2, 'c. à soupe', 'jus de citron'], [180, 'g', 'biscuits secs'], [80, 'g', 'beurre fondu'], [null, ' ', 'sucre glace pour servir']],
    steps: ['Écrasez les biscuits et mélangez-les au beurre. Pressez dans le fond d’un moule et cuisez 8 minutes à 180 °C.', 'Fouettez la ricotta, le cream cheese et le sucre. Ajoutez les œufs un à un, puis le citron.', 'Versez sur le fond précuit. Enfournez 45 minutes : le centre doit encore trembler légèrement.', 'Éteignez le four et laissez la porte entrouverte 20 minutes. Refroidissez ensuite au réfrigérateur.', 'Servez avec du sucre glace et des quartiers de citron.']
  }
];

const state = { query: '', filter: 'Tous', selected: null, servings: 4, lastFocused: null };
const grid = document.querySelector('#recipe-grid');
const filterRow = document.querySelector('#filter-row');
const searchInput = document.querySelector('#search-input');
const emptyState = document.querySelector('#empty-state');
const modal = document.querySelector('#recipe-modal');
const modalTitle = document.querySelector('#modal-title');
const modalCategory = document.querySelector('#modal-category');
const modalDescription = document.querySelector('#modal-description');
const modalTime = document.querySelector('#modal-time');
const modalDifficulty = document.querySelector('#modal-difficulty');
const ingredientsList = document.querySelector('#ingredients-list');
const stepsList = document.querySelector('#steps-list');
const nonnaNote = document.querySelector('#nonna-note-text');
const servingsValue = document.querySelector('#servings-value');
const minusButton = document.querySelector('#servings-minus');
const plusButton = document.querySelector('#servings-plus');
const copyButton = document.querySelector('#copy-recipe');
const copyStatus = document.querySelector('#copy-status');
const pageMain = document.querySelector('main');

const categories = ['Tous', ...new Set(recipes.map(recipe => recipe.category))];

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
}

function formatQuantity(value) {
  if (value === null || value === undefined) return 'Au goût';
  const rounded = Math.round(value * 100) / 100;
  const whole = Math.floor(rounded);
  const fraction = Math.round((rounded - whole) * 4) / 4;
  const fractions = { 0.25: '¼', 0.5: '½', 0.75: '¾' };
  if (fraction === 0) return String(whole);
  if (whole === 0) return fractions[fraction] || String(rounded).replace('.', ',');
  return `${whole} ${fractions[fraction] || String(fraction).replace('.', ',')}`;
}

function renderFilters() {
  filterRow.innerHTML = categories.map(category => `<button class="filter-pill${state.filter === category ? ' is-active' : ''}" data-filter="${escapeHtml(category)}" type="button" aria-pressed="${state.filter === category}">${category === 'Tous' ? 'Toutes' : escapeHtml(category)}</button>`).join('');
}

function illustrationFor(recipe, index) {
  const classNames = ['illustration-ragu', 'illustration-meatballs', 'illustration-parmigiana', 'illustration-ziti', 'illustration-chicken', 'illustration-peppers', 'illustration-greens', 'illustration-garlic', 'illustration-peas', 'illustration-pizzelle', 'illustration-struffoli', 'illustration-cookies'];
  return `<div class="card-illustration ${classNames[index % classNames.length]}"><span class="mini-plate"></span><span class="mini-food food-one"></span><span class="mini-food food-two"></span></div>`;
}

function renderCards() {
  const normalizedQuery = state.query.trim().toLocaleLowerCase('fr');
  const filtered = recipes.filter(recipe => {
    const matchesFilter = state.filter === 'Tous' || recipe.category === state.filter;
    const searchable = [recipe.title, recipe.category, recipe.description, recipe.note, ...recipe.ingredients.map(item => item[2])].join(' ').toLocaleLowerCase('fr');
    return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  grid.innerHTML = filtered.map((recipe) => {
    const index = recipes.indexOf(recipe);
    return `<article class="recipe-card recipe-card--${index % 3 === 0 ? 'tomato' : index % 3 === 1 ? 'sage' : 'butter'}">
      ${illustrationFor(recipe, index)}
      <div class="recipe-card-content"><div class="card-meta"><span>${escapeHtml(recipe.category)}</span><span>${escapeHtml(recipe.time)}</span></div><h3>${escapeHtml(recipe.title)}</h3><p>${escapeHtml(recipe.description)}</p><button class="card-link" type="button" data-open-recipe="${escapeHtml(recipe.id)}">Ouvrir la fiche <span aria-hidden="true">→</span></button></div>
    </article>`;
  }).join('');
  emptyState.hidden = filtered.length > 0;
}

function openRecipe(id, trigger) {
  const recipe = recipes.find(item => item.id === id);
  if (!recipe) return;
  state.selected = recipe;
  state.servings = recipe.servings;
  state.lastFocused = trigger || document.activeElement;
  modalTitle.textContent = recipe.title;
  modalCategory.innerHTML = `<span class="eyebrow-line"></span>${recipe.category}`;
  modalDescription.textContent = recipe.description;
  modalTime.textContent = recipe.time;
  modalDifficulty.textContent = recipe.difficulty;
  nonnaNote.textContent = recipe.note;
  renderModalRecipe();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  pageMain.inert = true;
  window.requestAnimationFrame(() => modal.querySelector('.modal-close').focus());
}

function renderModalRecipe() {
  if (!state.selected) return;
  const recipe = state.selected;
  servingsValue.textContent = state.servings;
  ingredientsList.innerHTML = recipe.ingredients.map(([quantity, unit, item]) => {
    const calculated = quantity === null ? null : quantity * (state.servings / recipe.servings);
    return `<li><span class="ingredient-quantity">${formatQuantity(calculated)} ${escapeHtml(unit)}</span><span class="ingredient-item">${escapeHtml(item)}</span></li>`;
  }).join('');
  stepsList.innerHTML = recipe.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('');
}

function closeRecipe() {
  modal.hidden = true;
  document.body.style.overflow = '';
  pageMain.inert = false;
  if (state.lastFocused && typeof state.lastFocused.focus === 'function') state.lastFocused.focus();
}

renderFilters();
renderCards();

document.addEventListener('click', event => {
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    renderFilters();
    renderCards();
    return;
  }
  const recipeButton = event.target.closest('[data-open-recipe], [data-preview-open]');
  if (recipeButton) openRecipe(recipeButton.dataset.openRecipe || recipeButton.dataset.previewOpen, recipeButton);
  if (event.target.closest('[data-modal-close]')) closeRecipe();
});

searchInput.addEventListener('input', event => { state.query = event.target.value; renderCards(); });
minusButton.addEventListener('click', () => { if (state.servings > 1) { state.servings -= 1; renderModalRecipe(); } });
plusButton.addEventListener('click', () => { if (state.servings < 24) { state.servings += 1; renderModalRecipe(); } });
copyButton.addEventListener('click', async () => {
  const url = `${window.location.origin}${window.location.pathname}#${state.selected.id}`;
  try { await navigator.clipboard.writeText(url); copyButton.innerHTML = '<span aria-hidden="true">✓</span> Lien copié'; copyStatus.textContent = 'Le lien de la recette a été copié.'; } catch { copyButton.innerHTML = '<span aria-hidden="true">✓</span> Lien prêt'; copyStatus.textContent = 'Le lien de la recette est prêt à être copié.'; }
  window.setTimeout(() => { copyButton.innerHTML = '<span aria-hidden="true">⧉</span> Copier le lien'; copyStatus.textContent = ''; }, 1800);
});

document.addEventListener('keydown', event => {
  if (event.key === '/' && document.activeElement !== searchInput && !modal.hidden) return;
  if (event.key === '/' && document.activeElement !== searchInput) { event.preventDefault(); searchInput.focus(); }
  if (event.key === 'Escape' && !modal.hidden) closeRecipe();
  if (event.key === 'Tab' && !modal.hidden) {
    const focusable = [...modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(element => !element.disabled && element.offsetParent !== null);
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === firstFocusable) { event.preventDefault(); lastFocusable.focus(); }
    else if (!event.shiftKey && document.activeElement === lastFocusable) { event.preventDefault(); firstFocusable.focus(); }
  }
});

window.addEventListener('hashchange', () => {
  const hashId = window.location.hash.slice(1);
  if (hashId && recipes.some(recipe => recipe.id === hashId)) openRecipe(hashId);
});

const initialHash = window.location.hash.slice(1);
if (initialHash && recipes.some(recipe => recipe.id === initialHash)) openRecipe(initialHash);
