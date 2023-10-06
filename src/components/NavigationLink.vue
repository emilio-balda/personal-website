<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  pageName: String,
  to: String,
})

const route = useRoute()

const currentPage = computed(() => route.path)
</script>

<template>
  <router-link :to="to" class="router-link place-self-center px-2 text-base lg:px-4 lg:text-2xl md:text-xl dark:text-white" :class="{ 'router-link-selected': currentPage === props.to }">
    {{ props.pageName }}
  </router-link>
</template>

<style scoped>
.router-link-selected {
  border-bottom: 8px solid var(--primary-500);
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0), var(--secondary-500), var(--primary-500), rgba(255, 255, 255, 0)) 1;
}
</style>
