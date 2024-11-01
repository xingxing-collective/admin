export const links = computed(() => {
  const route = useRoute();
  const { t } = useI18n();

  return [
    {
      id: 'home',
      label: t('Home'),
      icon: 'i-heroicons-home',
      to: '/',
      tooltip: {
        text: t('Home'),
        shortcuts: ['G', 'H'],
      },
    },
    {
      id: 'dashboard',
      label: t('Dashboard'),
      icon: 'i-heroicons-adjustments-horizontal',
      tooltip: {
        text: t('Dashboard'),
      },
      defaultOpen: route.path.startsWith('/dashboard'),
      children: [
        {
          id: '/dashboard/overview',
          label: t('Overview'),
          icon: 'i-material-symbols-light:overview-outline',
          to: '/dashboard',
        },
        {
          id: 'dashboard/antv',
          label: 'AntV',
          icon: 'antv-icon:index',
          defaultOpen: route.path.startsWith('/dashboard/antv'),
          tooltip: {
            text: 'AntV',
          },
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
                  label: t('Gaode Map'),
                  to: '/dashboard/antv/l7/gaodemap',
                  tooltip: {
                    text: t('Gaode Map'),
                  },
                },
                {
                  label: t('Tencent Map'),
                  to: '/dashboard/antv/l7/tencentmap',
                  tooltip: {
                    text: t('Tencent Map'),
                  },
                },
                {
                  label: t('MapLibre'),
                  to: '/dashboard/antv/l7/maplibremap',
                  tooltip: {
                    text: t('MapLibre'),
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
                  label: t('Flowchart'),
                  to: '/dashboard/antv/x6/flowchart',
                  tooltip: {
                    text: t('Flowchart'),
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'dashboard/echarts',
          label: 'ECharts',
          to: '/dashboard/echarts',
          icon: 'i-simple-icons:apacheecharts',
          tooltip: {
            text: 'ECharts',
          },
        },
      ],
    },
    {
      id: 'threejs',
      label: 'Threejs',
      icon: 'threejs-icon:index',
      to: '/threejs',
      tooltip: {
        text: 'Threejs',
      },
    },
  ];
});
