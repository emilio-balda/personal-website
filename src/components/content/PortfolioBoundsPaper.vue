<script setup lang="ts">
</script>

<template>
  <div>
    <h1 class="py-4 text-2xl font-bold">
      Project Goal
    </h1>
    <p>
      Publish a theoretical paper about the generalization capabilities of deep neural networks under the presence of a malicious attacker modifying the inputs of the network.
    </p>

    <h1 class="py-4 text-2xl font-bold">
      Approach
    </h1>

    <p>
      I used tools from statistical learning theory to derive theoretical bounds that scaled better with the input dimension and the number of classes with respect to other existing bounds.
      The paper was published in AISTATS 2020.
      See the full paper <glowing-hyper-link href="https://proceedings.mlr.press/v108/balda20a" text="here" />.
    </p>

    <h1 class="py-4 text-2xl font-bold">
      Tech Stack
    </h1>

    <p>
      <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/330px-TensorFlow_logo.svg.png" class="w-32"> -->
      <ul class="list-disc list-outside pl-8 text-left">
        <li>
          <p class="inline font-bold italic">
            TensorFlow
          </p>: used to train neural networks and visualize the theoretical results in a simulation.
        </li>
      </ul>
    </p>
  </div>
</template>
