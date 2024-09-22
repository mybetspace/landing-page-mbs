  <template>
        <section class="relative items-center w-full">
                  <h2 class="mt-16 text-3xl font-bold text-white text-center dark:text-white sm:text-3xl">
                      Nossa missão 
                  </h2>
                  
                  <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
                    <div class="relative flex-col items-start m-auto align-middle">
                      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                        <div class="relative items-center gap-12 m-auto ">
                          <div class="max-w-xl text-center lg:text-left">
                              <h3 class="text-2xl font-medium tracking-tight text-white  sm:text-3xl">
                                Ajudar você a evoluir e ganhar dinheiro
                              </h3>
                              <p class="max-w-xl mt-4 text-base tracking-tight text-grayWhite">
                                A My Bet Space tem como missão ajudar a comunidade de trader Esportivo a economizar seu tempo planilhando, auxiliando no dia a dia do trade/apostador, para validar seu método mais facilmente, para ser mais lucrativo.
                              </p>
                          </div>

                          <div class="max-w-xl mt-8 text-center lg:text-left">
                              <h3 class="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                                Simplificando seu dia a dia
                              </h3>
                              <p class="max-w-xl mt-4 text-base tracking-tight text-grayWhite">
                                Resumindo de uma forma simples a nossa plataforma é uma espécie de planilha online em que o usuário só precisa preencher o seu método e o resto a gente faz pra você. Pegamos todos os jogos, nomes dos times, mercados, campeonatos , odds, stake e entre outras coisas mais. Geramos diversos indicadores para você tomar as melhores decisões e conseguir validar seus métodos,
                                você só precisa cadastrar seus métodos, preenche-los e analisar seus dados depois.
                              </p>

                          </div>
                          <div class="flex items-center justify-center">
                            <nuxt-link :to="'https://app.mybetspace.com/signup'"
                              class="inline-block text-teal-600 transition hover:text-teal-600/75"
                            >
                              <button class="rounded-md px-6 py-2 text-base font-medium bg-orange text-white shadow bg-orange transition-opacity hover:opacity-75 flex items-center justify-center">Acesse agora</button>
                            </nuxt-link>
                          </div>
                        </div>
                        
                        <div class="order-first block w-full mt-12 lg:mt-0">
                            <img class="object-cover object-center w-full max-w-80 h-70 mx-auto" alt="cellphone" src="~/assets/images/iphone2.png">
                        </div>
                      </div>
                    </div>
                  </div>
        </section>
  </template>
