<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{$t('Density with KDE')}}
    </div>
    <div
      ref="container"
      class="h-full"
    />
  </div>
</template>

<script setup lang="ts">
const { container } = useChart('antv',{},(chart) => {
  chart.data({
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/species.json',
    transform: [
      {
        type: 'kde',
        field: 'y',
        groupBy: ['x'],
        size: 20,
      },
    ],
  });

  chart
    .density()
    .encode('x', 'x')
    .encode('y', 'y')
    .encode('color', 'x')
    .encode('size', 'size')
    .tooltip(false);
});
</script>
