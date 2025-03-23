<script setup lang="ts">
const i18n = useI18n();
</script>

<template>
  <button class="rounded-full aspect-square h-full overflow-hidden cursor-pointer">
    <img
      v-if="i18n.locale.value === 'th'"
      class="h-full"
      src="/img/flag-th.jpg"
      @click="i18n.setLocale('en')"
    />
    <img
      v-else
      class="h-full"
      src="/img/flag-en.png"
      @click="i18n.setLocale('th')"
    />
  </button>
</template>
