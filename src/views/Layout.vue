<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue' // Assuming you have a header component
import Footer from '@/components/Footer.vue'
import Newsletter from '@/components/Newsletter.vue' // Assuming you have a footer component

const route = useRoute()
</script>

<template>
  <div>
    <!-- Persistent Header -->
    <Header />

    <!-- Main content where different views will be injected -->
    <main>
      <router-view />
    </main>

    <!-- Optional Newsletter section based on route -->
    <Newsletter v-if="route.path !== '/contact'" />

    <!-- Persistent Footer -->
    <Footer />
  </div>
</template>
