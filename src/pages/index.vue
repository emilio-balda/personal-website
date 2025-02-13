<script setup lang="ts">
import AppImage from '~/components/AppImage.vue'
import { composeEmail } from '~/composables/dom'

const contactInfo = [
  { icon: 'i-carbon-email bg-app-paragraph', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-app-paragraph', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-app-paragraph', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]

const partners = [
  {
    name: 'Anima',
    logo: '/assets/anima-logo.svg',
    description: 'Improving their core product\'s AI capabilities to turn designs into code.',
    href: 'https://animaapp.com',
  },
  {
    name: 'Joana Gomez',
    logo: '/assets/joana-gomez-logo.svg',
    description: 'Turning custom designs to fully functional, responsive websites in a matter of days through Anima\'s Figma plugin.',
    href: 'https://joana-gomez.com',
  },
]

</script>

<template>
  <main class="w-full flex flex-col items-center justify-center">
    <section id="hero" aria-label="Hero section" class="w-fit px-4 pb-8 md:block md:pb-12">
      <h1 class="gradient-text typewriter whitespace-normal pr-2 font-bold lg:py-2 text-7xl" itemprop="name">
        Full Stack Developer
      </h1>
    </section>
    <section id="profile" aria-label="Profile section" class="w-full flex flex-wrap items-start justify-center px-12 md:flex-nowrap">
      <div class="neumorphic-shadow-12 flex flex-col items-center rounded-2xl p-4 duration-500 dark:bg-background-900">
        <div class="py-4">
          <AppImage
            src="/assets/informal-color.png" 
            alt="Emilio Balda - Full Stack Developer and Machine Learning Expert"
            placeholder-height="12em" 
            placeholder-width="12em"
            class="w-[12em] overflow-hidden rounded-full"
          />
        </div>
        <div class="px-2 py-4">
          <h2 class="whitespace-nowrap text-lg uppercase" itemprop="name">
            Emilio Balda
          </h2>
          <h3 class="whitespace-nowrap text-xl" itemprop="jobTitle">
            Full Stack Developer
          </h3>
          <h3 class="whitespace-nowrap font-semibold text-xl">
            PhD in Machine Learning
          </h3>
          <p class="whitespace-nowrap text-3xl">
            <a v-for="content in contactInfo" :key="content.href" class="inline-block px-1 pt-4" :href="content.href">
              <div :class="content.icon" class="transition-all duration-300 hover:-translate-y-2" />
            </a>
          </p>
        </div>
      </div>
      <div class="flex flex-col items-start justify-start px-2 md:px-12 py-4">
        <p class="text-start text-lg leading-relaxed max-w-xl">
          I specialize in bringing AI-related ideas to production. From rough sketches and proof of concepts, all the way to integration into existing products. 
        </p>
        <p class="text-start text-lg leading-relaxed max-w-xl pt-3">
          Currently, I'm <span class="font-bold">fully booked</span> working with:
        </p>

        <!-- Partners (tablet and desktop) -->
        <table class="hidden lg:table max-w-xl border-separate border-spacing-y-3">
          <tr v-for="partner in partners" :key="partner.name">
            <td class="w-[180px] align-top">
              <a :href="partner.href" target="_blank" class="flex items-center gap-3 mb-2 cursor-pointer">
                <img :src="partner.logo" :alt="partner.name" class="w-6 h-6" />
                <h4 class="text-lg font-bold whitespace-nowrap">{{ partner.name }}</h4>
              </a>
            </td>
            <td class="align-top">
              <p class="text-lg text-app-paragraph text-left">
                {{ partner.description }}
              </p>
            </td>
          </tr>
        </table>

        <!-- Partners (mobile) -->
        <div class="block lg:hidden max-w-xl pt-4">
          <div v-for="partner in partners" :key="partner.name" class="mb-4">
            <a :href="partner.href" target="_blank" class="flex items-center gap-3 mb-2 cursor-pointer">
              <img :src="partner.logo" :alt="partner.name" class="w-6 h-6" />
              <h4 class="text-lg font-bold whitespace-nowrap">{{ partner.name }}</h4>
            </a>
            <p class="text-lg text-app-paragraph text-left">
              {{ partner.description }}
            </p>
          </div>
        </div>
        
        <div class="my-3 inline-block font-medium self-center sm:self-start">
          <glowing-button @click="composeEmail({ to: 'me@emilio-balda.com' })">
            <template #icon>
              <div class="i-carbon-email" />
            </template>
            <template #default>
              Get in Touch
            </template>
          </glowing-button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.typewriter {
  overflow: hidden;
  margin: 0 auto;
}

@media only screen and (min-width: 768px) {

  /* Animation */
  .typewriter {
    animation: animated-text 2.5s steps(20, end) 1s 1 normal both,
      animated-cursor 1s steps(28, end) 2.5s infinite;
  }

  .typewriter {
    white-space: nowrap;
    border-right: solid 4px var(--primary-500);
  }
}

/* text animation */

@keyframes animated-text {
  0% {
    width: 0%;
    border-right-color: var(--primary-500);
  }

  100% {
    width: 100%;
    border-right-color: var(--secondary-500);
  }
}

/* cursor animations */

@keyframes animated-cursor {
  from {
    border-right-color: var(--secondary-500);
  }

  to {
    border-right-color: transparent;
  }
}

/* Tutorial on https://fossheim.io/writing/posts/css-text-gradient. */

.gradient-text {
  /* Fallback: Set a background color. */
  background-color: black;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, var(--primary-500), var(--secondary-500));

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>
