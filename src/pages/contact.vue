<script setup lang="ts">
import AppCard from '~/components/AppCard.vue'
import TableResponsive from '~/components/TableResponsive.vue'
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      <table-responsive>
        <tr class="py-20 px-20">
          <td class="px-4">
            <a href="mailto:me@emilio-balda.com"><div i-carbon-email /></a>
          </td>
          <td>
            <p class="text-xl text-left whitespace-nowrap">
              <a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a>
            </p>
          </td>
        </tr>
        <tr class="py-10">
          <td class="px-4">
            <a href="https://www.linkedin.com/in/emiliobalda/"><div i-carbon-logo-linkedin /></a>
          </td>
          <td>
            <a href="https://www.linkedin.com/in/emiliobalda/"><p class="text-xl text-left whitespace-nowrap">
              emiliobalda
            </p></a>
          </td>
        </tr>
      </table-responsive>
    </div>
  </div>
</template>
