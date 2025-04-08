<script setup lang="ts">
const { t, locale } = useI18n();
</script>

<template>
  <div class="space-y-2">
    <h1 class="font-medium">{{ t("education") }}</h1>
    <div class="mt-8 flex items-center gap-8">
      <img
        src="/img/PSU-Emblem.png"
        class="w-28 drop-shadow-lg"
      />
      <div class="space-y-2">
        <h3 class="font-medium">
          {{ locale == "th" ? "มหาวิทยาลัยสงขลานครินทร์" : "Prince of Songkhla University" }}
        </h3>
        <p class="font-medium">
          {{
            locale == "th"
              ? "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์"
              : "Bachelor of Engineer in Computer Engineer"
          }}
        </p>
        <p class="opacity-70">{{ locale == "th" ? "มิถุนายน 2564 - มีนาคม 2568" : "June 2021 - March 2025" }}</p>
        <p>{{ locale == "th" ? "ผลการเรียนเฉลี่ย: 3.64" : "Cumulative GPA: 3.64" }}</p>
      </div>
    </div>
  </div>
</template>
