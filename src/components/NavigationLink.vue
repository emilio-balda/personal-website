<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPage = computed(() => route.path)
const props = defineProps({
  pageName: String,
  to: String,
})
</script>

<template>
  <router-link :to="to" class="router-link place-self-center dark:text-white px-2 text-base md:text-xl lg:text-2xl lg:px-4" :class="{ 'router-link-selected': currentPage === props.to }">
    {{ props.pageName }}
  </router-link>
</template>

<style scoped>

.router-link-selected {
  border-bottom: 8px solid var(--primary-500);
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0), var(--accent-500), var(--secondary-500), var(--primary-500), rgba(255, 255, 255, 0)) 1;
}
</style>
