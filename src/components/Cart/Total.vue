<template>
  <div class="columns is-align-items-center p-2" style="background: #7dcf85">
    <div class="column pl-3 pt-3">
      <h4 class="title is-4">Total</h4>
      <p class="is-size-6 px-3" style="color: #303e49; margin-top: -8px">
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
