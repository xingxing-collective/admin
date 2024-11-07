<script setup lang="ts">
const { t } = useI18n()

const tabs = computed(() => {
    return [{
        label: t('Line Charts'),
        components: []
    }, {
        label: t('Area Charts'),
        components: []
    }]
})
</script>
<template>
    <div class="px-4 py-4">
        <UTabs :items="tabs" class="w-full">
            <template #default="{ item, selected }">
                <span class="truncate" :class="[selected && 'text-primary-500 dark:text-primary-400']">{{
                    item.label }}</span>
            </template>
            <template #item="{ item }">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    <div v-for="(component, key) in item.components" :key="key" class="col-span-1 py-4">
                        <div/>
                    </div>
                </div>
            </template>
        </UTabs>
    </div>
</template>