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
  shadcn:{
    componentDir: './app/components/ui'
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
    '@nuxtjs/i18n'
  ]
})