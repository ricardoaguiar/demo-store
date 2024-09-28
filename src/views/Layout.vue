<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Newsletter from '@/components/Newsletter.vue'

const route = useRoute()
</script>

<template>
  <div class="wrapper" :key="route.fullPath">
    <Header />

    <main>
      <router-view />
    </main>

    <Newsletter v-if="route.path !== '/contact'" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
