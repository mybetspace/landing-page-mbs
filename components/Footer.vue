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
                    <nuxt-link :to="'mailto:suporte@mybetspace.com'"
                      class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    >
                    
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                      <span href="" class="flex-1 text-gray hover:opacity-75">suporte@mybetspace.com</span>
                    </nuxt-link>
                  </div>
                </div>
      
                <div class="flex items-center">
                  <div aria-label="e-mail" class="text-sm">
                    <nuxt-link :to="'https://api.whatsapp.com/send?phone=5548996436891&text=Olá,%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20a%20plataforma'"
                      class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 text-background" fill="#f5f5f5" viewBox="0 0 24 24">
                        <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                      </svg>

                      <span class="flex-1 text-gray hover:opacity-75">+55 48 99664-1677 </span>
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

