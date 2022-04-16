<script setup lang="ts">
const books = [
  { title: 'PhD Thesis', image: 'https://www.kulturkaufhaus.de/annotstream/9783863598020/COPL/Balda-Emilio/Robustness-Analysis-of-Deep-Neural-Networks-in-the-Presence-of-Adversarial-Perturbations-and-Noisy-Labels.jpg?sq=1', my_role: 'Author (PhD Thesis)', url: 'https://ti.rwth-aachen.de/diss/Emilio_Rafael_Balda' },
  { title: 'Fundamentals of Data Analytics', image: 'https://images-na.ssl-images-amazon.com/images/I/41XJPE3bpLL._SX313_BO1,204,203,200_.jpg', my_role: 'Co-Author', url: 'https://www.amazon.de/dp/3030568334/ref=cm_sw_em_r_mt_dp_0X6N0V9V0YQYB4YH4RZ6' },
  { title: 'Adversarial Examples in Deep Neural Networks: An Overview', image: 'https://media.springernature.com/w306/springer-static/cover-hires/book/978-3-030-31760-7', my_role: 'Co-Author of One Chapter', url: 'https://link.springer.com/chapter/10.1007/978-3-030-31760-7_2' },
]
</script>

<template>
  <div class="flex items-center justify-center">
    <div v-for="book in books" :key="book.title" class="flex flex-col item-center justify-center">
      <div class="px-2">
        <a :href="book.url">
          <img
            :src="book.image"
            alt="image"
            class="w-full h-72"
          >
        </a>
      </div>
      <div>
        <p class="italic pt-2">
          {{ book.my_role }}
        </p>
      </div>
    </div>
  </div>
</template>
