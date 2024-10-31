<template>
  <div class="w-full">
    <div class="text-center text-sm font-semibold">
      明细表模式
    </div>
    <div ref="container" />
  </div>
</template>

<script setup lang="ts">
import type { S2DataConfig, S2Options } from '@antv/s2';

const data: S2DataConfig = {
  fields: {
    columns: ['province', 'city', 'type', 'price', 'cost'],
  },
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
      field: 'price',
      name: '价格',
    },
    {
      field: 'cost',
      name: '成本',
    },
  ],
  data: await $fetch(
    'https://assets.antv.antgroup.com/s2/basic-table-mode.json'
  ),
};
const opts: S2Options = {
  seriesNumber: {
    enable: true,
    text: '序号',
  },
  placeholder: {
    cell: '-',
    empty: {
      icon: 'Empty',
      description: '暂无数据',
    },
  }
};

const { container, dataCfg, options } = useSheet('table');
dataCfg.value = data
options.value = opts
</script>
