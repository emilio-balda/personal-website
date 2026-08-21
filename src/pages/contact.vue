<script setup lang="ts">
import { composeEmail } from '~/composables/dom'

function discussProject() {
  composeEmail({ to: 'me@emilio-balda.com', subject: 'AI software project inquiry' })
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 md:pb-28 md:pt-12">
    <div class="relative overflow-hidden rounded-3xl bg-background-900 px-6 py-14 text-center text-white shadow-2xl md:px-12 md:py-18">
      <div class="absolute h-72 w-72 rounded-full bg-primary-500/20 blur-3xl -left-20 -top-28" aria-hidden="true" />
      <div class="absolute h-80 w-80 rounded-full bg-secondary-500/25 blur-3xl -bottom-32 -right-16" aria-hidden="true" />
      <div class="relative mx-auto max-w-3xl">
        <p class="text-xs font-bold tracking-[0.18em] uppercase text-primary-500">
          Start a conversation
        </p>
        <h2 class="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Need an AI feature that works beyond the demo?
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-slate-300">
          I can help you add agentic workflows and production LLM capabilities to existing software, then make them observable, efficient, and reliable for users.
        </p>
        <button class="mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-lg font-bold text-background-900 transition hover:bg-primary-500 hover:-translate-y-1" @click="discussProject">
          <span class="i-carbon-email" aria-hidden="true" />
          Discuss your AI project
        </button>
        <div class="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-300">
          <a href="mailto:me@emilio-balda.com" class="hover:text-primary-500">me@emilio-balda.com</a>
          <a href="https://www.linkedin.com/in/emiliobalda/" target="_blank" rel="noopener" class="hover:text-primary-500">LinkedIn</a>
          <span>Larnaca, Cyprus · Remote</span>
        </div>
      </div>
    </div>
  </div>
</template>
