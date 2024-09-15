<template>
  <div class="total columns is-align-items-center p-2">
    <div class="column pt-3">
      <h4 class="title is-4 mb-1">Total</h4>
      <p class="is-size-6">
        {{ `(${store.itemsNumber} items)` }}
      </p>
    </div>
    <div class="column has-text-centered pr-3">
      <h4 class="title is-4">${{ store.totalPrice }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'

const store = useMainStore()
</script>

<style scoped>
.total {
  width: 100%;
  margin-inline: auto;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
