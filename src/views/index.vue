<template>
  <main>
    <Carousel />
    <AboutUs />
  </main>
</template>

<script setup lang="ts">
import Carousel from '@/components/Home/Carousel.vue'
import AboutUs from '@/components/Home/AboutUs.vue'

definePageMeta({
  title: 'Home',
})
</script>
