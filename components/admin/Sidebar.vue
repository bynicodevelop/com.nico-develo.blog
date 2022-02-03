<template>
  <div class="hidden lg:flex lg:w-64 lg:fixed lg:inset-y-0">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex-1 flex flex-col min-h-0">
      <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg"
          alt="Workflow"
        />
      </div>
      <div class="flex-1 flex flex-col overflow-y-auto bg-gray-800">
        <nav class="flex-1 px-2 py-4">
          <div class="space-y-1">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const { navigation } = useAdminNavigation();
</script>
