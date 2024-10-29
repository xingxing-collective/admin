<template>
  <UDropdown mode="hover" :popper="{ strategy: 'absolute' }" :ui="{ width: 'w-24' }"
    :items="locales.map(x => ([{ label: x.name!, click: () => handleSetLocale(x.code) }]))">
    <UButton v-bind="{ ...$ui.button.secondary }" icon="heroicons:language-20-solid" />
  </UDropdown>
</template>
<script setup lang="ts">
const { locales, setLocale } = useI18n()

const handleSetLocale = (locale: string) => {
  setLocale(locale)
  window.location.reload();
}
</script>