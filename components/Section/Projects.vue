<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">Projects</h1>
    <div class="mt-8 flex items-center gap-8">
      <img
        src="/img/PSU-Emblem.png"
        class="drop-shadow-primary-lg w-28"
      />
      <div class="space-y-2">
        <h3 class="font-medium">Prince of Songkhla University</h3>
        <p class="font-medium">Bachelor of Engineer in Computer Engineer</p>
        <p class="opacity-70">{{ locale == "th" ? "มิถุนายน 2564 - มีนาคม 2568" : "June 2021 - March 2025" }}</p>
        <p>Grade: 3.64</p>
      </div>
    </div>
  </div>
</template>
