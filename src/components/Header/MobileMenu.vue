<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAsset } from '@/composables'
import { ref } from 'vue'

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    class="dropdown is-hidden-desktop is-pulled-left"
    :class="{ 'is-active': isOpen }"
  >
    <img
      :src="useAsset('menu', 'svg')"
      width="28"
      height="28"
      @click="toggleDropdown"
      alt="mobile-menu"
      title="mobile-menu"
      style="cursor: pointer"
    />
    <div class="dropdown-menu" role="menu">
      <router-link class="dropdown-item" to="/">Home</router-link>
      <router-link class="dropdown-item" to="/products">Products</router-link>
      <router-link class="dropdown-item" to="/contact">Contact us</router-link>
    </div>
  </div>
</template>

<style scoped>
.dropdown.is-active .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
}
</style>
