import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-04-25',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  shadcn: {
    componentDir: './app/components/ui'
  },
  i18n: {
    defaultLocale: 'en',
    langDir:'../app/internationalization',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN.json' }
    ]
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/image'
  ]
})