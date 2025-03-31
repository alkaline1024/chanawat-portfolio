<script setup lang="ts">
const { t } = useI18n();

const tabs = computed(() => [
  { name: t("home"), target: "home", icon: "ic:outline-home", activeIcon: "ic:round-home" },
  { name: t("skills"), target: "skills", icon: "ic:round-star-border", activeIcon: "ic:round-star" },
  { name: t("projects"), target: "projects", icon: "ic:round-work-outline", activeIcon: "ic:round-work" },
  // { name: t("resume"), target: "resume", icon: "ic:outline-contact-page", activeIcon: "ic:round-contact-page" },
  { name: t("blog"), target: "blog", icon: "ic:outline-message", activeIcon: "ic:message" },
  { name: t("contact"), target: "contact", icon: "ic:outline-local-phone", activeIcon: "ic:local-phone" },
]);

const activeTab = ref("home");

const isActive = (target: string) => activeTab.value === target;

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeTab.value = entry.target.id;
        break;
      }
    }
  }, options);

  tabs.value.forEach((tab) => {
    const element = document.getElementById(tab.target);
    if (element && observer) {
      observer.observe(element);
    }
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div
    class="flex h-[64px] w-full justify-end border-b border-black/15 bg-white/75 backdrop-blur-sm dark:border-white/15 dark:bg-stone-900/75"
  >
    <div
      v-for="tab in tabs"
      :key="tab.target"
      class="relative h-full w-fit place-content-center"
    >
      <a
        class="z-10 flex cursor-pointer items-center justify-center gap-2 px-4 text-lg"
        :href="`#${tab.target}`"
        :class="
          isActive(tab.target)
            ? 'bg-secondary text-secondary rounded-full p-1 text-white'
            : 'hover:bg-primary/25 text-primary'
        "
      >
        <UIcon
          class="text-2xl"
          :name="isActive(tab.target) ? tab.activeIcon : tab.icon"
        />
        {{ tab.name }}
      </a>
    </div>
    <div class="bg-primary z-10 flex items-center justify-center gap-4 p-4">
      <ChangeLanguageButton />
      <ColorModeButton />
    </div>
  </div>
</template>
