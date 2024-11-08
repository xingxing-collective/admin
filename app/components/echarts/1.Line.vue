<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{ $t('Line Chart') }}
    </div>
    <div ref="container" class="h-full" />
  </div>
</template>
<script setup lang="ts">
import type { ECharts, EChartsOption } from 'echarts';
const { container, chartInstance } = useChart('echarts', rendered)

const { primaryColor } = useTheme()

const options = computed<EChartsOption>(() => ({
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
      type: 'line',
      symbol: 'none',
      smooth: true,
      lineStyle: {
        color: primaryColor.value
      }
    }
  ]
}))


watch(primaryColor, () => {
  chartInstance.value?.setOption(options.value)
})

function rendered(chartInstance: ECharts) {
  chartInstance?.setOption(options.value)
}
</script>