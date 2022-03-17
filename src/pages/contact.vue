<script setup lang="ts">
import AppCard from '~/components/AppCard.vue'
import TableResponsive from '~/components/TableResponsive.vue'
</script>

<template>
  <app-card class="w-fit mx-auto">
    <table-responsive>
      <tr class="py-10 hover:text-emerald-400">
        <td class="px-4">
          <div i-carbon-email />
        </td>
        <td>
          <p class="text-xl text-left whitespace-nowrap">
            <a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a>
          </p>
        </td>
      </tr>
      <tr class="py-10 hover:text-emerald-400">
        <td class="px-4">
          <div i-carbon-logo-linkedin />
        </td>
        <td>
          <p class="text-xl text-left whitespace-nowrap">
            <a href="https://www.linkedin.com/in/emiliobalda/">emiliobalda</a>
          </p>
        </td>
      </tr>
    </table-responsive>
  </app-card>
</template>
