<template>
  <div class="product-page__container">
    <!--    <div class="block">-->
    <DropDownFilters @sort-item="sortItems" />
    <!--    </div>-->
    <div v-if="grid.cards.length !== 0" class="product-page">
      <div class="column">
        <FilterBar />
      </div>
      <div class="column">
        <Card :cards="slicedCards" />
        <MoreButton
          v-if="grid.cards.length !== 0"
          @increment-cards="grid.showCards += 6"
          class="mt-4"
        />
      </div>
    </div>
    <Notification v-else class="my-5 py-5 has-text-centered">
      <h4>Sorry, we can't find any product with these features</h4>
    </Notification>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useMainStore } from '@/store'
import DropDownFilters from '@/components/Products/DropDownFilters.vue'
import FilterBar from '@/components/Products/FilterBar.vue'
import Card from '@/components/Products/Card.vue'
import MoreButton from '@/components/Products/MoreButton.vue'
import Notification from '@/components/Notification.vue'
import { Product } from '@/types' // Import Product type

const store = useMainStore()

// Explicitly type the grid state
const grid = reactive<{
  cards: Product[] // Define that grid.cards is an array of Product
  showCards: number
  sortButton: string // Add sortButton to grid state
}>({
  cards: [],
  showCards: 6,
  sortButton: '', // Initialize sortButton as an empty string
})

onMounted(() => reSet())

const reSet = () => {
  grid.cards = store.items
}

const slicedCards = computed(() => grid.cards.slice(0, grid.showCards))

const sortItems = (value: string) => {
  grid.cards.sort((a: Product, b: Product) => {
    if (value === 'newset') {
      return (a.title?.length ?? 0) * 2 - (b.title?.length ?? 0) * 4
    }
    if (value === 'price') {
      return (a.price ?? 0) - (b.price ?? 0) // Fallback to 0 if price is undefined
    }
    if (value === 'trending') {
      return (a.type?.length ?? 0) - (b.type?.length ?? 0) // Fallback to 0 if type is undefined
    }
    return 0
  })
  grid.sortButton = value.toUpperCase() // Update the sortButton state
}
</script>

<style scoped>
.product-page__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.product-page {
  display: grid;
  grid-template-columns: 0.75fr 2fr;
}

@media screen and (max-width: 1023px) {
  .product-page {
    grid-template-columns: 1fr; /* Single column layout */
    margin-inline: 1rem;
  }
}
</style>
