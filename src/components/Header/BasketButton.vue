<script setup lang="ts">
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'

const store = useMainStore()
</script>

<template>
  <button class="bag" @click="store.toggleCart()">
    <img
      :src="useAsset('cart', 'svg')"
      alt="move-by-trolley"
      title="cart-trolley"
      class="image"
      width="25"
      height="25"
    />
    <span
      class="badge is-badge-danger is-badge-top-right"
      v-if="store.itemsNumber"
      >{{ store.itemsNumber }}</span
    >
  </button>
</template>

<style scoped lang="scss">
.bag {
  @include flex($alignItems: center, $justifyContent: center);
  position: relative;
  cursor: pointer;

  .image {
    min-width: $spacing-6;
    min-height: $spacing-6;
  }

  .badge {
    background-color: $color-black;
    color: $color-white;
    font-weight: $bold;
    font-size: calc($font-size-xl / 2);
    padding: $spacing-1;
    line-height: 1;
    border-radius: 50%;
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
