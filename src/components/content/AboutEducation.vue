<script setup lang="ts">
const degrees: Array<{ title: string; institution: string; started_at: string; ended_at: string }> = [
  { title: 'PhD in Machine Learning', institution: 'RWTH Aachen University', started_at: '2017', ended_at: '2019' },
  { title: 'Master\'s degree in Telecommunications and Signal Processing', institution: 'Technische Universität Ilmenau', started_at: '2014', ended_at: '2016' },
  { title: 'Bachelor\'s degree in Telecommunications Engineering', institution: 'University of Navarra', started_at: '2010', ended_at: '2014' },
]
</script>

<template>
  <div class="flex flex-col">
    <div v-for="degree in degrees" :key="degree.institution" class="py-2 text-left">
      <p class="font-bold">
        {{ degree.title }}
      </p>
      <p>
        {{ degree.institution }}
      </p>
      <p class="italic">
        {{ degree.started_at }} - {{ degree.ended_at }}
      </p>
    </div>
  </div>
</template>
