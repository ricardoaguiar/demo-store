<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'

// types
import type { CartItems } from '@/types'

// components
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

const props = defineProps<{
  item: CartItems
}>()

const store = useMainStore()
const quantity = ref(props.item.quantity)

function updateQuantity(newQuantity: number): void {
  quantity.value = newQuantity
  props.item.quantity = newQuantity
  store.updateLocalStorage()
}

function handleClick(actionType: string): void {
  switch (actionType) {
    case 'increment':
      if (quantity.value < 9) {
        updateQuantity(quantity.value + 1)
      }
      break

    case 'decrement':
      if (quantity.value > 1) {
        updateQuantity(quantity.value - 1)
      }
      break
  }
}
</script>

<template>
  <div class="column p-0">
    <img
      :src="useAsset(item.img)"
      class="cart-img"
      alt="cart-item"
      title="cart-item"
    />
  </div>
  <div class="title-container column p-0 m-0">
    <h4 class="product-title">{{ item.title }}</h4>
    <h6 class="product-price">${{ item.price }}</h6>
    <p>Quantity: {{ item.quantity }}</p>
    <p>Subtotal: ${{ item.price * item.quantity }}</p>

    <div class="counter-container has-text-centered">
      <ButtonComponent
        actionType="decrement"
        :quantity="quantity"
        @click="handleClick('decrement')"
        buttonClass="button update-quantity"
        buttonText="−"
      />
      <span>{{ item.quantity }}</span>
      <ButtonComponent
        actionType="increment"
        :quantity="quantity"
        @click="handleClick('increment')"
        buttonClass="button update-quantity"
        buttonText="+"
      />
    </div>
  </div>

  <div class="remove-btn-container column p-0">
    <span class="remove-button" @click="store.outCart(item.id!)">&#10006;</span>
  </div>
</template>

<style scoped lang="scss">
.cart-img {
  width: 100%;
}

.title-container {
  @include flex(
    $direction: column,
    $justifyContent: flex-start,
    $alignItems: flex-start,
    $alignSelf: center,
    $gap: $spacing-1
  );
}

.product-title {
  font-size: $font-size-xl;
  & {
    font-weight: $bold;
  }
}

.product-price {
  font-size: $font-size-base;
  letter-spacing: 0.02rem;
}

.counter-container {
  @include flex($alignItems: center, $alignSelf: flex-start);
  font-size: $font-size-base;
  font-weight: $bold;
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: fit-content;
  line-height: normal;

  .button {
    padding-bottom: 0.2rem;
  }
}

.update-quantity {
  border: none;
}

.remove-button {
  width: $spacing-6;
  height: $spacing-6;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
}

.remove-button:hover {
  background-color: $color-black;
  color: $color-white;
  border-radius: $spacing-5;
}
</style>
