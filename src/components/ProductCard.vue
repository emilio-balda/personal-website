<script setup lang="ts">
const props = defineProps(
  {
    title: String,
    description: String,
    imageSource: String,
  },
)
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      <img :src="props.imageSource" alt="">
      <div class="p-5">
        <h1 class="text-2xl font-bold">
          {{ props.title }}
        </h1>
        <p class="mt-1 text-gray-500 font-">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>
