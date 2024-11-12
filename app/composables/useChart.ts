import { Chart } from '@antv/g2';
import { defu } from 'defu';
import { init, registerMap } from 'echarts'
import type { ECharts, EChartsOption, registerTransform } from 'echarts'
import type { ShallowRef } from 'vue';

type AntvRuntimeOptions = ConstructorParameters<typeof Chart>[0];

type EChartsTransformPlugin = Parameters<typeof registerTransform>[0];

type EChartsMapPlugin = {
  mapName: Parameters<typeof registerMap>[0];
  geoJson: Parameters<typeof registerMap>[1];
  specialAreas?: Parameters<typeof registerMap>[2];
};

type Plugin = EChartsMapPlugin | EChartsTransformPlugin;

type ChartType = 'echarts' | 'antv';
type ChartInstance = Chart | ECharts;
type ChartOptions<T extends ChartType> = T extends 'antv'
  ? AntvRuntimeOptions
  : EChartsOption;

type ChartCallback<T extends ChartType> = (
  chart: T extends 'antv' ? Chart : ECharts
) => Promise<void> | void;

type AntvChartFn<T extends ChartType> = {
  container: Ref<HTMLElement | undefined>;
  chartInstance: ShallowRef<Chart | undefined, Chart | undefined>;
  rendered: Ref<boolean, boolean>;
  use: (this: ChartFn<T>, plugin: Plugin) => ChartFn<T>;
};

type EchartsChartFn<T extends ChartType> = {
  container: Ref<HTMLElement | undefined>;
  chartInstance: ShallowRef<ECharts | undefined, ECharts | undefined>;
  rendered: Ref<boolean, boolean>;
  use: (this: ChartFn<T>, plugin: Plugin) => ChartFn<T>;
};

type ChartFn<T extends ChartType> = T extends 'antv'
  ? AntvChartFn<T>
  : EchartsChartFn<T>;

export function useChart<T extends ChartType>(
  type: T,
  hook?: ChartCallback<T>
): ChartFn<T>;
export function useChart<T extends ChartType>(
  type: T,
  _opts?: ChartOptions<T>,
  hook?: ChartCallback<T>
): ChartFn<T>;
export function useChart<T extends ChartType>(
  type: T,
  _opts?: ChartOptions<T> | ChartCallback<T>,
  hook?: ChartCallback<T>
): ChartFn<T> {
  const container = ref<HTMLElement>();
  const colorMode = useColorMode();
  const chartInstance = shallowRef<ChartInstance>();
  const options = ref<ChartOptions<T>>();
  const rendered = ref(false);

  const { createObserver, createResizeObserver } = useObserver();

  async function render() {
    switch (type) {
      case 'antv': {
        if (!rendered.value) {
          if (typeof _opts === 'object') {
            options.value = defu(_opts, {
              container: container.value!,
              autoFit: true,
              theme: colorMode.value,
            });
            chartInstance.value = new Chart(options.value as AntvRuntimeOptions);
            // @ts-ignore
            if (hook) hook(chartInstance.value);
            await chartInstance.value.render();
          }

          if (typeof _opts === 'function') {
            chartInstance.value = new Chart(
              defu(
                {},
                {
                  container: container.value!,
                  autoFit: true,
                  theme: colorMode.value,
                }
              )
            );
            // @ts-ignore
            await Promise.resolve(_opts(chartInstance.value));
            await chartInstance.value.render();
          }
          rendered.value = true;
        }
        break;
      }
      case 'echarts': {
        if (!rendered.value) {
          //TODO: set echarts themes see https://echarts.apache.org/handbook/zh/concepts/style/
          chartInstance.value = init(container.value);
          if (typeof _opts === 'object') {
            options.value = defu(_opts);
            chartInstance.value.setOption(options.value);
            // @ts-ignore
            if (hook) hook(chartInstance.value);
          }
          if (typeof _opts === 'function') {
            // @ts-ignore
            await Promise.resolve(_opts(chartInstance.value));
          }
          rendered.value = true;
        }
        break;
      }
      default: {
        throw new Error('Unsupported chart type');
      }
    }
  }

  function resize() {
    if (type === 'echarts') {
      (chartInstance.value as ECharts)?.resize();
    }
  }

  function use(this: ChartFn<T>, plugin: Plugin) {
    if (
      typeof plugin === 'object' &&
      Object.keys(plugin).some((x) =>
        ['mapName', 'geoJson', 'specialAreas'].includes(x)
      )
    ) {
      registerMap(
        (plugin as EChartsMapPlugin).mapName,
        (plugin as EChartsMapPlugin).geoJson,
        (plugin as EChartsMapPlugin).specialAreas
      );
    }
    return this;
  }

  onMounted(() => {
    createObserver(container.value!, async () => {
      await render();
    });
    createResizeObserver(container.value!, () => {
      resize();
    });
  });

  return {
    container,
    chartInstance,
    rendered,
    use,
  } as ChartFn<T>;
}
