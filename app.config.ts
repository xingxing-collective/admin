import type { UIPresets } from './types/ui';

export default defineAppConfig({
  ui: {
    variables: {
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)',
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: 'var(--color-gray-200)',
      },
      header: {
        height: '4rem',
      },
      sidebar: {
        width: '15rem',
      },
    },
    icons: {
      dark: 'i-heroicons-moon-20-solid',
      light: 'i-heroicons-sun-20-solid',
      system: 'i-heroicons-computer-desktop-20-solid',
      search: 'i-heroicons-magnifying-glass-20-solid',
      external: 'i-heroicons-arrow-up-right-20-solid',
      chevron: 'i-heroicons-chevron-down-20-solid',
      hash: 'i-heroicons-hashtag-20-solid',
      menu: 'i-heroicons-bars-3-20-solid',
      close: 'i-heroicons-x-mark-20-solid',
      check: 'i-heroicons-check-circle-20-solid',
    },
    presets: {
      button: {
        primary: {
          color: 'white',
          variant: 'solid',
        },
        secondary: {
          color: 'gray',
          variant: 'ghost',
        },
      },
    } as UIPresets,
  },
});
