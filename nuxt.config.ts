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
          content: 'A My Bet Space ajuda traders esportivos a organizar a banca, validar métodos e economizar tempo com sincronização de apostas. Teste grátis por 7 dias.',
        },
        { hid: 'application-name', name: 'application-name', content: 'My Bet Space' },
        { hid: 'google-site-verification',  name: 'google-site-verification', content: 'QTTPZMIxYBjOmiLkicmK7M7YvSw7SOV3TKo3lU-3xuo' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'My Bet Space' },
        { hid: 'author', name: 'author', content: 'My Bet Space' },
        { hid: 'copyright', name: 'copyright', content: 'My Bet Space' },
        { hid: 'creator', name: 'creator', content: 'My Bet Space' },

            // Google Search Console
        
        // Diretrizes para crawlers (inclui IA)
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'ai-content-type', content: 'informational' },

        // Google Search Console

        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'Como a My Bet Space melhora sua gestão de banca no trade esportivo?' },
        { hid: 'og:description', property: 'og:description', content: 'A My Bet Space automatiza sua gestão de banca, importa apostas da Betfair em tempo real e valida métodos rapidamente. Teste grátis por 7 dias.' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.mybetspace.com/' },
        { hid: 'og:image', property: 'og:image', content: '/images/banner1.jpg' },
        { hid: 'og:image:width', property: 'og:image:width', content: '600' },
        { hid: 'og:image:height', property: 'og:image:height', content: '315' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'Dashboard My Bet Space - Plataforma de gestão de banca para trade esportivo' },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
        { 
          hid: 'og:image:secure_url', 
          property: 'og:image:secure_url', 
          content: 'https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o/banners%2Flogo.png?alt=media&token=79d030aa-8480-4a34-9328-70d87aad8829' 
        },
        { hid: 'fb:page_id', property: 'fb:page_id', content: '108684993812345' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Como a My Bet Space melhora sua gestão de banca no trade esportivo?' },
        { name: 'twitter:description', content: 'Organize sua banca, valide métodos e economize tempo com sincronização de apostas. Teste grátis por 7 dias.' },
        { name: 'twitter:image', content: 'https://www.mybetspace.com/images/banner1.jpg' },
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
            "@graph": [
              {
                "@type": "Organization",
                "name": "My Bet Space",
                "url": "https://www.mybetspace.com/",
                "logo": "https://www.mybetspace.com/images/logo.png",
                "description": "Plataforma profissional de gestão de banca para trade esportivo",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": "https://t.me/MyBetSpacebot"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Florianópolis",
                  "addressRegion": "SC",
                  "addressCountry": "BR"
                }
              },
              {
                "@type": "WebSite",
                "name": "My Bet Space",
                "url": "https://www.mybetspace.com/",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.mybetspace.com/busca?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "O que é gestão de banca e por que é importante no trade esportivo?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Gestão de banca é o controle sistemático do seu capital de apostas, definindo quanto investir em cada operação baseado no risco e potencial retorno. É fundamental para manter consistência, evitar quebrar e maximizar lucros no longo prazo."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Como a My Bet Space automatiza a importação de apostas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nossa plataforma se conecta diretamente com APIs da Betfair e White Labels de exchanges(Bolsa de apostas, Odd Justa, FulltBet, BetBra) , sincronizando automaticamente todas suas apostas, odds, resultados e dados do que operou."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quanto tempo leva para validar um método de trade com a plataforma?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Isso depende muito do volume de apostas, mas com nossa plataforma você pode validar métodos muito mais rápido, comparado aos meses que levaria com planilhas tradicionais. Os indicadores automáticos mostram facilmente onde você está ganhando ou perdendo dinheiro."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Posso usar a My Bet Space com qualquer casa de apostas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim! Além da importação automática da Betfair e White Labels de exchanges integradas(Bolsa de apostas, Odd Justa, FulltBet, BetBra), você pode adicionar apostas de forma semi automatica de qualquer casa de apostas do mercado. A plataforma foi desenvolvida para ser compatível com todos os apostadores sejam traderes ou punters."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quais indicadores e relatórios a plataforma oferece?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oferecemos indicadores completos, para analisar onde você perde ou ganha em cada cenário, análise por método, odds, esporte, mercado, período, até por dia da semana. Relatórios detalhados mostram performance por estratégia, permitindo identificar rapidamente os métodos que você tem mais potencial para ser lucrativo."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Como funciona o período de teste gratuito?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Todos os novos usuários têm direito a 7 dias gratuitos com acesso completo a todas as funcionalidades da plataforma. Não é necessário cartão de crédito para começar o teste. Você pode explorar todos os recursos sem qualquer compromisso, se liga, seguidamente tem promoções no nosso instagram."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "A plataforma é segura? Como protegem meus dados?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Utilizamos criptografia de nível bancário e seguimos os mais rigorosos protocolos de segurança, somos autorizados e certificados pela Betfair,Bolsa de Apostas, Odd Justa, FulltBet, BetBra. Seus dados são armazenados em servidores seguros na nuvem e nunca compartilhados com terceiros. Cumprimos todas as normas de proteção de dados."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Posso cancelar minha assinatura a qualquer momento?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim, você pode cancelar sua assinatura a qualquer momento através da própria plataforma ou entrando em contato conosco. Não há taxas de cancelamento, multas contratuais ou períodos de fidelidade obrigatórios."
                    }
                  }
                ]
              }
            ]
          })
        }
      ],
    },
    
  },

  devtools: { enabled: true },

  image: {
    provider: 'ipx',
    providers: {
      firebase: {
        name: 'firebase',
        provider: '~/providers/firebase.ts',
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
