<script setup lang="ts">
const contactInfo = [
  { icon: 'i-carbon-email bg-app-paragraph', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-app-paragraph', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-app-paragraph', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]
</script>

<template>
  <div class="flex flex-col items-center justify-start min-h-[calc(50vh)]">
    <h1 class="text-2xl pb-4 font-bold">
      Let's Connect!
    </h1>
    <div class="rounded-xl overflow-hidden cursor-pointer neumorphic-shadow-12 dark:bg-background-900 mt-4 flex flex-wrap items-start justify-center p-4 md:p-8">
      <div v-for="content in contactInfo" :key="content.href" class="flex items-center justify-center">
        <div class="text-6xl mx-2 md:mx-4 transition-all duration-300 hover:-translate-y-2">
          <a :href="content.href"><div class="" :class="content.icon" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
