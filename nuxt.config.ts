// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],

  runtimeConfig: {
    public: {
      gtagId: process.env.GTAG_ID || 'G-DYMJG8L6XZ',
      DEVELOPMENT_MODE: process.env.DEVELOPMENT_MODE,
    }
  },

  plugins: [
    '~/plugins/gtag.client.js',
  ],
  app: {
    head: {
      title:
        'My Bet Space - Plataforma para Gestão de Banca para Trade Esportivo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: `My Bet Space - Plataforma para Gestão de Banca para Trade Esportivo. Aqui você encontra uma melhor gestão das suas apostas esportivas da betfair,
          aumento no lucro dos seus investimentos e praticidade na sua vida como trader.`,
        },
        {
          property: 'og:title',
          content: `My Bet Space - Plataforma para Gestão de Banca para Trade Esportivo. Aqui você encontra uma melhor gestão das suas apostas esportivas da betfair,
          aumento no lucro dos seus investimentos e praticidade na sua vida como trader.`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],

  googleFonts: {
    families: {
      Ubuntu: [400, 700]
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
