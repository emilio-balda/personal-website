<script setup lang="ts">
import { NCollapseItem, NSpace } from 'naive-ui'
import AppImage from '~/components/AppImage.vue'

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
      { image: 'https://seeklogo.com/images/F/fastapi-logo-541BAA112F-seeklogo.com.png', title: 'FastAPI' },
      { image: 'https://www.sqlalchemy.org/img/sqla_logo.png', title: 'SQL Alchemy' },
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      { image: 'https://seeklogo.com/images/T/tensorflow-logo-02FCED4F98-seeklogo.com.png', title: 'TensorFlow' },
      { image: 'https://seeklogo.com/images/S/scikit-learn-logo-8766D07E2E-seeklogo.com.png', title: 'Scikit Learn' },
      { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/450px-Pandas_logo.svg.png', title: 'Pandas' },
      { image: 'https://www.mlflow.org/docs/latest/_static/MLflow-logo-final-black.png', title: 'mlflow' },
      { image: 'https://raw.githubusercontent.com/spotify/luigi/master/doc/luigi.png', title: 'Luigi' },
      { image: 'https://plotly-marketing-website.cdn.prismic.io/plotly-marketing-website/948b6663-9429-4bd6-a4cc-cb33231d4532_logo-plotly.svg', title: 'Plotly' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { image: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png', title: 'GCloud' },
      // { image: 'https://seeklogo.com/images/T/terraform-logo-99AE26A4C1-seeklogo.com.png', title: 'Terraform' },
      { image: 'https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png', title: 'Kubernetes' },
      { image: 'https://seeklogo.com/images/H/helm-logo-9208DB3EE5-seeklogo.com.png', title: 'Helm' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { image: 'https://seeklogo.com/images/G/git-logo-A1D01DDA30-seeklogo.com.png', title: 'Git' },
      { image: 'https://uploads-ssl.webflow.com/6108e07db6795265f203a636/616ff7e3860e7cbd14b26b55_DVC.png', title: 'DVC' },
      { image: 'https://seeklogo.com/images/G/gitlab-logo-757620E430-seeklogo.com.png', title: 'GitLab CI/CD' },
      { image: 'https://docs.pytest.org/en/7.1.x/_static/pytest_logo_curves.svg', title: 'PyTest' },
      { image: 'https://python-poetry.org/images/logo-origami.svg', title: 'PyPoetry' },
      // { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/192px-ESLint_logo.svg.png', title: 'ESLint' },
      // { image: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png', title: 'Jest' },
      // { image: 'https://github.com/cypress-io/cypress/raw/develop/assets/cypress-logo-light.png', title: 'Cypress' },
      // { image: 'https://black.readthedocs.io/en/stable/_static/logo2-readme.png', title: 'Black' },
    ],
  },
]
</script>

<template>
  <NCollapseItem v-for="stackRow in stack" :key="stackRow.title" :title="stackRow.title" :name="stackRow.title">
    <NSpace align="center" justify="center">
      <div
        v-for="stackItem in stackRow.items" :key="stackItem.title"
        class="flex flex-col items-center justify-center px-4"
      >
        <div class="pt-4">
          <AppImage
            :src="stackItem.image" placeholder-height="1.5rem" placeholder-width="1.5rem"
            class="h-4 w-full md:h-8"
          />
        </div>
        <div>
          <p class="py-2 text-xs italic">
            {{ stackItem.title }}
          </p>
        </div>
      </div>
    </NSpace>
  </NCollapseItem>
</template>
