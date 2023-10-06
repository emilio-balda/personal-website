<script setup lang="ts">
import { NTag } from 'naive-ui'
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

const emits = defineEmits(['knowMore'])

function knowMore(itemId: string | undefined) {
  if (!itemId)
    return

  emits('knowMore', itemId)
}
</script>

<template>
  <div
    class="neumorphic-shadow-2 h-[25rem] w-[15rem] flex flex-col items-center justify-center overflow-hidden rounded-lg text-xl md:h-[35rem] md:w-72 dark:bg-background-900 md:transition-all md:duration-300 md:hover:-translate-y-2"
  >
    <div
      class="h-5/12 w-full flex items-center justify-center bg-cover bg-center"
      :style="`background-image: url('${props.item?.image}')`"
    >
      <div class="bg-black-900/50 h-fit w-full flex items-center justify-center px-2">
        <h1 class="text-2xl font-semibold text-white">
          {{ props.item?.title }}
        </h1>
      </div>
    </div>
    <div class="h-7/12 w-3/4 flex flex-col items-center justify-between">
      <div>
        <div v-if="props.aliasToTag" class="hidden md:flex md:flex-wrap md:items-center md:justify-center">
          <NTag v-for="alias in props.item?.tag_aliases" :key="alias" :round="true" type="success" :bordered="true">
            {{ props.aliasToTag[alias].title }}
          </NTag>
        </div>
        <p class="mx-2 pt-2 text-base font-light leading-relaxed">
          {{ props.item?.description }}
        </p>
      </div>
      <div class="pb-4">
        <glowing-button @click="knowMore(props.item?.id)">
          Know More
        </glowing-button>
      </div>
    </div>
  </div>
</template>
