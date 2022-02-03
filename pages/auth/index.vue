<template>
  <div>
    <NuxtLayout name="auth">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Connexion
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form @submit.prevent="onLogin" class="space-y-6" method="POST">
            <InputText
              inputLabel="Adresse E-mail"
              inputPlaceholder=" "
              v-model="email"
              inputName="email"
              inputType="email"
              v-model:inputError="emailError"
              errorMessage="Merci de saisir une adresse email valide (e.g. john.doe@domain.tld)."
            />

            <InputText
              inputLabel="Mot de passe"
              inputPlaceholder=" "
              v-model="password"
              inputName="password"
              inputType="password"
              v-model:inputError="passwordError"
              errorMessage="Merci de saisir mot de passe valide (au moins 6 caractères)."
            />

            <InputButton inputType="submit" inputLabel="Se connecter" />

            <div class="text-sm text-center">
              <NuxtLink
                :to="{
                  name: 'auth-forgot-password',
                }"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Mot de passe oublié ?
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { email, emailError, password, passwordError, isLoading, onLogin } =
  useAuthForm();

onMounted(() => {
  if (window.location.hostname === "localhost") {
    email.value = "john@domain.tld";
    password.value = "123456";
  }
});
</script>
