<script setup lang="ts">
// components
import MobileMenu from '@/components/Header/MobileMenu.vue'
import NavLinks from '@/components/Header/NavLinks.vue'
import Logo from '@/components/Header/Logo.vue'
import BasketButton from '@/components/Header/BasketButton.vue'
import Basket from '@/components/Header/Basket.vue'

defineProps<{
  isHeaderNavigation?: boolean
}>()
</script>

<template>
  <header class="header">
    <nav
      class="navbar is-flex is-align-items-center is-justify-content-space-between"
    >
      <div class="navbar-group left-side is-flex is-align-items-center">
        <MobileMenu />
        <Logo class="logo" />
        <NavLinks :isHeaderNavigation="true" />
      </div>
      <div class="navbar-group right-side is-flex is-align-items-center">
        <BasketButton />
      </div>
    </nav>
    <Basket />
  </header>
</template>

<style scoped lang="scss">
.header {
  margin: 0 auto;
  padding-inline: $spacing-8;
  width: 100%;
}

.navbar-group {
  column-gap: $spacing-base;
}

.navbar-group {
  &:deep(.mobile-menu-button) {
    @include responsive(tablet-min, min) {
      display: none;
    }
  }
}
</style>
