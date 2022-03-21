
<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import TableResponsive from '~/components/TableResponsive.vue'
</script>

<template>
  <table-responsive class="flex items-center justify-center">
    <tr>
      <td class="px-4">
        <product-card />
      </td>
      <td class="px-4">
        <product-card />
      </td>
      <td class="px-4">
        <product-card />
      </td>
    </tr>
  </table-responsive>
</template>
