<script setup lang="ts">
import { type DotLottie, DotLottieVue } from "@lottiefiles/dotlottie-vue";

const wait = async (milliseconds: number) => {
  return await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const celebrating = ref(false);
const bounced = ref(false);
const zoomed = ref(false);

onMounted(async () => {
  // Hello's animation
  bounced.value = true;
  await wait(1500);
  bounced.value = false;
  zoomed.value = true;
  await wait(1200);
  zoomed.value = false;
});
</script>

<template>
  <div class="flex items-center gap-2">
    <AnimationCelebration
      v-if="celebrating"
      @on-completed="celebrating = false"
    />
    <div class="space-y-4">
      <button
        class="w-fit cursor-pointer text-3xl font-bold text-yellow-500 transition-all hover:scale-150"
        :class="{ 'animate-bounce': bounced, 'scale-125 duration-800': zoomed }"
        @click="celebrating = true"
      >
        Hello Everyone
        <span class="animate-wave-infinite"> 👋 </span>
      </button>
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
