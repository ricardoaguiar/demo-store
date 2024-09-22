<!-- Sidebar.vue -->
<script setup lang="ts">
import { useMainStore } from '@/store'
import CategoryFilter from '@/components/Filters/CategoryFilter.vue'
import SortingFilter from '@/components/Filters/SortingFilter.vue'

const store = useMainStore()
</script>

<template>
  <aside class="sidebar-navigation">
    <SortingFilter />
    <CategoryFilter />
    <button
      class="button reset-button is-light"
      v-if="store.isFilterSet"
      @click="store.resetFilters()"
    >
      RESET FILTERS
    </button>
  </aside>
</template>

<style scoped lang="scss">
.sidebar-navigation {
  display: flex;
  flex-direction: column;
  gap: $spacing-base;
}

.slider {
  width: 100%;
}

.reset-button {
  width: 100%;
  color: black;
  background: white;
  border-radius: 0;
  border: 1px solid grey;
}
</style>
