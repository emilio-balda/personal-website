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
const handleClickNavMenu = (section_id: string) => {
  showNavMenu.value = false
  scrollTo(section_id)
}

const railStyle = ({
  checked,
}: {
  checked: boolean
}) => {
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
  <n-config-provider :theme="isDark ? darkTheme : null" :theme-overrides="themeOverrides">
    <div class="max-w-screen overflow-clip">
      <div class="sticky origin-top-right absolute right-0 top-0 z-40 flex flex-col">
        <div
          class="bg-background-100 dark:bg-background-900 px-4 py-2 border-b-1 border-slate-300 dark:border-slate-800 flex flex-row w-full items-center justify-around"
        >
          <div class="flex flex-row w-full items-center justify-around md:justify-between max-w-7xl">
            <div class="flex flex-row justify-center items-center cursor-pointer py-2" @click="scrollTo('home')">
              <app-image
                src="https://drive.google.com/uc?id=12GXM4ZHFSNUoeMTtu2YAUcA0wt_A59Nl" placeholder-height="4em"
                placeholder-width="4em" class="hidden md:block w-[4em] rounded-full overflow-hidden"
              />
              <h4 class="hidden md:block mx-4 icon-btn text-xl font-semibold whitespace-nowrap">
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
              <div class="hidden md:flex mr-8">
                <button
                  v-for="section in navBarItems" :key="section.id" class="icon-btn mx-3 text-md md:text-lg"
                  @click="scrollTo(section.id)"
                >
                  {{ section.page_name }}
                </button>
              </div>
              <n-switch :value="isDark" :rail-style="railStyle" @click="toggleDark()">
                <template #unchecked-icon>
                  <div
                    i="carbon-light-filled"
                    class="dark:hidden block text-md md:text-lg bg-primary-700 dark:bg-primary-500 dark:bg-gray-300"
                  />
                  <div i="carbon-light" class="hidden dark:block text-md md:text-lg bg-primary-500 dark:bg-gray-300" />
                </template>
                <template #checked-icon>
                  <div i="carbon-asleep" class="dark:hidden block text-lg md:text-xl bg-gray-300 dark:bg-primary-500" />
                  <div
                    i="carbon-asleep-filled"
                    class="hidden dark:block text-lg md:text-xl bg-gray-300 dark:bg-secondary-500"
                  />
                </template>
              </n-switch>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:hidden fixed left-0 right-0 bottom-0 z-50 flex flex-row w-full bg-background-100 dark:bg-background-900 items-center justify-center text-parragraph dark:text-white px-2 border-t-1 border-slate-300 dark:border-slate-800"
      >
        <div v-for="section in navBarItems" :key="section.id" class="flex flex-col items-center justify-center px-4 py-2">
          <div :class="section.icon" class="text-sm" @click.prevent="handleClickNavMenu(section.id)" />
          <button class="opacity-75 text-xs" @click.prevent="handleClickNavMenu(section.id)">
            {{ section.page_name }}
          </button>
        </div>
      </div>
      <div>
        <main class="text-center text-paragraph dark:text-gray-200">
          <div class="flex flex-col items-center justify-center pb-32">
            <div v-for="section in navBarItems" :ref="section.id" :key="section.id" class="w-full max-w-7xl">
              <section :id="section.id" :class="section.background">
                <div class="flex flex-col items-center justify-center w-full pt-8 md:pt-24">
                  <h4 v-if="section.title !== null" class="text-3xl font-semibold mb-4" :class="section.title_color">
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
  </n-config-provider>
</template>
