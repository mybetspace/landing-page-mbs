// Nuxt plugin to configure Google Tag Manager

export default defineNuxtPlugin(() => {
  const { gtagId } = useRuntimeConfig().public;

  console.log('Script do GTM está sendo carregado com o ID:', gtagId);
  
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", gtagId);

  console.log('5555555555555555:', gtagId);

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true,
      },
    ],
  });
});
