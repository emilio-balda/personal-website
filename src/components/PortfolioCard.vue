<script setup lang="ts">
import type { PropType } from 'vue'

interface Tag {
  title: string
  color: string
  is_selected: boolean
}

interface ContentItem {
  id: string
  title: string
  description: string
  image: string
  content_component: any
  tag_aliases: Array<string>
}

const props = defineProps({
  item: Object as PropType<ContentItem>,
  aliasToTag: Object as PropType<Record<string, Tag>>,
})

const emits = defineEmits(['know-more'])

function knowMore(itemId) {
  emits('know-more', itemId)
}
</script>

<template>
  <div
    class="flex flex-col h-[40rem] md:h-[35rem] items-center justify-center text-xl rounded-lg overflow-hidden dark:bg-background-900 neumorphic-shadow-2 md:transition-all md:duration-300 md:hover:-translate-y-2 max-w-72"
  >
    <div
      class="flex items-center justify-center w-full h-5/12 bg-cover bg-center"
      :style="`background-image: url('${props.item.image}')`"
    >
      <div class="flex items-center justify-center h-fit w-full px-2 bg-black-900/50">
        <h1 class="text-2xl text-white font-semibold">
          {{ props.item.title }}
        </h1>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between w-3/4 h-7/12">
      <div>
        <div class="flex flex-wrap items-center justify-center">
          <div
            v-for="alias in props.item.tag_aliases" :key="alias"
            class="w-fit rounded-full text-xs px-2 m-1 border-2 inline text-primary-700 border-primary-700 whitespace-nowrap"
          >
            {{ props.aliasToTag[alias].title }}
          </div>
        </div>
        <p class="text-base  leading-relaxed font-light mx-2 pt-2">
          {{ props.item.description }}
        </p>
      </div>
      <div class="pb-4">
        <glowing-button label="Know More" class_text="text-lg px-4 py-2" @click="knowMore(props.item.id)" />
      </div>
    </div>
  </div>
</template>
