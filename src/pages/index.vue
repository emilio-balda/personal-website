<script setup lang="ts">
import TableResponsive from '~/components/TableResponsive.vue'
import GlowingButton from '~/components/GlowingButton.vue'

const router = useRouter()
</script>

<template>
  <div class="py-8">
    <h1 class="typewriter text-8xl italic py-3">
      Transparent Data Science for...
    </h1>
  </div>
  <table-responsive>
    <tr>
      <td class="px-4">
        <img src="../assets/me.png" alt="Avatar" class="w-96 rounded-full">
      </td>
      <td class="px-4">
        <h4 class="text-3xl text-left font-bold whitespace-nowrap">
          Emilio Balda
        </h4>
        <p class="text-3xl text-left whitespace-nowrap">
          Backend Developer
        </p>
        <p class="text-3xl text-left whitespace-nowrap">
          PhD in Machine Learning
        </p>
        <p class="text-3xl text-left whitespace-nowrap">
          <a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a>
        </p>
      </td>
      <td class="px-16">
        <p class="text-2xl text-justify py-10">
          I learned how to keep up with the latest advances in AI during Ph.D. studies.

          Now, I'm a co-founding member of aiXbrain GmbH to turn these technologies into real software products.
        </p>
        <div class="inline-block py-2 px-7 font-medium">
          <glowing-button label="Contact" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
        </div>
      </td>
    </tr>
  </table-responsive>
</template>

<style scoped>
.typewriter {
  border-right: solid 4px mediumspringgreen;
  white-space: nowrap;
  overflow: hidden;
  font-size: 64px;
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
  to{width: 950px;}
}

/* cursor animations */

@keyframes animated-cursor{
  from{border-right-color: mediumspringgreen;}
  to{border-right-color: transparent;}
}
</style>
