<script setup lang="ts">
const jobs = [
  { title: 'Full Stack AI Developer', company: 'aiXbrain GmbH', started_at: 'Nov 2019', ended_at: 'Present', description: 'I develop Software-as-a-Service products for industrial monitoring planning, scheduling problems, using artificial intelligence.' },
  { title: 'Researcher / PhD Student', company: 'RWTH Aachen University', started_at: 'Feb 2017', ended_at: 'Oct 2019', description: 'I worked as a Researcher PhD Candidate in the area of machine learning, with a focus on the generation and theoretical understanding of adversarial examples in deep neural networks.' },
  { title: 'Research Intern', company: 'Fraunhofer IIS', started_at: 'Jul 2015', ended_at: 'Nov 2016', description: 'Analyzed, classified and modeled the statistical behavior of the motion profiles for antennas mounted on various vehicles and landscapes.' },
  { title: 'Research Intern', company: 'CEIT Research Center', started_at: 'Jan 2012', ended_at: 'Apr 2012', description: 'Used machine learning techniques to analyze genomic mutations of lung cancer patients and predict the outcome of chemotherapy.' },
]
</script>

<template>
  <div class="flex flex-col">
    <div v-for="job in jobs" :key="job.company" class="text-left py-2">
      <p class="font-bold">
        {{ job.title }}
      </p>
      <p>{{ job.company }}</p>
      <p class="italic">
        {{ job.started_at }} - {{ job.ended_at }}
      </p>
      <p>{{ job.description }}</p>
    </div>
  </div>
</template>
