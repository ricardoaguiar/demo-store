<script setup lang="ts">
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import { ref } from 'vue'

const props = defineProps<{
  item: Object
}>()

const store = useMainStore()
const quantity = ref(props.item.quantity)

function updateQuantity(newQuantity: number): void {
  quantity.value = newQuantity
  props.item.quantity = newQuantity
  store.updateLocalStorage()
}

function handleClick(actionType: string) {
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
    <span class="remove-btn" @click="store.outCart(item.id!)">&#10006;</span>
  </div>
</template>

<style scoped lang="scss">
.cart-img {
  width: 100%;
}

.product-title {
  font-size: $font-size-base;
  & {
    font-weight: $bold;
  }
}

.product-price {
  font-size: $font-size-lg;
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

.remove-btn {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
}

.remove-btn:hover {
  background-color: $color-black;
  color: $color-white;
  border-radius: $spacing-5;
}

.counter-container {
  @include flex($alignItems: center, $alignSelf: flex-start);

  font-size: $font-size-base;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: fit-content;
  line-height: normal;
  .button {
    padding-bottom: 0.2rem;
  }
}
</style>
