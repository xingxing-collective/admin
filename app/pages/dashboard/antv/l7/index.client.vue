<template>
  <KeepAlive>
    <div class="grid grid-cols-1">
      <div ref="container" class="absolute w-full h-full" />
    </div>
  </KeepAlive>
</template>
<script setup lang="ts">
const { container } = useMap(MapType.GAODE, {
  center: [107.054293, 35.246265],
  zoom: 4.056,
});
useHead({
  title: 'L7 | AntV | Dashboard',
  meta: [
    { name: 'description', content: 'L7 | AntV | Dashboard' },
  ],
});
</script>
