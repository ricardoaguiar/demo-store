<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useMainStore } from '@/store'
import RelatedProducts from '@/components/Products/RelatedProducts.vue'

const store = useMainStore()

onMounted(async () => {
  await store.fetchProducts()
})

const products = computed(() => store.products)
</script>

<template>
  <section class="product-page__container">
    <RelatedProducts v-if="products.length > 0" class="product-page" />
  </section>
</template>

<style scoped lang="scss">
.product-page {
  margin-inline: 1rem;

  @include responsive(mobile, max) {
    margin-inline: 0.25rem;
  }
}
</style>
