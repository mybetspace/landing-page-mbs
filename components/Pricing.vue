<script setup lang="ts">
import { ref } from 'vue'

const pricingPlans = ref([
  {
    category: 'basic',
    name: 'Mensal',
    price: 'R$19,99',
    description: '1 mês de assinatura.',
    features: {
      users: 'Preço total R$ 19,90',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'basic',
    name: 'Trimestral',
    price: 'R$ 19,50',
    description: '2,5 de desconto.',
    features: {
      users: '3 meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'basic',
    name: 'Semestral',
    price: 'R$ 18,99',
    description: '5,00% de desconto',
    features: {
      users: '6 Meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'basic',
    name: 'Anual',
    price: 'R$ 18,50',
    description: '7,50% de Desconto.',
    features: {
      users: '12 Meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'avanced',
    name: 'Mensal',
    price: 'R$ 1',
    description: '1 mês de assinatura.',
    features: {
      users: 'Preço total R$ 19,90',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'avanced',
    name: 'Trimestral',
    price: 'R$ 1',
    description: '2,5 de desconto.',
    features: {
      users: '3 meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'avanced',
    name: 'Semestral',
    price: 'R$ 1',
    description: '5,00% de desconto',
    features: {
      users: '6 Meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'avanced',
    name: 'Anual',
    price: 'R$ 1',
    description: '7,50% de Desconto.',
    features: {
      users: '12 Meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'professional',
    name: 'Mensal',
    price: 'R$ 2',
    description: '1 mês de assinatura.',
    features: {
      users: 'Preço total R$ 19,90',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'professional',
    name: 'Trimestral',
    price: 'R$ 2',
    description: '2,5 de desconto.',
    features: {
      users: '2 meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'professional',
    name: 'Semestral',
    price: 'R$ 2',
    description: '5,00% de desconto',
    features: {
      users: '2 Meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  },
  {
    category: 'professional',
    name: 'Anual',
    price: 'R$ 2',
    description: '7,50% de Desconto.',
    features: {
      users: '2 Meses de assinatura',
    },
    button: {
      text: 'Assinar'
    }
  }
])

const selectedCategory = ref('basic')
const filteredPlans = computed(() => {
  return pricingPlans.value.filter(plan => plan.category === selectedCategory.value)
})

</script>

<template>
  <section class="relative z-10 overflow-hidden dark:bg-dark pt-20 pb-12 lg:pt-[80px] lg:pb-[100px] mx-12">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[910px] text-center">
          
            <h2 class="mb-3 text-3xl leading-[1.208] font-bold text-white dark:text-white sm:text-4xl md:text-[40px]">
              Preços 
            </h2>
            <p class="text-base text-grayWhite dark:text-dark-6">
              Após o período gratuito para continuar usando o My Bet Space é necessário ter uma assinatura, você pode escolher um dos planos abaixo.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-4 text-white text-start">
        <label for="pricingCategory" class="mr-2 font-semibold">Escolha a categoria:</label>
          <select v-model="selectedCategory" id="pricingCategory" class="bg-background border p-2 w-30 rounded-md">
            <option value="basic">Básico</option>
            <option value="avanced">Avançado</option>
            <option value="professional">Profissional</option>
          </select>
      </div>

      <div class="-mx-4 flex flex-wrap justify-center">
        <div v-for="(plan, index) in filteredPlans" :key="index" class="w-full px-4 md:w-1/2 lg:w-1/4"
        >
          <div
          class="relative z-10 mb-10 overflow-hidden rounded-[10px] border border-white dark:border-dark-3 dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px] transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:border-orange dark:hover:border-dark-orange"
          >
            <span class="mb-3 block text-grayWhite font-semibold text-primary">
              {{ plan.name }}
            </span>
              <h2 class="mb-5 text-[34px] font-bold text-white dark:text-white">
                <span>{{ plan.price }}</span>
                <span class="text-base font-medium text-grayWhite dark:text-dark-6"> / Mês </span>
              </h2>
            <p
              class="mb-8 border-b border-stroke dark:border-dark-1 pb-8 text-base text-grayWhite dark:text-dark-6"
            >
              {{ plan.description }}
            </p>
            <div class="mb-9 flex flex-col gap-[14px]">
              <p class="text-base text-white dark:text-dark-6">{{ plan.features.users }}</p>
            </div>
            <a
              href="javascript:void(0)"
              :class="{
                ' border-primary bg-primary text-white hover:bg-opacity-90':
                  plan.name === 'Business',
                'border-stroke dark:border-dark-3 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white':
                  plan.name !== 'Business'
              }"
              class="block w-full rounded-md border p-3 text-center text-orange font-medium transition"
            >
              {{ plan.button.text }}
            </a>
            <div>
              <span class="absolute right-0 top-7 z-[-1]">
                <svg
                  width="77"
                  height="172"
                  viewBox="0 0 77 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="86"
                      y1="0"
                      x2="86"
                      y2="172"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fa541cff" stop-opacity="0.09" />
                      <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>     
              <span class="absolute right-4 top-4 z-[-1]">
                <svg
                  width="41"
                  height="89"
                  viewBox="0 0 41 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="38.9138"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 38.9138 87.4849)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="38.9138"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 38.9138 74.9871)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="38.9138"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 38.9138 62.4892)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="38.9138"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 38.9138 38.3457)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="38.9138"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 38.9138 13.634)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="38.9138"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 38.9138 50.2754)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="38.9138"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 38.9138 26.1319)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="38.9138"
                    cy="1.42021"
                    r="1.42021"
                    transform="rotate(180 38.9138 1.42021)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 26.4157 87.4849)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 26.4157 74.9871)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 26.4157 62.4892)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 26.4157 38.3457)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 26.4157 13.634)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 26.4157 50.2754)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 26.4157 26.1319)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="26.4157"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 26.4157 1.4202)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 13.9177 87.4849)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 13.9177 74.9871)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 13.9177 62.4892)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 13.9177 38.3457)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 13.9177 13.634)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 13.9177 50.2754)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 13.9177 26.1319)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="13.9177"
                    cy="1.42019"
                    r="1.42021"
                    transform="rotate(180 13.9177 1.42019)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 1.41963 87.4849)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 1.41963 74.9871)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 1.41963 62.4892)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 1.41963 38.3457)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 1.41963 13.634)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 1.41963 50.2754)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 1.41963 26.1319)"
                    fill="#fa541cff"
                  />
                  <circle
                    cx="1.41963"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 1.41963 1.4202)"
                    fill="#fa541cff"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <span class="mb-2 block text-white text-center font-semibold text-primary">Todos os usuários novos tem direito à 7 dias gratuitos após a abertura de conta. </span>
    </div>
  </section>
</template>
