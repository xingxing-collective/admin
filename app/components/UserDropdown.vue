<script setup lang="ts">
const { user, clear } = useUserSession()
const { metaSymbol } = useShortcuts()
const { isSearchModalOpen } = useUIState()

const items = [
    [{
        label: (user.value as any)?.login || '',
        slot: 'account',
        disabled: true
    }], [{
        label: 'Settings',
        icon: 'i-heroicons-cog-8-tooth',
        to: '/settings'
    }, {
        label: 'Command menu',
        icon: 'i-heroicons-command-line',
        shortcuts: [metaSymbol.value, 'K'],
        click: () => {
            isSearchModalOpen.value = true
        }
    }], [{
        label: 'Documentation',
        icon: 'i-heroicons-book-open',
        to: 'https://ui.nuxt.com/pro/getting-started',
        target: '_blank'
    }, {
        label: 'Github',
        icon: 'i-simple-icons-github',
        to: 'https://github.com/xingxingmofashu/nuxt-admin',
        target: '_blank'
    }, {
        label: 'Framework',
        icon: 'i-simple-icons:nuxtdotjs',
        to: 'https://nuxt.com',
        target: '_blank'
    }], [{
        label: 'Sign out',
        icon: 'i-heroicons-arrow-left-on-rectangle',
        click: ()=>{
            clear()
            navigateTo('/signin')
        }
    }]
]

</script>
<template>
    <UDropdown mode="hover" :items="items" class="w-full"
        :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
        :popper="{ strategy: 'absolute', placement: 'top' }">
        <UButton v-bind="$ui.button?.secondary" class="w-full">
            <template #leading>
                <UAvatar :src="`https://avatars.githubusercontent.com/u/${(user as any)?.id}?v=4`" size="2xs" />
            </template>
            <span class="truncate">{{ (user as any)?.login }}</span>
            <template #trailing>
                <UIcon name="i-heroicons-ellipsis-vertical" class="w-5 h-5 ml-auto" />
            </template>
        </UButton>
        <template #account="{ item }">
            <div class="text-left w-full">
                <p>
                    Signed in as
                </p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                    {{ item.label }}
                </p>
            </div>
        </template>
    </UDropdown>
</template>