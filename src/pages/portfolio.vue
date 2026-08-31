<script setup lang="ts">
import { NModal } from 'naive-ui'
import type { Ref } from 'vue'
import { ref } from 'vue'

import PortfolioCard from '~/components/PortfolioCard.vue'
import AdversarialPaperContent from '~/components/content/PortfolioAdversarialPaper.vue'
import BoundsPaperContent from '~/components/content/PortfolioBoundsPaper.vue'
import DatarayContent from '~/components/content/PortfolioDataray.vue'
import PersonalWebsiteContent from '~/components/content/PortfolioPersonalWebsite.vue'
import { composeEmail } from '~/composables/dom'

interface Tag {
  title: string
  color: string
  is_selected: boolean
}

const alias_to_tag: Record<string, Tag> = {
  ml: {
    title: '< machine-learning />',
    color: 'bg-green-500',
    is_selected: false,
  },
  frontend: {
    title: '< frontend />',
    color: 'bg-pink-700',
    is_selected: false,
  },
  backend: {
    title: '< backend />',
    color: 'bg-blue-500',
    is_selected: false,
  },
  research: {
    title: '< research />',
    color: 'bg-gray-500',
    is_selected: false,
  },
}

interface ContentItem {
  id: string
  title: string
  description: string
  image: string
  content_component: any
  tag_aliases: Array<string>
}

const content: Array<ContentItem> = [
  {
    id: 'portfolio-dataray',
    title: 'Dataray: A Machine Learning SaaS',
    description: 'Dataray is a No-Code web application that brings artificial intelligence to industrial businesses.',
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content_component: DatarayContent,
    tag_aliases: ['frontend', 'backend', 'ml'],
  },
  {
    id: 'portfolio-website',
    title: 'This Website',
    description: 'I built this website using Vue JS. Take a look at the source code and tech stack on my GitHub.',
    image: 'https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content_component: PersonalWebsiteContent,
    tag_aliases: ['frontend'],
  },
  {
    id: 'portfolio-research-theory',
    title: 'Research Paper: Theoretical Result for Neural Networks',
    description: 'I was the first author of a paper about statistical learning theory and deep neural networks.',
    content_component: BoundsPaperContent,
    image: 'https://images.pexels.com/photos/4021521/pexels-photo-4021521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag_aliases: ['research', 'ml'],
  },
  {
    id: 'portfolio-research-adversarial',
    title: 'Research Paper: Adversarial Examples in Neural Networks',
    description: 'I was the first author of a paper about computer vision and deep neural networks.',
    image: 'https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content_component: AdversarialPaperContent,
    tag_aliases: ['research', 'ml'],
  },
]

const isOpen: Ref<Record<string, boolean>> = ref({})
const callToActionIsPending: Ref<boolean> = ref(false)

onMounted(() => {
  content.forEach((item: ContentItem) => {
    isOpen.value[item.id] = false
  })
})

function handleBookCall(item_id: string) {
  callToActionIsPending.value = true
  isOpen.value[item_id] = false
}

function handleKnowMore(item_id: string) {
  isOpen.value[item_id] = true
}

function handleModalAfterLeave() {
  if (callToActionIsPending.value) {
    callToActionIsPending.value = false
    composeEmail({ to: 'me@emilio-balda.com' })
  }
}
</script>

<template>
  <div class="relative flex flex-wrap items-stretch justify-center">
    <div
      v-for="item in content"
      :key="item.title"
      class="px-4 pb-8 pt-4"
    >
      <PortfolioCard :item="item" :alias-to-tag="alias_to_tag" @know-more="(itemId) => handleKnowMore(itemId)" />
    </div>
    <NModal
      v-for="item in content" :id="item.id"
      :key="item.id" v-model:show="isOpen[item.id]"
      :auto-focus="false"
      @after-leave="handleModalAfterLeave"
    >
      <div class="max-w-3xl w-11/12 flex flex-col items-center overflow-hidden rounded-lg shadow-xl md:w-9/12 bg-app-background">
        <div class="shrink-0 self-end px-4 py-4">
          <div
            i-carbon-circle-solid
            class="text-lg text-red-600 focus:text-red-500 hover:text-red-500"
            @click.prevent="isOpen[item.id] = false"
          />
        </div>
        <div class="gradient-bg-image w-full flex-grow pb-1" />
        <perfect-scrollbar class="h-full w-full flex flex-col items-center px-4 py-8 bg-app-background md:px-8">
          <component :is="item.content_component" />
          <div class="max-w-xl py-4">
            <glowing-button @click.prevent="handleBookCall(item.id)">
              <template #icon>
                <div class="i-carbon-email" />
              </template>
              <template #default>
                Get in Touch
              </template>
            </glowing-button>
          </div>
        </perfect-scrollbar>
        <div class="gradient-bg-image w-full flex-grow pb-1" />
        <div class="w-full shrink-0 self-end px-10 py-6 bg-app-background" />
      </div>
    </NModal>
  </div>
</template>

<style scoped>
.gradient-bg-image {
  background-image: linear-gradient(to right, rgba(0,0,0,0), var(--secondary-500), var(--primary-500), rgba(0,0,0,0));
}
</style>
