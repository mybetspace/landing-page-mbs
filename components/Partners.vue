<template>
  <section class="bg-backgroundGrayTwo relative z-10 overflow-hidden dark:bg-dark lg:pt-[100px] lg:pb-[100px]">
    <h2 class="my-8 text-3xl font-bold text-white text-center dark:text-white sm:text-3xl">
      White labels - Integradas
    </h2>
    <div class="my-8 mx-auto mt-8 max-w-[1420px]">
    <div ref="slider" class="keen-slider">
      <div class="keen-slider__slide number-slide1">
        <NuxtImg src="/images/bolsaapostas.svg" alt="Logo Bolsa de Apostas - White label integrada ao My Bet Space" class="ml-14 h-14" loading="lazy" />
      </div>
      <div class="keen-slider__slide number-slide2">
        <NuxtImg src="/images/fullbet.svg" alt="Logo FullBet - Casa de apostas integrada com My Bet Space" class="ml-14 h-14" loading="lazy" />
      </div>
      <div class="keen-slider__slide number-slide3">
        <NuxtImg src="/images/betfair.jpg" alt="Logo Betfair - Exchange de apostas principal integrada ao My Bet Space" class="ml-14 h-14" loading="lazy" />
      </div>
      <div class="keen-slider__slide number-slide4">
        <NuxtImg src="/images/betbra.svg" alt="Logo BetBra - White label brasileira integrada ao My Bet Space" class="ml-14 h-14" loading="lazy" />
      </div>
      <div class="keen-slider__slide number-slide5">
        <NuxtImg src="/images/verdinhabet.svg" alt="Logo VerdinhaBet - Casa de apostas integrada com My Bet Space" class="ml-14 h-14" loading="lazy" />
      </div>
      <div class="keen-slider__slide number-slide6">
        <NuxtImg src="/images/oddjusta.png" alt="Logo OddJusta - Plataforma de apostas integrada ao My Bet Space" class="ml-14 h-14" loading="lazy" />
      </div>
      <div class="keen-slider__slide number-slide7">
        <NuxtImg src="/images/betfair.jpg" alt="Logo Betfair - Exchange de apostas principal integrada ao My Bet Space" class="ml-14 h-14" loading="lazy" />
      </div>
    </div>
  </div>
    </section>
</template>
<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

function enableAutoplay(slider) {
  setInterval(() => {
    slider.next();
  }, 1500); 
} 

export default {
  name: "Slider",
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider,{
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 8,
      },
      breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 4,
              spacing: 8,
            },
          },
        },
      
    });
    enableAutoplay(this.slider);
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  }
};
</script>
