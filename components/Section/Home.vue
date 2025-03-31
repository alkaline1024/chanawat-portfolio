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
  await wait(600);
  zoomed.value = false;
});
</script>

<template>
  <div class="flex items-center gap-8 pt-12 sm:pt-48">
    <AnimationCelebration
      v-if="celebrating"
      @on-completed="celebrating = false"
    />
    <div class="space-y-12">
      <button
        class="w-fit cursor-pointer rounded-md border-2 border-yellow-500 bg-yellow-300/5 px-4 py-1 text-xl font-medium text-yellow-500 transition-all hover:scale-115 hover:bg-yellow-400/10"
        :class="{
          'animate-bounce': bounced,
          'scale-115 duration-400': zoomed,
          'scale-115 !bg-yellow-500 !text-white': celebrating,
        }"
        @click="celebrating = true"
      >
        Hello Everyone
        <div class="animate-wave-infinite drop-shadow-xl">👋</div>
      </button>
      <h1 class="py-2 !text-6xl font-semibold">I'm Chanawat Thuasuphap</h1>
      <h3>
        A passionate Full Stack Developer 🚀 with hands-on experience in building Web and Mobile applications using
        JavaScript, Nuxt, Svelte, FastAPI, Fastify, Flask, and Flutter — focused on building clean and easy-to-use
        applications with modern tools and frameworks.
      </h3>
      <div class="flex items-center gap-8">
        <UButton
          label="Contact Me"
          href="#contact"
        />
        <UButton
          icon="ic:baseline-download"
          :ui="{ leadingIcon: 'text-2xl' }"
          label="My Resume"
          disabled
          class="hover:!bg-primary-700 !bg-primary-700 opacity-90"
        />
      </div>
    </div>
    <DotLottieVue
      class="aspect-square h-96 w-96 drop-shadow-[0_25px_25px_rgba(0,0,0,0.075)] dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.075)]"
      autoplay
      loop
      src="/chanawat-portfolio/lotties/full-stack-developer.json"
    />
  </div>
</template>
