<script setup lang="ts">
import { useSlots } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  type: {
    // not used at the moment
    type: String,
    default: 'default',
  },
})

const slots = useSlots()
</script>

<template>
  <button
    class="bnglow w-fit" role="button"
    :class="{ 'neumorphic-shadow-4': props.size === 'small', 'neumorphic-shadow-8': props.size === 'medium', 'text-app-paragraph': props.type === 'ghost', 'text-white': props.type === 'default' }"
  >
    <span class="flex flex-row items-center justify-center px-6 py-4" :class="{ 'bg-background-100 dark:bg-background-900': props.type === 'ghost', 'bg-background-900': props.type === 'default' }">
      <div v-if="slots.icon" class="pr-4 text-xl">
        <slot name="icon" />
      </div>
      <div class="text-lg font-bold uppercase">
        <slot name="default" />
      </div>
    </span>
  </button>
</template>

<style scoped>
/* CSS */
.bnglow:active,
.bnglow span {
  border-radius: 6px;
  /* transition: 300ms; */
}

.bnglow {
  background-image: conic-gradient(from 0deg,
      var(--primary-500), var(--secondary-500), var(--primary-500));
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  padding: 2px;
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
.bnglow:hover:after {
  content: "";
  position: absolute;
  background: conic-gradient(from var(--gradient-angle),
      var(--primary-500), var(--secondary-500), var(--primary-500));
  top: -0.0125rem;
  left: -0.0125rem;
  z-index: -1;
  width: calc(100% + 0.025rem);
  height: calc(100% + 0.025rem);
  animation: rotation 2s linear infinite;
  border-radius: inherit;
}

.bnglow::after {
  filter: blur(0.3rem);
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }

  100% {
    --gradient-angle: 360deg;
  }
}
</style>
