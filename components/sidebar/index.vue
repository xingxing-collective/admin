<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.container">
      <div :class="ui.body">
        <div :class="ui.center">
          <ULink :to="'/'" v-bind="$ui.button.secondary" />
          <div class="w-full">
            <UButton v-bind="$ui.button.secondary" to="/" class="w-full">
              <UIcon name="i-logos-nuxt-icon" class=" w-5 h-5" />
              <span :class="ui.title">Nuxt Admin</span>
            </UButton>
          </div>
        </div>
      </div>
    </div>
    <div :class="ui.sidebar.wrapper">
      <div :class="ui.sidebar.container">
        <div :class="ui.sidebar.body">
          <SidebarLinks :links="links">
          </SidebarLinks>
          <UDivider />
          <div class="flex-1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const config = {
  wrapper: 'flex-col items-stretch relative w-full border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 lg:w-[--sidebar-width] flex-shrink-0 hidden lg:flex',
  container: 'h-[--header-height] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 px-4 gap-x-4 min-w-0 !border-transparent',
  body: 'flex items-center justify-between flex-1 gap-x-1.5 min-w-0',
  center: 'flex items-stretch gap-1.5 min-w-0 flex-1',
  title: 'truncate text-gray-900 dark:text-white font-semibold',
  sidebar: {
    wrapper: 'flex flex-col w-full flex-1 relative overflow-hidden',
    container: 'flex-grow flex flex-col min-h-0 gap-y-2 py-2',
    body: 'flex-1 px-4 flex flex-col gap-y-2 overflow-y-auto'
  }
};

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config>>,
    default: () => ({}),
  },
});

const route = useRoute();

const { ui, attrs } = useUI(
  'nuxt-admin.sidebar',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
);

const links = [
  {
    id: 'home',
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
    tooltip: {
      text: 'Home',
      shortcuts: ['G', 'H'],
    },
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'i-heroicons-adjustments-horizontal',
    to: '/dashboard',
    defaultOpen: route.path.startsWith('/dashboard'),
    children: [{
      id: 'AntV',
      label: 'AntV',
      icon: 'antv-icon:group',
      defaultOpen: route.path.startsWith('/dashboard/antv'),
      children: [
        {
          label: 'G2',
          icon: 'antv-icon:g2',
          to: '/dashboard/antv/g2',
        },
        {
          label: 'S2',
          icon: 'antv-icon:s2',
          to: '/dashboard/antv/s2',
        },
        {
          label: 'L7',
          icon: 'antv-icon:l7',
          defaultOpen: route.path.startsWith('/dashboard/antv/l7'),
          children: [
            {
              label: 'GaodeMap',
              to: '/dashboard/antv/l7/gaodemap',
              tooltip: {
                text: '高德',
              },
            },
            {
              label: 'TencentMap',
              to: '/dashboard/antv/l7/tencentmap',
              tooltip: {
                text: '腾讯',
              },
            },
            {
              label: 'MapLibreMap',
              to: '/dashboard/antv/l7/maplibremap',
              tooltip: {
                text: 'MapLibre',
              },
            },
          ],
        },
        {
          label: 'X6',
          icon: 'antv-icon:x6',
          defaultOpen: route.path.startsWith('/dashboard/antv/x6'),
          children: [
            {
              label: 'Flowchart',
              to: '/dashboard/antv/x6/flowchart',
              tooltip: {
                text: '流程图',
              },
            },
          ],
        },
      ],
      tooltip: {
        text: 'AntV',
      },
    },],
    tooltip: {
      text: 'AntV',
    },
  },

]
</script>