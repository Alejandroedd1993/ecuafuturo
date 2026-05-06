/* ============================================================
   CATALOGO-DATA.JS — Contenido editorial de respaldo
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const booksGrid = document.getElementById('books-grid');
  if (!booksGrid) return;

  const catalogItems = [
    {
      title: 'El Conejito Andarín',
      author: 'Margaret Wise Brown',
      nivel: 'basica',
      genre: 'cuento',
      badges: ['1ro Básica', 'Cuento'],
      icon: 'book-open',
      cover: 'catalog-cover--basica',
    },
    {
      title: 'Konrad: el niño que salió de una lata',
      author: 'Christine Nöstlinger',
      nivel: 'basica',
      genre: 'novela',
      badges: ['2do y 3ro Básica', 'Novela'],
      icon: 'package-open',
      cover: 'catalog-cover--basica',
    },
    {
      title: 'Viaje al centro de la Tierra',
      author: 'Julio Verne',
      nivel: 'basica',
      genre: 'clasicos',
      badges: ['4to y 5to Básica', 'Clásico'],
      icon: 'mountain',
      cover: 'catalog-cover--basica',
    },
    {
      title: 'Charlie y la fábrica de Chocolate',
      author: 'Roald Dahl',
      nivel: 'basica',
      genre: 'novela',
      badges: ['6to y 7mo Básica', 'Novela'],
      icon: 'candy',
      cover: 'catalog-cover--basica',
    },
    {
      title: 'Emails para el alma 1 y 2',
      author: 'Pablo Romo M.',
      nivel: 'basica-superior',
      genre: 'competencia',
      badges: ['8vo a 10mo', 'Lectura crítica'],
      icon: 'mail',
      cover: 'catalog-cover--superior',
    },
    {
      title: 'Motivos de suspenso',
      author: 'Irving, Poe, Quiroga, Christie y otros',
      nivel: 'basica-superior',
      genre: 'antologia',
      badges: ['Básica Superior', 'Antología'],
      icon: 'search',
      cover: 'catalog-cover--superior',
    },
    {
      title: 'Neuro-ortografía 1, 2 y 3',
      author: 'Estrategias lingüísticas y ejercicios RAE',
      nivel: 'ortografia',
      genre: 'competencia',
      badges: ['Ortografía', 'Competencia escrita'],
      icon: 'spell-check',
      cover: 'catalog-cover--ortografia',
    },
    {
      title: 'Pedro Páramo',
      author: 'Juan Rulfo',
      nivel: 'bachillerato',
      genre: 'novela',
      badges: ['1ro a 3ro BGU', 'Novela'],
      icon: 'landmark',
      cover: 'catalog-cover--bachillerato',
      isNew: true,
    },
    {
      title: 'La Ilíada',
      author: 'Alessandro Baricco',
      nivel: 'bachillerato',
      genre: 'clasicos',
      badges: ['Bachillerato', 'Clásico'],
      icon: 'shield',
      cover: 'catalog-cover--bachillerato',
    },
    {
      title: 'El Túnel',
      author: 'Ernesto Sábato',
      nivel: 'bachillerato',
      genre: 'novela',
      badges: ['Bachillerato', 'Novela'],
      icon: 'flashlight',
      cover: 'catalog-cover--bachillerato',
    },
    {
      title: 'Atención y Concentración 1, 2 y 3',
      author: 'Desafíos visuales y cognitivos progresivos',
      nivel: 'atencion',
      genre: 'competencia',
      badges: ['Funciones ejecutivas', 'Aula y casa'],
      image: 'assets/img/plan-lector/atencion.jpg',
    },
    {
      title: 'Motivos mágicos',
      author: 'Allende, Monterroso, García Márquez, Borges y otros',
      nivel: 'bachillerato',
      genre: 'antologia',
      badges: ['Bachillerato', 'Antología'],
      icon: 'sparkles',
      cover: 'catalog-cover--bachillerato',
    },
  ];

  booksGrid.innerHTML = catalogItems.map(item => {
    const searchTitle = normalize(item.title);
    const searchAuthor = normalize(item.author);
    const cover = item.image
      ? `<img src="${item.image}" alt="${item.title}" width="620" height="880" loading="lazy">`
      : `<div class="book-card__cover-placeholder catalog-cover ${item.cover}">
          <i data-lucide="${item.icon}" style="width:56px;height:56px;" aria-hidden="true"></i>
        </div>`;

    return `
      <article class="book-card"
        data-title="${searchTitle}"
        data-author="${searchAuthor}"
        data-nivel="${item.nivel}"
        data-genre="${item.genre}">
        <div class="book-card__cover">
          ${cover}
          ${item.isNew ? '<span class="badge badge--new book-card__new-badge">Nuevo</span>' : ''}
        </div>
        <div class="book-card__info">
          <div class="book-card__badges">
            <span class="badge badge--nivel">${item.badges[0]}</span>
            <span class="badge badge--genre">${item.badges[1]}</span>
          </div>
          <h2 class="book-card__title">${item.title}</h2>
          <p class="book-card__author">${item.author}</p>
          <a href="contacto.html" class="btn btn-secondary book-card__cta">Consultar disponibilidad</a>
        </div>
      </article>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  function normalize(value) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
});
