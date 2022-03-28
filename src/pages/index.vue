<script setup lang="ts">
import { userRouter } from 'vue-router'
import TableResponsive from '~/components/TableResponsive.vue'
import GlowingButton from '~/components/GlowingButton.vue'

const router = useRouter()
</script>

<template>
  <h1 class="text-8xl italic py-10 px-10">
    Some awesome quote
  </h1>
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
          Fullstack Developer
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non magna id risus rutrum pulvinar quis in libero.
        </p>
        <div class="inline-block py-2 px-7 font-medium">
          <glowing-button label="Contact" class_text="text-lg px-8 py-2" @click="router.push('/contact')" />
        </div>
      </td>
    </tr>
  </table-responsive>
</template>
