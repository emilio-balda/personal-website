<script setup lang="ts">
import AppImage from '~/components/AppImage.vue'
import { composeEmail, scrollTo } from '~/composables/dom'

const productionFocus = [
  { icon: 'i-carbon-flow', label: 'Agentic orchestration' },
  { icon: 'i-carbon-data-vis-4', label: 'Streaming AI experiences' },
  { icon: 'i-carbon-analytics', label: 'Prompt observability' },
  { icon: 'i-carbon-switcher', label: 'Model flexibility' },
  { icon: 'i-carbon-chart-line-data', label: 'Token efficiency' },
]

const stack = ['LangGraph', 'LangChain', 'LangSmith', 'Vercel AI SDK', 'OpenRouter', 'React', 'TypeScript', 'Python', 'FastAPI']

const trustSignals = [
  { value: '2+ years', label: 'Building production LLM software at Anima' },
  { value: '6+ years', label: 'Shipping AI and machine learning software' },
  { value: 'PhD', label: 'Machine Learning · Summa Cum Laude' },
  { value: 'Full stack', label: 'React interfaces to cloud infrastructure' },
]

function discussProject() {
  composeEmail({ to: 'me@emilio-balda.com', subject: 'AI software project inquiry' })
}
</script>

<template>
  <div class="hero-surface">
    <div class="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-10 md:pb-18 md:pt-24">
      <div class="grid items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)]">
        <div class="text-left">
          <p class="section-eyebrow">
            AI Software Engineer
          </p>
          <h1 class="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.045em] lg:text-8xl md:text-7xl">
            I build reliable <span class="gradient-text">agentic systems</span> and production LLM software.
          </h1>
          <p class="mt-7 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
            I help SaaS teams add LLM features and AI agents to existing software. I work across orchestration, model integration, streaming interfaces, observability, and token optimization.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <button class="primary-cta" @click="discussProject">
              <span class="i-carbon-email" aria-hidden="true" />
              Discuss your AI project
            </button>
            <button class="secondary-cta" @click="scrollTo('work')">
              View selected work
              <span class="i-carbon-arrow-down" aria-hidden="true" />
            </button>
          </div>
        </div>

        <aside class="relative">
          <div class="absolute rounded-[2rem] from-primary-500/20 to-secondary-500/20 bg-gradient-to-br blur-2xl -inset-5" aria-hidden="true" />
          <div class="relative overflow-hidden border border-slate-200 rounded-3xl bg-white/85 p-6 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-background-900/88 md:p-8">
            <div class="flex items-center gap-4 border-b border-slate-200 pb-5 dark:border-slate-700">
              <AppImage
                src="/assets/informal-color.webp"
                alt="Emilio Balda"
                placeholder-height="4rem"
                placeholder-width="4rem"
                class="h-16 w-16 overflow-hidden rounded-2xl"
              />
              <div class="min-w-0">
                <p class="font-bold">
                  Production focus
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  From model call to user experience
                </p>
              </div>
              <span class="ml-auto h-3 w-3 shrink-0 rounded-full bg-primary-500 shadow-[0_0_16px_var(--primary-500)]" aria-hidden="true" />
            </div>

            <ul class="mt-5 text-left space-y-3">
              <li v-for="item in productionFocus" :key="item.label" class="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
                <span :class="item.icon" class="shrink-0 bg-primary-700 text-xl dark:bg-primary-500" aria-hidden="true" />
                <span class="font-semibold">{{ item.label }}</span>
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="tool in stack" :key="tool" class="tech-chip">{{ tool }}</span>
            </div>
          </div>
        </aside>
      </div>

      <div class="grid mt-14 overflow-hidden border border-slate-200 rounded-2xl bg-white/70 lg:grid-cols-4 sm:grid-cols-2 dark:border-slate-700 dark:bg-background-900/55">
        <div v-for="signal in trustSignals" :key="signal.label" class="border-b border-slate-200 p-5 text-left last:border-r-0 lg:border-b-0 sm:border-r dark:border-slate-700">
          <p class="text-2xl font-black text-primary-900 dark:text-primary-500">
            {{ signal.value }}
          </p>
          <p class="mt-1 text-sm leading-snug text-slate-600 dark:text-slate-300">
            {{ signal.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-surface {
  background:
    radial-gradient(circle at 15% 12%, rgba(88, 254, 182, 0.14), transparent 30rem),
    radial-gradient(circle at 90% 22%, rgba(77, 141, 252, 0.15), transparent 28rem);
}

.gradient-text {
  background-image: linear-gradient(100deg, var(--primary-900), var(--secondary-500));
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
}
</style>
