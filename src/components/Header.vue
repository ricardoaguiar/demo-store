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
  <header class="header">
    <nav
      class="navbar is-flex is-align-items-center is-justify-content-space-between"
    >
      <MobileMenu />
      <div class="navbar-group left-side is-flex is-align-items-center">
        <Logo class="logo" />
        <NavLinks class="nav-links" />
      </div>
      <div class="navbar-group right-side is-flex is-align-items-center">
        <SearchBar />
        <!--        <Profile />-->
        <CartButton @open="cartState" />
      </div>
    </nav>
    <UserModal />
    <Basket :is-open="cart" @closeCart="cartState" />
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #ffffff;
  @include space(padding-block, $half-spacing, $one-spacing);
}

.nav-links {
  @include responsive(tablet) {
    display: none;
  }
  gap: 1rem;
}

.navbar-group {
  gap: 1rem;
  justify-content: space-between;
}

.right-side {
  @include space(margin-right, $one-spacing, $one-spacing);
}
</style>
