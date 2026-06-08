# Fase 0 — Configuración Base (Paso a Paso)

Estos son los pasos para dejar el proyecto listo antes de crear componentes. Cada paso incluye **qué hacer**, **por qué**, y el **comando o archivo** exacto.

---

## Paso 1 · Instalar `@nuxt/fonts`

### Qué hace
Este módulo oficial de Nuxt detecta las fuentes que usas en tu CSS (Quicksand y Work Sans), las descarga de Google Fonts en tiempo de build, y las self-hostea como archivos estáticos. Esto significa:

- **0 peticiones externas** a `fonts.googleapis.com` en producción
- **Mejor LCP** (la fuente ya viene incluida en el bundle)
- **Sin flash de texto** (FOUT) porque genera métricas de fallback automáticas

### Comando

```bash
pnpm add -D @nuxt/fonts
```

> [!NOTE]
> Se instala como `devDependency` porque solo se usa en build-time. En el HTML generado, las fuentes quedan como archivos `.woff2` estáticos.

---

## Paso 2 · Configurar `nuxt.config.ts`

### Qué hace
Este es el corazón de la configuración. Define:
- **SSG puro** (`ssr: true` es default, pero lo dejamos explícito por claridad)
- **Módulo de fuentes** para auto-descargar Quicksand y Work Sans
- **`<html lang="es-MX">`** para SEO local mexicano
- **CSS global** (tokens + base) que se inyectan en todas las páginas
- **Prerender** de la ruta `/` para generación estática

### Archivo: [nuxt.config.ts](file:///home/jorge/naturabags/naturabags-web/nuxt.config.ts)

Reemplaza **todo** el contenido actual por:

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // SSG: pre-renderiza HTML completo (no SPA vacío)
  ssr: true,

  // Módulo oficial para auto-descargar y self-hostear fuentes
  modules: ['@nuxt/fonts'],

  // Fuentes del design system (DESIGN.md)
  fonts: {
    families: [
      { name: 'Quicksand', provider: 'google', weights: [600, 700] },
      { name: 'Work Sans', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  // Head global — se aplica a TODAS las páginas
  app: {
    head: {
      htmlAttrs: { lang: 'es-MX' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'canonical', href: 'https://naturabags.com.mx' },
      ],
    },
  },

  // Nitro: motor de servidor / generador estático
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  // CSS global — se cargan en orden (tokens primero, luego base)
  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/base.css',
  ],
})
```

### Por qué cada sección importa

| Sección | Razón |
|---|---|
| `ssr: true` | Sin esto, `nuxt generate` produciría un shell vacío sin HTML. Con SSR, el HTML sale completo para que Google lo indexe |
| `modules: ['@nuxt/fonts']` | Registra el módulo que instalaste en el Paso 1 |
| `fonts.families` | Solo los pesos que realmente usas (600, 700 para Quicksand; 400, 500, 600 para Work Sans). Menos pesos = menos KB |
| `htmlAttrs: { lang: 'es-MX' }` | Google usa esto para saber que el contenido es español de México. Crítico para SEO local |
| `charset` / `viewport` | Básicos para que el HTML sea válido y responsive |
| `canonical` | Evita contenido duplicado — le dice a Google cuál es la URL autoritativa |
| `nitro.prerender.routes` | Le dice al generador estático que pre-renderice la página principal. Nuxt también descubre rutas automáticamente |
| `css: [...]` | Inyecta estos CSS en todas las páginas, en orden. `~/` apunta a `app/` en Nuxt 4 |

---

## Paso 3 · Crear la estructura de directorios

### Qué hace
Crea las carpetas vacías que necesitamos. Nuxt 4 auto-importa todo lo que esté en `components/`, `composables/`, `layouts/`, `pages/`, etc.

### Comando

```bash
mkdir -p app/assets/css/components \
         app/components \
         app/composables \
         app/data \
         app/layouts \
         app/pages \
         public/img
```

### Estructura resultante

```
app/
├── app.vue                    ← ya existe
├── assets/
│   └── css/
│       ├── tokens.css         ← Paso 4
│       ├── base.css           ← Paso 5
│       └── components/        ← CSS por componente (Fases siguientes)
├── components/                ← Componentes Vue (Fases siguientes)
├── composables/               ← useWhatsapp.ts, etc.
├── data/                      ← catalog.ts, faq.ts
├── layouts/                   ← default.vue
└── pages/                     ← index.vue
public/
└── img/                       ← Fotos de producto (las pones tú)
```

> [!TIP]
> Nuxt 4 auto-importa automáticamente:
> - `components/` → disponibles en templates sin import
> - `composables/` → disponibles en `<script setup>` sin import
> - `pages/` → genera rutas automáticamente por nombre de archivo
> - `layouts/` → disponibles con `<NuxtLayout>`

---

## Paso 4 · Crear Design Tokens (`tokens.css`)

### Qué hace
Traduce **todo** el DESIGN.md a custom properties CSS. Un solo archivo que es la **fuente de verdad** para colores, fuentes, radios y espaciado. Todos los componentes referencian estas variables en vez de valores hardcodeados.

### Archivo: `app/assets/css/tokens.css`

Crea este archivo nuevo:

```css
/* ============================================
   NATURABAGS — Design Tokens
   Fuente de verdad: DESIGN.md
   ============================================ */

:root {
  /* --- Colores de marca --- */
  --color-primary: #426900;
  --color-primary-container: #8cd416;
  --color-on-primary: #ffffff;
  --color-on-primary-container: #365700;

  --color-secondary: #1e6d00;
  --color-secondary-container: #99fa75;
  --color-on-secondary: #ffffff;

  /* --- Superficies --- */
  --color-surface: #fcf9f8;
  --color-surface-soft: #f1f4e8;
  --color-surface-muted: #f2f2f2;
  --color-surface-container: #f0eded;
  --color-surface-container-high: #eae7e7;
  --color-surface-container-lowest: #ffffff;
  --color-inverse-surface: #303030;
  --color-inverse-on-surface: #f3f0ef;

  /* --- Texto --- */
  --color-on-surface: #1b1b1c;
  --color-on-surface-variant: #424936;
  --color-text-secondary: #6b6b6b;
  --color-text-on-accent: #33381f;

  /* --- Bordes --- */
  --color-border-subtle: #e5e5e5;
  --color-outline: #727a63;
  --color-outline-variant: #c1cab0;

  /* --- Error --- */
  --color-error: #ba1a1a;
  --color-on-error: #ffffff;

  /* --- Chips / Badges --- */
  --color-accent-chip-bg: #e3f0c2;
  --color-accent-chip-text: #33381f;

  /* --- Tipografía --- */
  --font-display: 'Quicksand', sans-serif;
  --font-body: 'Work Sans', sans-serif;

  /* --- Radios (DESIGN.md: rounded) --- */
  --radius-sm: 0.25rem;   /* 4px */
  --radius: 0.5rem;        /* 8px — default para botones, inputs */
  --radius-md: 0.75rem;    /* 12px */
  --radius-lg: 1rem;       /* 16px — tarjetas */
  --radius-xl: 1.5rem;     /* 24px — tarjetas grandes, misión */
  --radius-full: 9999px;   /* pills, chips */

  /* --- Espaciado (base 8px) --- */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-10: 80px;

  --gutter: 24px;
  --container-max: 1280px;
  --margin-mobile: 20px;
  --margin-desktop: 80px;

  /* --- Sombra interactiva (DESIGN.md: solo en hover de botones) --- */
  --shadow-interactive: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

### Por qué este enfoque
- **Un solo lugar** para cambiar cualquier valor de diseño
- Si el cliente dice "el verde primario ahora es más oscuro", cambias **una línea** y toda la landing se actualiza
- Los componentes nunca usan colores hex directamente, siempre `var(--color-xxx)`

---

## Paso 5 · Crear Estilos Base (`base.css`)

### Qué hace
Reset mínimo + tipografía global + clases utilitarias del design system. Se carga después de tokens.css para que las variables ya estén disponibles.

### Archivo: `app/assets/css/base.css`

```css
/* ============================================
   NATURABAGS — Base Styles
   Reset + Tipografía + Utilidades de layout
   ============================================ */

/* --- Reset mínimo --- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* --- Documento --- */
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-on-surface);
  background-color: var(--color-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* --- Tipografía semántica --- */
h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--color-on-surface);
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul, ol {
  list-style: none;
}

/* --- Clases de tipografía (DESIGN.md) --- */
.display-lg {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
}

.headline-lg {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
}

.headline-md {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

.body-lg {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.body-md {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.label-lg {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.label-md {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

/* --- Layout --- */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--margin-mobile);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--margin-desktop);
  }
}

/* --- Overline (subtítulo verde sobre secciones) --- */
.section-overline {
  display: block;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-primary-container);
  margin-bottom: var(--space-2);
}

/* --- Acento verde para texto destacado --- */
.text-accent {
  color: var(--color-primary-container);
}

/* --- Botones base --- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 12px 24px;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  text-decoration: none;
}

.btn:hover {
  box-shadow: var(--shadow-interactive);
}

.btn:active {
  transform: scale(0.98);
}

/* Primario: fondo verde brillante, texto oscuro */
.btn--primary {
  background-color: var(--color-primary-container);
  color: var(--color-text-on-accent);
}

/* Ghost: transparente con borde */
.btn--ghost {
  background-color: transparent;
  color: var(--color-on-surface);
  border: 1px solid var(--color-border-subtle);
}

/* CTA Header: fondo oscuro, texto claro */
.btn--dark {
  background-color: var(--color-inverse-surface);
  color: var(--color-inverse-on-surface);
  border-radius: var(--radius-full);
}

/* --- Accesibilidad --- */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* --- Responsive headline --- */
@media (max-width: 767px) {
  .display-lg {
    font-size: 32px;
    line-height: 40px;
  }

  .headline-lg {
    font-size: 28px;
    line-height: 36px;
  }
}
```

### Por qué cada cosa

| Sección | Razón |
|---|---|
| **Reset** | Normaliza diferencias entre navegadores. Solo `box-sizing` + `margin/padding` reset — no necesitamos normalize.css completo |
| **`text-wrap: balance`** | Evita que los títulos tengan una palabra sola en la última línea. CSS nativo, sin JS |
| **`text-wrap: pretty`** | Mejora la distribución de texto en párrafos. Baseline 2024 |
| **Clases tipográficas** | Mapean 1:1 con el DESIGN.md. Usarlas en el HTML evita duplicar font-size/weight en cada componente |
| **`.container`** | Centra el contenido a `1280px` max con paddings responsive (20px mobile, 80px desktop) |
| **`.section-overline`** | El texto verde uppercase que aparece sobre cada sección ("PREGUNTAS FRECUENTES", "TAN FÁCIL COMO 1, 2, 3", etc.) |
| **`.btn` variantes** | 3 estilos de botón del DESIGN.md: Primary (verde), Ghost (transparente con borde), Dark (header CTA) |
| **`.visually-hidden`** | Oculta texto visualmente pero lo mantiene accesible para screen readers. Lo usaremos en íconos SVG |

---

## Paso 6 · Actualizar `robots.txt`

### Qué hace
Agregar la referencia al sitemap para que los bots de Google lo encuentren automáticamente.

### Archivo: [robots.txt](file:///home/jorge/naturabags/naturabags-web/public/robots.txt)

Reemplazar el contenido por:

```
User-Agent: *
Disallow:

Sitemap: https://naturabags.com.mx/sitemap.xml
```

> [!NOTE]
> El sitemap.xml se generará más adelante. Por ahora dejamos la referencia para no olvidarla.

---

## Paso 7 · Crear archivos Docker

Estos 3 archivos son para el deploy final. Puedes crearlos ahora y olvidarte de ellos.

### 7a · Archivo: `.dockerignore`

```
node_modules
.nuxt
.output
.git
.gitignore
.env
.env.*
```

**Por qué**: Evita copiar 200MB+ de `node_modules` y cachés al contexto de Docker. El build es mucho más rápido.

---

### 7b · Archivo: `nginx.conf`

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # SPA fallback — redirige rutas desconocidas al index
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Cache agresivo para assets estáticos (1 año)
    location ~* \.(js|css|png|jpg|jpeg|webp|avif|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Compresión gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 256;
    gzip_types
        text/html
        text/css
        text/javascript
        application/javascript
        application/json
        image/svg+xml;
}
```

**Por qué**: Nuxt genera archivos con hashes en el nombre (`_nuxt/abc123.js`), así que un cache de 1 año con `immutable` es seguro — si el contenido cambia, el hash cambia.

---

### 7c · Archivo: `Dockerfile`

```dockerfile
# === Stage 1: Build ===
FROM node:20-alpine AS build
WORKDIR /app

# Habilitar pnpm vía corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Instalar dependencias (cacheables si package.json no cambia)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar código fuente y generar sitio estático
COPY . .
RUN pnpm run generate

# === Stage 2: Servir con Nginx ===
FROM nginx:stable-alpine

# Configuración personalizada de Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el sitio estático generado
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Por qué multi-stage**:
- Stage 1 usa `node:20-alpine` (~180MB) para build
- Stage 2 usa `nginx:stable-alpine` (~25MB) para servir
- La imagen final solo tiene Nginx + archivos HTML/CSS/JS estáticos
- Resultado: imagen de ~30MB en vez de ~500MB

---

## Paso 8 · Verificar que todo funciona

Después de completar los pasos 1–5, ejecuta:

```bash
pnpm run dev
```

Deberías ver el servidor de desarrollo sin errores. La página estará vacía (aún no hay componentes), pero la consola no debe mostrar errores de CSS ni de módulos.

Para verificar el build SSG:

```bash
pnpm run generate
```

Debería generar `.output/public/index.html` exitosamente.

---

## Resumen de archivos a crear/modificar

| Acción | Archivo | Paso |
|---|---|---|
| ✏️ Modificar | `nuxt.config.ts` | 2 |
| 📁 Crear dirs | `app/assets/css/components/`, `app/components/`, etc. | 3 |
| 🆕 Crear | `app/assets/css/tokens.css` | 4 |
| 🆕 Crear | `app/assets/css/base.css` | 5 |
| ✏️ Modificar | `public/robots.txt` | 6 |
| 🆕 Crear | `.dockerignore` | 7a |
| 🆕 Crear | `nginx.conf` | 7b |
| 🆕 Crear | `Dockerfile` | 7c |
