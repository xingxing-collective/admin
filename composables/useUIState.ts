import { createSharedComposable } from '@vueuse/core';

const _useUIState = () => {
  const isHeaderDialogOpen = ref(false);
  const route = useRoute();

  watch(
    () => route.path,
    () => {
      isHeaderDialogOpen.value = false;
    }
  );

  return {
    isHeaderDialogOpen,
  };
};

export const useUIState = createSharedComposable(_useUIState);
