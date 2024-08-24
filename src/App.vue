<script setup lang="ts">
import Layout from '@/views/Layout.vue'
import Carousel from '@/components/Home/Carousel.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
</script>

<template>
  <router-view />
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
