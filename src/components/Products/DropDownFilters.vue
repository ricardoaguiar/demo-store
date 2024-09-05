<script setup lang="ts">
import { ref, reactive } from 'vue'

const sort = ref('DEFAULT')
const dropdownActive = ref('')

// Initialize grid with types and colors
const grid = reactive({
  types: [
    { name: 'Table', value: 'table' },
    { name: 'Lamps', value: 'lamp' },
    { name: 'Chairs', value: 'chair' },
    { name: 'Sofas', value: 'sofa' },
  ],
  colors: [
    { name: 'yellow', value: '#FFC015' },
    { name: 'blue', value: '#829FAA' },
    { name: 'white', value: '#BFB8AE' },
    { name: 'silver', value: '#817A77' },
  ],
})

const emit = defineEmits<{
  (e: 'sortItem', name: string): void
}>()

function sortBy(value: string): void {
  emit('sortItem', value)
  sort.value = value.toUpperCase()
  dropdownActive.value = '' // Close the dropdown after selection
}

function toggleDropdown(type: string): void {
  dropdownActive.value = dropdownActive.value === type ? '' : type
}

function sortItems(value: string): void {
  emit('sortItem', value)
  dropdownActive.value = '' // Close the dropdown after selection
}

function reSet(): void {
  emit('sortItem', 'DEFAULT')
  dropdownActive.value = '' // Close the dropdown after reset
  sort.value = 'DEFAULT'
}
</script>

<template>
  <div
    class="is-flex is-align-items-center is-justify-content-flex-center is-justify-content-tablet-flex-start"
    style="gap: 1rem"
  >
    <div class="dropdown is-fullwidth">
      <div class="dropdown-trigger">
        <button
          class="button is-light is-fullwidth"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          @click="toggleDropdown('sort')"
        >
          <span>
            SORT BY <span style="color: #f2be00">{{ sort }}</span>
          </span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        class="dropdown-menu"
        :class="{ 'is-active': dropdownActive === 'sort' }"
        role="menu"
      >
        <div class="dropdown-content">
          <a class="dropdown-item" @click="sortBy('newest')">Newest</a>
          <a class="dropdown-item" @click="sortBy('price')">Price</a>
          <a class="dropdown-item" @click="sortBy('trending')">Trending</a>
        </div>
      </div>
    </div>

    <div class="dropdown is-hidden-desktop">
      <div class="dropdown-trigger">
        <button
          class="button is-light is-fullwidth"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          @click="toggleDropdown('categories')"
        >
          <span>CATEGORIES</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        class="dropdown-menu"
        :class="{ 'is-active': dropdownActive === 'categories' }"
        role="menu"
      >
        <div class="dropdown-content">
          <a
            class="dropdown-item"
            v-for="item in grid.types"
            :key="item.name"
            @click="sortItems(item.value)"
            >{{ item.name }}</a
          >
          <hr class="dropdown-divider" />
          <div class="px-3">
            <span
              v-for="item in grid.colors"
              :key="item.name"
              class="circle"
              :style="{ backgroundColor: item.name }"
              @click="sortItems(item.value)"
            ></span>
          </div>
          <hr class="dropdown-divider" />
          <a class="dropdown-item" @click="reSet">Reset</a>
        </div>
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
}

.dropdown-menu {
  background-color: #f8f8f8;
  color: #2c3539;
}

.dropdown-item:hover {
  background-color: #dae0e5;
  cursor: pointer;
}

.circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
}
</style>
