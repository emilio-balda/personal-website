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
  <router-link :to="to" class="router-link place-self-center dark:text-white" :class="{ 'router-link-selected': currentPage === props.to }">
    {{ props.pageName }}
  </router-link>
</template>

<style scoped>
.router-link {
  padding: 5px 20px 5px 20px;
}

.router-link-selected {
  border-bottom: 8px solid rgb(52 211 153);
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0), darkorchid, royalblue, rgb(52 211 153), rgba(255, 255, 255, 0)) 1;
}
</style>
