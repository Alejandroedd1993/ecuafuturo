# 📘 INSTRUCCIONES DE PROYECTO — Editorial Ecuafuturo
**Versión:** 3.0 | **Fecha:** Mayo 2026 | **Estado:** Documento único consolidado
**Reemplaza:** `instrucciones_claude_editorial.md` + `instrucciones_claude_web_ecuafuturo.md`

> Este archivo es la **única fuente de verdad** para todas las decisiones de diseño, desarrollo y contenido del proyecto Ecuafuturo. Ante cualquier contradicción con versiones anteriores, prevalece este documento.

---

## 1. IDENTIDAD DEL PROYECTO

| Atributo | Definición |
|---|---|
| **Nombre** | Editorial Ecuafuturo |
| **Tagline provisional** | *"Libros que despiertan lectores"* |
| **Tipo de editorial** | Independiente, educativa, literatura juvenil ecuatoriana |
| **País** | Ecuador |
| **Producto** | Libros de lectura y análisis literario para adolescentes de 14–16 años |
| **Diferencial competitivo** | Plataforma digital propia con tutor IA y actividades de comprensión lectora |
| **Competencia analizada** | Santillana, EDINUN, Educatemas, Don Bosco |

### Tono de marca
**Formal pero cálido + Educativo + Orientado al futuro y la tecnología.**

No corporativo-frío como Santillana. No juguetón como editorial infantil. Más cerca de una editorial académica moderna que proyecta confianza institucional y diferencial tecnológico al mismo tiempo. Piensa: Ekaré en su lado institucional + identidad de plataforma edtech latinoamericana.

### El usuario del proyecto
El desarrollador del proyecto se llama **Alejandro**, tiene conocimientos técnicos avanzados pero no es desarrollador profesional. Prefiere:
- Código completo y funcional, nunca fragmentos
- Explicaciones claras sin tecnicismos innecesarios
- Español en todas las respuestas
- Al final de cada bloque de código: una lista corta de "Próximos pasos" o "Lo que falta"

---

## 2. AUDIENCIAS DEL SITIO WEB

El sitio web atiende tres públicos en orden de prioridad:

1. **Primaria — Docentes y coordinadores académicos (B2B):** Evalúan adoptar libros para la planificación anual de sus instituciones. Quieren: catálogo claro con ficha pedagógica, vínculo con el currículo nacional, recursos descargables y contacto fácil.
2. **Secundaria — Padres de familia:** Llegan referidos por el colegio. Quieren: qué es la editorial, quién está detrás, confiabilidad.
3. **Terciaria — Estudiantes (14–16 años):** Puente hacia la plataforma de lectura digital. Quieren acceder al libro que les asignaron y a las actividades de comprensión.

---

## 3. SISTEMA DE DISEÑO

### 3.1 Paleta de colores

La paleta conserva el verde del cliente (ya presente en su identidad) pero le añade profundidad con un verde oscuro formal y un acento lima que firma el posicionamiento tecnológico.

```css
/* ============================
   PALETA ECUAFUTURO — LIGHT MODE
   ============================ */
:root {
  /* Colores de marca */
  --color-primary:        #1B5E47;  /* Verde profundo — navbar, títulos, ancla formal */
  --color-primary-soft:   #98E4A3;  /* Verde menta — acentos, badges, elementos decorativos */
  --color-bg-soft:        #EAF7EC;  /* Verde agua — fondos suaves de secciones */
  --color-accent:         #3A9BD5;  /* Azul crayola — CTAs tecnológicos, links */
  --color-accent-lime:    #C7F25E;  /* Lima eléctrico — hover states, badge "Nuevo", highlights */
  --color-secondary:      #FFFFFF;  /* Blanco */
  --color-text:           #4A5568;  /* Gris pizarra — texto de cuerpo */
  --color-text-dark:      #1A1F1B;  /* Negro verdoso — títulos y énfasis */
  --color-border:         #D1E8D5;  /* Verde claro — bordes suaves */
  --color-error:          #D94F4F;  /* Rojo — errores de formulario */
  --color-success:        #2E7D52;  /* Verde oscuro — estados de éxito */

  /* Superficies */
  --color-surface:        #FFFFFF;
  --color-surface-raised: #F4FBF5;

  /* Espaciado */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;

  /* Tipografía */
  --font-display: 'Fraunces', Georgia, serif;
  --font-body:    'DM Sans', 'Helvetica Neue', sans-serif;

  /* Tamaños de fuente */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  3.75rem;    /* 60px */

  /* Border radius */
  --radius-sm:  0.375rem;  /* 6px — chips, badges */
  --radius-md:  0.75rem;   /* 12px — tarjetas, botones */
  --radius-lg:  1.25rem;   /* 20px — secciones destacadas */
  --radius-xl:  2rem;      /* 32px — hero blob, elementos orgánicos */
  --radius-full: 9999px;   /* Píldoras */

  /* Sombras */
  --shadow-sm:   0 1px 3px rgba(27, 94, 71, 0.08);
  --shadow-md:   0 4px 16px rgba(27, 94, 71, 0.10);
  --shadow-lg:   0 8px 32px rgba(27, 94, 71, 0.14);
  --shadow-card: 0 2px 8px rgba(27, 94, 71, 0.08), 0 0 0 1px var(--color-border);

  /* Transiciones */
  --transition-fast:   150ms ease;
  --transition-base:   200ms ease;
  --transition-slow:   350ms ease;

  /* Z-index */
  --z-navbar:  100;
  --z-overlay: 200;
  --z-modal:   300;
}

/* ============================
   DARK MODE
   ============================ */
[data-theme="dark"] {
  --color-primary:        #5EC48A;  /* Verde más luminoso en oscuro */
  --color-primary-soft:   #2A6E4A;
  --color-bg-soft:        #162318;
  --color-accent:         #60B8E8;
  --color-accent-lime:    #BAEF4E;
  --color-secondary:      #0F1A14;
  --color-text:           #B8D4BF;
  --color-text-dark:      #E8F5EC;
  --color-border:         #2A3D2E;
  --color-surface:        #1A2620;
  --color-surface-raised: #213028;
}
```

**Regla de uso de colores — NUNCA hardcodear valores hexadecimales en CSS fuera de este bloque de variables.**

### 3.2 Tipografía

| Rol | Fuente | Pesos | Uso |
|---|---|---|---|
| Display / Títulos | `Fraunces` (variable font) | 400–900 | H1, H2, nombres de libros, pull quotes |
| Cuerpo / UI | `DM Sans` | 300, 400, 500, 700 | Párrafos, labels, botones, navegación |

**Carga en HTML:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**Jerarquía tipográfica:**
- H1: clamp(2.25rem, 5vw, 4rem) — Fraunces, weight 700–800
- H2: clamp(1.75rem, 3.5vw, 2.75rem) — Fraunces, weight 600
- H3: clamp(1.25rem, 2vw, 1.75rem) — Fraunces, weight 600
- Body: 1rem–1.125rem — DM Sans, weight 400, line-height 1.65
- Caption / label: 0.875rem — DM Sans, weight 500

### 3.3 Breakpoints y layout

```css
/* Mobile-first. Los estilos base son para 375px. */
/* @media (min-width: 768px)  → Tablet */
/* @media (min-width: 1024px) → Desktop */
/* @media (min-width: 1280px) → Desktop wide */
```

**Ancho máximo de contenido:** `1200px` con `padding-inline: var(--space-6)`.

---

## 4. ESTRUCTURA DE ARCHIVOS DEL PROYECTO

```
ecuafuturo-web/
├── index.html
├── catalogo.html
├── nosotros.html
├── docentes.html          ← 🆕 Recursos para docentes (guías PDF, planificaciones)
├── plataforma.html        ← 🆕 Presentación de la app de lectura con tutor IA
├── contacto.html
├── assets/
│   ├── css/
│   │   ├── base.css         ← Reset, variables CSS, tokens globales
│   │   ├── components.css   ← Componentes reutilizables
│   │   └── pages/
│   │       ├── home.css
│   │       ├── coleccion.css
│   │       ├── libro.css
│   │       ├── docentes.css
│   │       ├── plataforma.css
│   │       ├── nosotros.css
│   │       └── contacto.css
│   ├── js/
│   │   ├── main.js          ← Navbar, toggle de tema, íconos Lucide
│   │   └── newsletter.js
│   └── img/
│       ├── logo.svg
│       ├── logo-dark.svg
│       ├── portadas/
│       ├── autores/
│       └── og/              ← Imágenes para Open Graph
└── pages/
    ├── libro/
    │   └── [slug].html
    └── autor/               ← V2, preparado pero no publicado en lanzamiento
        └── [slug].html
```

### Páginas en V1 (lanzamiento)

| Página | Ruta | Prioridad | Estado |
|---|---|---|---|
| Home | `/index.html` | Alta | ⏳ Pendiente |
| Catálogo | `/catalogo.html` | Alta | ⏳ Pendiente |
| Libro individual | `/pages/libro/[slug].html` | Alta | ⏳ Pendiente |
| Recursos docentes | `/docentes.html` | Alta — diferencial B2B | ⏳ Pendiente |
| Plataforma de lectura | `/plataforma.html` | Alta — diferencial tech | ⏳ Pendiente |
| Nosotros | `/nosotros.html` | Media | ⏳ Pendiente |
| Contacto | `/contacto.html` | Media | ⏳ Pendiente |

### Páginas en V2 (post-lanzamiento)

| Página | Ruta | Notas |
|---|---|---|
| Autores | `/autores.html` | Cuando haya perfil propio de autores |
| Autor individual | `/pages/autor/[slug].html` | |
| Blog | `/blog.html` | Cuando haya cadencia editorial de contenido |

---

## 5. ARQUITECTURA DE PÁGINAS EN DETALLE

### Home (`/index.html`)
Objetivo: captar en 10 segundos qué es Ecuafuturo, para quién es y qué los diferencia.

Secciones en orden:
1. **Hero** — Propuesta de valor + CTA "Ver catálogo" + CTA "Recursos para docentes"
2. **Propuesta pedagógica** — 3 columnas: Literatura ecuatoriana / Análisis crítico / Plataforma digital
3. **Catálogo destacado** — 4–6 libros en grid, con enlace a `/catalogo.html`
4. **La plataforma** — Teaser de la app: mockup + bullet puntos clave + CTA "Conocer la plataforma"
5. **Testimonios** — (opcional si hay) Citas de docentes o instituciones
6. **CTA final** — Para instituciones interesadas en adoptar los libros

### Catálogo (`/catalogo.html`)
- Barra de búsqueda con debounce 300ms
- Filtros por chips: Nivel (8°, 9°, 10°, 1° BGU, 2° BGU), Género, Eje temático
- Grid de `.book-card` con foto portada, título, nivel, badge de género, CTA "Ver libro"
- Estado vacío `.empty-state` si no hay resultados

### Libro individual (`/pages/libro/[slug].html`)
Información mínima obligatoria:
- Portada + galería de páginas internas (2–3 imágenes)
- Ficha técnica: autor, ilustrador, ISBN, páginas, edad sugerida, nivel educativo
- Texto editorial (voz de Ecuafuturo — inspirado en Cataplum)
- Vínculo curricular (conexión con el currículo nacional ecuatoriano)
- Competencias trabajadas
- Botón "Leer fragmento en la plataforma" (enlace a la app de fase 2)
- Guía docente descargable (PDF)
- Libros relacionados

### Docentes (`/docentes.html`) 🆕
- Presentación de la propuesta pedagógica de Ecuafuturo
- Grid de guías descargables por libro (PDF)
- Planificaciones de unidad
- CTA "Solicitar adopción institucional" → formulario de contacto

### Plataforma (`/plataforma.html`) 🆕
- Hero con mockup de la app (placeholder hasta que exista)
- Descripción del tutor IA (contextualización, respuesta a preguntas)
- Descripción de los tres tipos de actividades: literal, inferencial, crítico-valorativa
- Descripción del sistema de calificación automática
- CTA "Solicitar acceso de prueba para tu institución"

### Nosotros (`/nosotros.html`)
- Historia y misión de la editorial
- Por qué literatura ecuatoriana juvenil
- Equipo (si hay fotos y nombres disponibles)
- Sello de calidad / valores editoriales

### Contacto (`/contacto.html`)
- Formulario: Nombre, Email, Institución, Ciudad, Mensaje, campo "¿Cómo nos conociste?"
- Botón WhatsApp Business con mensaje predefinido
- Datos institucionales: dirección, teléfono, email
- Mapa (opcional)

---

## 6. COMPONENTES CSS — NOMENCLATURA

Respetar siempre estos nombres. Avisar a Alejandro si se cambia alguno.

| Componente | Clase base | Elementos hijos |
|---|---|---|
| Tarjeta de libro | `.book-card` | `.book-card__cover`, `.book-card__info`, `.book-card__title`, `.book-card__level`, `.book-card__cta` |
| Tarjeta de autor | `.author-card` | `.author-card__photo`, `.author-card__name`, `.author-card__bio` |
| Tarjeta de blog | `.blog-card` | `.blog-card__image`, `.blog-card__title`, `.blog-card__date`, `.blog-card__excerpt` |
| Tarjeta de guía | `.guide-card` | `.guide-card__icon`, `.guide-card__title`, `.guide-card__book`, `.guide-card__download` |
| Botón primario | `.btn.btn-primary` | Fondo `--color-primary`, texto blanco |
| Botón acento | `.btn.btn-accent` | Fondo `--color-accent`, texto blanco — para CTAs tech |
| Botón secundario | `.btn.btn-secondary` | Borde `--color-primary`, texto `--color-primary` |
| Botón ghost | `.btn.btn-ghost` | Sin fondo, texto muted |
| Chip de filtro | `.chip` / `.chip.active` | Para filtros del catálogo |
| Badge de nivel | `.badge.badge--nivel` | Verde — nivel educativo |
| Badge de género | `.badge.badge--genre` | Azul — género literario |
| Badge nuevo | `.badge.badge--new` | Lima — libros nuevos |
| Navbar | `.navbar` / `.navbar__container` | Sticky, hamburguesa en móvil |
| Footer | `.footer` | Logo, links agrupados, redes, aviso legal |
| Hero | `.hero` / `.hero__container` | Grid 2 col desktop, 1 col móvil |
| Barra de búsqueda | `.search-bar` | Input + ícono lupa |
| Estado vacío | `.empty-state` | Catálogo sin resultados |
| Sección bento | `.bento-grid` | Grid asimétrico para Nosotros y Plataforma |
| Ficha pedagógica | `.book-spec` | Tabla de datos técnicos del libro |

---

## 7. REGLAS DE CÓDIGO (OBLIGATORIAS)

### HTML
- HTML5 semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Exactamente un `<h1>` por página, jerarquía correcta H1 → H2 → H3
- Todos los `<img>`: `alt` descriptivo, `width`, `height`, `loading="lazy"` (excepto hero: `loading="eager"`)
- Skip link en todas las páginas: `<a href="#main" class="sr-only">Saltar al contenido principal</a>`
- `<html lang="es-EC" data-theme="light">` en todas las páginas
- Comentarios de sección editables: `<!-- ✏️ EDITAR: descripción del bloque -->`

### CSS
- **NUNCA** colores hardcodeados fuera del bloque `:root`. Siempre variables CSS.
- **NUNCA** `!important` salvo casos excepcionales documentados con comentario
- CSS Grid y Flexbox nativos. Sin Bootstrap, Tailwind ni frameworks externos
- Mobile-first. Breakpoints: 768px (tablet) / 1024px (desktop) / 1280px (wide)
- Usar variables de transición: `transition: all var(--transition-base)`
- Respetar `@media (prefers-reduced-motion: reduce)` para todas las animaciones

### JavaScript
- JavaScript vanilla (ES6+). Sin jQuery, React, Vue ni frameworks en V1
- `defer` o `type="module"` en todos los `<script>`
- Debounce en inputs de búsqueda: 300ms
- Íconos: Lucide Icons via CDN — `https://unpkg.com/lucide@latest/dist/umd/lucide.js`
- Inicializar con `lucide.createIcons()` tras cargar el DOM

### Accesibilidad (WCAG 2.2 AA — no negociable)
- Todos los botones de solo ícono: `aria-label` descriptivo
- Área táctil mínima de todos los botones e íconos interactivos: **44×44px**
- Menú hamburguesa: `aria-expanded` + `aria-controls`
- Todos los `<input>` con `<label>` explícito (nunca solo placeholder)
- Foco de teclado siempre visible. **NUNCA** `outline: none` sin reemplazo visible
- Elementos decorativos: `aria-hidden="true"`
- Contraste mínimo: 4.5:1 texto normal, 3:1 texto grande
- No usar color como único indicador de estado (añadir ícono o texto)

---

## 8. SEO Y AI-READABILITY

Todas las páginas deben incluir:

```html
<!-- Meta básico -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[descripción única de la página — 150–160 caracteres]">
<meta name="robots" content="index, follow">
<link rel="canonical" href="[URL canónica]">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="[Título de la página] — Editorial Ecuafuturo">
<meta property="og:description" content="[descripción]">
<meta property="og:image" content="/assets/img/og/og-[slug].webp">
<meta property="og:url" content="[URL]">
<meta property="og:locale" content="es_EC">
<meta property="og:site_name" content="Editorial Ecuafuturo">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Título]">
<meta name="twitter:description" content="[descripción]">
<meta name="twitter:image" content="/assets/img/og/og-[slug].webp">
```

**Schema.org obligatorio (JSON-LD):**
- `Organization` en `index.html`
- `Book` en cada página de libro individual

El contenido de valor siempre en texto HTML plano, nunca solo en imágenes.

---

## 9. RENDIMIENTO (CORE WEB VITALS)

| Métrica | Objetivo |
|---|---|
| LCP | < 2.5s |
| FID / INP | < 200ms |
| CLS | < 0.1 |

- Imágenes en formato **WebP o AVIF**. `loading="lazy"` fuera del viewport inicial
- Fuentes con `font-display: swap`
- Imágenes hero con `fetchpriority="high"` y `loading="eager"`
- Sin scripts de terceros innecesarios
- CSS y JS minimizados en producción

---

## 10. CONTEXTO TÉCNICO

| Elemento | Decisión |
|---|---|
| **Editor** | VS Code |
| **Control de versiones** | Git / GitHub |
| **Deploy** | Netlify (preferido) o Vercel |
| **Servidor** | No. Sitio estático en V1 |
| **Formularios** | Netlify Forms o Formspree |
| **CMS (V2)** | A evaluar: Contentful o Sanity |
| **Dominio** | Pendiente |
| **App educativa (fase 2)** | Subdominio `app.ecuafuturo.com` — mismo sistema de diseño |

---

## 11. CONTENIDO PROVISIONAL

Usar este contenido hasta que el cliente entregue el definitivo.

| Elemento | Contenido provisional |
|---|---|
| Tagline | *"Libros que despiertan lectores"* |
| Propuesta de valor | Literatura juvenil ecuatoriana con enfoque en análisis crítico y comprensión lectora, apoyada por tecnología educativa |
| CTA primario home | "Explorar catálogo" |
| CTA docentes | "Recursos para docentes" |
| CTA plataforma | "Conocer la plataforma" |
| CTA contacto | "Hablar con nosotros" |
| WhatsApp | +593 9X XXX XXXX (placeholder) |
| Email | contacto@ecuafuturo.edu.ec (placeholder) |
| Número de libros en catálogo inicial | 4–8 libros (pendiente contenido real del cliente) |

---

## 12. INSPIRACIONES DE DISEÑO Y UX

| Referente | Qué tomamos |
|---|---|
| **Ekaré (Venezuela)** | Ficha pedagógica completa por libro: nivel, competencias, vínculo curricular |
| **Cataplum (Colombia)** | Voz editorial propia en cada libro: texto de por qué lo publicamos |
| **Limonero (Argentina)** | Previews del interior del libro + botón "Leer fragmento" |
| **Loqueleo / Santillana** | Sección de recursos para docentes: guías de lectura, planificaciones |
| **Editoriales edtech modernas** | La plataforma digital como protagonista visual, con mockup y página propia |

---

## 13. HOJA DE RUTA DEL PROYECTO

### Fase 1 — Sitio web institucional (en curso)

| Etapa | Entregable | Estado |
|---|---|---|
| **0. Decisiones de marca** | Nombre, audiencia, arquitectura, paleta base | ✅ Completada |
| **1. Identidad visual** | Logo final (3 propuestas → 1 elegida), tokens de marca, guía tipográfica | ⏳ Siguiente |
| **2. Sistema de diseño** | `base.css`, `components.css`, `design-test.html` | ⏳ Pendiente |
| **3. Wireframes** | HTML simple de las 7 páginas V1 — estructura sin estilos | ⏳ Pendiente |
| **4. Maquetación V1** | Las 7 páginas navegables, mobile-first, dark mode, WCAG 2.2 | ⏳ Pendiente |
| **5. Contenido real** | Reemplazar placeholders con libros, fotos y copy definitivo | ⏳ Requiere insumos del cliente |
| **6. SEO + Schema + performance** | Open Graph, JSON-LD, auditoría Lighthouse en verde | ⏳ Pendiente |
| **7. Deploy** | GitHub → Netlify, dominio, HTTPS, formulario activo | ⏳ Pendiente |
| **8. Puente a fase 2** | Sistema de diseño compartido + ruta hacia app educativa | ⏳ Pendiente |

### Fase 2 — Aplicación web educativa (planificación futura)

La app residirá en `app.ecuafuturo.com` y compartirá el sistema de diseño de la fase 1.

Módulos previstos:
- **Visor de texto** — lector en línea de fragmentos de libros
- **Tutor IA** — contextualización del texto, respuesta a preguntas del estudiante
- **Actividades de comprensión** — generadas con IA en tres niveles:
  - Literal (comprensión directa del texto)
  - Inferencial (deducción e interpretación)
  - Crítico-valorativa (juicio, análisis, postura personal)
- **Calificación automática** — evaluación de respuestas con IA
- **Panel docente** — seguimiento de progreso de estudiantes por libro y actividad

*La arquitectura técnica detallada de la fase 2 se documentará en un archivo separado cuando inicie esa fase.*

---

## 14. LO QUE NO SE DEBE HACER

- ❌ Usar React, Vue o Angular en V1
- ❌ Usar Bootstrap, Tailwind ni frameworks CSS externos
- ❌ Colores hardcodeados en CSS (siempre variables)
- ❌ Omitir atributos de accesibilidad en elementos interactivos
- ❌ Entregar código incompleto sin advertirlo explícitamente
- ❌ Sugerir librerías de pago o con licencias restrictivas
- ❌ Cambiar nombres de clase CSS sin avisar a Alejandro
- ❌ Crear páginas secundarias no listadas en la estructura sin consultarlo
- ❌ Animaciones que no respeten `prefers-reduced-motion`
- ❌ Contenido de valor solo en imágenes (siempre texto HTML plano)
- ❌ Respuestas en otro idioma que no sea español

---

*Próxima actualización de este documento: al completar la Etapa 1 (logo e identidad visual) con las decisiones de paleta y tipografía definitivas.*
