<template>
  <UPopover mode="hover" :popper="{ strategy: 'absolute' }" :ui="{ width: 'w-28' }">
    <UButton v-bind="{ ...$ui.button?.secondary }" icon="i-heroicons-language-20-solid" />
    <template #panel>
      <div class="px-3 py-2 flex flex-col gap-1">
        <template v-for="l in locales" :key="l.code">
          <ULink
class="text-left text-sm hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50"
            @click="handleSetLocale(l.code)">{{ l.name }}</ULink>
        </template>
      </div>
    </template>
  </UPopover>
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