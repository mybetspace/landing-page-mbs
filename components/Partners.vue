<template>
  <section class="bg-backgroundGrayTwo relative z-10 overflow-hidden dark:bg-dark lg:pt-[100px] lg:pb-[100px]">
    <h2 class="my-8 text-3xl font-bold text-white text-center dark:text-white sm:text-3xl">
      White labels - Integradas
    </h2>
        <div class="my-8 mx-auto mt-8 max-w-[1420px]">
          <div ref="slider" class="keen-slider">
          <div class="keen-slider__slide number-slide7">
            <img src="~/assets/images/bolsaapostas.svg" alt="Bolsa de apostas" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide5">
            <img src="~/assets/images/fullbet.svg" alt="Full bet" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide8">
            <img src="~/assets/images/betfair.jpg" alt="betfair" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide3">
            <img src="~/assets/images/layback.svg" alt="Lay back" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide1">
            <img src="~/assets/images/levebet.svg" alt="Levebet" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide2">
            <img src="~/assets/images/apostasbf.svg" alt="Apostas bf" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide6">
            <img src="~/assets/images/betbra.svg" alt="Bet bra" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide8">
            <img src="~/assets/images/betfair.jpg" alt="betfair" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide8">
            <img src="~/assets/images/verdinhabet.svg" alt="Verdinha bet" class="ml-14 h-14" />
          </div>
          <div class="keen-slider__slide number-slide8">
            <img src="~/assets/images/apostaNow.svg" alt="Apostas now" class="ml-14 h-14" />
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
