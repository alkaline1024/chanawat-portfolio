<script setup lang="ts">
const props = defineProps<{
  imgSrc: string;
  backgroundColor: string;
  title: string;
  location: string;
  position: string;
  subtitle: string;
  period: string;
  description: string[];
}>();

const showMore = ref(false);

const toggleShow = () => {
  showMore.value = !showMore.value;
};
</script>

<template>
  <div class="relative w-full">
    <img
      :src="imgSrc"
      class="absolute -top-12 right-0 left-0 z-10 mx-auto w-28 rounded-full shadow-lg"
    />
    <div class="shadow-primary relative w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl">
      <div
        class="relative flex h-36 w-full flex-col items-center justify-center"
        :class="backgroundColor"
      >
        <div class="pt-8 text-center text-2xl">{{ title }}</div>
        <div class="absolute right-2 bottom-1 flex items-center gap-1 text-base opacity-90">
          <UIcon name="ic:outline-location-on" />
          {{ location }}
        </div>
      </div>
      <div class="bg-primary w-full space-y-3 p-6">
        <h3 class="text-center font-medium">
          {{ position }}
          <p class="text-xl font-normal">{{ subtitle }}</p>
        </h3>
        <p class="text-center opacity-70">{{ period }}</p>
        <div
          class="overflow-hidden space-y-4 indent-4 transition-all duration-400"
          :class="showMore ? ' max-h-[300vh]' : 'max-h-28'"
        >
          <p
            v-for="(paragraph, index) in description"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </div>
        <UButton
          size="md"
          variant="outline"
          :label="showMore ? 'Show Less' : 'Show More'"
          :icon="showMore ? 'ic:baseline-keyboard-arrow-up' : 'ic:baseline-keyboard-arrow-down'"
          :ui="{ leadingIcon: 'text-lg' }"
          class="pr-4 pl-3 hover:text-white"
          @click="toggleShow"
        />
      </div>
    </div>
  </div>
</template>
