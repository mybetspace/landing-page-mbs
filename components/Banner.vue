<template>
  <div class="block">
    <div class="container">
      <div id="slide">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['item', `item-${index + 1}`]"
          :style="{ backgroundImage: `url(${'./../assets/banner1.jpg'})` }"
        >
        <div class="item-content">
              <div class="name">{{ item.name }}</div>
              <div class="des">{{ item.description }}</div>
              <button :class="item.buttonClass" role="button">
                {{ item.buttonText }}
              </button>
            </div>
        </div>
      <div class="dots-container">
        <span v-for="(dot, index) in dots" :key="index" class="dot"></span>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    name: "MY BET SPACE1",
    description: "Afinal, quanto vale seu tempo?",
    buttonClass: "button-87",
    buttonText: "Economize seu tempo",
    image: "https://i.ibb.co/XCPm4pW/9e6d3473-9056-4642-af86-72194d414eb0.jpg",
  },
  {
    name: "MY BET SPACE2",
    description: "Afinal, quanto vale seu tempo?",
    buttonClass: "button-87",
    buttonText: "Economize seu tempo",
    image: "https://i.ibb.co/9ssqyCg/4520feb3-ac3b-48c1-92db-68b757a8cde6.jpg",
  },
  {
    name: "MY BET SPACE3",
    description: "Afinal, quanto vale seu tempo?",
    buttonClass: "button-87",
    buttonText: "Economize seu tempo",
    image: "https://i.ibb.co/XCPm4pW/9e6d3473-9056-4642-af86-72194d414eb0.jpg",
  },
];

const dots = Array(items.length).fill("");
const handleCardClick = () => {
  let cards = document.querySelectorAll(".item");

  cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      let clickedItem = event.currentTarget;
      document.getElementById("slide").prepend(clickedItem);
    });
  });
};
onMounted(() => {
  handleCardClick();
});
</script>

<style scoped>
body {
  background-color: #eaeaea;
  overflow: hidden;
}
.container {
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
     background-image: url("./../assets/banner1.jpg");
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

/* @media (min-width: 768px) {
  .item .content {
    left: -265% !important; 
  }
  .item:nth-of-type(2) {
    left: 56% !important;
  }

  .item:nth-of-type(3) {
    left: 78% !important;
  }
}

@media (min-width: 992px) {
  .item .content {
    left: -265% !important; 
  }
  .item:nth-of-type(2) {
    left: 56% !important;
  }

  .item:nth-of-type(3) {
    left: 78% !important;
  }
}

@media (min-width: 1200px) {
  .item .content {
    left: -600% !important; 
  }
  .item:nth-of-type(2) {
    left: 56% !important;
  }

  .item:nth-of-type(3) {
    left: 78% !important;
  }
}
 */

.item:not(:nth-child(1)) .name {
  display: none;
}

.item:not(:nth-child(1)) .des {
  display: none;
}

.item:not(:nth-child(1)) button {
  display: none;
}

.item .name {
  font-size: 40px;
  font-weight: bold;
  opacity: 0;
  animation: showcontent 1s ease-in-out 1 forwards;
}
.item .des {
  margin: 20px 0;
  opacity: 0;
  animation: showcontent 1s ease-in-out 0.3s 1 forwards;
}
.item button {
  padding: 10px 20px;
  border: none;
  opacity: 0;
  animation: showcontent 1s ease-in-out 0.6s 1 forwards;
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
  margin-top: 38.5rem;
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
  background-color: #555; /* ou a cor desejada */
}

.button-87 {
  margin: 10px;
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
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
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
