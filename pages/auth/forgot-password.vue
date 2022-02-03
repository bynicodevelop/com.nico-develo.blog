<template>
  <NuxtLayout name="auth">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Mot de passe oublié
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="onResetPassword" method="POST">
          <InputText
            inputLabel="Adresse E-mail"
            inputPlaceholder=" "
            v-model="email"
            inputName="email"
            inputType="email"
          />

          <div class="flex items-center justify-between">
            <InputButton
              inputType="submit"
              inputLabel="Changer de mot de passe"
            />
          </div>

          <div class="text-sm text-center">
            <NuxtLink
              :to="{
                name: 'auth',
              }"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Se connecter
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { email, onResetPassword } = useAuthForm();

onMounted(() => {
  if (window.location.hostname === "localhost") {
    email.value = "john@domain.tld";
  }
});
</script>
