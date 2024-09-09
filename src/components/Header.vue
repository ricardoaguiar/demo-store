<script setup lang="ts">
import { ref } from 'vue'

// components
import MobileMenu from '@/components/Header/MobileMenu.vue'
import NavLinks from '@/components/Header/NavLinks.vue'
import Logo from '@/components/Header/Logo.vue'
import SearchBar from '@/components/Header/SearchBar.vue'
import Profile from '@/components/Header/Profile.vue'
import CartButton from '@/components/Header/BasketButton.vue'
import UserModal from '@/components/Header/UserModal.vue'
import Basket from '@/components/Header/Basket.vue' // Assuming Cart component is imported

// Reactive cart state
const cart = ref(false)

// Toggle cart state
const cartState = () => (cart.value = !cart.value)
</script>

<template>
  <div>
    <nav
      class="navbar is-flex is-align-items-center is-justify-content-space-between"
    >
      <MobileMenu />
      <div class="navbar-group is-flex is-align-items-center">
        <Logo class="logo" />
        <NavLinks class="nav-links" />
      </div>
      <div class="navbar-group is-flex is-align-items-center">
        <SearchBar />
        <!--        <Profile />-->
        <CartButton @open="cartState" />
      </div>
    </nav>
    <UserModal />
    <Basket :is-open="cart" @closeCart="cartState" />
  </div>
</template>

<style scoped>
.navbar {
  padding: 1rem;
  z-index: 100;
}

.navbar-group {
  gap: 1rem;
}
@media only screen and (max-width: 1023px) {
  .nav-links {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .navbar {
    position: sticky;
    top: 0;
  }
  .navbar-group {
    margin-block: 0.75rem;
  }
}
</style>
