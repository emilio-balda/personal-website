<script setup lang="ts">
import NavigationLink from '~/components/NavigationLink.vue'

interface navBarItem {
  route: string
  page_name: string
}

const props = defineProps({
  navBarItems: Object as () => Array<navBarItem>,
})
</script>

<template>
  <div id="nav" class="flex flex-wrap items-center justify-center md:flex-nowrap">
    <NavigationLink v-for="item in props.navBarItems" :key="item.route" :to="item.route" :page-name="item.page_name" />
  </div>
</template>
