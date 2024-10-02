// Nuxt plugin to configure Google Tag Manager

export default defineNuxtPlugin(() => {
  const { gtagId, secondGtagId, DEVELOPMENT_MODE } = useRuntimeConfig().public

  if (DEVELOPMENT_MODE === 'true') return

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true,
        name: 'ga-script',
        type: "text/javascript"
      },
      { 
        children: `window.dataLayer = window.dataLayer || [];function gtag() {window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gtagId}', {transport_type: 'beacon'})`,
        type: "text/javascript"
      },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${secondGtagId}`,
        async: true,
        name: 'ga-script-2',
        type: "text/javascript"
      },
      { 
        children: `window.dataLayer = window.dataLayer || [];gtag('config', '${secondGtagId}', {transport_type: 'beacon'})`,
        type: "text/javascript"
      }
    ],
  })
})
