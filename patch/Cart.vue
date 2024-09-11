<script setup lang="ts">
import { useMainStore } from '@/store'
import Item from '@/components/Cart/Item.vue'
import Notification from '@/components/Notification.vue'
import CartButton from '@/components/Header/CartButton.vue'
import Total from '@/components/Cart/Total.vue'

const store = useMainStore()

const cart = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <div :class="['cart', cart.isOpen ? 'on' : '']">
      <div class="cart-menu">
        <p class="has-text-centered mt-4 pb-2 is-size-3">Cart</p>
        <hr />
        <Notification v-if="!store.itemsNumber">
          Your cart is empty, try to add some items.
        </Notification>
        <div
          class="cart-container is-mobile"
          v-for="item in store.cartItems"
          :key="item.id"
        >
          <div class="cart-item column is-full">
            <Item :item="item" />
          </div>
        </div>
        <div v-if="store.itemsNumber">
          <hr />
          <Total />
        </div>
      </div>
    </div>
    <div
      :class="['modal-background', cart.isOpen ? '' : 'is-hidden']"
      @click="$emit('closeCart')"
    >
      <CartButton />
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  position: relative;
}

.cart-item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  position: relative;
}
/* Modal Overlay */
.modal-background {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.5s;
}

.is-hidden {
  display: none;
}

/* Cart Body */
.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #ffffff;
  overflow-y: auto;
  z-index: 1051;
  transform: translateX(360px);
  transition: transform 0.4s;
}

.cart.on {
  transform: translateX(0);
}

.cart-menu {
  color: black;
  padding: 1rem;
}

hr {
  border-color: black;
}

.columns {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
