<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";

const colorMode = useColorMode()

</script>
<template>
  <div>
    <UiSidebarProvider>
      <AppSidebar />
      <main
        class="relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow">
        <header
          class="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div class="flex w-full items-center gap-2 px-4">
            <UiSidebarTrigger />
            <UiSeparator orientation="vertical" class="mr-2 h-4" />
            <UiBreadcrumb>
              <UiBreadcrumbList>
                <UiBreadcrumbItem class="hidden md:block">
                  <UiBreadcrumbLink href="#">
                    Building Your Application
                  </UiBreadcrumbLink>
                </UiBreadcrumbItem>
                <UiBreadcrumbSeparator class="hidden md:block" />
                <UiBreadcrumbItem>
                  <UiBreadcrumbPage>Data Fetching</UiBreadcrumbPage>
                </UiBreadcrumbItem>
              </UiBreadcrumbList>
            </UiBreadcrumb>
            <div class="flex-1"/>
            <ClientOnly>
              <UiButton
class="border-0 shadow-none w-8 h-8"
variant="outline"
size="icon"
                @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'">
                <Moon v-if="colorMode.preference == 'light'" />
                <Sun v-else />
              </UiButton>
            </ClientOnly>
          </div>
        </header>
        <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
          <slot />
        </div>
      </main>
    </UiSidebarProvider>
  </div>
</template>