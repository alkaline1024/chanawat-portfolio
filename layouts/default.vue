<template>
  <div class="bg-primary relative">
    <AppHeader class="fixed z-100" />
    <div class="z-10 min-h-screen pt-[96px]">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
