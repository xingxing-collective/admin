<template>
  <UTabs
class="px-4 py-4 w-full h-full " :items="items" orientation="vertical"
    :ui="{ wrapper: 'flex gap-4', list: { base: 'overflow-y-auto', tab: { height: 'h-32' }, width: 'w-48' } }">
    <template #default="{ item, index, selected }">
      <div class="h-full">
        <slot name="default" :item="item" :index="index" :selected="selected">
          {{ item.label }}
        </slot>
      </div>
    </template>
    <template #item="{ item, index, selected }">
      <slot :name="'item'" :item="item" :index="index" :selected="selected">
        {{ item.content }}
      </slot>
    </template>
  </UTabs>
</template>
<script setup lang="ts">
import type { TabItem } from '#ui/types'
defineProps({
  items: {
    type: Array as PropType<TabItem[]>,
    required: true
  }
})
</script>