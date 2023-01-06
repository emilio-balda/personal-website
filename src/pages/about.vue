<script setup lang="ts">
import type { Component } from 'vue'
import { NCard, NCarousel, NCarouselItem, NCollapseTransition, NSpace } from 'naive-ui'
import JobHistory from '~/components/content/AboutJobHistory.vue'
import Education from '~/components/content/AboutEducation.vue'
import AuthoredBooks from '~/components/content/AboutAuthoredBooks.vue'
import TechStack from '~/components/content/AboutTechStack.vue'
// import { useContactStore } from '~/stores/contact'

// const contact = useContactStore()

const contactInfo = [
  { icon: 'i-carbon-email bg-primary-700 dark:bg-primary-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-linkedin', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-black dark:bg-white', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]

const skills = [
  { name: 'Python', level: '80%' },
  { name: 'Javascript', level: '30%' },
  { name: 'Frontend Development', level: '30%' },
  { name: 'Backend Development', level: '70%' },
  { name: 'Machine Learning', level: '90%' },
]

interface sectionInterface { id: string; title: string; show: boolean; component: Component }
const sections = ref<Array<sectionInterface>>([
  { id: 'jobs', title: 'Job History', show: false, component: JobHistory },
  { id: 'education', title: 'Education', show: false, component: Education },
  { id: 'books', title: 'Authored Books', show: false, component: AuthoredBooks },
  { id: 'stack', title: 'Tech Stack', show: true, component: TechStack },
])

const getSectionId = (section: sectionInterface) => { return section.title.replace(' ', '-').toLowerCase() }

const handleToggleSection = (section: sectionInterface) => {
  sections.value.forEach((loopSection: sectionInterface) => {
    if (getSectionId(loopSection) === getSectionId(section))

      loopSection.show = !loopSection.show

    else
      loopSection.show = false
  })
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-center p-4">
    <div class="flex flex-wrap items-start justify-around px-4 lg:px-8 lg:w-5/6">
      <div class="flex flex-col p-8 rounded-xl items-center justify-between w-fit mb-8 neumorphic-shadow-12 dark:bg-background-900">
        <div class="pb-4">
          <img src="../assets/me.png" alt="Avatar" class="w-32 rounded-full border-2 border-slate-100">
        </div>
        <div class="flex flex-col items-start w-full">
          <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-start w-full h-fit py-1">
            <div>
              {{ skill.name }}
            </div>
            <div class="h-2 rounded-xl w-full bg-primary-700 dark:bg-primary-500" :style="{width:skill.level}" />
          </div>
        </div>
        <div class="pt-2 text-4xl ">
          <a v-for="content in contactInfo" :key="content.href" class="inline-block px-1 pt-4" :href="content.href">
            <div :class="content.icon" class="transition-all duration-300 hover:-translate-y-2" />
          </a>
        </div>
      </div>
      <div class="flex flex-col w-full mx-4 lg:ml-4 xl:ml-8 lg:w-5/6 xl:w-2/3 ">
        <div>
          <h3 class="text-3xl text-center font-semibold ">
            About Me
          </h3>
        </div>
        <p class="mt-4 mb-8 text-base md:text-lg lg:text-xl text-center leading-relaxed">
          I learned how to keep up with the latest advances in AI during Ph.D. studies. Now, I'm a co-founding member of aiXbrain GmbH to turn these technologies into real software products.
        </p>
        <n-card class="hidden md:flex flex-wrap w-full items-center items-stretch justify-center pb-1 neumorphic-shadow-4 bg-transparent text-app" :bordered="false">
          <n-space justify="center">
            <div v-for="section in sections" :key="section.title" class="mx-2 my-2">
              <button
                class="hover:scale-105 rounded-md px-2 py-1 text-white h-full"
                :class="!section.show ? 'bg-gray-600' : 'bg-primary-700'"
                @click.prevent="handleToggleSection(section)"
              >
                {{ section.title }}
              </button>
            </div>
          </n-space>
          <div class="flex flex-col w-full items-start justify-start pt-2">
            <div v-for="section in sections" :key="section.title" class="w-full h-fit">
              <n-collapse-transition :id="getSectionId(section)" :show="section.show">
                <h3 class="font-bold text-xl pb-3">
                  {{ section.title }}
                </h3>
                <component :is="section.component" />
              </n-collapse-transition>
            </div>
          </div>
        </n-card>
      </div>
    </div>
  </div>
  <n-carousel
    draggable slides-per-view="auto"
    centered-slides
    :loop="false"
    class="md:hidden"
    :show-dots="false"
  >
    <n-carousel-item
      v-for="section in sections" :key="section.title"
      class="p-4"
      style="width: 18rem"
    >
      <div :id="getSectionId(section)" class="flex flex-col w-full items-center justify-start p-2 neumorphic-shadow-4 bg-transparent text-app">
        <h3 class="font-bold text-xl pb-3">
          {{ section.title }}
        </h3>
        <component :is="section.component" />
      </div>
    </n-carousel-item>
  </n-carousel>
</template>
