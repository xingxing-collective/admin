<template>
  <UTabs class="px-4 py-4 w-full h-full " :items="items" orientation="vertical"
    :ui="{ wrapper: 'flex gap-4', list: { base: 'overflow-y-auto', tab: { height: 'h-32' }, width: 'w-48' } }">
    <template #default="{ item, index, selected }">
      <div class=" h-full">{{ index + 1 }}. {{
        item.label }}</div>
    </template>
  </UTabs>
</template>
<script setup lang="ts">
const items = Array.from({ length: 100 }).map(x => ({
  label: 'Tab1',
  content: 'This is the content shown for Tab1'
}))
</script>