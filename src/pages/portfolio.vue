
<script setup lang="ts">
import FlipCard from '~/components/FlipCard.vue'
import GlowingButton from '~/components/GlowingButton.vue'

const content = [
  {
    title: 'Dataray Web App',
    description: 'Together with a team of 3 developers, we built a data science SaaS product called Dataray. The backend is built in Python, using FastAPI and DJango. The frontend is built in TypeScript, using Vue 3 and Tailwindcss. It is hosted in Google Cloud using Kubernetes and Helm. Tests are written with pytest and integration tests are implemented with GitLab CI.',
    image: 'https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
  },
  {
    title: 'Serverless Website',
    description: 'This website is written 100% in TypeScript using Vue 3 and Tailwind CSS. The code is linted with ESLint. Unit tests are written with Jest, while Cypress handles integration tests. It is hosted in a serverless architecture using AWS Lambda functions.',
    image: 'https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
  },
  {
    title: 'Research Paper: Theoretical Result for Neural Networks',
    description: 'The goal was to publish a theoretical paper about the generalization capabilities of deep neural networks under the presence of a malicious attacker modifying the inputs of the network. I used tools from statistical learning theory to derive theoretical bounds that scaled better with the input dimension and the number of classes with respect to other existing bounds. The paper was published in AISTATS 2020.',
    image: 'https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
  },
  {
    title: 'Research Paper: Adversarial Examples in Neural Networks',
    description: 'The goal was to publish a journal about new algorithms to generate "adversarial examples". I designed a mathematical framework that allowed me to derive new algorithms suited for different computer vision tasks. These algorithms outperformed their counterparts in the task of fooling neural networks. The paper was published in the renowned journal "IEEE Transactions on Signal Processing".',
    image: 'https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
  },
]
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="grid grid-cols-4 gap-8">
      <flip-card
        v-for="item in content"
        :key="item.title" class=" w-80 h-[35rem] drop-shadow-xl"
      >
        <template #front>
          <div
            class="flex items-center justify-center w-80 h-[35rem] rounded-lg drop-shadow-xl bg-cover bg-center"
            :style="`background-image: url('${item.image}')`"
          >
            <h1 class="text-2xl text-white font-bold px-2">
              {{ item.title }}
            </h1>
          </div>
        </template>
        <template #back>
          <div class="flex items-center justify-center w-80 h-[35rem] pt-8 px-4 bg-white text-xl text-gray-400 drop-shadow-xl">
            <div>
              <p>{{ item.description }}</p>
              <div class="inline-block py-8 font-medium">
                <glowing-button label="Read More" class_text="text-lg px-8 py-2" />
              </div>
            </div>
          </div>
        </template>
      </flip-card>
    </div>
  </div>
</template>
