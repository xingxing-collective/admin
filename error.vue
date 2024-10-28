<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})
import { clearError } from 'nuxt/app';
const handleError = () => clearError({ redirect: '/' })

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <div>
    <main class="min-h-[calc(100vh-var(--header-height))]">
      <UContainer>
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-10">
            <div class="min-h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center">
              <p class="text-base font-semibold text-primary">
                {{ error?.statusCode }}
              </p>
              <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {{ error?.name || error?.statusMessage }}
              </h1>
              <p class="mt-6 text-base/7 text-gray-500 dark:text-gray-400 text-center">
                {{ error.message }}
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <UButton v-bind="{
                  ...{
                    label: 'Go back home',
                    color: 'primary' as const,
                    size: 'lg' as const
                  }
                }" @click="handleError" />
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </main>
    <UNotifications />
  </div>
</template>