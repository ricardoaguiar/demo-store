<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="dropdown is-hidden-desktop is-pulled-left">
    <img
      src="https://img.icons8.com/office/35/menu--v1.png"
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
      <RouterLink class="dropdown-item" to="/">Home</RouterLink>
      <RouterLink class="dropdown-item" to="/Products">Products</RouterLink>
      <!--      <RouterLink class="dropdown-item" to="/Contact">Contact us</RouterLink>-->
    </div>
  </div>
</template>
