<template>
  <div class="px-4 py-4">
    <UiTabs :items="tabs" class="w-full"/>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const tabs = computed(() => {
  return [{
    id: 'antv',
    label: 'AntV',
    icon: 'i-simple-icons:antdesign',
    data: [
      {
        title: 'AntV G2',
        image: {
          src: `/images/antv/${colorMode.value}/g2.png`,
          alt: 'AntV G2',
        },
        url: '/dashboard/antv/g2',
      },
      {
        title: 'AntV S2',
        image: {
          src: `/images/antv/${colorMode.value}/s2.png`,
          alt: 'AntV S2',
        },
        url: '/dashboard/antv/s2',
      },
      {
        title: 'AntV L7 Gaode Map',
        image: {
          src: `/images/antv/${colorMode.value}/l7/gaode.png`,
          alt: 'AntV L7 Gaode Map',
        },
        url: '/dashboard/antv/l7',
      },
      {
        title: 'AntV L7 MapLibre Map',
        image: {
          src: `/images/antv/${colorMode.value}/l7/map-libre.png`,
          alt: 'AntV L7 MapLibre Map',
        },
        url: '/dashboard/antv/l7/maplibremap',
      },
      {
        title: 'AntV L7 Tencent Map',
        image: {
          src: `/images/antv/light/l7/tencent.png`,
          alt: 'AntV L7 Tencent Map',
        },
        url: '/dashboard/antv/l7/tencentmap',
      },
      {
        title: 'AntV X6 Flowchart',
        image: {
          src: `/images/antv/${colorMode.value}/x6/flowchart.png`,
          alt: 'AntV X6 Flowchart',
        },
        url: '/dashboard/antv/x6',
      },
    ]
  }, {
    id: 'echarts',
    label: 'ECharts',
    icon: 'i-simple-icons:apacheecharts',
    data: [{
      title: 'ECharts',
      image: {
        src: `/images/echarts/${colorMode.value}/preview.png`,
        alt: 'ECharts',
      },
      url: '/dashboard/echarts',
    },]
  }, {
    id: 'unovis',
    label: 'Unovis',
    icon: 'i-token:uno',
    data: [{
      title: 'Unovis',
      image: {
        src: `/images/unovis/${colorMode.value}/preview.png`,
        alt: 'Unovis'
      }
    }]
  }]
})
useHead({
  title: 'Dashboard',
  meta: [
    { name: 'description', content: 'Dashboard' },
  ],
});
</script>
