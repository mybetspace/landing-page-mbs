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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o/banners%2Fzapala.png?alt=media&token=cce21c26-0336-4c9c-b744-f2b230aaf5de" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      O My Bet Space mudou minha maneira de estudar e pensar sobre trade. Quando comecei a usar descobri muito mais rápido meus erros e acertos e consegui ser lucrativo com mais rapidez!
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o/banners%2Fbrito.png?alt=media&token=f8e19ba8-2a2d-4b6b-98c6-9ff43e3ff005" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      A plataforma tem sido uma grande aliada para me ajudar a identificar as melhorias que precisam ser feitas nas minhas estratégias de “Scalping”,
                      verificação das taxas de acertos, criação de projetos e a visualizar quais as melhores equipes e ligas para criação de cronogramas da semana,
                      além de fornecer um sistema de planilha próprio que economiza o meu tempo na hora de organizar os greens e as metas do mês.
                      My Bet Sapce tem sido extremamente eficiente e por esse motivo torna-se de fácil recomendação.
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o/banners%2Fbruno%20baldisseira.png?alt=media&token=837fda27-f1dc-4ff7-95af-55664d0b235c" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      Uso a plataforma há mais ou menos um ano, e o único problema foi não ter começado a usar ela antes,
                      com ela consigo saber todos os relatórios das minhas apostas, onde ganho, onde perco, minha evolução desde que comecei…
                      Fora o tempo que ela nos poupa de não precisar ficar anotando tudo que fazemos nas retrógradas planilhas convencionais.
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mybetspace.appspot.com/o/banners%2Fpaulinho3.png?alt=media&token=9976cb7e-d914-438e-b591-ecfad24e197f" alt="" class="mt-4 rounded-full h-12">
  
                    <p class="mt-4 leading-relaxed text-white">
                      My Bet Space revolucionou minha experiência com a anotação de apostas e gestão de banca, eliminando planilhas de Excel.
                      Sempre à frente com inovações e atento aos feedbacks dos clientes, é a escolha definitiva para quem busca praticidade e qualidade.
                    </p>
                  </div>
                </div>
  
                <footer class="mt-4 text-sm font-medium text-gray sm:mt-6">
                  &mdash; Paulinho
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
      }, 5000);
    },
  },
  
};
</script>

<style>
.blockquote {
  overflow: hidden;
}
</style>


