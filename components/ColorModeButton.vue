<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      sqaure
      size="xl"
      color="neutral"
      variant="ghost"
      class="aspect-square rounded-full transition-all cursor-pointer"
      :class="{
        'rotate-45': isDark,
      }"
      @click="isDark = !isDark"
    >
      <UIcon
        v-if="isDark"
        name="ic:outline-dark-mode"
        class="text-2xl -rotate-45"
      />
      <UIcon
        v-else
        name="ic:outline-light-mode"
        class="text-2xl"
      />
    </UButton>

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
