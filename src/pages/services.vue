<script setup lang="ts">
import GlowingButton from '~/components/GlowingButton.vue'

const router = useRouter()

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
    <div class="flex flex-wrap items-center justify-center lg:w-5/6">
      <div v-for="item in content" :key="item.title" class="flex flex-col justify-between  items-center w-[19em] md:w-80 mt-4 mb-2 h-[42em] hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer rounded-lg overflow-hidden mx-4 bg-white drop-shadow shadow-xl">
        <div class="rounded-lg overflow-hidden mb-10">
          <img
            :src="item.image"
            alt="image"
            class="w-full h-72"
          >
          <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3>
              <a
                href="javascript:void(0)"
                class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                      "
              >
                {{ item.title }}
              </a>
            </h3>
            <p class="text-base text-body-color leading-relaxed mb-7">
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class="pb-8 px-7 font-medium">
          <glowing-button label="Book a Free Discovery Call" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
        </div>
      </div>
    </div>
  </div>
</template>
