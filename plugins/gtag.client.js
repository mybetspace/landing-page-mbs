// Nuxt plugin to configure Google Tag Manager

export default defineNuxtPlugin(() => {
  const { gtagId, DEVELOPMENT_MODE } = useRuntimeConfig().public;

  if (DEVELOPMENT_MODE == 'true') return;

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  function loadGA() {
    gtag('js', new Date());
    gtag('config', gtagId);
  }

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true,
        defer: true,
        name: 'ga-script',
        onload: loadGA
      },
    ],
  });
});
