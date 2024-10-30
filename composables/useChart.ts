import { Chart } from '@antv/g2';
import { defu } from 'defu';
import { type ECharts, type EChartsOption, init } from 'echarts';
import type { ShallowRef } from 'vue';

type RuntimeOptions = ConstructorParameters<typeof Chart>[0];

type ChartType = 'echarts' | 'antv';
type ChartInstance = Chart | ECharts;
type ChartOptions<T extends ChartType> = T extends 'antv'
  ? RuntimeOptions
  : EChartsOption;

type ChartCallback<T extends ChartType> = (
  chart: T extends 'antv' ? Chart : ECharts
) => void;

type ChartFn<T extends ChartType> = T extends 'antv'
  ? {
      container: Ref<HTMLElement | undefined>;
      chartInstance: ShallowRef<Chart | undefined, Chart | undefined>;
    }
  : {
      container: Ref<HTMLElement | undefined>;
      chartInstance: ShallowRef<ECharts | undefined, ECharts | undefined>;
    };

export function useChart<T extends ChartType>(
  type: T,
  _opts?: ChartOptions<T>,
  callback?: ChartCallback<T>
): ChartFn<T> {
  const container = ref<HTMLElement>();
  const colorMode = useColorMode();
  const chartInstance = shallowRef<ChartInstance>();
  const options = ref<ChartOptions<T>>();
  const rendered = ref(false);
  const { createObserver } = useObserver();

  async function render() {
    if (type === 'antv') {
      options.value = defu(_opts, {
        container: container.value!,
        autoFit: true,
        theme: colorMode.value,
      });
      if (!rendered.value) {
        chartInstance.value = new Chart(options.value as RuntimeOptions);
        // @ts-ignore
        if (callback) callback(chartInstance.value);
        await chartInstance.value.render();
      }
      rendered.value = true;
    } else if (type === 'echarts') {
      options.value = defu(_opts);
      if (!rendered.value) {
        chartInstance.value = init(container.value, colorMode.value);
        // @ts-ignore
        if (callback) callback(chartInstance.value);
        rendered.value = true;
      }
    } else {
      throw new Error('Unsupported chart type');
    }
  }

  onMounted(() => {
    createObserver(
      container.value!,
      async () => {
        await render();
      },
      { threshold: 0.5 }
    );
  });

  //TODO: Set chart Theme
  watch(colorMode, () => {});

  return {
    container,
    chartInstance,
  } as ChartFn<T>;
}
