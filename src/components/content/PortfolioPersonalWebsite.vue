<script setup lang="ts">
import GlowgingHyperLink from '~/components/GlowgingHyperLink.vue'

const stack = [
  {
    title: 'Frontend',
    items: [
      { image: 'https://vuejs.org/images/logo.png', title: 'Vue JS' },
      { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png', title: 'Typescript' },
      { image: 'https://vitejs.dev/logo.svg', title: 'Vite' },
      { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png', title: 'Tailwind CSS' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/192px-ESLint_logo.svg.png', title: 'ESLint' },
      { image: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png', title: 'Jest' },
      { image: 'https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/ac1e1/cypress-logo.webp', title: 'Cypress' },
      { image: 'https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png', title: 'GitHub Actions' },
    ],
  },
]
</script>

<template>
  <div class="py-2">
    <h1 class="font-bold text-2xl py-4">
      Overview
    </h1>
    <p>
      This website is built using the Vitesse template from Anthony Fu. I open sourced the code in <glowing-hyper-link href="https://github.com/emilio-balda/personal-website" text="this repository" />.
    </p>
    <p>
      Main Features:
      <ul class="list-disc list-inside">
        <li>Mobile Phone friendly</li>
        <li>Light/Dark Mode</li>
        <li>Tested with unit and end-to-end tests</li>
        <li>Managed with Continious Integration and Deployment (CI/CD)</li>
      </ul>
    </p>
    <h1 class="font-bold text-2xl py-4">
      Tech Stack
    </h1>
    <div class="flex flex-col px-4 items-left">
      <div v-for="stackRow in stack" :key="stackRow.title" class="flex flex-row border-b-2 w-128 items-center py-2">
        <div class="justify-self-start pr-4">
          <p class="font-bold italic text-xl">
            {{ stackRow.title }}
          </p>
        </div>
        <div v-for="stackItem in stackRow.items" :key="stackItem.title" class="flex flex-col px-4 items-center justify-self-center">
          <div class="pt-4">
            <img :src="stackItem.image" class="h-8">
          </div>
          <div>
            <p class="italic py-2">
              {{ stackItem.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
