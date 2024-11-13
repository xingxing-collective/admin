import type { AsideLink } from '~/types';
import type { BreadcrumbLink, Group } from '#ui/types';

 const _useRouteLink = () => {
  const route = useRoute();
  const { t } = useI18n();
  const colorMode = useColorMode();
  const links = computed<AsideLink[]>(() => [
    {
      id: 'home',
      label: t('Home'),
      icon: 'i-heroicons-home',
      to: '/',
      tooltip: {
        text: t('Home'),
      },
    },
    {
      id: 'dashboard',
      label: t('Dashboard'),
      icon: 'i-heroicons-adjustments-horizontal',
      to: '/dashboard',
      tooltip: {
        text: t('Dashboard'),
      },
      defaultOpen: route.path.startsWith('/dashboard'),
      children: [
        {
          id: 'dashboard/overview',
          label: t('Overview'),
          icon: 'i-material-symbols-light:overview-outline',
          to: '/dashboard',
        },
        {
          id: 'dashboard/antv',
          label: 'AntV',
          icon: 'i-simple-icons:antdesign',
          to: '/dashboard/antv/g2',
          defaultOpen: route.path.startsWith('/dashboard/antv'),
          tooltip: {
            text: 'AntV',
          },
          children: [
            {
              id: 'antv/g2',
              label: 'G2',
              icon: 'i-material-symbols:bar-chart-rounded',
              to: '/dashboard/antv/g2',
            },
            {
              id: 'antv/s2',
              label: 'S2',
              icon: 'i-heroicons:table-cells-20-solid',
              to: '/dashboard/antv/s2',
            },
            {
              id: 'antv/l7',
              label: 'L7',
              icon: 'i-heroicons:map-pin',
              to: '/dashboard/antv/l7',
              defaultOpen: route.path.startsWith('/dashboard/antv/l7'),
              children: [
                {
                  id: 'antv/l7/gaodemap',
                  label: t('Gaode Map'),
                  to: '/dashboard/antv/l7',
                  tooltip: {
                    text: t('Gaode Map'),
                  },
                },
                {
                  id: 'antv/l7/tencentmap',
                  label: t('Tencent Map'),
                  to: '/dashboard/antv/l7/tencentmap',
                  tooltip: {
                    text: t('Tencent Map'),
                  },
                },
                {
                  id: 'antv/l7/maplibre',
                  label: t('MapLibre'),
                  to: '/dashboard/antv/l7/maplibremap',
                  tooltip: {
                    text: t('MapLibre'),
                  },
                },
              ],
            },
            {
              id: 'antv/x6',
              label: 'X6',
              icon: 'i-hugeicons:workflow-circle-03',
              to: '/dashboard/antv/x6',
              defaultOpen: route.path.startsWith('/dashboard/antv/x6'),
              children: [
                {
                  id: 'antv/x6/flowchart',
                  label: t('Flowchart'),
                  to: '/dashboard/antv/x6',
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
        {
          id: 'dashboard/unovis',
          label: 'Unovis',
          to: '/dashboard/unovis',
          icon: 'i-token:uno',
          tooltip: {
            text: 'Unovis'
          }
        }
      ],
    }, 
    {
      id: 'users',
      label: t('Users'),
      icon: 'i-heroicons-user-group',
      to: '/users',
      tooltip: {
        text: t('Users'),
      }
    }
  ]);

  function getBreadcrumb() {
    const result: BreadcrumbLink[] = [];

    function recursive(path: string, links: AsideLink[]) {
      for (const link of links) {
        if (link.to === path) {
          result.unshift({ label: link.label, icon: link.icon, to: link.to });
          return true;
        }
        if (link.children && recursive(path, link.children)) {
          result.unshift({ label: link.label, icon: link.icon, to: link.to });
          return true;
        }
      }
      return false;
    }
    recursive(route.path, links.value);
    return result;
  }

  const breadcrumb = computed(() => getBreadcrumb());

  function getCommands(links?: AsideLink[]) {
    return links?.map((link) => ({
      id: link.id,
      label: link.label,
      icon: link.icon,
      to: link.to,
      shortcuts: link.tooltip?.shortcuts,
    }));
  }
  const groups = computed<Group[]>(() => {
    return [
      {
        key: 'links',
        label: 'Links',
        commands: getCommands(links.value),
      }, {
        key: 'dashboard',
        label: 'Dashboard',
        commands: getCommands(
          links.value
            .find((x) => x.id === 'dashboard')?.children?.filter(x => x.id !== 'dashboard/overview')
        ),
      },
      {
        key: 'antv',
        label: 'AntV',
        commands: getCommands(
          links.value
            .find((x) => x.id === 'dashboard')
            ?.children?.find((x) => x.id === 'dashboard/antv')?.children
        ),
      },
      {
        key: 'themes',
        label: 'Themes',
        commands: [
          {
            id: 'light',
            label: 'Light',
            icon: 'i-heroicons-sun-20-solid',
            click: () => (colorMode.value = 'light'),
          },
          {
            id: 'dark',
            label: 'Dark',
            icon: 'i-heroicons-moon-20-solid',
            click: () => (colorMode.value = 'dark'),
          },
        ],
      },
    ];
  });

  return {
    links,
    breadcrumb,
    groups,
  };
};

export const useRouteLink = createSharedComposable(_useRouteLink);