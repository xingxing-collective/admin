<script setup lang="ts">
import type { SidebarLinkGroup } from '~/composables/useRouteLink';
import { ChevronRight } from 'lucide-vue-next'

interface SidebarMenuProps {
  groups: SidebarLinkGroup[]
}

defineProps<SidebarMenuProps>()

</script>
<template>
  <UiSidebarGroup v-for="group in groups" :key="group.label">
    <UiSidebarGroupLabel v-if="group.label">{{ group.label }}</UiSidebarGroupLabel>
    <UiSidebarMenu>
      <UiCollapsible
v-for="item in group.items"
:key="item.label"
as-child
:default-open="item.defaultOpen"
        class="group/collapsible">
        <UiSidebarMenuItem>
          <UiCollapsibleTrigger v-if="item.children" as-child>
            <UiSidebarMenuButton :tooltip="item.label">
              <component :is="item.icon" v-if="item.icon" />
              <span>{{ item.label }}</span>
              <ChevronRight
                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </UiSidebarMenuButton>
          </UiCollapsibleTrigger>
          <UiSidebarMenuButton v-else as-child>
            <a :href="item.to">
              <component :is="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </UiSidebarMenuButton>
          <UiCollapsibleContent>
            <UiSidebarMenuSub>
              <UiSidebarMenuSubItem v-for="subItem in item.children" :key="subItem.id">
                <UiSidebarMenuSubButton as-child>
                  <a :href="subItem.to">
                    <span>{{ subItem.label }}</span>
                  </a>
                </UiSidebarMenuSubButton>
              </UiSidebarMenuSubItem>
            </UiSidebarMenuSub>
          </UiCollapsibleContent>
        </UiSidebarMenuItem>
      </UiCollapsible>
    </UiSidebarMenu>
  </UiSidebarGroup>
</template>