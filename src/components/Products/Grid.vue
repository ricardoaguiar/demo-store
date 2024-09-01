<template>
  <div class="container mb-4">
    <div class="block">
      <DropDownFilters @sort-item="sortItems" />
    </div>
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

const store = useMainStore()

const grid = reactive({
  cards: [],
  showCards: 6,
})

onMounted(() => reSet())

const reSet = () => {
  grid.cards = store.items
}

const slicedCards = computed(() => grid.cards.slice(0, grid.showCards))

const sortItems = (value: string) => {
  grid.cards.sort((a, b) => {
    if (value === 'newset') return a.title.length * 2 - b.title.length * 4
    if (value === 'price') return a.price - b.price
    if (value === 'trending') return a.type.length - b.type.length
  })
  return (grid.sortButton = value.toUpperCase())
}
</script>

<style scoped>
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
