<script setup lang="ts">
const emits = defineEmits(['close-modal'])

function closeModal() {
  emits('close-modal')
}
</script>

<template>
  <div class="left-0 top-0 z-999">
    <div class="flex flex-col w-screen h-full bg-gray-400/90 items-center pt-4" @click.self="closeModal">
      <div class="w-4/5 h-screen">
        <div class="flex flex-col w-full h-[calc(90vh)] bg-white dark:bg-slate-700 shadow-xl items-center rounded-lg overflow-hidden">
          <div class="shrink-0 self-end px-4 py-4">
            <div
              i-carbon-circle-solid
              class="text-lg text-red-600 focus:text-red-500 hover:text-red-500"
              @click.prevent="closeModal"
            />
          </div>
          <div class="gradient-bg-image flex-grow w-full pb-1" />
          <perfect-scrollbar class="flex flex-col w-full h-full bg-white dark:bg-slate-700 shadow-xl items-center px-8 py-8">
            <slot />
          </perfect-scrollbar>
          <div class="gradient-bg-image flex-grow w-full pb-1" />
          <div class="shrink-0 bg-white dark:bg-slate-700 w-full self-end px-10 py-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.z-999 {
  z-index: 999;
}

.gradient-bg-image {
  background-image: linear-gradient(to right, rgba(0,0,0,0), var(--secondary), var(--primary-500), rgba(0,0,0,0));
}
</style>
