<script setup lang="ts">
import { z } from 'zod'
import { useStorage } from '@vueuse/core'

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
}

definePageMeta({
    layout: 'guest'
})

</script>
<template>
    <div class="flex justify-center items-center h-full">
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
                        {{ $t(`Don't have an account`) }}?
                        <a href="/signup" class="text-primary font-medium">{{ $t('Sign up') }}</a>
                        .
                    </div>
                </div>
            </template>
            <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
                <UFormGroup :label="$t('Email')" name="email">
                    <UInput v-model="state.email" :placeholder="$t('Enter your email')" />
                </UFormGroup>
                <UFormGroup :label="$t('Password')" name="password">
                    <UInput v-model="state.password" autocomplete="off" :type="showPassword ? 'text' : 'password'"
                        :ui="{ icon: { trailing: { pointer: '' } } }" :placeholder="$t('Enter your password')">
                        <template #trailing>
                            <UButton v-bind="{ ...$ui.button?.secondary }" :padded="false"
                                :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                                @click="showPassword = !showPassword" />
                        </template>
                    </UInput>
                </UFormGroup>
                <UCheckbox v-model="rememberMe" :label="$t('Remember me')" />
                <UButton block color="primary" type="submit">{{ $t('Continue') }}</UButton>
                <ULink to="/signin" class="text-[#006bff] dark:text-[#62a5e0] block text-center">{{
                    $t('← Other Login options') }}</ULink>
            </UForm>
        </UCard>
    </div>
</template>
