<script setup lang="ts">
</script>

<template>
  <div>
    <h1 class="py-4 text-2xl font-bold">
      Project Goal
    </h1>
    <p>
      The goal was to publish a journal about new algorithms to generate "adversarial examples". That is, inputs that look normal to a human but are intentionally crafted to make neural networks behave in strange/unstable ways.
    </p>

    <h1 class="py-4 text-2xl font-bold">
      Approach
    </h1>

    <p>
      I designed a mathematical framework that allowed me to derive new algorithms suited for different computer vision tasks. These algorithms outperformed their counterparts in the task of fooling neural networks. The paper was published in the renowned journal "IEEE Transactions on Signal Processing".
      Official link to the paper <glowing-hyper-link href="https://ieeexplore.ieee.org/abstract/document/8846746" text="here" />. You can get the full paper for free with <glowing-hyper-link href="https://www.ti.rwth-aachen.de/publications/output.php?id=263&table=article&type=pdf" text="this link" />.
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
          </p>: used to run compare different "attacks" on various deep neural networks and computer vision tasks.
        </li>
      </ul>
    </p>
  </div>
</template>
