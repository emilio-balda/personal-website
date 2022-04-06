<script setup lang="ts">
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
    title: 'Backend',
    items: [
      { image: 'https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png', title: 'Python' },
      { image: 'https://seeklogo.com/images/T/tensorflow-logo-02FCED4F98-seeklogo.com.png', title: 'TensorFlow' },
      { image: 'https://seeklogo.com/images/F/fastapi-logo-541BAA112F-seeklogo.com.png', title: 'FastAPI' },
      { image: 'https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png', title: 'DJango' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { image: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png', title: 'Google Cloud' },
      { image: 'https://seeklogo.com/images/T/terraform-logo-99AE26A4C1-seeklogo.com.png', title: 'Terraform' },
    ],
  },
  {
    title: 'DevOps (Deployment)',
    items: [
      { image: 'https://seeklogo.com/images/H/helm-logo-9208DB3EE5-seeklogo.com.png', title: 'Helm' },
      { image: 'https://seeklogo.com/images/G/gitlab-logo-757620E430-seeklogo.com.png', title: 'GitLab CI' },
    ],
  },
  {
    title: 'DevOps (Frontend)',
    items: [
      { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/192px-ESLint_logo.svg.png', title: 'ESLint' },
      { image: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png', title: 'Jest' },
      { image: 'https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/ac1e1/cypress-logo.webp', title: 'Cypress' },
    ],
  },
  {
    title: 'DevOps (Backend)',
    items: [
      { image: 'https://docs.pytest.org/en/7.1.x/_static/pytest_logo_curves.svg', title: 'PyTest' },
      { image: 'https://black.readthedocs.io/en/stable/_static/logo2-readme.png', title: 'Black' },
      { image: 'https://python-poetry.org/images/logo-origami.svg', title: 'PyPoetry' },
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
      Together with a team of 3 developers, we built a data science SaaS product called Dataray. This product is designed to monitor and operate factories with multiple industrial machines.
      It currently serves 10+ customers around germany.
    </p>
    <h1 class="font-bold text-2xl py-4">
      Features
    </h1>

    <ul class="list-disc list-inside">
      <li>Self-service database connection to Dataray supports MSSQL, PosgreSQL and MongoDB</li>
      <li>Plug and play anomaly detection</li>
      <li>Time series forecasting</li>
      <li>Issue aggregation and summarization</li>
    </ul>
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
