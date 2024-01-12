<template>
  <section class="bg-backgroundGrayTwo">
    <div class="mx-auto max-w-[1740px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div class="-mx-6 lg:col-span-2 lg:mx-0">
          <div id="keen-slider" class="keen-slider">
            <div class="keen-slider__slide">
              <blockquote
                class="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <img src="https://static.poder360.com.br/2020/11/elonmusk.png" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are
                      they? You know what? If we come across somebody with no arms or legs, do we
                      bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
  
            <div class="keen-slider__slide">
              <blockquote
                class="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <img src="https://static.poder360.com.br/2020/11/elonmusk.png" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are
                      they? You know what? If we come across somebody with no arms or legs, do we
                      bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>

            <div class="keen-slider__slide">
              <blockquote
                class="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <img src="https://static.poder360.com.br/2020/11/elonmusk.png" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are
                      they? You know what? If we come across somebody with no arms or legs, do we
                      bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>

            <div class="keen-slider__slide">
              <blockquote
                class="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <img src="https://static.poder360.com.br/2020/11/elonmusk.png" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are
                      they? You know what? If we come across somebody with no arms or legs, do we
                      bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
  
            <div class="keen-slider__slide">
              <blockquote
                class="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <img src="https://static.poder360.com.br/2020/11/elonmusk.png" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are
                      they? You know what? If we come across somebody with no arms or legs, do we
                      bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
  
export default {
  mounted() {
    this.$nextTick(() => {
      this.keenSlider = new KeenSlider('#keen-slider', {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 3,
              spacing: 32,
            },
          },
        },
      });

      this.startAutoplay();
    });
  },

  methods: {
    startAutoplay() {
      setInterval(() => {
        this.keenSlider.next();
      }, 3000);
    },
  },
  
};
</script>


