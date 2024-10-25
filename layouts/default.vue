<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <Sidebar />
    <div class="flex flex-1 w-full min-w-0">
      <div class="flex-col items-stretch relative w-full flex-1 flex">
        <Navbar>
          <template #right>
            <Header />
          </template>
        </Navbar>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>