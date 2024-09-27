<script setup lang="ts">
import { useAsset } from '@/composables'
import { useMainStore } from '@/store'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import NavLinks from '@/components/Header/NavLinks.vue'

const store = useMainStore()
</script>

<template>
  <ButtonComponent class="mobile-menu-button" @click="store.toggleMobileMenu">
    <img
      :src="useAsset('menu', 'svg')"
      width="20"
      height="16"
      alt="mobile-menu"
      title="mobile-menu"
    />
  </ButtonComponent>

  <div role="menu" :class="['mobile-menu', { on: store.isMobileMenuOpen }]">
    <div class="mobile-menu-title">
      <h1>Menu</h1>
      <ButtonComponent buttonClass="close-menu" @click="store.toggleMobileMenu"
        >&#10006;
      </ButtonComponent>
    </div>
    <NavLinks class="nav-links" />
  </div>
  <div
    :class="['modal-background', store.isMobileMenuOpen ? '' : 'is-hidden']"
    @click="store.toggleMobileMenu"
  ></div>
</template>

<style scoped lang="scss">
.mobile-menu-button {
  height: $font-size-lg;
  padding-left: 0;
  border: none;
}

.mobile-menu {
  width: 25rem;
  position: fixed;
  cursor: pointer;
  top: 0;
  left: 0;
  height: 100vh;
  background: rgb(255, 255, 255);
  z-index: 75;
  transform: translateX(-100%);
  transition: transform 0.4s;

  @include responsive(mobile-small) {
    width: 100%;
  }
}

.mobile-menu.on {
  transform: translateX(0%);
}

.mobile-menu-title {
  padding: $spacing-3;
  background: $background-color;
  width: 100%;
  text-align: center;

  h1 {
    font-size: $font-size-3xl;
  }
}

.close-menu {
  top: $spacing-2;
  right: $spacing-3;
  width: $spacing-6;
  height: $spacing-6;
  color: $primary-color;
  position: absolute;
  border-radius: 0;
  border: none;
  text-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  background: transparent;
}
</style>
