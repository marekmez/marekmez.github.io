import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'nuxt-gtag', '@nuxtjs/sitemap'],
  site: {
    url: 'https://marekmez.github.io',
    name: 'Marek Sinagl',
  },
  sitemap: {
    // Image discovery drops the GitHub Pages base path from absolute URLs.
    discoverImages: false,
  },
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Marek Sinagl — Product Engineer + Architect',
      link: [
        // Basic favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        // Standard sizes
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },

        // Apple devices
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },

        // Android devices
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      ],
      meta: [
        // Theme colors for mobile browsers
        { name: 'theme-color', content: '#000000' },
        { name: 'msapplication-TileColor', content: '#000000' },
        // Page description
        {
          name: 'description',
          content:
            'Portfolio of Marek Sinagl, an architect and product engineer working across software, computational design, real-time collaboration, and long-term digital products.',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  gtag: {
    id: 'G-4QVYKL1K8G',
  },
})
