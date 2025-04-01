<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">Work Experiences</h1>
    <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="relative">
        <img
          src="/img/logo-r202.png"
          class="absolute -top-12 right-0 left-0 z-10 mx-auto w-28 rounded-full shadow-lg"
        />
        <div class="shadow-primary overflow-hidden rounded-lg shadow-lg">
          <div
            class="relative flex h-36 w-full flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-gray-50"
          >
            <div class="pt-8 text-center text-2xl text-stone-950">R202 Laboratory</div>
            <div class="absolute right-1 bottom-1 flex items-center gap-1 text-base text-black opacity-80">
              <UIcon name="ic:outline-location-on" /> Computer Engineering, Prince of Songkla University
            </div>
          </div>
          <div class="bg-primary space-y-3 p-6">
            <h3 class="text-center font-medium">
              Full Stack Developer
              <p class="text-xl font-normal">Research Student</p>
            </h3>
            <p class="text-center opacity-70">Nov 2021 - Present</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          src="/img/logo-devforward.png"
          class="absolute -top-12 right-0 left-0 z-10 mx-auto w-28 rounded-full shadow-lg"
        />
        <div class="shadow-primary overflow-hidden rounded-lg shadow-lg">
          <div
            class="relative flex h-36 w-full flex-col items-center justify-center bg-gradient-to-b from-orange-600 to-[#F29620] dark:from-orange-700 dark:to-yellow-600"
          >
            <div class="pt-8 text-center text-2xl text-white">Dev Forward Co., Ltd.</div>
            <div class="absolute right-1 bottom-1 flex items-center gap-1 text-base text-white opacity-95">
              <UIcon name="ic:outline-location-on" /> Huai Khwang, Bangkok
            </div>
          </div>
          <div class="bg-primary space-y-3 p-6">
            <h3 class="text-center font-medium">
              Full Stack Developer
              <p class="text-xl font-normal">Cooperative Internship</p>
            </h3>
            <p class="text-center opacity-70">Nov 2024 - Mar 2025</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          src="/img/logo-importstar.png"
          class="absolute -top-12 right-0 left-0 z-10 mx-auto w-28 rounded-full shadow-lg"
        />
        <div class="shadow-primary overflow-hidden rounded-lg shadow-lg">
          <div
            class="relative flex h-36 w-full flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-purple-600"
          >
            <div class="pt-8 text-center text-2xl text-white">Import Star Co., Ltd.</div>
            <div class="absolute right-1 bottom-1 flex items-center gap-1 text-base text-white opacity-90">
              <UIcon name="ic:outline-location-on" /> Hat Yai, Songkhla
            </div>
          </div>
          <div class="bg-primary space-y-3 p-6">
            <h3 class="text-center font-medium">
              Full Stack Developer
              <p class="text-xl font-normal">Part-time</p>
            </h3>
            <p class="text-center opacity-70">Mar 2023 - Nov 2024</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
