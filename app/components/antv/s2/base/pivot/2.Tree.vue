<template>
  <div class="w-full">
    <div class="text-center text-sm font-semibold">
      {{ $t('Tree mode') }}
    </div>
    <div ref="container" />
  </div>
</template>

<script setup lang="ts">
const { container, dataCfg, options } = useSheet('pivot');
dataCfg.value = await $fetch(
  'https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json'
);
options.value = {
  hierarchyType: 'tree',
  style: {
    rowCell: {
      collapseFields: {
        'root[&]浙江省': true,
      }
    }
  },
};
</script>
