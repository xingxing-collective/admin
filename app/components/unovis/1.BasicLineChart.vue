<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis } from '@unovis/vue'
import type { DataRecord } from '~/types';

const data: DataRecord[] = [
    { x: 1, y: 72 },
    { x: 2, y: 45 },
    { x: 3, y: 13 },
    { x: 5, y: 56 },
    { x: 6, y: 82 },
    { x: 7, y: 61 },
    { x: 9, y: 88 },
    { x: 10, y: 41 }
]

const x = (d: DataRecord) => d.x
const y = (d: DataRecord) => d.y

</script>
<template>
    <div class="flex flex-col gap-1">
        <div class="text-center text-sm font-semibold">
            {{ $t('Basic Line Chart') }}
        </div>
        <VisXYContainer :data="data">
            <VisLine :x="x" :y="y" color="rgb(var(--color-primary-DEFAULT))" />
            <VisAxis type="x" />
        </VisXYContainer>
    </div>
</template>