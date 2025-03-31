<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="space-y-4">
      <div class="group w-full font-bold text-yellow-500">
        <div class="w-fit cursor-default text-3xl transition-all group-hover:scale-150">
          Hello Everyone
          <span class="animate-wave-infinite"> 👋 </span>
        </div>
      </div>
      <h1 class="!text-6xl font-semibold">I'm Chanawat Thuasuphap</h1>
      <h3>
        A passionate Full Stack Developer 🚀 with hands-on experience in building Web and Mobile applications using
        JavaScript, Nuxt, Svelte, FastAPI, Fastify, Flask, and Flutter — focused on building clean and easy-to-use
        applications with modern tools and frameworks.
      </h3>
    </div>
    <DotLottieVue
      class="aspect-square h-96 w-96 drop-shadow-[0_25px_25px_rgba(0,0,0,0.075)] dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.075)]"
      autoplay
      loop
      src="/chanawat-portfolio/lotties/full-stack-developer.json"
    />
  </div>
</template>
