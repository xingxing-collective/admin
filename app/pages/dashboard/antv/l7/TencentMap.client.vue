<template>
  <KeepAlive>
    <div class="grid grid-cols-1">
      <div ref="container" class="absolute w-full h-full" />
    </div>
  </KeepAlive>
</template>
<script setup lang="ts">
const { container } = useMap(MapType.TENCENT);
useHead({
  title: 'TencentMap | AntV | Dashboard',
  meta: [
    { name: 'description', content: 'TencentMap | AntV | Dashboard' },
  ],
});
</script>
