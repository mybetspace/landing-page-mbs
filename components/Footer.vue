<template>
    <footer id="contact" style="box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.9);" class="bg-backgroundGrayTwo">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="flex max-lg:flex-col max-lg:items-center">
          <div class="grow">
            <div class="flex max-lg:justify-center text-teal-600">
              <NuxtImg 
                class="h-10 w-auto" 
                src="/images/logo2.png" 
                alt="logo do my bet space" 
                loading="lazy"
                width="357"
                height="68"
              />
            </div>
    
            <p class="mt-6 max-w-md max-lg:text-center leading-relaxed text-white">
              Melhore sua gestão de banca e resultados no trade esportivo.
              Entre em contato conosco ou siga-nos nas redes sociais para ficar por dentro das novidades.
            </p>
          </div>

          <div class="flex max-md:flex-col max-md:items-center items-start justify-center lg:ml-8 gap-8 md:gap-14 xl:gap-20  max-lg:mt-8">
            <div>
              <h4 class="mb-4 font-semibold text-lg">Redes sociais</h4>

              <ul class="flex justify-center items-center gap-2 md:justify-start">
                <li>
                  <nuxt-link :to="'https://www.youtube.com/@MyBetSpace '"
                    rel="noreferrer"
                    target="_blank"
                    class="text-red-700 transition hover:text-red-700/75"
                  >
                    <span class="sr-only">YouTube</span>
                    <NuxtImg 
                      class="h-7 w-10 min-w-[24px] min-h-[24px]" 
                      src="/images/youtube.svg" 
                      alt="Youtube icon" 
                      loading="lazy"
                    />
                  </nuxt-link>             
                </li>  

                <li>
                  <nuxt-link :to="'https://www.instagram.com/mybetspace/'"
                    rel="noreferrer"
                    target="_blank"
                    class="text-red-700 transition hover:text-red-700/75"
                  >
                  <span class="sr-only">Instagram</span>
                    <svg class="h-6 w-6" fill="#f5f5f5" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </nuxt-link>             
                </li>            
              </ul>
            </div>

            <div class="flex flex-col max-lg:items-center justify-center">
              <h4 class="mb-4 font-semibold text-lg">Suporte</h4>

              <div class="flex flex-col gap-4 max-lg:items-center">
                <div class="flex items-center">
                  <div aria-label="e-mail" class="text-sm">
                    <nuxt-link :to="'https://t.me/MyBetSpacebot'"
                      class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    >
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          class="h-5 w-5 shrink-0 text-background"
                          fill="#f5f5f5"
                          viewBox="0 0 24 24">
                        <path
                          d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.28 1.4-.04 1.4.84l-2.28 14.05c-.22.92-1.04 1.14-1.8.7l-4.95-3.64-2.4 2.3c-.27.27-.5.4-.85.4z"
                        />
                      </svg>
                      <span class="flex-1 text-gray hover:opacity-75">@MyBetSpacebot </span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
      
              <div class="flex flex-col max-lg:items-center justify-center">
                <h4 class="mb-4 font-semibold text-lg">Localização</h4>
      
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 shrink-0 text-background"
                      fill="#f5f5f5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
      
                    <address class="-mt-0.5 flex-1 not-italic text-gray hover:opacity-75">
                      Florianópolis - SC | Brasil
                    </address>
                  </div>
                </div>
              </div>
          </div>
        </div>
    
        <div class="mt-8 border-t border-gray pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <div class="flex gap-2 text-sm text-gray">
              <span class="block sm:inline">All rights reserved.</span>

              <nuxt-link :to="'/'"
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              >
              Terms & Conditions
              </nuxt-link>
               
              <span>&middot;</span>
  
              <nuxt-link :to="'/'"
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              >
                 Privacy Policy
              </nuxt-link>
            </div>
    
            <p class="mt-4 text-sm text-gray sm:order-first sm:mt-0">© 2024 Copyright My Bet Space</p>
          </div>
        </div>
      </div>
    </footer>
  </template>

