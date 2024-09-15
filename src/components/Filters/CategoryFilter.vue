<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMainStore } from '@/store'
import { useDropdown } from '@/composables'

const store = useMainStore()
const { toggleDropdown, dropdownActive } = useDropdown()
const selectedCategory = ref('')
const selectedColor = ref('')

onMounted(async () => await store.fetchFilters())

function filterByCategory(category: string): void {
  store.resetFilters()
  selectedCategory.value =
    store.categories.types.find((cat) => cat.name === category)?.value ||
    'Select'
  store.setCategoryFilter(category)
  dropdownActive.value = false
}

function filterByColor(colorName: string): void {
  store.resetFilters()
  selectedColor.value = colorName
  store.setColorFilter(colorName)
  dropdownActive.value = false
}
</script>

<template>
  <div class="category-filter">
    <button class="button dropdown-button is-light" @click="toggleDropdown">
      <span>
        CATEGORIES
        <span class="category-name" style="color: #f2be00">{{
          selectedCategory || 'Select'
        }}</span>
      </span>
      <span
        :class="{ 'caret-up': dropdownActive, 'caret-down': !dropdownActive }"
      ></span>
    </button>

    <div
      class="color-options"
      role="menu"
      :class="{ 'color-options-active': dropdownActive }"
    >
      <div
        class="dropdown-item"
        v-for="category in store.categories.types"
        :key="category.value"
      >
        <a class="category-name" @click="filterByCategory(category.name)">
          {{ category.name }}
        </a>
      </div>
      <div class="color-container">
        <h3 class="colors-title">Colors:</h3>
        <template
          class="colors"
          v-for="color in store.categories.colors"
          :key="color.name"
        >
          <a
            class="circle"
            :style="{ backgroundColor: color.value }"
            @click="filterByColor(color.name)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-filter {
  width: 100%;
}

.dropdown-button {
  width: 100%;
  justify-content: space-between;
  flex: 1;
}

.button.is-light {
  color: black;
  background: white;
  border-radius: 0;
  border: 1px solid grey;
}

.categories {
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.category-name {
  text-transform: capitalize;
}

.category-name::after {
  content: 's';
}

.search-title {
  @include flex($direction: column, $gap: $one-spacing);
}

.icon {
  display: inline-block;
  vertical-align: middle;
}

.is-small {
  font-size: 12px; /* Adjust font-size if needed */
}

.search-title h6 {
  cursor: pointer;
}

.color-container {
  @include flex($direction: row, $gap: $half-spacing, $align: center);

  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .colors-title {
    color: #000000;
    font-weight: bold;
  }
}

.color-options {
  overflow: hidden;
  max-height: 0;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease;
  opacity: 0;
}

.color-options-active {
  max-height: 500px;
  opacity: 1;
}

.circle {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;

  &:hover {
    outline: 1px solid rgba(0, 0, 0, 0.75);
  }
}

.filters {
  justify-content: flex-start;
}

.color-container {
  background-color: #f8f8f8;

  @include space(padding, $half-spacing, $one-spacing);
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
  cursor: pointer;
}
</style>
