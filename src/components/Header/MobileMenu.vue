<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAsset } from '@/composables/useAsset'
</script>

<template>
  <div class="dropdown is-hidden-desktop is-pulled-left">
    <img
      :src="useAsset('menu', 'svg')"
      width="28"
      height="28"
      data-bs-toggle="dropdown"
      data-bs-target="#navd"
      aria-haspopup="true"
      aria-expanded="false"
      alt="mobile-menu"
      title="mobile-menu"
    />
    <div class="dropdown-menu hb" aria-labelledby="navd">
      <router-link class="dropdown-item" to="/">Home</router-link>
      <router-link class="dropdown-item" to="/Products">Products</router-link>
      <router-link class="dropdown-item" to="/Contact">Contact us</router-link>
    </div>
  </div>
</template>
