<template>
  <KeepAlive>
    <div class="grid grid-cols-1">
      <div ref="container" class="absolute w-full h-full" />
    </div>
  </KeepAlive>
</template>
<script setup lang="ts">
const { container } = useMap(MapType.MAPLIBRE); 
useHead({
  title: 'MapLibreMap | AntV | Dashboard',
  meta: [
    { name: 'description', content: 'MapLibreMap | AntV | Dashboard' },
  ],
});
</script>