<script setup lang="ts">
const steps = [
  { number: '01', title: 'Frame the workflow', copy: 'Define the user request, product boundary, model responsibilities, failure cases, and measures of success.' },
  { number: '02', title: 'Build the smallest useful path', copy: 'Connect the model, orchestration, backend, interface, and one real user action in an end-to-end flow.' },
  { number: '03', title: 'Make it production-ready', copy: 'Add streaming, caching, model flexibility, error handling, tracing, tests, and deployment support where the use case needs them.' },
  { number: '04', title: 'Observe and improve', copy: 'Use traces, benchmarks, user feedback, and production behavior to improve prompts and workflows continuously.' },
]

const capabilities = [
  {
    title: 'Agentic systems',
    copy: 'Multi-step workflows that coordinate model calls, tools, state, and user requests.',
    tools: ['LangGraph', 'LangChain', 'Hermes', 'Tool orchestration'],
  },
  {
    title: 'LLM integration',
    copy: 'Model integration inside existing applications with streaming and efficient prompt workflows.',
    tools: ['Vercel AI SDK', 'OpenRouter', 'Prompt caching', 'Streaming'],
  },
  {
    title: 'Application engineering',
    copy: 'Complete AI features across frontend interfaces and backend services.',
    tools: ['TypeScript', 'React', 'Python', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Production foundation',
    copy: 'Observability, delivery, data, and infrastructure for software after release.',
    tools: ['LangSmith', 'Docker', 'Kubernetes', 'GCP', 'CI/CD'],
  },
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-26">
    <div class="max-w-3xl text-left">
      <p class="section-eyebrow">
        How I work
      </p>
      <h2 class="section-title">
        Build fast. Integrate carefully. Improve with evidence.
      </h2>
    </div>

    <ol class="relative grid mt-12 gap-5 lg:grid-cols-4">
      <li v-for="(step, index) in steps" :key="step.title" class="relative border border-slate-200 rounded-2xl bg-white p-6 text-left dark:border-slate-700 dark:bg-background-900">
        <div v-if="index < steps.length - 1" class="absolute left-full top-10 hidden h-px w-5 from-primary-500 to-secondary-500 bg-gradient-to-r lg:block" aria-hidden="true" />
        <span class="text-sm font-bold font-mono text-primary-900 dark:text-primary-500">{{ step.number }}</span>
        <h3 class="mt-5 text-xl font-bold">
          {{ step.title }}
        </h3>
        <p class="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
          {{ step.copy }}
        </p>
      </li>
    </ol>

    <div class="mt-20 max-w-3xl text-left">
      <p class="section-eyebrow">
        Capabilities
      </p>
      <h2 class="section-title">
        Software engineering for the full production AI path.
      </h2>
    </div>

    <div class="grid mt-10 gap-5 md:grid-cols-2">
      <article v-for="capability in capabilities" :key="capability.title" class="border border-slate-200 rounded-2xl bg-white p-6 text-left dark:border-slate-700 dark:bg-background-900 md:p-7">
        <h3 class="text-2xl font-bold">
          {{ capability.title }}
        </h3>
        <p class="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
          {{ capability.copy }}
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span v-for="tool in capability.tools" :key="tool" class="tech-chip">{{ tool }}</span>
        </div>
      </article>
    </div>
  </div>
</template>
