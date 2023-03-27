<script setup lang="ts">
import { useSlots } from 'vue'
const slots = useSlots()

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  type: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <button class="bnglow w-fit" role="button" :class="{'neumorphic-shadow-4': props.size === 'small', 'neumorphic-shadow-12': props.size === 'medium'}">
    <span class="flex flex-row items-center px-4 py-2 bg-background-900">
      <div v-if="slots.icon" class="pr-2">
        <slot name="icon" />
      </div>
      <div :class="{'text-md': props.size === 'small', 'text-lg': props.size === 'medium'}">
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
  background-image: conic-gradient(
    from 0deg,
    var(--primary-500), var(--secondary-500), var(--primary-500)
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
    var(--primary-500), var(--secondary-500), var(--primary-500)
  );
  top: -0.05rem;
  left: -0.05rem;
  z-index: -1;
  width: calc(100% + 0.1rem);
  height: calc(100% + 0.1rem);
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
