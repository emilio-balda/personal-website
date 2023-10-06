<script setup lang="ts">
import { NConfigProvider, NSwitch, darkTheme } from 'naive-ui'
import type { CSSProperties } from 'vue'
import { onMounted } from 'vue'
import Home from '~/pages/index.vue'

// import Services from '~/pages/services.vue'
import AppImage from '~/components/AppImage.vue'
import { isDark, toggleDark } from '~/composables'
import { downloadFile, scrollTo } from '~/composables/dom'
import About from '~/pages/about.vue'
import Contact from '~/pages/contact.vue'
import Portfolio from '~/pages/portfolio.vue'

// import GlowingButton from '~/components/GlowingButton.vue'

const navBarItems = [
  { route: '/#home', id: 'home', page_name: 'Home', component: Home, background: 'bg-body', title_color: '', title: null, icon: 'i-carbon-home' },
  // { route: '/#services', id: 'services', page_name: 'Services', component: Services, background: 'bg-body', title_color: '', title: 'Services', icon: 'i-carbon-collaborate' },
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
function handleClickNavMenu(section_id: string) {
  showNavMenu.value = false
  scrollTo(section_id)
}

function railStyle({
  checked,
}: {
  checked: boolean
}) {
  const style: CSSProperties = {}
  if (checked)
    style.background = 'var(--paragraph)'

  else
    style.background = '#dbdbdb'

  return style
}

const themeOverrides = {
  common: {
    successColor: '#08987E', // var(--primary-900)
  },
}

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : null" :theme-overrides="themeOverrides">
    <div class="max-w-screen overflow-clip">
      <div class="absolute sticky right-0 top-0 z-40 flex flex-col origin-top-right">
        <div
          class="w-full flex flex-row items-center justify-around border-b-1 border-slate-300 bg-background-100 px-4 py-2 dark:border-slate-800 dark:bg-background-900"
        >
          <div class="max-w-7xl w-full flex flex-row items-center justify-around md:justify-between">
            <div class="flex flex-row cursor-pointer items-center justify-center py-2" @click="scrollTo('home')">
              <AppImage
                src="https://drive.google.com/uc?id=12GXM4ZHFSNUoeMTtu2YAUcA0wt_A59Nl" placeholder-height="4em"
                placeholder-width="4em" class="hidden w-[4em] overflow-hidden rounded-full md:block"
              />
              <h4 class="mx-4 hidden whitespace-nowrap text-xl font-semibold md:block icon-btn">
                Emilio Balda
              </h4>
              <glowing-button
                class="md:ml-12"
                @click.prevent="downloadFile({ filename: 'CV-Emilio-Balda.pdf', href: 'https://drive.google.com/uc?id=1AFqS99db8Elw7b3hin9RcXHVt2zNU5pF' })"
              >
                <template #icon>
                  <div i="carbon-download" />
                </template>
                <template #default>
                  Curriculum
                </template>
              </glowing-button>
            </div>
            <div class="flex flex-row items-center">
              <div class="mr-8 hidden md:flex">
                <button
                  v-for="section in navBarItems" :key="section.id" class="text-md mx-3 md:text-lg icon-btn"
                  @click="scrollTo(section.id)"
                >
                  {{ section.page_name }}
                </button>
              </div>
              <NSwitch :value="isDark" :rail-style="railStyle" @click="toggleDark()">
                <template #unchecked-icon>
                  <div
                    i="carbon-light-filled"
                    class="text-md block bg-primary-700 dark:hidden dark:bg-gray-300 dark:bg-primary-500 md:text-lg"
                  />
                  <div i="carbon-light" class="text-md hidden bg-primary-500 dark:block dark:bg-gray-300 md:text-lg" />
                </template>
                <template #checked-icon>
                  <div i="carbon-asleep" class="block bg-gray-300 text-lg dark:hidden dark:bg-primary-500 md:text-xl" />
                  <div
                    i="carbon-asleep-filled"
                    class="hidden bg-gray-300 text-lg dark:block dark:bg-secondary-500 md:text-xl"
                  />
                </template>
              </NSwitch>
            </div>
          </div>
        </div>
      </div>
      <div
        class="text-parragraph fixed bottom-0 left-0 right-0 z-50 w-full flex flex-row items-center justify-center border-t-1 border-slate-300 bg-background-100 px-2 md:hidden dark:border-slate-800 dark:bg-background-900 dark:text-white"
      >
        <div v-for="section in navBarItems" :key="section.id" class="flex flex-col items-center justify-center px-4 py-2">
          <div :class="section.icon" class="text-sm" @click.prevent="handleClickNavMenu(section.id)" />
          <button class="text-xs opacity-75" @click.prevent="handleClickNavMenu(section.id)">
            {{ section.page_name }}
          </button>
        </div>
      </div>
      <div>
        <main class="text-center text-paragraph dark:text-gray-200">
          <div class="flex flex-col items-center justify-center pb-32">
            <div v-for="section in navBarItems" :ref="section.id" :key="section.id" class="max-w-7xl w-full">
              <section :id="section.id" :class="section.background">
                <div class="w-full flex flex-col items-center justify-center pt-8 md:pt-24">
                  <h4 v-if="section.title !== null" class="mb-4 text-3xl font-semibold" :class="section.title_color">
                    {{ section.title }}
                  </h4>
                  <component :is="section.component" />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  </NConfigProvider>
</template>
