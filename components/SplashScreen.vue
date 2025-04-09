<script setup lang="ts">
import { type DotLottie, DotLottieVue } from "@lottiefiles/dotlottie-vue";

const playerRef = ref();
const isLoading = ref(true);
onMounted(() => {
  const instance: DotLottie = playerRef.value.getDotLottieInstance();
  instance.addEventListener("load", () => {
    instance.play();
    setTimeout(() => (isLoading.value = false), 2000);
  });
});
</script>

<template>
  <div :class="isLoading ? 'h-screen overflow-hidden' : ''">
    <div
      v-if="isLoading"
      class="flex h-screen items-center justify-center"
    >
      <DotLottieVue
        ref="playerRef"
        loop
        :speed="2"
        :render-config="{
          freezeOnOffscreen: false,
        }"
        class="await-loading mb-16 h-96 w-96"
        src="/chanawat-portfolio/lotties/earth-loading.json"
      />
    </div>
    <slot />
  </div>
</template>
