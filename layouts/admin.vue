<template>
  <div class="min-h-full flex">
    <AdminMobileMenu v-model:sidebarOpen="sidebarOpen" />
    <!-- Static sidebar for desktop -->
    <AdminSidebar />

    <div class="lg:pl-64 flex flex-col w-0 flex-1">
      <AdminSearch v-model:sidebarOpen="sidebarOpen" />

      <main class="flex-1">
        <div class="py-8 xl:py-10">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const sidebarOpen = ref(false);

const { navigation } = useAdminNavigation();
</script>
