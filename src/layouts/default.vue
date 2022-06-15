<script setup lang="ts">
import Home from '~/pages/index.vue'
import Services from '~/pages/services.vue'
import Portfolio from '~/pages/portfolio.vue'
import About from '~/pages/about.vue'
import Contact from '~/pages/contact.vue'
import { toggleDark } from '~/composables'
import { scrollTo } from '~/composables/dom'

const navBarItems = [
  { route: '/#home', id: 'home', page_name: 'Home', component: Home, background: 'bg-body', title_color: '', title: null, icon: 'i-carbon-home' },
  { route: '/#services', id: 'services', page_name: 'Services', component: Services, background: 'bg-body', title_color: '', title: 'Services', icon: 'i-carbon-collaborate' },
  { route: '/#portfolio', id: 'portfolio', page_name: 'Portfolio', component: Portfolio, background: 'bg-body', title_color: '', title: 'Portfolio', icon: 'i-carbon-portfolio' },
  { route: '/#about', id: 'about', page_name: 'About', component: About, background: 'bg-body', title_color: 'text-black', title: null, icon: 'i-carbon-education' },
  { route: '/#contact', id: 'contact', page_name: 'Contact', component: Contact, background: 'bg-body', title_color: '', title: null, icon: 'i-carbon-email' },
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
  <div class="max-w-screen overflow-hidden md:overflow-clip">
    <div class="md:sticky md:origin-top-right md:absolute md:right-0 md:top-0 z-40 flex flex-col">
      <div class="flex flex-row w-full bg-background-900 md:bg-background-900/98 px-4 py-2 items-center justify-between text-white">
        <div class="flex flex-row justify-center items-center cursor-pointer" @click="scrollTo('home')">
          <div>
            <img src="../assets/me.png" alt="Avatar" class="w-[3.5em] rounded-full">
          </div>
          <div class="ml-4 icon-btn text-lg md:text-xl font-bold">
            Emilio Balda
          </div>
        </div>
        <div>
          <button class="icon-btn mx-2 inline-flex" @click="toggleDark()">
            <div
              i="carbon-sun"
              class="text-lg md:text-xl bg-primary-500 dark:bg-gray-300"
            />
            <p class="text-gray-500">
              /
            </p>
            <div
              i="carbon-moon"
              class="text-lg md:text-xl bg-gray-300 dark:bg-primary-500"
            />
          </button>
        </div>
        <div class="hidden md:flex mr-8">
          <button v-for="section in navBarItems" :key="section.id" class="icon-btn mx-3 text-lg md:text-xl font-bold" @click="scrollTo(section.id)">
            {{ section.page_name }}
          </button>
        </div>
      </div>
    </div>
    <div class="md:hidden fixed left-0 right-0 bottom-0 z-50 flex flex-row w-full bg-background-900/98 items-center justify-between text-white px-2">
      <div v-for="section in navBarItems" :key="section.id" class="py-3 mx-2 flex flex-col items-center justify-center">
        <div :class="section.icon" class="text-lg" @click.prevent="handleClickNavMenu(section.id)" />
        <div>
          <button class="opacity-75 text-md" @click.prevent="handleClickNavMenu(section.id)">
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
