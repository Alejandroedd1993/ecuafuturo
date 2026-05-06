/* ============================================================
   CATALOGO.JS — Filtros y búsqueda con debounce
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.getElementById('search-input');
  const filterChips = document.querySelectorAll('.chip[data-filter]');
  const booksGrid = document.getElementById('books-grid');
  const emptyState = document.getElementById('empty-state');
  const countDisplay = document.getElementById('books-count');

  if (!booksGrid) return;

  const allBooks = Array.from(booksGrid.querySelectorAll('.book-card'));

  let activeFilters = {
    nivel: null,
    genre: null,
  };
  let searchQuery = '';

  function normalize(value) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // ============================
  // DEBOUNCE
  // ============================
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  // ============================
  // FILTRAR LIBROS
  // ============================
  function filterBooks() {
    let visible = 0;

    allBooks.forEach(card => {
      const title = (card.dataset.title || '').toLowerCase();
      const author = (card.dataset.author || '').toLowerCase();
      const nivel = card.dataset.nivel || '';
      const genre = card.dataset.genre || '';

      const matchSearch = !searchQuery ||
        title.includes(searchQuery) ||
        author.includes(searchQuery);

      const matchNivel = !activeFilters.nivel || nivel === activeFilters.nivel;
      const matchGenre = !activeFilters.genre || genre === activeFilters.genre;

      const show = matchSearch && matchNivel && matchGenre;

      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (countDisplay) {
      countDisplay.textContent = `${visible} coleccion${visible !== 1 ? 'es' : ''}`;
    }

    if (emptyState) {
      emptyState.style.display = visible === 0 ? 'flex' : 'none';
    }
  }

  // ============================
  // BÚSQUEDA
  // ============================
  if (searchInput) {
    const onSearch = debounce(e => {
      searchQuery = normalize(e.target.value.trim());
      filterBooks();
    }, 300);

    searchInput.addEventListener('input', onSearch);
  }

  // ============================
  // CHIPS DE FILTRO
  // ============================
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filterType = chip.dataset.filterType;
      const filterValue = chip.dataset.filter;

      // Quitar activo de chips del mismo grupo
      document.querySelectorAll(`.chip[data-filter-type="${filterType}"]`).forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });

      // Si ya estaba activo, desactivar (toggle)
      if (activeFilters[filterType] === filterValue) {
        activeFilters[filterType] = null;
      } else {
        activeFilters[filterType] = filterValue;
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
      }

      filterBooks();
    });

    chip.setAttribute('aria-pressed', 'false');
  });

  // Mostrar conteo inicial
  filterBooks();
});
