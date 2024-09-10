<script setup lang="ts">
import { useMainStore } from '@/store'
import Item from '@/components/Cart/Item.vue'
import Notification from '@/components/Notification.vue'
import Total from '@/components/Cart/Total.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const store = useMainStore()
const router = useRouter()

const cart = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

// function handleChekout(item: Product) {
//   for (let i = 0; i < quantity.value; i++) {
//     store.inCart(item)
//   }
// }

function handleCheckout() {
  // Capture the current cart items
  const purchasedItems = store.cartItems.map((item) => ({
    ...item,
    quantity: item.quantity,
  }))

  store.handleCheckout(purchasedItems)

  // Empty the cart
  store.cartItems = []
  store.updateLocalStorage()

  // Redirect to the thank you page with purchased items
  router.push({ name: 'ThankYou' })
}

function handleRemoveItem(itemId: number) {
  store.outCart(itemId)
}
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
            <p>Quantity: {{ item.quantity }}</p>
            <!-- Display quantity -->
            <p>Subtotal: ${{ item.price * item.quantity }}</p>
            <!-- Display total price for the item -->
            <button @click="store.inCart(item)">+</button>
            <button @click="handleRemoveItem(item.id)">-</button>
            <!-- Decrease quantity by 1 or remove -->
          </div>
        </div>
        <div v-if="store.itemsNumber">
          <hr />
          <Total />
        </div>
        <ButtonComponent
          v-if="store.cartItems.length > 0"
          buttonText="finish checkout"
          :class="'checkout-button'"
          @click="handleCheckout"
        />

        <ButtonComponent
          v-if="store.cartItems.length === 0"
          buttonText="Go Shopping"
          :routerLink="`/products`"
          buttonClass="empty-basket__go-shopping"
        />
      </div>
    </div>
    <div
      :class="['modal-background', cart.isOpen ? '' : 'is-hidden']"
      @click="$emit('closeCart')"
    ></div>
  </div>
</template>

<style scoped>
.empty-basket__go-shopping {
  &:deep(button) {
    display: block;
    width: 100%;
    background: black;
    color: white;
  }
}

.checkout-button {
  padding: 1rem 1.5rem;
  width: 100%;
  font-size: 1rem;
  background: rgb(125, 207, 133);
}

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
