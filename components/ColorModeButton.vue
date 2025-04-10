<script setup lang="ts">
const { t } = useI18n();
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
  <button
    v-if="!colorMode?.forced"
    class="relative flex cursor-pointer items-center gap-4 hover:bg-green-500 hover:text-white max-md:w-full max-md:px-4 max-md:py-2 md:aspect-square md:h-9 md:justify-center md:rounded-full dark:hover:bg-green-600"
    @click="isDark = !isDark"
  >
    <div
      class="flex items-center justify-center gap-4 rounded-full transition-transform"
      :class="{
        'rotate-45': isDark,
      }"
    >
      <UIcon
        :name="!isDark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'"
        class="text-2xl"
      />
    </div>
    <div class="md:hidden">
      {{ isDark ? t('switch-to-light-mode') : t('switch-to-dark-mode') }}
    </div>
  </button>
</template>
