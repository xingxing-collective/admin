<script setup lang="ts">
import { VisXYContainer, VisAxis, VisStackedBar } from '@unovis/vue'
import type { DataRecord } from '~/types';

const data: DataRecord[] = [
    { x: 1, y: 72 },
    { x: 2, y: 45 },
    { x: 3, y: 13 },
    { x: 4, y: 94 },
    { x: 5, y: 56 },
    { x: 6, y: 82 },
    { x: 7, y: 61 },
    { x: 8, y: 33 },
    { x: 9, y: 88 },
    { x: 10, y: 41 }
]

const x = (d: DataRecord) => d.x
const y = (d: DataRecord) => d.y
const xTicks = (x: number) => x

</script>
<template>
    <div class="flex flex-col gap-1">
        <div class="text-center text-sm font-semibold">
            {{ $t('Basic Bar Chart') }}
        </div>
        <VisXYContainer :data="data" :padding="{ top: 10 }">
            <VisStackedBar :x="x" :y="y" color="rgb(var(--color-primary-DEFAULT))" />
            <VisAxis type="x" :x="x" :tick-format="xTicks" :num-ticks="data.length" />
        </VisXYContainer>
    </div>
</template>