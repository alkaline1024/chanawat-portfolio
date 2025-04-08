<script setup lang="ts">
const { t } = useI18n();

// prettier-ignore
const tabs = computed(() => [
  { id: "header-tab-home", name: t("home"), target: "home", icon: "ic:outline-home", activeIcon: "ic:round-home" },
  { id: "header-tab-skills", name: t("skills"), target: "skills", icon: "ic:round-star-border", activeIcon: "ic:round-star" },
  { id: "header-tab-education", name: t("education"), target: "education", icon: "ic:outline-school", activeIcon: "ic:round-school" },
  { id: "header-tab-experiences",name: t("work-experiences"), target: "experiences", icon: "ic:round-work-outline", activeIcon: "ic:round-work" },
  { id: "header-tab-projects",name: t("projects"), target: "projects", icon: "ic:outline-workspace-premium", activeIcon: "ic:round-workspace-premium" },
  { id: "header-tab-blogs",name: t("blogs"), target: "blogs", icon: "ic:outline-message", activeIcon: "ic:message" },
  { id: "header-tab-contact",name: t("contact"), target: "contact", icon: "ic:outline-local-phone", activeIcon: "ic:local-phone" },
]);

const scrolling = ref(false);
const activeTab = ref("home");
const isActive = (target: string) => activeTab.value === target;

const buffer = window.innerHeight / 4;
const highlightTabStyle = ref();

function updateHighlightTab() {
  if (scrolling.value) {
    return true;
  }
  const targets = document.querySelectorAll<HTMLElement>(".section");
  const currentPosition = window.scrollY;
  for (const target of targets) {
    if (currentPosition < target.offsetTop + target.offsetHeight - buffer) {
      activeTab.value = target.id;
      const tabElement = document.getElementById(`header-tab-${target.id}`);
      if (!tabElement) {
        continue;
      }
      highlightTabStyle.value = {
        left: `${tabElement.offsetLeft}px`,
        width: `${tabElement.offsetWidth}px`,
      };
      return true;
    }
  }
}

function scrollToTarget(id: string) {
  const target = document.getElementById(id);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: "smooth",
    });
    const tabElement = document.getElementById(`header-tab-${id}`);
    if (tabElement) {
      scrolling.value = true;
      highlightTabStyle.value = {
        left: `${tabElement.offsetLeft}px`,
        width: `${tabElement.offsetWidth}px`,
      };
    }
  }
}

onMounted(() => {
  window.addEventListener("resize", updateHighlightTab);
  window.addEventListener("scroll", updateHighlightTab);
  window.addEventListener("scrollend", () => (scrolling.value = false));
});
</script>

<template>
  <div
    class="difference fixed flex h-[64px] w-full justify-end border-b border-black/15 bg-gray-100/75 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-stone-900/50"
  >
    <div
      class="light:bg-green-400 absolute top-3 z-0 rounded-full p-5 opacity-90 transition-all dark:bg-green-600"
      :style="highlightTabStyle"
    />
    <div
      v-for="tab in tabs"
      :id="tab.id"
      :key="tab.target"
      class="header-tab relative h-full w-fit place-content-center"
      @click="scrollToTarget(tab.target)"
    >
      <div
        class="z-10 flex cursor-pointer items-center justify-center gap-2 px-4 mix-blend-plus-darker dark:mix-blend-screen"
        :href="`#${tab.target}`"
      >
        <UIcon
          class="text-2xl"
          :name="tab.icon"
        />
        {{ tab.name }}
      </div>
    </div>
    <div class="z-10 flex items-center justify-center gap-4 p-4">
      <ChangeLanguageButton />
      <ColorModeButton />
    </div>
  </div>
</template>
