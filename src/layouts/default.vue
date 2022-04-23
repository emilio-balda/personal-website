<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavigationBar from '~/components/NavigationBar.vue'
import Home from '~/pages/index.vue'
import Services from '~/pages/services.vue'
import Portfolio from '~/pages/portfolio.vue'
import About from '~/pages/about.vue'
import Contact from '~/pages/contact.vue'
import { toggleDark } from '~/composables'

const sections = [{ page_name: 'Home', component: Home }, { page_name: 'Services', component: Services }]

const navBarItems = [
  { route: '/#home', id: 'home', page_name: 'Home', component: Home, background: 'bg-body', title_color: '', title: null },
  { route: '/#services', id: 'services', page_name: 'Services', component: Services, background: 'bg-body', title_color: '', title: 'Services' },
  { route: '/#about', id: 'about', page_name: 'About', component: About, background: 'bg-body', title_color: 'text-black', title: null },
  { route: '/#portfolio', id: 'portfolio', page_name: 'Portfolio', component: Portfolio, background: 'bg-body', title_color: '', title: 'Portfolio' },
  { route: '/#contact', id: 'contact', page_name: 'Contact', component: Contact, background: 'bg-body', title_color: '', title: null },
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
      <div class="flex flex-row w-full bg-slate-900/95 py-2 items-center justify-between text-white text-lg md:text-xl lg:text-2xl drop-shadow shadow-xl">
        <div class="ml-4">
          <button class="icon-btn mx-2 inline-flex" @click="toggleDark()">
            <div
              i="carbon-sun"
              class="text-xl bg-green-500 dark:bg-gray-300"
            />
            <p class="text-gray-500">
              /
            </p>
            <div
              i="carbon-moon"
              class="text-xl bg-gray-300 dark:bg-green-500"
            />
          </button>
        </div>
        <div>
          Emilio Balda
        </div>
        <div class="mr-8">
          <div class="hidden md:flex">
            <button v-for="section in navBarItems" :key="section.id" class="icon-btn mx-2 text-lg" @click="scrollTo(section.id)">
              {{ section.page_name }}
            </button>
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
