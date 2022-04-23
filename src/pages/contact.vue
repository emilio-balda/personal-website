<script setup lang="ts">
const contactInfo = [
  { icon: 'i-carbon-email bg-green-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-[royalblue]', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
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
    <div class="w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer bg-card">
      <div class="flex flex-col items-start justify-center pb-4 pt-8 px-4">
        <div v-for="content in contactInfo" :key="content.href" class="flex items-center justify-center">
          <div class="w-8">
            <a :href="content.href"><div class="" :class="content.icon" /></a>
          </div>
          <div class="flex-1">
            <a :href="content.href">
              <p class="text-xl text-left whitespace-nowrap dark:text-white">
                {{ content.text }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
