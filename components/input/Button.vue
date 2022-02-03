<template>
  <button
    :type="props.inputType"
    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    {{ props.inputLabel }}
  </button>
</template>

<script setup>
const props = defineProps({
  inputLabel: {
    type: String,
    default: "",
    required: true,
  },
  inputType: {
    type: String,
    default: "button",
  },
});
</script>
