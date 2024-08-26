<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useAsset } from '@/composables/useAsset'
import { useRoute } from 'vue-router'

const route = useRoute()

useHead({
  title: 'V-Store',
  meta: [
    {
      property: 'og:title',
      content: `V-Store - ${route.meta.title || 'Not set'}`,
    },
    { property: 'og:image', content: useAsset('jump1', 'jpg') },
  ],
  link: [
    {
      rel: 'canonical',
      href: import.meta.env.BASE_URL || 'https://localhost:3000',
    },
    { rel: 'icon', type: 'image/x-icon', href: '/fi.ico' },
  ],
  htmlAttrs: { lang: 'en-US' },
})
</script>

<template>
  <Header />
  <slot />
  <router-view />
  <Footer />
</template>

<style>
#app {
  background-color: #f8f8f8 !important;
  font-family: 'Exo 2', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
