<template>
  <!-- Start::page-header -->
  <div class="card-body p-0">
    {{  manager.list }}
  </div>
</template>

<script setup lang="ts">
import { CategoryManager } from '@/composables/setting/CategoryManager'
import type { ICrudManager } from '~/types/IEntityListManager'

const manager = reactive(new CategoryManager()) as ICrudManager

onMounted(() => {
  manager.getList()
})

definePageMeta({
  middleware: []
})
</script>