<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <UButton
    class="flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
    icon="ic:round-keyboard-arrow-up"
    :ui="{
      leadingIcon: 'text-3xl font-bold',
    }"
    @click="scrollToTop"
  />
</template>
