<script setup lang="ts">
import { NImage, NSkeleton } from 'naive-ui'

const props = defineProps({
  src: String,
  placeholderHeight: String,
  placeholderWidth: String,
})
</script>

<template>
  <n-image :src="props.src" preview-disabled>
    <template #placeholder>
      <n-skeleton :width="placeholderWidth? placeholderWidth : '100%'" :height="placeholderHeight? placeholderHeight : '100%'" />
    </template>
  </n-image>
</template>
