<template>
  <NuxtLayout name="admin">
    <AdminDashboardOverview />
  </NuxtLayout>
</template>

<script setup>
const { onLogout } = useAuthForm();
</script>
