<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

async function switchLanguage() {
  const newLocale = locale.value == "en" ? "th" : "en";

  await setLocale(newLocale);
}
</script>

<template>
  <button
    class="flex h-full w-full cursor-pointer gap-4"
    @click="switchLanguage"
  >
    <div class="aspect-square h-full overflow-hidden rounded-full max-md:h-[24px]">
      <img
        v-if="locale === 'en'"
        class="h-full"
        src="/img/flag-th.jpg"
      />
      <img
        v-else
        class="h-full"
        src="/img/flag-en.png"
      />
    </div>
    <div class="md:hidden">
      {{ locale == "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย" }}
    </div>
  </button>
</template>
