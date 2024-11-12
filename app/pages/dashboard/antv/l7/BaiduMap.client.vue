<template>
  <KeepAlive>
    <div class="grid grid-cols-1">
      <div ref="container" class="absolute w-full h-full" />
    </div>
  </KeepAlive>
</template>
<script setup lang="ts">
const { container } = useMap(MapType.BAIDU);
useHead({
  title: 'BaiduMap | AntV | Dashboard',
  meta: [
    { name: 'description', content: 'BaiduMap | AntV | Dashboard' },
  ],
});
</script>
