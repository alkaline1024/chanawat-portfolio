<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { t, locale } = useI18n();
const props = defineProps<{
  project: IProject;
}>();
const project = props.project;
const isFullStackFramework = project.tech.frontend == project.tech.backend;
</script>

<template>
  <div
    class="bg-primary shadow-primary relative flex h-full w-full flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl"
  >
    <UTooltip
      v-if="project.for == 'experiment'"
      :text="t('experiment-project')"
      :delay-duration="0"
    >
      <DotLottieVue
        loop
        autoplay
        class="absolute top-0 -right-12 z-10 w-44 rounded-full"
        src="/chanawat-portfolio/lotties/earth.json"
      />
    </UTooltip>
    <img
      v-else
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
    <div class="flex h-full flex-col gap-4 p-4">
      <div>
        <h3 class="font-medium">{{ locale == "th" ? project.name_th : project.name }}</h3>
        <p class="opacity-70">{{ locale == "th" ? project.type_th : project.type }}</p>
      </div>
      <div class="space-y-1">
        <p class="font-medium">
          {{ project.role }}
        </p>
        <p>
          {{ locale == "th" ? project.description_th : project.description }}
        </p>
      </div>
      <div class="mt-auto flex flex-wrap gap-2">
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
      <div class="flex gap-2">
        <UButton
          v-if="project.codeUrl"
          variant="solid"
          color="neutral"
          size="xl"
          :disabled="!project.codeUrl"
          :href="`https://${project.codeUrl}`"
          target="_blank"
          class="flex justify-center !bg-black text-center hover:!bg-black dark:!bg-neutral-700 dark:text-white/90 dark:hover:!bg-neutral-800"
        >
          <UIcon
            v-if="project.codeUrl"
            name="mdi:code-tags"
            class="text-lg"
          />
          <span v-if="project.codeUrl">{{ t("code") }}</span>
          <span v-else>{{ t("demo-not-available") }}</span>
        </UButton>
        <UButton
          size="xl"
          :disabled="!project.demoUrl"
          :href="`https://${project.demoUrl}`"
          target="_blank"
          class="flex grow justify-center text-center"
          :class="{
            'pointer-events-none cursor-not-allowed !bg-stone-300 opacity-50 dark:!bg-stone-600 dark:text-white/90':
              !project.demoUrl,
          }"
        >
          <UIcon
            v-if="project.demoUrl"
            name="mdi:external-link"
            class="text-lg"
          />
          <span v-if="project.demoUrl"
            >{{ t("visit-demo") }}
            <span
              v-if="project.demoRemark"
              class="text-xs opacity-80"
              >({{ project.demoRemark }})
            </span>
          </span>
          <span v-else>{{ t("demo-not-available") }}</span>
        </UButton>
      </div>
    </div>
  </div>
</template>
