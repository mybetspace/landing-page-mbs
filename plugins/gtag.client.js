// Nuxt plugin to configure Google Tag Manager

export default defineNuxtPlugin(() => {
  const { gtagId, DEVELOPMENT_MODE } = useRuntimeConfig().public;

  if (DEVELOPMENT_MODE !== 'true') {

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', gtagId);

    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
          async: true,
        },
      ],
    });
  } else {
    console.log('Plugin do GTM não está sendo executado em ambiente de produção');
  }
});
