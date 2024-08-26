<script setup lang="ts">
import Carousel from '@/components/Home/Carousel.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import Newsletter from '@/components/Newsletter.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <main>
    <Carousel />
    <AboutUs />
    <Newsletter v-if="route.path !== '/contact'" />
  </main>
</template>
