import tailwindColors from '#tailwind-config/theme/colors';
import type { TailwindColorKeys } from '~/types';

export const useTheme = () => {
    const appConfig = useAppConfig()
    const colorMode = useColorMode()
    const primaryColors = computed(() =>
        appConfig.ui.colors
            .filter((color) => color !== 'primary')
            .map((color) => ({
                value: color,
                text: color,
                hex: tailwindColors[color as TailwindColorKeys][
                    colorMode.value === 'dark' ? 400 : 500
                ] as string,
            }))
    );

    const primaryColor = computed(() => tailwindColors[appConfig.ui.primary as keyof typeof tailwindColors][500])

    return {
        primaryColor,
        primaryColors
    }
}