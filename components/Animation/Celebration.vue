<script setup lang="ts">
import { type DotLottie, DotLottieVue } from "@lottiefiles/dotlottie-vue";

const emit = defineEmits(["onCompleted"]);
const dotLottieRef = ref();

onMounted(() => {
  const instance = dotLottieRef.value.getDotLottieInstance() as DotLottie;
  instance.addEventListener("complete", () => {
    console.log("Child completed");
    emit("onCompleted", true);
  });
});

const animationSources = [
  "/chanawat-portfolio/lotties/celebration-01.json",
  "/chanawat-portfolio/lotties/celebration-02.json",
  "/chanawat-portfolio/lotties/celebration-03.json",
  "/chanawat-portfolio/lotties/celebration-04.json",
];

const celebrationSrc = animationSources[Math.floor(Math.random() * animationSources.length)];
</script>

<template>
  <DotLottieVue
    :src="celebrationSrc"
    :loop="false"
    :speed="1.5"
    autoplay
    class="fixed top-0 right-0 left-0 z-10 h-screen w-screen"
    ref="dotLottieRef"
  />
</template>
