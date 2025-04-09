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
  <div class="relative">
    <AppHeader class="fixed z-100" />
    <div id="layout-content" class="z-0 min-h-screen overflow-x-hidden">
      <slot />
    </div>
    <AppFooter />
    <ButtonBackToTop
      class="fixed right-14 z-100 transition-all duration-250 max-md:right-6"
      :class="visibleBackToTop ? 'bottom-14 max-md:bottom-6' : '-bottom-20'"
    />
  </div>
</template>
