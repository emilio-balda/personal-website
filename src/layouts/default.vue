<script setup lang="ts">
import Home from '~/pages/index.vue'
import Services from '~/pages/services.vue'
import Portfolio from '~/pages/portfolio.vue'
import About from '~/pages/about.vue'
import Contact from '~/pages/contact.vue'
import { toggleDark } from '~/composables'
import { scrollTo } from '~/composables/dom'

const navBarItems = [
  { route: '/#home', id: 'home', page_name: 'Home', component: Home, background: 'bg-body', title_color: '', title: null },
  { route: '/#services', id: 'services', page_name: 'Services', component: Services, background: 'bg-body', title_color: '', title: 'Services' },
  { route: '/#portfolio', id: 'portfolio', page_name: 'Portfolio', component: Portfolio, background: 'bg-body', title_color: '', title: 'Portfolio' },
  { route: '/#about', id: 'about', page_name: 'About', component: About, background: 'bg-body', title_color: 'text-black', title: null },
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

const showNavMenu = ref<boolean>(false)
const handleClickNavMenu = (section_id: string) => {
  showNavMenu.value = false
  scrollTo(section_id)
}

</script>

<template>
  <div class="max-w-screen overflow-hidden">
    <div class="sticky origin-top-right absolute right-0 top-0 z-40 flex flex-col">
      <div class="flex flex-row w-full bg-background-700/95 pt-2 pb-1 items-center justify-between text-white text-lg md:text-xl lg:text-2xl drop-shadow shadow-xl">
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
        <div class="icon-btn" @click="scrollTo('home')">
          Emilio Balda
        </div>
        <div class="mr-8">
          <div class="hidden md:flex">
            <button v-for="section in navBarItems" :key="section.id" class="icon-btn mx-2 text-lg" @click="scrollTo(section.id)">
              {{ section.page_name }}
            </button>
          </div>
          <div class="mr-4 md:hidden">
            <button class="icon-btn" @click.prevent="showNavMenu= !showNavMenu">
              <div class="i-carbon-menu font-bold" />
            </button>
          </div>
        </div>
      </div>

      <div v-if="showNavMenu" class="absolute right-0 top-11 flex flex-col w-full bg-slate-900/95 items-center justify-between text-white text-lg md:text-xl lg:text-2xl drop-shadow shadow-xl py-2">
        <div v-for="section in navBarItems" :key="section.id">
          <button class="icon-btn" @click.prevent="handleClickNavMenu(section.id)">
            {{ section.page_name }}
          </button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <main class="text-center text-gray-700 dark:text-gray-200">
        <div class="flex flex-col items-start justify-center">
          <div v-for="section in navBarItems" :ref="section.id" :key="section.id" class="w-full">
            <section :id="section.id" class="py-8 min-h-screen" :class="section.background">
              <div class="flex flex-col items-center justify-center w-full mt-8">
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
