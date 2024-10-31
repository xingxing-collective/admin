<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{ $t('Line Chart') }}
    </div>
    <div ref="container" class="h-full" />
  </div>
</template>
<script setup lang="ts">
import type { ECharts } from 'echarts';
const { container } = useChart('echarts',rendered)

const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

function rendered(chartInstance: ECharts) {
  chartInstance?.setOption(options)
}
</script>cript>