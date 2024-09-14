<template>
  <div class="container py-5" v-if="item.details">
    <Breadcrumb :details="item.details" />
    <ProductTile :item="item.details" />
    <ProductDescription />

    <div class="related-item" v-if="sliceItems.length > 0">
      <hr />
      <h6 class="pb-4">RELATED PRODUCTS</h6>
      <Card :cards="sliceItems" />
    </div>
  </div>

  <div v-else>
    <p>Product not found.</p>
    <!-- Optionally provide a link to go back to the products page -->
    <router-link to="/">Back to Products</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, computed } from 'vue'
import { useMainStore } from '@/store'

// Components
import Card from '@/components/Products/RelatedProducts.vue'
import Breadcrumb from '@/components/PDP/Breadcrumb.vue'
import ProductTile from '@/components/PDP/ProductTile.vue'
import ProductDescription from '@/components/PDP/PDPText.vue'
import { Product } from '@/types'

// Store and routing
const store = useMainStore()
const route = useRoute()
const router = useRouter()

// State
const item = reactive<{
  details: Product | null // Allow details to be either Product or null
  relatedItems: Product[] // Related items should be an array of Product
}>({
  details: null,
  relatedItems: [],
})

// Fetch item details on mount
onMounted(async () => {
  const itemId = Number(route.params.id)
  item.details = store.products[itemId]

  // // Check if itemId is a valid number and within the bounds of available products
  // if (!isNaN(itemId) && itemId >= 0 && itemId < store.products.length) {
  //   item.details = store.products[itemId]
  // }
  if (store.products.length === 0) {
    // If products are not loaded, fetch them
    await store.fetchProducts()
  }

  // Once products are loaded, set item details
  item.details = store.products.find((product) => product.id === itemId)

  // Redirect if item details are not found
  if (!item.details) {
    await router.push('/404') // Redirect to a not-found page or another appropriate route
  }
})

// Generate related items
const sliceItems = computed(() => {
  if (item.details) {
    while (item.relatedItems.length < 3) {
      const randomIndex = Math.floor(Math.random() * store.products.length)
      const relatedItem = store.products[randomIndex]

      // Ensure we don't include the current item or duplicates
      if (
        relatedItem !== item.details &&
        !item.relatedItems.includes(relatedItem)
      ) {
        item.relatedItems.push(relatedItem)
      }
    }
  }
  return item.relatedItems
})
</script>

<style scoped>
hr {
  width: 50px;
  border-bottom: 1px solid black;
}

.related-item {
  height: auto;
  text-align: center;
}
</style>
