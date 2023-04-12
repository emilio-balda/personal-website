<script setup lang="ts">
import { NCollapse, NCollapseItem, NSpace } from 'naive-ui'

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
      { image: 'https://github.com/cypress-io/cypress/raw/develop/assets/cypress-logo-light.png', title: 'Cypress' },
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
    <h1 class="font-bold text-2xl py-4">
      Features
    </h1>

    <ul class="text-left list-disc list-outside pl-8">
      <li>Responsive design for mobile, tablet and desktop</li>
      <li>Light/Dark Mode</li>
      <li>Tested with unit and end-to-end tests</li>
      <li>Managed with Continuous Integration and Deployment (CI/CD)</li>
    </ul>
    <h1 class="font-bold text-2xl py-4">
      Tech Stack
    </h1>
    <n-collapse>
      <n-collapse-item v-for="stackRow in stack" :key="stackRow.title" :title="stackRow.title" :name="stackRow.title">
        <n-space align="center" justify="center">
          <div v-for="stackItem in stackRow.items" :key="stackItem.title" class="flex flex-col px-4 items-center">
            <div class="pt-4">
              <img :src="stackItem.image" class="h-4 md:h-8">
            </div>
            <div>
              <p class="text-xs italic py-2">
                {{ stackItem.title }}
              </p>
            </div>
          </div>
        </n-space>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
