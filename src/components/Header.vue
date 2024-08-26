<script setup lang="ts">
import { ref } from 'vue'

// components
import MobileMenu from '@/components/Header/MobileMenu.vue'
import NavLinks from '@/components/Header/NavLinks.vue'
import Logo from '@/components/Header/Logo.vue'
import SearchBar from '@/components/Header/SearchBar.vue'
import Profile from '@/components/Header/Profile.vue'
import CartButton from '@/components/Header/CartButton.vue'
import UserModal from '@/components/Header/UserModal.vue'

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
        <Logo />
        <NavLinks />
      </div>
      <div class="navbar-group is-flex is-align-items-center">
        <SearchBar />
        <Profile />
        <CartButton @open="cartState" />
      </div>
    </nav>
    <!--User Modal-->
    <UserModal />
    <!--Cart Component-->
    <Cart :is-open="cart" @closeCart="cartState" />
  </div>
</template>

<style scoped>
nav {
  z-index: 100;
}

.navbar {
  padding: 1rem;
}

.navbar-group {
  gap: 1rem;
}

.navbar-item a {
  margin-left: 13px;
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.navbar-item .bc a:hover,
.navbar-item .bc a:active {
  color: #ffd700;
}

/*.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}

.btn-sm {
  border-radius: 0;
}

form .btn-xl.btn-success.mt-3 {
  position: relative;
  transition-duration: 100ms;
  width: 100%;
  height: 50px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  box-shadow:
    0 26px 38px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}*/
</style>
