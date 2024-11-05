import { createSharedComposable } from '@vueuse/core';

const _useUIState = () => {
  const isHeaderDialogOpen = ref(false);
  const isSearchModalOpen = ref(false);
  const route = useRoute();

  function toggleSearch() {
    isSearchModalOpen.value = !isSearchModalOpen.value;
  }

  watch(
    () => route.path,
    () => {
      isHeaderDialogOpen.value = false;
    }
  );

  return {
    isHeaderDialogOpen,
    isSearchModalOpen,
    toggleSearch,
  };
};

export const useUIState = createSharedComposable(_useUIState);
