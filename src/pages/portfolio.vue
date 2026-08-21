<script setup lang="ts">
import { composeEmail } from '~/composables/dom'

const animaContributions = [
  'Built production LLM features inside a React and TypeScript product',
  'Built LangGraph agents for multi-step user requests',
  'Coordinated agentic workflows and streamed results to users',
  'Added prompt caching to reduce repeated token consumption',
  'Added LangSmith traces for prompts, model calls, and agent workflows',
  'Built Hermes agents for regular benchmarking and monitoring tasks',
]

const animaStack = ['LangGraph', 'LangChain', 'LangSmith', 'Vercel AI SDK', 'OpenRouter', 'Hermes', 'React', 'TypeScript']

const caseStudies = [
  {
    eyebrow: 'aiXbrain · Co-lead developer',
    title: 'A machine learning SaaS that reduced delivery time',
    description: 'Dataray is a no-code platform for industrial monitoring and machine learning workflows.',
    contributions: ['Co-led full-stack product development', 'Built data connections, anomaly detection, forecasting, and issue aggregation', 'Built repeatable deployment and CI/CD systems'],
    outcome: 'Reduced delivery of machine learning models to new clients from several weeks to a few days.',
    stack: ['Vue', 'TypeScript', 'Python', 'FastAPI', 'TensorFlow', 'MLflow', 'GCP', 'Kubernetes'],
    icon: 'i-carbon-dashboard-reference',
  },
  {
    eyebrow: 'aiXbrain + Voss Automotive · Lead developer',
    title: 'An enterprise platform for machine learning operations',
    description: 'ClickID coordinated data ingestion, machine learning models, and wearable-device integrations across several companies.',
    contributions: ['Led backend API engineering and delivery', 'Coordinated 10+ engineers across three companies', 'Supported four clients, 5+ use cases, and 10+ wearable devices'],
    outcome: 'Gave several client deployments one backend system for data ingestion and machine learning operations.',
    stack: ['Python', 'FastAPI', 'REST APIs', 'Docker', 'Kubernetes', 'GCP', 'MongoDB', 'PostgreSQL'],
    icon: 'i-carbon-machine-learning-model',
  },
]

function discussProject() {
  composeEmail({ to: 'me@emilio-balda.com', subject: 'AI software project inquiry' })
}
</script>

<template>
  <div class="work-surface">
    <div class="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-26">
      <div class="max-w-3xl text-left">
        <p class="section-eyebrow">
          Production experience
        </p>
        <h2 class="section-title">
          AI systems built for real products, teams, and users.
        </h2>
        <p class="section-copy">
          The strongest work comes first: recent agentic LLM software, followed by full-stack SaaS and enterprise platform delivery.
        </p>
      </div>

      <article class="mt-12 overflow-hidden border border-slate-700 rounded-3xl bg-background-900 text-left text-white shadow-2xl">
        <div class="grid lg:grid-cols-[minmax(0,1.18fr)_minmax(300px,0.82fr)]">
          <div class="p-7 lg:p-12 md:p-10">
            <div class="flex flex-wrap items-center gap-3">
              <img src="/assets/anima-logo.svg" alt="Anima" class="h-9 w-9 rounded-lg bg-white p-1.5">
              <p class="text-sm font-bold tracking-[0.13em] uppercase text-primary-500">
                Anima · Senior Machine Learning Developer
              </p>
            </div>
            <h3 class="mt-7 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Agentic LLM software inside a design-to-code product
            </h3>
            <p class="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
              Anima turns product designs into working code. I build production LLM workflows inside its customer-facing React product.
            </p>

            <ul class="grid mt-8 gap-3 md:grid-cols-2">
              <li v-for="contribution in animaContributions" :key="contribution" class="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <span class="i-carbon-checkmark-filled mt-1 shrink-0 bg-primary-500" aria-hidden="true" />
                <span class="leading-relaxed text-slate-200">{{ contribution }}</span>
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap gap-2">
              <span v-for="tool in animaStack" :key="tool" class="border border-white/15 rounded-lg bg-white/8 px-3 py-1.5 text-sm text-slate-200">{{ tool }}</span>
            </div>
          </div>

          <div class="relative min-h-80 overflow-hidden border-t border-slate-700 p-7 lg:border-l lg:border-t-0 lg:p-10">
            <div class="absolute inset-0 from-primary-900/28 via-transparent to-secondary-500/24 bg-gradient-to-br" aria-hidden="true" />
            <div class="relative">
              <p class="text-xs font-bold tracking-[0.16em] uppercase text-slate-400">
                Production concerns
              </p>
              <div class="mt-6 space-y-3">
                <div v-for="item in ['Agentic orchestration', 'Streaming user experiences', 'Prompt observability', 'Token efficiency', 'Continuous improvement']" :key="item" class="flex items-center gap-3 border border-white/10 rounded-xl bg-black/15 px-4 py-3">
                  <span class="h-2.5 w-2.5 rounded-full bg-primary-500 shadow-[0_0_12px_var(--primary-500)]" aria-hidden="true" />
                  <span class="font-semibold">{{ item }}</span>
                </div>
              </div>
              <button class="mt-8 w-full rounded-xl bg-white px-5 py-3 font-bold text-background-900 transition hover:bg-primary-500" @click="discussProject">
                Discuss a similar project
              </button>
            </div>
          </div>
        </div>
      </article>

      <div class="grid mt-7 gap-7 lg:grid-cols-2">
        <article v-for="study in caseStudies" :key="study.title" class="flex flex-col border border-slate-200 rounded-3xl bg-white p-7 text-left shadow-sm dark:border-slate-700 dark:bg-background-900 md:p-9">
          <div class="flex items-center justify-between gap-4">
            <p class="text-xs font-bold tracking-[0.13em] uppercase text-primary-900 dark:text-primary-500">
              {{ study.eyebrow }}
            </p>
            <span :class="study.icon" class="shrink-0 bg-secondary-500 text-3xl" aria-hidden="true" />
          </div>
          <h3 class="mt-5 text-3xl font-bold leading-tight tracking-tight">
            {{ study.title }}
          </h3>
          <p class="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            {{ study.description }}
          </p>
          <ul class="mt-6 space-y-3">
            <li v-for="contribution in study.contributions" :key="contribution" class="flex items-start gap-3">
              <span class="i-carbon-arrow-right mt-1 shrink-0 bg-primary-700 dark:bg-primary-500" aria-hidden="true" />
              <span>{{ contribution }}</span>
            </li>
          </ul>
          <div class="mt-7 rounded-xl bg-primary-500/10 p-4">
            <p class="text-xs font-bold tracking-[0.14em] uppercase text-primary-900 dark:text-primary-500">
              Outcome
            </p>
            <p class="mt-2 font-semibold leading-relaxed">
              {{ study.outcome }}
            </p>
          </div>
          <div class="mt-auto flex flex-wrap gap-2 pt-7">
            <span v-for="tool in study.stack" :key="tool" class="tech-chip">{{ tool }}</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-surface {
  background: linear-gradient(180deg, rgba(77, 141, 252, 0.055), transparent 24rem);
}
</style>
