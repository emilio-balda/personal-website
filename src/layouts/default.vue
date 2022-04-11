<script setup lang="ts">
import NavigationBar from '~/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <main class="px-4 py-4 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <Footer class="py-8" />
    <!-- <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div> -->
  </main>
</template>
