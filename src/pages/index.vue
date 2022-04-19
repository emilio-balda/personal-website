<script setup lang="ts">
import GlowingButton from '~/components/GlowingButton.vue'
// import TableResponsive from '~/components/TableResponsive.vue'
// import { useContactStore } from '~/stores/contact'

// const contact = useContactStore()

const contactInfo = [
  { icon: 'i-carbon-email bg-green-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
  { icon: 'i-carbon-logo-linkedin bg-[royalblue]', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
  { icon: 'i-carbon-logo-github bg-black', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
]

const router = useRouter()
</script>

<template>
  <div class="flex flex-col w-full px-20 items-center justify-center">
    <div class="py-8 w-[1250px]">
      <h1 class="typewriter text-6xl italic py-3">
        Transparent Development. Quality Software.
      </h1>
    </div>
    <div class="flex flex-row w-full items-center justify-center">
      <div class="flex flex-col items-center drop-shadow shadow-xl p-4 rounded-2xl hover:scale-105 duration-500">
        <div class="pb-4">
          <img src="../assets/me.png" alt="Avatar" class="w-[12em] rounded-full border-2 border-slate-100">
        </div>
        <div class="py-4 px-2">
          <h4 class="text-3xl font-semibold text-dark whitespace-nowrap">
            Emilio Balda
          </h4>
          <p class="text-2xl text-dark whitespace-nowrap">
            Full Stack Developer
          </p>
          <p class="text-2xl text-dark whitespace-nowrap">
            PhD in Machine Learning
          </p>
          <p class="text-2xl text-dark whitespace-nowrap">
            <a v-for="content in contactInfo" :key="content.href" class="inline-block px-1 pt-4" :href="content.href">
              <div :class="content.icon" />
            </a>
          </p>
        </div>
      </div>
      <div class="px-16">
        <p class="text-dark leading-relaxed text-2xl text-center py-10">
          I care about communication. That's why I'm interested to know all the details that make your project unique. Before starting a project, you will have a clear picture of how the end result looks like. You will get regular updates about the progress and software adhering to the best practices in the industry.
        </p>
        <div class="inline-block py-2 px-7 font-medium">
          <glowing-button label="Let's Start" class_text="text-lg px-8 py-2" @click="router.push('/services')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typewriter {
  border-right: solid 4px rgb(52 211 153);
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
}

/* Animation */
.typewriter {
  animation: animated-text 3s steps(28,end) 1s 1 normal both,
             animated-cursor 600ms steps(28,end) infinite;
}

/* text animation */

@keyframes animated-text{
  from{width: 0;}
  to{width: 1250px;}
}

/* cursor animations */

@keyframes animated-cursor{
  from{border-right-color: rgb(52 211 153);}
  to{border-right-color: transparent;}
}
</style>
