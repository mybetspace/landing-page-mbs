<template>
  <div class="banner container">
    <div class="content">
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold">Gestão de Banca para Trade Esportivo</h1>

      <ul class="feature-list">
        <li class="fade-in" :style="{ animationDelay: '250ms' }">
          <h3 class="feature text-lg sm:text-xl 2xl:text-2xl">Importação de Apostas da Betfair e White Labels</h3>
        </li>

        <li class="fade-in" :style="{ animationDelay: '750ms' }">
          <h3 class="feature text-lg sm:text-xl 2xl:text-2xl">Adicione Apostas da sua Casa de Aposta</h3>
        </li>
        
        <li class="fade-in" :style="{ animationDelay: '1.25s' }">
          <h3 class="feature text-lg sm:text-xl 2xl:text-2xl">Controle Total de Cliques no Mercado</h3>
        </li>

        <li class="fade-in" :style="{ animationDelay: '1.75s' }">
          <h3 class="feature text-lg sm:text-xl 2xl:text-2xl">Validação de Métodos e Projetos</h3>
        </li>

        <li class="fade-in" :style="{ animationDelay: '2.25s' }">
          <h3 class="feature text-lg sm:text-xl 2xl:text-2xl">Indicadores de Alta Eficiência</h3>
        </li>
      </ul>

      <div class="wrapper fade-in w-full" :style="{ animationDelay: '2.75s' }">
        <p class="text-sm sm:text-base">
          Teste nossa plataforma gratuitamente por 7 dias!
        </p>

        <a class="button" href="https://app.mybetspace.com/signup">comece agora</a>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>
  
<style scoped>
  .banner {
    margin: 1rem auto 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 3.6rem;
    background-image: url('/images/banner1-bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: calc(100dvh - 80px);
    max-width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    min-width: fit-content;
  }

  .block {
    width: 22%;
    height: 100dvh;
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .feature-list li::before {
    content: '';
    display: block;
    min-width: 16px;
    width: 16px;
    height: 16px;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="%23ff512f"%3E%3Cpath d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"%3E%3C/path%3E%3C/svg%3E');
    background-size: contain;
    background-repeat: no-repeat;
    animation: iconMove 1s infinite 1s ease-in-out;
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

  @media screen and (max-width: 768px) {
    .banner {
      margin: 12px 0 32px;
      overflow: hidden;
      max-width: 100%;
      height: 591px;
      background-image: url('/images/banner1-bg.jpg');
    }

    .content {
      gap: 20px;
    }

    .feature-list {
      gap: 1rem;
    }

    .slide-in {
      animation-name: none;
      transform: translateX(0);
      opacity: 1;
    }

    .button {
      font-size: .875rem;
    }
  }

  @media screen and (max-width: 576px) {
    .banner {
      background-image: url('/images/banner1-bg.jpg');
    }

    .block {
      display: none;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes iconMove {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
