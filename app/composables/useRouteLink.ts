import { ChartColumnBig, TableOfContents, type LucideIcon } from 'lucide-vue-next'

export interface SidebarLinkGroup {
  label?: string
  items: SidebarLink[]
}

export interface SidebarLink {
  id: string
  label: string
  to: string
  icon?: LucideIcon
  defaultOpen?: boolean
  children?: SidebarLink[]
}

const _useRouteLink = () => {
  const { t } = useI18n()
  const route = useRoute()
  const links = computed<Array<SidebarLinkGroup>>(() => [
    {
      label: t('Dashboard'),
      items: [
        {
          id: 'dashboard/overview',
          label: t('Overview'),
          icon: TableOfContents,
          to: '/dashboard',
          defaultOpen: route.path.startsWith('/dashboard/overview'),
        }, {
          id: 'dashboard/antv',
          label: 'AntV',
          icon: ChartColumnBig,
          to: '/dashboard/antv/g2',
          defaultOpen: route.path.startsWith('/dashboard/antv'),
          children: [{
            id: 'antv/g2',
            label: 'G2',
            //icon: 'i-material-symbols:bar-chart-rounded',
            to: '/dashboard/antv/g2',
          }]
        }
      ]
    }
  ])

  return {
    links
  }
}

export const useRouteLink = createSharedComposable(_useRouteLink)