<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{$t('Gauge Chart')}}
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
    .gauge()
    .data({
      value: {
        target: 120,
        total: 400,
        name: 'score',
      },
    })
    .legend(false);
});
</script>
