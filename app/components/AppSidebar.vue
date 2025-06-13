<script setup lang="ts">
import type { SidebarProps } from './ui/sidebar';

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

const { links } = useRouteLink()

const user = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '',
}

</script>
<template>
  <UiSidebar v-bind="props">
    <UiSidebarHeader />
    <UiSidebarContent>
      <SidebarMenu :groups="links" />
    </UiSidebarContent>
    <UiSidebarFooter>
      <UserDropdown :user="user" />
    </UiSidebarFooter>
    <UiSidebarRail />
  </UiSidebar>
</template>