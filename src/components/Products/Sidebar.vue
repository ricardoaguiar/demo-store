<script setup lang="ts">
import { reactive } from 'vue'
import DropDownFilters from '@/components/Products/DropDownFilters.vue'

const info = reactive({
  types: [
    { name: 'Table', value: 'table' },
    { name: 'Lamps', value: 'lamp' },
    { name: 'Chairs', value: 'chair' },
    { name: 'Sofas', value: 'sofa' },
  ],
  colors: [
    { name: 'Yellow', value: '#FFC015' },
    { name: 'Blue', value: '#829FAA' },
    { name: 'White', value: '#BFB8AE' },
    { name: 'Silver', value: '#817A77' },
  ],
})

function filterByCategory(category: string) {
  console.log('Filter by category:', category)
  // Emit or handle the category filtering logic here
}

function filterByColor(color: string) {
  console.log('Filter by color:', color)
  // Emit or handle the color filtering logic here
}
</script>

<template>
  <aside class="sidebar-navigation">
    <DropDownFilters @sort-item="sortItems" />
    <div class="categories">
      <div class="search-title">
        <h4 class="title is-4">Categories +</h4>
        <h6
          v-for="item in info.types"
          :key="item.name"
          class="subtitle is-6"
          @click="filterByCategory(item.value)"
        >
          {{ item.name }}
        </h6>
      </div>
      <div class="search-title">
        <h4 class="title is-4">Filter by +</h4>
        <div class="colors">
          <h5 class="title is-5">Color</h5>
          <span
            v-for="item in info.colors"
            :key="item.name"
            class="circle"
            :style="{ backgroundColor: item.value }"
            @click="filterByColor(item.value)"
          ></span>
        </div>
      </div>
      <div class="search-title">
        <h5 class="title is-5">Price Range</h5>
        <input type="range" min="0" max="100" value="50" class="slider" />
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar-navigation {
  @include flex($direction: column);
  @include space(margin, $half-spacing, $base-spacing);

  gap: $base-spacing;
}

.categories {
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @include space(padding, $one-spacing, $base-spacing);
  @include responsive(mobile) {
    display: none;
  }
}

.card-selector {
  color: #dcdcdc;
  height: fit-content;
  background: white;

  @include responsive(mobile) {
    display: none;
  }
}

.search-title {
  margin-bottom: 60px;
}

.search-title h6 {
  cursor: pointer;
}

.circle {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 6px;
  cursor: pointer;
}

.slider {
  width: 100%;
}
</style>
