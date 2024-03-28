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
        htmlAttrs: { lang: 'pt-br' },
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

        { hid: 'application-name', name: 'application-name', content: 'My Bet Space' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'My Bet Space' },
        { hid: 'author', name: 'author', content: 'My Bet Space' },
        { hid: 'copyright', name: 'copyright', content: 'My Bet Space' },
        { hid: 'creator', name: 'creator', content: 'My Bet Space' },

            // Google Search Console
        { hid: 'google-site-verification', name: 'google-site-verification', content: 'google487efc4e8cf55a11.html' },

        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'My Bet Space' },
        { hid: 'og:description', property: 'og:description', content: `My Bet Space - Plataforma para Gestão de Banca para Trade Esportivo. Aqui você encontra uma melhor gestão das suas apostas esportivas da betfair,
        aumento no lucro dos seus investimentos e praticidade na sua vida como trader.` },
        { hid: 'og:url', property: 'og:url', content: 'https://www.mybetspace.com/' },
        { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '600' },
        { hid: 'og:image:height', property: 'og:image:height', content: '315' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'My Bet Space' },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o/banners%2Flogo.png?alt=media&token=79d030aa-8480-4a34-9328-70d87aad8829' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'My Bet Space' },
        { hid: 'fb:page_id', property: 'fb:page_id', content: '108684993812345' },
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
    display: 'swap',
    download: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
