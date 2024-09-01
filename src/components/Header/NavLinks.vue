<template>
  <div class="navbar-item is-hidden-mobile">
    <RouterLink
      class="navbar-item"
      :to="link.Link"
      v-for="(link, idx) in navLinks"
      :key="idx"
    >
      {{ link.name }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: 'Home',
    Link: '/',
  },
  {
    name: 'Products',
    Link: '/products',
  },
  {
    name: 'Contact',
    Link: '/contact',
  },
]
</script>
<style lang="scss">
.navbar-item {
  background-color: white;
}
</style>
