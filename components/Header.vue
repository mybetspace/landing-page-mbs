<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}

const navigateToSection = (sectionId: string) => {
  const sectionIds = ['home', 'about', 'prices', 'features', 'contact'];

  if (!sectionIds.includes(sectionId)) return

  const targetSection = document.getElementById(sectionId)

  if(targetSection) {
    targetSection.scrollIntoView({behavior: 'smooth'})
    toggleNavbar()
  }
}

const navLinkItems = ref([
  { text: 'Inicio', href: 'javascript:void(0)', id: 'home' },
  { text: 'Sobre', href: 'javascript:void(0)', id: 'about' },
  { text: 'Preços', href: 'javascript:void(0)', id: 'prices'  },
  { text: 'Funcionalidades', href: 'javascript:void(0)', id: 'features'  },
  { text: 'Contato', href: 'javascript:void(0)', id: 'contact'  },
  {text: 'Traders', href: 'https://app.mybetspace.com/featured-traders', id: '', target: '_blank' }
])

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="flex h-16 w-full items-center mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="relative w-full flex items-center justify-between">
        <div class="w-40 max-w-full">
          <nuxt-link :to="'https://www.mybetspace.com/'"
            class="block w-full"
          >
            <NuxtImg
              src="/images/logo.png"
              alt="logo"
              class="dark:hidden"
              width="1440"
              height="810"
            />
            <NuxtImg
              src="/images/logo.png"
              alt="logo"
              class="hidden dark:block"
              width="1440"
              height="810"
            />
          </nuxt-link>
        </div>
        <div class="flex w-full items-center justify-between px-2">
          <div>
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              id="navbarToggler"
              class="absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-orange  dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-orange  dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-orange dark:bg-white"
              ></span>
            </button>

            <nav
              :class="{ hidden: !open }"
              id="navbarCollapse"
              style="z-index: 9999;"
              class="bg-background absolute right-2 top-full w-full max-w-[200px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul class="block lg:flex">
                <template v-for="(item, index) in navLinkItems" :key="index">
                  <li>
                   <nuxt-link
                     v-if="item.href"
                     :href="item.href"
                     @click="navigateToSection(item.id)"
                     class="flex py-2 text-base font-medium text-white hover:text-orange dark:text-dark-6 dark:hover:text-orange lg:ml-12 lg:inline-flex"
                     :target="item.target ? item.target : null"
                   >
                     {{ item.text }}
                   </nuxt-link>
                  </li>
                </template>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <nuxt-link :to="'https://app.mybetspace.com/'"
              class="px-7 py-3 text-base font-medium text-white hover:text-primary dark:text-white transition-opacity hover:opacity-75"
            >
              Login
            </nuxt-link>

            <nuxt-link :to="'https://app.mybetspace.com/signup'"
              style="height: 40px;" class="rounded-md px-6 py-3 my-1 text-base font-semibold text-white shadow bg-orange transition-opacity hover:opacity-75 flex items-center justify-center"
            >
              Cadastrar
            </nuxt-link>
          </div>
        </div>
      </div>
  </header>
</template>
