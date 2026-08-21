<script setup lang="ts">
useHead({
  title: 'Emilio Balda — AI Software Engineer | Agentic Systems & Production LLMs',
  meta: [
    { name: 'description', content: 'AI Software Engineer who builds agentic systems and production LLM features for SaaS products. Experience with LangGraph, LangChain, LangSmith, Vercel AI SDK, OpenRouter, React, TypeScript, Python, and FastAPI.' },
    { name: 'keywords', content: 'AI Software Engineer, Agentic AI, Agentic Systems, LLM Orchestration, Production LLMs, LangGraph, LangChain, LangSmith, Vercel AI SDK, OpenRouter, React, TypeScript, Python, FastAPI' },
    { property: 'og:title', content: 'Emilio Balda — AI Software Engineer for Agentic Systems and Production LLMs' },
    { property: 'og:description', content: 'I build reliable agentic workflows and production LLM software for SaaS teams, from model integration and streaming to observability and token optimization.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/assets/informal-color.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Emilio Balda — AI Software Engineer' },
    { name: 'twitter:description', content: 'Agentic systems and production LLM software for SaaS products.' },
    { name: 'twitter:image', content: '/assets/informal-color.webp' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Emilio Balda' },
    { name: 'language', content: 'English' },
  ],
  link: [
    { rel: 'canonical', href: 'https://emilio-balda.com' },
  ],
})
</script>

<template>
  <router-view />
</template>
