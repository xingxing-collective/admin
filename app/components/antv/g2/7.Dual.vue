<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{$t('Line Bar Chart')}}
    </div>
    <div
      ref="container"
      class="h-full"
    />
  </div>
</template>

<script setup lang="ts">
const data = [
  { time: '10:10', call: 4, waiting: 2, people: 2 },
  { time: '10:15', call: 2, waiting: 6, people: 3 },
  { time: '10:20', call: 13, waiting: 2, people: 5 },
  { time: '10:25', call: 9, waiting: 9, people: 1 },
  { time: '10:30', call: 5, waiting: 2, people: 3 },
  { time: '10:35', call: 8, waiting: 2, people: 1 },
  { time: '10:40', call: 13, waiting: 1, people: 2 },
];

const { container } = useChart('antv',{},(chart) => {
  chart.data(data);

  chart
    .interval()
    .encode('x', 'time')
    .encode('y', 'waiting')
    .axis('y', { title: 'Waiting', titleFill: '#5B8FF9' });

  chart
    .line()
    .encode('x', 'time')
    .encode('y', 'people')
    .encode('shape', 'smooth')
    .style('stroke', '#fdae6b')
    .style('lineWidth', 2)
    .scale('y', { independent: true })
    .axis('y', {
      position: 'right',
      grid: null,
      title: 'People',
      titleFill: '#fdae6b',
    });
});
</script>
