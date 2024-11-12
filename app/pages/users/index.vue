<template>
  <UCard>
    <template #header>
      <div class="w-full grid grid-cols-4 gap-2">
        <UFormGroup class="col-span-1 flex gap-2 items-center" size="xs" label="Name">
          <UInput v-model="search.name" icon="i-heroicons-magnifying-glass-20-solid" />
        </UFormGroup>
        <UFormGroup class="col-span-1 flex gap-2 items-center" size="xs" label="Email">
          <UInput v-model="search.email" icon="i-heroicons-envelope" />
        </UFormGroup>
        <UFormGroup class="col-span-1 flex gap-2 items-center" size="xs" label="Location">
          <UInput v-model="search.location" icon="i-heroicons-map-pin" />
        </UFormGroup>
      </div>
    </template>
    <UTable v-model="selected" :columns="columns" :rows="data?.data" :loading="status === 'pending'" @select="select">
      <template #status-data="{ row }">
        <UBadge :label="row.status"
          :color="row.status === 'subscribed' ? 'green' : row.status === 'bounced' ? 'orange' : 'red'" variant="subtle"
          class="capitalize" />
      </template>
      <template #actions-data>
        <UButton icon="i-heroicons-pencil-square" variant="ghost" size="xs" />
        <UButton icon="i-heroicons-eye" variant="ghost" size="xs" />
        <UButton icon="i-heroicons-trash" variant="ghost" size="xs" />
      </template>
    </UTable>
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700 gap-2 items-center">
      <USelect v-model="pageCount" :options="[5, 10, 20, 50]" />
      <UPagination v-model="page" :page-count="pageCount" :total="data?.total || 0" show-last show-first />
    </div>
  </UCard>
</template>
<script setup lang="ts">
import type { User } from '~/types';

const page = ref(1);
const pageCount = ref(5);

watch(pageCount, () => {
  page.value = 1
})

const search = reactive({
  name: '',
  email: '',
  location: ''
})

const columns = ref([{
  key: 'id',
  label: '#'
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}, {
  key: 'email',
  label: 'Email',
  sortable: true
}, {
  key: 'location',
  label: 'Location'
}, {
  key: 'status',
  label: 'Status'
}, {
  key: 'actions',
  label: 'Actions'
}])

const { data, status } = await useAsyncData<{ data: User[], total: number }>('users', () => $fetch(`/api/users`, {
  params: {
    page: page.value,
    pageCount: pageCount.value,
    ...search
  }
}), {
  watch: [page, pageCount, search]
})

const selected = ref<Array<any>>([]);

function select(row: any) {
  const index = selected.value.findIndex(item => item.id === row.id)
  if (index === -1) {
    selected.value.push(row)
  } else {
    selected.value.splice(index, 1)
  }
}
</script>