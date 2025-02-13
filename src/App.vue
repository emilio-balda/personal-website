<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Emilio Balda - Full Stack Developer & Machine Learning Expert',
  meta: [
    { name: 'description', content: 'Emilio Balda is a freelance Full Stack Developer and Machine Learning expert, specializing in web development and AI solutions. Based in Cyprus, offering professional development services worldwide.' },
    { name: 'keywords', content: 'Emilio Balda, Machine Learning, Web Development, Freelance, Full Stack Developer, AI Expert, Software Engineer' },
    
    // Open Graph / Social Media
    { property: 'og:title', content: 'Emilio Balda - Full Stack Developer & Machine Learning Expert' },
    { property: 'og:description', content: 'Freelance web development and machine learning solutions by Emilio Balda. Expertise in full-stack development, AI integration, and modern web technologies.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/assets/informal-color.png' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Emilio Balda - Full Stack Developer & ML Expert' },
    { name: 'twitter:description', content: 'Freelance web development and machine learning solutions by Emilio Balda.' },
    { name: 'twitter:image', content: '/assets/informal-color.png' },
    
    // Additional SEO
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Emilio Balda' },
    { name: 'language', content: 'English' }
  ],
  link: [
    { rel: 'canonical', href: 'https://emilio-balda.com' }
  ]
})
</script>

<template>
  <router-view />
</template>
