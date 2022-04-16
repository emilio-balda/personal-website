<script setup lang="ts">
import JobHistory from '~/components/content/AboutJobHistory.vue'
import Education from '~/components/content/AboutEducation.vue'
import AuthoredBooks from '~/components/content/AboutAuthoredBooks.vue'
// import { useContactStore } from '~/stores/contact'

// const contact = useContactStore()

const contactInfo = [
  { icon: 'i-carbon-email bg-green-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-[royalblue]', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-black', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]

const skills = [
  { name: 'Python', level: '80%' },
  { name: 'Javascript', level: '30%' },
  { name: 'Frontend Development', level: '30%' },
  { name: 'Backend Development', level: '70%' },
  { name: 'Machine Learning', level: '90%' },
]

const sections = ref([
  { title: 'Job History', show: false, component: JobHistory },
  { title: 'Education', show: false, component: Education },
  { title: 'Authored Books', show: false, component: AuthoredBooks },
])

const handleToggleSection = (section) => {
  section.show = !section.show
}

</script>

<template>
  <div class="flex items-center justify-center">
    <div class="flex items-start justify-around px-8 w-3/4">
      <div class="flex flex-col drop-shadow shadow-2xl p-8 rounded-xl items-center justify-between w-fit">
        <div class="pb-4">
          <img src="../assets/me.png" alt="Avatar" class="w-32 rounded-full border-2 border-slate-100">
        </div>
        <div class="flex flex-col items-start w-full">
          <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-start w-full h-fit py-1">
            <div>
              {{ skill.name }}
            </div>
            <div class="h-2 rounded-xl w-full bg-emerald-500" :style="{width:skill.level}" />
          </div>
        </div>
        <div class="pt-2 text-xl text-dark">
          <a v-for="content in contactInfo" :key="content.href" class="inline-block px-1 pt-4" :href="content.href">
            <div :class="content.icon" />
          </a>
        </div>
      </div>
      <div class="flex flex-col w-2/3">
        <div>
          <h3 class="text-3xl text-center font-semibold text-dark">
            About Me
          </h3>
        </div>
        <div>
          <p class="text-2xl text-justify py-10 text-dark">
            I learned how to keep up with the latest advances in AI during Ph.D. studies. Now, I'm a co-founding member of aiXbrain GmbH to turn these technologies into real software products.
          </p>
        </div>
        <div class="flex flex-row w-full items-center justify-center pb-3">
          <div v-for="section in sections" :key="section.title" class="px-2">
            <button
              class="hover:scale-105 rounded-md px-2 py-1 text-white"
              :class="!section.show ? 'bg-gray-600' : 'bg-emerald-600'" @click.prevent="handleToggleSection(section)"
            >
              {{ section.title }}
            </button>
          </div>
        </div>
        <div class="flex flex-col w-full items-start justify-start pt-8 h-128 overflow-y-auto">
          <div v-for="section in sections" :key="section.title" class="px-2 pb-4 w-full h-fit">
            <transition>
              <div v-show="section.show">
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
