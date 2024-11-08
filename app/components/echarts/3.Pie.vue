<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{ $t('Referer of a Website') }}
    </div>
    <div ref="container" class="h-full" />
  </div>
</template>
<script setup lang="ts">
import type { EChartsOption } from 'echarts';

const { primaryColors } = useTheme()
const options = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      color: primaryColors.value.map(x => x.hex),
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))
const { container } = useChart('echarts', options.value)
</script>