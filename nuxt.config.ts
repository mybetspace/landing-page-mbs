export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],

  runtimeConfig: {
    public: {
      gtagId: process.env.GTAG_ID || 'G-DYMJG8L6XZ',
      googleAdsId: process.env.GOOGLE_ADS_ID || 'AW-16721861339',
      DEVELOPMENT_MODE: process.env.DEVELOPMENT_MODE,
    }
  },

  plugins: [
    '~/plugins/gtag.client.js',
  ],

  app: {
    head: {
      title:
        'My Bet Space - Melhor plataforma de Gestão de Banca para trade esportivo',
        htmlAttrs: { lang: 'pt-br' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: `A melhor plataforma para gestão de banca de apostas esportivas, 
          aumente muito mais seus lucros e traga praticidade para sua vida como trader`,
        },
        { hid: 'application-name', name: 'application-name', content: 'My Bet Space' },
        { hid: 'google-site-verification',  name: 'google-site-verification', content: 'QTTPZMIxYBjOmiLkicmK7M7YvSw7SOV3TKo3lU-3xuo' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'My Bet Space' },
        { hid: 'author', name: 'author', content: 'My Bet Space' },
        { hid: 'copyright', name: 'copyright', content: 'My Bet Space' },
        { hid: 'creator', name: 'creator', content: 'My Bet Space' },

            // Google Search Console
        { hid: 'google-site-verification', name: 'google-site-verification', content: 'google487efc4e8cf55a11.html' },

        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'My Bet Space - Melhor plataforma de gestão de banca' },
        { hid: 'og:description', property: 'og:description', content: `A melhor plataforma para gestão de banca de apostas esportivas, 
          aumentar seus lucros e trazer praticidade para sua vida como trader`, },
        { hid: 'og:url', property: 'og:url', content: 'https://www.mybetspace.com/' },
        { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '600' },
        { hid: 'og:image:height', property: 'og:image:height', content: '315' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'My Bet Space' },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
        { 
          hid: 'og:image:secure_url', 
          property: 'og:image:secure_url', 
          content: 'https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o/banners%2Flogo.png?alt=media&token=79d030aa-8480-4a34-9328-70d87aad8829' 
        },
        { hid: 'fb:page_id', property: 'fb:page_id', content: '108684993812345' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        {
          rel: 'canonical',
          href: 'https://www.mybetspace.com/',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "My Bet Space",
            "url": "https://www.mybetspace.com/",
          })
        }
      ],
    },
    
  },

  devtools: { enabled: true },

  image: {
    providers: {
      firebase: {
        name: 'firebase',
        provider: '~/providers/firebase.ts', // Path to your custom provider
        options: {
          baseURL: 'https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o',
        }
      }
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  googleFonts: {
    families: {
      Ubuntu: [400, 700]
    },
    display: 'swap',
    download: false,
    preload: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-09-22',
})
