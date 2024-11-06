import type {
  S2DataConfig,
  S2MountContainer,
  S2Options,
  ThemeCfg,
} from '@antv/s2';
import { PivotSheet, TableSheet, generatePalette, getPalette } from '@antv/s2';
import defu from 'defu';

export type SheetType =
  | 'pivot'
  | 'table'
  | 'gridAnalysis'
  | 'strategy'
  | 'editable';

export const sheetThemes = new Map<string, ThemeCfg>()
  .set('dark', {
    name: 'colorful',
    palette: generatePalette({
      ...getPalette('colorful'),
      brandColor: '#111827',
    }),
  })
  .set('light', {
    name: 'default',
  });

export type Color = string;
export type SheetInstance = PivotSheet | TableSheet;

export function useSheet(sheetType: SheetType) {
  const container = ref<S2MountContainer>();
  const dataCfg = ref<S2DataConfig>();
  const options = ref<S2Options | null>(null);
  const themeCfg = ref<ThemeCfg>();

  if (typeof container.value === 'string') {
    const dom = document.querySelector(container.value);
    if (dom) container.value = dom;
  }
  options.value = defu(options.value, {
    height:
      Number((container.value as Element)?.parentElement?.clientHeight) -
      Number(
        (container.value as Element)?.previousElementSibling?.clientHeight
      ),
  });

  const colorMode = useColorMode();
  const sheetInstance = shallowRef<SheetInstance>();
  const { createObserver, createResizeObserver } = useObserver();

  function createSheetInstance() {
    if (!container.value) throw new Error('S2MountContainer is not available');
    if (!dataCfg.value) throw new Error('S2DataConfig is not available');

    switch (sheetType) {
      case 'pivot': {
        return new PivotSheet(container.value, dataCfg.value, options.value);
      }
      case 'table': {
        return new TableSheet(container.value, dataCfg.value, options.value);
      }
      default: {
        throw new Error('sheet type is not supported');
      }
    }
  }

  async function render() {
    if (!sheetInstance.value) sheetInstance.value = createSheetInstance();

    sheetInstance.value?.setThemeCfg(themeCfg.value);
    await sheetInstance.value?.render();
  }

  async function resize(size: ResizeObserverSize | undefined) {
    sheetInstance.value?.changeSheetSize(size?.inlineSize, size?.blockSize);
    await sheetInstance.value?.render(false);
  }

  async function setThemeCfg(color: string) {
    const palette = generatePalette({
      ...getPalette('colorful'),
      brandColor: color,
    });
    const newTheme: ThemeCfg = { palette };
    sheetInstance.value?.setThemeCfg(defu(themeCfg.value, newTheme));
    await sheetInstance.value?.render(false);
  }

  watch(
    colorMode,
    async () => {
      themeCfg.value = sheetThemes.get(colorMode.value);
      sheetInstance.value?.setThemeCfg(themeCfg.value);
      await sheetInstance.value?.render(false);
    },
    {
      immediate: true,
    }
  );

  onMounted(() => {
    createObserver(
      container.value as Element,
      async () => {
        await render();
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    createResizeObserver(container.value as Element, async ([entry]) => {
      const [size] = entry?.borderBoxSize || [];
      await resize(size);
    });
  });

  return {
    container,
    dataCfg,
    options,
    setThemeCfg,
  };
}
