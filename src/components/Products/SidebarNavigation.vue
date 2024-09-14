<!-- Sidebar.vue -->
<script setup lang="ts">
import CategoryFilter from '@/components/Filters/CategoryFilter.vue'
import SortingFilter from '@/components/Filters/SortingFilter.vue'

function handleCategoryFilter(category: string) {
  console.log('Selected Category:', category)
  // Handle category filter
}

function handleColorFilter(color: string) {
  console.log('Selected Color:', color)
  // Handle color filter
}

function handleSortItems(value: string) {
  console.log('Selected Sort:', value)
  // Handle sorting logic
}
</script>

<template>
  <aside class="sidebar-navigation">
    <SortingFilter @sortItem="handleSortItems" />
    <CategoryFilter
      @filterCategory="handleCategoryFilter"
      @filterColor="handleColorFilter"
    />
  </aside>
</template>

<style scoped lang="scss">
.sidebar-navigation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.slider {
  width: 100%;
}
</style>
