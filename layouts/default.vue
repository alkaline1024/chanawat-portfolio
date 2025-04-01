<script setup lang="ts">
const visibleBackToTop = ref(false);

const handleScroll = () => {
  visibleBackToTop.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-primary relative">
    <AppHeader class="fixed z-100" />
    <div class="z-10 min-h-screen">
      <slot />
    </div>
    <AppFooter />
    <ButtonBackToTop
      class="fixed right-14 transition-all duration-250"
      :class="visibleBackToTop ? 'bottom-14' : '-bottom-14'"
    />
  </div>
</template>
