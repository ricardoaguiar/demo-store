<script setup lang="ts">
import { useAsset } from '@/composables'
</script>

<template>
  <router-link to="/" class="logo">
    <img
      :src="useAsset('fi-logo.svg')"
      width="40"
      height="40"
      alt="site-logo"
      title="site-logo"
    />
  </router-link>
</template>

<style scoped lang="scss">
.logo {
  @include responsive(mobile, max) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  & {
    display: flex;
    width: 2rem;
    height: 2rem;
  }
}
</style>
