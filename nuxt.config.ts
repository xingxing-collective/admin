import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-04-25',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  components:{
    dirs: [
      '~/components',
      {
        path: '~/components/ui',
        global: false,
        extensions: ['vue'],
        prefix: 'Ui',
        pathPrefix: false,
      }
    ]
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  shadcn:{
    componentDir: './app/components/ui'
  },
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'shadcn-nuxt'
  ]
})