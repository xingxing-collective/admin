<template>
  <UCard>
    <template #header>
      <div class="w-full grid grid-cols-4 gap-2">
        <UFormGroup class="col-span-1 flex gap-2 items-center" size="xs" label="Name">
          <UInput v-model="search.name" icon="i-heroicons:magnifying-glass-20-solid" />
        </UFormGroup>
        <UFormGroup class="col-span-1 flex gap-2 items-center" size="xs" label="Email">
          <UInput v-model="search.email" icon="i-heroicons-envelope" />
        </UFormGroup>
      </div>
    </template>
    <UTable :rows="rows" @select="select" v-model="selected" />
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
    </div>
  </UCard>
</template>
<script setup lang="ts">
const page = ref(1);
const pageCount = ref(2);

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}]

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount.value, (page.value) * pageCount.value).filter(x => x.name.search(search.name) > -1 && x.email.search(search.email) > -1)
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


const search = reactive({
  name: '',
  email: ''
});
</script>