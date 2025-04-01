<script setup lang="ts">
const props = defineProps<{ blog: { title: string; content: string; publishDate: string; url: string } }>();
const blog = props.blog;
</script>

<template>
  <a
    :key="blog.url"
    :href="blog.url"
    target="_blank"
    class="group shadow-primary bg-primary relative flex h-60 w-full cursor-pointer flex-col space-y-2 overflow-hidden rounded-lg p-6 shadow-lg"
  >
    <div
      class="bg-primary-300 dark:bg-primary-700 absolute top-0 right-0 z-0 flex aspect-square w-10 items-center justify-center rounded-bl-full duration-500 group-hover:w-[700px]"
    >
      <UIcon
        class="absolute top-2 right-2"
        name="ic:baseline-open-in-new"
      />
    </div>
    <h4 class="z-1 line-clamp-2 font-medium text-ellipsis">
      {{ blog.title }}
    </h4>
    <div class="z-1">
      <p class="opacity-70">
        {{ blog.publishDate }}
      </p>
      <p class="line-clamp-4 text-ellipsis">
        {{ blog.content }}
      </p>
    </div>
  </a>
</template>
