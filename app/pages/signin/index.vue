<script setup lang="ts">
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
            <div class="space-y-6">
                <UButton block to="/api/auth/github" color="black" icon="i-simple-icons-github" external size="lg"
                    :label="$t('Continue with Github')" />
                <UButton block
                    class="dark:bg-[#6b4fbb] hover:bg-[#8367D3] dark:hover:bg-[#8367D3] bg-[#6b4fbb] text-white"
                    external size="lg">
                    <template #leading>
                        <UIcon name="i-logos-gitlab" class="w-6 h-6" />
                    </template>
                    <span class="text-white">{{ $t('Continue with Gitlab') }}</span>
                </UButton>
                <UDivider :label="$t('OR')" />
                <UButton block icon="i-simple-icons:monkeytie" :label="$t('Login with Passkey')" color="white" external
                    size="lg" />
                <ULink to="/signin/email" class="text-[#006bff] dark:text-[#62a5e0] block text-center">{{
                    $t('Continue with Email') }} →</ULink>
            </div>
        </UCard>
    </div>
</template>
