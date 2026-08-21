<script setup lang="ts">
import { NConfigProvider, NSwitch, darkTheme } from 'naive-ui'
import type { CSSProperties } from 'vue'
import { onMounted, ref } from 'vue'
import AppImage from '~/components/AppImage.vue'
import { isDark, toggleDark } from '~/composables'
import { composeEmail, downloadFile, scrollTo } from '~/composables/dom'
import About from '~/pages/about.vue'
import Approach from '~/pages/approach.vue'
import Contact from '~/pages/contact.vue'
import Home from '~/pages/index.vue'
import Portfolio from '~/pages/portfolio.vue'
import Services from '~/pages/services.vue'

const sections = [
  { id: 'home', label: 'Home', component: Home },
  { id: 'services', label: 'Services', component: Services },
  { id: 'work', label: 'Work', component: Portfolio },
  { id: 'approach', label: 'Approach', component: Approach },
  { id: 'about', label: 'About', component: About },
  { id: 'contact', label: 'Contact', component: Contact },
]

const navigation = sections.filter(section => !['home', 'contact'].includes(section.id))
const showNavMenu = ref(false)

function goToSection(sectionId: string) {
  showNavMenu.value = false
  scrollTo(sectionId)
}

function discussProject() {
  composeEmail({
    to: 'me@emilio-balda.com',
    subject: 'AI software project inquiry',
  })
}

function downloadCv() {
  downloadFile({
    filename: 'CV-Emilio-Balda.pdf',
    href: 'https://drive.google.com/uc?id=1AFqS99db8Elw7b3hin9RcXHVt2zNU5pF',
  })
}

function railStyle({ checked }: { checked: boolean }) {
  const style: CSSProperties = {}
  style.background = checked ? 'var(--paragraph)' : '#d9e1e6'
  return style
}

const themeOverrides = {
  common: {
    successColor: '#08987E',
  },
}

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : null" :theme-overrides="themeOverrides">
    <div class="min-h-screen overflow-x-hidden text-app-paragraph">
      <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-background-100/92 backdrop-blur-xl dark:border-slate-800/80 dark:bg-background-900/92">
        <div class="mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 py-3 md:px-8">
          <button class="min-w-0 flex items-center gap-3 text-left" title="Go to home" @click="goToSection('home')">
            <AppImage
              src="/assets/informal-color.webp"
              alt="Emilio Balda"
              placeholder-height="2.5rem"
              placeholder-width="2.5rem"
              class="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary-500/60"
            />
            <span class="min-w-0">
              <span class="block truncate text-sm font-bold tracking-[0.14em] uppercase">Emilio Balda</span>
              <span class="hidden truncate text-xs text-slate-500 sm:block dark:text-slate-400">AI Software Engineer</span>
            </span>
          </button>

          <nav class="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <button
              v-for="section in navigation"
              :key="section.id"
              class="text-sm font-semibold text-slate-600 transition-colors dark:text-slate-300 hover:text-primary-900 dark:hover:text-primary-500"
              @click="goToSection(section.id)"
            >
              {{ section.label }}
            </button>
          </nav>

          <div class="flex shrink-0 items-center gap-2 sm:gap-3">
            <button class="hidden items-center gap-2 px-2 py-2 text-sm font-semibold md:flex hover:text-primary-900 dark:hover:text-primary-500" @click="downloadCv">
              <span class="i-carbon-download" aria-hidden="true" />
              CV
            </button>
            <button class="hidden rounded-lg bg-background-900 px-4 py-2 text-sm font-bold text-white shadow-md sm:block" @click="discussProject">
              Discuss a project
            </button>
            <NSwitch :value="isDark" :rail-style="railStyle" aria-label="Toggle dark mode" @click="toggleDark()">
              <template #unchecked-icon>
                <span class="i-carbon-light-filled bg-primary-700" aria-hidden="true" />
              </template>
              <template #checked-icon>
                <span class="i-carbon-asleep-filled bg-secondary-500" aria-hidden="true" />
              </template>
            </NSwitch>
            <button
              class="h-10 w-10 flex items-center justify-center border border-slate-200 rounded-lg lg:hidden dark:border-slate-700"
              :aria-expanded="showNavMenu"
              aria-label="Toggle navigation menu"
              @click="showNavMenu = !showNavMenu"
            >
              <span :class="showNavMenu ? 'i-carbon-close' : 'i-carbon-menu'" aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav v-if="showNavMenu" class="border-t border-slate-200 px-4 py-4 lg:hidden dark:border-slate-800" aria-label="Mobile navigation">
          <div class="grid grid-cols-2 mx-auto max-w-7xl gap-2">
            <button
              v-for="section in navigation"
              :key="section.id"
              class="rounded-lg px-4 py-3 text-left text-sm font-semibold hover:bg-primary-500/10"
              @click="goToSection(section.id)"
            >
              {{ section.label }}
            </button>
            <button class="rounded-lg px-4 py-3 text-left text-sm font-semibold hover:bg-primary-500/10" @click="downloadCv">
              Download CV
            </button>
            <button class="rounded-lg bg-background-900 px-4 py-3 text-left text-sm font-bold text-white" @click="discussProject">
              Discuss a project
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          v-for="section in sections"
          :id="section.id"
          :key="section.id"
          class="scroll-mt-24"
        >
          <component :is="section.component" />
        </section>
      </main>

      <footer class="border-t border-slate-200 dark:border-slate-800">
        <div class="mx-auto max-w-7xl flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p class="font-bold tracking-[0.14em] uppercase">
              Emilio Balda
            </p>
            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
              AI Software Engineer · Agentic Systems &amp; Production LLMs
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-5 text-sm font-semibold">
            <a href="mailto:me@emilio-balda.com" class="hover:text-primary-900 dark:hover:text-primary-500">Email</a>
            <a href="https://www.linkedin.com/in/emiliobalda/" target="_blank" rel="noopener" class="hover:text-primary-900 dark:hover:text-primary-500">LinkedIn</a>
            <a href="https://github.com/emilio-balda" target="_blank" rel="noopener" class="hover:text-primary-900 dark:hover:text-primary-500">GitHub</a>
            <button class="hover:text-primary-900 dark:hover:text-primary-500" @click="downloadCv">
              Download CV
            </button>
          </div>
        </div>
      </footer>
    </div>
  </NConfigProvider>
</template>
