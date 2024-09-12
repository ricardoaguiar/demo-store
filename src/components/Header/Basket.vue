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
const emit = defineEmits(['closeCart'])

//  props
const cart = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

// functions
function handleCheckout() {
  const purchasedItems = store.cartItems.map((item) => ({
    ...item,
    quantity: item.quantity,
  }))
  store.handleCheckout(purchasedItems)
  store.cartItems = []
  store.updateLocalStorage()
  router.push({ name: 'ThankYou' })
}

function goShopping() {
  router.push({ path: '/products' })
  emit('closeCart')
}
</script>

<template>
  <div>
    <div :class="['cart', cart.isOpen ? 'on' : '']">
      <!--      <div class="remove-btn-container column p-0">-->
      <div class="cart-title">
        <ButtonComponent buttonClass="close-basket" @click="$emit('closeCart')"
          >&#10006;</ButtonComponent
        >
        <h2 class="has-text-centered is-size-3">Cart</h2>
      </div>
      <!--      </div>-->
      <div class="cart-menu">
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
        <ButtonComponent
          v-if="store.cartItems.length > 0"
          buttonText="finish checkout"
          :class="'checkout-button'"
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
      :class="['modal-background', cart.isOpen ? '' : 'is-hidden']"
      @click="$emit('closeCart')"
    ></div>
  </div>
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
  color: white;
  background: transparent;

  &:hover {
    background-color: white;
    border-radius: 20px;
    color: black;
  }
}

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
  width: 100%;
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
  width: 25rem;
  height: 100%;
  background: #ffffff;
  overflow-y: auto;
  z-index: 1051;
  transform: translateX(100%);
  transition: transform 0.4s;
}

.cart.on {
  transform: translateX(0);

  @include responsive(mobile) {
    width: 100%;
  }
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
