<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAsset } from '@/composables'
import { useMainStore } from '@/store'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import NavLinks from '@/components/Header/NavLinks.vue'

const mobileMenu = ref(null)
const menuHeight = ref(0)
const store = useMainStore()

onMounted(() => {
  menuHeight.value = mobileMenu.value.offsetHeight
})
</script>

<template>
  <ButtonComponent class="mobile-menu-button" @click="store.toggleMobileMenu">
    <img
      :src="useAsset('menu', 'svg')"
      width="20"
      height="16"
      alt="mobile-menu"
      title="mobile-menu"
      style="cursor: pointer"
    />
  </ButtonComponent>

  <div role="menu" :class="['mobile-menu', { on: store.isMobileMenuOpen }]">
    <div ref="mobileMenu" class="mobile-menu-title">
      <h1>Menu</h1>
      <ButtonComponent buttonClass="close-menu" @click="store.toggleMobileMenu"
        >&#10006;
      </ButtonComponent>
    </div>
    <NavLinks
      class="nav-links"
      :style="{ '--menu-margin-top': menuHeight + 'px' }"
    />
  </div>
  <div
    :class="['modal-background', store.isMobileMenuOpen ? '' : 'is-hidden']"
    @click="store.toggleMobileMenu"
  ></div>
</template>

<style scoped lang="scss">
.nav-links {
  margin-top: var(--menu-margin-top, 0px);
}

.close-menu {
  top: $spacing-2;
  right: $spacing-3;
  width: $spacing-6;
  height: $spacing-6;
  color: $primary-color;
  position: absolute;
  border-radius: 0;
  text-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  background: transparent;
}

.mobile-menu {
  width: 25rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: rgb(255, 255, 255);
  z-index: 1100;
  transform: translateX(-100%);
  transition: transform 0.4s;

  @include responsive(mobile-small) {
    width: 100%;
  }
}

.mobile-menu.on {
  transform: translateX(0%);
}

.mobile-menu-button {
  height: $font-size-lg;
  padding-left: 0;
}

h1 {
  font-size: 2rem;
}

.mobile-menu-title {
  padding: $spacing-3;
  font-size: $font-size-xs;
  background: $background-color;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

.mobile-menu-links {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}

.mobile-menu-link {
  font-size: 1.5rem;
  padding-block: 0.5rem;
  border-bottom: 1px solid lightgrey;
  padding-inline: 1.5rem;
}
</style>
