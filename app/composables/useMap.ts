import {
  type IMapConfig,
  type L7Container,
  type MapStyle,
  Scene,
} from '@antv/l7';
import {
  BaiduMap,
  GaodeMap,
  MapLibre,
  Mapbox,
  TencentMap,
} from '@antv/l7-maps';

export enum MapType {
  GAODE = 'GAODE',
  BAIDU = 'BAIDU',
  TENCENT = 'TENCENT',
  MAPLIBRE = 'MAPLIBRE',
  MAPBOX = 'MAPBOX',
}
export type MapInstanceType = {
  setContainer: (
    sceneContainer: L7Container,
    id: string | HTMLDivElement
  ) => void;
};

export const useMap = (
  type: MapType,
  config: Partial<IMapConfig<Record<string, any>>> = {}
) => {
  const container = ref<HTMLDivElement>();
  const colorMode = useColorMode();
  const { gaodeToken, baiduToken, tencentToken, mapboxToken, maplibreToken } = useRuntimeConfig().public;

  const mapInstance = shallowRef<MapInstanceType>();
  const scene = shallowRef<Scene>();

  // initialize the map themes
  const themesConfig = computed(() => {
    // TODO: tencent map theme only has one
    return new Map<MapType, Record<string, MapStyle>>()
      .set(MapType.GAODE, {
        light: 'light',
        dark: 'amap://styles/darkblue',
      })
      .set(MapType.BAIDU, {
        light: 'c17b1c2b528429a7b04bbc8d3eb8bae9',
        dark: '344b005fd5b4220a55241c25e7733e81',
      })
      .set(MapType.MAPBOX, {
        light: 'mapbox://styles/mapbox/light-v11',
        dark: 'mapbox://styles/mapbox/dark-v11',
      })
      .set(MapType.MAPLIBRE, {
        light: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${maplibreToken}`,
        dark: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${maplibreToken}`,
      })
      .get(type);
  });

  

  function setTheme(colorMode: string) {
    config.style =
      colorMode === 'light'
        ? themesConfig.value?.light
        : themesConfig.value?.dark;
  }

  function render() {
    if (scene.value) scene.value?.destroy();

    switch (type) {
      case MapType.GAODE: {
        config.token = gaodeToken;
        mapInstance.value = new GaodeMap(config);
        break;
      }
      case MapType.BAIDU: {
        config.token = baiduToken;
        mapInstance.value = new BaiduMap(config);
        break;
      }
      case MapType.TENCENT: {
        config.token = tencentToken;
        mapInstance.value = new TencentMap(config);
        break;
      }
      case MapType.MAPLIBRE: {
        config.token = maplibreToken;
        mapInstance.value = new MapLibre(config);
        break;
      }
      case MapType.MAPBOX: {
        config.token = mapboxToken;
        mapInstance.value = new Mapbox(config);
        break;
      }
    }
    scene.value = new Scene({
      id: container.value!,
      map: mapInstance.value!,
    });
  }

  watch(colorMode, (color) => {
    setTheme(color.value);
    render();
  });

  onMounted(() => {
    setTheme(colorMode.value);
    render();
  });

  return {
    container,
    scene,
    mapInstance
  };
};
