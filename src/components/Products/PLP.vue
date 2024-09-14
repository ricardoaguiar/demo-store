<template>
  <section class="product-page__container">
    <!-- Loading state -->
    <!--    <div v-if="loading">Loading products...</div>-->

    <!-- Error state -->
    <!--    <div v-else-if="error">Error loading products: {{ error }}</div>-->

    <div v-if="products.length > 0" class="product-page">
      <!--      <FilterBar />-->

      <!--      <div class="column">-->
      <RelatedProducts />
      <!-- Render paginated products -->
      <MoreButton
        v-if="products.length !== 0"
        @increment-cards="grid.showCards += 6"
        class="mt-4"
      />
    </div>
    <!--    </div>-->

    <!-- No products notification -->
    <Notification v-else class="my-5 py-5 has-text-centered">
      <h4>Sorry, we can't find any product with these features</h4>
    </Notification>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useMainStore } from '@/store'
import DropDownFilters from '@/components/Products/DropDownFilters.vue'
import FilterBar from '@/components/Products/Sidebar.vue'
import RelatedProducts from '@/components/Products/RelatedProducts.vue'
import MoreButton from '@/components/Products/MoreButton.vue'
import Notification from '@/components/Notification.vue'

const store = useMainStore()

// Reactive grid state for pagination and sorting
const grid = reactive<{
  showCards: number
  sortButton: string
}>({
  showCards: 6,
  sortButton: '', // Initialize sortButton as an empty string
})

// Fetch products when the component mounts
onMounted(() => {
  store.fetchProducts()
})

// Computed properties for products, loading, and error states
const products = computed(() => store.products)
const loading = computed(() => store.loading)
const error = computed(() => store.error)

// Sort and reset products
const sortedCards = computed(() => {
  const sortedProducts = [...products.value] // Create a shallow copy of products for sorting
  if (grid.sortButton === 'NEWEST') {
    return sortedProducts.sort((a, b) => b.id - a.id) // Sort by newest (assuming id represents newest)
  } else if (grid.sortButton === 'PRICE') {
    return sortedProducts.sort((a, b) => (a.price ?? 0) - (b.price ?? 0)) // Sort by price
  } else if (grid.sortButton === 'TRENDING') {
    return sortedProducts.sort(
      (a, b) => (a.type?.length ?? 0) - (b.type?.length ?? 0)
    ) // Sort by type length
  }
  return sortedProducts // Return unsorted products if no sort applied
})

// Sliced cards for pagination (Show only a limited number of products)
const slicedCards = computed(() => sortedCards.value.slice(0, grid.showCards))

// Handle sorting from dropdown filter
const sortItems = (value: string) => {
  grid.sortButton = value.toUpperCase() // Update the sortButton state
}
</script>

<style scoped lang="scss">
.product-page__container {
  //display: grid;
  //grid-template-columns: 1fr;
  //gap: 1rem;
}

.product-page {
  //display: grid;
  //grid-template-columns: 0.75fr 2fr;
}

.product-page {
  /* Single column layout */
  margin-inline: 1rem;

  @include responsive(mobile) {
    margin-inline: 0.25rem;
  }
}
</style>
