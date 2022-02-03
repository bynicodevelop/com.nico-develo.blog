<template>
  <NuxtLayout name="admin">
    <button type="button" @click.prevent="onLogout">logout</button>
  </NuxtLayout>
</template>

<script setup>
const { onLogout } = useAuthForm();
</script>
