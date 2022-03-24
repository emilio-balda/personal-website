<script setup lang="ts">
import { defineEmits } from 'vue'
const emits = defineEmits(['close-modal'])

function closeModal() {
  emits('close-modal')
}
</script>

<template>
  <div class="flex flex-col max-w-6xl  max-h-4xl bg-white rounded-xl overflow-hidden shadow-xl items-center overflow-y-auto px-10 py-8">
    <div
      i-carbon-misuse-outline
      class="text-2xl text-red-700 opacity-75 self-end focus:shadow-none focus:opacity-100 hover:opacity-100"
      @click.prevent="closeModal"
    />
    <slot />
  </div>
</template>
