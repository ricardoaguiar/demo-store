<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useMainStore } from '@/store'
import RelatedProducts from '@/components/Products/RelatedProducts.vue'
// import Notification from '@/components/Notification.vue'

const store = useMainStore()

onMounted(async () => {
  await store.fetchProducts()
})

const products = computed(() => store.products)
// const loading = computed(() => store.loading)
</script>

<template>
  <section class="product-page__container">
    <RelatedProducts v-if="products.length > 0" class="product-page" />
    <!--    <Notification v-if="loading" class="my-5 py-5 has-text-centered">-->
    <!--      <h4>Loading...</h4>-->
    <!--    </Notification>-->
    <!--    <Notification v-else class="my-5 py-5 has-text-centered">-->
    <!--      <h4>Sorry, we can't find any product with these features</h4>-->
    <!--    </Notification>-->
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
