<script setup lang="ts">

import { VisXYContainer, VisGroupedBar, VisAxis, VisBulletLegend } from '@unovis/vue'
type ElectionDatum = {
    year: number;
    democrat: number;
    republican: number;
    other: number;
    libertarian: number;
}

const colors = {
    republican: "#22c55e",
    democrat: "#f97316",
    other: "#f43f5e",
    libertarian: "#0ea5e9",
}

const capitalize = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const data: ElectionDatum[] = [
    {
        year: 1980,
        republican: 43642639,
        democrat: 35480948,
        other: 6505863,
        libertarian: 867401,
    },
    {
        year: 1984,
        republican: 54166829,
        democrat: 37449813,
        libertarian: 227204,
        other: 811015,
    },
    {
        year: 1988,
        republican: 48642640,
        democrat: 41716679,
        libertarian: 409708,
        other: 817798,
    },
    {
        year: 1992,
        republican: 38798913,
        democrat: 44856747,
        other: 20663272,
        libertarian: 280848,
    },
    {
        year: 1996,
        republican: 39003697,
        democrat: 47295351,
        other: 9625419,
        libertarian: 465351,
    },
    {
        year: 2000,
        republican: 50311372,
        democrat: 50830580,
        other: 4071625,
        libertarian: 380405,
    },
    {
        year: 2004,
        republican: 61872711,
        democrat: 58894561,
        other: 1212870,
        libertarian: 369308,
    },
    {
        year: 2008,
        republican: 59613835,
        democrat: 69338846,
        other: 1956116,
        libertarian: 510456,
    },
    {
        year: 2012,
        republican: 60670117,
        democrat: 65752017,
        other: 1501463,
        libertarian: 1216400,
    },
    {
        year: 2016,
        republican: 62692670,
        democrat: 65677288,
        libertarian: 4125170,
        other: 4292059,
    },
    {
        year: 2020,
        democrat: 81268908,
        republican: 74216146,
        libertarian: 1797355,
        other: 1246094,
    },
]


const items = Object.entries(colors).map(([n, c]) => ({
    name: capitalize(n),
    color: c,
}))

const x = (d: ElectionDatum) => d.year
const y = [
    (d: ElectionDatum) => d.republican,
    (d: ElectionDatum) => d.democrat,
    (d: ElectionDatum) => d.other,
    (d: ElectionDatum) => d.libertarian,
]
const color = (_d: ElectionDatum, i: number) => items[i]?.color

const yTicks = (value: any) => (value / 10 ** 6).toFixed(1)

</script>
<template>
    <div class="flex flex-col gap-1">
        <div class="text-center text-sm font-semibold">
            {{ $t('Basic Grouped Bar Chart') }}
        </div>
        <VisBulletLegend :items="items" />
        <VisXYContainer>
            <VisGroupedBar :data="data" :x="x" :y="y" :color="color" />
            <VisAxis type="x" label="Election Year" :num-ticks="data.length" />
            <VisAxis type="y" :tick-format="yTicks" label="Number of Votes (millions)" />
        </VisXYContainer>
    </div>
</template>