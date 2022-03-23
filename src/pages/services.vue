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
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
            alt="image"
            class="w-full"
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
                50+ Best creative website themes & templates
              </a>
            </h3>
            <p class="text-base text-body-color leading-relaxed mb-7">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing
              elit. Lorem consectetur adipiscing elit.
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
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
            alt="image"
            class="w-full"
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
                The ultimate UX and UI guide to card design
              </a>
            </h3>
            <p class="text-base text-body-color leading-relaxed mb-7">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing
              elit. Lorem consectetur adipiscing elit.
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
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
            alt="image"
            class="w-full"
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
                Creative Card Component designs graphic elements
              </a>
            </h3>
            <p class="text-base text-body-color leading-relaxed mb-7">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing
              elit. Lorem consectetur adipiscing elit.
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
