<template>
  <div class="bg-primary relative">
    <AppHeader class="fixed z-100" />
    <div class="min-h-[calc(100vh-96px)] pt-[96px]">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
