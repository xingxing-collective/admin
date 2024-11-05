<template>
  <div class="px-4 py-4">
    <UTabs :items="tabs" class="w-full">
      <template #default="{ item, selected }">
        <span class="truncate" :class="[selected && 'text-primary-500 dark:text-primary-400']">{{
          item.label }}</span>
      </template>
      <template #item="{ item }">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <div v-for="preview in item.data" :key="preview.url"
            class="col-span-1 rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group flex flex-col overflow-hidden group hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
            <div class="flex-1 px-4 py-5 sm:p-3">
              <NuxtLink :to="preview.url" target="_self">
                <NuxtImg :src="preview.image.src" :alt="preview.image.alt" loading="lazy" class="w-full  object-fill" />
              </NuxtLink>
            </div>
            <div class="bg-gray-100/50 dark:bg-gray-800/50 px-2 py-2 sm:px-6">
              <div class=" text-center">{{ preview.title }}</div>
            </div>
          </div>
        </div>
      </template>
      <template #icon="{ item, selected }">
        <UIcon :name="item.icon" class="w-6 h-6 flex-shrink-0 me-2"
          :class="[selected && 'text-primary-500 dark:text-primary-400']" />
      </template>
    </UTabs>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const tabs = computed(() => {
  return [{
    label: 'AntV',
    icon: 'antv-icon:index',
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
  }]
})

useSeoMeta({
  title: 'Dashboard Index',
  description: 'Dashboard Index',
});
</script>