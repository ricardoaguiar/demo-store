<template>
  <div class="column p-0">
    <img
      :src="useAsset(item.img)"
      class="image is-96x96"
      alt="cart-item"
      title="cart-item"
    />
  </div>
  <div class="title-container column p-0 m-0">
    <h4 class="title">{{ item.title }}</h4>
    <h6 class="subtitle">${{ item.price }}</h6>
  </div>
  <div class="remove-btn-container column p-0">
    <span class="remove-btn" @click="store.outCart(item.id!)">&#10006;</span>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types'
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'

const store = useMainStore()

defineProps<{
  item: Product
}>()
</script>

<style scoped>
.title-container {
  align-self: center;
}

.remove-btn {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
}

.remove-btn:hover {
  background-color: black;
  border-radius: 20px;
  color: white;
}
</style>
