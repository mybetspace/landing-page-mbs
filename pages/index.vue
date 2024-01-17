<template>
  <Header />
      <div class="slider">
        <SliderPrincipal />
      </div>
      <Stats />

      <TransitionOnScroll>
        <About />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Features />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Testimonial />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Pricing />
      </TransitionOnScroll>
        
      <TransitionOnScroll>
        <Partners />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Mission />
      </TransitionOnScroll>
  <Footer />
</template>

<script>
import TransitionOnScroll from '~/components/TransitionOnScroll.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import SliderPrincipal from '~/components/SliderPrincipal.vue';
import Stats from '~/components/Stats.vue';
import About from '~/components/About.vue';
import Features from '~/components/Features.vue';
import Testimonial from '~/components/Testimonial.vue';
import Pricing from '~/components/Pricing.vue';
import Partners from '~/components/Partners.vue';
import Mission from '~/components/Mission.vue';


export default {
  components: {
    TransitionOnScroll,
    Header,
    Footer,
    SliderPrincipal,
    Stats,
    About,
    Features,
    Testimonial,
    Pricing,
    Partners,
    Mission,
  },}
</script>

<style scoped>
  .slider {
    width: 100%;
    height: 750px;
  }
  

  @media only screen and (max-width: 1468px) {
    .slider {
      width: 100%;
      height: 530px;
    }
  }

  @media only screen and (max-width: 1568px) {
    .slider {
      width: 100%;
      height: 570px;
    }
  }

  @media only screen and (max-width: 1368px) {
    .slider {
      width: 100%;
      height: 580px;
    }
  }

  @media only screen and (max-width: 600px) {
    .slider {
      width: 100%;
      height: 660px;
    }
  }

/*
@media (min-width: 640px) {
  body {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media (min-width: 1024px) {
  body {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
  }
*/
</style>