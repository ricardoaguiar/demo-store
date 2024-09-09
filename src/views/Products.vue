<template>
  <div>
    <BreadCrumbs />
    <PLP />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

// Components
import BreadCrumbs from '@/components/Products/BreadCrumbs.vue'
import PLP from '@/components/Products/PLP.vue'

useHead({
  title: 'Products - Vue Demo Store',
  meta: [
    {
      name: 'description',
      content: 'Explore our wide range of products at Vue Demo Store.',
    },
  ],
  link: [
    { rel: 'canonical', href: 'https://vue-demo-store.pages.dev/products' },
  ],
})
</script>
