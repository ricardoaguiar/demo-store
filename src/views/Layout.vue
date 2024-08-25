<template>
  <div>
    <Header />
    <slot />
    <Newsletter v-if="route.path !== '/contact'" />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useAsset } from '@/composables/useAsset'

// components
import Newsletter from '@/components/Newsletter.vue'

const route = useRoute()

useHead({
  title: 'V-Store',
  meta: [
    {
      property: 'og:title',
      content: `V-Store - ${route.meta.title || 'Not set'}`,
    },
    { property: 'og:image', content: useAsset('jum1.jpg') },
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

<style>
#app {
  background-color: #f8f8f8 !important;
  font-family: 'Exo 2', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2rem auto;
  max-width: 1200px;
  outline: 1px dashed green;
  padding: 1rem;
}
body {
  margin: 0;
  padding: 0;
  background: rgba(211, 211, 211, 0.5);
}
</style>
