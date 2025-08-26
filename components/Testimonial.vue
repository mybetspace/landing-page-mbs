<template>
  <section class="bg-backgroundGrayTwo overflow-hidden px-4">
    <div class="mx-auto py-8 lg:py-12 xl:py-16 sm:px-2 lg:me-0 lg:pe-0 lg:ps-2">
      <h2 class="mb-8 text-xl sm:text-2xl lg:text-3xl text-center text-white font-bold">
          Depoimentos
      </h2>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div class="-mx-6 lg:col-span-2 lg:mx-0">
          <div id="keen-slider" class="keen-slider">
            <div class="keen-slider__slide">
              <blockquote
                class="flex h-full flex-col gap-2 p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <NuxtImg
                      src="/images/zapala.png"
                      alt="Foto de Leo Zapalá - Trader que usa My Bet Space" 
                      class="mt-4 rounded-full h-12"
                      loading="lazy"
                    />
  
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
                class="flex h-full flex-col gap-2 p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <NuxtImg 
                      src="/images/brito.png" 
                      alt="Foto de Felipe Brito - Cliente My Bet Space especialista em scalping" 
                      class="mt-4 rounded-full h-12"
                      loading="lazy"
                    />
  
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
                class="flex h-full flex-col gap-2 p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <NuxtImg
                      src="/images/bruno_baldisseira.png"  
                      alt="Foto de Bruno Baldisseira - Usuário My Bet Space há mais de 1 ano" 
                      class="mt-4 rounded-full h-12"
                      loading="lazy"
                    />
  
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
                class="flex h-full flex-col gap-2 p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="mt-4">
                    <NuxtImg
                      src="/images/paulinho.png"
                      alt="Foto de Paulinho - Cliente satisfeito com My Bet Space" 
                      class="mt-4 rounded-full h-12"
                      loading="lazy"
                    />
  
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


