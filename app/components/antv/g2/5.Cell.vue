<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{$t('Waffle')}}
    </div>
    <div
      ref="container"
      class="h-full"
    />
  </div>
</template>

<script setup lang="ts">
const { container } = useChart('antv',{},(chart) => {
  chart
    .cell()
    .data({
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/bmw-prod/bd287f2c-3e2b-4d0a-8428-6a85211dce33.json',
    })
    .scale('color', { type: 'ordinal' })
    .encode('x', 'x')
    .encode('y', 'y')
    .encode('color', 'index')
    .style('stroke', '#000')
    .style('inset', 2)
    .animate('enter', { type: 'fadeIn' });
});
</script>
