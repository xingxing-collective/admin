<script setup lang="ts">
import { z } from 'zod'
const { signup } = useAuth()

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined
})

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
})

function onSubmit() {
    signup(state)
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
                        <UIcon name="i-heroicons-user-plus" class="w-8 h-8" />
                    </div>
                    <div class="gap-y-6 flex flex-col-reverse">
                        <div class="text-2xl text-gray-900 dark:text-white font-bold">{{ $t('Sign up') }}!</div>
                    </div>
                    <div class="text-gray-500 dark:text-gray-400 mt-1">
                        {{ $t(`Already have an account`) }}?
                        <a href="/signin" class="text-primary font-medium">{{ $t('Sign in') }}</a>
                        .
                    </div>
                </div>
            </template>
            <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
                <UFormGroup :label="$t('Name')" name="name">
                    <UInput v-model="state.name" :placeholder="$t('Enter your name')" />
                </UFormGroup>
                <UFormGroup :label="$t('Email')" name="email">
                    <UInput v-model="state.email" :placeholder="$t('Enter your email')" />
                </UFormGroup>
                <UFormGroup :label="$t('Password')" name="password">
                    <UInput v-model="state.password" type="password" :placeholder="$t('Enter your password')" />
                </UFormGroup>
                <UButton block type="submit">{{ $t('Sign up') }}</UButton>
            </UForm>
        </UCard>
    </div>
</template>
