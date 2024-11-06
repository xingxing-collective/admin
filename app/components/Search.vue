<template>
  <div>
    <UTooltip :text="$t('Search')" :shortcuts="['⌘', 'K']">
      <UButton
icon="i-heroicons-magnifying-glass-20-solid" v-bind="{ ...$ui.button.secondary }"
        @click="toggleSearch" />
    </UTooltip>
    <UModal v-model="isSearchModalOpen">
      <UCommandPalette :groups="groups" @update:model-value="onSelect" />
    </UModal>
  </div>
</template>
<script setup lang="ts">
const { isSearchModalOpen, toggleSearch } = useUIState()
const { groups } = useRouteLink()
const router = useRouter()

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isSearchModalOpen.value = !isSearchModalOpen.value
    }
  }
})

function onSelect(option: any) {
  if (option.click) {
    option.click()
  } else if (option.to) {
    router.push(option.to)
  } else if (option.href) {
    window.open(option.href, '_blank')
  }
  isSearchModalOpen.value = false
}
</script>