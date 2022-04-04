<script setup lang="ts">

const frontendStack = [
  { image: 'https://vuejs.org/images/logo.png', title: 'Vue JS' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png', title: 'Typescript' },
  { image: 'https://vitejs.dev/logo.svg', title: 'Vite' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png', title: 'Tailwind CSS' },
]
</script>

<template>
  <div>
    <h1 class="font-bold text-2xl py-4">
      Tech Stack
    </h1>
    <table>
      <tr>
        <td>
          <p class="font-bold inline">
            Frontend
          </p>:
        </td>
        <td v-for="stackItem in frontendStack" :key="stackItem.title">
          <img :src="stackItem.image" class="h-8 inline">
        </td>
      </tr>
      <tr>
        <td />
        <td v-for="stackItem in frontendStack" :key="stackItem.title">
          <p class="italic inline">
            {{ stackItem.title }}
          </p>
        </td>
      </tr>
    </table>

    <p>
      This website is written 100% in TypeScript using Vue 3 and Tailwind CSS. The code is linted with ESLint. Unit tests are written with Jest, while Cypress handles integration tests.
    </p>
  </div>
</template>
