<template>
  <div class="column is-4">
    <img
      :src="item.img"
      class="image is-96x96"
      alt="cart-item"
      title="cart-item"
    />
  </div>
  <div class="column is-6">
    <h4 class="title is-4">{{ item.title }}</h4>
    <h6 class="subtitle is-6">${{ item.price }}</h6>
  </div>
  <div class="column is-2 pt-4">
    <span class="remove-btn" @click="store.outCart(item.id!)">remove</span>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types'
import { useMainStore } from '@/store'

const store = useMainStore()

defineProps<{
  item: Product
}>()
</script>

<style scoped>
.remove-btn {
  border-radius: 50%;
  background-image: url('@/assets/img/multiply.png');
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
}
</style>
