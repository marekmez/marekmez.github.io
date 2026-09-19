// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css'],
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"serif"', 'Georgia', 'serif'],
            mono: ['"mono"', 'ui-monospace', 'monospace'],
          },
        },
      },
    },
  },
})