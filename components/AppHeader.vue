<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const { t } = useI18n();
const tabs = computed(() => [
  { name: t("home"), path: "/", icon: "ic:outline-home", activeIcon: "ic:round-home" },
  { name: t("projects"), path: "/projects", icon: "ic:round-star-border", activeIcon: "ic:round-star" },
  { name: t("resume"), path: "/resume", icon: "ic:outline-contact-page", activeIcon: "ic:round-contact-page" },
  { name: t("blog"), path: "/blog", icon: "ic:outline-message", activeIcon: "ic:message" },
  { name: t("contact"), path: "/contact", icon: "ic:outline-local-phone", activeIcon: "ic:local-phone" },
]);
const isActive = (path: string) => route.path === localePath(path);
</script>

<template>
  <div class="h-[64px] w-full flex justify-between border-b border-black/15 dark:border-white/15">
    <div
      v-for="tab in tabs"
      class="relative w-full h-full place-content-center"
    >
      <div
        class="z-10 absolute bg-primary left-0 right-0 top-0 bottom-0 cursor-pointer text-lg text-primary border-b-2 flex items-center justify-center gap-2"
        :class="{
          'border-primary': isActive(tab.path),
          'border-transparent opacity-80  hover:opacity-100': !isActive(tab.path),
        }"
        @click="router.push(localePath(tab.path))"
      >
        <UIcon
          class="text-2xl"
          :name="isActive(tab.path) ? tab.activeIcon : tab.icon"
        />
        {{ tab.name }}
      </div>
      <div
        :class="{
          'shadow-primary': isActive(tab.path),
          'shadow-transparent': !isActive(tab.path),
        }"
        class="z-0 absolute top-0 bottom-0 left-0 right-0 shadow-lg duration-400"
      />
    </div>
    <div class="flex items-center justify-center gap-4 p-4 bg-primary z-10">
      <ChangeLanguageButton />
      <ColorModeButton />
    </div>
  </div>
</template>
