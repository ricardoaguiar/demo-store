<script lang="ts" setup>
import { useRoute } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import Newsletter from '@/components/Newsletter.vue'

const route = useRoute()
</script>

<template>
  <div :key="route.fullPath" class="wrapper">
    <HeaderComponent />

    <main>
      <router-view />
    </main>

    <Newsletter v-if="route.path !== '/contact'" />
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
