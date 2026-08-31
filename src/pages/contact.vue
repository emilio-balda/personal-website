<script setup lang="ts">
const contactInfo = [
  { icon: 'i-carbon-email bg-app-paragraph', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-app-paragraph', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-app-paragraph', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]
</script>

<template>
  <div class="min-h-[calc(50vh)] flex flex-col items-center justify-start">
    <h1 class="pb-4 text-2xl font-bold">
      Let's Connect!
    </h1>
    <div class="neumorphic-shadow-12 mt-4 flex flex-wrap cursor-pointer items-start justify-center overflow-hidden rounded-xl p-4 dark:bg-background-900 md:p-8">
      <div v-for="content in contactInfo" :key="content.href" class="flex items-center justify-center">
        <div class="mx-2 text-6xl transition-all duration-300 md:mx-4 hover:-translate-y-2">
          <a :href="content.href"><div class="" :class="content.icon" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
