<script setup lang="ts">
import { VisSingleContainer, VisDonut, VisBulletLegend } from '@unovis/vue'

type DataRecord = { key: string, value: number }

const data: DataRecord[] = [
    { key: 'names', value: 1396 },
    { key: 'cool', value: 928 },
    { key: 'alphanumeric', value: 864 },
    { key: 'fluffy', value: 518 },
    { key: 'nerdy', value: 294 },
    { key: 'other', value: 916 },
]
const legendItems = Object.entries(data).map(([_, data]) => ({
    name: data.key.charAt(0).toUpperCase() + data.key.slice(1)
}))

const value = (d: DataRecord) => d.value

</script>
<template>
    <div class="flex flex-col">
        <div class="text-center text-sm font-semibold">
            {{ $t('Basic Donut Chart') }}
        </div>
        <VisBulletLegend :items="legendItems" />
        <VisSingleContainer>
            <VisDonut :value="value" :data="data" :show-empty-segments="true" :pad-angle="0.01" :arc-width="80" />
        </VisSingleContainer>
    </div>
</template>