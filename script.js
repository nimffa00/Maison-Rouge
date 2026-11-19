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

function init() {
  renderGlassWall();
  renderTicker();
  renderCollections();
  setupEvents();
  updateRoute();
}

init();
