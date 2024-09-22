<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store'

// components
import Item from '@/components/Cart/Item.vue'
import Notification from '@/components/Notification.vue'
import Total from '@/components/Cart/Total.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

// variables
const store = useMainStore()
const router = useRouter()

// functions
function handleCheckout(): void {
  const purchasedItems = store.cartItems.map((item) => ({
    ...item,
    quantity: item.quantity,
  }))
  store.handleCheckout(purchasedItems)
  store.cartItems = []
  store.updateLocalStorage()
  router.push({ name: 'ThankYou' })
  store.toggleCart()
}

function goShopping(): void {
  router.push({ path: '/products' })
  store.toggleCart()
}
</script>

<template>
  <div :class="['cart', store.isCartOpen ? 'on' : '']">
    <div class="cart-title">
      <ButtonComponent buttonClass="close-basket" @click="store.toggleCart()"
        >&#10006;</ButtonComponent
      >
      <h2 class="has-text-centered is-size-3">Cart</h2>
    </div>
    <div class="cart-items">
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

      <Total v-if="store.itemsNumber" />

      <ButtonComponent
        v-if="store.cartItems.length > 0"
        buttonText="finish checkout"
        buttonClass="checkout-button"
        @click="handleCheckout"
      />

      <ButtonComponent
        v-if="store.cartItems.length === 0"
        buttonText="Go Shopping"
        buttonClass="empty-basket__go-shopping"
        @click="goShopping"
      />
    </div>
  </div>
  <div
    :class="['modal-background', store.isCartOpen ? '' : 'is-hidden']"
    @click="store.toggleCart()"
  ></div>
</template>

<style scoped lang="scss">
.cart-title {
  border-bottom: 1px solid rgba(211, 211, 211, 0.5);
  background: #1f2229;
  width: 100%;
  color: white;
  padding: 0.5rem 0;
}

.close-basket {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  color: #ffffff;
  background: transparent;
}

.empty-basket__go-shopping {
  display: block;
  width: 100%;
  background: black;
  color: white;
  border-radius: 2px;
  padding: $spacing-base;
}

.checkout-button {
  padding: 1rem 1.5rem;
  width: 100%;
  background: rgb(125, 207, 133);
  font-weight: bold;
  text-transform: uppercase;

  font-size: $font-size-base;
}

.cart-container {
  position: relative;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: $spacing-2;
  margin-bottom: $spacing-2;
}

.cart-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: $spacing-2;
  position: relative;
}

/* Cart Body */
.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 25rem;
  height: 100%;
  background: #ffffff;
  overflow-y: auto;
  z-index: 1500;
  transform: translateX(100%);
  transition: transform 0.4s;
}

.cart.on {
  transform: translateX(0);

  @include responsive(mobile-small, max) {
    width: 100%;
  }
}

.cart-items {
  color: black;
  padding: 1rem;
}

.columns {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
