/* ============================================================
   MAIN.JS — Editorial Ecuafuturo
   Navbar, toggle de tema, íconos Lucide
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================
  // LUCIDE ICONS
  // ============================
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ============================
  // TEMA CLARO / OSCURO
  // ============================
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'ecuafuturo-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
      const iconEl = themeToggle.querySelector('[data-lucide]');
      if (iconEl) {
        iconEl.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    }
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ============================
  // NAVBAR HAMBURGUESA
  // ============================
  const hamburger = document.getElementById('navbar-hamburger');
  const mobileMenu = document.getElementById('navbar-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }

  // ============================
  // NAVBAR SCROLL SOMBRA
  // ============================
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const updateNavbar = () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = 'var(--shadow-md)';
      } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
      }
    };
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

  // ============================
  // REVEAL PROGRESIVO
  // ============================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll(
    '.section-header, .pillar-card, .book-card, .platform-teaser, .route-card, .feature-card, .activity-card, .ia-feature, .mision-vision__card, .valor-item, .advisor-item, .nivel-tile, .complementaria-tile, .coleccion-stat, .nivel-section, .libro-card, .motivo-card, .libro-destacado'
  );

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach((el, index) => {
      el.classList.add('reveal-item');
      el.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    revealTargets.forEach(el => revealObserver.observe(el));
  }

  // ============================
  // MARCAR PÁGINA ACTIVA EN NAVBAR
  // ============================
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = new URL(href, window.location.href).pathname;
    if (linkPath === currentPath || (currentPath.endsWith('/') && linkPath === '/index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

});
