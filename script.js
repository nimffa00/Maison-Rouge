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
    image: 'img/collections/noir-velvet.jpg',
    alt: 'A single deep red Black Baccara rose glowing in dark, moody shadow',
    description: 'Our darkest roses, packed close like velvet folds. A brooding, romantic gesture for evenings that deserve weight.',
    stems: 'Black Baccara rose, garden rose, dark ruscus'
  },
  {
    id: 'blanc-eternel',
    name: 'Blanc Éternel',
    price: 260,
    collection: 'blanc-rouge',
    image: 'img/collections/blanc-eternel.jpg',
    alt: 'An ivory garden rose with dark leaves against a warm burgundy backdrop',
    description: 'Ivory garden roses rise against glossy dark foliage. Pure, architectural and calm, with a single line of shadow.',
    stems: 'Ivory garden rose, camellia leaf, white lisianthus'
  },
  {
    id: 'velvet-blush',
    name: 'Velvet Blush',
    price: 280,
    collection: 'seasonal',
    image: 'img/collections/velvet-blush.jpg',
    alt: 'Blush, ivory and rose-pink garden roses gathered in a clear glass vase',
    description: 'Blush and ivory garden roses gathered loosely in glass. A composition that blushes rather than shouts.',
    stems: 'Blush garden rose, ivory peony, spray rose'
  },
  {
    id: 'crimson-whisper',
    name: 'Crimson Whisper',
    price: 190,
    collection: 'occasions',
    image: 'img/collections/crimson-whisper.jpg',
    alt: 'A dew-covered crimson rose in full bloom against a soft red background',
    description: 'Crimson roses still holding the morning dew, tied with satin. Made for anniversaries and quiet promises.',
    stems: 'Red Naomi rose, spray rose, satin ribbon'
  },
  {
    id: 'light-nightmare',
    name: 'Light Nightmare',
    price: 240,
    collection: 'signature',
    image: 'img/collections/light-nightmare.jpg',
    alt: 'A sculptural magenta dahlia with layered petals against a plum backdrop',
    description: 'Sculptural dahlias with a theatrical, slightly wicked silhouette. Beautiful in candlelight.',
    stems: 'Magenta dahlia, orchid, amaranthus'
  },
  {
    id: 'ivory-ember',
    name: 'Ivory Ember',
    price: 210,
    collection: 'blanc-rouge',
    image: 'img/collections/ivory-ember.jpg',
    alt: 'An open white magnolia flower with a golden centre on a deep burgundy ground',
    description: 'Creamy magnolia petals warmed by an ember-gold heart. Gentle enough for a wedding table, bold enough for a dinner.',
    stems: 'White magnolia, ivory ranunculus, jasmine vine'
  },
  {
    id: 'golden-reverie',
    name: 'Golden Reverie',
    price: 120,
    collection: 'seasonal',
    image: 'img/collections/golden-reverie.jpg',
    alt: 'Champagne and apricot dahlias clustered together in soft light',
    description: 'A luminous posy of champagne dahlias with warm golden centres. A gift for a quiet thank-you.',
    stems: 'Champagne dahlia, apricot ranunculus, eucalyptus'
  },
  {
    id: 'rouge-prive',
    name: 'Rouge Privé',
    price: 350,
    collection: 'prive',
    image: 'img/collections/rouge-prive.jpg',
    alt: 'A hand-tied bouquet of red ranunculus, burgundy dahlias and blush roses held against ivory silk',
    description: 'Our house signature, composed privately for each client. Every Rouge Privé is unique, layered in shades of crimson and wine.',
    stems: 'Red ranunculus, burgundy dahlia, blush spray rose, astilbe'
  },
  {
    id: 'calla-sculpture',
    name: 'Calla Sculpture',
    price: 270,
    collection: 'signature',
    image: 'img/collections/calla-sculpture.jpg',
    alt: 'Blush calla lilies with long sculptural stems among dark green leaves',
    description: 'Calla lilies chosen for the curve of their stems, arranged like a quiet piece of architecture.',
    stems: 'Blush calla lily, calla leaf, papyrus'
  },
  {
    id: 'tulipe-blanche',
    name: 'Tulipe Blanche',
    price: 150,
    collection: 'blanc-rouge',
    image: 'img/collections/tulipe-blanche.jpg',
    alt: 'A bunch of white French tulips wrapped in pale paper against a warm wall',
    description: 'White French tulips that keep opening for days. Simple, graphic and endlessly elegant.',
    stems: 'White French tulip, soft paper wrap'
  },
  {
    id: 'peony-rouge',
    name: 'Peony Rouge',
    price: 290,
    collection: 'seasonal',
    image: 'img/collections/peony-rouge.jpg',
    alt: 'Lush rose-pink peonies with ruffled petals gathered closely together',
    description: 'Abundant peonies at the peak of their season, ruffled and romantic, gathered as generously as we can find them.',
    stems: 'Rose peony, blush peony, garden rose'
  },
  {
    id: 'ribbon-noir',
    name: 'Ribbon Noir',
    price: 330,
    collection: 'occasions',
    image: 'img/collections/ribbon-noir.jpg',
    alt: 'A velvet red Grand Prix rose with dark leaves in deep shadow',
    description: 'A generous dome of velvet roses, hand-tied and wrapped for the moments that need to be unforgettable.',
    stems: 'Grand Prix rose, garden rose, ribbon wrap'
  },
  {
    id: 'midnight-ranunculus',
    name: 'Midnight Ranunculus',
    price: 220,
    collection: 'prive',
    image: 'img/collections/midnight-ranunculus.jpg',
    alt: 'A dense mass of small red blooms layered like a velvet carpet',
    description: 'Hundreds of small red blooms layered in soft folds, set against deep wine foliage. A late-night arrangement, bespoke in scale.',
    stems: 'Red ranunculus, begonia, dark foliage'
  },
  {
    id: 'dahlia-blanc',
    name: 'Dahlia Blanc',
    price: 180,
    collection: 'blanc-rouge',
    image: 'img/collections/dahlia-blanc.jpg',
    alt: 'A perfectly round lilac-white dahlia against a dark background',
    description: 'One perfect café au lait dahlia, presented on its own so every petal can be admired.',
    stems: 'Café au lait dahlia, single stem'
  },
  {
    id: 'rose-atelier',
    name: 'Rose Atelier',
    price: 95,
    collection: 'occasions',
    image: 'img/collections/rose-atelier.jpg',
    alt: 'A single blush rose in a slender glass bottle against a shadowed wall',
    description: 'A single long-stem rose in a hand-blown bud vase. The smallest gesture in the atelier, and often the most remembered.',
    stems: 'Champagne rose, glass bud vase'
  },
  {
    id: 'eucalyptus-noir',
    name: 'Eucalyptus Noir',
    price: 230,
    collection: 'prive',
    image: 'img/collections/dahlia-noir.jpg',
    alt: 'A pale blush dahlia framed by silver eucalyptus leaves in low light',
    description: 'A pale dahlia set against silver eucalyptus and deep shadow. Made to order, with stems chosen at the market that morning.',
    stems: 'Blush dahlia, silver dollar eucalyptus, smoke bush'
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
const MAX_QTY = 10;

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
    html += '<a href="collections.html" class="collection-link">';
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

function readBag() {
  const saved = readList(BAG_KEY);
  const bag = [];
  for (let i = 0; i < saved.length; i++) {
    const item = saved[i];
    if (!item || !getBouquetById(item.id)) {
      continue;
    }
    let qty = parseInt(item.qty, 10);
    if (isNaN(qty) || qty < 1) {
      continue;
    }
    if (qty > MAX_QTY) {
      qty = MAX_QTY;
    }
    bag.push({ id: item.id, size: getSize(item.size).key, qty: qty });
  }
  return bag;
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
  const bag = readBag();
  let found = false;

  for (let i = 0; i < bag.length; i++) {
    if (bag[i].id === id && bag[i].size === sizeKey) {
      if (bag[i].qty < MAX_QTY) {
        bag[i].qty = bag[i].qty + 1;
      }
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
  const bag = readBag();
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
  const bag = readBag();
  const updated = [];
  for (let i = 0; i < bag.length; i++) {
    if (i === index) {
      const newQty = bag[i].qty + change;
      if (newQty < 1) {
        continue;
      }
      if (newQty <= MAX_QTY) {
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
  const bag = readBag();
  let bagTotal = 0;
  for (let i = 0; i < bag.length; i++) {
    bagTotal += bag[i].qty;
  }
  setCount('bag-count', bagTotal);

  const saved = readList(SAVED_KEY);
  let savedTotal = 0;
  for (let i = 0; i < saved.length; i++) {
    if (getBouquetById(saved[i])) {
      savedTotal += 1;
    }
  }
  setCount('wishlist-count', savedTotal);
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

  const bag = readBag();
  const renderedIndexes = [];
  let html = '';
  let total = 0;

  for (let i = 0; i < bag.length; i++) {
    const bouquet = getBouquetById(bag[i].id);
    if (!bouquet) {
      continue;
    }
    renderedIndexes.push(i);
    const unitPrice = getSizedPrice(bouquet.price, bag[i].size);
    const linePrice = unitPrice * bag[i].qty;
    total += linePrice;

    html += '<li class="drawer-item">';
    html += '<img src="' + bouquet.image + '" alt="' + bouquet.alt + '" class="drawer-item-image">';
    html += '<div class="drawer-item-info">';
    html += '<p class="drawer-item-name">' + bouquet.name + '</p>';
    html += '<p class="drawer-item-meta">' + getSize(bag[i].size).label + ' &middot; $' + unitPrice + ' each</p>';
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

  const removeButtons = itemsList.querySelectorAll('.drawer-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', function() {
      removeFromBag(renderedIndexes[i]);
    });
  }

  const minusButtons = itemsList.querySelectorAll('.drawer-qty-minus');
  for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', function() {
      changeQty(renderedIndexes[i], -1);
    });
  }

  const plusButtons = itemsList.querySelectorAll('.drawer-qty-plus');
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

  const bag = readBag();
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
  html += '<img src="' + bouquet.image + '" alt="' + bouquet.alt + '" class="product-image" loading="lazy" width="900" height="1125">';
  html += '<span class="product-quick">Quick view</span>';
  html += '<span class="visually-hidden">Quick view ' + bouquet.name + '</span>';
  html += '</button>';
  html += '<button type="button" class="' + heartClass + '">';
  html += '<svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">';
  html += '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>';
  html += '</svg>';
  html += '<span class="visually-hidden">Save ' + bouquet.name + '</span>';
  html += '</button>';
  html += '</div>';
  html += '<div class="product-info">';
  html += '<p class="product-tag">' + getFilterLabel(bouquet.collection) + '</p>';
  html += '<div class="product-row">';
  html += '<h3 class="product-name">' + bouquet.name + '</h3>';
  html += '<p class="product-price">$' + bouquet.price + '</p>';
  html += '</div>';
  html += '<button type="button" class="add-bag-btn">Add to Bag</button>';
  html += '</div>';
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
  if (image) {
    image.src = bouquet.image;
    image.alt = bouquet.alt;
    image.className = 'quick-view-image';
  }

  setText('qv-tag', getFilterLabel(bouquet.collection));
  setText('qv-title', bouquet.name);
  setText('qv-desc', bouquet.description);
  setText('qv-stems', bouquet.stems);

  renderSizePills();

  modal.classList.remove('hidden');
  document.body.classList.add('no-scroll');

  const closeButton = document.getElementById('quick-view-close');
  if (closeButton) {
    closeButton.focus();
  }
}

function setText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
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
    renderCatalog();
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
