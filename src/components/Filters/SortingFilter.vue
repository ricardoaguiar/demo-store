<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMainStore } from '@/store'
import { useDropdown } from '@/composables'

const store = useMainStore()
const sortLabel = ref('DEFAULT')
const { toggleDropdown, dropdownActive } = useDropdown()

onMounted(async () => await store.fetchFilters())

function selectSortOption(value: string) {
  store.resetFilters()
  store.setSortingFilter(value)
  sortLabel.value =
    store.sortingOptions.find((opt) => opt.value === value)?.name || 'DEFAULT'
  dropdownActive.value = false
}
</script>

<template>
  <div class="sorting-filter">
    <button class="button dropdown-button is-light" @click="toggleDropdown">
      <span>
        SORT BY
        <span class="sorting-filter-select">{{ sortLabel }}</span>
      </span>
      <span
        :class="{ 'caret-up': dropdownActive, 'caret-down': !dropdownActive }"
      ></span>
    </button>

    <div
      :class="{ 'sorting-options-active': dropdownActive }"
      class="sorting-options"
      role="menu"
    >
      <div class="sorting-item" v-for="option in store.sortingOptions">
        <button :key="option.value" @click="selectSortOption(option.value)">
          {{ option.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button.is-light {
  color: black;
  background: white;
  border-radius: 0;
  border: 1px solid grey;
  flex: 1;
}

.dropdown-button {
  width: 100%;
  justify-content: space-between;
  flex: 1;
}

.sorting-options {
  overflow: hidden;
  max-height: 0;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease;
  opacity: 0;
}

.sorting-options-active {
  max-height: 500px;
  opacity: 1;
}
</style>
