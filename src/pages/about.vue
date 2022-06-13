<script setup lang="ts">
import type { Component } from 'vue'
import JobHistory from '~/components/content/AboutJobHistory.vue'
import Education from '~/components/content/AboutEducation.vue'
import AuthoredBooks from '~/components/content/AboutAuthoredBooks.vue'
import TechStack from '~/components/content/AboutTechStack.vue'
// import { useContactStore } from '~/stores/contact'

// const contact = useContactStore()

const contactInfo = [
  { icon: 'i-carbon-email bg-primary-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-[var(--secondary-500)]', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-black dark:bg-white', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]

const skills = [
  { name: 'Python', level: '80%' },
  { name: 'Javascript', level: '30%' },
  { name: 'Frontend Development', level: '30%' },
  { name: 'Backend Development', level: '70%' },
  { name: 'Machine Learning', level: '90%' },
]

interface sectionInterface { title: string; show: boolean; component: Component }
const sections = ref<Array<sectionInterface>>([
  { title: 'Job History', show: false, component: JobHistory },
  { title: 'Education', show: false, component: Education },
  { title: 'Authored Books', show: false, component: AuthoredBooks },
  { title: 'Tech Stack', show: true, component: TechStack },
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

// function onAfterEnter(el: HTMLElement) {
//   document.querySelector(`#${el.id}`)?.scrollIntoView({ behavior: 'smooth' })
// }
function onAfterEnter() {}

</script>

<template>
  <div class="flex flex-wrap items-center justify-center">
    <div class="flex flex-wrap items-start justify-around px-4 lg:px-8 lg:w-5/6">
      <div class="flex flex-col p-8 rounded-xl items-center justify-between w-fit mb-8 neumorphic-shadow bg-background-900">
        <div class="pb-4">
          <img src="../assets/me.png" alt="Avatar" class="w-32 rounded-full border-2 border-slate-100">
        </div>
        <div class="flex flex-col items-start w-full">
          <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-start w-full h-fit py-1">
            <div>
              {{ skill.name }}
            </div>
            <div class="h-2 rounded-xl w-full bg-primary-500" :style="{width:skill.level}" />
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
        <div class="mt-4 mb-8">
          <p class="text-base md:text-lg lg:text-xl text-justify ">
            I learned how to keep up with the latest advances in AI during Ph.D. studies. Now, I'm a co-founding member of aiXbrain GmbH to turn these technologies into real software products.
          </p>
        </div>
        <div class="flex flex-wrap w-full items-center items-stretch justify-center pb-1">
          <div v-for="section in sections" :key="section.title" class="mx-2 my-2">
            <button
              class="hover:scale-105 rounded-md px-2 py-1 text-white h-full"
              :class="!section.show ? 'bg-gray-600' : 'bg-primary-500'" @click.prevent="handleToggleSection(section)"
            >
              {{ section.title }}
            </button>
          </div>
        </div>
        <div class="flex flex-col w-full items-start justify-start pt-2 max-h-128 overflow-y-auto">
          <div v-for="section in sections" :key="section.title" class="pb-4 w-full h-fit">
            <transition @after-enter="onAfterEnter">
              <div v-if="section.show" :id="getSectionId(section)">
                <h3 class="font-bold text-xl pb-3">
                  {{ section.title }}
                </h3>
                <component :is="section.component" />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
