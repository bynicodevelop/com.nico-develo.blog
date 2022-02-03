<template>
  <div
    class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200"
  >
    <button
      type="button"
      class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
      @click="open = true"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex">
        <form class="w-full flex lg:ml-0" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div
              class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
            >
              <SearchIcon class="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search-field"
              class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
              placeholder="Search"
              type="search"
              name="search"
            />
          </div>
        </form>
      </div>
      <div class="ml-4 flex items-center lg:ml-6">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MenuAlt2Icon, SearchIcon } from "@heroicons/vue/outline/index.js";

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:sidebarOpen"]);

const open = computed({
  get() {
    return props.sidebarOpen;
  },
  set(value) {
    emits("update:sidebarOpen", value);
  },
});
</script>
