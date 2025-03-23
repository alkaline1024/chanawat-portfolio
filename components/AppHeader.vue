<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const tabs = [
  { name: "Home", path: "/", icon: "ic:round-home" },
  { name: "Projects", path: "/projects", icon: "ic:round-star" },
  { name: "Resume", path: "/resume", icon: "ic:round-contact-page" },
  { name: "Blog", path: "/blog", icon: "ic:round-message" },
  { name: "Contact", path: "/contact", icon: "ic:round-local-phone" },
];
</script>

<template>
  <div class="h-[64px] w-full flex justify-between border-b border-black/15 dark:border-white/15">
    <div
      v-for="tab in tabs"
      :key="tab.path"
      class="relative w-full h-full place-content-center"
    >
      <div
        class="z-10 absolute bg-primary left-0 right-0 top-0 bottom-0 cursor-pointer text-lg border-b-2 flex items-center justify-center gap-2"
        :class="{
          ' border-primary': route.path == tab.path,
          ' border-transparent opacity-80  hover:opacity-100': route.path != tab.path,
        }"
        @click="router.push(tab.path)"
      >
        <UIcon
          class="text-3xl"
          :name="tab.icon"
        />
        {{ tab.name }}
      </div>
      <div
        :class="{
          'shadow-primary': route.path == tab.path,
          'shadow-transparent': route.path != tab.path,
        }"
        class="z-0 absolute top-0 bottom-0 left-0 right-0 shadow-lg duration-400"
      />
    </div>
    <div class="flex items-center justify-center gap-4 p-4 bg-primary">
      <ChangeLanguageButton />
      <ColorModeButton />
    </div>
  </div>
</template>
