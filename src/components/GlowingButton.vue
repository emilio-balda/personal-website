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
  <button class="bnglow neumorphic-shadow-12" role="button">
    <span class="text bg-background-900" :class="props.class_text">{{ props.label }}</span>
  </button>
</template>

<style scoped>
/* CSS */
.bnglow:active,
.bnglow span {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  /* transition: 300ms; */
}

.bnglow {
  background-image: conic-gradient(
    from var(--gradient-angle),
    var(--primary-500), var(--secondary), var(--primary-500)
  );
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
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

.bnglow:hover {
  z-index: 0;
}

.bnglow:hover:before,
.bnglow:hover:after  {
  content: "";
  position: absolute;
  background: conic-gradient(
    from var(--gradient-angle),
    var(--primary-500), var(--secondary), var(--primary-500)
  );
  top: -0.05rem;
  left: -0.05rem;
  z-index: -1;
  width: calc(100% + 0.1rem);
  height: calc(100% + 0.1rem);
  animation: rotation 3s linear infinite;
  border-radius: inherit;
}

/* .bnglow::after {
  filter: blur(3rem);
} */

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
</style>
