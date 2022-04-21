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

const itemToNextRoutes: Record<string, { left_route: string; right_route: string }> = {}

const numNavBarItems = navBarItems.length
for (let i = 0; i < numNavBarItems; i++) {
  itemToNextRoutes[navBarItems[i].route] = {
    left_route: navBarItems[((i - 1) % numNavBarItems + numNavBarItems) % numNavBarItems].route,
    right_route: navBarItems[((i + 1) % numNavBarItems + numNavBarItems) % numNavBarItems].route,
  }
}
</script>

<template>
  <div>
    <div class="sticky top-0 z-40">
      <div class="flex flex-col lg:flex-row w-full pb-2 bg-white/95 lg:h-[5em] items-center justify-center">
        <div>
          <NavigationBar :nav-bar-items="navBarItems" />
        </div>
        <div v-if="useRoute().path in itemToNextRoutes" class="flex items-center justify-center mt-2 lg:mt-0 pl-2 md:pl-4 lg:pl-8">
          <div class="pr-1">
            <div class="bg-emerald-500 rounded-md hover:scale-105">
              <router-link :to="itemToNextRoutes[useRoute().path].left_route">
                <div class="i-carbon-chevron-left text-bold text-xl md:text-2xl lg:text-3xl text-white-400" />
              </router-link>
            </div>
          </div>
          <div>
            <div class="bg-emerald-500 rounded-md hover:scale-105">
              <router-link :to="itemToNextRoutes[useRoute().path].right_route">
                <div class="i-carbon-chevron-right text-bold text-white-400 text-xl md:text-2xl lg:text-3xl" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <main class="text-center text-gray-700 dark:text-gray-200">
        <div class="flex items-start justify-between">
          <div v-if="useRoute().path in itemToNextRoutes" class="hidden lg:block">
            <div class="sticky top-0 z-40 flex flex-col items-center justify-center h-[calc(75vh)] place-self-start shrink-0 w-16">
              <router-link :to="itemToNextRoutes[useRoute().path].left_route">
                <div class="i-carbon-chevron-left text-bold text-6xl text-emerald-400 hover:scale-110" />
              </router-link>
            </div>
          </div>
          <div class="w-full">
            <router-view v-slot="{ Component }">
              <transition>
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
          <div v-if="useRoute().path in itemToNextRoutes" class="hidden lg:block">
            <div class="sticky top-0 z-40 flex flex-col items-center justify-center h-[calc(75vh)] place-self-start shrink-0 w-16">
              <router-link :to="itemToNextRoutes[useRoute().path].right_route">
                <div class="i-carbon-chevron-right text-bold text-6xl text-emerald-400 hover:scale-110" />
              </router-link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
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
