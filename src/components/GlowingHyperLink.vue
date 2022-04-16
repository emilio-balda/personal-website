<script setup lang="ts">
const props = defineProps(
  {
    text: String,
    href: String,
    class: {
      type: String,
      required: false,
      default: 'text-emerald-500',
    },
  },
)
</script>

<template>
  <a :href="props.href" class="glowing-text" :class="props.class">{{ props.text }}</a>
</template>

<style scoped>
.glowing-text:hover {
  filter: drop-shadow(0 0 4px rgb(52 211 153));
 }
</style>
