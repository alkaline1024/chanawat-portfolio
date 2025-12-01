<script setup lang="ts">
const props = defineProps<{
  skill: { icon: string; shortName: string; fullName: string; description: string; url: string };
}>();
</script>
<template>
  <a
    :href="skill.url"
    target="_blank"
  >
    <UTooltip
      arrow
      :text="skill.description"
      :content="{
        align: 'center',
        side: 'top',
        sideOffset: 16,
      }"
      :ui="{
        text: 'text-lg',
        content: '!p-4 shadow-xl dark:shadow-white/5',
      }"
    >
      <div
        class="group flex w-18 max-w-18 cursor-pointer flex-col items-center justify-center gap-4 text-center text-wrap text-gray-500 saturate-100 transition-all hover:text-black hover:drop-shadow-[0_28px_28px_rgba(0,0,0,0.25)] hover:saturate-200 max-md:text-base dark:text-gray-300 dark:hover:text-white dark:hover:drop-shadow-[0_28px_28px_rgba(255,255,255,0.5)]"
      >
        <UIcon
          :name="skill.icon"
          class="aspect-square w-full text-5xl duration-200 group-hover:scale-110 max-md:text-4xl"
        />
        {{ skill.shortName }}
      </div>
    </UTooltip>
  </a>
</template>
