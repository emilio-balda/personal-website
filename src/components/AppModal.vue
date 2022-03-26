<script setup lang="ts">
const emits = defineEmits(['close-modal'])

function closeModal() {
  emits('close-modal')
}
</script>

<template>
  <div class="modal">
    <div class="flex flex-col w-screen h-screen bg-gray-400/90 items-center pt-4" @click.self="closeModal">
      <div class="w-6xl h-screen">
        <div class="flex flex-col w-full h-full bg-white shadow-xl items-center">
          <div class="shrink-0 self-end px-10 py-4">
            <div
              i-carbon-misuse-outline
              class="text-xl text-red-700 opacity-75 border-b border-gray-400 focus:shadow-none focus:opacity-100 hover:opacity-100"
              @click.prevent="closeModal"
            />
          </div>
          <div class="flex-grow w-full border-t-4 border-t-gray-500 pb-2" />
          <div class="flex flex-col w-full h-full bg-white shadow-xl items-center px-8 py-8 overflow-y-auto">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  left:0;
  top:0;
  /* z-index: 999; */
}
</style>
