<template>
  <Header />

  <Banner />

  <Main />

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
import Main from '~/components/Main.vue';
import Banner from '~/components/Banner.vue';
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
    Banner,
    Stats,
    About,
    Features,
    Testimonial,
    Pricing,
    Partners,
    Mission,
  },
   setup() {
        onMounted(() => {
            const initTelegramWidget = () => {
                const script = document.createElement("script");
                script.src = "https://cdn.pulse.is/livechat/loader.js";
                script.dataset.liveChatId = "6844812f0b3e7b98900e5158";
                script.async = true;
                document.body.appendChild(script);
            };

            initTelegramWidget();
        });
    },
}
</script>

<style scoped>
</style>