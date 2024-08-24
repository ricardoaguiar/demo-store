<template>
  <div>
    <!--        <BreadCrumbs />-->
    <!--        <Grid />-->
    products
  </div>
</template>

<script setup lang="ts">
import Grid from '@/components/Products/Grid.vue'
import BreadCrumbs from '@/components/Products/BreadCrumbs.vue'

definePageMeta({
  title: 'Products',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://vue-ecom.vercel.app/products' }],
})
</script>
