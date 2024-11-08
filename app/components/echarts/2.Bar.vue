<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{ $t('Basic Bar') }}
    </div>
    <div ref="container" class="h-full" />
  </div>
</template>
<script setup lang="ts">
import type { EChartsOption } from 'echarts';

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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      itemStyle: {
        color: primaryColor.value
      }
    }
  ]
}))

const { container, chartInstance } = useChart('echarts', options.value)

watch(primaryColor, () => {
  chartInstance.value?.setOption(options.value)
})
</script>