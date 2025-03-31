<template>
  <div class="bg-primary relative">
    <AppHeader class="fixed z-100" />
    <div class="z-10 min-h-screen">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
