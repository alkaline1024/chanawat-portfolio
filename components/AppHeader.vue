<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { SPLASH_SCREEN_TIMEOUT } from "~/constants";

const { t, locale } = useI18n();
const isOpenDrawer = ref(false);
const isDesktop = useMediaQuery("(min-width: 768px)");

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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.125,
    },
  );

  for (const tab of tabs.value) {
    const target = document.getElementById(tab.target);
    if (target) {
      target.classList.add("opacity-0", "translate-y-10", "duration-800");
      observer.observe(target);
    }
  }
});

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
        animation: "bounceIn 0.5s ease-in-out",
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
    isOpenDrawer.value = false;
    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: "smooth",
    });
    activeTab.value = id;
    const tabElement = document.getElementById(`header-tab-${id}`);
    if (tabElement) {
      scrolling.value = true;
      highlightTabStyle.value = {
        animation: "bounceIn 0.5s ease-in-out",
        left: `${tabElement.offsetLeft}px`,
        width: `${tabElement.offsetWidth}px`,
      };
    }
  }
}

watch(locale, () => {
  highlightTabStyle.value = { hidden: true };
  setTimeout(updateHighlightTab, 100);
});

const isInit = ref(false);

onMounted(() => {
  window.addEventListener("resize", updateHighlightTab);
  window.addEventListener("scroll", updateHighlightTab);
  window.addEventListener("scrollend", () => (scrolling.value = false));
  setTimeout(() => {
    updateHighlightTab();
    isInit.value = true;
  }, SPLASH_SCREEN_TIMEOUT + 400);
});
</script>

<template>
  <div
    class="fixed z-100 flex h-[64px] w-full justify-end border-b border-black/15 bg-gray-100/75 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-stone-900/75"
  >
    <div
      v-if="isDesktop"
      class="flex justify-end"
    >
      <div
        class="light:bg-green-400 absolute top-3 -right-12 z-0 rounded-full p-5 transition-all dark:bg-green-600"
        :class="{
          'opacity-100': isInit,
          'opacity-0': !isInit,
        }"
        :style="highlightTabStyle"
      />
      <div
        v-for="tab in tabs"
        :id="tab.id"
        :key="tab.target"
        class="header-tab relative my-3 w-fit place-content-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
        @click="scrollToTarget(tab.target)"
      >
        <div
          class="z-10 flex cursor-pointer items-center justify-center gap-2 px-4 mix-blend-plus-darker max-lg:px-2 dark:mix-blend-screen"
          :href="`#${tab.target}`"
        >
          <div class="flex items-center gap-2">
            <div class="flex items-center max-xl:hidden">
              <UIcon
                class="text-2xl"
                :name="tab.icon"
              />
            </div>
            {{ tab.name }}
          </div>
        </div>
      </div>
      <div class="z-10 flex items-center justify-center gap-4 p-4">
        <ChangeLanguageButton />
        <ColorModeButton />
      </div>
    </div>
    <div
      v-else
      class="flex justify-end"
    >
      <UDrawer
        direction="top"
        :overlay="false"
        :ui="{ content: 'bg-primary' }"
        v-model:open="isOpenDrawer"
      >
        <UIcon
          name="ic:round-menu"
          class="my-auto mr-4 cursor-pointer text-4xl"
        />
        <template #content>
          <div class="h-full w-full text-lg">
            <div
              v-for="tab in tabs"
              :id="tab.id"
              :key="tab.target"
              class="header-tab relative cursor-pointer place-content-center px-4 py-2"
              :class="
                isActive(tab.target)
                  ? 'bg-green-500 text-white dark:bg-green-600'
                  : 'hover:bg-stone-100 hover:dark:bg-stone-700'
              "
              @click="scrollToTarget(tab.target)"
            >
              <div class="flex items-center gap-4">
                <div class="flex items-center">
                  <UIcon
                    :name="tab.icon"
                    class="text-2xl"
                  />
                </div>
                {{ tab.name }}
              </div>
            </div>
            <div class="my-2 border-t border-black/10 dark:border-white/10">
              <ChangeLanguageButton
                class="max-h-16 px-4 py-2 hover:bg-green-500 hover:text-white hover:dark:bg-green-600"
              />
              <ColorModeButton />
            </div>
          </div>
        </template>
      </UDrawer>
    </div>
  </div>
</template>
