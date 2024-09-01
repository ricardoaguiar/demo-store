<template>
  <div class="container py-5">
    <!-- Ensure there is info to display before allowing access -->
    <Breadcrumb v-if="item.details" :details="item.details" />
    <Box v-if="item.details" :item="item.details" />
    <Text v-if="item.details" />

    <div class="related-item" v-if="sliceItems.length > 0">
      <hr />
      <h6 class="pb-4">RELATED PRODUCTS</h6>
      <Card :cards="sliceItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, computed } from 'vue'
import { useMainStore } from '@/store'

// Components
import Card from '@/components/Products/Card.vue'
import Breadcrumb from '@/components/Details/Breadcrumb.vue'
import Box from '@/components/Details/Box.vue'
import Text from '@/components/Details/Text.vue'

// Store and routing
const store = useMainStore()
const route = useRoute()
const router = useRouter()

// State
const item = reactive({
  details: null,
  relatedItems: [],
})

// Fetch item details on mount
onMounted(() => {
  const itemId = Number(route.params.id)
  item.details = store.items[itemId]

  // Redirect if item details are not found
  if (!item.details) {
    router.push('/not-found') // Redirect to a not-found page or another appropriate route
  }
})

// Generate related items
const sliceItems = computed(() => {
  if (item.details) {
    while (item.relatedItems.length < 3) {
      const randomIndex = Math.floor(Math.random() * store.items.length)
      const relatedItem = store.items[randomIndex]

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
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>
