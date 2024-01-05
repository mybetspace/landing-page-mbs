// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Ubuntu: [400, 700] // Adicione as variantes necessárias
    },
    display: 'swap'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
