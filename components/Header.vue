<template>
  <header :class="ui.wrapper" v-bind="attrs">
    <UContainer :class="ui.container">
      <div :class="ui.right">
        <UDropdown mode="hover" :popper="{ strategy: 'absolute' }" :ui="{ width: 'w-24' }"
          :items="locales.map(x => ([{ label: x.name!, click: () => handleSetLocale(x.code) }]))">
          <UButton v-bind="{ ...$ui.button.secondary }" icon="heroicons:language-20-solid" />
        </UDropdown>
        <ColorPicker />
        <ColorModeButton />
        <UButton to="https://github.com/xingxing-collective/nuxt-admin" v-bind="{ ...$ui.button.secondary }"
          target="_blank" icon="i-simple-icons-github" aria-label="GitHub" />
      </div>
    </UContainer>
    <USlideover v-model="isHeaderDialogOpen" side="left" :class="ui.slideover.wrapper">
      <Aside :ui="{ wrapper: ui.slideover.container }" />
    </USlideover>
  </header>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();

const { locales, setLocale } = useI18n()

const handleSetLocale =(locale: string)=>{
  setLocale(locale)
  window.location.reload();
}

const config = computed(() => ({
  wrapper:
    'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50',
  container: 'flex items-center justify-between gap-3 h-[--header-height]',
  right: 'flex items-center justify-end lg:flex-1 gap-1.5',
  slideover: {
    wrapper: 'w-full md:w-1/2 lg:w-1/2',
    container: 'rounded-lg divide-y divide-gray-100 dark:divide-gray-800 shadow bg-white dark:bg-gray-900 flex flex-col flex-1',
  },
  button: {
    base: 'lg:hidden',
    icon: {
      open: appConfig.ui.icons.menu,
      close: appConfig.ui.icons.close,
    },
  },
}));

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  ui: {
    type: Object as PropType<Partial<typeof config.value>>,
    default: () => ({})
  }
})

const { ui, attrs } = useUI('nuxt-admin.header',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)

const { isHeaderDialogOpen } = useUIState();

</script>