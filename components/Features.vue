<template>
  <section id="features" class="px-4">
    <div class="container mx-auto mb-4 lg:mb-12 mt-8 lg:mt-16">
      <h2 class="mb-8 text-xl sm:text-2xl lg:text-3xl text-center text-white font-bold">
          Funcionalidades
      </h2>

      <div class="flex flex-wrap items-center justify-center">
        <div class="mb-12 w-full lg:w-8/12 xl:flex-1">
            <NuxtImg 
              src="/images/pc.png" class="w-full" 
              alt="my bet space dashboard" 
              loading="lazy"
              width="1499"
              height="861"
            />

            <p class="text-white text-sm sm:text-base my-6 flex items-center justify-center">Experimente o poder de todas essas funcionalidades com um simples clique!</p>
            
            <div class="flex items-center justify-center">
              <nuxt-link :to="'https://app.mybetspace.com/signup'"
                class="max-sm:flex-1 block sm:inline-block text-teal-600 transition hover:text-teal-600/75"
              >
                <button class="max-sm:w-full h-12 rounded-md px-6 py-2 text-base font-semibold text-white shadow bg-orange transition-opacity hover:opacity-75 flex items-center justify-center">
                  Experimente agora
                </button>
              </nuxt-link>
            </div>            
        </div>

        <div class="w-full shrink-0 grow-0 basis-auto xl:w-6/12 max-xl:grid max-xl:grid-cols-2 max-xl:gap-3 max-md:grid-cols-1">
          <div class="mb-8 xl:mb-12 flex">
            <div class="shrink-0">
              <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="28" viewBox="0 -960 960 960" width="28">
                  <path d="m105-233-65-47 200-320 120 140 160-260 109 163q-23 1-43.5 5.5T545-539l-22-33-152 247-121-141-145 233ZM863-40 738-165q-20 14-44.5 21t-50.5 7q-75 0-127.5-52.5T463-317q0-75 52.5-127.5T643-497q75 0 127.5 52.5T823-317q0 26-7 50.5T795-221L920-97l-57 57ZM643-217q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm89-320q-19-8-39.5-13t-42.5-6l205-324 65 47-188 296Z"/>
                </svg>
              </div>
            </div>

            <div class="ml-4 grow">
              <h3 class="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold text-white w-3/3 md:w-full">Importar apostas da Betfair e White labels</h3>

              <p class="text-grayWhite max-xl:w-full w-2/3 text-sm sm:text-base text-pretty">
                Veja em tempo real no seu dashboard, todos suas apostas, lucros, prejuízos, odds e muito mais.
              </p>
            </div>
          </div>

          <div class="mb-8 xl:mb-12 flex xl:mx-20">
            <div class="shrink-0">
              <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="28" viewBox="0 -960 960 960" width="28">
                  <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/>
                </svg>
              </div>
            </div>

            <div class="ml-4 grow">
              <h3 class="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold text-white w-3/3 md:w-full">Facilidade em validar seu método</h3>

              <p class="text-grayWhite max-lg:w-full w-2/3 text-sm sm:text-base text-pretty">
                  Valide seu método de forma mais simples e rápida. Saiba exatamente em que método você é mais lucrativo e o método em que perde dinheiro.
              </p>
            </div>
          </div>

          <div class="mb-8 xl:mb-12 flex xl:mx-36">
            <div class="shrink-0">
              <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff"  height="28" viewBox="0 -960 960 960" width="28">
                  <path d="M160-160v-480h160v480H160Zm200 0v-280h160v280H360Zm280 0v-640h160v640H640Z"/>
                </svg>
              </div>
            </div>

            <div class="ml-4 grow">
              <h3 class="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold text-white w-3/3 md:w-full">Mantenha controle total de sua jornada</h3>

              <p class="text-grayWhite max-lg:w-full w-2/3 text-sm sm:text-base text-pretty md:w-full">
                Explore uma variedade de indicadores e gráficos com informações fundamentais para você ganhar dinheiro.
              </p>
            </div>
          </div>

          <div class="mb-8 xl:mb-12 flex xl:mx-36">
            <div class="shrink-0">
              <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff"  height="28" viewBox="0 -960 960 960" width="28">
                  <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/>
                </svg>
              </div>
            </div>

            <div class="ml-4 grow md:w-auto">
              <h3 class="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold text-white w-3/3 md:w-full">Apostas Colaborativas</h3>

              <p class="text-grayWhite max-lg:w-full w-2/3 text-sm sm:text-base text-pretty md:w-full">
                Amplie suas chances de sucesso ao cadastrar grupos de trabalho. Compartilhe apostas com amigos ou colegas, replicando as apostas entre os membros do grupo. Torne a experiência de apostar mais profissional e lucrativa!
              </p>
            </div>
          </div>

          <div class="mb-8 xl:mb-12 flex xl:mx-20">
            <div class="shrink-0">
              <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                  stroke="currentColor" class="h-6 w-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
            </div>

            <div class="ml-4 grow">
              <h3 class="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold text-white w-3/3 md:w-full">Aposte com inteligência</h3>

              <p class="text-grayWhite max-lg:w-full w-2/3 text-sm sm:text-base text-pretty">
                Descubra as odds dos jogos muito antes deles começarem, isso vai te ajudar no pré live. Nossa plataforma oferece insights precisos para ajudar você a apostar com estratégia e maximizar seus ganhos.
              </p>
            </div>
          </div>

          <div class="mb-8 xl:mb-12 flex">
            <div class="shrink-0">
              <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff"  height="28" viewBox="0 -960 960 960" width="28">
                  <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                </svg>
              </div>
            </div>
            <div class="ml-4 grow">
              <h3 class="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold text-white w-3/3 md:w-full">Projetos - Transforme sonhos em realidade</h3>

              <p class="text-grayWhite max-lg:w-full w-2/3 text-sm sm:text-base text-pretty">
                Crie projetos personalizados para atingir objetivos financeiros em tempo recorde. Você poderá deixa o projeto público para seus amigos acompanharem se desejar.
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</section>
</template>

