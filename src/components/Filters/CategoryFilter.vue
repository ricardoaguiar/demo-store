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
    store.categories.types?.find((cat) => cat.name === category)?.value ||
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
        <span class="category-filter-select">{{
          selectedCategory || 'Select'
        }}</span>
      </span>
      <span
        :class="{ 'caret-up': dropdownActive, 'caret-down': !dropdownActive }"
      />
    </button>

    <div
      class="color-options"
      role="menu"
      :class="{ 'color-options-active': dropdownActive }"
    >
      <div
        class="category-item"
        v-for="category in store.categories.types"
        :key="category.value"
      >
        <button class="category-name" @click="filterByCategory(category.name)">
          {{ category.name }}
        </button>
      </div>
      <div class="color-container">
        <h3 class="colors-title">Colors:</h3>
        <template
          class="colors"
          v-for="color in store.categories.colors"
          :key="color.name"
        >
          <button
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
.category-name {
  text-transform: capitalize;
}

.category-name::after {
  content: 's';
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

.color-container {
  @include flex($direction: row, $gap: $spacing-2, $alignItems: center);
  padding: $spacing-2;
  background-color: $background-color;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .colors-title {
    color: $color-black;
    font-weight: $bold;
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
}
</style>
