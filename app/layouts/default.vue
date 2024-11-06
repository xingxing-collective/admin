<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <Aside />
    <div class="flex flex-1 w-full min-w-0">
      <div class="flex-col items-stretch relative w-full flex-1 flex">
        <Navbar>
          <template #left>
            <div class="flex items-center">
              <UBreadcrumb :links="breadcrumb" />
            </div>
          </template>
          <template #right>
            <Header />
          </template>
        </Navbar>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { breadcrumb } = useRouteLink()
</script>