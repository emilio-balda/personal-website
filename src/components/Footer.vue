<script setup lang="ts">
import { toggleDark } from '~/composables'

const { t } = useI18n()

// const { t, availableLocales, locale } = useI18n()

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
</script>

<template>
  <nav mt-6 text-xl>
    <!-- <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </router-link> -->

    <button class="mx-2 inline-flex !outline-none icon-btn" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div
        i="carbon-sun"
        class="bg-primary-500 text-xl dark:bg-gray-300"
      />
      <p class="text-gray-500">
        /
      </p>
      <div
        i="carbon-moon"
        class="bg-gray-300 text-xl dark:bg-primary-500"
      />
    </button>

    <!-- <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div i-carbon-language />
    </a> -->

    <!-- <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </router-link> -->

    <!-- <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a> -->
  </nav>
</template>
