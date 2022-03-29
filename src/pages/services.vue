<script setup lang="ts">
import { userRouter } from 'vue-router'
import GlowingButton from '~/components/GlowingButton.vue'

const router = useRouter()
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-wrap w-5/6">
      <div class="w-full md:w-1/2 xl:w-1/3 px-4 hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
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
                Tap into your Backend with an Interactive Frontend
              </a>
            </h3>
            <p class="text-base text-body-color leading-relaxed mb-7">
              Lets add an professionally looking dashboard to interact with your existing backend services. The dashboard will be tailored to your needs, responsive, interactive and accessible through any browser.
            </p>
            <div class="inline-block py-2 px-7 font-medium">
              <glowing-button label="Contact" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 px-4 hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
          <img
            src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
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
                Boost your Existing App with AI
              </a>
            </h3>
            <p class="text-base text-body-color leading-relaxed mb-7">
              Want to include artificial intelligence into the mix? Lets get in contact to get that feature into production, all the way from setting up database connections to showing the results in a modern Javascript frontend.
            </p>
            <div class="inline-block py-2 px-7 font-medium">
              <glowing-button label="Contact" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 px-4 hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
          <img
            src="https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
                Understand Complex Data with Interactive Visualizations
              </a>
            </h3>
            <p class="text-base text-body-color leading-relaxed mb-7">
              Is your data too complex to visualize in standard static charts? Lets design interactive visualizations that instantly highlight relevant information, filter out clutter, and group together when needed.
            </p>
            <div class="inline-block py-2 px-7 font-medium">
              <glowing-button label="Contact" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
