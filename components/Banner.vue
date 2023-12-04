<template>
  <div class="block">
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
            <div class="name">{{ item.name }}</div>
            <div class="des">{{ item.description }}</div>
            <button :class="item.buttonClass" role="button">
              {{ item.buttonText }}
            </button>
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

<script setup>
import { ref, onMounted, watchEffect } from "vue";

const items = ref([
  {
    name: "MY BET SPACE1",
    description: "Afinal, quanto vale seu tempo?",
    buttonClass: "button-87",
    buttonText: "Economize seu tempo",
    image: "_nuxt/assets/banner3.jpeg",
  },
  {
    name: "MY BET SPACE2",
    description: "Afinal, quanto vale seu tempo?",
    buttonClass: "button-87",
    buttonText: "Economize seu tempo",
    image: "_nuxt/assets/banner2.jpg",
  },
  {
    name: "MY BET SPACE3",
    description: "Afinal, quanto vale seu tempo?",
    buttonClass: "button-87",
    buttonText: "Economize seu tempo",
    image: "_nuxt/assets/banner1.jpg",
  },
]);

const dots = Array(items.value.length).fill("");

let currentIndex = 0;

const advanceToNextItem = () => {
  const cards = document.querySelectorAll(".item");

  const newOrder = Array.from(cards).map((card, index) => {
    const newIndex = (index + 1) % 3; 
    return cards[newIndex];
  });

  document.getElementById("slide").innerHTML = ""; 
  newOrder.forEach((item) => {
    document.getElementById("slide").appendChild(item);
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
  }, 5000);

  watchEffect(() => {
    return () => clearInterval(timer);
  });
});
</script>

<style scoped>
body {
  background-color: #eaeaea;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "Ubuntu", sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  box-shadow: 0 30px 50px #dbdbdb;
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
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
  cursor: pointer;
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
  left: 60%;
}

.item:nth-of-type(3) {
  left: 80%;
}

.item-content {
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
  width: 27%;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5rem;
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
  margin: 20px 0;
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
