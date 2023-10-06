<script setup lang="ts">
import { NCard, NCollapse, NCollapseItem } from 'naive-ui'
import type { Component } from 'vue'
import AuthoredBooks from '~/components/content/AboutAuthoredBooks.vue'
import Education from '~/components/content/AboutEducation.vue'
import JobHistory from '~/components/content/AboutJobHistory.vue'
import TechStack from '~/components/content/AboutTechStack.vue'

// import { useContactStore } from '~/stores/contact'

// const contact = useContactStore()

const contactInfo = [
  { icon: 'i-carbon-email bg-app-paragraph', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-app-paragraph', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-app-paragraph', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
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

function getSectionId(section: sectionInterface) {
  return section.title.replace(' ', '-').toLowerCase()
}
</script>

<template>
  <div class="flex flex-wrap items-start justify-around px-8 lg:w-5/6">
    <div
      class="neumorphic-shadow-12 order-2 mb-8 w-fit flex flex-col items-center justify-between rounded-xl p-8 md:order-1 dark:bg-background-900"
    >
      <div class="pb-4">
        <app-image
          src="https://drive.google.com/uc?id=12GXM4ZHFSNUoeMTtu2YAUcA0wt_A59Nl" placeholder-height="8rem"
          placeholder-width="8rem" class="w-32 overflow-hidden rounded-full"
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
    </div>
    <div class="order-1 w-2/3 flex flex-col md:order-2 lg:ml-4 xl:ml-8">
      <div>
        <h3 class="text-center text-3xl font-semibold">
          About Me
        </h3>
      </div>
      <p class="mb-8 mt-4 text-center text-base leading-relaxed lg:text-xl md:text-lg">
        I learned how to keep up with the latest advances in AI during Ph.D. studies. Now, I'm a co-founding member of
        aiXbrain GmbH to turn these technologies into real software products.
      </p>
    </div>
    <NCard class="neumorphic-shadow-4 order-3 bg-transparent md:order-3 text-app-paragraph" :bordered="false">
      <NCollapse class="text-app-paragraph">
        <NCollapseItem
          v-for="section in sections" :key="section.title" :title="section.title"
          :name="getSectionId(section)" class="text-app-paragraph"
        >
          <component :is="section.component" />
        </NCollapseItem>
      </NCollapse>
    </NCard>
  </div>
</template>
