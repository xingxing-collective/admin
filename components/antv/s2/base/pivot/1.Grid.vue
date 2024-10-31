<template>
  <div class="w-full">
    <div class="text-center text-sm font-semibold">
      {{ $t('Grid mode') }}
    </div>
    <div ref="container" />
  </div>
</template>

<script setup lang="ts">
import type { S2DataConfig, S2Options } from '@antv/s2';

const data = {
  ...(await $fetch<S2DataConfig>(
    'https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json'
  )),
  meta: [
    {
      field: 'province',
      name: '省份',
    },
    {
      field: 'city',
      name: '城市',
    },
    {
      field: 'type',
      name: '商品类别',
    },
    {
      field: 'sub_type',
      name: '子类别',
    },
    {
      field: 'number',
      name: '数量',
    },
  ],
};

const opts: S2Options = {
  hierarchyType: 'grid',
  interaction: {
    copy: {
      enable: true,
      withFormat: true,
      withHeader: true,
    }
  },
};
const { container, dataCfg, options } = useSheet('pivot');
dataCfg.value = data;
options.value = opts;
</script>
