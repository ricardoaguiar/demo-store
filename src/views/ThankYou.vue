<script setup lang="ts">
import { useMainStore } from '@/store'
import { onMounted, ref, computed } from 'vue'
import { useAsset } from '@/composables'

// Safely retrieve purchased items from Pinia or localStorage
const store = useMainStore()
const orderId = ref('')
// const isExpired = ref(false)
// const EXPIRATION_TIME = 3600 * 1000 // 1 hour in milliseconds

const purchasedItems = ref([])

function deleteOrder() {
  localStorage.removeItem('orderId')
  localStorage.removeItem('purchasedItems')
  orderId.value = ''
  purchasedItems.value = []
}

onMounted(() => {
  try {
    // Retrieve order ID, purchased items, and timestamp from localStorage
    const storedOrderId = localStorage.getItem('orderId')
    const storedItems = localStorage.getItem('purchasedItems')
    // const purchaseTimestamp = parseInt(
    //   localStorage.getItem('purchaseTimestamp') || '0',
    //   10
    // )

    // Check if the data exists
    if (storedOrderId && storedItems) {
      orderId.value = storedOrderId
      purchasedItems.value = JSON.parse(storedItems)
    } else {
      console.warn('No order data found in localStorage.')
    }

    // Check if the timestamp is valid and if the order has expired
    //   const currentTime = Date.now()
    //   if (currentTime - purchaseTimestamp > EXPIRATION_TIME) {
    //     isExpired.value = true
    //     deleteOrder() // Automatically delete expired order
    //   }
  } catch (error) {
    console.error('Error retrieving order data from localStorage:', error)
  }
})

// Computed property to calculate the total price of the order
const orderTotal = computed(() => {
  return purchasedItems.value.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
})
</script>

<template>
  <div class="container py-5">
    <template v-if="orderId">
      <h1 class="title pb-3">Thank you for your purchase!</h1>
      <p class="subtitle">Here are the items you purchased:</p>
      <p class="subtitle">Order ID: {{ orderId }}</p>
    </template>

    <div v-if="purchasedItems.length > 0">
      <ul class="product-list">
        <li v-for="item in purchasedItems" :key="item.id">
          <router-link :to="`/details/${item.id}`" class="product-link">
            <span class="product-list-item">
              <img
                :src="useAsset(item.img)"
                :alt="item.name"
                class="product-image"
              />
              <strong>{{ item.title }}</strong
              >Quantity: {{ item.quantity }} - Total: ${{
                item.price * item.quantity
              }}
            </span>
          </router-link>
        </li>
      </ul>

      <div class="order-total pb-5">
        <h6 class="subtitle">Total Order Cost: ${{ orderTotal }}</h6>
      </div>
    </div>

    <h2 class="title" v-else>Nothing here. Go shopping!</h2>

    <div class="action-buttons">
      <button
        v-if="purchasedItems.length !== 0"
        class="button is-danger"
        @click="deleteOrder"
      >
        Delete Order
      </button>

      <router-link to="/products" class="button">Continue Shopping</router-link>
    </div>
  </div>

  <!--  <div v-else>-->
  <!--    <h1 class="title">Order Expired</h1>-->
  <!--    <p>Your order has expired and is no longer available.</p>-->
  <!--    <router-link to="/products" class="button">Continue Shopping</router-link>-->
  <!--  </div>-->
</template>

<style scoped>
.order-total .subtitle {
  font-weight: bold;
}
.action-buttons {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.product-list {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}
.product-list-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 0 1rem 1rem;
}

.product-link {
  width: 100%;
  height: 100%;
}

.product-image {
  flex: 1 0 30%;
  max-width: 15rem;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
