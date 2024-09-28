<script setup lang="ts">
import { useMainStore } from '@/store'
import ProductTile from '@/components/PDP/ProductTile.vue'

const store = useMainStore()
</script>

<template>
  <div class="related-products">
    <template v-for="product in store.filteredProducts" :key="product.id">
      <ProductTile :product="product" :isRelatedProduct="true" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.related-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-base;

  @include responsive(tablet, max) {
    grid-template-columns: 1fr 1fr;
    gap: $spacing-2;
  }
}
</style>
