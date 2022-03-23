<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  class_text: String,
})
</script>

<template>
  <button class="bn5" role="button">
    <span class="text" :class="props.class_text">{{ props.label }}</span>
  </button>
</template>

<style scoped>
/* CSS */
.bn5:active,
.bn5 span {
  background-color: rgb(5, 6, 45);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.bn5 {
  background-image: linear-gradient(145deg, darkorchid, royalblue, mediumspringgreen);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  line-height: 1em;
  max-width: 100%;
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
