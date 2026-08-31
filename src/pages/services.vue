<script setup lang="ts">
import { composeEmail } from '~/composables/dom'

interface ContentItem {
  title: string
  description: string
  image: string
}
const content: Array<ContentItem> = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    title: 'Tap into your Backend with an Interactive Frontend',
    description: 'Lets add a professionally looking dashboard to interact with your existing backend services. The dashboard will be tailored to your needs, responsive, interactive and accessible through any browser.',
  },
  {
    image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    title: 'Boost your Existing App with Artificial Intelligence',
    description: 'Want to include artificial intelligence into the mix? Lets get in contact to get that feature into production, all the way from setting up database connections to showing the results in a modern Javascript frontend.',
  },
  {
    image: 'https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Understand Complex Data with Interactive Visualizations',
    description: 'Is your data too complex to visualize in standard static charts? Lets design interactive visualizations that instantly highlight relevant information, filter out clutter, and group together when needed.',
  },
]
</script>

<template>
  <div class="flex flex-wrap items-center justify-center">
    <div class="flex flex-wrap items-stretch justify-center lg:w-5/6">
      <perfect-scrollbar v-for="item in content" :key="item.title" class="neumorphic-shadow-12 mx-4 mb-2 mt-4 w-[19em] flex flex-col items-center justify-between overflow-hidden rounded-lg transition-all duration-300 md:w-90 dark:bg-background-900 hover:-translate-y-2">
        <div class="mb-10 overflow-hidden rounded-lg">
          <img
            :src="item.image"
            alt="image"
            class="h-72 w-full"
          >
          <div class="px-8 pt-4 text-center md:px-7 sm:px-9 xl:px-9">
            <h3
              class="hover:text-primary mb-4 block text-xl font-semibold 2xl:text-[22px] lg:text-[22px] md:text-xl sm:text-[22px] xl:text-xl"
            >
              {{ item.title }}
            </h3>
            <p class="text-base leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class="pb-8 font-medium">
          <glowing-button @click="composeEmail({ to: 'me@emilio-balda.com' })">
            <template #icon>
              <div class="i-carbon-email" />
            </template>
            <template #default>
              Get in Touch
            </template>
          </glowing-button>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>
