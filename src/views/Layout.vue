<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue' // Assuming you have a header component
import Footer from '@/components/Footer.vue'
import Newsletter from '@/components/Newsletter.vue' // Assuming you have a footer component

const route = useRoute()
</script>

<template>
  <div class="wrapper">
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
  @include space(padding-inline, $one-spacing, $one-spacing);

  width: 100vw;
}
</style>
