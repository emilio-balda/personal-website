
<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
// import FlipCard from '~/components/FlipCard.vue'
import GlowingButton from '~/components/GlowingButton.vue'
import DatarayContent from '~/components/content/PortfolioDataray.vue'
import BoundsPaperContent from '~/components/content/PortfolioBoundsPaper.vue'
import AdversarialPaperContent from '~/components/content/PortfolioAdversarialPaper.vue'
import PersonalWebsiteContent from '~/components/content/PortfolioPersonalWebsite.vue'
import AppModal from '~/components/AppModal.vue'
const router = useRouter()

interface Tag {
  title: string
  color: string
  is_selected: boolean
}

const alias_to_tag: Record<string, Tag> = {
  ml: {
    title: 'machine learning',
    color: 'bg-emerald-600',
    is_selected: false,
  },
  frontend: {
    title: 'frontend',
    color: 'bg-[darkorchid]',
    is_selected: false,
  },
  backend: {
    title: 'backend',
    color: 'bg-[royalblue]',
    is_selected: false,
  },
  vision: {
    title: 'computer vision',
    color: 'bg-orange-500',
    is_selected: false,
  },
  research: {
    title: 'research',
    color: 'bg-gray-500',
    is_selected: false,
  },
}

interface ContentItem {
  title: string
  description: string
  image: string
  content_component: any
  tag_aliases: Array<string>
}

const content: Array<ContentItem> = [
  {
    title: 'Dataray: A Machine Learning SaaS',
    description: 'Dataray is a Software-as-a-Service (SaaS) product that brings artificial intelligence to industrial applications. It is compatible with many database technologies.',
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content_component: DatarayContent,
    tag_aliases: ['frontend', 'backend', 'ml'],
  },
  {
    title: 'This Website',
    description: 'I built this website using Vue JS. You can take a look at the source code in GitHub. Links and tech stack in the detailed view.',
    image: 'https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content_component: PersonalWebsiteContent,
    tag_aliases: ['frontend'],
  },
  {
    title: 'Research Paper: Theoretical Result for Neural Networks',
    description: 'I was the first author of a paper in the field of statistical learning theory and deep neural networks.',
    content_component: BoundsPaperContent,
    image: 'https://images.pexels.com/photos/4021521/pexels-photo-4021521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag_aliases: ['research', 'ml'],
  },
  {
    title: 'Research Paper: Adversarial Examples in Neural Networks',
    description: 'I was the first author of a paper in the field of computer vision and deep neural networks.',
    image: 'https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content_component: AdversarialPaperContent,
    tag_aliases: ['research', 'ml', 'vision'],
  },
]

const isOpen: Ref<Record<string, boolean>> = ref({})

onMounted(() => {
  content.forEach((item: ContentItem) => {
    isOpen.value[item.title] = false
  })
})
</script>
<template>
  <div class="flex flex-row items-center justify-around">
    <div
      v-for="item in content" :key="item.title"
      class="px-2 w-full"
    >
      <div
        class="flex flex-col h-[35rem] w-full items-center justify-center bg-white text-xl text-gray-400 drop-shadow-xl shadow-xl rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer"
      >
        <div
          class="flex items-center justify-center w-full h-5/12 bg-cover bg-center"
          :style="`background-image: url('${item.image}')`"
        >
          <div class="flex items-center justify-center h-fit w-full px-2 bg-black-900/50">
            <h1 class="text-2xl text-white font-semibold">
              {{ item.title }}
            </h1>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between w-3/4 h-7/12">
          <div>
            <div
              v-for="alias in item.tag_aliases" :key="alias"
              class="w-fit rounded-full overflow-hidden text-xs px-2 border-2 border-white-600 inline text-white whitespace-nowrap"
              :class="`${alias_to_tag[alias].color}`"
            >
              {{ alias_to_tag[alias].title }}
            </div>
            <p class="text-base text-dark leading-relaxed px-2 pt-2">
              {{ item.description }}
            </p>
          </div>
          <div class="pb-4">
            <glowing-button label="Expand and See all Details" class_text="text-lg px-4 py-2" @click="isOpen[item.title]=true" />
            <teleport to="body">
              <transition>
                <div v-if="isOpen[item.title]">
                  <app-modal @close-modal="isOpen[item.title]=false">
                    <component :is="item.content_component" />
                    <div class="max-w-xl py-4">
                      <glowing-button label="Contact" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
                    </div>
                  </app-modal>
                </div>
              </transition>
            </teleport>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-col items-center justify-center"></div>
    <div class="flex flex-row w-full items-center justify-between px-10">
      <flip-card
        v-for="item in content"
        :key="item.title" class="w-80 h-[35rem] drop-shadow-xl"
      >
        <template #front>
          <div
            class="flex items-center justify-center w-80 h-[30rem] rounded-lg drop-shadow-xl bg-cover bg-center"
            :style="`background-image: url('${item.image}')`"
          >
            <div class="flex items-center justify-center h-[110px] w-full px-2 bg-black-900/50">
              <h1 class="text-2xl text-white font-bold">
                {{ item.title }}
              </h1>
            </div>
          </div>
        </template>
        <template #back>
          <div class="flex items-center justify-center w-80 h-[30rem] pt-8 px-4 bg-white text-xl text-gray-400 drop-shadow-xl">
            <div>
              <p class="text-gray-600 px-2">
                {{ item.description }}
              </p>
              <div class="inline-block py-8 font-medium">
                <glowing-button label="View Details" class_text="text-lg px-4 py-2" @click="isOpen[item.title]=true" />
                <teleport to="body">
                  <div v-if="isOpen[item.title]">
                    <app-modal @close-modal="isOpen[item.title]=false">
                      <component :is="item.content_component" />
                      <div class="max-w-xl py-4">
                        <glowing-button label="Contact" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
                      </div>
                    </app-modal>
                  </div>
                </teleport>
              </div>
            </div>
          </div>
        </template>
      </flip-card>
    </div>
  </div> -->
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
