<script setup lang="ts">
// components
import MobileMenu from '@/components/Header/MobileMenu.vue'
import NavLinks from '@/components/Header/NavLinks.vue'
import Logo from '@/components/Header/Logo.vue'
import SearchBar from '@/components/Header/SearchBar.vue'
import BasketButton from '@/components/Header/BasketButton.vue'
import UserModal from '@/components/Header/UserModal.vue'
import Basket from '@/components/Header/Basket.vue'
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
        <BasketButton />
      </div>
    </nav>
    <UserModal />
    <Basket />
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #ffffff;
  //@include
  // (padding-block, $half-spacing, $one-spacing);
}

.nav-links {
  gap: 1rem;

  @include responsive(tablet) {
    display: none;
  }
}

.navbar-group {
  gap: 1rem;
  justify-content: space-between;
}

.right-side {
  @include space(margin-right, $one-spacing, $one-spacing);
}
</style>
