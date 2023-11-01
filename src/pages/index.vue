<script setup lang="ts">
import AppImage from '~/components/AppImage.vue'
import GlowingButton from '~/components/GlowingButton.vue'

// import TableResponsive from '~/components/TableResponsive.vue'
// import { useContactStore } from '~/stores/contact'

// const contact = useContactStore()
import { scrollTo } from '~/composables/dom'

const contactInfo = [
  { icon: 'i-carbon-email bg-app-paragraph', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-app-paragraph', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-app-paragraph', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="w-fit px-4 pb-8 md:block md:pb-12">
      <h1
        class="gradient-text typewriter whitespace-normal pr-2 text-3xl font-bold lg:py-2 lg:text-5xl md:text-4xl xl:text-6xl"
      >
        AI Backend Development
      </h1>
    </div>
    <div class="w-full flex flex-wrap items-center justify-center px-12 md:flex-nowrap">
      <div class="neumorphic-shadow-12 flex flex-col items-center rounded-2xl p-4 duration-500 dark:bg-background-900">
        <div class="py-4">
          <AppImage
            src="https://drive.google.com/uc?id=12GXM4ZHFSNUoeMTtu2YAUcA0wt_A59Nl" placeholder-height="12em"
            placeholder-width="12em" class="w-[12em] overflow-hidden rounded-full"
          />
        </div>
        <div class="px-2 py-4">
          <h4 class="whitespace-nowrap text-xl font-semibold lg:text-3xl md:text-2xl">
            Emilio Balda
          </h4>
          <p class="whitespace-nowrap text-lg lg:text-2xl md:text-xl">
            AI Backend Developer
          </p>
          <p class="whitespace-nowrap text-lg lg:text-2xl md:text-xl">
            PhD in Machine Learning
          </p>
          <p class="whitespace-nowrap text-4xl">
            <a v-for="content in contactInfo" :key="content.href" class="inline-block px-1 pt-4" :href="content.href">
              <div :class="content.icon" class="transition-all duration-300 hover:-translate-y-2" />
            </a>
          </p>
        </div>
      </div>
      <div class="px-2 py-12 md:px-12">
        <p class="text-center text-lg leading-relaxed lg:text-2xl md:text-xl">
          I help organizations create successful, scalable, and maintainable SaaS products using machine learning. I
          specialize in delivering quality code with the industry's best practices, from concept to launch. I can optimize
          your team's processes to develop fast without sacrificing quality, achieving results that exceed your
          expectations. Let's work together to turn your vision into a reality!
        </p>
        <div class="my-4 inline-block font-medium md:mx-8 md:my-8">
          <GlowingButton @click="scrollTo('contact')">
            Let's Connect
          </GlowingButton>
        </div>
      </div>
    </div>
  </div>
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
