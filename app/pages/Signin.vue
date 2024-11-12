<script setup lang="ts">
import { z } from 'zod'
import { useStorage } from '@vueuse/core'

const { signin } = useAuth()

const state = reactive({
    email: undefined,
    password: undefined
})

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

const showPassword = ref(false)

const rememberMe = useStorage('rememberMe', false)

function onSubmit() {
    signin(state)
}

definePageMeta({
    layout: false
})
</script>
<template>
    <div class="flex justify-center items-center h-screen">
        <UCard class="max-w-sm w-full">
            <template #header>
                <div class="flex justify-center items-center flex-col">
                    <div class="mb-2 pointer-events-none">
                        <UIcon name="i-heroicons-lock-closed" class="w-8 h-8" />
                    </div>
                    <div class="gap-y-6 flex flex-col-reverse">
                        <div class="text-2xl text-gray-900 dark:text-white font-bold">{{ $t('Welcome back') }}!</div>
                    </div>
                    <div class="text-gray-500 dark:text-gray-400 mt-1">
                        Don't have an account?
                        <a href="/" class="text-primary font-medium">Sign up</a>
                        .
                    </div>
                </div>
            </template>
            <UForm :schema="schema" :state="state" class="space-y-6" :ui="{ label: 'text-sm font-medium text-gray-900 dark:text-white' }"
                @submit="onSubmit">
                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" placeholder="Enter your email" />
                </UFormGroup>
                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" autocomplete="off" :type="showPassword ? 'password' : 'text'"
                        :ui="{ icon: { trailing: { pointer: '' } } }" placeholder="Enter your password">
                        <template #trailing>
                            <UButton v-bind="{ ...$ui.button?.secondary }" :padded="false"
                                :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                                @click="showPassword = !showPassword" />
                        </template>
                    </UInput>
                </UFormGroup>
                <UCheckbox v-model="rememberMe" label="Remember me" />
                <UButton block color="primary" type="submit">Continue</UButton>
                <UDivider label="OR" />
                <UButton block color="white" icon="i-simple-icons-github" label="Continue with Github"/>
            </UForm>
        </UCard>
    </div>
</template>
