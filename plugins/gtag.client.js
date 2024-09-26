// Nuxt plugin to configure Google Tag Manager

export default defineNuxtPlugin(() => {
  const { gtagId, DEVELOPMENT_MODE } = useRuntimeConfig().public
  
  if (DEVELOPMENT_MODE === 'true') return

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true,
        defer: true,
        name: 'ga-script',
      },
      { 
        children: `
          const gaScript = document.querySelector('script[name="ga-script"]')

          if (gaScript) {
            window.dataLayer = window.dataLayer || [];
  
            function gtag() {
              window.dataLayer.push(arguments);
            }
  
            gtag('js', new Date());
            gtag('config', '${gtagId}');
          }
        `,
       }
    ],
  })
})
