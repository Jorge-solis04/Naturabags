# NaturaBags — Landing Page SSG

Landing page de conversión para NaturaBags: bolsas de frutas y verduras sanitizadas, listas para licuar, con entrega a domicilio en Salamanca, Guanajuato. Flujo de conversión directo a WhatsApp (`wa.me`).

## Estado Actual del Proyecto

| Item | Estado |
|---|---|
| Nuxt | 4.4.7 ✅ |
| Directorio `app/` | Existe con `app.vue` vacío |
| Script `generate` | Ya en package.json |
| Logo | `public/logonb.png` (461 KB) |
| **Faltante** | Config SSG, SEO, fuentes, layouts, componentes, CSS, Docker |

---

## Decisiones Confirmadas ✅

| Pregunta | Resolución |
|---|---|
| **WhatsApp** | `+524646526465` (número real) |
| **Imágenes de producto** | Placeholders vacíos — el usuario las agrega después |
| **Precios** | Precios de ejemplo (no finales) |
| **CSS con `~/` aliases** | Aprobado — `<style scoped src="~/assets/css/components/nombre.css">` |
| **Favicon** | El usuario lo agrega después |

---

## Arquitectura de Archivos Propuesta

```
naturabags-web/
├── app/
│   ├── app.vue                          # Shell: <NuxtLayout> + useHead global
│   ├── assets/
│   │   └── css/
│   │       ├── tokens.css               # Design tokens (custom properties)
│   │       ├── base.css                 # Reset + tipografía global + utilidades
│   │       └── components/
│   │           ├── header.css
│   │           ├── hero.css
│   │           ├── instructions.css
│   │           ├── catalog.css
│   │           ├── mission.css
│   │           ├── faq.css
│   │           ├── footer.css
│   │           └── whatsapp-fab.css
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── SectionHero.vue
│   │   ├── SectionInstructions.vue
│   │   ├── SectionCatalog.vue
│   │   ├── CatalogCard.vue
│   │   ├── SectionMission.vue
│   │   ├── SectionFaq.vue
│   │   ├── AppFooter.vue
│   │   └── WhatsappFab.vue
│   ├── composables/
│   │   └── useWhatsapp.ts               # Genera URLs wa.me con mensajes
│   ├── data/
│   │   ├── catalog.ts                   # Array de productos tipado
│   │   └── faq.ts                       # Array de preguntas tipadas
│   ├── layouts/
│   │   └── default.vue                  # Header + <slot /> + Footer + FAB
│   └── pages/
│       └── index.vue                    # Página principal (secciones)
├── public/
│   ├── logonb.png                       # Logo existente
│   ├── robots.txt                       # Existente
│   ├── img/                             # Imágenes de producto (por agregar)
│   └── favicon.svg                      # Por crear/agregar
├── nuxt.config.ts                       # Config SSG + SEO + Fuentes
├── Dockerfile
├── .dockerignore
├── nginx.conf
└── package.json
```

---

## Proposed Changes

### Fase 0 — Configuración Base

#### [MODIFY] [nuxt.config.ts](file:///home/jorge/naturabags/naturabags-web/nuxt.config.ts)

Configuración completa para SSG, SEO y fuentes:

```ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,

  modules: ['@nuxt/fonts'],

  fonts: {
    families: [
      { name: 'Quicksand', provider: 'google', weights: [600, 700] },
      { name: 'Work Sans', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es-MX' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://naturabags.com.mx' },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/base.css',
  ],
})
```

**Decisión**: `@nuxt/fonts` en lugar de `<link>` manual. Auto-descarga y self-hostea las fuentes en build-time (0 llamadas externas en runtime, mejor LCP, sin CLS por font-swap).

---

#### [MODIFY] [package.json](file:///home/jorge/naturabags/naturabags-web/package.json)

Agregar dependencia `@nuxt/fonts`:
```diff
  "dependencies": {
    "nuxt": "^4.4.7",
    "vue": "^3.5.35",
    "vue-router": "^5.1.0"
+  },
+  "devDependencies": {
+    "@nuxt/fonts": "^0.11.0"
  }
```

---

### Fase 1 — Design System (CSS Tokens + Base)

#### [NEW] [tokens.css](file:///home/jorge/naturabags/naturabags-web/app/assets/css/tokens.css)

Custom properties extraídas del DESIGN.md:

```css
:root {
  /* === Colores de marca === */
  --color-primary: #426900;
  --color-primary-container: #8cd416;
  --color-on-primary: #ffffff;
  --color-on-primary-container: #365700;

  --color-secondary: #1e6d00;
  --color-secondary-container: #99fa75;

  /* === Superficies === */
  --color-surface: #fcf9f8;
  --color-surface-soft: #F1F4E8;
  --color-surface-muted: #F2F2F2;
  --color-surface-container: #f0eded;
  --color-surface-container-high: #eae7e7;
  --color-inverse-surface: #303030;
  --color-inverse-on-surface: #f3f0ef;

  /* === Texto === */
  --color-on-surface: #1b1b1c;
  --color-text-secondary: #6B6B6B;
  --color-text-on-accent: #33381F;

  /* === Bordes === */
  --color-border-subtle: #E5E5E5;
  --color-outline: #727a63;

  /* === Error === */
  --color-error: #ba1a1a;

  /* === Tipografía === */
  --font-display: 'Quicksand', sans-serif;
  --font-body: 'Work Sans', sans-serif;

  /* === Radios === */
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;

  /* === Espaciado === */
  --space-base: 8px;
  --space-gutter: 24px;
  --container-max: 1280px;
  --margin-mobile: 20px;
  --margin-desktop: 80px;
}
```

#### [NEW] [base.css](file:///home/jorge/naturabags/naturabags-web/app/assets/css/base.css)

Reset mínimo + tipografía global + utilidades de layout:

- `box-sizing: border-box` global
- Tipografía base con `Work Sans` body, `Quicksand` headings
- Clases de tipografía (`.display-lg`, `.headline-lg`, `.body-lg`, `.label-lg`)
- `.container` con `max-width: var(--container-max)` y margin auto
- Smooth scroll (`scroll-behavior: smooth`)
- `.visually-hidden` para accesibilidad

---

### Fase 2 — Layout + Navegación

#### [NEW] [default.vue](file:///home/jorge/naturabags/naturabags-web/app/layouts/default.vue)

Layout envolvente con:
- `<AppHeader />` (sticky top)
- `<main id="main-content"><slot /></main>`
- `<AppFooter />`
- `<WhatsappFab />`

#### [NEW] [AppHeader.vue](file:///home/jorge/naturabags/naturabags-web/app/components/AppHeader.vue)

Según los mockups:
- Logo (`logonb.png`) alineado a la izquierda
- Navegación: `Catálogo` · `Misión` · `Preguntas` (anclas `#catalogo`, `#mision`, `#preguntas`)
- CTA: botón "Pedir ahora" (enlace WhatsApp) alineado a la derecha
- Borde inferior sutil `1px var(--color-border-subtle)`
- Sticky con `position: sticky; top: 0; z-index: 100`
- **Responsive**: menú hamburguesa en mobile con `<details>` nativo (0 JS)

#### [NEW] [AppFooter.vue](file:///home/jorge/naturabags/naturabags-web/app/components/AppFooter.vue)

Footer mínimo con:
- Logo + nombre de marca
- Links de navegación
- Texto legal: "© 2025 NaturaBags México. Salamanca, Guanajuato."
- Enlace WhatsApp

#### [NEW] [WhatsappFab.vue](file:///home/jorge/naturabags/naturabags-web/app/components/WhatsappFab.vue)

Botón flotante (FAB) en esquina inferior derecha:
- Ícono WhatsApp SVG inline
- `position: fixed; bottom: 24px; right: 24px`
- Fondo verde WhatsApp `#25D366`
- Enlace a `wa.me` con mensaje pre-llenado
- Sombra sutil en hover

---

### Fase 3 — Sección Hero

#### [NEW] [SectionHero.vue](file:///home/jorge/naturabags/naturabags-web/app/components/SectionHero.vue)

Según el mockup (imagen 0):

```
Semántica HTML:
<section id="hero" aria-labelledby="hero-heading">
  <div class="container hero__grid">
    <div class="hero__content">
      <span class="hero__badge">🍃 100% NATURAL · LISTO PARA LICUAR</span>
      <h1 id="hero-heading">
        NaturaBags
        <span class="hero__accent">Tu jugo saludable en segundos</span>
      </h1>
      <p>Bolsas de frutas y verduras frescas, picadas y <strong>listas para licuar</strong>...</p>
      <div class="hero__cta">
        <a href="wa.me/..." class="btn btn--primary">Pide por WhatsApp</a>
        <a href="#catalogo" class="btn btn--ghost">Ver catálogo</a>
      </div>
      <ul class="hero__features" role="list">
        <li>Solo agrega agua</li>
        <li>Cuida tu salud</li>
        <li>Sin conservadores</li>
      </ul>
    </div>
    <div class="hero__media">
      <img src="/img/hero-bag.webp" alt="..." width="600" height="600" fetchpriority="high" />
    </div>
  </div>
</section>
```

- Fondo gradiente sutil blanco → `#F1F4E8`
- Grid 2 columnas en desktop, stack en mobile
- Imagen con `fetchpriority="high"` (es LCP candidate)
- Botón primario verde `#8CD416` con texto oscuro
- Badge con chip verde claro

---

### Fase 4 — Sección Instrucciones

#### [NEW] [SectionInstructions.vue](file:///home/jorge/naturabags/naturabags-web/app/components/SectionInstructions.vue)

Según el mockup (imagen 1), sección con fondo oscuro `--color-inverse-surface`:

```
<section id="instrucciones" aria-labelledby="instructions-heading">
  <span class="section-overline">TAN FÁCIL COMO 1, 2, 3</span>
  <h2 id="instructions-heading">Tu jugo natural en menos de un minuto</h2>
  <ol class="instructions__grid" role="list">
    <li class="instruction-card">
      <span class="instruction-card__icon">📦</span>
      <h3>1. Abre tu bolsa</h3>
      <p>Vacía el contenido fresco y picado directo en tu licuadora.</p>
    </li>
    <!-- ... pasos 2 y 3 -->
  </ol>
</section>
```

- Fondo `#303030` (inverse-surface) con texto claro
- 3 tarjetas oscuras con íconos SVG verdes en círculos
- Grid 3 columnas → stack en mobile
- `<ol>` semántico (pasos ordenados)

---

### Fase 5 — Sección Catálogo

#### [NEW] [SectionCatalog.vue](file:///home/jorge/naturabags/naturabags-web/app/components/SectionCatalog.vue)
#### [NEW] [CatalogCard.vue](file:///home/jorge/naturabags/naturabags-web/app/components/CatalogCard.vue)

Según el mockup (imagen 2), grid de productos:

```
<section id="catalogo" aria-labelledby="catalog-heading">
  <h2 id="catalog-heading">Nuestros jugos</h2>
  <div class="catalog__grid">
    <CatalogCard v-for="product in products" :key="product.slug" v-bind="product" />
  </div>
</section>
```

**CatalogCard** — Semántica con `<article>`:
- Imagen del producto con badge de precio (`$59`)
- Nombre del producto (`<h3>`)
- Etiqueta "INGREDIENTES" con chips/pills
- Accordion `<details>` nativo para "Ver beneficios"
- Botón CTA "Pedir por WhatsApp" con enlace pre-llenado (`Hola, quiero pedir la bolsa Verde Detox`)

**Productos** (desde `app/data/catalog.ts`):
1. **Verde Detox** — $59 — Espinaca, Pepino, Manzana verde, Apio
2. **Energía Tropical** — $65 — Piña, Naranja, Zanahoria, Jengibre
3. **Antioxidante Rojo** — $69 — Betabel, Fresa, Frambuesa, Manzana roja

Cada producto incluye `benefits[]` para el accordion y `image` path.

---

### Fase 6 — Sección Misión

#### [NEW] [SectionMission.vue](file:///home/jorge/naturabags/naturabags-web/app/components/SectionMission.vue)

Según el mockup (imagen 3):

```
<section id="mision" aria-labelledby="mission-heading">
  <article class="mission-card">
    <span class="mission-card__icon">🌿</span>
    <span class="section-overline">NUESTRA MISIÓN</span>
    <h2 id="mission-heading">
      En NaturaBags creemos que cuidar tu salud debe ser
      <em class="text-accent">simple, delicioso y accesible.</em>
    </h2>
    <p>Por eso preparamos bolsas con frutas y verduras frescas...</p>
  </article>
</section>
```

- Tarjeta centrada con fondo gradiente sutil `white → #F1F4E8`
- Borde `1px #E5E5E5` con `border-radius: var(--radius-xl)`
- Texto centrado, acento verde en la frase clave
- Ícono SVG de hoja

---

### Fase 7 — Sección FAQ

#### [NEW] [SectionFaq.vue](file:///home/jorge/naturabags/naturabags-web/app/components/SectionFaq.vue)

Según el mockup (imagen 4), usando `<details>` nativo:

```
<section id="preguntas" aria-labelledby="faq-heading">
  <span class="section-overline">PREGUNTAS FRECUENTES</span>
  <h2 id="faq-heading">Todo lo que necesitas saber</h2>
  <div class="faq__list">
    <details v-for="item in faq" :key="item.q" class="faq-item" name="faq">
      <summary>{{ item.q }}</summary>
      <p>{{ item.a }}</p>
    </details>
  </div>
</section>
```

**Decisión clave**: `<details name="faq">` crea un grupo excluyente nativo — solo una pregunta abierta a la vez, **cero JavaScript**. Contenido indexable por buscadores y accesible con "Find in page".

**FAQ Schema.org** se inyectará como JSON-LD `FAQPage` para rich results en Google.

Preguntas (desde `app/data/faq.ts`):
1. ¿Cómo preparo mi jugo NaturaBags?
2. ¿Necesito agregar azúcar?
3. ¿Cuánto duran las bolsas?
4. ¿Las frutas y verduras están lavadas y desinfectadas?
5. ¿Cuáles son los beneficios de tomar estos jugos?
6. ¿Cómo hago mi pedido?

---

### Fase 8 — SEO + Structured Data

#### [MODIFY] [app.vue](file:///home/jorge/naturabags/naturabags-web/app/app.vue)

Inyección de meta tags globales y JSON-LD:

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'NaturaBags — Bolsas de frutas y verduras listas para licuar | Salamanca, Gto.',
  description: 'Bolsas de frutas y verduras frescas, picadas y sanitizadas, listas para licuar. Pide por WhatsApp y recibe a domicilio en Salamanca, Guanajuato.',
  ogTitle: 'NaturaBags — Tu jugo saludable en segundos',
  ogDescription: 'Frutas y verduras frescas, picadas y listas para licuar. Entrega a domicilio en Salamanca.',
  ogImage: 'https://naturabags.com.mx/img/og-image.jpg',
  ogUrl: 'https://naturabags.com.mx',
  ogType: 'website',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'FoodDeliveryService',
            '@id': 'https://naturabags.com.mx/#service',
            name: 'Naturabags',
            description: 'Bolsas de frutas y verduras sanitizadas listas para licuar a domicilio en Salamanca, Guanajuato.',
            url: 'https://naturabags.com.mx',
            telephone: '+524646526465',
            priceRange: '$$',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://naturabags.com.mx/#organization',
              name: 'Naturabags México',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Salamanca',
                addressRegion: 'Guanajuato',
                addressCountry: 'MX',
              },
            },
            areaServed: [{
              '@type': 'AdministrativeArea',
              name: 'Salamanca',
              sameAs: [
                'https://es.wikipedia.org/wiki/Salamanca_(Guanajuato)',
                'https://www.wikidata.org/wiki/Q2104843',
              ],
            }],
          },
          {
            '@type': 'FAQPage',
            mainEntity: [/* ... preguntas FAQ como Question/Answer */],
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

#### [MODIFY] [robots.txt](file:///home/jorge/naturabags/naturabags-web/public/robots.txt)

```
User-Agent: *
Disallow:

Sitemap: https://naturabags.com.mx/sitemap.xml
```

---

### Fase 9 — Composable WhatsApp

#### [NEW] [useWhatsapp.ts](file:///home/jorge/naturabags/naturabags-web/app/composables/useWhatsapp.ts)

```ts
  const PHONE = '524646526465'

export function useWhatsapp() {
  const buildUrl = (message: string) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

  const orderProduct = (name: string) =>
    buildUrl(`Hola 👋, me interesa pedir la bolsa *${name}*. ¿Tienen disponible?`)

  const generalInquiry = () =>
    buildUrl('Hola 👋, me gustaría saber más sobre NaturaBags.')

  return { buildUrl, orderProduct, generalInquiry }
}
```

Centraliza el número de teléfono y los mensajes pre-llenados en un solo lugar.

---

### Fase 10 — Docker + Nginx

#### [NEW] [Dockerfile](file:///home/jorge/naturabags/naturabags-web/Dockerfile)

Multi-stage: `node:20-alpine` → `nginx:stable-alpine`

- Stage 1: `corepack enable`, `pnpm install --frozen-lockfile`, `pnpm run generate`
- Stage 2: Copia `.output/public` a `/usr/share/nginx/html`

#### [NEW] [nginx.conf](file:///home/jorge/naturabags/naturabags-web/nginx.conf)

- `try_files $uri $uri/ /index.html`
- Cache headers para assets estáticos (1 año, immutable)
- Compresión gzip para HTML/CSS/JS/SVG

#### [NEW] [.dockerignore](file:///home/jorge/naturabags/naturabags-web/.dockerignore)

Excluye `node_modules`, `.nuxt`, `.output`, `.git`

---

## Semántica HTML — Resumen de la Jerarquía

```
<body>
  <header>                              ← AppHeader (nav, logo, CTA)
    <nav aria-label="Navegación principal">
  <main id="main-content">
    <section#hero>                      ← h1 (único en toda la página)
    <section#instrucciones>             ← h2
      <ol> → <li> × 3 con h3
    <section#catalogo>                  ← h2
      <article> × 3 con h3             ← CatalogCard
    <section#mision>                    ← h2
    <section#preguntas>                 ← h2
      <details> × 6                    ← FAQ nativas
  </main>
  <footer>                              ← AppFooter
  <a class="whatsapp-fab">              ← WhatsappFab (fixed)
</body>
```

**Un solo `<h1>`** en toda la página. Heading hierarchy: h1 → h2 → h3 sin saltos.

---

## Verification Plan

### Automated Tests

```bash
# 1. Generación estática exitosa
pnpm run generate

# 2. Verificar que el HTML se generó
ls -la .output/public/index.html

# 3. Preview local del build estático
pnpm run preview
```

### Manual Verification

1. **Lighthouse audit**: Score ≥ 95 en Performance, Accessibility, Best Practices, SEO
2. **Schema Validator**: Validar JSON-LD en https://validator.schema.org
3. **HTML Validator**: Validar en https://validator.w3.org
4. **Heading hierarchy**: Verificar con la extensión HeadingsMap que no haya saltos
5. **Mobile responsive**: Verificar en DevTools responsive mode (375px, 768px, 1280px)
6. **WhatsApp links**: Verificar que todos los `wa.me` abren correctamente
7. **Docker build**: `docker build -t naturabags . && docker run -p 8080:80 naturabags`
