<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
</script>

<template>
  <UContainer class="space-y-30">
    <SectionHome
      id="home"
      class="section"
    />
    <SectionSkills
      id="skills"
      class="section"
    />
    <SectionEducation
      id="education"
      class="section"
    />
    <SectionExperiences
      id="experiences"
      class="section"
    />
    <SectionProjects
      id="projects"
      class="section"
    />
    <SectionBlogs
      id="blogs"
      class="section"
    />
    <SectionContact
      id="contact"
      class="section"
    />
    <DotLottieVue
      class="mx-auto aspect-square w-1/3 drop-shadow-[0_25px_25px_rgba(0,0,0,0.075)] max-sm:w-3/4 dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.075)]"
      autoplay
      loop
      src="/chanawat-portfolio/lotties/thinking.json"
    />
  </UContainer>
</template>
