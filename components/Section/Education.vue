<script setup lang="ts">
const { t, locale } = useI18n();
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">
      {{ t("education") }}
    </h1>
    <div class="bg-primary mt-8 flex items-center gap-4 overflow-hidden rounded-xl max-md:flex-col max-md:text-center">
      <div class="max-md:light:bg-gradient-to-br h-40 md:p-4 max-md:w-full md:h-56">
        <img
          src="/img/PSU-Emblem.png"
          class="size-full object-contain drop-shadow-lg"
        />
      </div>
      <div class="space-y-2 p-4">
        <h3 class="font-medium">
          {{ locale == "th" ? "มหาวิทยาลัยสงขลานครินทร์" : "Prince of Songkhla University" }}
        </h3>
        <div class="font-medium text-pretty">
          <div v-if="locale == 'th'">
            <p>
              หลักสูตรวิศวกรรมศาสตรบัณฑิต <br class="md:hidden" />
              สาขาวิชาวิศวกรรมคอมพิวเตอร์
            </p>
          </div>
          <div v-else>
            <p>Bachelor of Engineer in Computer Engineer</p>
          </div>
        </div>
        <div class="opacity-70">{{ locale == "th" ? "มิถุนายน 2564 - มีนาคม 2568" : "June 2021 - March 2025" }}</div>
        <div>{{ locale == "th" ? "ผลการเรียนเฉลี่ย: 3.64" : "Cumulative GPA: 3.64" }}</div>
      </div>
    </div>
  </div>
</template>
