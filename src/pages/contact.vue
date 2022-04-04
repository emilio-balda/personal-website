<script setup lang="ts">
import TableResponsive from '~/components/TableResponsive.vue'
const contactInfo = [
  { icon: 'i-carbon-email bg-green-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-[royalblue]', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-black', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]

</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      <div class="py-2 px-2">
        <table-responsive>
          <tr v-for="content in contactInfo" :key="content.href" class="py-12 px-12">
            <td class="px-4">
              <a :href="content.href"><div :class="`${content.icon}`" /></a>
            </td>
            <td class="pl-2">
              <p class="text-xl text-left whitespace-nowrap">
                <a :href="content.href">{{ content.text }}</a>
              </p>
            </td>
          </tr>
        </table-responsive>
      </div>
    </div>
  </div>
</template>
