<script setup lang="ts">
const route = useRoute();
const router = useRouter();
</script>

<template>
    <div class="h-[64px] w-full flex justify-between">
        <div
            class="header-menu"
            :class="{ 'header-menu-active': route.path == '/' }"
            @click="router.push('/')"
        >
            <UIcon class="text-2xl" name="ic:round-home" /> Home
        </div>
        <div
            class="header-menu"
            :class="{ 'header-menu-active': route.path == '/projects' }"
            @click="router.push('/projects')"
        >
            <UIcon class="text-2xl" name="ic:round-star" /> Projects
        </div>
        <div
            class="header-menu"
            :class="{ 'header-menu-active': route.path == '/resume' }"
            @click="router.push('/resume')"
        >
            <UIcon class="text-2xl" name="ic:round-contact-page" /> Resume
        </div>
        <div
            class="header-menu"
            :class="{ 'header-menu-active': route.path == '/blog' }"
            @click="router.push('/blog')"
        >
            <UIcon class="text-2xl" name="ic:round-message" /> Blog
        </div>
        <div
            class="header-menu"
            :class="{ 'header-menu-active': route.path == '/contact' }"
            @click="router.push('/contact')"
        >
            <UIcon class="text-2xl" name="ic:round-local-phone" /> Contact
        </div>
    </div>
</template>
