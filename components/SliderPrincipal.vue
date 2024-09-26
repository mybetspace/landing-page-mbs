<template>
    <div class="">
      <div class="container">
        <div id="slide">
          <div
            v-for="(item, index) in items"
            :key="index"
            :class="[
              'item',
              `item-${(index % 3) + 1}`,
              { 'current-item': index === currentIndex },
            ]"
            :style="{ backgroundImage: `url(${item.image})` }"
          >
            <div class="item-content">
              <h2 class="name">{{ item.name }}</h2>
              
              <div class="des" style="text-shadow: 2px 2px 2px rgba(0,0,0,0.5);">
                <p>{{ item.description }}</p>
              </div>

              <nuxt-link :to="'https://app.mybetspace.com/signup'">
                <button :class="item.buttonClass" role="button">
                  {{ item.buttonText }}
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="dots-container">
          <span
            v-for="(dot, index) in dots"
            :key="index"
            :class="{ dot: true, active: index === currentIndex }"
          ></span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watchEffect } from "vue";
  import banner1 from '@/public/images/banner1.jpg';
  import banner2 from '@/public/images/banner2.jpg';
  import banner3 from '@/public/images/banner3.jpg';

  
  const items = ref([
    {
      name: "Não perca mais tempo planilhando",
      description: "A Melhor e Maior Plataforma Profissional de Gestão de Banca para trade esportivo, valorize o seu tempo, ele é precioso. Vamos evoluir para ser lucrativo agora?",
      buttonClass: "button-87",
      buttonText: "Economize seu tempo agora",
      image: banner1,
    },
    {
      name: "Valide seus métodos rapidamente",
      description: "Nunca foi tão fácil analisar informações e validar métodos nas apostas esportivas.",
      buttonClass: "button-87",
      buttonText: "Valide seu método agora",
      image: banner2,
    },
    {
      name: "Quer evoluir para ser lucrativo?",
      description: "Vamos te ajudar com indicadores para acelerar o processo de evolução da sua baanca, isso tudo com poucos cliques.",
      buttonClass: "button-87",
      buttonText: "Evolua agora mesmo",
      image: banner3,
    },
  ]);
  
  const dots = Array(items.value.length).fill("");
  
  let currentIndex = 0;
  
  const advanceToNextItem = () => {
    const cards = document.querySelectorAll(".item");
  
    const newOrder = Array.from(cards).map((_, index) => {
      const newIndex = (index + 1) % 3; 
      return cards[newIndex];
    });

    const slide = document.getElementById("slide")

    if (!slide) return

    slide.innerHTML = ""
  
    newOrder.forEach((item) => {
      slide.appendChild(item);
    });
  
    currentIndex = (currentIndex + 1) % 3; 
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };
  
  const handleCardClick = () => {
    const cards = document.querySelectorAll(".item");
  
    cards.forEach((card, index) => {
      card.addEventListener("click", () => advanceToNextItem(index));
    });
  };

  onMounted(() => {
    const timer = setInterval(() => {
      advanceToNextItem();
    }, 7000);
    handleCardClick();
  
    watchEffect(() => {
      return () => clearInterval(timer);
    });
  });
  </script>
  
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-family: "Ubuntu", sans-serif;
    position: absolute;
    max-width: 100%;
    height: 80%;
  }
  
  #slide {
    width: max-content;
    margin-top: 50px;
  }

  .item {
    width: 200px;
    height: 250px;
    background-position: 50% 50%;
    display: inline-block;
    transition: 0.5s;
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 10px;
    box-shadow: 0 20px 50px #363636;
    cursor: pointer;
  }

  .item p {
    color: #dfdedee7;
  }

  .item:nth-of-type(1) {
    left: 0;
    top: 0;
    transform: translate(0, 0);
    border-radius: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
  
  }
  
  .item:nth-of-type(2) {
    left: 55%;
  }
  
  .item:nth-of-type(3) {
    left: 70%;
  }
  
  .item-content {
    display: flex;
    flex-direction: column;
    color: white;
    height: 100%;
    width: 25%;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20rem;
  }

  @media (max-width: 1468px) {
    .item-content {
      display: flex;
      height: 90%;
      width: 38%;
      justify-content: center;
      align-items: flex-start;
      margin-top: 1rem;
      margin-left: 4rem;
    }
  }

  @media (max-width: 1368px) {
    .item-content {
      display: flex;
      height: 90%;
      width: 38%;
      justify-content: center;
      align-items: flex-start;
      margin-top: 1rem;
      margin-left: 4rem;
    }

    .item {
      width: 200px;
      height: 200px;
      background-position: 50% 50%;
      background-color: #121212;
      display: inline-block;
      transition: 0.5s;
      background-size: cover;
      position: absolute;
      z-index: 1;
      top: 50%;
      transform: translate(0, -50%);
      border-radius: 10px;
      box-shadow: 0 20px 50px #363636;
      cursor: pointer;
    }

    .item:nth-of-type(3) {
      left: 75%;
    }
  }

  @media (max-width: 600px) {
    .container {
      display: flex;
      flex-direction: column;
      position: absolute;
      max-width: 100%;
      height: 90%;
    }
    .item {
      width: 0px;
    }
    .item-content {
      display: flex;
      height: 50%;
      width: 65%;
      justify-content: center;
      align-items: flex-start;
      margin-top: 10rem;
      margin-left: 4rem;
    }
  }

  .item:not(:nth-child(1)) .name,
  .item:not(:nth-child(1)) .des,
  .item:not(:nth-child(1)) button {
    display: none;
  }
  
  .item .name,
  .item .des,
  .item button {
    opacity: 0;
    animation: showcontent 1s ease-in-out forwards;
  }
  
  .item .name {
    font-size: 40px;
    font-weight: bold;
  }
  
  .item .des {
    margin: 15px 0;
  }
  
  @keyframes showcontent {
    from {
      opacity: 0;
      transform: translate(0, 100px);
      filter: blur(33px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
      filter: blur(0);
    }
  }
  
  .dots-container {
    display: flex;
    position: absolute;
    z-index: 1;
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
    align-items: flex-end;
  }
  
  .dot {
    width: 0.7rem;
    height: 0.7rem;
    background-color: white;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
  
  .dot:last-child {
    margin-right: 0;
  }
  
  .dot.active {
    background-color: #c9c2c29f;
  }
  
  .button-87 {
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: block;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(45deg, #ff512f 0%, #f09819 51%, #ff512f 100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-87:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  
  .button-87:active {
    transform: scale(0.95);
  }
  </style>