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
        <p class="text-center mt-4 pb-2 h3">Cart</p>
        <hr />
        <Notification v-if="!store.itemsNumber">
          Your cart is empty, try to Add stuff.
        </Notification>
        <div class="row" v-for="item in store.cartItems" :key="item.id">
          <Item :item="item" />
        </div>
        <div v-if="store.itemsNumber">
          <hr />
          <Total />
        </div>
      </div>
    </div>
    <div
      :class="['modal', cart.isOpen ? '' : 'off']"
      @click="$emit('closeCart')"
    >
      <CartButton />
    </div>
  </div>
</template>

<style scoped>
/* Modal Overlay */
.modal {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.modal.off {
  display: none;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Cart Body */
.cart {
  position: fixed;
  margin-right: 0;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #303e49;
  overflow-y: auto;
  z-index: 1051;
  -webkit-overflow-scrolling: touch;
  transform: translateX(360px);
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart.on {
  transform: translateX(0);
  -webkit-overflow-scrolling: touch;
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart-menu {
  color: #eee;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
  border-color: white;
}

.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
