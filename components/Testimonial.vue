<template>
  <section class="bg-backgroundGrayTwo">
    <div class="mx-auto max-w-[1850px] px-4 py-12 sm:px-2 lg:me-0 lg:py-16 lg:pe-0 lg:ps-2 xl:py-24">
      <h2 class="mb-14 text-center text-white text-4xl font-bold">
          Depoimentos
      </h2>
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
                      O MyBetSpace mudou minha maneira de estudar e pensar sobre trade. Quando comecei a usar descobri muito mais rápido meus erros e acertos e consegui ser lucrativo com mais rapidez!
                      Além disso, economizei mais tempo planilhando, pois a plataforma me dava todas as informações e eu só completava com os meus métodos e formas de trabalho.
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Leo Zapalá
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
                      A plataforma tem sido uma grande aliada para me ajudar a identificar as melhorias que precisam ser feitas nas minhas estratégias de “Scalping”,
                      verificação das taxas de acertos, criação de projetos e a visualizar quais as melhores equipes e ligas para criação de cronogramas da semana,
                      além de fornecer um sistema de planilha próprio que economiza o meu tempo na hora de organizar os greens e as metas do mês.
                      Logo, se você buscar um meio que otimiza o seu trabalho e economizar seu tempo a plataforma do My Bet Sapce tem sido extremamente eficiente e por esse motivo torna-se de fácil recomendação.
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Felipe Brito
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
                  &mdash; Bruno Baldisseira
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

<style>
.blockquote {
  overflow: hidden;
}
</style>


