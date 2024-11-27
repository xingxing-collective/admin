<script setup lang="ts">
</script>
<template>
    <div class="fixed inset-0 flex overflow-hidden">
        <div class="w-full flex flex-col">
            <div class="w-full h-[--header-height] flex">
                <div class="flex-1" />
                <div class="flex p-4 items-center gap-2">
                    <LanguageSwitch />
                    <ColorPicker />
                    <ColorModeButton />
                    <UButton to="https://github.com/xingxing-collective/xingxing-admin"
                        v-bind="{ ...$ui.button?.secondary }" target="_blank" icon="i-simple-icons-github"
                        aria-label="GitHub" />
                </div>
            </div>
            <div class="flex-1 w-full flex-col">
                <slot />
            </div>
        </div>
    </div>
</template>