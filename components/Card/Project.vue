<script setup lang="ts">
const props = defineProps<{
  project: IProject;
}>();
const project = props.project;
const isFullStackFramework = project.tech.frontend == project.tech.backend;
</script>

<template>
  <div class="bg-primary shadow-primary relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
    <img
      :src="`/chanawat-portfolio/img/logo-${project.for}.png`"
      class="absolute top-4 right-4 z-10 w-14 rounded-full shadow-lg"
    />
    <div class="light:bg-gradient-to-br relative w-full from-stone-200 to-stone-50 p-12 text-xl dark:bg-stone-700">
      <div class="flex flex-col items-center justify-center gap-2 drop-shadow-md">
        <UIcon
          :name="project.icon"
          class="text-5xl"
        />
      </div>
    </div>
    <div class="space-y-4 p-4">
      <div>
        <h3 class="font-medium">{{ project.name }}</h3>
        <p class="opacity-70">{{ project.type }}</p>
      </div>
      <div>
        <div class="font-medium">{{ project.role }}</div>
        {{ project.description }}
      </div>
      <div class="flex flex-wrap gap-2">
        <UTooltip
          text="Web Framework"
          v-if="isFullStackFramework"
        >
          <UBadge
            size="lg"
            color="neutral"
            variant="soft"
            class="bg-stone-100 dark:bg-stone-700"
            :label="project.tech.frontend"
            :ui="{
              leadingIcon: 'text-lg',
            }"
          >
            <template #leading>
              <div class="flex items-center gap-1 text-lg">
                <UIcon name="mdi:monitor" />
                /
                <UIcon name="mdi:server" />
              </div>
            </template>
          </UBadge>
        </UTooltip>
        <UTooltip
          text="Frontend Framework"
          v-if="!isFullStackFramework"
        >
          <UBadge
            size="lg"
            color="neutral"
            variant="soft"
            class="bg-stone-100 dark:bg-stone-700"
            icon="mdi:monitor"
            :label="project.tech.frontend"
            :ui="{
              leadingIcon: 'text-lg',
            }"
          />
        </UTooltip>
        <UTooltip
          text="Backend Framework"
          v-if="!isFullStackFramework"
        >
          <UBadge
            size="lg"
            color="neutral"
            variant="soft"
            class="bg-stone-100 dark:bg-stone-700"
            icon="mdi:server"
            :label="project.tech.backend"
            :ui="{
              leadingIcon: 'text-lg',
            }"
          />
        </UTooltip>
        <UTooltip text="Database">
          <UBadge
            size="lg"
            color="neutral"
            variant="soft"
            class="bg-stone-100 dark:bg-stone-700"
            icon="mdi:database"
            :label="project.tech.database"
            :ui="{
              leadingIcon: 'text-lg',
            }"
          />
        </UTooltip>
        <UBadge
          v-for="name in project.tech.additionals"
          size="lg"
          color="neutral"
          variant="soft"
          class="bg-stone-100 dark:bg-stone-700"
          :label="name"
          :ui="{
            leadingIcon: 'text-lg',
          }"
        />
      </div>
    </div>
  </div>
</template>
