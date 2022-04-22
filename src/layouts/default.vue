<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavigationBar from '~/components/NavigationBar.vue'
import Home from '~/pages/index.vue'
import Services from '~/pages/services.vue'
import Portfolio from '~/pages/portfolio.vue'
import About from '~/pages/about.vue'
import Contact from '~/pages/contact.vue'

const sections = [{ page_name: 'Home', component: Home }, { page_name: 'Services', component: Services }]

const navBarItems = [
  { route: '/#home', id: 'home', page_name: 'Home', component: Home, background: 'bg-body', title_color: 'text-white', title: null },
  { route: '/#services', id: 'services', page_name: 'Services', component: Services, background: 'bg-black', title_color: 'text-white', title: 'Services' },
  { route: '/#about', id: 'about', page_name: 'About', component: About, background: 'bg-body', title_color: 'text-black', title: null },
  { route: '/#portfolio', id: 'portfolio', page_name: 'Portfolio', component: Portfolio, background: 'bg-black', title_color: 'text-white', title: 'Portfolio' },
  { route: '/#contact', id: 'contact', page_name: 'Contact', component: Contact, background: 'bg-body', title_color: 'text-white', title: null },
]

const itemToNextRoutes: Record<string, { left_route: string; right_route: string }> = {}

const numNavBarItems = navBarItems.length
for (let i = 0; i < numNavBarItems; i++) {
  itemToNextRoutes[navBarItems[i].route] = {
    left_route: navBarItems[((i - 1) % numNavBarItems + numNavBarItems) % numNavBarItems].route,
    right_route: navBarItems[((i + 1) % numNavBarItems + numNavBarItems) % numNavBarItems].route,
  }
}

function scrollTo(sectionId: string) {
  document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<template>
  <div>
    <div class="sticky top-0 z-40">
      <div class="flex flex-row w-full bg-black/95 py-2 items-center justify-between text-white text-lg md:text-xl lg:text-2xl drop-shadow shadow-xl">
        <!-- <div>
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
        </div>-->
        <div class="ml-4">
          Emilio Balda
        </div>
        <div class="mr-8">
          <div class="hidden md:flex">
            <div v-for="section in navBarItems" :key="section.id" class="mx-2 text-lg" @click="scrollTo(section.id)">
              {{ section.page_name }}
            </div>
          </div>
          <div class="i-carbon-menu md:hidden font-bold" />
        </div>
      </div>
    </div>
    <div class="mt-4">
      <main class="text-center text-gray-700 dark:text-gray-200">
        <div class="flex flex-col items-start justify-center">
          <div v-for="section in navBarItems" :ref="section.id" :key="section.id" class="w-full">
            <section :id="section.id" class="py-8 min-h-screen" :class="section.background">
              <div class="flex flex-col items-center justify-center w-full">
                <div v-if="section.title !== null" class="text-3xl font-bold mb-4" :class="section.title_color">
                  {{ section.title }}
                </div>
                <div class="w-full">
                  <component :is="section.component" />
                </div>
              </div>
            </section>
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
