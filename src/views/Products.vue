<template>
  <div>
    <BreadCrumbs />
    <Grid />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

// components
import BreadCrumbs from '@/components/Products/BreadCrumbs.vue'
import Grid from '@/components/Products/Grid.vue'

useHead({
  link: [
    { rel: 'canonical', href: 'https://vue-demo-store.pages.dev/products' },
  ],
})
</script>
