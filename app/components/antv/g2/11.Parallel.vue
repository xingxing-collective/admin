<template>
  <div>
    <div class="text-center text-sm font-semibold">
      {{$t('Vertical Parallel')}}
    </div>
    <div
      ref="container"
      class="h-full"
    />
  </div>
</template>

<script setup lang="ts">
const axis = {
  zIndex: 1,
  titlePosition: 'right',
  line: true,
  labelStroke: '#fff',
  labelLineWidth: 5,
  labelFontSize: 10,
  labelStrokeLineJoin: 'round',
  titleStroke: '#fff',
  titleFontSize: 10,
  titleLineWidth: 5,
  titleStrokeLineJoin: 'round',
  titleTransform: 'translate(-50%, 0) rotate(-90)',
  lineStroke: 'black',
  tickStroke: 'black',
  lineLineWidth: 1,
};
const { container } = useChart('antv',{},(chart) => {
  chart.coordinate({ type: 'parallel' });

  chart
    .line()
    .data({
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/cars3.json',
    })
    .encode('position', [
      'economy (mpg)',
      'cylinders',
      'displacement (cc)',
      'power (hp)',
      'weight (lb)',
      '0-60 mph (s)',
      'year',
    ])
    .encode('color', 'weight (lb)')
    .style('lineWidth', 1.5)
    .style('strokeOpacity', 0.4)
    .scale('color', {
      palette: 'brBG',
      offset: (t) => 1 - t,
    })
    .legend({
      color: { length: 400, layout: { justifyContent: 'center' } },
    })
    .axis('position', axis)
    .axis('position1', axis)
    .axis('position2', axis)
    .axis('position3', axis)
    .axis('position4', axis)
    .axis('position5', axis)
    .axis('position6', axis)
    .axis('position7', axis);

  chart.interaction('tooltip', { series: false });
});
</script>
