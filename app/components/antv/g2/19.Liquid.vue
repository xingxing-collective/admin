<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{$t('Liquid Chart')}}
    </div>
    <div
      ref="container"
      class="h-full"
    />
  </div>
</template>

<script setup lang="ts">
const { container } = useChart('antv',{},(chart) => {
  chart.liquid().data(0.3).style({
    outlineBorder: 4,
    outlineDistance: 8,
    waveLength: 128,
  });
});
</script>
