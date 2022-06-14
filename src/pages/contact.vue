<script setup lang="ts">
const contactInfo = [
  { icon: 'i-carbon-email bg-primary-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-linkedin', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-black dark:bg-white', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <h1 class="text-2xl pb-4 font-bold">
        Let's Connect!
      </h1>
    </div>
    <div class="rounded-xl overflow-hidden cursor-pointer neumorphic-shadow dark:bg-background-900 mt-4">
      <div class="flex flex-wrap items-start justify-center p-4 md:p-8">
        <div v-for="content in contactInfo" :key="content.href" class="flex items-center justify-center">
          <div class="text-6xl mx-2 md:mx-4 transition-all duration-300 hover:-translate-y-2">
            <a :href="content.href"><div class="" :class="content.icon" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
