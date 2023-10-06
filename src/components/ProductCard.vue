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
    <div class="w-80 transform cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl">
      <img :src="props.imageSource" alt="">
      <div class="p-5">
        <h1 class="text-2xl font-bold">
          {{ props.title }}
        </h1>
        <p class="font- mt-1 text-gray-500">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>
