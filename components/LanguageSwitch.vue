<template>
  <UDropdown mode="hover" :popper="{ strategy: 'absolute' }" :ui="{ width: 'w-24' }"
    :items="locales.map(x => ([{ label: x.name!, click: () => handleSetLocale(x.code) }]))">
    <UButton v-bind="{ ...$ui.button.secondary }" icon="heroicons:language-20-solid" />
  </UDropdown>
</template>
<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const handleSetLocale = (code: string) => {
  if (locale.value !== code) {
    setLocale(code)
    window.location.reload();
  }
}
</script>