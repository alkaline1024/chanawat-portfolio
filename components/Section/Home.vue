<script setup lang="ts">
import { SPLASH_SCREEN_TIMEOUT } from "~/constants";
import { type DotLottie, DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { t, locale } = useI18n();

const wait = async (milliseconds: number) => {
  return await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const celebrating = ref(false);
const bounced = ref(false);
const zoomed = ref(false);

function scrollToContact() {
  const contact = document.getElementById("contact");
  if (contact)
    window.scrollTo({
      top: contact.offsetTop - 72,
      behavior: "smooth",
    });
}

onMounted(async () => {
  await wait(SPLASH_SCREEN_TIMEOUT);
  // Hello's animation
  bounced.value = true;
  await wait(1500);
  bounced.value = false;
  zoomed.value = true;
  await wait(600);
  zoomed.value = false;
});
</script>

<template>
  <div class="flex items-center justify-center gap-8 pt-32 max-lg:flex-col sm:pt-48">
    <AnimationCelebration
      v-if="celebrating"
      @on-completed="celebrating = false"
    />
    <div class="space-y-12">
      <button
        class="z-0 w-fit cursor-pointer rounded-md border-2 border-yellow-500 bg-yellow-300/5 px-4 py-1 text-xl font-medium text-yellow-500 transition-all hover:scale-115 hover:bg-yellow-400/10"
        :class="{
          'animate-bounce': bounced,
          'ml-10 scale-115 duration-400': zoomed,
          'ml-10 !scale-150 !bg-yellow-500 !text-white duration-400': celebrating,
        }"
        @click="celebrating = true"
      >
        {{ t("hello-everyone") }}
        <div class="animate-wave-infinite drop-shadow-primary-xl">👋</div>
      </button>
      <div class="space-y-2 md:py-2">
        <div class="flex items-center">
          <h1 class="!text-7xl font-bold max-md:!text-5xl">
            {{ locale == "th" ? "เอิร์ท" : "I'm Earth!" }}
          </h1>
          <div class="relative h-full w-0 overflow-visible">
            <DotLottieVue
              loop
              autoplay
              class="absolute -top-12 -left-12 w-46 md:ml-2"
              src="/chanawat-portfolio/lotties/earth.json"
            />
          </div>
        </div>
        <h2 class="!text-4xl max-md:!text-2xl">
          {{ locale == "th" ? "ชนาวัฒน์ ทั้วสุภาพ" : "Chanawat Thuasuphap" }}
        </h2>
      </div>
      <h3 class="leading-9 max-md:!text-lg">
        {{ t("introduction-description") }}
      </h3>
      <div class="flex items-center gap-8 max-md:gap-3">
        <UButton
          :label="t('contact-me')"
          @click="scrollToContact"
        />
        <UButton
          icon="ic:baseline-download"
          :ui="{ leadingIcon: 'text-2xl' }"
          :label="t('my-resume')"
          disabled
          class="hover:!bg-primary-700 !bg-primary-700 opacity-90"
        />
      </div>
    </div>
    <DotLottieVue
      class="aspect-square h-96 w-96 drop-shadow-[0_25px_25px_rgba(0,0,0,0.075)] max-md:h-64 max-md:w-64 dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.075)]"
      autoplay
      loop
      src="/chanawat-portfolio/lotties/full-stack-developer.json"
    />
  </div>
</template>
