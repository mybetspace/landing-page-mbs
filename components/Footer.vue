<template>
    <footer id="contact" style="box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.9);" class="bg-backgroundGrayTwo">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="flex justify-center text-teal-600 sm:justify-start">
              <NuxtImg 
                class="h-10 w-auto" 
                src="/images/logo2.png" 
                alt="logo do my bet space" 
                loading="lazy"
                width="357"
                height="68"
              />
            </div>
    
            <p class="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Planilhe com um clique, valide seu método facilmente e economize seu tempo.
            </p>

            <ul class="mt-8 flex justify-center items-center gap-6 sm:justify-start md:gap-8">
              <li>
                <nuxt-link :to="'https://www.youtube.com/@MyBetSpace '"
                  rel="noreferrer"
                  target="_blank"
                  class="text-red-700 transition hover:text-red-700/75"
                >
                  <span class="sr-only">YouTube</span>
                  <NuxtImg 
                    class="h-7 w-10" 
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
    
          <div class="my-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div class="text-center sm:text-left">
              <span class="text-lg font-bold text-white">E-mail</span>
    
              <ul class="mt-8 space-y-4 text-sm">
                <li>
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
                </li>
              </ul>
            </div>
    
            <div class="text-center sm:text-left">
              <span class="text-lg font-bold text-white">Whatsapp</span>
    
              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <nuxt-link :to="'https://api.whatsapp.com/send?phone=5548996436891&text=Olá,%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20a%20plataforma'"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
    
                    <span class="flex-1 text-gray hover:opacity-75">+55 48 99643-6891</span>
                </nuxt-link>
                </li>
              </ul>
            </div>
    
            <div class="text-center sm:text-left">
              <span class="text-lg font-bold text-white">Localização</span>
    
              <ul class="mt-8 space-y-4 text-sm">
                <li
                  class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
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
                </li>
              </ul>
            </div>
    
          </div>
        </div>
    
        <div class="mt-12 border-t border-gray pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="text-sm text-gray">
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
            </p>
    
            <p class="mt-4 text-sm text-gray sm:order-first sm:mt-0">© 2024 Copyright My Bet Space</p>
          </div>
        </div>
      </div>
    </footer>
  </template>

