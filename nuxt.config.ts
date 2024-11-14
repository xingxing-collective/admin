// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  nitro: {
    routeRules: {
      '/api/**': {
        isr: false
      }
    }
  },
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
        lang: 'en',
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
  runtimeConfig: {
    public: {
      gaodeToken: process.env.NUXT_GAODE_MAP_TOKEN,
      baiduToken: process.env.NUXT_BAIDU_MAP_TOKEN,
      tencentToken: process.env.NUXT_TENCENT_MAP_TOKEN,
      mapboxToken: process.env.NUXT_MAPBOX_MAP_TOKEN,
      maplibreToken: process.env.NUXT_MAPLIBRE_MAP_TOKEN
    },
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@nuxtjs/seo',
    'nuxt-auth-utils',
  ],
  css: ['./assets/css/main.css', './assets/css/override.css'],
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
  site: {
    url: 'https://xingxing-nuxt-admin.vercel.app',
    name: 'Nuxt Admin',
    description: 'System built with Nuxt',
    defaultLocale: 'en',
  },
  compatibilityDate: '2024-10-24',
});