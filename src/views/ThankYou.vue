<script setup lang="ts">
import { useMainStore } from '@/store'
import { ref } from 'vue'

// Safely retrieve purchased items from Pinia or localStorage
const store = useMainStore()
const purchasedItems = ref(
  store.purchasedItems.length > 0
    ? store.purchasedItems
    : JSON.parse(localStorage.getItem('purchasedItems') || '[]')
)
</script>

<template>
  <div class="container py-5">
    <h1 class="title">Thank you for your purchase!</h1>
    <p class="subtitle">Here are the items you purchased:</p>

    <div v-if="purchasedItems.length > 0">
      <ul>
        <li v-for="item in purchasedItems" :key="item.id">
          <strong>{{ item.title }}</strong> - Quantity: {{ item.quantity }} -
          Total: ${{ item.price * item.quantity }}
        </li>
      </ul>
    </div>

    <p v-else>No items were purchased.</p>

    <router-link to="/products" class="button">Continue Shopping</router-link>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
