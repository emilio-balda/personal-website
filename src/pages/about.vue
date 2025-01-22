<script setup lang="ts">
import { NCard, NCollapse, NCollapseItem } from 'naive-ui'
import type { Component } from 'vue'
import AuthoredBooks from '~/components/content/AboutAuthoredBooks.vue'
import Education from '~/components/content/AboutEducation.vue'
import JobHistory from '~/components/content/AboutJobHistory.vue'
import TechStack from '~/components/content/AboutTechStack.vue'
import { composeEmail } from '~/composables/dom'

// const contactInfo = [
//   { icon: 'i-carbon-email bg-app-paragraph', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
//   { icon: 'i-carbon-logo-linkedin bg-app-paragraph', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
//   { icon: 'i-carbon-logo-github bg-app-paragraph', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
// ]

// const skills = [
//   { name: 'Python', level: '100%' },
//   { name: 'Backend Development', level: '100%' },
//   { name: 'Machine Learning', level: '100%' },
//   { name: 'Javascript', level: '30%' },
//   { name: 'Frontend Development', level: '30%' },
// ]

interface sectionInterface { id: string; title: string; show: boolean; component: Component }
const sections = ref<Array<sectionInterface>>([
  { id: 'jobs', title: 'Job History', show: false, component: JobHistory },
  { id: 'education', title: 'Education', show: false, component: Education },
  { id: 'books', title: 'Authored Books', show: false, component: AuthoredBooks },
  { id: 'stack', title: 'Tech Stack', show: true, component: TechStack },
])

function getSectionId(section: sectionInterface) {
  return section.title.replace(' ', '-').toLowerCase()
}
</script>

<template>
  <div class="flex flex-col md:flex-row items-start justify-start px-8 gap-12 w-full">
    <!-- <div
      class="neumorphic-shadow-12 order-2 mb-8 w-fit flex flex-col items-center justify-between rounded-xl p-8 md:order-1 dark:bg-background-900"
    >
      <div class="pb-4">
        <app-image
          src="/assets/informal-color.png" placeholder-height="8rem" placeholder-width="8rem"
          class="w-32 overflow-hidden rounded-full"
        />
      </div>
      <div class="w-full flex flex-col items-start">
        <div v-for="skill in skills" :key="skill.name" class="h-fit w-full flex flex-col items-start py-1">
          <div>
            {{ skill.name }}
          </div>
          <div class="h-2 w-full rounded-xl bg-primary-700 dark:bg-primary-500" :style="{ width: skill.level }" />
        </div>
      </div>
      <div class="pt-2 text-4xl">
        <a v-for="content in contactInfo" :key="content.href" class="inline-block px-1 pt-4" :href="content.href">
          <div :class="content.icon" class="transition-all duration-300 hover:-translate-y-2" />
        </a>
      </div>
    </div> -->
    <NCard class="order-2 md:order-1 neumorphic-shadow-4 bg-transparent text-app-paragraph w-full md:w-1/2" :bordered="false">
      <NCollapse class="text-app-paragraph">
        <NCollapseItem
          v-for="section in sections" :key="section.title"
          :name="getSectionId(section)" class="text-app-paragraph"
        >
          <template #header>
            <h3 class="text-left text-app-paragraph text-xl">
              {{ section.title }}
            </h3>
          </template>
          <template #default>
            <component :is="section.component" />
          </template>
        </NCollapseItem>
      </NCollapse>
    </NCard>
    <div class="order-1 md:order-2 relative w-full md:w-1/2">
      <div class="flex flex-col md:absolute md:top-0 md:left-0">
        <div>
          <h2 class="text-left text-3xl font-semibold">
            About Me
          </h2>
        </div>
        <p class="mb-8 mt-4 text-left leading-relaxed text-lg">
          I learned how to keep up with the latest advances in AI during Ph.D. studies. Now, I'm a co-founding member of
          aiXbrain GmbH to turn these technologies into real software products.
        </p>
        <glowing-button @click="composeEmail({ to: 'me@emilio-balda.com' })">
            <template #icon>
              <div class="i-carbon-email" />
            </template>
            <template #default>
              Get in Touch
            </template>
        </glowing-button>
      </div>
    </div>
  </div>
</template>
