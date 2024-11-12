<script setup lang="ts">

const components = import.meta.glob<Component>('~/components/unovis/**', {
    eager: true,
    import: 'default',
})

useHead({
  title: 'Unovis | Dashboard',
  meta: [
    { name: 'description', content: 'Unovis | Dashboard' },
  ],
});
</script>
<template>
    <div class="px-4 py-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      <div v-for="(component,key) in components" :key="key"
        class="col-span-1 rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group flex flex-col overflow-hidden group">
        <component :is="component" class="flex-1 px-2 py-2 sm:p-3 min-h-96 max-h-96" />
      </div>
    </div>
  </div>
</template>