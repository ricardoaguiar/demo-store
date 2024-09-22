<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// composables
import { useAsset } from '@/composables'

// types
import { Product } from '@/types'

// components
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

// variables
const router = useRouter()
const orderId = ref('')
const purchasedItems = ref<Product[]>([])

onMounted(() => {
  try {
    // Retrieve order ID, purchased items from localStorage
    const storedOrderId = localStorage.getItem('orderId')
    const storedItems = localStorage.getItem('purchasedItems')
    // Check if the data exists
    if (storedOrderId && storedItems) {
      orderId.value = storedOrderId
      purchasedItems.value = JSON.parse(storedItems)
    } else {
      console.warn('No order data found in localStorage.')
    }
  } catch (error) {
    console.error('Error retrieving order data from localStorage:', error)
  }
})

const orderTotal = computed((): number => {
  return purchasedItems.value.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
})

function deleteOrder(): void {
  localStorage.removeItem('orderId')
  localStorage.removeItem('purchasedItems')
  orderId.value = ''
  purchasedItems.value = []
}

function goShopping(): string {
  router.push({ path: '/products' })
}
</script>

<template>
  <div class="thank-you-page container py-5">
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

    <div v-else class="nothing-here">
      <h2 class="title">Nothing here. Go shopping!</h2>
      <div
        class="nothing-here-img"
        :style="{ backgroundImage: `url(${useAsset('empty-basket', 'jpg')})` }"
      />
    </div>

    <div class="action-buttons">
      <ButtonComponent
        v-if="purchasedItems.length !== 0"
        buttonClass="delete-order"
        @click="deleteOrder"
        buttonText="Delete Order"
        class="button delete-order"
      />

      <ButtonComponent
        buttonText="Continue Shopping"
        buttonClass="empty-basket__go-shopping"
        @click="goShopping"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.nothing-here {
  margin-bottom: 1.5rem;
}

.nothing-here-img {
  margin-left: calc(-1 * (100vw - 100%) / 2);
  width: 100vw;
  height: 30rem;
  background-size: cover;
  background-position: top left;
}

.order-total .subtitle {
  font-weight: bold;
}
.action-buttons {
  display: flex;
  flex-direction: row;
  gap: $spacing-base;
}

.product-list {
  display: flex;
  flex-flow: row wrap;
  gap: $spacing-base;
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

.delete-order,
.empty-basket__go-shopping {
  background-color: #000000;
  color: white;
  font-weight: bold;
  border-radius: 2px;
  padding: 0.5rem 1rem;
}

.delete-order {
  background-color: #aa0808;
}
</style>
