<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">{{ t("contact-me") }}</h1>
    <p class="opacity-70">{{ t("contact-invitation") }}</p>
    <p class="py-2">"{{ t("open-to-opportunities-introduction") }}"</p>
    <div>
      <p class="flex items-center gap-2">
        <UIcon name="ic:outline-location-on" />{{ t("bangkok") }} | {{ t("remote") }}
      </p>
      <div class="flex items-center gap-2">
        <UIcon name="ic:outline-work-outline" /> {{ t("open-for-opportunities") }}:
        <div class="bg-secondary text-secondary rounded-full px-3 py-1 text-sm font-semibold">{{ t("yes") }}</div>
      </div>
    </div>
    <div
      class="flex flex-wrap justify-start gap-8 pt-12 text-6xl *:transition-all *:hover:contrast-150 *:hover:saturate-75 max-md:gap-4"
    >
      <a
        href="mailto:chanawat2003@gmail.com"
        target="_blank"
        class="h-[60px] w-[60px] place-content-center overflow-hidden rounded-full bg-red-500 pt-[6px] text-center text-4xl text-white"
      >
        <UIcon name="ic:round-mail" />
      </a>
      <a
        href="https://www.facebook.com/Earth.CT"
        target="_blank"
        class="h-[60px] w-[60px]"
      >
        <UIcon name="logos:facebook" />
      </a>
      <a
        href="https://www.linkedin.com/in/chanawat-thuasuphap"
        target="_blank"
        class="h-[60px] w-[60px] rounded-full bg-white"
      >
        <UIcon name="logos:linkedin-icon" />
      </a>
      <a
        href="https://github.com/alkaline1024/"
        target="_blank"
        class="flex h-[60px] w-[60px] items-center justify-center rounded-full text-center text-6xl dark:bg-white dark:text-[44px]"
      >
        <UIcon name="logos:github-icon" />
      </a>
      <a
        href="https://github.com/alkaline1024/"
        target="_blank"
        class="flex h-[60px] w-[60px] items-center justify-center rounded-full text-center text-black shadow-md dark:bg-white dark:text-4xl"
      >
        <UIcon name="fa6-brands:medium" />
      </a>
    </div>
  </div>
</template>
