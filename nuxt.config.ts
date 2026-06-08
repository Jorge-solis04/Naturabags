// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // SSG: pre-renderiza HTML completo (no SPA vacío)
  ssr: true,

  // Módulo oficial para auto-descargar y self-hostear fuentes
  modules: ['@nuxt/fonts', '@nuxt/icon'],

  // Fuentes del design system seleccionadas por el usuario
  fonts: {
    families: [
      { name: 'Agbalumo', provider: 'google', weights: [400] },
      { name: 'Coiny', provider: 'google', weights: [400] },
      { name: 'Geist', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Merriweather Sans', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Golos Text', provider: 'google', weights: [300, 400, 500, 600, 700] },
    ],
  },

  // Iconos: bundling local y client-side para evitar peticiones HTTP en dev y producción
  icon: {
    provider: 'none',
    serverBundle: {
      collections: ['lucide', 'mdi']
    },
    clientBundle: {
      scan: true
    }
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