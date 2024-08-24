<script setup lang="ts">
import { ref } from 'vue'

// components
import MobileMenu from '@/components/Header/MobileMenu.vue'
import NavLinks from '@/components/Header/NavLinks.vue'
import Logo from '@/components/Header/Logo.vue'
import SearchBar from '@/components/Header/SearchBar.vue'
import Profile from '@/components/Header/Profile.vue'
import CartButton from '@/components/Header/CartButton.vue'

// vars
const cart = ref(false)

// functions
const cartState = () => (cart.value = !cart.value)
</script>

<template>
  <div>
    <nav class="navbar">
      <MobileMenu />
      <div class="navbar-group">
        <Logo />
        <NavLinks />
      </div>
      <div class="navbar-group">
        <SearchBar />
        <Profile />
        <CartButton @open="cartState" />
      </div>
    </nav>
    <!--User Modal-->
    <!--    <UserModal />-->
    <!--Cart Component-->
    <Cart :is-open="cart" @closeCart="cartState" />
  </div>
</template>

<style lang="scss">
nav {
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
  background-color: #f8f8f8;
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-item {
  a {
    margin-left: 13px;
    font-size: 17px;
    text-decoration: none;
    color: black;
  }

  .bc {
    a:hover,
    a:active {
      color: #ffd700;
    }
  }
}

.close {
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
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  width: 100%;
  height: 50px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  box-shadow:
    0 26px 38px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.user {
  cursor: pointer;
}
</style>
