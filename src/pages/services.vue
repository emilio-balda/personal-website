<script setup lang="ts">
const services = [
  {
    number: '01',
    icon: 'i-carbon-flow',
    title: 'Agentic AI Systems',
    problem: 'You need an AI workflow that can coordinate multiple steps, tools, and user requests without becoming fragile.',
    deliverables: ['Stateful agentic workflows', 'Tool and action orchestration', 'Multi-step request handling', 'Benchmarking and monitoring agents'],
    result: 'Agentic software that follows clear workflows, handles new requests, and stays easier to test and improve.',
    tools: ['LangGraph', 'LangChain', 'Hermes', 'Python', 'TypeScript'],
  },
  {
    number: '02',
    icon: 'i-carbon-application-web',
    title: 'LLM Integration for Existing Software',
    problem: 'You have a real product and need to add LLM capabilities without rebuilding the whole application.',
    deliverables: ['React and TypeScript integration', 'Streaming responses', 'OpenRouter model access', 'Backend APIs for AI features'],
    result: 'AI capabilities that feel like part of the product instead of a separate demo.',
    tools: ['React', 'TypeScript', 'Vercel AI SDK', 'OpenRouter', 'FastAPI'],
  },
  {
    number: '03',
    icon: 'i-carbon-analytics',
    title: 'Production Reliability and Observability',
    problem: 'Your prototype works, but token use, debugging, model changes, and production behavior are hard to control.',
    deliverables: ['Prompt caching', 'Prompt and agent tracing', 'Workflow monitoring', 'Model and provider flexibility'],
    result: 'LLM software that is easier to observe, operate, and improve after release.',
    tools: ['LangSmith', 'OpenRouter', 'LangChain', 'Docker', 'Kubernetes', 'GCP'],
  },
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-26">
    <div class="max-w-3xl text-left">
      <p class="section-eyebrow">
        How I can help
      </p>
      <h2 class="section-title">
        From an LLM idea to software your users can rely on.
      </h2>
      <p class="section-copy">
        I work with teams that already have a product and need senior engineering support to add or improve AI capabilities.
      </p>
    </div>

    <div class="grid mt-12 gap-6 lg:grid-cols-3">
      <article v-for="service in services" :key="service.title" class="group flex flex-col border border-slate-200 rounded-3xl bg-white p-7 text-left shadow-sm transition duration-300 dark:border-slate-700 dark:bg-background-900 hover:shadow-xl hover:-translate-y-1">
        <div class="flex items-start justify-between">
          <span :class="service.icon" class="bg-primary-700 text-3xl dark:bg-primary-500" aria-hidden="true" />
          <span class="text-sm font-bold font-mono text-slate-400">{{ service.number }}</span>
        </div>
        <h3 class="mt-7 text-2xl font-bold tracking-tight">
          {{ service.title }}
        </h3>
        <p class="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
          {{ service.problem }}
        </p>

        <ul class="mt-6 space-y-3">
          <li v-for="deliverable in service.deliverables" :key="deliverable" class="flex items-start gap-3">
            <span class="i-carbon-checkmark-filled mt-1 shrink-0 bg-primary-700 dark:bg-primary-500" aria-hidden="true" />
            <span>{{ deliverable }}</span>
          </li>
        </ul>

        <div class="mt-7 border-t border-slate-200 pt-6 dark:border-slate-700">
          <p class="text-xs font-bold tracking-[0.14em] uppercase text-slate-400">
            Result
          </p>
          <p class="mt-2 font-semibold leading-relaxed">
            {{ service.result }}
          </p>
        </div>

        <div class="mt-auto flex flex-wrap gap-2 pt-7">
          <span v-for="tool in service.tools" :key="tool" class="tech-chip">{{ tool }}</span>
        </div>
      </article>
    </div>
  </div>
</template>
