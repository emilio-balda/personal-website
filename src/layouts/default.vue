<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavigationBar from '~/components/NavigationBar.vue'

const navBarItems = [
  { route: '/', page_name: 'Home' },
  { route: '/services', page_name: 'Services' },
  { route: '/portfolio', page_name: 'Portfolio' },
  { route: '/about', page_name: 'About' },
  { route: '/contact', page_name: 'Contact' },
]

const itemToNextRoutes = {}

const numNavBarItems = navBarItems.length
for (let i = 0; i < numNavBarItems; i++) {
  itemToNextRoutes[navBarItems[i].route] = {
    left_route: navBarItems[((i - 1) % numNavBarItems + numNavBarItems) % numNavBarItems].route,
    right_route: navBarItems[((i + 1) % numNavBarItems + numNavBarItems) % numNavBarItems].route,
  }
}
</script>

<template>
  <div class="sticky top-0 z-40 flex w-full pb-2 bg-white/95 h-[5em]">
    <NavigationBar :nav-bar-items="navBarItems" />
  </div>
  <main class="px-4 py-4 text-center text-gray-700 dark:text-gray-200">
    <div class="flex items-start justify-between">
      <div class="sticky top-0 z-40 flex flex-col items-center justify-center h-[calc(75vh)] place-self-start shrink-0 w-16">
        <router-link :to="itemToNextRoutes[useRoute().path].left_route">
          <div class="i-carbon-chevron-left text-bold text-6xl text-emerald-400" />
        </router-link>
      </div>
      <div>
        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <div class="sticky top-0 z-40 flex flex-col items-center justify-center h-[calc(75vh)] place-self-start shrink-0 w-16">
        <router-link :to="itemToNextRoutes[useRoute().path].right_route">
          <div class="i-carbon-chevron-right text-bold text-6xl text-emerald-400" />
        </router-link>
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

/* transition between routes */
.v-enter-active
 {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
