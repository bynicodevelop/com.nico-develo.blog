<template>
  <div class="h-full">
    <Notification />
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
div#__nuxt,
#__layout,
#__layout > div,
#app {
  height: 100vh !important;
}
</style>
