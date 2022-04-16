<script setup lang="ts">
import NavigationLink from '~/components/NavigationLink.vue'

interface navBarItem {
  route: String
  page_name: String
}

const props = defineProps({
  navBarItems: [],
})
</script>

<template>
  <div id="nav" class="flex w-full items-center justify-center">
    <div class="text-3xl">
      <navigation-link v-for="item in props.navBarItems" :key="item.route" :to="item.route" :page-name="item.page_name" />
    </div>
  </div>
</template>
