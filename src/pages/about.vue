<script setup lang="ts">
import AppImage from '~/components/AppImage.vue'
import { downloadFile } from '~/composables/dom'

const credibility = [
  'PhD in Machine Learning, Summa Cum Laude',
  'More than six years of production AI software experience',
  'Full-stack experience across frontend, backend, and infrastructure',
  'Remote collaboration across products, clients, and technical teams',
]

function downloadCv() {
  downloadFile({
    filename: 'CV-Emilio-Balda.pdf',
    href: 'https://drive.google.com/uc?id=1AFqS99db8Elw7b3hin9RcXHVt2zNU5pF',
  })
}
</script>

<template>
  <div class="about-surface">
    <div class="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-26">
      <div class="grid items-start gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
        <aside class="border border-slate-200 rounded-3xl bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-background-900">
          <AppImage
            src="/assets/informal-color.webp"
            alt="Emilio Balda, AI Software Engineer"
            placeholder-height="20rem"
            placeholder-width="20rem"
            class="aspect-square w-full overflow-hidden rounded-2xl object-cover"
          />
          <div class="mt-6 text-left">
            <p class="text-xl font-bold">
              Emilio Balda
            </p>
            <p class="mt-1 text-slate-500 dark:text-slate-400">
              Larnaca, Cyprus · Remote
            </p>
            <div class="mt-5 flex gap-3 text-2xl">
              <a href="mailto:me@emilio-balda.com" aria-label="Email Emilio" class="transition hover:-translate-y-1"><span class="i-carbon-email bg-app-paragraph" /></a>
              <a href="https://www.linkedin.com/in/emiliobalda/" target="_blank" rel="noopener" aria-label="Emilio on LinkedIn" class="transition hover:-translate-y-1"><span class="i-carbon-logo-linkedin bg-app-paragraph" /></a>
              <a href="https://github.com/emilio-balda" target="_blank" rel="noopener" aria-label="Emilio on GitHub" class="transition hover:-translate-y-1"><span class="i-carbon-logo-github bg-app-paragraph" /></a>
            </div>
          </div>
        </aside>

        <div class="text-left">
          <p class="section-eyebrow">
            About Emilio
          </p>
          <h2 class="section-title">
            A software engineer with deep machine learning foundations.
          </h2>
          <div class="mt-7 text-lg leading-relaxed text-slate-600 space-y-5 dark:text-slate-300">
            <p>I am an AI Software Engineer based in Cyprus. I work remotely with teams that need to turn LLM and agent ideas into production software.</p>
            <p>At Anima, I build agentic workflows and LLM features inside a customer-facing React product. My work covers orchestration, streaming, model integration, prompt caching, observability, benchmarking, and monitoring.</p>
            <p>Before Anima, I spent more than four years at aiXbrain. I co-led a machine learning SaaS product and led backend delivery for an enterprise machine learning platform.</p>
            <p>I also hold a PhD in Machine Learning from RWTH Aachen University, where I graduated Summa Cum Laude. That background gives me the depth to understand models, while my recent work focuses on dependable software delivery.</p>
          </div>

          <ul class="grid mt-9 gap-3 sm:grid-cols-2">
            <li v-for="item in credibility" :key="item" class="flex items-start gap-3 border border-slate-200 rounded-xl bg-white/70 p-4 dark:border-slate-700 dark:bg-background-900/70">
              <span class="i-carbon-checkmark-filled mt-1 shrink-0 bg-primary-700 dark:bg-primary-500" aria-hidden="true" />
              <span class="font-semibold leading-relaxed">{{ item }}</span>
            </li>
          </ul>

          <div class="mt-9 flex flex-wrap gap-3">
            <button class="secondary-cta" @click="downloadCv">
              <span class="i-carbon-download" aria-hidden="true" />
              Download CV
            </button>
            <a href="https://www.linkedin.com/in/emiliobalda/" target="_blank" rel="noopener" class="secondary-cta">
              LinkedIn
              <span class="i-carbon-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-surface {
  background: linear-gradient(180deg, transparent, rgba(88, 254, 182, 0.05));
}
</style>
