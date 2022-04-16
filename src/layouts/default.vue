<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavigationBar from '~/components/NavigationBar.vue'

const router = useRouter()

const navBarItems = [
  { route: '/', page_name: 'Home' },
  { route: '/services', page_name: 'Services' },
  { route: '/portfolio', page_name: 'Portfolio' },
  { route: '/about', page_name: 'About' },
  { route: '/contact', page_name: 'Contact' },
]
// const numNavBarItems = navBarItems.length
// const currentNavBarPosition = ref(0) // 0 -> First element of navBarItems (i.e. Home)

// const goToNextRoute = (increment: number) => {
//   currentNavBarPosition.value += increment
//   currentNavBarPosition.value = Math.min(currentNavBarPosition.value, numNavBarItems - 1)
//   currentNavBarPosition.value = Math.max(currentNavBarPosition.value, 0)

//   router.push(navBarItems[(currentNavBarPosition.value % numNavBarItems + numNavBarItems) % numNavBarItems].route)
// }

</script>

<template>
  <div class="sticky top-0 z-50 flex w-full pb-2 bg-white/95 h-[5em]">
    <NavigationBar :nav-bar-items="navBarItems" />
  </div>
  <main class="px-4 py-4 text-center text-gray-700 dark:text-gray-200">
    <div class="flex items-start justify-between">
      <div class="flex flex-col items-center justify-center h-[calc(75vh)] px-4">
        <div v-show="currentNavBarPosition!=0" class="i-carbon-chevron-left text-bold text-6xl text-emerald-400" />
      </div>
      <div>
        <router-view />
      </div>
      <div class="flex flex-col items-center justify-center h-[calc(75vh)] px-4">
        <div class="i-carbon-chevron-right text-bold text-6xl text-emerald-400" />
      </div>
    </div>
    <!-- <Footer class="py-8" /> -->
  </main>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
