<script setup lang="ts">
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'

const store = useMainStore()

defineEmits(['open'])
</script>

<template>
  <div class="bag" @click="$emit('open')">
    <img :src="useAsset('cart', 'svg')" alt="move-by-trolley" title="cart-trolley" class="image" width="25"
      height="25" />
    <span class="badge is-badge-danger is-badge-top-right" v-if="store.itemsNumber">{{ store.itemsNumber }}</span>
  </div>
</template>

<style scoped lang="scss">
.bag {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  .image {
    min-width: 25px;
    min-height: 25px;
  }

  .badge {
    background-color: #000000;
    color: white;
    border-radius: 50%;
    font-size: 10px;
    line-height: 1;
    font-weight: bold;
    padding: 4px;
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
