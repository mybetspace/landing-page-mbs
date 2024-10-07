<template>
  <div class="banner container">
    <div class="content">
      <ul class="feature-list">
        <li class="fade-in" :style="{ animationDelay: '250ms' }">
          <h3 class="feature text-lg sm:text-xl lg:text-2xl">Relatório de métodos</h3>
        </li>

        <li class="fade-in" :style="{ animationDelay: '750ms' }">
          <h3 class="feature text-lg sm:text-xl lg:text-2xl">Relatório de métodos</h3>
        </li>

        <li class="fade-in" :style="{ animationDelay: '1.25s' }">
          <h3 class="feature text-lg sm:text-xl lg:text-2xl">Relatório de métodos</h3>
        </li>

        <li class="fade-in" :style="{ animationDelay: '1.75s' }">
          <h3 class="feature text-lg sm:text-xl lg:text-2xl">Relatório de métodos</h3>
        </li>

        <li class="fade-in" :style="{ animationDelay: '2.25s' }">
          <h3 class="feature text-lg sm:text-xl lg:text-2xl">Relatório de métodos</h3>
        </li>
      </ul>

      <div class="wrapper fade-in" :style="{ animationDelay: '2.75s' }">
        <p class="text-sm sm:text-base">
          Algum texto sobre alguma coisa pra convencer o cliente a clicar nesse botão
        </p>

        <button class="button" type="button">comece agora</button>
      </div>
    </div>

    <div class="image-wrapper slide-in">
      <picture>
        <source media="(max-width: 500px)" srcset="/images/banner1-mobile.jpg">
        <source media="(max-width: 767px)" srcset="/images/banner1-mobile2.jpg">
        <source media="(min-width: 768px)" srcset="/images/banner1-cropped.jpg">
        <img 
          class="image" 
          src="/images/banner1-cropped.jpg" 
          alt="jogador de futebol chutando uma bola"
        >
      </picture>
    </div>
  </div>
</template>
  
<style scoped>
  .banner {
    margin: 4rem auto 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 0 2rem;
    gap: 3.6rem;
  }

  .image {
    border-radius: 12px;
    height: 100%;
    max-width: 35rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.4rem;
    min-width: fit-content;
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    list-style-type: circle;
    list-style-position: inside;
  }

  .feature {
    display: inline;
    font-weight: 600;
    letter-spacing: .16px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .button {
    width: fit-content;
    padding: 12px 24px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 12px;
    border: 0px;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(45deg, #ff512f 0%, #f09819 51%, #ff512f 100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .fade-in {
    opacity: 0;
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-duration: 1.25s;
  }

  .slide-in {
    opacity: 0;
    transform: translateX(100%);
    animation: slideIn 0.6s forwards;
  }
  
  @media screen and (max-width: 1024px) {
    .image {
      max-width: 100%;
    }

    .content {
      gap: 1.6rem;
    }

    .feature-list {
      gap: 1rem;
    }

    .wrapper {
      gap: 12px;
    }
    
    .button {
      font-size: .875rem;
    }
  }

  @media screen and (max-width: 768px) {
    .banner {
      position: relative;
      margin: 20px 0 0;
      overflow: hidden;
      padding: 44px;
      border-radius: 0px;
      max-width: 100%;
    }

    .image-wrapper {
      position: absolute;
      z-index: -10;
    }

    .image {
      opacity: 0.4;
      object-fit: cover;
      border-radius: 0;
      min-height: 380px;
    }

    .content {
      flex: 1;
    }

    .feature-list {
      gap: 1rem;
    }

    .slide-in {
      animation-name: none;
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
