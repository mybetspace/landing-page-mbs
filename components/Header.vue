<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}

const navLinkItems = ref([
  { text: 'Inicio', href: 'javascript:void(0)' },
  { text: 'Sobre', href: 'javascript:void(0)' },
  { text: 'Funcionalidades', href: 'javascript:void(0)' },
  { text: 'Contato', href: 'javascript:void(0)' },
])

// Custom composition function to handle click outside
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
  <header class="flex w-full items-center">
    <div class="container">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <a href="/#" class="block w-full">
            <img
              src="~/assets/images/logo.png"
              alt="logo"
              class="dark:hidden"
            />
            <img
              src="~/assets/images/logo.png"
              alt="logo"
              class="hidden dark:block"
            />
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              id="navbarToggler"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
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
              class="absolute right-2 top-full w-full max-w-[200px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul class="block lg:flex">
                <template v-for="(item, index) in navLinkItems" :key="index">
                  <li>
                    <a
                      v-if="item.href"
                      :href="item.href"
                      class="flex py-2 text-base font-medium text-white hover:text-orange dark:text-dark-6 dark:hover:text-orange lg:ml-12 lg:inline-flex"
                    >
                      {{ item.text }}
                    </a>
                  </li>
                </template>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a
              href="/#"
              class="px-7 py-3 text-base font-medium text-white hover:text-primary dark:text-white transition-opacity hover:opacity-75"
              >Login</a
            >
            <a
              href="/#"
              class="rounded-md px-5 py-3 text-base font-medium bg-orange text-white shadow bg-orange transition-opacity hover:opacity-75"
              >Cadastro</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
