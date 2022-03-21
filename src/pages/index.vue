<script setup lang="ts">
import TableResponsive from '~/components/TableResponsive.vue'
</script>

<template>
  <h1 class="text-8xl italic py-10 px-10">
    Some awesome quote
  </h1>
  <table-responsive>
    <tr>
      <td class="px-4">
        <img src="../assets/me.png" alt="Avatar" class="w-96 rounded-full">
      </td>
      <td class="px-4">
        <h4 class="text-3xl text-left font-bold whitespace-nowrap">
          Emilio Balda
        </h4>
        <p class="text-3xl text-left whitespace-nowrap">
          Fullstack Developer
        </p>
        <p class="text-3xl text-left whitespace-nowrap">
          PhD in Machine Learning
        </p>
        <p class="text-3xl text-left whitespace-nowrap">
          <a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a>
        </p>
      </td>
      <td class="px-16">
        <p class="text-2xl text-justify py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non magna id risus rutrum pulvinar quis in libero.
        </p>
        <button class="bn5" role="button">
          <span class="text">Get Started</span>
        </button>
      </td>
    </tr>
  </table-responsive>
</template>

<style scoped>
/* CSS */
.bn5:active,
.bn5 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

@media (min-width: 768px) {
  .bn5 {
    font-size: 24px;
    min-width: 196px;
  }
}

.bn5 {
  align-items: center;
  background-image: linear-gradient(145deg, darkorchid, royalblue, mediumspringgreen);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
}

.bn5:hover {
  z-index: 0;
}

.bn5:hover:before {
  content: "";
  background: linear-gradient(
    145deg,
    darkorchid, royalblue, mediumspringgreen,
    darkorchid, royalblue, mediumspringgreen,
    darkorchid, royalblue, mediumspringgreen
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingbn5 20s linear infinite;
  opacity: 1;
  transition: opacity 5s ease-in-out;
  border-radius: 10px;
}

@keyframes glowingbn5 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.bn5:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #191919;
  left: 0;
  top: 0;
  border-radius: 10px;
}
</style>
