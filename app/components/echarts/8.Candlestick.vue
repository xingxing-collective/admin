<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{ $t('Basic Scatter Chart') }}
    </div>
    <div ref="container" class="h-full" />
  </div>
</template>
<script setup lang="ts">
import type { ECharts, EChartsOption } from 'echarts';
const { container } = useChart('echarts', rendered)
const { primaryColors } = useTheme()

const options = computed<EChartsOption>(() => ({
  xAxis: {
    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
  },
  yAxis: {},
  series: [
    {
      type: 'candlestick',
      color: primaryColors.value.map(x => x.hex),
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42]
      ]
    }
  ]
}))

function rendered(chartInstance: ECharts) {
  chartInstance?.setOption(options.value)
}
</script>