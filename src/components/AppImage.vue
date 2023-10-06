<script setup lang="ts">
import { NImage, NSkeleton } from 'naive-ui'

const props = defineProps({
  src: String,
  placeholderHeight: String,
  placeholderWidth: String,
})
</script>

<template>
  <NImage :src="props.src" preview-disabled>
    <template #placeholder>
      <NSkeleton :width="placeholderWidth ? placeholderWidth : '100%'" :height="placeholderHeight ? placeholderHeight : '100%'" />
    </template>
  </NImage>
</template>
