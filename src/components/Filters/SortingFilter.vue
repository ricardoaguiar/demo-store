<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMainStore } from '@/store'
import { useDropdown } from '@/composables'

const store = useMainStore()
const sortLabel = ref('DEFAULT')
const { toggleDropdown, dropdownActive } = useDropdown()

onMounted(async () => await store.fetchFilters())

function selectSortOption(value: string) {
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
        SORT BY <span style="color: #f2be00">{{ sortLabel }}</span>
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
        <a
          :key="option.value"
          class="dropdown-item"
          @click="selectSortOption(option.value)"
        >
          {{ option.name }}
        </a>
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

.dropdown-item {
  padding: 10px;
  background-color: #f8f8f8;
  color: #000000;
  text-align: left;
  display: block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #dae0e5;
}

.sorting-filter {
  //background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
}
</style>
