// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Admin',
      titleTemplate: '%s',
      meta: [
         
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'System built with Nuxt',
        },
      ],
      htmlAttrs: {
        lang: 'en-US',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },
  },
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/image','@nuxt/eslint'],
  css: ['./assets/css/main.css'],
  runtimeConfig: {
    public: {
      map: {
        gaode: {
          token: import.meta.env.GAODE_MAP_TOKEN,
          themes: {
            dark: 'amap://styles/darkblue',
            light: 'light',
          },
        },
        baidu: {
          token: import.meta.env.BAIDU_MAP_TOKEN,
          themes: {
            dark: '344b005fd5b4220a55241c25e7733e81',
            light: 'c17b1c2b528429a7b04bbc8d3eb8bae9',
          },
        },
        tencent: {
          token: import.meta.env.TENCENT_MAP_TOKEN,
        },
        mapLibre: {
          token: import.meta.env.MAPLIBRE_MAP_TOKEN,
          themes: {
            dark: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${import.meta.env.MAPLIBRE_MAP_TOKEN}`,
            light: `https://api.maptiler.com/maps/dataviz/style.json?key=${import.meta.env.MAPLIBRE_MAP_TOKEN}`,
          },
        },
        mapbox: {
          token: import.meta.env.MAPBOX_MAP_TOKEN,
          themes: {
            dark: 'mapbox://styles/mapbox/dark-v11',
            light: 'mapbox://styles/mapbox/light-v11',
          },
        },
      },
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'internationalization',
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  icon: {
    customCollections: [
      {
        prefix: 'antv-icon',
        dir: './assets/icons/antv',
      },
      {
        prefix: 'threejs-icon',
        dir: './assets/icons/threejs',
      },
    ],
  },
  compatibilityDate: '2024-10-24',
});
