<template>
  <section class="relative items-center w-full py-8 lg:py-16 px-4">
    <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center dark:text-white">
        Nossa missão 
    </h2>
    
    <div class="relative items-center w-full px-5 py-5 lg:py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <div class="relative flex-col items-start m-auto align-middle">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
          <div class="relative items-center gap-12 m-auto ">
            <div class="max-w-xl text-center lg:text-left">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white">
                  Por que escolher a My Bet Space para evoluir no trade?
                </h3>
                <p class="max-w-xl mt-4 text-sm sm:text-base tracking-tight text-grayWhite">
                  A My Bet Space tem como missão ajudar a comunidade de trader Esportivo a economizar seu tempo planilhando, auxiliando no dia a dia do trade/apostador, para validar seu método mais facilmente, para ser mais lucrativo.
                </p>
            </div>

            <div class="max-w-xl mt-8 text-center lg:text-left">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white">
                  Como funciona na prática o My Bet Space?
                </h3>

                <p class="max-w-xl mt-4 text-sm sm:text-base tracking-tight text-grayWhite">
                  É simples: você cadastra seus métodos de trade e nós fazemos o resto. A plataforma captura automaticamente jogos, times, mercados, campeonatos, odds e stakes. 
                  Geramos indicadores completos para você analisar performance e validar estratégias sem perder tempo com planilhas manuais.
                </p>

            </div>

            <div class="flex items-center justify-center mt-6">
              <nuxt-link :to="'https://app.mybetspace.com/signup'"
                class="max-sm:flex-1 block sm:inline-block text-teal-600 transition hover:text-teal-600/75"
              >
                <button class="rounded-md max-sm:w-full h-12 px-6 py-2 text-base font-semibold bg-orange text-white shadow transition-opacity hover:opacity-75 flex items-center justify-center">
                  Junte-se ao MyBetSpace
                </button>
              </nuxt-link>
            </div>
          </div>
          
          <div class="order-first block w-full mt-6 lg:mt-0">
                          <NuxtImg
              class="object-cover object-center w-full max-w-80 h-70 mx-auto"
              alt="Aplicativo mobile My Bet Space para gestão de apostas esportivas em tempo real"
              src="/images/iphone2.webp"
              loading="lazy"
              width="1080"
              height="1920"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
