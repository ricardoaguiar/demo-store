<!-- Sidebar.vue -->
<script setup lang="ts">
import { useMainStore } from '@/store'
import CategoryFilter from '@/components/Filters/CategoryFilter.vue'
import SortingFilter from '@/components/Filters/SortingFilter.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

const store = useMainStore()
</script>

<template>
  <aside class="sidebar-navigation">
    <SortingFilter />
    <CategoryFilter />
    <ButtonComponent
      class="button reset-button is-light"
      v-if="store.isFilterSet"
      @click="store.resetFilters()"
    >
      RESET FILTERS
    </ButtonComponent>
  </aside>
</template>

<style scoped lang="scss">
.sidebar-navigation {
  @include flex($direction: column, $gap: $spacing-base);
}

.reset-button {
  color: $color-black;
  background: $color-white;
  border: 1px solid $color-black;
  width: 100%;
}
</style>
