const COLLECTIONS = [
  {
    title: 'The Rose Edit',
    subtitle: 'Timeless romance',
    tag: 'Single Variety',
    image: 'img/rose-edit.jpg',
    alt: 'Dense arrangement of deep red velvet roses in low, moody light',
    wide: true
  },
  {
    title: 'Blanc Rouge',
    subtitle: 'Pure elegance',
    tag: 'Single Variety',
    image: 'img/blanc-rouge.jpg',
    alt: 'Tall sculptural arrangement of white blossoms and red branches in a dark interior',
    wide: false
  },
  {
    title: 'Special Occasions',
    subtitle: 'Midnight mood',
    tag: 'Single Variety',
    image: 'img/special-occasions.jpg',
    alt: 'Dark red gift box tied with a glossy crimson satin ribbon',
    wide: false
  }
];

const BOUQUETS = [
  {
    id: 'noir-velvet',
    name: 'Noir Velvet',
    price: 300,
    collection: 'signature',
    image: 'img/rose-edit.jpg',
    crop: 'crop-center',
    alt: 'Dense arrangement of deep red velvet roses in low, moody light',
    description: 'Our darkest roses, packed close like velvet folds. A brooding, romantic gesture for evenings that deserve weight.',
    stems: 'Black Baccara rose, garden rose, dark ruscus'
  },
  {
    id: 'velvet-blush',
    name: 'Velvet Blush',
    price: 280,
    collection: 'seasonal',
    image: 'img/bouquet-edit.jpg',
    crop: 'crop-right',
    alt: 'Red calla lilies and roses arranged before a paneled cream wall',
    description: 'Calla lilies arc over soft red roses in a composition that blushes rather than shouts. Gathered from the season at its fullest.',
    stems: 'Calla lily, spray rose, red berries, branch'
  },
  {
    id: 'golden-reverie',
    name: 'Golden Reverie',
    price: 120,
    collection: 'seasonal',
    image: 'img/hero-ranunculus.jpg',
    crop: 'crop-left',
    alt: 'Ivory ranunculus blooms glowing against a crimson backdrop',
    description: 'A small, luminous posy of ranunculus with warm golden centres. A gift for a quiet thank-you.',
    stems: 'Ivory ranunculus, butter tulip, eucalyptus'
  },
  {
    id: 'light-nightmare',
    name: 'Light Nightmare',
    price: 240,
    collection: 'signature',
    image: 'img/bouquet-edit.jpg',
    crop: 'crop-left',
    alt: 'Glossy red anthuriums and dahlias in front of crimson velvet curtains',
    description: 'Sculptural anthuriums and moody dahlias with a theatrical, slightly wicked silhouette. Beautiful in candlelight.',
    stems: 'Anthurium, dahlia, orchid, amaranthus'
  },
  {
    id: 'rouge-prive',
    name: 'Rouge Privé',
    price: 350,
    collection: 'prive',
    image: 'img/bouquet-edit.jpg',
    crop: 'crop-center',
    alt: 'Opulent arrangement of red anthuriums, dahlias, calla lilies and roses',
    description: 'Our house signature, composed privately for each client. Every Rouge Privé is unique, layered in shades of crimson and wine.',
    stems: 'Anthurium, calla lily, dahlia, rose, berried branch'
  },
  {
    id: 'blanc-eternel',
    name: 'Blanc Éternel',
    price: 260,
    collection: 'blanc-rouge',
    image: 'img/blanc-rouge.jpg',
    crop: 'crop-center',
    alt: 'Tall sculptural arrangement of white blossoms and red branches in a dark interior',
    description: 'White blossoms rise against slender red branches. Pure, architectural and calm, with a single line of colour.',
    stems: 'White blossom, red dogwood, white lisianthus'
  },
  {
    id: 'crimson-whisper',
    name: 'Crimson Whisper',
    price: 190,
    collection: 'occasions',
    image: 'img/special-occasions.jpg',
    crop: 'crop-center',
    alt: 'Dark red gift box tied with a glossy crimson satin ribbon',
    description: 'A compact bouquet of red roses presented in our signature crimson box, tied with satin. Made for anniversaries.',
    stems: 'Red rose, spray rose, satin ribbon box'
  },
  {
    id: 'midnight-ranunculus',
    name: 'Midnight Ranunculus',
    price: 220,
    collection: 'prive',
    image: 'img/hero-ranunculus.jpg',
    crop: 'crop-right',
    alt: 'Large white ranunculus blooms against a deep crimson backdrop',
    description: 'Oversized ranunculus layered in soft folds, set against deep wine foliage. A late-night bloom, bespoke in scale.',
    stems: 'Ranunculus, hellebore, dark foliage'
  },
  {
    id: 'ivory-ember',
    name: 'Ivory Ember',
    price: 210,
    collection: 'blanc-rouge',
    image: 'img/hero-ranunculus.jpg',
    crop: 'crop-center',
    alt: 'White ranunculus heads clustered against a red background',
    description: 'Creamy ranunculus warmed with touches of ember red. Gentle enough for a wedding table, bold enough for a dinner.',
    stems: 'White ranunculus, red anemone, jasmine vine'
  },
  {
    id: 'ribbon-noir',
    name: 'Ribbon Noir',
    price: 330,
    collection: 'occasions',
    image: 'img/rose-edit.jpg',
    crop: 'crop-center',
    alt: 'Deep red roses arranged tightly in a dark, moody setting',
    description: 'A generous dome of velvet roses, hand-tied and wrapped for the moments that need to be unforgettable.',
    stems: 'Grand Prix rose, garden rose, ribbon wrap'
  }
];

const FILTERS = [
  { key: 'all', label: 'All Bouquets' },
  { key: 'seasonal', label: 'Seasonal' },
  { key: 'signature', label: 'Signature Edit' },
  { key: 'blanc-rouge', label: 'Blanc & Rouge' },
  { key: 'occasions', label: 'Special Occasions' },
  { key: 'prive', label: 'Rouge Privé' }
];

const SIZES = [
  { key: 'petite', label: 'Petite', multiplier: 0.75 },
  { key: 'classic', label: 'Classic', multiplier: 1 },
  { key: 'grand', label: 'Grand', multiplier: 1.4 }
];

const BAG_KEY = 'maisonRougeBag';
const SAVED_KEY = 'maisonRougeSaved';
const TOP_GRID_LIMIT = 4;

let activeFilter = 'all';
let activeSort = 'default';
let visibleBouquets = [];
let quickViewBouquet = null;
let quickViewSize = 'classic';
let lastFocusedElement = null;

const TICKER_WORDS = [];
for (let i = 0; i < 6; i++) {
  TICKER_WORDS.push('Maison Rouge');
  TICKER_WORDS.push('Flower Atelier');
}

let isMobileMenuOpen = false;

function renderGlassWall() {
  const glassWall = document.getElementById('glass-wall');
  if (!glassWall) {
    return;
  }

  let html = '';
  for (let i = 0; i < 20; i++) {
    html += '<div class="glass-block"></div>';
  }
  glassWall.innerHTML = html;
}

function renderTicker() {
  const marqueeTrack = document.getElementById('marquee-track');
  if (!marqueeTrack) {
    return;
  }

  let listHtml = '';
  for (let i = 0; i < TICKER_WORDS.length; i++) {
    let wordClass = 'ticker-word ';
    if (i % 2 === 0) {
      wordClass += 'ticker-word-main';
    } else {
      wordClass += 'ticker-word-alt';
    }

    listHtml += '<li class="ticker-item">';
    listHtml += '<span class="' + wordClass + '">' + TICKER_WORDS[i] + '</span>';
    listHtml += '<span class="ticker-dot"></span>';
    listHtml += '</li>';
  }

  let trackHtml = '';
  for (let j = 0; j < 2; j++) {
    trackHtml += '<ul class="ticker-list">' + listHtml + '</ul>';
  }
  marqueeTrack.innerHTML = trackHtml;
}

function renderCollections() {
  const collectionsGrid = document.getElementById('collections-grid');
  if (!collectionsGrid) {
    return;
  }

  let html = '';
  for (let i = 0; i < COLLECTIONS.length; i++) {
    const item = COLLECTIONS[i];
    let cardClass = 'collection-card';
    let aspectClass = 'collection-aspect-tall';

    if (item.wide) {
      cardClass = 'collection-card-wide';
      aspectClass = 'collection-aspect-wide';
    }

    html += '<li class="' + cardClass + '">';
    html += '<a href="#collections" class="collection-link">';
    html += '<div class="collection-image-wrap ' + aspectClass + '">';
    html += '<img src="' + item.image + '" alt="' + item.alt + '" class="collection-image">';
    html += '<div class="collection-gradient"></div>';
    html += '<div class="collection-bar">';
    html += '<span class="collection-tag">' + item.tag + '</span>';
    html += '<span class="collection-arrow">';
    html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">';
    html += '<path d="M5 12h14"></path>';
    html += '<path d="m12 5 7 7-7 7"></path>';
    html += '</svg>';
    html += '</span>';
    html += '</div>';
    html += '</div>';
    html += '<h3 class="collection-title">' + item.title + '</h3>';
    html += '<p class="collection-subtitle">' + item.subtitle + '</p>';
    html += '</a>';
    html += '</li>';
  }

  collectionsGrid.innerHTML = html;
}

function setMobileMenu(isOpen) {
  const mobileNav = document.getElementById('mobile-nav');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  isMobileMenuOpen = isOpen;

  if (!mobileNav || !openIcon || !closeIcon) {
    return;
  }

  if (isOpen) {
    mobileNav.classList.remove('hidden');
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileNav.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

function updateRoute() {
  const mainView = document.getElementById('main-view');
  const registerView = document.getElementById('register-view');
  const cartView = document.getElementById('cart-view');
  const rawHash = window.location.hash;
  const hash = rawHash || '#top';

  if (!mainView || !registerView || !cartView) {
    return;
  }

  setMobileMenu(false);

  if (hash === '#register') {
    mainView.classList.add('hidden');
    registerView.classList.remove('hidden');
    cartView.classList.add('hidden');
    window.scrollTo(0, 0);
  } else if (hash === '#cart') {
    mainView.classList.add('hidden');
    registerView.classList.add('hidden');
    cartView.classList.remove('hidden');
    window.scrollTo(0, 0);
  } else {
    mainView.classList.remove('hidden');
    registerView.classList.add('hidden');
    cartView.classList.add('hidden');

    if (rawHash) {
      const targetId = rawHash.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView();
      }
    }
  }
}

function setupEvents() {
  const menuButton = document.getElementById('mobile-menu-btn');
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      setMobileMenu(!isMobileMenuOpen);
    });
  }

  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', function() {
      setMobileMenu(false);
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  }

  window.addEventListener('hashchange', function() {
    updateRoute();
  });
}

/* ---------- Storage helpers (bag + wishlist shared across pages) ---------- */

function readList(key) {
  let list = [];
  try {
    const saved = window.localStorage.getItem(key);
    if (saved) {
      list = JSON.parse(saved);
    }
  } catch (error) {
    list = [];
  }
  if (!Array.isArray(list)) {
    list = [];
  }
  return list;
}

function writeList(key, list) {
  try {
    window.localStorage.setItem(key, JSON.stringify(list));
  } catch (error) {
    // Storage can be unavailable in private browsing; the page still works for this visit.
  }
}

function getBouquetById(id) {
  for (let i = 0; i < BOUQUETS.length; i++) {
    if (BOUQUETS[i].id === id) {
      return BOUQUETS[i];
    }
  }
  return null;
}

function getFilterLabel(key) {
  for (let i = 0; i < FILTERS.length; i++) {
    if (FILTERS[i].key === key) {
      return FILTERS[i].label;
    }
  }
  return '';
}

function getSize(key) {
  for (let i = 0; i < SIZES.length; i++) {
    if (SIZES[i].key === key) {
      return SIZES[i];
    }
  }
  return SIZES[1];
}

function getSizedPrice(basePrice, sizeKey) {
  const size = getSize(sizeKey);
  return Math.round((basePrice * size.multiplier) / 5) * 5;
}

function isSaved(id) {
  const saved = readList(SAVED_KEY);
  for (let i = 0; i < saved.length; i++) {
    if (saved[i] === id) {
      return true;
    }
  }
  return false;
}

function toggleSaved(id) {
  const saved = readList(SAVED_KEY);
  const updated = [];
  let wasSaved = false;

  for (let i = 0; i < saved.length; i++) {
    if (saved[i] === id) {
      wasSaved = true;
    } else {
      updated.push(saved[i]);
    }
  }

  if (!wasSaved) {
    updated.push(id);
  }

  writeList(SAVED_KEY, updated);
  updateCounters();
  renderDrawer();
  return !wasSaved;
}

function addToBag(id, sizeKey) {
  const bag = readList(BAG_KEY);
  let found = false;

  for (let i = 0; i < bag.length; i++) {
    if (bag[i].id === id && bag[i].size === sizeKey) {
      bag[i].qty = bag[i].qty + 1;
      found = true;
    }
  }

  if (!found) {
    bag.push({ id: id, size: sizeKey, qty: 1 });
  }

  writeList(BAG_KEY, bag);
  updateCounters();
  renderDrawer();
}

function removeFromBag(index) {
  const bag = readList(BAG_KEY);
  const updated = [];
  for (let i = 0; i < bag.length; i++) {
    if (i !== index) {
      updated.push(bag[i]);
    }
  }
  writeList(BAG_KEY, updated);
  updateCounters();
  renderDrawer();
}

function changeQty(index, change) {
  const bag = readList(BAG_KEY);
  const updated = [];
  for (let i = 0; i < bag.length; i++) {
    if (i === index) {
      const newQty = bag[i].qty + change;
      if (newQty >= 1 && newQty <= 10) {
        bag[i].qty = newQty;
      }
    }
    updated.push(bag[i]);
  }
  writeList(BAG_KEY, updated);
  updateCounters();
  renderDrawer();
}

/* ---------- Header counters ---------- */

function setCount(elementId, count) {
  const badge = document.getElementById(elementId);
  if (!badge) {
    return;
  }
  badge.textContent = count;
  if (count > 0) {
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function updateCounters() {
  const bag = readList(BAG_KEY);
  let bagTotal = 0;
  for (let i = 0; i < bag.length; i++) {
    bagTotal += bag[i].qty;
  }
  setCount('bag-count', bagTotal);
  setCount('wishlist-count', readList(SAVED_KEY).length);
}

/* ---------- Shopping bag drawer ---------- */

function renderDrawer() {
  const itemsList = document.getElementById('drawer-items');
  const savedList = document.getElementById('drawer-saved-list');
  const savedCount = document.getElementById('drawer-saved-count');
  const totalText = document.getElementById('drawer-total');

  if (!itemsList || !savedList || !savedCount || !totalText) {
    return;
  }

  const bag = readList(BAG_KEY);
  const renderedIndexes = [];
  let html = '';
  let total = 0;

  for (let i = 0; i < bag.length; i++) {
    const bouquet = getBouquetById(bag[i].id);
    if (!bouquet) {
      continue;
    }
    renderedIndexes.push(i);
    const linePrice = getSizedPrice(bouquet.price, bag[i].size) * bag[i].qty;
    total += linePrice;

    html += '<li class="drawer-item">';
    html += '<img src="' + bouquet.image + '" alt="' + bouquet.alt + '" class="drawer-item-image ' + bouquet.crop + '">';
    html += '<div class="drawer-item-info">';
    html += '<p class="drawer-item-name">' + bouquet.name + '</p>';
    html += '<p class="drawer-item-meta">' + getSize(bag[i].size).label + ' &middot; Qty ' + bag[i].qty + '</p>';
    html += '<div class="drawer-qty">';
    html += '<button type="button" class="drawer-qty-minus">-</button>';
    html += '<span class="drawer-qty-value">' + bag[i].qty + '</span>';
    html += '<button type="button" class="drawer-qty-plus">+</button>';
    html += '</div>';
    html += '<button type="button" class="drawer-remove">Remove</button>';
    html += '</div>';
    html += '<p class="drawer-item-price">$' + linePrice + '</p>';
    html += '</li>';
  }

  if (html === '') {
    html = '<li class="drawer-empty">Your bag is quiet. Choose a bouquet to begin.</li>';
  }
  itemsList.innerHTML = html;
  totalText.textContent = '$' + total;

  const removeButtons = document.querySelectorAll('.drawer-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', function() {
      removeFromBag(renderedIndexes[i]);
    });
  }

  const minusButtons = document.querySelectorAll('.drawer-qty-minus');
  for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', function() {
      changeQty(renderedIndexes[i], -1);
    });
  }

  const plusButtons = document.querySelectorAll('.drawer-qty-plus');
  for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', function() {
      changeQty(renderedIndexes[i], 1);
    });
  }

  const saved = readList(SAVED_KEY);
  let savedHtml = '';
  for (let i = 0; i < saved.length; i++) {
    const savedBouquet = getBouquetById(saved[i]);
    if (savedBouquet) {
      savedHtml += '<li class="drawer-saved-item">' + savedBouquet.name + ' &middot; $' + savedBouquet.price + '</li>';
    }
  }
  if (savedHtml === '') {
    savedHtml = '<li class="drawer-item-meta">Tap the heart on any bouquet to save it here.</li>';
  }
  savedList.innerHTML = savedHtml;
  savedCount.textContent = saved.length;
}

function openDrawer() {
  const drawer = document.getElementById('bag-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeButton = document.getElementById('drawer-close');
  if (!drawer || !overlay) {
    return;
  }
  lastFocusedElement = document.activeElement;
  renderDrawer();
  const message = document.getElementById('drawer-message');
  if (message) {
    message.classList.add('hidden');
  }
  drawer.classList.add('open');
  overlay.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  if (closeButton) {
    closeButton.focus();
  }
}

function closeDrawer() {
  const drawer = document.getElementById('bag-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer || !overlay || !drawer.classList.contains('open')) {
    return;
  }
  drawer.classList.remove('open');
  overlay.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function checkout() {
  const message = document.getElementById('drawer-message');
  if (!message) {
    return;
  }

  const bag = readList(BAG_KEY);
  if (bag.length === 0) {
    message.textContent = 'Your bag is empty. Choose a bouquet first.';
  } else {
    writeList(BAG_KEY, []);
    updateCounters();
    renderDrawer();
    message.textContent = 'Thank you. Your order is confirmed and our atelier will contact you about delivery.';
  }
  message.classList.remove('hidden');
}

/* ---------- Collections catalog ---------- */

function renderFilterBar() {
  const filterBar = document.getElementById('filter-bar');
  if (!filterBar) {
    return;
  }

  let html = '';
  for (let i = 0; i < FILTERS.length; i++) {
    let pillClass = 'filter-pill';
    if (FILTERS[i].key === activeFilter) {
      pillClass += ' active';
    }
    html += '<button type="button" class="' + pillClass + '">' + FILTERS[i].label + '</button>';
  }
  filterBar.innerHTML = html;

  const pills = filterBar.querySelectorAll('.filter-pill');
  for (let i = 0; i < pills.length; i++) {
    pills[i].addEventListener('click', function() {
      activeFilter = FILTERS[i].key;
      updateFilterPills();
      renderCatalog();
    });
  }
}

function updateFilterPills() {
  const pills = document.querySelectorAll('.filter-pill');
  for (let i = 0; i < pills.length; i++) {
    if (FILTERS[i].key === activeFilter) {
      pills[i].classList.add('active');
    } else {
      pills[i].classList.remove('active');
    }
  }
}

function getVisibleBouquets() {
  const list = [];
  for (let i = 0; i < BOUQUETS.length; i++) {
    if (activeFilter === 'all' || BOUQUETS[i].collection === activeFilter) {
      list.push(BOUQUETS[i]);
    }
  }

  if (activeSort === 'low') {
    list.sort(function(a, b) {
      return a.price - b.price;
    });
  } else if (activeSort === 'high') {
    list.sort(function(a, b) {
      return b.price - a.price;
    });
  }

  return list;
}

function buildProductCard(bouquet) {
  let heartClass = 'product-heart';
  if (isSaved(bouquet.id)) {
    heartClass += ' active';
  }

  let html = '';
  html += '<li class="product-card">';
  html += '<div class="product-image-wrap">';
  html += '<button type="button" class="product-open">';
  html += '<img src="' + bouquet.image + '" alt="' + bouquet.alt + '" class="product-image ' + bouquet.crop + '">';
  html += '<span class="visually-hidden">Quick view ' + bouquet.name + '</span>';
  html += '</button>';
  html += '<button type="button" class="' + heartClass + '">';
  html += '<svg width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">';
  html += '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>';
  html += '</svg>';
  html += '<span class="visually-hidden">Save ' + bouquet.name + '</span>';
  html += '</button>';
  html += '</div>';
  html += '<h3 class="product-name">' + bouquet.name + '</h3>';
  html += '<p class="product-price">$' + bouquet.price + '</p>';
  html += '<button type="button" class="add-bag-btn">Add to Bag</button>';
  html += '</li>';
  return html;
}

function renderCatalog() {
  const topGrid = document.getElementById('catalog-grid-top');
  const bottomGrid = document.getElementById('catalog-grid-bottom');
  const emptyText = document.getElementById('catalog-empty');
  const countText = document.getElementById('catalog-count');

  if (!topGrid || !bottomGrid) {
    return;
  }

  visibleBouquets = getVisibleBouquets();

  let topHtml = '';
  let bottomHtml = '';
  for (let i = 0; i < visibleBouquets.length; i++) {
    if (i < TOP_GRID_LIMIT) {
      topHtml += buildProductCard(visibleBouquets[i]);
    } else {
      bottomHtml += buildProductCard(visibleBouquets[i]);
    }
  }
  topGrid.innerHTML = topHtml;
  bottomGrid.innerHTML = bottomHtml;

  if (bottomHtml === '') {
    bottomGrid.classList.add('hidden');
  } else {
    bottomGrid.classList.remove('hidden');
  }

  if (emptyText) {
    if (visibleBouquets.length === 0) {
      emptyText.classList.remove('hidden');
    } else {
      emptyText.classList.add('hidden');
    }
  }

  if (countText) {
    let word = ' bouquets';
    if (visibleBouquets.length === 1) {
      word = ' bouquet';
    }
    countText.textContent = visibleBouquets.length + word;
  }

  setupCardEvents();
}

function setupCardEvents() {
  const cards = document.querySelectorAll('.product-card');
  const hearts = document.querySelectorAll('.product-heart');

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
      openQuickView(visibleBouquets[i]);
    });
  }

  for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function(event) {
      event.stopPropagation();
      const nowSaved = toggleSaved(visibleBouquets[i].id);
      if (nowSaved) {
        hearts[i].classList.add('active');
      } else {
        hearts[i].classList.remove('active');
      }
    });
  }

  const bagButtons = document.querySelectorAll('.add-bag-btn');
  for (let i = 0; i < bagButtons.length; i++) {
    bagButtons[i].addEventListener('click', function(event) {
      event.stopPropagation();
      addToBag(visibleBouquets[i].id, 'classic');
      showAddedState(bagButtons[i]);
    });
  }
}

function showAddedState(button) {
  button.textContent = 'Added ✓';
  button.classList.add('added');
  setTimeout(function() {
    button.textContent = 'Add to Bag';
    button.classList.remove('added');
  }, 1400);
}

/* ---------- Quick-view modal ---------- */

function renderSizePills() {
  const sizeWrap = document.getElementById('qv-sizes');
  const priceText = document.getElementById('qv-price');
  if (!sizeWrap || !quickViewBouquet) {
    return;
  }

  let html = '';
  for (let i = 0; i < SIZES.length; i++) {
    let pillClass = 'size-pill';
    if (SIZES[i].key === quickViewSize) {
      pillClass += ' active';
    }
    html += '<button type="button" class="' + pillClass + '">' + SIZES[i].label + '</button>';
  }
  sizeWrap.innerHTML = html;

  const pills = sizeWrap.querySelectorAll('.size-pill');
  for (let i = 0; i < pills.length; i++) {
    pills[i].addEventListener('click', function() {
      quickViewSize = SIZES[i].key;
      renderSizePills();
    });
  }

  if (priceText) {
    priceText.textContent = '$' + getSizedPrice(quickViewBouquet.price, quickViewSize);
  }
}

function openQuickView(bouquet) {
  const modal = document.getElementById('quick-view');
  if (!modal || !bouquet) {
    return;
  }

  quickViewBouquet = bouquet;
  quickViewSize = 'classic';
  lastFocusedElement = document.activeElement;

  const image = document.getElementById('qv-image');
  image.src = bouquet.image;
  image.alt = bouquet.alt;
  image.className = 'quick-view-image ' + bouquet.crop;

  document.getElementById('qv-tag').textContent = getFilterLabel(bouquet.collection);
  document.getElementById('qv-title').textContent = bouquet.name;
  document.getElementById('qv-desc').textContent = bouquet.description;
  document.getElementById('qv-stems').textContent = bouquet.stems;

  renderSizePills();

  modal.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  document.getElementById('quick-view-close').focus();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view');
  if (!modal || modal.classList.contains('hidden')) {
    return;
  }
  modal.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

/* ---------- Shop event wiring ---------- */

function setupShopEvents() {
  const bagButton = document.getElementById('bag-btn');
  const wishlistButton = document.getElementById('wishlist-btn');
  const drawerClose = document.getElementById('drawer-close');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const sortSelect = document.getElementById('sort-select');
  const quickViewClose = document.getElementById('quick-view-close');
  const quickViewBackdrop = document.getElementById('quick-view-backdrop');
  const addButton = document.getElementById('qv-add');

  if (bagButton) {
    bagButton.addEventListener('click', function() {
      openDrawer();
    });
  }

  if (wishlistButton) {
    wishlistButton.addEventListener('click', function() {
      openDrawer();
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', function() {
      closeDrawer();
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', function() {
      closeDrawer();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      activeSort = sortSelect.value;
      renderCatalog();
    });
  }

  if (quickViewClose) {
    quickViewClose.addEventListener('click', function() {
      closeQuickView();
    });
  }

  if (quickViewBackdrop) {
    quickViewBackdrop.addEventListener('click', function() {
      closeQuickView();
    });
  }

  if (addButton) {
    addButton.addEventListener('click', function() {
      if (!quickViewBouquet) {
        return;
      }
      addToBag(quickViewBouquet.id, quickViewSize);
      closeQuickView();
      openDrawer();
    });
  }

  const checkoutButton = document.getElementById('drawer-checkout');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', function() {
      checkout();
    });
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeQuickView();
      closeDrawer();
    }
  });

  window.addEventListener('storage', function() {
    updateCounters();
    renderDrawer();
  });
}

function init() {
  renderGlassWall();
  renderTicker();
  renderCollections();
  renderFilterBar();
  renderCatalog();
  updateCounters();
  renderDrawer();
  setupEvents();
  setupShopEvents();
  updateRoute();
}

init();
