<script setup lang="ts">
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'

const store = useMainStore()

defineEmits(['open'])
</script>

<template>
  <div class="bag" @click="$emit('open')">
    <img
      :src="useAsset('cart', 'svg')"
      alt="move-by-trolley"
      title="cart-trolley"
      class="image"
      width="25"
      height="25"
    />
    <span class="badge is-badge-danger" v-if="store.itemsNumber">{{
      store.itemsNumber
    }}</span>
  </div>
</template>

<style scoped lang="scss">
.bag {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .image {
    cursor: pointer;
    min-width: 25px;
    min-height: 25px;
  }

  .badge {
    background-color: #6394f8;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    line-height: 1;
    padding: 2px 5px;
    position: absolute;
    top: -5px;
    right: -5px;
    min-width: 18px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }
}
</style>
