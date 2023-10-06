<script setup lang="ts">
import AppImage from '~/components/AppImage.vue'

const books = [
  { title: 'PhD Thesis', image: 'https://drive.google.com/uc?id=1zJQDNeFlj-J1f6vpMzfJFhBqsQmKhVbX', my_role: 'Author (PhD Thesis)', url: 'https://ti.rwth-aachen.de/diss/Emilio_Rafael_Balda' },
  { title: 'Fundamentals of Data Analytics', image: 'https://images-na.ssl-images-amazon.com/images/I/41XJPE3bpLL._SX313_BO1,204,203,200_.jpg', my_role: 'Co-Author', url: 'https://www.amazon.de/dp/3030568334/ref=cm_sw_em_r_mt_dp_0X6N0V9V0YQYB4YH4RZ6' },
  { title: 'Adversarial Examples in Deep Neural Networks: An Overview', image: 'https://media.springernature.com/w306/springer-static/cover-hires/book/978-3-030-31760-7', my_role: 'Co-Author of One Chapter', url: 'https://link.springer.com/chapter/10.1007/978-3-030-31760-7_2' },
]
</script>

<template>
  <div class="flex flex-wrap items-center justify-center">
    <div v-for="book in books" :key="book.title" class="item-center mx-4 mb-8 flex flex-col justify-center">
      <div class="mb-1">
        <a :href="book.url">
          <AppImage
            :src="book.image"
            placeholder-height="18rem"
            placeholder-width="12rem"
            class="h-[18rem] w-full"
          />
        </a>
      </div>
      <div>
        <p class="pt-2 italic">
          {{ book.my_role }}
        </p>
      </div>
    </div>
  </div>
</template>
