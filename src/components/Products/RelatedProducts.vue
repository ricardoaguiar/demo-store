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

/* Card Style */
.card {
  transition: 300ms;
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;

  //@include space(margin, 0.5, 14px);

  .image img {
    z-index: 1;
    transition: filter 0.3s ease-in-out;
  }

  .button {
    width: 140px;
    margin-bottom: 10px;
    border-radius: 0.25rem;
  }

  //@include responsive(desktop) {
  &:hover .image img {
    filter: blur(4px);
  }

  &:hover .overlay {
    opacity: 0.8;
  }

  //}

  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(35, 43, 52, 0.7);
    opacity: 0;
    z-index: 2;
    transition: opacity 0.3s ease-in-out;
    top: 0;
    left: 0;
  }

  &:hover,
  &:active {
    transform: scale(1.02);
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.25),
      0 0 40px rgba(0, 0, 0, 0.22);
  }
}
</style>
